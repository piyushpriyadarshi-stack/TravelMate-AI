// ==================================================
// Verification Test Suite: "Use My Current Location" + AI Travel Assistant
// ==================================================

const http = require("http");

function postJson(path, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request(
      {
        hostname: "localhost",
        port: 5000,
        path,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(data)
        },
        timeout: 10000
      },
      (res) => {
        let raw = "";
        res.on("data", (chunk) => (raw += chunk));
        res.on("end", () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(raw) });
          } catch (e) {
            resolve({ status: res.statusCode, raw });
          }
        });
      }
    );
    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request timed out"));
    });
    req.write(data);
    req.end();
  });
}

async function runTests() {
  console.log("==================================================");
  console.log("TESTING: 'Use My Current Location' & AI Travel Assistant");
  console.log("==================================================\n");

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  // --------------------------------------------------
  // 1. Reverse Geocode: Bhubaneswar Coordinates (20.2961, 85.8245)
  // --------------------------------------------------
  console.log("1. Testing Reverse Geocode: Bhubaneswar (20.2961, 85.8245)");
  const resBbi = await postJson("/api/location/reverse-geocode", {
    latitude: 20.2961,
    longitude: 85.8245
  });
  assert(resBbi.status === 200, "Bhubaneswar status is 200");
  assert(resBbi.body.city === "Bhubaneswar", `Bhubaneswar city extracted: "${resBbi.body.city}"`);
  assert(resBbi.body.state === "Odisha", `Bhubaneswar state extracted: "${resBbi.body.state}"`);
  assert(resBbi.body.country === "India", `Bhubaneswar country extracted: "${resBbi.body.country}"`);

  // --------------------------------------------------
  // 2. Reverse Geocode: Goa Coordinates (15.2993, 74.1240)
  // --------------------------------------------------
  console.log("\n2. Testing Reverse Geocode: Goa (15.2993, 74.1240)");
  const resGoa = await postJson("/api/location/reverse-geocode", {
    latitude: 15.2993,
    longitude: 74.1240
  });
  assert(resGoa.status === 200, "Goa status is 200");
  assert(Boolean(resGoa.body.city), `Goa city extracted: "${resGoa.body.city}"`);
  assert(resGoa.body.state === "Goa", `Goa state extracted: "${resGoa.body.state}"`);
  assert(resGoa.body.country === "India", `Goa country extracted: "${resGoa.body.country}"`);

  // --------------------------------------------------
  // 3. Reverse Geocode: Error Handling for Invalid Coordinates
  // --------------------------------------------------
  console.log("\n3. Testing Reverse Geocode: Invalid Coordinates");
  const resInvalid = await postJson("/api/location/reverse-geocode", {
    latitude: 105.5,
    longitude: 250
  });
  assert(resInvalid.status === 400, "Invalid coords returns 400");
  assert(Boolean(resInvalid.body.error), "Returns error message for invalid coords");

  const resMissing = await postJson("/api/location/reverse-geocode", {});
  assert(resMissing.status === 400, "Missing coords returns 400");

  // --------------------------------------------------
  // 4. AI Travel Assistant Integration with Detected Location
  // User location: "Bhubaneswar, Odisha, India"
  // User request: "I want to go to Goa for 5 days with 5 people."
  // --------------------------------------------------
  console.log("\n4. Testing AI Integration: Detected Location Passed as Origin");
  const detectedLocationString = `${resBbi.body.city}, ${resBbi.body.state}, ${resBbi.body.country}`;
  console.log(`   User Location: "${detectedLocationString}"`);
  console.log('   User Request:  "I want to go to Goa for 5 days with 5 people."');

  const resAiWithLocation = await postJson("/api/ai/travel-assistant", {
    prompt: "I want to go to Goa for 5 days with 5 people.",
    userOrigin: detectedLocationString
  });

  assert(resAiWithLocation.status === 200, "AI Assistant returns status 200");
  assert(resAiWithLocation.body.success === true, "AI extraction succeeded");
  assert(
    resAiWithLocation.body.extracted.origin === detectedLocationString,
    `Origin matched detected location: "${resAiWithLocation.body.extracted.origin}"`
  );
  assert(resAiWithLocation.body.extracted.destination === "Goa", "Destination is Goa");
  assert(resAiWithLocation.body.extracted.durationDays === 5, "Duration is 5 days");
  assert(resAiWithLocation.body.extracted.travelers === 5, "Travelers is 5");
  assert(
    !resAiWithLocation.body.missingInformation.includes("origin"),
    "Origin is NOT flagged as missing information"
  );
  assert(
    resAiWithLocation.body.missingInformation.includes("budget"),
    "Budget is correctly flagged as missing"
  );
  assert(
    resAiWithLocation.body.summary.from === detectedLocationString,
    `Summary from field is: "${resAiWithLocation.body.summary.from}"`
  );

  // --------------------------------------------------
  // 5. Explicit Prompt Origin Overrides Detected Location
  // --------------------------------------------------
  console.log("\n5. Testing AI Integration: Explicit Prompt Origin Overrides Default Origin");
  const resAiOverride = await postJson("/api/ai/travel-assistant", {
    prompt: "I am in Delhi and want to go to Goa for 5 days with 5 people.",
    userOrigin: detectedLocationString
  });
  assert(
    resAiOverride.body.extracted.origin === "Delhi",
    `Explicit origin "Delhi" took precedence over detected origin: "${resAiOverride.body.extracted.origin}"`
  );

  // --------------------------------------------------
  // 6. Stage 4 Standard Regression Test
  // "I am in Bhubaneswar and want to go to Goa for 5 days with 5 people and budget ₹50000."
  // --------------------------------------------------
  console.log("\n6. Testing Regression: Full Stage 4 Prompt");
  const resStage4 = await postJson("/api/ai/travel-assistant", {
    prompt: "I am in Bhubaneswar and want to go to Goa for 5 days with 5 people and budget ₹50000."
  });
  assert(resStage4.body.extracted.origin === "Bhubaneswar", "Origin is Bhubaneswar");
  assert(resStage4.body.extracted.destination === "Goa", "Destination is Goa");
  assert(resStage4.body.extracted.durationDays === 5, "Duration is 5 days");
  assert(resStage4.body.extracted.travelers === 5, "Travelers is 5");
  assert(resStage4.body.extracted.budget === 50000, "Budget is 50000");
  assert(resStage4.body.missingInformation.length === 0, "No missing information");

  // --------------------------------------------------
  // Summary
  // --------------------------------------------------
  console.log("\n==================================================");
  console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log("==================================================");

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
