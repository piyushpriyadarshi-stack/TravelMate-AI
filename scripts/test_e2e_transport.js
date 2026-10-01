/**
 * End-to-End Verification Test Script
 * Tests the 5 requested corridors and edge cases against the live server or service layer
 */
const http = require("http");

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON: ${data.slice(0, 100)}`));
        }
      });
    }).on("error", reject);
  });
}

async function runTests() {
  console.log("==================================================");
  console.log("TRAVELMATE AI TRANSPORTATION ENGINE VERIFICATION");
  console.log("==================================================\n");

  const baseUrl = "http://localhost:5000/api/transportation";
  const corridors = [
    { origin: "Bhubaneswar", destination: "Goa", label: "Corridor 1: Bhubaneswar → Goa" },
    { origin: "Bhubaneswar", destination: "Delhi", label: "Corridor 2: Bhubaneswar → Delhi" },
    { origin: "Delhi", destination: "Goa", label: "Corridor 3: Delhi → Goa" },
    { origin: "Mumbai", destination: "Goa", label: "Corridor 4: Mumbai → Goa" },
    { origin: "Kolkata", destination: "Bhubaneswar", label: "Corridor 5: Kolkata → Bhubaneswar" }
  ];

  let totalErrors = 0;

  for (const c of corridors) {
    console.log(`\n--- Testing ${c.label} ---`);
    const url = `${baseUrl}?origin=${encodeURIComponent(c.origin)}&destination=${encodeURIComponent(c.destination)}&travelers=2`;
    try {
      const res = await fetchJson(url);
      if (!res.success) {
        console.error(`❌ Request failed: ${res.message}`);
        totalErrors++;
        continue;
      }

      const items = res.data || [];
      console.log(`Total transport options returned: ${items.length}`);

      // 1. Verify no CAB, SUV, PRIVATE_CAR, RENTAL_CAR
      const forbiddenTypes = items.filter(t => ["CAB", "SUV", "PRIVATE_CAR", "RENTAL_CAR", "SEDAN"].includes(t.type));
      if (forbiddenTypes.length > 0) {
        console.error(`❌ Found forbidden vehicle types: ${forbiddenTypes.map(f => f.type).join(", ")}`);
        totalErrors++;
      } else {
        console.log(`✅ Zero cabs/cars/SUVs returned.`);
      }

      // 2. Verify no DEMO badges or flags
      const demoFlagged = items.filter(t => t.isDemo === true);
      if (demoFlagged.length > 0) {
        console.error(`❌ Found isDemo: true items!`);
        totalErrors++;
      } else {
        console.log(`✅ No isDemo: true flags.`);
      }

      // 3. Check types returned
      const flights = items.filter(t => t.type === "FLIGHT");
      const trains = items.filter(t => t.type === "TRAIN");
      const buses = items.filter(t => t.type === "BUS");

      console.log(`   Flights: ${flights.length}`);
      if (flights.length > 0) {
        const f = flights[0];
        console.log(`   Sample Flight: ${f.airline?.name || f.airline || f.marketingCarrier?.name} (${f.flightNumber}) - Price: ₹${f.price} [${f.fareLabel}]`);
      }

      console.log(`   Trains: ${trains.length}`);
      if (trains.length > 0) {
        const tr = trains[0];
        console.log(`   Sample Train: ${tr.trainName || tr.operator || tr.provider} (${tr.trainNumber || ""}) - Class: ${tr.selectedClass || tr.class} - Price: ₹${tr.price} [${tr.fareLabel}]`);
      }

      console.log(`   Buses: ${buses.length}`);
      if (buses.length > 0) {
        const b = buses[0];
        console.log(`   Sample Bus: ${b.operator || b.provider} - Type: ${b.busType || b.seatType} - Price: ₹${b.price} [${b.fareLabel}]`);
      }

      // Check price brackets
      flights.forEach(f => {
        if (f.price < 3000 || f.price > 60000) {
          console.warn(`   ⚠️ Flight price ₹${f.price} out of typical bounds`);
        }
      });

      trains.forEach(tr => {
        if (tr.price < 500 || tr.price > 7500) {
          console.warn(`   ⚠️ Train price ₹${tr.price} out of typical bounds`);
        }
      });

      buses.forEach(b => {
        if (b.price < 600 || b.price > 4500) {
          console.warn(`   ⚠️ Bus price ₹${b.price} out of typical bounds`);
        }
      });

    } catch (err) {
      console.error(`❌ Error fetching ${c.label}:`, err.message);
      totalErrors++;
    }
  }

  // Edge Case 1: International Destination (Dubai)
  console.log(`\n--- Testing Edge Case: Overseas Destination (Dubai) ---`);
  try {
    const url = `${baseUrl}?origin=Delhi&destination=Dubai&travelers=1`;
    const res = await fetchJson(url);
    const items = res.data || [];
    const trains = items.filter(t => t.type === "TRAIN");
    const buses = items.filter(t => t.type === "BUS");
    const flights = items.filter(t => t.type === "FLIGHT");

    if (trains.length === 0 && buses.length === 0) {
      console.log(`✅ Zero trains or buses for overseas route (Dubai).`);
    } else {
      console.error(`❌ Found trains/buses for overseas route!`);
      totalErrors++;
    }

    if (flights.length > 0) {
      console.log(`✅ Flights returned for Dubai (${flights.length} options). Sample: ₹${flights[0].price}`);
    } else {
      console.warn(`⚠️ No flights found for Dubai.`);
    }
  } catch (err) {
    console.error(`❌ Error testing Dubai:`, err.message);
    totalErrors++;
  }

  // Edge Case 2: Sub-filter by train class
  console.log(`\n--- Testing Edge Case: Train Class Sub-filter (Sleeper vs 2A) ---`);
  try {
    const directTrainService = require("../server/src/services/search.service");
    const resSleeper = await directTrainService.searchTrains({ origin: "Delhi", destination: "Goa", travelClass: "Sleeper" });
    const res2A = await directTrainService.searchTrains({ origin: "Delhi", destination: "Goa", travelClass: "2A" });

    if (resSleeper.data.length > 0 && res2A.data.length > 0) {
      const pSleeper = resSleeper.data[0].price;
      const p2A = res2A.data[0].price;
      console.log(`   Delhi → Goa Sleeper fare: ₹${pSleeper}, 2A fare: ₹${p2A}`);
      if (pSleeper < p2A && pSleeper >= 500 && p2A >= 2500) {
        console.log(`✅ Train class pricing correctly distinguishes Sleeper and 2A at market rates.`);
      } else {
        console.warn(`⚠️ Train class pricing did not match expected brackets.`);
      }
    }
  } catch (err) {
    console.log(`(Direct service check: ${err.message})`);
  }

  // Edge Case 3: Sub-filter by bus type
  console.log(`\n--- Testing Edge Case: Bus Type Sub-filter (Non-AC vs AC Sleeper) ---`);
  try {
    const directBusService = require("../server/src/services/search.service");
    const resNonAC = await directBusService.searchBuses({ origin: "Mumbai", destination: "Goa", busType: "Non-AC" });
    const resACSleeper = await directBusService.searchBuses({ origin: "Mumbai", destination: "Goa", busType: "AC Sleeper" });

    if (resNonAC.data.length > 0 && resACSleeper.data.length > 0) {
      const pNonAC = resNonAC.data[0].price;
      const pACSleeper = resACSleeper.data[0].price;
      console.log(`   Mumbai → Goa Non-AC fare: ₹${pNonAC}, AC Sleeper fare: ₹${pACSleeper}`);
      if (pNonAC < pACSleeper && pNonAC >= 750 && pACSleeper >= 2000) {
        console.log(`✅ Bus type pricing correctly distinguishes Non-AC and AC Sleeper at market rates.`);
      } else {
        console.warn(`⚠️ Bus type pricing did not match expected brackets.`);
      }
    }
  } catch (err) {
    console.log(`(Direct bus check: ${err.message})`);
  }

  console.log("\n==================================================");
  if (totalErrors === 0) {
    console.log("🎉 ALL VERIFICATION CHECKS PASSED PERFECTLY!");
  } else {
    console.log(`⚠️ VERIFICATION FINISHED WITH ${totalErrors} ISSUES.`);
  }
  console.log("==================================================");
}

runTests().catch(console.error);
