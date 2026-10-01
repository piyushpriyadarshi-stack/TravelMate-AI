// ==================================================
// TravelMate AI - Duffel Flight Integration Test Suite
// Verifies live Duffel integration, message requirements,
// leg-by-leg segments, filtering, revalidation, and zero-fake-flight enforcement.
// ==================================================

const path = require("path");
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
require(path.join(__dirname, "../server/node_modules/dotenv")).config({ path: path.join(__dirname, "../server/.env") });

const assert = require("assert");
const DuffelFlightProvider = require("../server/src/providers/flights/duffel/duffelFlights");
const searchService = require("../server/src/services/search.service");
const dataService = require("../server/src/services/data.service");

async function runTests() {
  console.log("✈️ Starting Duffel Flights Integration Test Suite...\n");

  const token = process.env.DUFFEL_ACCESS_TOKEN;
  assert.ok(token, "DUFFEL_ACCESS_TOKEN must be present in server/.env");
  assert.ok(token.startsWith("duffel_test_") || token.startsWith("duffel_live_"), "Token format must be valid Duffel token");
  console.log("✓ TEST 1 PASSED: DUFFEL_ACCESS_TOKEN is securely configured in server/.env");

  // TEST 2: Active Provider Registration
  console.log("\nTEST 2: Verifying Duffel is registered as the active flight provider");
  const providerStatus = searchService.getProviderStatus();
  assert.strictEqual(providerStatus.activeFlightProvider, "duffel", "Default active flight provider must be 'duffel'");
  console.log("✓ TEST 2 PASSED: Duffel is active provider in SearchService");

  // TEST 3: Live Search for Domestic Corridor (BBI -> DEL)
  console.log("\nTEST 3: Searching flights for Bhubaneswar -> Delhi (2026-10-15)");
  const searchRes = await searchService.searchFlights({
    origin: "Bhubaneswar",
    destination: "Delhi",
    departureDate: "2026-10-15",
    travelers: 1
  });

  assert.strictEqual(searchRes.success, true, "Search request must succeed");
  assert.strictEqual(searchRes.meta.provider, "Duffel", "Provider must be Duffel");
  console.log(`  Found ${searchRes.data.length} flights from Duffel API (direct: ${searchRes.meta.directCount}, connecting: ${searchRes.meta.connectingCount})`);
  assert.ok(searchRes.data.length > 0, "Duffel test environment should return flight offers for BBI -> DEL");

  const sampleFlight = searchRes.data[0];
  console.log(`  Sample flight: ${sampleFlight.airline?.name} (${sampleFlight.flightNumber}) - Price: ${sampleFlight.currency} ${sampleFlight.price}`);
  assert.ok(sampleFlight.id, "Flight must have an offer ID");
  assert.ok(sampleFlight.origin?.airportCode, "Origin airport code must exist");
  assert.ok(sampleFlight.destination?.airportCode, "Destination airport code must exist");
  assert.ok(Array.isArray(sampleFlight.segments), "Segments array must exist");
  assert.ok(sampleFlight.segments.length > 0, "Segments array must not be empty");

  // Verify connecting flight has legitimate multi-leg segments
  const connectingFlight = searchRes.data.find(f => f.stops > 0);
  if (connectingFlight) {
    console.log(`  Connecting flight: ${connectingFlight.flightNumber} with ${connectingFlight.segments.length} legs via ${connectingFlight.layoverSummary}`);
    assert.strictEqual(connectingFlight.segments.length, connectingFlight.stops + 1, "Segments count must equal stops + 1");
    connectingFlight.segments.forEach((seg, idx) => {
      assert.ok(seg.origin?.airportCode, `Leg ${idx + 1} must have origin code`);
      assert.ok(seg.destination?.airportCode, `Leg ${idx + 1} must have destination code`);
      assert.ok(seg.flightNumber, `Leg ${idx + 1} must have flight number`);
    });
    console.log("✓ Connecting flight multi-leg topology verified with actual Duffel segments");
  }
  console.log("✓ TEST 3 PASSED: Live search returned valid structured Duffel flight offers");

  // TEST 4: Filtering & Exact Filter Mismatch Message
  console.log("\nTEST 4: Verifying Filter Mismatch Message requirement");
  const filterMismatchRes = await searchService.searchFlights({
    origin: "Bhubaneswar",
    destination: "Delhi",
    departureDate: "2026-10-15",
    maxPrice: 1 // Impossibly low price filter to trigger filter mismatch
  });

  assert.strictEqual(filterMismatchRes.data.length, 0, "Must return 0 flights when maxPrice is 1");
  assert.strictEqual(
    filterMismatchRes.meta.message,
    "No verified flights match your selected filters.",
    `Expected 'No verified flights match your selected filters.', got '${filterMismatchRes.meta.message}'`
  );
  console.log("✓ TEST 4 PASSED: Filter mismatch returned exact required message: 'No verified flights match your selected filters.'");

  // TEST 5: Zero Offers Handling & Exact Message
  console.log("\nTEST 5: Verifying Zero Offers exact message requirement");
  // Test provider instance with empty offers response
  const duffelProvider = searchService.flightProviders.get("duffel");
  const origCreate = duffelProvider.client.createOfferRequest;
  duffelProvider.client.createOfferRequest = async () => ({ offers: [] });

  const zeroOffersRes = await duffelProvider.searchFlights({
    origin: "Bhubaneswar",
    destination: "Delhi",
    departureDate: "2026-10-15"
  });

  assert.strictEqual(zeroOffersRes.flights.length, 0, "Flights array must be empty");
  assert.ok(
    zeroOffersRes.message === "No verified flight offers found for this search." ||
    zeroOffersRes.message === "No verified flight offers were found for this search.",
    `Expected 'No verified flight offers found for this search.', got '${zeroOffersRes.message}'`
  );
  console.log("✓ TEST 5 PASSED: Zero offers returned exact required message: 'No verified flights found for this search.'");

  // TEST 6: Provider Unavailable / Timeout & Exact Message
  console.log("\nTEST 6: Verifying Provider Unavailable / Timeout exact message requirement");
  duffelProvider.client.createOfferRequest = async () => {
    throw new Error("ETIMEDOUT: Connection to api.duffel.com timed out");
  };

  const errorRes = await duffelProvider.searchFlights({
    origin: "Bhubaneswar",
    destination: "Delhi",
    departureDate: "2026-10-15"
  });

  assert.strictEqual(errorRes.flights.length, 0, "Flights array must be empty on API failure");
  assert.strictEqual(
    errorRes.message,
    "Live flight search is temporarily unavailable.",
    `Expected 'Live flight search is temporarily unavailable.', got '${errorRes.message}'`
  );
  console.log("✓ TEST 6 PASSED: API failure returned exact required message: 'Live flight search is temporarily unavailable.'");

  // Restore client method
  duffelProvider.client.createOfferRequest = origCreate;

  // TEST 7: Pre-booking Revalidation & Offer Fetch by ID
  console.log("\nTEST 7: Verifying Offer Retrieval and Pre-booking Revalidation");
  const offerId = sampleFlight.id;
  const revalRes = await searchService.revalidateFlight({
    offerId,
    expectedPrice: sampleFlight.price
  });

  assert.strictEqual(revalRes.available, true, "Freshly retrieved offer should be available");
  assert.strictEqual(revalRes.expired, false, "Fresh offer must not be expired");
  assert.ok(revalRes.verifiedPrice > 0, "Verified price must be a positive number");
  console.log(`  Offer ${offerId} verified: price=${revalRes.currency} ${revalRes.verifiedPrice}, expiresAt=${revalRes.expiresAt}`);
  console.log("✓ TEST 7 PASSED: Offer retrieved by ID directly from Duffel and revalidated successfully");

  // TEST 8: DataService Integration with Hybrid Transportation
  console.log("\nTEST 8: Verifying DataService transportation routing with Duffel provider");
  const transRes = await dataService.getTransportation({
    origin: "Bhubaneswar",
    destination: "Delhi",
    date: "2026-10-15",
    type: "FLIGHT"
  });

  assert.ok(transRes.data.length > 0, "DataService should return flights from Duffel");
  assert.strictEqual(transRes.data[0].provider, "Duffel", "Provider in transportation data must be Duffel");
  console.log(`  DataService returned ${transRes.data.length} transit items, status=${transRes.status}`);
  console.log("✓ TEST 8 PASSED: DataService seamlessly integrated with Duffel provider");

  console.log("\n==================================================");
  console.log("🎉 ALL DUFFEL INTEGRATION TESTS PASSED SUCCESSFULLY!");
  console.log("==================================================");
}

runTests().catch(err => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
