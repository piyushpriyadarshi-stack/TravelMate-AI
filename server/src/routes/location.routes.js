// ==================================================
// TravelMate AI - Location Route
// Reverse Geocoding for "Use My Current Location"
// ==================================================

const express = require("express");
const router = express.Router();
const https = require("https");
const { destinations } = require("../utils/sampleData");

/**
 * Haversine formula to compute great-circle distance between two points in km
 */
function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Fallback closest destination finder from local database
 */
function findClosestLocalDestination(lat, lon) {
  let closest = null;
  let minDistance = Infinity;

  for (const d of destinations) {
    if (typeof d.latitude === "number" && typeof d.longitude === "number") {
      const dist = calculateDistanceKm(lat, lon, d.latitude, d.longitude);
      if (dist < minDistance) {
        minDistance = dist;
        closest = d;
      }
    }
  }

  if (closest) {
    return {
      city: closest.city.split("/")[0].trim(),
      state: closest.state || "",
      country: closest.country || "India"
    };
  }

  return {
    city: "Unknown City",
    state: "",
    country: "India"
  };
}

/**
 * Clean up administrative suffixes from city names
 */
function cleanCityName(raw) {
  if (!raw) return "";
  return raw
    .replace(/\s+(Municipal\s+Corporation|Municipality|M\.Corp\.|District|City|Subdivision)$/i, "")
    .replace(/^(City\s+of)\s+/i, "")
    .trim();
}

/**
 * Call Nominatim OpenStreetMap Reverse Geocoding with strict timeout
 */
async function queryNominatim(lat, lon) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "nominatim.openstreetmap.org",
      path: `/reverse?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&format=json&zoom=10&addressdetails=1`,
      method: "GET",
      headers: {
        "User-Agent": "TravelMate-AI-App/1.0 (contact@travelmate.demo)",
        Accept: "application/json"
      },
      timeout: 4000
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const parsed = JSON.parse(data);
            const addr = parsed.address || {};

            const rawCity =
              addr.city ||
              addr.town ||
              addr.village ||
              addr.municipality ||
              addr.county ||
              addr.state_district ||
              "";

            const city = cleanCityName(rawCity);
            const state = addr.state || addr.region || addr.province || "";
            const country = addr.country || "";

            if (city || state || country) {
              resolve({
                city: city || "Unknown City",
                state,
                country: country || "India"
              });
            } else {
              reject(new Error("No address details returned"));
            }
          } catch (err) {
            reject(err);
          }
        } else {
          reject(new Error(`Nominatim returned status ${res.statusCode}`));
        }
      });
    });

    req.on("error", (err) => reject(err));
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Nominatim request timed out"));
    });

    req.end();
  });
}

/**
 * POST /api/location/reverse-geocode
 * Request: { latitude: number, longitude: number }
 * Response: { city: string, state: string, country: string }
 */
router.post("/reverse-geocode", async (req, res) => {
  try {
    const lat = parseFloat(req.body.latitude);
    const lon = parseFloat(req.body.longitude);

    if (isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      return res.status(400).json({
        error: "Invalid coordinates. Latitude must be between -90 and 90, and longitude between -180 and 180."
      });
    }

    let result = null;

    // 1. Try reverse geocoding via OpenStreetMap Nominatim
    try {
      result = await queryNominatim(lat, lon);
    } catch (apiErr) {
      console.warn("[Location] Nominatim reverse-geocode failed, falling back to local dataset:", apiErr.message);
    }

    // 2. Fallback to local verified destination data if external service fails or returns empty
    if (!result || !result.city || result.city === "Unknown City") {
      result = findClosestLocalDestination(lat, lon);
    }

    return res.status(200).json({
      city: result.city,
      state: result.state,
      country: result.country
    });
  } catch (err) {
    console.error("[Location] Error reverse geocoding:", err);
    return res.status(500).json({
      error: "Reverse geocoding failed. Please enter your starting location manually."
    });
  }
});

module.exports = router;
