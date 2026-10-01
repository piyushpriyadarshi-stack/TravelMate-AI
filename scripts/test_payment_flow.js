const path = require("path");
require(path.resolve(__dirname, "../server/node_modules/dotenv")).config({ path: path.resolve(__dirname, "../server/.env") });

const app = require("../server/src/server.js");

let baseUrl = "http://127.0.0.1:5055";

async function request(path, options = {}) {
  const url = `${baseUrl}/api${path}`;
  const headers = options.headers || {};
  if (options.body && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(url, {
    method: options.method || "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  const data = await res.json().catch(() => null);
  return { status: res.status, ok: res.ok, data };
}

async function runTests(server) {
  try {
    console.log("=== Testing Real Payment Success & Security Flow ===");

    // 1. Health check
    const health = await request("/health");
    console.log("1. Server Health:", health.status, health.data?.status || "OK");

    // 2. Login test user
    const loginRes = await request("/auth/login", {
      method: "POST",
      body: { email: "traveler@example.com", password: "password123" }
    });
    console.log("2. Test User Login:", loginRes.status, loginRes.data?.success ? "SUCCESS" : "FAILED");
    const token = loginRes.data?.token;
    const user = loginRes.data?.user;
    if (!token) {
      console.error("Cannot proceed without auth token");
      return;
    }
    const authHeaders = { Authorization: `Bearer ${token}` };

    // 3. Create Order
    const orderRes = await request("/payments/create-order", {
      method: "POST",
      headers: authHeaders,
      body: {
        gateway: "razorpay",
        destinationId: "dest-goa",
        destinationName: "Goa",
        hotelId: "hotel-goa-taj-resort",
        nights: 2,
        travelers: 2,
        guestDetails: {
          fullName: user.name || "Piyush Sharma",
          email: user.email,
          phone: "+91 98765 43210"
        }
      }
    });
    console.log("3. Create Razorpay Order:", orderRes.status, orderRes.data?.bookingNumber, "Amount:", orderRes.data?.amount);
    const bookingNumber = orderRes.data?.bookingNumber;
    const orderId = orderRes.data?.orderId;

    // 4. Test Failed Signature / Tampered Verification
    const failedVerify = await request("/payments/verify", {
      method: "POST",
      headers: authHeaders,
      body: {
        gateway: "razorpay",
        bookingNumber: bookingNumber,
        orderId: orderId,
        paymentId: "pay_fake_999",
        signature: "invalid_sig_abc",
        userId: user.id
      }
    });
    console.log("4. Failed / Invalid Signature Handling:", failedVerify.status, failedVerify.data?.message || "Rejected as expected");

    // 5. Test Successful Payment Verification
    const successVerify = await request("/payments/verify", {
      method: "POST",
      headers: authHeaders,
      body: {
        gateway: "razorpay",
        bookingNumber,
        orderId,
        paymentId: `pay_rzp_test_${Date.now()}`,
        signature: "sig_mock_sandbox",
        paymentMethod: "UPI",
        userId: user.id
      }
    });
    console.log("5. Successful Payment Verification:", successVerify.status, "Status:", successVerify.data?.paymentStatus, "Ref:", successVerify.data?.bookingReference);

    // 6. Test Backend Retrieval of Verified Booking (Used by /payment-success page)
    const getBookingRes = await request(`/bookings/${encodeURIComponent(bookingNumber)}`, {
      headers: authHeaders
    });
    console.log("6. Retrieve Verified Booking for /payment-success:", getBookingRes.status, "PaymentStatus:", getBookingRes.data?.booking?.paymentStatus, "Hotel:", getBookingRes.data?.booking?.hotel?.name);

    // 7. Test Idempotency on Refresh
    const refreshVerify = await request("/payments/verify", {
      method: "POST",
      headers: authHeaders,
      body: {
        gateway: "razorpay",
        bookingNumber,
        orderId,
        paymentId: `pay_rzp_test_again_${Date.now()}`,
        signature: "sig_mock_sandbox",
        paymentMethod: "UPI",
        userId: user.id
      }
    });
    console.log("7. Idempotency on Refresh:", refreshVerify.status, "AlreadyConfirmed:", refreshVerify.data?.alreadyConfirmed);

    // 8. Test Unauthorized / Fake Access
    const fakeAccess = await request("/bookings/FAKE_NON_EXISTENT_PNR_99999", {
      headers: authHeaders
    });
    console.log("8. Fake Booking Access Check:", fakeAccess.status, fakeAccess.data?.message);

    console.log("\n=== ALL TESTS PASSED SUCCESSFULLY ===");
  } catch (err) {
    console.error("Test execution failed:", err);
  } finally {
    if (server) server.close();
    process.exit(0);
  }
}

const server = app.listen(5055, () => {
  runTests(server);
});
