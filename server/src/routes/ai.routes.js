// ==================================================
// TravelMate AI - AI Travel Assistant Route
// Stage 4: Gemini Trip Parameter Extraction & Validation
// ==================================================

const express = require("express");
const router = express.Router();
const https = require("https");
const { destinations } = require("../utils/sampleData");

/**
 * Direct call to Google Gemini REST API using node native https
 * Never exposes the GEMINI_API_KEY to the client
 */
async function callGeminiApi(apiKey, prompt, userOrigin = null) {
  return new Promise((resolve, reject) => {
    const systemPrompt = `You are a travel assistant NLP parser. Extract the trip parameters from the user's input into a strictly valid JSON object with these exact keys:
{
  "origin": "string or null (the starting city/location)",
  "destination": "string or null (the target city/destination name)",
  "durationDays": number or null (number of days of the trip as an integer),
  "travelers": number or null (number of people/travelers as an integer),
  "budget": number or null (budget amount as a number, without currency symbols),
  "currency": "INR"
}

Strict Rules:
- Return ONLY the raw valid JSON string.
- Do NOT wrap in markdown code fences or backticks.
- Do NOT include any explanations.
- If an entity is not mentioned or unknown, set its value to null.
- Do NOT attempt to guess or determine GPS coordinates.${userOrigin ? `\n- The user's detected/selected origin is: "${userOrigin}". If the request does not specify an origin, set "origin" to "${userOrigin}".` : ""}`;

    const promptText = userOrigin
      ? `${systemPrompt}\n\nUser request: "${prompt}"\nUser's starting location: "${userOrigin}"`
      : `${systemPrompt}\n\nUser request: "${prompt}"`;

    const requestBody = JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            { text: promptText }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: "application/json"
      }
    });

    const options = {
      hostname: "generativelanguage.googleapis.com",
      path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(requestBody)
      },
      timeout: 10000
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const parsedRes = JSON.parse(data);
            const textContent = parsedRes?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (!textContent) {
              return reject(new Error("Empty response from Gemini"));
            }
            // Strip code fences if returned
            const cleanJson = textContent.replace(/```json/gi, "").replace(/```/g, "").trim();
            const extracted = JSON.parse(cleanJson);
            resolve(extracted);
          } catch (err) {
            reject(new Error(`Failed to parse Gemini output: ${err.message}`));
          }
        } else {
          reject(new Error(`Gemini API returned status ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on("error", (err) => reject(err));
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Gemini API request timed out"));
    });

    req.write(requestBody);
    req.end();
  });
}

/**
 * Deterministic Natural Language Parser Fallback
 * Used when Gemini API is unavailable or GEMINI_API_KEY is not configured
 */
function fallbackRuleExtractor(text, userOrigin = null) {
  const clean = text.trim();
  const lower = clean.toLowerCase();

  let origin = null;
  let destination = null;
  let durationDays = null;
  let travelers = null;
  let budget = null;
  let currency = "INR";

  // 1. Origin extraction: "in <City>", "from <City>", "starting in <City>"
  const originMatch = clean.match(/(?:in|from|starting (?:from|in))\s+([A-Za-z\s]+?)(?=\s+(?:and|to|want|for|with|budget|\.|$))/i);
  if (originMatch && originMatch[1]) {
    origin = originMatch[1].trim();
  } else if (userOrigin) {
    origin = userOrigin;
  }

  // 2. Destination extraction: "to <City>", "visit <City>", "go to <City>"
  const destMatch = clean.match(/(?:want to visit|want to go to|going to|trip to|heading to|explore|visit|to)\s+([A-Za-z\s]+?)(?=\s+(?:for|with|and|in|budget|\.|$))/i);
  if (destMatch && destMatch[1]) {
    let rawDest = destMatch[1].trim();
    rawDest = rawDest.replace(/^(?:visit|go to|travel to|explore)\s+/i, "").trim();
    // Validate if it matches any destination in our dataset
    const matched = destinations.find(
      (d) =>
        d.name.toLowerCase() === rawDest.toLowerCase() ||
        rawDest.toLowerCase().includes(d.name.toLowerCase()) ||
        d.city.toLowerCase().includes(rawDest.toLowerCase())
    );
    if (matched) {
      destination = matched.name;
    } else {
      destination = rawDest;
    }
  }

  // Also check direct destination names in text if not captured
  if (!destination) {
    for (const d of destinations) {
      const regex = new RegExp(`\\b${d.name}\\b`, "i");
      if (regex.test(clean)) {
        destination = d.name;
        break;
      }
    }
  }

  // 3. Duration extraction: "<N> days", "<N> day", "<N> nights"
  const durationMatch = clean.match(/(\d+)\s*(?:days?|nights?)/i);
  if (durationMatch && durationMatch[1]) {
    durationDays = parseInt(durationMatch[1], 10);
  }

  // 4. Travelers extraction: "<N> people", "<N> travelers", "<N> guests", "<N> friends", "<N> persons"
  const travelersMatch = clean.match(/(\d+)\s*(?:people|travelers?|travellers?|guests?|friends?|persons?|adults?)/i);
  if (travelersMatch && travelersMatch[1]) {
    travelers = parseInt(travelersMatch[1], 10);
  } else if (/solo|myself|alone/i.test(lower)) {
    travelers = 1;
  } else if (/couple|two of us/i.test(lower)) {
    travelers = 2;
  }

  // 5. Budget extraction: "₹50000", "₹ 50,000", "budget 50000", "budget of 50000", "50k"
  const budgetMatch = clean.match(/(?:₹|rs\.?|inr|budget\s*(?:of|is|:)?\s*(?:₹|rs\.?|inr)?)\s*([\d,]+(?:\.\d+)?|\d+k)/i);
  if (budgetMatch && budgetMatch[1]) {
    let rawVal = budgetMatch[1].replace(/,/g, "").toLowerCase();
    if (rawVal.endsWith("k")) {
      budget = parseFloat(rawVal.slice(0, -1)) * 1000;
    } else {
      budget = parseFloat(rawVal);
    }
  }

  return {
    origin,
    destination,
    durationDays,
    travelers,
    budget,
    currency
  };
}

/**
 * POST /api/ai/travel-assistant
 * Extracts structured trip parameters using Google Gemini with robust validation
 */
router.post("/travel-assistant", async (req, res) => {
  try {
    const prompt = (req.body.prompt || req.body.query || req.body.message || "").trim();
    const userOrigin = (req.body.userOrigin || req.body.origin || "").trim() || null;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "Please enter your travel request (e.g., 'I am in Bhubaneswar and want to go to Goa for 5 days with 5 people and budget ₹50000.')."
      });
    }

    const apiKey = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : "";
    let extracted = null;
    let source = "GEMINI_AI";
    let isAiAvailable = true;

    // Call Gemini API if key is available
    if (apiKey) {
      try {
        extracted = await callGeminiApi(apiKey, prompt, userOrigin);
      } catch (geminiError) {
        console.warn("[AI Travel Assistant] Gemini call failed, using fallback parser:", geminiError.message);
        isAiAvailable = false;
        source = "FALLBACK_PARSER";
        extracted = fallbackRuleExtractor(prompt, userOrigin);
      }
    } else {
      // No key configured: use fallback parser
      source = "FALLBACK_PARSER";
      extracted = fallbackRuleExtractor(prompt, userOrigin);
    }

    // Sanitize extracted structure
    let origin = extracted?.origin ? String(extracted.origin).trim() : null;
    if (!origin && userOrigin) {
      origin = userOrigin;
    }
    let destination = extracted?.destination ? String(extracted.destination).trim() : null;
    const durationDays = extracted?.durationDays ? parseInt(extracted.durationDays, 10) : null;
    const travelers = extracted?.travelers ? parseInt(extracted.travelers, 10) : null;
    const budget = extracted?.budget ? parseFloat(extracted.budget) : null;
    const currency = extracted?.currency || "INR";

    // 1. Destination Existence Check against verified Database
    // Strictly do NOT let Gemini invent or create destinations!
    let matchedDestination = null;
    let destinationExists = false;

    if (destination) {
      matchedDestination = destinations.find(
        (d) =>
          d.name.toLowerCase() === destination.toLowerCase() ||
          destination.toLowerCase().includes(d.name.toLowerCase()) ||
          d.city.toLowerCase().includes(destination.toLowerCase())
      );

      if (matchedDestination) {
        destinationExists = true;
        destination = matchedDestination.name; // Normalize to exact canonical database name
      }
    }

    // 2. Identify Missing Information (Requirement 9)
    const missingInformation = [];
    if (!origin) missingInformation.push("origin");
    if (!destination) missingInformation.push("destination");
    if (!durationDays || isNaN(durationDays)) missingInformation.push("dates/duration");
    if (!travelers || isNaN(travelers)) missingInformation.push("travelers");
    if (!budget || isNaN(budget)) missingInformation.push("budget");

    // If destination was extracted but does NOT exist in verified database
    if (destination && !destinationExists) {
      return res.status(200).json({
        success: false,
        destinationExists: false,
        source,
        isAiAvailable,
        error: `Destination "${destination}" was not found in our verified database. We only offer trips to our 39 verified destinations.`,
        extracted: {
          origin,
          destination,
          durationDays,
          travelers,
          budget,
          currency
        },
        missingInformation
      });
    }

    // Build user-friendly summary (Requirement 10)
    const summary = {
      from: origin || "Not specified",
      to: destination || "Not specified",
      duration: durationDays ? `${durationDays} days` : "Not specified",
      travelers: travelers ? `${travelers}` : "Not specified",
      budget: budget ? `₹${Number(budget).toLocaleString("en-IN")}` : "Not specified"
    };

    return res.status(200).json({
      success: true,
      destinationExists: Boolean(destinationExists),
      source,
      isAiAvailable,
      extracted: {
        origin,
        destination,
        destinationId: matchedDestination ? matchedDestination.id : null,
        durationDays,
        travelers,
        budget,
        currency
      },
      destinationData: matchedDestination
        ? {
            id: matchedDestination.id,
            name: matchedDestination.name,
            city: matchedDestination.city,
            country: matchedDestination.country,
            imageUrl: matchedDestination.imageUrl,
            shortDescription: matchedDestination.shortDescription
          }
        : null,
      missingInformation,
      summary,
      message: "Here's what I understood"
    });
  } catch (err) {
    console.error("[AI Travel Assistant] Error processing request:", err);
    return res.status(500).json({
      success: false,
      error: "AI assistant is temporarily unavailable. You can plan your trip manually."
    });
  }
});

module.exports = router;
