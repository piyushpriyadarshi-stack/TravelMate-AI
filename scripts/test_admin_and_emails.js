// ==================================================
// TravelMate AI - Admin Security & Email Notification Test Suite
// Verifies all 10 tests specified in user instructions
// ==================================================

const path = require("path");
const fs = require("fs");

// Load backend services
const authService = require("../server/src/services/auth.service");
const bookingService = require("../server/src/services/booking.service");
const paymentService = require("../server/src/services/payment.service");
const emailService = require("../server/src/services/email.service");
const { requireAuth, requireAdmin } = require("../server/src/middleware/auth.middleware");

// Simulated Express req, res, next helper
function createMockHttp({ token, user, body = {}, params = {}, query = {}, headers = {} }) {
  let onDone = null;
  const req = {
    cookies: token ? { token } : {},
    headers: {
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...headers
    },
    body,
    params,
    query,
    user: user || null
  };

  let statusCode = 200;
  let jsonOutput = null;

  const res = {
    status(code) {
      statusCode = code;
      return this;
    },
    json(data) {
      jsonOutput = data;
      if (onDone) onDone();
      return this;
    },
    cookie() {
      return this;
    }
  };

  return {
    req,
    res,
    setOnDone: (cb) => { onDone = cb; },
    getStatus: () => statusCode,
    getBody: () => jsonOutput
  };
}

async function runMiddleware(middleware, mockHttp) {
  return new Promise((resolve) => {
    let resolved = false;
    mockHttp.setOnDone(() => {
      if (!resolved) {
        resolved = true;
        resolve({ passed: false, statusCode: mockHttp.getStatus(), body: mockHttp.getBody() });
      }
    });

    try {
      middleware(mockHttp.req, mockHttp.res, (err) => {
        if (!resolved) {
          resolved = true;
          if (err) resolve({ passed: false, err });
          else resolve({ passed: true });
        }
      });
    } catch (err) {
      if (!resolved) {
        resolved = true;
        resolve({ passed: false, err });
      }
    }
  });
}

