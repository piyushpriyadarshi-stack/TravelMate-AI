// ==================================================
// Verification Test Suite: Transport Origin Fix (No Default Delhi)
// ==================================================

const http = require("http");

function getJson(path) {
  return new Promise((resolve, reject) => {
    const req = http.get(
      {
        hostname: "localhost",
        port: 5000,
        path,
        headers: { Accept: "application/json" },
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
  });
}

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
  console.log("TESTING: TRANSPORT ORIGIN FIX (NO HARDCODED DELHI)");
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
  // TEST 1: User clicks "Use my current location"
  // Reverse geocodes coordinates -> Bhubaneswar -> Transportation shows Bhubaneswar -> Goa
  // --------------------------------------------------
  console.log("TEST 1: Use Current Location -> Detected Bhubaneswar -> Goa Transportation");
  const geoRes = await postJson("/api/location/reverse-geocode", {
    latitude: 20.2961,
    longitude: 85.8245
  });
  assert(geoRes.status === 200, "Reverse geocode status is 200");
  assert(geoRes.body.city === "Bhubaneswar", `City detected as Bhubaneswar (Got: "${geoRes.body.city}")`);

  const transBbi = await getJson(`/api/transportation?origin=${encodeURIComponent(geoRes.body.city)}&destination=Goa`);
  assert(transBbi.status === 200, "Transportation status is 200");
  assert(transBbi.body.count > 0, `Returned ${transBbi.body.count} transit options for Bhubaneswar -> Goa`);
  
  const allBbiMatch = transBbi.body.data.every(
    (t) => t.origin.toLowerCase().includes("bhubaneswar") && t.destination.toLowerCase().includes("goa")
  );
  assert(allBbiMatch, "All transit options strictly have origin 'Bhubaneswar' and destination 'Goa'");

  const bbiTypes = new Set(transBbi.body.data.map((t) => t.type));
  assert(bbiTypes.has("FLIGHT"), "Bhubaneswar -> Goa has Flight option");
  assert(bbiTypes.has("TRAIN"), "Bhubaneswar -> Goa has Train option");
  assert(bbiTypes.has("BUS"), "Bhubaneswar -> Goa has Bus option");
  assert(bbiTypes.has("SUV") || bbiTypes.has("PRIVATE_CAR"), "Bhubaneswar -> Goa has Cab/Private transport");

  // --------------------------------------------------
  // TEST 2: User denies location permission
  // Location unavailable / denied -> manual city input fallback
  // --------------------------------------------------
  console.log("\nTEST 2: Location Denied / Invalid Fallback Handling");
  const invalidGeo = await postJson("/api/location/reverse-geocode", {
    latitude: 999,
    longitude: 999
  });
  assert(invalidGeo.status === 400, "Invalid coordinates properly rejected with 400 Bad Request");
  assert(Boolean(invalidGeo.body.error), "Returns clear error prompt for manual entry");

  // --------------------------------------------------
  // TEST 3: User manually selects Mumbai -> Mumbai -> Goa
  // --------------------------------------------------
  console.log("\nTEST 3: User Manually Selects Mumbai -> Mumbai -> Goa Transportation");
  const transMum = await getJson("/api/transportation?origin=Mumbai&destination=Goa");
  assert(transMum.status === 200, "Status is 200");
  assert(transMum.body.count > 0, `Returned ${transMum.body.count} options for Mumbai -> Goa`);
  const allMumMatch = transMum.body.data.every(
    (t) => t.origin.toLowerCase().includes("mumbai") && t.destination.toLowerCase().includes("goa")
  );
  assert(allMumMatch, "All transit options strictly have origin 'Mumbai' and destination 'Goa'");
  
  const mumTypes = new Set(transMum.body.data.map((t) => t.type));
  assert(mumTypes.has("FLIGHT"), "Mumbai -> Goa has Flight option");
  assert(mumTypes.has("TRAIN"), "Mumbai -> Goa has Train option");

  // --------------------------------------------------
  // TEST 4: User manually selects Delhi -> Delhi -> Goa
  // --------------------------------------------------
  console.log("\nTEST 4: User Manually Selects Delhi -> Delhi -> Goa Transportation");
  const transDel = await getJson("/api/transportation?origin=Delhi&destination=Goa");
  assert(transDel.status === 200, "Status is 200");
  assert(transDel.body.count > 0, `Returned ${transDel.body.count} options for Delhi -> Goa`);
  const allDelMatch = transDel.body.data.every(
    (t) => t.origin.toLowerCase().includes("delhi") && t.destination.toLowerCase().includes("goa")
  );
  assert(allDelMatch, "All transit options strictly have origin 'Delhi' and destination 'Goa'");

  // --------------------------------------------------
  // TEST 5: No origin selected -> No default Delhi
  // --------------------------------------------------
  console.log("\nTEST 5: No Origin Selected -> NO Default Delhi Allowed");
  const noOriginRes = await getJson("/api/transportation?destination=Goa");
  assert(noOriginRes.status === 200, "Status is 200");
  const hasDelhiWhenNoOrigin = noOriginRes.body.data.some((t) => t.origin.toLowerCase().includes("delhi"));
  assert(!hasDelhiWhenNoOrigin, "CRITICAL: No transportation from Delhi is returned when user did NOT select an origin");

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
