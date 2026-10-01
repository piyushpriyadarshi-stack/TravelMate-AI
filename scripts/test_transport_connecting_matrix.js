// ==================================================
// TravelMate AI - Global Transportation Rule & 10-Route Test Matrix
// Validates:
// 1. All 15 supported destinations (10 India + 5 International)
// 2. Strict origin preservation (Zero hardcoded Delhi)
// 3. Direct vs. Connecting flights topology (Nonstop, 1 Stop, 2+ Stops)
// 4. Backend status codes (NO_DIRECT_RESULTS_BUT_CONNECTING_AVAILABLE vs NO_RESULTS)
// 5. Complete flight metadata (Layover duration, stopover airports, baggage, fare family)
// 6. Rail and Bus direct vs. connecting transfer stations
// 7. Overseas validation (Train/bus unavailable for international travel)
// 8. Dynamic filters & sorting
// ==================================================

const http = require("http");

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data, error: e.message });
        }
      });
    }).on("error", reject);
  });
}

async function runMatrixTests() {
  console.log("==================================================");
  console.log("GLOBAL TRANSPORTATION RULE - 10-ROUTE TEST MATRIX");
  console.log("==================================================\n");

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  [PASS] ${message}`);
      passed++;
    } else {
      console.error(`  [FAIL] ${message}`);
      failed++;
    }
  }

  const baseUrl = "http://localhost:5000/api";

  // ==================================================
  // 1. TEST MATRIX: 10 REQUIRED ROUTES
  // ==================================================
  const MATRIX_ROUTES = [
    { origin: "Bhubaneswar", destination: "Goa", expectDirect: false, isInternational: false },
    { origin: "Mumbai", destination: "Delhi", expectDirect: true, isInternational: false },
    { origin: "Delhi", destination: "Mumbai", expectDirect: true, isInternational: false },
    { origin: "Bengaluru", destination: "Jaipur", expectDirect: true, isInternational: false },
    { origin: "Kolkata", destination: "Goa", expectDirect: false, isInternational: false },
    { origin: "Delhi", destination: "Dubai", expectDirect: true, isInternational: true },
    { origin: "Mumbai", destination: "Singapore", expectDirect: true, isInternational: true },
    { origin: "Delhi", destination: "Paris", expectDirect: true, isInternational: true },
    { origin: "Mumbai", destination: "London", expectDirect: true, isInternational: true },
    { origin: "Delhi", destination: "Tokyo", expectDirect: true, isInternational: true }
  ];

  console.log("--- PART 1: 10-ROUTE CONNECTIVITY & TOPOLOGY VALIDATION ---");

  for (const route of MATRIX_ROUTES) {
    const { origin, destination, expectDirect, isInternational } = route;
    console.log(`\nTesting Corridor: ${origin} → ${destination} (${isInternational ? "International" : "Domestic"})`);

    // A. Provider Flights API
    const flightUrl = `${baseUrl}/search/flights?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
    const fRes = await fetchJson(flightUrl);

    assert(fRes.status === 200, `GET /api/search/flights for ${origin} → ${destination} returns 200`);
    const flights = fRes.data?.data || [];
    assert(flights.length > 0, `Returned ${flights.length} flight options`);

    // Verify Origin & Destination strictly preserved
    const allOriginMatch = flights.every(f => f.origin.city.toLowerCase().includes(origin.toLowerCase()));
    const allDestMatch = flights.every(f => f.destination.city.toLowerCase().includes(destination.toLowerCase()));
    assert(allOriginMatch, `All flights originate from selected city "${origin}" (Never defaulted)`);
    assert(allDestMatch, `All flights terminate at selected destination "${destination}"`);

    // Direct vs Connecting Verification
    const directFlights = flights.filter(f => f.stops === 0);
    const connectingFlights = flights.filter(f => f.stops > 0);

    if (expectDirect) {
      assert(directFlights.length > 0, `Direct nonstop flights exist for ${origin} → ${destination} (${directFlights.length} found)`);
      assert(fRes.data.meta.hasDirect === true, "meta.hasDirect is true");
      assert(fRes.data.meta.status === "DIRECT_AND_CONNECTING_AVAILABLE" || fRes.data.meta.status === "DIRECT_ONLY", `Status is "${fRes.data.meta.status}"`);
    } else {
      assert(directFlights.length === 0, `CRITICAL: No nonstop flights exist for non-hub route ${origin} → ${destination}`);
      assert(connectingFlights.length > 0, `Connecting flights available (${connectingFlights.length} found with 1+ stops)`);
      assert(fRes.data.meta.hasDirect === false, "meta.hasDirect is strictly false");
      assert(fRes.data.meta.hasConnecting === true, "meta.hasConnecting is true");
      assert(
        fRes.data.meta.status === "NO_DIRECT_RESULTS_BUT_CONNECTING_AVAILABLE",
        `CRITICAL: Status is NO_DIRECT_RESULTS_BUT_CONNECTING_AVAILABLE (Got: "${fRes.data.meta.status}")`
      );
      assert(
        fRes.data.meta.message.includes("No nonstop flights available"),
        `CRITICAL: Message contains "No nonstop flights available" (Got: "${fRes.data.meta.message}")`
      );
    }

    // Flight Information Rich Schema Check
    const sampleFlight = flights[0];
    assert(sampleFlight.airline && Boolean(sampleFlight.airline.name), "Flight includes airline object");
    assert(Boolean(sampleFlight.flightNumber), `Flight includes flight number: ${sampleFlight.flightNumber}`);
    assert(Boolean(sampleFlight.departure.time), "Flight includes departure time");
    assert(Boolean(sampleFlight.arrival.time), "Flight includes arrival time");
    assert(Boolean(sampleFlight.duration), `Flight includes total duration: ${sampleFlight.duration}`);
    assert(sampleFlight.stops !== undefined, `Flight includes stops count: ${sampleFlight.stops}`);
    assert(Boolean(sampleFlight.baggage && sampleFlight.baggage.checkIn), "Flight includes baggage allowance");
    assert(Boolean(sampleFlight.fareFamily), `Flight includes fare type: ${sampleFlight.fareFamily}`);
    assert(sampleFlight.price > 0, `Flight includes price: ₹${sampleFlight.price}`);

    if (sampleFlight.stops > 0) {
      assert(Array.isArray(sampleFlight.layovers) && sampleFlight.layovers.length > 0, "Connecting flight specifies layovers array");
      assert(Boolean(sampleFlight.layoverSummary), `Connecting flight has layoverSummary: "${sampleFlight.layoverSummary}"`);
      assert(Boolean(sampleFlight.routeSummary), `Connecting flight has routeSummary: "${sampleFlight.routeSummary}"`);
    }

    // B. Multi-modal API (/api/transportation)
    const transUrl = `${baseUrl}/transportation?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
    const tRes = await fetchJson(transUrl);
    assert(tRes.status === 200, `GET /api/transportation returns 200 for ${origin} → ${destination}`);
    assert(tRes.data.data.length > 0, `Transportation options returned: ${tRes.data.data.length}`);

    // If overseas: train and bus must NOT be returned!
    if (isInternational) {
      const trainCount = tRes.data.data.filter(t => t.type === "TRAIN").length;
      const busCount = tRes.data.data.filter(t => t.type === "BUS").length;
      assert(trainCount === 0, `Overseas route has 0 trains (Got ${trainCount})`);
      assert(busCount === 0, `Overseas route has 0 buses (Got ${busCount})`);
    } else {
      // Domestic route must have trains
      const trains = tRes.data.data.filter(t => t.type === "TRAIN");
      assert(trains.length > 0, `Domestic route has train options (${trains.length} found)`);
      if (!expectDirect) {
        const connTrain = trains.find(t => !t.isDirect);
        if (connTrain) {
          assert(Boolean(connTrain.transferStation), `Connecting train clearly displays transfer station: "${connTrain.transferStation}"`);
        }
      }
    }
  }

  // ==================================================
  // 2. DYNAMIC FILTERS & SORTING VALIDATION
  // ==================================================
  console.log("\n--- PART 2: FLIGHT STOPS & TRANSIT FILTERS ---");

  // Nonstop filter on Mumbai -> Delhi
  const nonstopRes = await fetchJson(`${baseUrl}/search/flights?origin=Mumbai&destination=Delhi&stops=nonstop`);
  const nonstopFlights = nonstopRes.data?.data || [];
  assert(nonstopFlights.length > 0 && nonstopFlights.every(f => f.stops === 0), "Filter [Nonstop] returns only 0-stop flights");

  // 1-Stop filter on Bhubaneswar -> Goa
  const oneStopRes = await fetchJson(`${baseUrl}/search/flights?origin=Bhubaneswar&destination=Goa&stops=1stop`);
  const oneStopFlights = oneStopRes.data?.data || [];
  assert(oneStopFlights.length > 0 && oneStopFlights.every(f => f.stops === 1), "Filter [1 Stop] returns only 1-stop flights");

  // 2+ Stops filter on Bhubaneswar -> Goa
  const twoStopRes = await fetchJson(`${baseUrl}/search/flights?origin=Bhubaneswar&destination=Goa&stops=2+`);
  const twoStopFlights = twoStopRes.data?.data || [];
  assert(twoStopFlights.length > 0 && twoStopFlights.every(f => f.stops >= 2), "Filter [2+ Stops] returns 2+-stop flights");

  // Sorting: Price Low to High
  const priceLowRes = await fetchJson(`${baseUrl}/search/flights?origin=Mumbai&destination=Delhi&sortBy=PRICE_LOW_TO_HIGH`);
  const plFlights = priceLowRes.data?.data || [];
  let isSortedPrice = true;
  for (let i = 1; i < plFlights.length; i++) {
    if (plFlights[i].price < plFlights[i - 1].price) isSortedPrice = false;
  }
  assert(isSortedPrice, "Sorting [Price: Low to High] properly orders flights by increasing fare");

  // Sorting: Fastest / Duration
  const durRes = await fetchJson(`${baseUrl}/search/flights?origin=Mumbai&destination=Delhi&sortBy=DURATION`);
  const durFlights = durRes.data?.data || [];
  let isSortedDuration = true;
  for (let i = 1; i < durFlights.length; i++) {
    if (durFlights[i].durationMinutes < durFlights[i - 1].durationMinutes) isSortedDuration = false;
  }
  assert(isSortedDuration, "Sorting [Duration: Shortest] properly orders flights by flight duration");

  // ==================================================
  // 3. ZERO DEFAULT DELHI VERIFICATION
  // ==================================================
  console.log("\n--- PART 3: ZERO DEFAULT ORIGIN VERIFICATION ---");

  // User in Kolkata searching Goa
  const kolkataRes = await fetchJson(`${baseUrl}/transportation?origin=Kolkata&destination=Goa`);
  const hasDelhiForKolkata = kolkataRes.data.data.some(t => t.origin.toLowerCase().includes("delhi"));
  assert(!hasDelhiForKolkata, "CRITICAL: Kolkata → Goa contains ZERO options originating from Delhi");

  // User with no origin provided
  const noOriginRes = await fetchJson(`${baseUrl}/transportation?destination=Goa`);
  const hasDelhiWhenNoOrigin = noOriginRes.data.data.some(t => t.origin.toLowerCase().includes("delhi"));
  assert(!hasDelhiWhenNoOrigin, "CRITICAL: No origin query returns ZERO options originating from Delhi");

  // ==================================================
  // 4. ALL 15 SUPPORTED DESTINATIONS VERIFICATION
  // ==================================================
  console.log("\n--- PART 4: COVERAGE FOR ALL 15 DESTINATIONS ---");
  const ALL_15 = [
    "Goa", "Delhi", "Mumbai", "Jaipur", "Manali",
    "Bengaluru", "Kolkata", "Bhubaneswar", "Kerala", "Hyderabad",
    "Dubai", "Singapore", "Paris", "London", "Tokyo"
  ];

  let allCovered = true;
  for (const dest of ALL_15) {
    const origin = dest === "Bengaluru" ? "Mumbai" : "Bengaluru";
    const res = await fetchJson(`${baseUrl}/transportation?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(dest)}`);
    if (!res.data || !res.data.data || res.data.data.length === 0) {
      allCovered = false;
      console.error(`Destination ${dest} returned 0 options from ${origin}`);
    }
  }
  assert(allCovered, "All 15 destinations successfully return dynamic transportation options from user origin");

  // ==================================================
  // SUMMARY
  // ==================================================
  console.log("\n==================================================");
  console.log(`TEST MATRIX SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log("==================================================");

  process.exit(failed > 0 ? 1 : 0);
}

runMatrixTests().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
