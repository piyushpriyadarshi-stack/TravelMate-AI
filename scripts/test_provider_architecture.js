// ==================================================
// TravelMate AI - Provider-Based Architecture Test Suite
// Verifies:
// 1. Provider Interfaces and contracts
// 2. Normalized result models
// 3. Backend search service & pagination
// 4. API endpoints (/api/search/*)
// 5. Explicit sandbox labeling (isLive === false, no fake live inventory claims)
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

async function runTests() {
  console.log("==================================================");
  console.log("TRAVELMATE AI - PROVIDER ARCHITECTURE VALIDATION");
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

  // 1. Unit Test Provider Interfaces (Abstract enforcement)
  console.log("1. Base Provider Interfaces & Abstract Contracts");
  try {
    const BaseHotelProvider = require("../server/src/providers/base/BaseHotelProvider");
    let caughtAbstract = false;
    try {
      new BaseHotelProvider();
    } catch (e) {
      caughtAbstract = true;
    }
    assert(caughtAbstract, "BaseHotelProvider cannot be instantiated directly (abstract class)");
  } catch (err) {
    assert(false, `Error testing BaseHotelProvider: ${err.message}`);
  }

  // 2. Test Normalized Models
  console.log("\n2. Normalized Data Models");
  try {
    const NormalizedHotel = require("../server/src/providers/models/NormalizedHotel");
    const NormalizedFlight = require("../server/src/providers/models/NormalizedFlight");
    const NormalizedTrain = require("../server/src/providers/models/NormalizedTrain");
    const NormalizedBus = require("../server/src/providers/models/NormalizedBus");
    const NormalizedCab = require("../server/src/providers/models/NormalizedCab");

    const hotel = new NormalizedHotel({ name: "Goa Beachfront Resort", pricePerNight: 5000 });
    assert(hotel.totalPricePerNight === 5600, "NormalizedHotel auto-calculates taxes & fees");
    assert(hotel.isLive === false, "NormalizedHotel defaults to isLive = false");

    const flight = new NormalizedFlight({ flightNumber: "6E-512", price: 4850 });
    assert(flight.airline.name === "IndiGo", "NormalizedFlight sets standard airline schema");
    assert(flight.isLive === false, "NormalizedFlight defaults to isLive = false");

    const train = new NormalizedTrain({ trainNumber: "22229", trainName: "Vande Bharat Express" });
    assert(train.classes.length > 0, "NormalizedTrain has structured class/quota schema");

    const bus = new NormalizedBus({ operatorName: "IntrCity SmartBus" });
    assert(bus.boardingPoints.length > 0, "NormalizedBus has boarding & dropping point schema");

    const cab = new NormalizedCab({ vehicleCategory: "SEDAN" });
    assert(cab.driverIncluded === true, "NormalizedCab contains complete transfer attributes");
  } catch (err) {
    assert(false, `Error testing models: ${err.message}`);
  }

  // 3. API Endpoints on Local Server (Port 5000)
  const baseUrl = "http://localhost:5000/api/search";

  console.log("\n3. Testing API Endpoints (/api/search/*)");

  // 3a. Provider Status
  try {
    const res = await fetchJson(`${baseUrl}/providers`);
    assert(res.status === 200, "GET /api/search/providers returns 200");
    assert(res.data.success === true, "Provider status reports success: true");
    assert(res.data.data.hotels[0].name === "SandboxHotelProvider", "SandboxHotelProvider registered");
    assert(res.data.data.flights[0].name === "SandboxFlightProvider", "SandboxFlightProvider registered");
  } catch (e) {
    assert(false, `Provider status error: ${e.message}`);
  }

  // 3b. Hotels Search & Pagination
  try {
    const res = await fetchJson(`${baseUrl}/hotels?destination=Goa&page=1&limit=2`);
    assert(res.status === 200, "GET /api/search/hotels returns 200");
    assert(res.data.success === true, "Hotels search returns success: true");
    assert(res.data.meta.isLive === false, "Strict Policy: meta.isLive is false (no fake live claims)");
    assert(typeof res.data.meta.disclaimer === "string", "Sandbox disclaimer explicitly included");
    assert(res.data.meta.pagination.limit === 2, "Pagination limit respected (2 items per page)");
    assert(Array.isArray(res.data.data) && res.data.data.length > 0, "Returns normalized hotel array");
    const firstHotel = res.data.data[0];
    assert(firstHotel.providerHotelId !== undefined, "Hotel includes providerHotelId");
    assert(firstHotel.cancellationPolicy !== undefined, "Hotel includes structured cancellationPolicy");
    assert(firstHotel.roomTypes !== undefined, "Hotel includes roomTypes array");
  } catch (e) {
    assert(false, `Hotel search error: ${e.message}`);
  }

  // 3c. Flights Search
  try {
    const res = await fetchJson(`${baseUrl}/flights?origin=Bhubaneswar&destination=Goa&cabinClass=ECONOMY`);
    assert(res.status === 200, "GET /api/search/flights returns 200");
    assert(res.data.success === true, "Flights search returns success: true");
    assert(res.data.meta.isLive === false, "Flights meta.isLive is false");
    assert(res.data.data.length >= 3, "Returns multiple flight options across carriers");
    const flight = res.data.data[0];
    assert(flight.airline && flight.airline.name, "Flight has airline details");
    assert(flight.baggage && flight.baggage.checkIn, "Flight has baggage allowance specification");
    assert(flight.seatAvailability !== undefined, "Flight has seat availability");
  } catch (e) {
    assert(false, `Flight search error: ${e.message}`);
  }

  // 3d. Trains Search
  try {
    const res = await fetchJson(`${baseUrl}/trains?origin=Mumbai&destination=Goa`);
    assert(res.status === 200, "GET /api/search/trains returns 200");
    assert(res.data.success === true, "Trains search returns success: true");
    assert(res.data.data.length > 0, "Returns train schedule options");
    const train = res.data.data[0];
    assert(train.trainNumber && train.trainName, "Train includes number and name");
    assert(Array.isArray(train.classes), "Train includes classes array");
  } catch (e) {
    assert(false, `Train search error: ${e.message}`);
  }

  // 3e. Buses Search
  try {
    const res = await fetchJson(`${baseUrl}/buses?origin=Mumbai&destination=Goa`);
    assert(res.status === 200, "GET /api/search/buses returns 200");
    assert(res.data.success === true, "Buses search returns success: true");
    assert(res.data.data.length > 0, "Returns bus options");
    const bus = res.data.data[0];
    assert(bus.operatorName !== undefined, "Bus includes operator name");
    assert(Array.isArray(bus.boardingPoints), "Bus includes boarding points");
  } catch (e) {
    assert(false, `Bus search error: ${e.message}`);
  }

  // 3f. Cabs Search
  try {
    const res = await fetchJson(`${baseUrl}/cabs?pickup=Bhubaneswar&destination=Puri`);
    assert(res.status === 200, "GET /api/search/cabs returns 200");
    assert(res.data.success === true, "Cabs search returns success: true");
    assert(res.data.data.length > 0, "Returns cab options across vehicle categories");
    const cab = res.data.data[0];
    assert(cab.vehicleCategory && cab.capacity, "Cab has vehicle category & capacity");
  } catch (e) {
    assert(false, `Cab search error: ${e.message}`);
  }

  // 3g. Multi-Modal Transportation Search
  try {
    const res = await fetchJson(`${baseUrl}/transportation?origin=Bhubaneswar&destination=Goa`);
    assert(res.status === 200, "GET /api/search/transportation returns 200");
    assert(res.data.data.flights.length > 0, "Multi-modal returns flights");
    assert(res.data.data.trains.length > 0, "Multi-modal returns trains");
    assert(res.data.data.buses.length > 0, "Multi-modal returns buses");
    assert(res.data.data.cabs.length > 0, "Multi-modal returns cabs");
  } catch (e) {
    assert(false, `Multi-modal search error: ${e.message}`);
  }

  console.log("\n==================================================");
  console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log("==================================================");

  process.exit(failed > 0 ? 1 : 0);
}

runTests().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