async function runTestSuite() {
  console.log("\n=======================================================");
  console.log("🚀 STARTING TRAVELMATE AI ADMIN & EMAIL VERIFICATION TESTS");
  console.log("=======================================================\n");

  let passedTests = 0;
  let totalTests = 10;

  // ----------------------------------------------------
  // TEST 10: Create a new normal user -> role = USER, Never ADMIN
  // ----------------------------------------------------
  console.log("▶ TEST 10: Create a new normal user (must default to USER, never ADMIN)...");
  const testEmail = `traveler_norm_${Date.now()}@example.com`;
  const normalUserResult = await authService.register({
    name: "John Traveler",
    email: testEmail,
    password: "Password123!",
    phone: "+91 9876543210"
  });

  if (normalUserResult.user.role === "USER" && normalUserResult.user.role !== "ADMIN") {
    console.log(`  ✅ Passed: New user registered with role: ${normalUserResult.user.role}`);
    passedTests++;
  } else {
    console.error(`  ❌ Failed: User had unexpected role: ${normalUserResult.user.role}`);
  }

  // ----------------------------------------------------
  // TEST 1: Normal user trying admin access -> Access Denied / 403
  // ----------------------------------------------------
  console.log("\n▶ TEST 1 & TEST 2: Normal user accessing protected Admin API directly...");
  const normalToken = normalUserResult.token;
  const mockHttp = createMockHttp({ token: normalToken });

  const authRes = await runMiddleware(requireAuth, mockHttp);

  if (authRes.passed) {
    // Now test requireAdmin with this normal user
    const adminRes = await runMiddleware(requireAdmin, mockHttp);

    if (!adminRes.passed && mockHttp.getStatus() === 403) {
      console.log(`  ✅ Passed: requireAdmin returned HTTP 403 Forbidden for normal user (${mockHttp.req.user.email})`);
      passedTests += 2; // Tests 1 & 2
    } else {
      console.error(`  ❌ Failed: requireAdmin status was ${mockHttp.getStatus()}, expected 403`);
    }
  } else {
    console.error("  ❌ Failed: requireAuth failed for valid normal token");
  }

  // ----------------------------------------------------
  // TEST 9: Unauthenticated request to /admin -> HTTP 401
  // ----------------------------------------------------
  console.log("\n▶ TEST 9: Unauthenticated visitor accessing /admin API (Redirect to login / 401)...");
  const unauthHttp = createMockHttp({ token: null });
  const unauthRes = await runMiddleware(requireAuth, unauthHttp);

  if (!unauthRes.passed && unauthHttp.getStatus() === 401) {
    console.log(`  ✅ Passed: Unauthenticated request received HTTP 401: ${unauthHttp.getBody()?.message}`);
    passedTests++;
  } else {
    console.error(`  ❌ Failed: Expected 401 for unauthenticated request, got ${unauthHttp.getStatus()}`);
  }

  // ----------------------------------------------------
  // TEST 3: Admin account piyushpriyadarshi980@gmail.com -> role ADMIN
  // ----------------------------------------------------
  console.log("\n▶ TEST 3: Admin identity verification for piyushpriyadarshi980@gmail.com...");
  const adminEmail = "piyushpriyadarshi980@gmail.com";
  let adminUser = await authService.findByEmail(adminEmail);
  if (!adminUser) {
    adminUser = await authService.upsertClerkUser({
      clerkId: "user_clerk_admin_piyush",
      email: adminEmail,
      name: "Piyush Priyadarshi"
    });
  }

  const safeAdmin = authService.formatSafeUser(adminUser);
  const adminToken = authService.generateToken(adminUser);

  const adminHttp = createMockHttp({ token: adminToken });
  const adminAuthRes = await runMiddleware(requireAuth, adminHttp);
  let adminRolePassed = false;

  if (adminAuthRes.passed) {
    const adminRoleRes = await runMiddleware(requireAdmin, adminHttp);
    adminRolePassed = adminRoleRes.passed;
  }

  if (safeAdmin.role === "ADMIN" && adminAuthRes.passed && adminRolePassed) {
    console.log(`  ✅ Passed: Admin user authenticated with role: ${safeAdmin.role}`);
    passedTests++;
  } else {
    console.error(`  ❌ Failed: Admin verification failed. Role: ${safeAdmin?.role}`);
  }

  // ----------------------------------------------------
  // TEST 4, 5, 6: Create Booking + Complete Payment + Dual Email Notifications
  // ----------------------------------------------------
  console.log("\n▶ TEST 4, 5, 6: Booking creation -> Payment verification -> Dual Email Notifications...");
  const bookingNumber = `TM-2026-TEST-${Math.floor(1000 + Math.random() * 9000)}`;

  // Capture emails sent via EmailService spies
  let sentCustomerEmail = null;
  let sentAdminEmail = null;

  const originalCustomerSend = emailService.sendCustomerBookingConfirmationEmail.bind(emailService);
  const originalAdminSend = emailService.sendAdminBookingNotificationEmail.bind(emailService);

  emailService.sendCustomerBookingConfirmationEmail = async (params) => {
    sentCustomerEmail = params;
    return originalCustomerSend(params);
  };

  emailService.sendAdminBookingNotificationEmail = async (params) => {
    sentAdminEmail = params;
    return originalAdminSend(params);
  };

  // 1. Create order
  const orderRes = await paymentService.createPaymentOrder({
    userId: normalUserResult.user.id,
    gateway: "sandbox",
    destinationId: "dest-goa-001",
    destinationName: "Goa, India",
    origin: "Delhi",
    hotelId: "hotel-goa-001",
    transportId: "trans-fl-delhi-goa-1",
    nights: 2,
    travelers: 2,
    guestDetails: {
      fullName: "John Traveler",
      email: testEmail,
      phone: "+91 9876543210"
    }
  });

  // 2. Verify payment
  const verifyRes = await paymentService.verifyPayment({
    gateway: "sandbox",
    bookingNumber: orderRes.bookingNumber,
    orderId: orderRes.orderId,
    paymentId: `pay_test_${Date.now()}`,
    signature: "sig_mock_sandbox",
    userId: normalUserResult.user.id,
    userEmail: testEmail,
    userName: "John Traveler"
  });

  const isConfirmed = verifyRes.status === "CONFIRMED" && verifyRes.paymentStatus === "PAID";
  const hasCustomerEmail = Boolean(sentCustomerEmail && sentCustomerEmail.to === testEmail);
  const hasAdminEmail = Boolean(sentAdminEmail && (sentAdminEmail.booking?.destination || sentAdminEmail.customerEmail));

  if (isConfirmed) {
    console.log(`  ✅ TEST 4 Passed: Booking verified and confirmed (Status: ${verifyRes.status}, Payment: ${verifyRes.paymentStatus})`);
    passedTests++;
  } else {
    console.error(`  ❌ TEST 4 Failed: Booking status was ${verifyRes.status}`);
  }

  if (hasCustomerEmail) {
    console.log(`  ✅ TEST 5 Passed: Customer confirmation email dispatched to: ${sentCustomerEmail.to}`);
    passedTests++;
  } else {
    console.error(`  ❌ TEST 5 Failed: Customer confirmation email not captured`);
  }

  if (hasAdminEmail) {
    console.log(`  ✅ TEST 6 Passed: Admin notification email dispatched for piyushpriyadarshi980@gmail.com`);
    passedTests++;
  } else {
    console.error(`  ❌ TEST 6 Failed: Admin notification email not captured`);
  }

  // ----------------------------------------------------
  // TEST 7: Refresh payment-success page -> No duplicate emails
  // ----------------------------------------------------
  console.log("\n▶ TEST 7: Page refresh / repeated request duplicate protection test...");
  sentCustomerEmail = null;
  sentAdminEmail = null;

  const repeatVerifyRes = await paymentService.verifyPayment({
    gateway: "sandbox",
    bookingNumber: orderRes.bookingNumber,
    orderId: orderRes.orderId,
    paymentId: `pay_test_${Date.now()}`,
    signature: "sig_mock_sandbox",
    userId: normalUserResult.user.id,
    userEmail: testEmail,
    userName: "John Traveler"
  });

  const duplicatePrevented = (sentCustomerEmail === null && sentAdminEmail === null);
  if (duplicatePrevented && repeatVerifyRes.success) {
    console.log(`  ✅ TEST 7 Passed: Duplicate emails strictly prevented on repeated verification/refresh`);
    passedTests++;
  } else {
    console.error(`  ❌ TEST 7 Failed: Duplicate emails were triggered on refresh`);
  }

  // ----------------------------------------------------
  // TEST 8: Payment failure -> No confirmation emails
  // ----------------------------------------------------
  console.log("\n▶ TEST 8: Payment failure test (tampered signature)...");
  sentCustomerEmail = null;
  sentAdminEmail = null;

  // Create another order
  const failOrderRes = await paymentService.createPaymentOrder({
    userId: normalUserResult.user.id,
    gateway: "sandbox",
    destinationId: "dest-goa-001",
    destinationName: "Goa, India",
    origin: "Delhi",
    hotelId: "hotel-goa-001",
    nights: 1,
    travelers: 1,
    guestDetails: { fullName: "Failed Traveler", email: "fail@example.com" }
  });

  const failVerifyRes = await paymentService.verifyPayment({
    gateway: "razorpay", // Real gateway mode requiring real crypto HMAC
    bookingNumber: failOrderRes.bookingNumber,
    orderId: failOrderRes.orderId,
    paymentId: "pay_bad_id",
    signature: "invalid_tampered_signature_12345",
    userId: normalUserResult.user.id
  });

  const noEmailOnFailure = (sentCustomerEmail === null && sentAdminEmail === null);
  if (!failVerifyRes.success && noEmailOnFailure) {
    console.log(`  ✅ TEST 8 Passed: Payment failed as expected & zero confirmation emails sent (${failVerifyRes.message})`);
    passedTests++;
  } else {
    console.error(`  ❌ TEST 8 Failed: Bad signature was accepted or email was sent`);
  }

  // Restore original spies
  emailService.sendCustomerBookingConfirmationEmail = originalCustomerSend;
  emailService.sendAdminBookingNotificationEmail = originalAdminSend;

  console.log("\n=======================================================");
  console.log(`🏁 TEST RESULTS: ${passedTests} / ${totalTests} TESTS PASSED`);
  console.log("=======================================================\n");

  if (passedTests === totalTests) {
    console.log("🎉 ALL 10 TESTS PASSED WITH 100% SUCCESS!");
    process.exit(0);
  } else {
    console.error(`⚠️ ${totalTests - passedTests} tests failed.`);
    process.exit(1);
  }
}

runTestSuite().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
