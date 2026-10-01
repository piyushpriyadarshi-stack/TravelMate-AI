const path = require("path");
const searchService = require("../server/src/services/search.service");
const dataService = require("../server/src/services/data.service");

async function test() {
  console.log("--- Testing searchService.searchFlights ---");
  const flightRes = await searchService.searchFlights({
    origin: "Bhubaneswar",
    destination: "Goa",
    departureDate: "2026-10-05",
    travelers: 2
  });
  console.log("Flight search result:", {
    success: flightRes.success,
    status: flightRes.status,
    message: flightRes.message,
    dataCount: flightRes.data ? flightRes.data.length : 0,
    sample: flightRes.data && flightRes.data[0] ? flightRes.data[0] : null
  });

  console.log("\n--- Testing searchService.searchTrains ---");
  const trainRes = await searchService.searchTrains({
    origin: "Bhubaneswar",
    destination: "Goa",
    date: "2026-10-05",
    travelers: 2
  });
  console.log("Train search result:", {
    success: trainRes.success,
    count: trainRes.data ? trainRes.data.length : 0,
    sample: trainRes.data && trainRes.data[0] ? trainRes.data[0] : null
  });

  console.log("\n--- Testing searchService.searchBuses ---");
  const busRes = await searchService.searchBuses({
    origin: "Bhubaneswar",
    destination: "Goa",
    date: "2026-10-05",
    travelers: 2
  });
  console.log("Bus search result:", {
    success: busRes.success,
    count: busRes.data ? busRes.data.length : 0,
    sample: busRes.data && busRes.data[0] ? busRes.data[0] : null
  });

  console.log("\n--- Testing dataService.getTransportation ---");
  const transRes = await dataService.getTransportation({
    origin: "Bhubaneswar",
    destination: "Goa",
    date: "2026-10-05",
    travelers: 2
  });
  console.log("dataService getTransportation count:", transRes.count);
  console.log("dataService types:", transRes.data.map(d => `${d.type}: ${d.airline?.name || d.operator || d.provider} (₹${d.price})`));
}

test().catch(console.error);
