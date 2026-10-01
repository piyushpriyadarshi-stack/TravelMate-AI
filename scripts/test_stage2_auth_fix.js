// ==================================================
// Automated Verification Script for STAGE 2 FIX:
// Authentication Must Be Required for Booking
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
  console.log("RUNNING STAGE 2 AUTHENTICATION VERIFICATION SUITE");
  console.log("==================================================\n");

  // --------------------------------------------------
  // TEST 1: Logged out -> Browse destination
  // Expected: Allowed (200 OK)
  // --------------------------------------------------
  console.log("TEST 1: Logged out -> Browse destinations");
  try {
    const res = await fetch(`${BASE_URL}/destinations`);
    const data = await res.json();
    assert(res.status === 200, `Status is 200 (Got ${res.status})`);
    assert(data.success === true && Array.isArray(data.data) && data.data.length > 0, `Returned ${data.count || data.data?.length} destinations`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 2: Logged out -> Select hotel
  // Expected: Allowed (200 OK)
  // --------------------------------------------------
  console.log("\nTEST 2: Logged out -> Browse / Select hotel");
  try {
    const res = await fetch(`${BASE_URL}/hotels`);
    const data = await res.json();
    assert(res.status === 200, `Status is 200 (Got ${res.status})`);
    assert(data.success === true && Array.isArray(data.data) && data.data.length > 0, `Returned ${data.count || data.data?.length} hotels`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 3: Logged out -> Select transportation
  // Expected: Allowed (200 OK)
  // --------------------------------------------------
  console.log("\nTEST 3: Logged out -> Browse / Select transportation");
  try {
    const res = await fetch(`${BASE_URL}/transportation`);
    const data = await res.json();
    assert(res.status === 200, `Status is 200 (Got ${res.status})`);
    assert(data.success === true && Array.isArray(data.data) && data.data.length > 0, `Returned ${data.count || data.data?.length} transport options`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 4: Logged out -> Verify no booking or order created without credentials
  // Expected: Protected, no unauthenticated booking
  // --------------------------------------------------
  console.log("\nTEST 4: Logged out -> Validate booking endpoint without auth");
  try {
    const res = await fetch(`${BASE_URL}/bookings/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ destinationId: "dest-goa-001" })
    });
    const data = await res.json();
    assert(res.status === 401, `Status is 401 Unauthorized (Got ${res.status})`);
    assert(data.success === false, `Response indicates success=false: "${data.message}"`);
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 5: Logged out -> Directly call POST /api/bookings
  // Expected: 401 Authentication required. NO booking created.
  // --------------------------------------------------
  console.log("\nTEST 5: Logged out -> Directly call POST /api/bookings");
  try {
    const res = await fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destinationId: "dest-goa-001",
        destinationName: "Goa, India",
        userId: "fake-user-id-trying-to-spoof",
        grandTotal: 15000
      })
    });
    const data = await res.json();
    assert(res.status === 401, `Status is 401 Unauthorized (Got ${res.status})`);
    assert(data.success === false, `Response message: "${data.message}"`);
    assert(data.message.toLowerCase().includes("authentication required"), "Message contains 'authentication required'");
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 6: Logged out -> Directly call POST /api/payments/create-order
  // Expected: 401 Authentication required. NO payment order created.
  // --------------------------------------------------
  console.log("\nTEST 6: Logged out -> Directly call POST /api/payments/create-order");
  try {
    const res = await fetch(`${BASE_URL}/payments/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destinationId: "dest-goa-001",
        destinationName: "Goa, India",
        userId: "hacker-user-attempting-spoof",
        currency: "INR",
        nights: 2,
        travelers: 1
      })
    });
    const data = await res.json();
    assert(res.status === 401, `Status is 401 Unauthorized (Got ${res.status})`);
    assert(data.success === false, `Response message: "${data.message}"`);
    assert(data.message.toLowerCase().includes("authentication required"), "Message contains 'authentication required'");
  } catch (err) {
    assert(false, `Request failed: ${err.message}`);
  }

  // --------------------------------------------------
  // Setup Users for Tests 7, 8, 9, 10
  // Register User A and User B
  // --------------------------------------------------
  console.log("\nSetup: Registering User A & User B for isolation tests...");
  const randA = Math.floor(Math.random() * 10000);
  const randB = Math.floor(Math.random() * 10000);

  let tokenA = null;
  let userA = null;
  let tokenB = null;
  let userB = null;

  try {
    const regResA = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `Traveler A ${randA}`,
        email: `traveler_a_${randA}@example.com`,
        password: "Password123!",
        confirmPassword: "Password123!"
      })
    });
    const regDataA = await regResA.json();
    tokenA = regDataA.token;
    userA = regDataA.user;

    const regResB = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `Traveler B ${randB}`,
        email: `traveler_b_${randB}@example.com`,
        password: "Password123!",
        confirmPassword: "Password123!"
      })
    });
    const regDataB = await regResB.json();
    tokenB = regDataB.token;
    userB = regDataB.user;

    assert(Boolean(tokenA && userA?.id), `User A registered successfully (ID: ${userA?.id})`);
    assert(Boolean(tokenB && userB?.id), `User B registered successfully (ID: ${userB?.id})`);
  } catch (err) {
    assert(false, `Registration failed: ${err.message}`);
    return;
  }

  // --------------------------------------------------
  // TEST 7: Login -> Book trip
  // Expected: Booking process allowed, booking associated strictly with userA.id
  // Even if req.body has a fake userId, backend must enforce req.user.id!
  // --------------------------------------------------
  console.log("\nTEST 7: Login -> Book trip (Backend enforces req.user.id, ignoring any spoofed userId in body)");
  let bookingA = null;
  try {
    const res = await fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenA}`
      },
      body: JSON.stringify({
        destinationId: "dest-goa-001",
        destinationName: "Goa, India",
        userId: "spoofed-user-id-in-body", // Malicious attempt to spoof
        hotelId: "hotel-taj-goa",
        checkIn: "2026-10-10",
        checkOut: "2026-10-13",
        nights: 3,
        travelers: 2,
        grandTotal: 34500,
        guestDetails: {
          fullName: userA.name,
          email: userA.email
        }
      })
    });
    const data = await res.json();
    assert(res.status === 201, `Status is 201 Created (Got ${res.status})`);
    assert(data.success === true, `Booking created successfully: ${data.booking?.bookingNumber}`);
    assert(data.booking?.userId === userA.id, `CRITICAL: booking.userId (${data.booking?.userId}) STRICTLY matches authenticated userA.id (${userA.id}), spoofed body userId was ignored`);
    bookingA = data.booking;
  } catch (err) {
    assert(false, `Booking creation failed: ${err.message}`);
  }

  // Also test Payment order creation & verification for authenticated user
  console.log("  Testing Payment flow with Auth for User A...");
  try {
    const orderRes = await fetch(`${BASE_URL}/payments/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenA}`
      },
      body: JSON.stringify({
        destinationId: "dest-goa-001",
        destinationName: "Goa, India",
        currency: "INR",
        nights: 2,
        travelers: 1,
        guestDetails: { fullName: userA.name, email: userA.email }
      })
    });
    const orderData = await orderRes.json();
    assert(orderRes.status === 200 && orderData.success === true, `Payment order created: ${orderData.orderId || orderData.bookingNumber}`);

    // Verify payment
    const verifyRes = await fetch(`${BASE_URL}/payments/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenA}`
      },
      body: JSON.stringify({
        gateway: orderData.gateway || "razorpay",
        orderId: orderData.orderId,
        paymentId: "pay_mock_verified_123",
        bookingNumber: orderData.bookingNumber,
        paymentMethod: "UPI"
      })
    });
    const verifyData = await verifyRes.json();
    assert(verifyRes.status === 200 && verifyData.success === true, `Payment verification succeeded: ${verifyData.bookingReference}`);
    assert(verifyData.booking?.userId === userA.id, `Confirmed payment booking associated with userA.id (${userA.id})`);
  } catch (err) {
    assert(false, `Payment flow failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 8: Login -> View My Trips
  // Expected: Only the logged-in user's bookings are shown.
  // --------------------------------------------------
  console.log("\nTEST 8: Login -> View My Trips (User isolation)");
  try {
    // User A bookings
    const resA = await fetch(`${BASE_URL}/bookings`, {
      headers: { "Authorization": `Bearer ${tokenA}` }
    });
    const dataA = await resA.json();
    assert(resA.status === 200, `User A fetch status is 200 (Got ${resA.status})`);
    assert(Array.isArray(dataA.bookings) && dataA.bookings.length >= 1, `User A sees their bookings (Count: ${dataA.count})`);
    const allUserA = dataA.bookings.every(b => b.userId === userA.id);
    assert(allUserA, `All bookings returned to User A strictly have userId === userA.id`);

    // User B bookings (should be empty because User B hasn't booked anything yet)
    const resB = await fetch(`${BASE_URL}/bookings`, {
      headers: { "Authorization": `Bearer ${tokenB}` }
    });
    const dataB = await resB.json();
    assert(resB.status === 200, `User B fetch status is 200 (Got ${resB.status})`);
    assert(Array.isArray(dataB.bookings) && dataB.bookings.length === 0, `User B sees ZERO bookings belonging to User A (Count: ${dataB.count})`);
  } catch (err) {
    assert(false, `User trips fetch failed: ${err.message}`);
  }

  // --------------------------------------------------
  // TEST 9: User B attempts to access User A's booking
  // Expected: Access denied (403) or not found (404).
  // --------------------------------------------------
  console.log("\nTEST 9: User B attempts to access & cancel User A's booking");
  if (bookingA) {
    try {
      // User B attempts to GET User A's booking by ID
      const accessRes = await fetch(`${BASE_URL}/bookings/${bookingA.id}`, {
        headers: { "Authorization": `Bearer ${tokenB}` }
      });
      const accessData = await accessRes.json();
      assert(accessRes.status === 403 || accessRes.status === 404, `User B direct access blocked with status ${accessRes.status}`);
      assert(accessData.success === false, `User B blocked message: "${accessData.message}"`);

      // User B attempts to CANCEL User A's booking
      const cancelRes = await fetch(`${BASE_URL}/bookings/${bookingA.id}/cancel`, {
        method: "POST",
        headers: { "Authorization": `Bearer ${tokenB}` }
      });
      const cancelData = await cancelRes.json();
      assert(cancelRes.status === 403 || cancelRes.status === 404, `User B cancellation attempt blocked with status ${cancelRes.status}`);
      assert(cancelData.success === false, `User B cancellation blocked message: "${cancelData.message}"`);
    } catch (err) {
      assert(false, `Ownership test failed: ${err.message}`);
    }
  }

  // --------------------------------------------------
  // TEST 10: Logout / Unauthenticated -> Try booking & accessing bookings again
  // Expected: Login required (401)
  // --------------------------------------------------
  console.log("\nTEST 10: Logout -> Try booking again (No auth token)");
  try {
    const res = await fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destinationId: "dest-goa-001",
        grandTotal: 20000
      })
    });
    const data = await res.json();
    assert(res.status === 401, `Status is 401 Unauthorized (Got ${res.status})`);
    assert(data.success === false, `Unauthenticated booking blocked: "${data.message}"`);

    // Try fetching /bookings logged out
    const listRes = await fetch(`${BASE_URL}/bookings`);
    const listData = await listRes.json();
    assert(listRes.status === 401, `GET /api/bookings logged out returned 401 (Got ${listRes.status})`);
    assert(listData.success === false, `Logged out booking view blocked: "${listData.message}"`);
  } catch (err) {
    assert(false, `Logout verification failed: ${err.message}`);
  }

  // --------------------------------------------------
  // SUMMARY
  // --------------------------------------------------
  console.log("\n==================================================");
  console.log(`TEST RESULTS: ${testsPassed} PASSED, ${testsFailed} FAILED`);
  console.log("==================================================");

  if (testsFailed === 0) {
    console.log("🎉 ALL STAGE 2 FIX REQUIREMENTS ARE FULLY SATISFIED!");
  } else {
    process.exit(1);
  }
}

runTests();
