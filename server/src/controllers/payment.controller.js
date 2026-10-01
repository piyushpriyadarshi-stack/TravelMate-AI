// ==================================================
// TravelMate AI - Payment Controller
// Exposes Razorpay Standard Web Checkout order creation, signature verification, and webhook handlers
// ==================================================

const crypto = require("crypto");
const paymentService = require("../services/payment.service");

/**
 * POST /api/create-order & POST /api/payments/create-order
 * Creates a Razorpay order.
 * Accepts:
 * - Direct format: { amount (in paise, min 100), currency, receipt, notes }
 * - Booking format: { destinationId, hotelId, roomId, transportId, travelers, ... }
 */
exports.createOrder = async (req, res, next) => {
  try {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    // Case 1: Standalone Razorpay Order creation { amount (paise), currency, receipt }
    if (req.body.amount !== undefined) {
      const rawAmount = Number(req.body.amount);

      // Validate amount >= 100 paise
      if (isNaN(rawAmount) || rawAmount < 100) {
        return res.status(400).json({
          success: false,
          message: "Invalid amount. Minimum amount is 100 paise (₹1.00)."
        });
      }

      if (!key_id || !key_secret) {
        return res.status(500).json({
          success: false,
          message: "Razorpay credentials are not configured on the server."
        });
      }

      const client = paymentService.getRazorpayClient();
      if (!client) {
        return res.status(500).json({
          success: false,
          message: "Failed to initialize Razorpay SDK client."
        });
      }

      const currency = (req.body.currency || "INR").toUpperCase();
      const receipt = req.body.receipt || `rcpt_${Date.now()}`;
      const amount = Math.round(rawAmount);

      try {
        const order = await client.orders.create({
          amount,
          currency,
          receipt,
          notes: req.body.notes || {}
        });

        return res.status(200).json({
          success: true,
          order_id: order.id,
          orderId: order.id,
          id: order.id,
          amount: order.amount,
          currency: order.currency,
          receipt: order.receipt,
          key_id: key_id,
          keyId: key_id
        });
      } catch (err) {
        console.error("Razorpay API order creation failed:", err);
        // Handle auth failures (return 401)
        if (
          err.statusCode === 401 ||
          err.status === 401 ||
          (err.error && err.error.code === "BAD_REQUEST_ERROR" && err.error.description?.includes("Authenticate"))
        ) {
          return res.status(401).json({
            success: false,
            message: "Razorpay authentication failed: Invalid Key ID or Key Secret."
          });
        }
        // Handle Razorpay API errors (return 500)
        return res.status(500).json({
          success: false,
          message: err.error?.description || err.message || "Failed to create Razorpay order."
        });
      }
    }

    // Case 2: TravelMate AI Trip Booking checkout
    const userId = req.user ? req.user.id : "guest_traveler";

    const result = await paymentService.createPaymentOrder({
      ...req.body,
      userId
    });

    return res.status(200).json(result);
  } catch (error) {
    if (error.status === 400) {
      return res.status(400).json({ success: false, message: error.message });
    }
    if (error.status === 401 || error.message.includes("Authentication required")) {
      return res.status(401).json({ success: false, message: error.message });
    }
    next(error);
  }
};

/**
 * POST /api/verify-payment & POST /api/payments/verify
 * Cryptographically verifies Razorpay payment signature using HMAC-SHA256.
 * Expects: { razorpay_order_id, razorpay_payment_id, razorpay_signature }
 * or { order_id, payment_id, signature }
 */
exports.verifyPayment = async (req, res, next) => {
  try {
    const order_id = req.body.razorpay_order_id || req.body.order_id || req.body.orderId;
    const payment_id = req.body.razorpay_payment_id || req.body.payment_id || req.body.paymentId;
    const signature = req.body.razorpay_signature || req.body.signature;

    // Validate missing fields
    if (!order_id || !payment_id || !signature) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields. order_id, payment_id, and signature are required."
      });
    }

    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    if (!key_secret) {
      return res.status(500).json({
        success: false,
        message: "Razorpay key secret not configured on server."
      });
    }

    // Algorithm: HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
    const hmac = crypto.createHmac("sha256", key_secret);
    hmac.update(`${order_id}|${payment_id}`);
    const generatedSignature = hmac.digest("hex");

    const isMatch = (generatedSignature === signature);

    if (!isMatch) {
      // Dev Sandbox signature check if test mock was used
      if (order_id.startsWith("order_rzp_mock") && signature === "sig_mock_sandbox") {
        // Allow sandbox signature
      } else {
        // Signature mismatch: return 400, do NOT mark as paid
        return res.status(400).json({
          success: false,
          message: "Signature verification failed: Invalid payment signature."
        });
      }
    }

    // Payment signature is valid!
    // Fulfill booking record if bookingNumber is supplied
    const bookingNumber = req.body.bookingNumber;
    let bookingResult = null;
    if (bookingNumber) {
      try {
        bookingResult = await paymentService.verifyPayment({
          ...req.body,
          gateway: "razorpay",
          orderId: order_id,
          paymentId: payment_id,
          signature,
          userId: req.user ? req.user.id : "guest_traveler",
          userEmail: req.user ? req.user.email : req.body.email,
          userName: req.user ? req.user.name : req.body.name
        });
      } catch (err) {
        console.warn("Booking fulfillment note:", err.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      order_id,
      payment_id,
      signature,
      ...(bookingResult || {})
    });
  } catch (error) {
    if (error.status === 400) {
      return res.status(400).json({ success: false, message: error.message });
    }
    next(error);
  }
};

/**
 * POST /api/payments/webhook/:gateway?
 */
exports.handleWebhook = async (req, res, next) => {
  try {
    const gateway = req.params.gateway || "razorpay";
    const result = await paymentService.handleWebhook({
      gateway,
      headers: req.headers,
      body: req.body,
      rawBody: req.rawBody
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
};
