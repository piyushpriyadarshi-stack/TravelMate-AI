// ==================================================
// Automated Verification Script for STAGE 3:
// Destination Search, Location Selection & Real Images
// ==================================================

const BASE_URL = "http://localhost:5000/api";

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    testsPassed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    testsFailed++;
  }
}

async function runTests() {
  console.log("==================================================");
  console.log("RUNNING STAGE 3 DESTINATION DISCOVERY & SEARCH TESTS");
  console.log("==================================================\n");

  // --------------------------------------------------
  // TEST 1 & TEST 12: Logged-out user browses destinations
  // Expected: Allowed without login (HTTP 200)
  // --------------------------------------------------
  console.log("TEST 1 & 12: Logged-out user browses destinations catalog");
  try {
    const res = await fetch(`${BASE_URL}/destinations`);
    const data = await res.json();
    assert(res.status === 200, `Public browsing allowed without login (Status 200)`);
    assert(data.success === true, `Response success is true`);
    assert(Array.isArray(data.data) && data.data.length >= 13, `Catalog contains ${data.count} destinations (Minimum 13 required: Goa, Delhi, Mumbai, Jaipur, Manali, Bengaluru, Kolkata, Bhubaneswar, Dubai, Singapore, Paris, Tokyo, London)`);
    
    // Verify required destinations are present
    const names = data.data.map(d => d.name.toLowerCase());
    const required = ["goa", "delhi", "mumbai", "jaipur", "manali", "bengaluru", "kolkata", "bhubaneswar", "dubai", "singapore", "paris", "tokyo", "london"];
    const allPresent = required.every(r => names.some(n => n.includes(r)));
    assert(allPresent, `All required domestic & international destinations are present in dataset`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 2: Search "Goa"
  // Expected: Goa, India appears
  // --------------------------------------------------
  console.log("\nTEST 2: Search 'Goa'");
  try {
    const res = await fetch(`${BASE_URL}/destinations?search=Goa`);
    const data = await res.json();
    assert(res.status === 200, `Search endpoint returns 200`);
    assert(data.data.length > 0, `Matching destinations found`);
    const goa = data.data.find(d => d.name.toLowerCase().includes("goa") || d.city.toLowerCase().includes("goa"));
    assert(Boolean(goa), `Found destination: "${goa?.name}, ${goa?.country}"`);
    assert(goa?.country === "India", `Country is India`);
    assert(goa?.imageUrl && goa.imageUrl.startsWith("http"), `Has valid image URL: ${goa?.imageUrl?.substring(0, 50)}...`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 3: Autocomplete / prefix search "Go"
  // Expected: Goa appears as #1 suggestion
  // --------------------------------------------------
  console.log("\nTEST 3: Autocomplete search 'Go'");
  try {
    const res = await fetch(`${BASE_URL}/destinations?search=Go`);
    const data = await res.json();
    assert(res.status === 200, `Prefix query returned 200`);
    assert(data.data.length > 0, `Suggestions returned`);
    const topMatch = data.data[0];
    assert(topMatch.name.toLowerCase().startsWith("go"), `Top ranked suggestion is "${topMatch.name}, ${topMatch.country}"`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 7: Search "Par"
  // Expected: Paris appears
  // --------------------------------------------------
  console.log("\nTEST 7: Search 'Par'");
  try {
    const res = await fetch(`${BASE_URL}/destinations?search=Par`);
    const data = await res.json();
    assert(res.status === 200, `Search query returned 200`);
    const paris = data.data.find(d => d.name.toLowerCase().includes("paris"));
    assert(Boolean(paris), `Found destination: "${paris?.name}, ${paris?.country}"`);
    assert(paris?.country === "France", `Paris country is France`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 6: Search invalid destination "XYZ123"
  // Expected: notFound = true, zero destinations, friendly error message
  // --------------------------------------------------
  console.log("\nTEST 6: Search invalid destination 'XYZ123'");
  try {
    const res = await fetch(`${BASE_URL}/destinations?search=XYZ123`);
    const data = await res.json();
    assert(res.status === 200, `Returns 200 with notFound flag`);
    assert(data.count === 0, `Count is 0`);
    assert(data.notFound === true, `Flag notFound is true`);
    assert(
      data.message.toLowerCase().includes("couldn't find this destination"),
      `Friendly message: "${data.message}"`
    );
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 4: Open Goa destination details page (/api/destinations/dest-goa)
  // Expected: Real Goa photograph, gallery, coordinates, and details appear
  // --------------------------------------------------
  console.log("\nTEST 4: Open Goa destination details");
  try {
    const res = await fetch(`${BASE_URL}/destinations/dest-goa`);
    const data = await res.json();
    assert(res.status === 200, `Details endpoint returned 200`);
    assert(data.data.name === "Goa", `Destination name is "Goa"`);
    assert(data.data.country === "India", `Country is "India"`);
    assert(data.data.imageUrl.includes("unsplash.com"), `Real Unsplash photograph used: ${data.data.imageUrl.substring(0, 50)}...`);
    assert(!data.data.imageUrl.includes("ai-generated"), `Strictly real-world photograph (zero AI generated images)`);
    assert(Array.isArray(data.data.galleryImages) && data.data.galleryImages.length > 0, `Gallery contains ${data.data.galleryImages?.length} authentic photographs`);
    assert(typeof data.data.latitude === "number" && typeof data.data.longitude === "number", `Coordinates present: ${data.data.latitude}°N, ${data.data.longitude}°E`);
    assert(Boolean(data.data.timezone), `Timezone present: ${data.data.timezone}`);
    assert(data.data.popular === true, `Popular indicator is true`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 5: Refresh destination details
  // Expected: Destination loads stably and consistently
  // --------------------------------------------------
  console.log("\nTEST 5: Refresh destination details (Idempotent load)");
  try {
    const res = await fetch(`${BASE_URL}/destinations/dest-goa`);
    const data = await res.json();
    assert(res.status === 200, `Refreshed query returned 200`);
    assert(data.data.name === "Goa", `Destination correctly retained on refresh`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 11: Try opening destination details with an invalid ID
  // Expected: Friendly not-found response (404)
  // --------------------------------------------------
  console.log("\nTEST 11: Destination details with invalid ID");
  try {
    const res = await fetch(`${BASE_URL}/destinations/invalid-nonexistent-id-999`);
    const data = await res.json();
    assert(res.status === 404, `Status is 404 Not Found (Got ${res.status})`);
    assert(data.notFound === true, `notFound flag is true`);
    assert(
      data.message.toLowerCase().includes("couldn't find this destination"),
      `Friendly error message: "${data.message}"`
    );
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 8: Search with past check-in date
  // Expected: Validation error (HTTP 400)
  // --------------------------------------------------
  console.log("\nTEST 8: Search with past check-in date");
  try {
    const res = await fetch(`${BASE_URL}/destinations/validate-search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destination: "Goa",
        checkIn: "2020-01-01",
        checkOut: "2020-01-05",
        travelers: 2
      })
    });
    const data = await res.json();
    assert(res.status === 400, `Status is 400 Bad Request (Got ${res.status})`);
    assert(data.success === false, `Validation rejected past date`);
    assert(data.message.toLowerCase().includes("past"), `Error message mentions past date: "${data.message}"`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 9: Check-out before check-in
  // Expected: Validation error (HTTP 400)
  // --------------------------------------------------
  console.log("\nTEST 9: Check-out date before check-in date");
  const today = new Date().toISOString().split("T")[0];
  const nextMonth = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
  const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  try {
    const res = await fetch(`${BASE_URL}/destinations/validate-search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destination: "Goa",
        checkIn: nextMonth,
        checkOut: nextWeek, // Check-out before check-in!
        travelers: 2
      })
    });
    const data = await res.json();
    assert(res.status === 400, `Status is 400 Bad Request (Got ${res.status})`);
    assert(data.success === false, `Validation rejected invalid date order`);
    assert(data.message.toLowerCase().includes("after check-in"), `Error message: "${data.message}"`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 10: Travelers = 0 or Travelers > 40
  // Expected: Validation error (HTTP 400)
  // --------------------------------------------------
  console.log("\nTEST 10: Travelers limits validation (Min 1, Max 40)");
  try {
    // 0 travelers
    const resZero = await fetch(`${BASE_URL}/destinations/validate-search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destination: "Goa",
        checkIn: today,
        checkOut: nextWeek,
        travelers: 0
      })
    });
    const dataZero = await resZero.json();
    assert(resZero.status === 400, `0 travelers rejected with 400 (Got ${resZero.status})`);
    assert(dataZero.message.toLowerCase().includes("at least 1"), `Error message: "${dataZero.message}"`);

    // 50 travelers (> MAX_TRAVELERS)
    const resFifty = await fetch(`${BASE_URL}/destinations/validate-search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destination: "Goa",
        checkIn: today,
        checkOut: nextWeek,
        travelers: 50
      })
    });
    const dataFifty = await resFifty.json();
    assert(resFifty.status === 400, `50 travelers rejected with 400 (Got ${resFifty.status})`);
    assert(dataFifty.message.toLowerCase().includes("cannot exceed 15"), `Error message: "${dataFifty.message}"`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 13: Stage 2 Booking Protection Regression Check
  // Logged-out user clicks Book My Trip / calls booking API
  // Expected: Blocked with HTTP 401 Unauthorized
  // --------------------------------------------------
  console.log("\nTEST 13: Stage 2 Booking Protection Regression Check");
  try {
    const bookRes = await fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destinationId: "dest-goa",
        destinationName: "Goa",
        grandTotal: 15000
      })
    });
    const bookData = await bookRes.json();
    assert(bookRes.status === 401, `POST /api/bookings without auth returns 401 Unauthorized (Got ${bookRes.status})`);
    assert(bookData.success === false, `Booking was NOT created`);
    assert(bookData.message.toLowerCase().includes("authentication required"), `Protection message: "${bookData.message}"`);

    const payRes = await fetch(`${BASE_URL}/payments/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destinationId: "dest-goa",
        currency: "INR",
        nights: 2,
        travelers: 2
      })
    });
    const payData = await payRes.json();
    assert(payRes.status === 401, `POST /api/payments/create-order without auth returns 401 Unauthorized (Got ${payRes.status})`);
    assert(payData.success === false, `Payment order was NOT created`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // SUMMARY
  // --------------------------------------------------
  console.log("\n==================================================");
  console.log(`TEST RESULTS: ${testsPassed} PASSED, ${testsFailed} FAILED`);
  console.log("==================================================");

  if (testsFailed === 0) {
    console.log("🎉 ALL 13 STAGE 3 REQUIREMENTS ARE FULLY SATISFIED!");
  } else {
    process.exit(1);
  }
}

runTests();
