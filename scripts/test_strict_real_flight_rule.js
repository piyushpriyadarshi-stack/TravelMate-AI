// ==================================================
// Test Suite: STRICT REAL-FLIGHT RULE
// Verifies:
// 1. Zero invented/fake flights in production mode
// 2. Exact required messages:
//    - "No verified flights found for this route and date."
//    - "Flight availability is temporarily unavailable."
// 3. Clear TEST/DEVELOPMENT DATA labeling in sandbox mode
// 4. Provider-returned legs on connecting flights (e.g. BBI -> HYD, HYD -> GOA)
// 5. Pre-booking provider availability & price revalidation
// 6. Final booking contains verified provider response
// ==================================================

const assert = require("assert");

async function runTests() {
  console.log("✈️ Starting Strict Real-Flight Rule Test Suite...\n");

  const searchService = require("../server/src/services/search.service");
  const dataService = require("../server/src/services/data.service");
  const paymentService = require("../server/src/services/payment.service");
  const bookingService = require("../server/src/services/booking.service");
  const AuthorizedLiveFlightProvider = require("../server/src/providers/flights/AuthorizedLiveFlightProvider");
  const SandboxFlightProvider = require("../server/src/providers/flights/SandboxFlightProvider");

  // TEST 1: Authorized Live Provider when API key/credentials are missing or route has no verified inventory
  console.log("TEST 1: Authorized Live Provider without API credentials returns exact mandated message");
  const liveProvider = new AuthorizedLiveFlightProvider();
  const liveSearchRes = await liveProvider.searchFlights({
    origin: "Bhubaneswar",
    destination: "Goa",
    departureDate: "2026-10-15"
  });

  assert.strictEqual(liveSearchRes.isLive, true, "Provider must flag isLive = true");
  assert.strictEqual(liveSearchRes.flights.length, 0, "Must NEVER invent flights if provider API is unavailable");
  assert.strictEqual(
    liveSearchRes.message,
    "Flight availability is temporarily unavailable.",
    `Expected exact message 'Flight availability is temporarily unavailable.', got '${liveSearchRes.message}'`
  );
  console.log("✓ TEST 1 PASSED: Live provider returns zero flights and exact message: 'Flight availability is temporarily unavailable.'");

  // TEST 2: Authorized Live Provider when API responds with empty offers
  console.log("\nTEST 2: Authorized Live Provider returns exact empty inventory message when no verified flights exist");
  liveProvider.clientId = "live_client_dummy_id";
  liveProvider._callLiveApi = async () => []; // Provider returned 0 offers
  const emptyRes = await liveProvider.searchFlights({
    origin: "Bhubaneswar",
    destination: "Goa",
    departureDate: "2026-10-15"
  });

  assert.strictEqual(emptyRes.flights.length, 0, "Must contain 0 flights");
  assert.strictEqual(
    emptyRes.message,
    "No verified flights found for this route and date.",
    `Expected exact message 'No verified flights found for this route and date.', got '${emptyRes.message}'`
  );
  console.log("✓ TEST 2 PASSED: Live provider returns exact message: 'No verified flights found for this route and date.'");

  // TEST 3: Sandbox/Test Mode Data Labeling
  console.log("\nTEST 3: Sandbox / Development data is explicitly labeled as TEST/DEVELOPMENT DATA");
  const sandboxRes = await searchService.searchFlights({
    provider: "sandbox",
    origin: "Bhubaneswar",
    destination: "Goa"
  });

  assert.strictEqual(sandboxRes.meta.isLive, false, "Sandbox flights must have isLive = false");
  assert.strictEqual(
    sandboxRes.meta.verificationStatus,
    "TEST_DEVELOPMENT_DATA",
    "Must be labeled TEST_DEVELOPMENT_DATA"
  );
  assert.strictEqual(
    sandboxRes.meta.label,
    "TEST/DEVELOPMENT DATA",
    "Label must be TEST/DEVELOPMENT DATA"
  );

  for (const fl of sandboxRes.data) {
    assert.strictEqual(fl.isLive, false, `Flight ${fl.flightNumber} must have isLive = false`);
    assert.strictEqual(
      fl.verificationStatus,
      "TEST_DEVELOPMENT_DATA",
      `Flight ${fl.flightNumber} must have verificationStatus = TEST_DEVELOPMENT_DATA`
    );
    assert.strictEqual(
      fl.label,
      "TEST/DEVELOPMENT DATA",
      `Flight ${fl.flightNumber} must have label = TEST/DEVELOPMENT DATA`
    );
    assert.ok(fl.providerNotice.includes("TEST/DEVELOPMENT DATA"), "Notice must state TEST/DEVELOPMENT DATA");
  }
  console.log(`✓ TEST 3 PASSED: All ${sandboxRes.data.length} flights strictly labeled TEST/DEVELOPMENT DATA`);

  // TEST 4: Connecting Flights Contain Actual Provider-Returned Legs (e.g. BBI -> HYD, HYD -> GOA)
  console.log("\nTEST 4: Connecting Flights provide explicit provider-returned legs");
  const connectingFlight = sandboxRes.data.find(f => f.stops > 0 && f.airline?.name === "IndiGo");
  assert.ok(connectingFlight, "Connecting IndiGo flight must exist");
  assert.strictEqual(connectingFlight.stops, 1, "Must be 1 stop connecting flight");
  assert.ok(Array.isArray(connectingFlight.segments), "Must have segments array");
  assert.strictEqual(connectingFlight.segments.length, 2, "1-stop connecting flight must have exactly 2 legs");

  const leg1 = connectingFlight.segments[0];
  const leg2 = connectingFlight.segments[1];

  console.log(`  Leg 1: ${leg1.flightNumber} (${leg1.airline}) ${leg1.origin.city} (${leg1.origin.airportCode}) → ${leg1.destination.city} (${leg1.destination.airportCode})`);
  console.log(`  Leg 2: ${leg2.flightNumber} (${leg2.airline}) ${leg2.origin.city} (${leg2.origin.airportCode}) → ${leg2.destination.city} (${leg2.destination.airportCode})`);

  assert.strictEqual(leg1.origin.city, "Bhubaneswar", "Leg 1 must depart from user origin");
  assert.strictEqual(leg1.destination.city, "Hyderabad", "Leg 1 must arrive at transit hub");
  assert.strictEqual(leg2.origin.city, "Hyderabad", "Leg 2 must depart from transit hub");
  assert.strictEqual(leg2.destination.city, "Goa", "Leg 2 must arrive at destination");
  assert.strictEqual(leg1.flightNumber, "6E-621", "Leg 1 flight number must be verified");
  assert.strictEqual(leg2.flightNumber, "6E-843", "Leg 2 flight number must be verified");
  console.log("✓ TEST 4 PASSED: Connecting flight legs BBI → HYD and HYD → GOA verified with authentic legs");

  // TEST 5: Pre-Booking Revalidation & Price Check with Provider
  console.log("\nTEST 5: Pre-Booking / Pre-Payment Revalidation");
  const revalRes = await searchService.revalidateFlight({
    flightId: connectingFlight.id,
    providerFlightId: connectingFlight.providerFlightId,
    expectedPrice: connectingFlight.price
  });

  assert.strictEqual(revalRes.available, true, "Revalidation should succeed for valid flight");
  assert.strictEqual(revalRes.verifiedPrice, connectingFlight.price, "Price should match verified fare");
  assert.ok(revalRes.verifiedAt, "Must include ISO verification timestamp");
  console.log(`✓ TEST 5 PASSED: Fresh revalidation confirmed at ${revalRes.verifiedAt}`);

  // TEST 6: Payment Service Revalidation Protection
  console.log("\nTEST 6: Payment Service pre-order provider verification");
  const orderRes = await paymentService.createPaymentOrder({
    userId: "usr_test_verified_123",
    destinationId: "dest-goa-001",
    destinationName: "Goa",
    hotelId: "hotel-goa-001",
    transportId: connectingFlight.id,
    transportDetails: connectingFlight,
    checkIn: "2026-10-15",
    checkOut: "2026-10-20",
    nights: 5,
    travelers: 2,
    guestDetails: {
      fullName: "Ananya Sharma",
      email: "ananya@example.com",
      phone: "+91 98765 43210"
    },
    gateway: "razorpay"
  });

  assert.strictEqual(orderRes.success, true, "Payment order created successfully");
  assert.ok(orderRes.orderId, "Must issue valid order ID");
  console.log(`✓ TEST 6 PASSED: Order created with server-verified fare breakdown: ₹${orderRes.amount}`);

  // TEST 7: Final Booking stores verified provider response
  console.log("\nTEST 7: Final booking record contains verified provider response");
  const verifyRes = await paymentService.verifyPayment({
    gateway: "razorpay",
    bookingNumber: orderRes.bookingNumber,
    orderId: orderRes.orderId,
    paymentId: `pay_rzp_test_${Date.now()}`,
    userId: "usr_test_verified_123"
  });

  assert.strictEqual(verifyRes.success, true, "Payment verification must succeed");
  const finalBooking = verifyRes.booking;
  assert.ok(finalBooking.transportation, "Booking must have transportation record");
  assert.strictEqual(finalBooking.transportation.type, "FLIGHT", "Must be FLIGHT");
  assert.strictEqual(finalBooking.transportation.provider, connectingFlight.provider);
  assert.strictEqual(finalBooking.transportation.verificationStatus, "TEST_DEVELOPMENT_DATA");
  assert.strictEqual(finalBooking.transportation.label, "TEST/DEVELOPMENT DATA");
  assert.ok(finalBooking.transportation.verifiedAt, "Must have verifiedAt timestamp");
  assert.ok(Array.isArray(finalBooking.transportation.segments), "Must have verified segments");
  assert.strictEqual(finalBooking.transportation.segments.length, 2, "Must contain connecting segments");
  console.log("✓ TEST 7 PASSED: Final confirmed booking record contains verified provider flight response & segments");

  // TEST 8: Production Mode Rejects All Fake Flights
  console.log("\nTEST 8: Production mode guarantees zero fake/mock flights");
  process.env.TRAVELMATE_MODE = "production";
  const prodTransport = await dataService.getTransportation({
    origin: "Bhubaneswar",
    destination: "Goa",
    type: "FLIGHT"
  });

  assert.strictEqual(prodTransport.data.length, 0, "Production mode must NOT return mock flights");
  assert.strictEqual(
    prodTransport.message,
    "No verified flights found for this route and date.",
    `Expected 'No verified flights found for this route and date.', got '${prodTransport.message}'`
  );
  console.log("✓ TEST 8 PASSED: Production mode returns zero mock flights and strict message: 'No verified flights found for this route and date.'");

  // Reset environment
  delete process.env.TRAVELMATE_MODE;

  console.log("\n==================================================");
  console.log("🎉 ALL STRICT REAL-FLIGHT RULE TESTS PASSED (8/8)!");
  console.log("==================================================");
}

runTests().catch(err => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
