// ==================================================
// TravelMate AI - All 15 Destinations Flight Search Verification
// Tests that every one of the 15 supported destinations participates
// in real Duffel flight search using the resolved airport identifiers.
// ==================================================

const path = require("path");
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
require(path.join(__dirname, "../server/node_modules/dotenv")).config({ path: path.join(__dirname, "../server/.env") });

const assert = require("assert");
const searchService = require("../server/src/services/search.service");
const { resolveDestinationAirports, getAirportInfo } = require("../server/src/providers/flights/duffel/airportRegistry");

const TEST_DESTINATIONS = [
  { name: "Goa", origin: "Bhubaneswar", expectedAirports: ["GOI", "GOX"] },
  { name: "Delhi", origin: "Bhubaneswar", expectedAirports: ["DEL"] },
  { name: "Mumbai", origin: "Delhi", expectedAirports: ["BOM"] },
  { name: "Jaipur", origin: "Delhi", expectedAirports: ["JAI"] },
  { name: "Manali", origin: "Delhi", expectedAirports: ["KUU"] },
  { name: "Bengaluru", origin: "Delhi", expectedAirports: ["BLR"] },
  { name: "Kolkata", origin: "Delhi", expectedAirports: ["CCU"] },
  { name: "Bhubaneswar", origin: "Delhi", expectedAirports: ["BBI"] },
  { name: "Kerala", origin: "Delhi", expectedAirports: ["COK", "TRV", "CCJ"] },
  { name: "Hyderabad", origin: "Delhi", expectedAirports: ["HYD"] },
  { name: "Dubai", origin: "Mumbai", expectedAirports: ["DXB"] },
  { name: "Singapore", origin: "Delhi", expectedAirports: ["SIN"] },
  { name: "Paris", origin: "Delhi", expectedAirports: ["CDG", "ORY"] },
  { name: "London", origin: "Mumbai", expectedAirports: ["LHR", "LGW"] },
  { name: "Tokyo", origin: "Delhi", expectedAirports: ["HND", "NRT"] }
];

async function verifyAll15() {
  console.log("✈️ Testing All 15 TravelMate Destinations with Duffel Flight Provider...\n");

  const resultsSummary = [];

  for (let i = 0; i < TEST_DESTINATIONS.length; i++) {
    const item = TEST_DESTINATIONS[i];
    console.log(`[${i + 1}/15] Destination: ${item.name} (Origin: ${item.origin})`);

    // 1. Verify Destination Airport Mapping
    const resolvedAirports = resolveDestinationAirports(item.name);
    console.log(`  Resolved Airport Codes: [${resolvedAirports.join(", ")}]`);
    item.expectedAirports.forEach(code => {
      assert.ok(resolvedAirports.includes(code), `Resolved codes must include ${code}`);
    });

    // 2. Execute Real Flight Search via SearchService (delegates to Duffel)
    const searchRes = await searchService.searchFlights({
      origin: item.origin,
      destination: item.name,
      departureDate: "2026-10-15",
      travelers: 1
    });

    assert.strictEqual(searchRes.success, true, `Search to ${item.name} must return success`);
    assert.strictEqual(searchRes.meta.provider, "Duffel", "Provider must be Duffel");

    const flightCount = searchRes.data.length;
    const hasDirect = searchRes.meta.hasDirect;
    const hasConnecting = searchRes.meta.hasConnecting;

    if (flightCount > 0) {
      const sample = searchRes.data[0];
      console.log(`  ✓ Offers found: ${flightCount} (Direct: ${searchRes.meta.directCount}, Connecting: ${searchRes.meta.connectingCount})`);
      console.log(`    Sample: ${sample.airline?.name} (${sample.flightNumber}) | ${sample.origin?.airportCode} → ${sample.destination?.airportCode} | Price: ${sample.currency} ${sample.price}`);
      
      // Verify NO fake flights: Check structure
      assert.ok(sample.id.startsWith("off_"), `Offer ID must be a Duffel offer ID, got ${sample.id}`);
      assert.ok(Array.isArray(sample.segments), "Segments must be an array");
      assert.ok(sample.segments.length >= 1, "Segments must have at least 1 leg");
      sample.segments.forEach(seg => {
        assert.ok(seg.flightNumber, "Segment must have flight number from carrier");
        assert.ok(seg.origin?.airportCode, "Segment must have origin airport");
        assert.ok(seg.destination?.airportCode, "Segment must have destination airport");
      });
      resultsSummary.push({ destination: item.name, status: "OFFERS_RETURNED", count: flightCount, direct: searchRes.meta.directCount, connecting: searchRes.meta.connectingCount });
    } else {
      console.log(`  ✓ Zero offers cleanly returned by Duffel: "${searchRes.meta.message}"`);
      assert.ok(
        searchRes.meta.message.includes("No verified flight offers") || searchRes.meta.message.includes("No verified flights"),
        `Expected verified empty result message, got '${searchRes.meta.message}'`
      );
      resultsSummary.push({ destination: item.name, status: "ZERO_OFFERS_CLEAN", count: 0, message: searchRes.meta.message });
    }
    console.log("");
  }

  console.log("==================================================");
  console.log("SUMMARY OF ALL 15 DESTINATIONS WITH DUFFEL API:");
  console.log("==================================================");
  resultsSummary.forEach(r => {
    console.log(`• ${r.destination.padEnd(12)}: ${r.status} (${r.count} offers)`);
  });
  console.log("\n✓ All 15 destinations verified successfully without fake flights!");
}

verifyAll15().catch(err => {
  console.error("❌ Destination verification error:", err);
  process.exit(1);
});
