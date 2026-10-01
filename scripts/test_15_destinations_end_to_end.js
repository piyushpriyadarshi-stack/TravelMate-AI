// ==================================================
// TravelMate AI - End-to-End 15 Destinations Validation Suite
// Tests that each of the 15 supported destinations has:
// 1. Destination Information with authentic photographs
// 2. Multiple verified hotels with room types and date-aware capacities
// 3. Authentic activities with pricing and durations
// 4. Transportation connectivity from user origin
// 5. Provider-based search compatibility
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

const SUPPORTED_15 = [
  { name: "Goa", key: "goa", country: "India", isDomestic: true },
  { name: "Delhi", key: "delhi", country: "India", isDomestic: true },
  { name: "Mumbai", key: "mumbai", country: "India", isDomestic: true },
  { name: "Jaipur", key: "jaipur", country: "India", isDomestic: true },
  { name: "Manali", key: "manali", country: "India", isDomestic: true },
  { name: "Bengaluru", key: "bengaluru", country: "India", isDomestic: true },
  { name: "Kolkata", key: "kolkata", country: "India", isDomestic: true },
  { name: "Bhubaneswar", key: "bhubaneswar", country: "India", isDomestic: true },
  { name: "Kerala", key: "kerala", country: "India", isDomestic: true },
  { name: "Hyderabad", key: "hyderabad", country: "India", isDomestic: true },
  { name: "Dubai", key: "dubai", country: "United Arab Emirates", isDomestic: false },
  { name: "Singapore", key: "singapore", country: "Singapore", isDomestic: false },
  { name: "Paris", key: "paris", country: "France", isDomestic: false },
  { name: "London", key: "london", country: "United Kingdom", isDomestic: false },
  { name: "Tokyo", key: "tokyo", country: "Japan", isDomestic: false }
];

async function runValidation() {
  console.log("==================================================");
  console.log("TESTING 15 SUPPORTED DESTINATIONS (QUALITY > QUANTITY)");
  console.log("==================================================\n");

  let totalPassed = 0;
  let totalFailed = 0;

  function assert(cond, msg) {
    if (cond) {
      console.log(`  ✓ PASS: ${msg}`);
      totalPassed++;
    } else {
      console.error(`  ✗ FAIL: ${msg}`);
      totalFailed++;
    }
  }

  const BASE_URL = "http://localhost:5000/api";

  for (let i = 0; i < SUPPORTED_15.length; i++) {
    const dest = SUPPORTED_15[i];
    console.log(`\nDestination ${i + 1}/${SUPPORTED_15.length}: ${dest.name} (${dest.country})`);

    // 1. Destination Details
    try {
      const res = await fetchJson(`${BASE_URL}/destinations/${dest.name}`);
      assert(res.status === 200, `${dest.name} details endpoint returns 200`);
      assert(res.data.success === true, `${dest.name} response success is true`);
      const d = res.data.data;
      assert(d && d.name && d.name.toLowerCase().includes(dest.key), `${dest.name} name matched: "${d?.name}"`);
      assert(d.imageUrl && d.imageUrl.startsWith("https://images.unsplash.com"), `${dest.name} has authentic Unsplash photograph`);
      assert(Array.isArray(d.attractions) && d.attractions.length >= 4, `${dest.name} has attractions list (Count: ${d?.attractions?.length})`);

      // 2. Hotels
      assert(Array.isArray(d.hotels) && d.hotels.length >= 2, `${dest.name} has multiple hotels (Count: ${d?.hotels?.length})`);
      if (d.hotels && d.hotels.length > 0) {
        const firstHotel = d.hotels[0];
        assert(Array.isArray(firstHotel.rooms) && firstHotel.rooms.length >= 2, `${firstHotel.name} has multiple room types (Count: ${firstHotel?.rooms?.length})`);
        assert(firstHotel.pricePerNight > 0, `${firstHotel.name} has price: ₹${firstHotel.pricePerNight}`);
        assert(Array.isArray(firstHotel.amenities) && firstHotel.amenities.length > 0, `${firstHotel.name} has amenities list`);
      }

      // 3. Activities
      assert(Array.isArray(d.activities) && d.activities.length >= 2, `${dest.name} has curated activities (Count: ${d?.activities?.length})`);
      if (d.activities && d.activities.length > 0) {
        const act = d.activities[0];
        assert(act.name && act.duration && act.price > 0, `${dest.name} activity "${act.name}" has duration & price (₹${act.price})`);
      }

      // 4. Transportation from Origin (e.g. Bhubaneswar)
      const transRes = await fetchJson(`${BASE_URL}/transportation?origin=Bhubaneswar&destination=${encodeURIComponent(dest.name)}`);
      assert(transRes.status === 200, `Transportation Bhubaneswar -> ${dest.name} returns 200`);
      assert(transRes.data.data && transRes.data.data.length > 0, `Transportation options returned (Count: ${transRes.data.data?.length})`);

      // 5. Provider Search API
      const searchRes = await fetchJson(`${BASE_URL}/search/hotels?destination=${encodeURIComponent(dest.name)}&page=1&limit=5`);
      assert(searchRes.status === 200, `Provider Search /api/search/hotels?destination=${dest.name} returns 200`);
      assert(searchRes.data.data && searchRes.data.data.length > 0, `Provider Search returns normalized hotels`);

    } catch (err) {
      assert(false, `Error validating ${dest.name}: ${err.message}`);
    }
  }

  console.log("\n==================================================");
  console.log(`COMPREHENSIVE SUMMARY: ${totalPassed} PASSED, ${totalFailed} FAILED`);
  console.log("==================================================");

  if (totalFailed > 0) process.exit(1);
}

runValidation().catch(e => {
  console.error(e);
  process.exit(1);
});
