const http = require('http');

function postApi(path, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request({
      hostname: 'localhost',
      port: 5000,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      },
      timeout: 5000
    }, (res) => {
      let responseBody = '';
      res.on('data', chunk => responseBody += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(responseBody) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: responseBody });
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error("Request timeout"));
    });
    req.write(data);
    req.end();
  });
}

async function runStage4Tests() {
  console.log("==================================================");
  console.log("RUNNING STAGE 4 — GEMINI TRIP INPUT VERIFICATION");
  console.log("==================================================\n");

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✓ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ✗ FAIL: ${message}`);
      failed++;
    }
  }

  // TEST 1: User prompt extraction test (Requirement 22)
  console.log("TEST 1: Exact Required Prompt Extraction (Requirement 22)");
  const prompt1 = "I am in Bhubaneswar and want to go to Goa for 5 days with 5 people and budget ₹50000.";
  const res1 = await postApi("/api/ai/travel-assistant", { prompt: prompt1 });

  assert(res1.status === 200, `Status is 200 OK (Got ${res1.status})`);
  assert(res1.body?.success === true, "Response success is true");
  assert(res1.body?.extracted?.origin === "Bhubaneswar", `origin === "Bhubaneswar" (Got: "${res1.body?.extracted?.origin}")`);
  assert(res1.body?.extracted?.destination === "Goa", `destination === "Goa" (Got: "${res1.body?.extracted?.destination}")`);
  assert(res1.body?.extracted?.durationDays === 5, `durationDays === 5 (Got: ${res1.body?.extracted?.durationDays})`);
  assert(res1.body?.extracted?.travelers === 5, `travelers === 5 (Got: ${res1.body?.extracted?.travelers})`);
  assert(res1.body?.extracted?.budget === 50000, `budget === 50000 (Got: ${res1.body?.extracted?.budget})`);
  assert(res1.body?.destinationExists === true, "destinationExists is true in verified database");
  assert(res1.body?.message === "Here's what I understood", `Message is "Here's what I understood" (Got: "${res1.body?.message}")`);
  assert(res1.body?.summary?.from === "Bhubaneswar", `Summary from is "Bhubaneswar"`);
  assert(res1.body?.summary?.to === "Goa", `Summary to is "Goa"`);
  assert(res1.body?.summary?.duration === "5 days", `Summary duration is "5 days"`);
  assert(res1.body?.summary?.travelers === "5", `Summary travelers is "5"`);
  assert(res1.body?.summary?.budget === "₹50,000", `Summary budget is "₹50,000"`);

  // TEST 2: Missing information detection (Requirement 9)
  console.log("\nTEST 2: Missing Information Detection (Requirement 9)");
  const prompt2 = "I want to visit Goa.";
  const res2 = await postApi("/api/ai/travel-assistant", { prompt: prompt2 });

  assert(res2.status === 200, `Status is 200 OK (Got ${res2.status})`);
  assert(res2.body?.extracted?.destination === "Goa", `destination extracted as "Goa"`);
  assert(Array.isArray(res2.body?.missingInformation), "missingInformation is an array");
  assert(res2.body?.missingInformation.includes("origin"), "missingInformation identifies missing origin");
  assert(res2.body?.missingInformation.includes("travelers"), "missingInformation identifies missing travelers");
  assert(res2.body?.missingInformation.includes("dates/duration"), "missingInformation identifies missing dates/duration");

  // TEST 3: Destination validation against database (Requirements 7 & 8)
  console.log("\nTEST 3: Non-existent destination rejected (Requirements 7 & 8)");
  const prompt3 = "I want to visit Narnia for 3 days with 2 people and budget 10000.";
  const res3 = await postApi("/api/ai/travel-assistant", { prompt: prompt3 });

  assert(res3.status === 200, `Status is 200 (Got ${res3.status})`);
  assert(res3.body?.destinationExists === false, "destinationExists is false for non-existent destination");
  assert(res3.body?.success === false, "success is false");
  assert(res3.body?.error && res3.body.error.includes("not found in our verified database"), "Error message informs user destination is not verified in database");

  // TEST 4: Security - Gemini API Key is never leaked
  console.log("\nTEST 4: Security Check — API Key Isolation (Requirements 3 & 4)");
  const rawResponse = JSON.stringify(res1.body);
  assert(!rawResponse.includes("AIzaSy"), "Gemini API key is not present in API output");
  assert(!rawResponse.includes("GEMINI_API_KEY"), "GEMINI_API_KEY identifier is not in API output");

  // TEST 5: No booking or payment created (Requirements 12, 13, 14)
  console.log("\nTEST 5: Constraint Check — No Bookings/Payments Created (Requirements 12, 13, 14)");
  assert(!res1.body?.bookingId, "No bookingId created");
  assert(!res1.body?.paymentOrderId, "No paymentOrderId created");

  console.log("\n==================================================");
  console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log("==================================================");

  if (failed > 0) {
    process.exit(1);
  } else {
    console.log("🎉 ALL STAGE 4 REQUIREMENTS ARE FULLY SATISFIED!");
  }
}

runStage4Tests().catch(err => {
  console.error("Test runner error:", err);
  process.exit(1);
});
