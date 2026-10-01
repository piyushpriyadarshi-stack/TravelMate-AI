// ==================================================
// TravelMate AI - Payment Routes
// Supports Razorpay Standard Web Checkout and Dual Gateway operations
// ==================================================

const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment.controller");
const { optionalAuth } = require("../middleware/auth.middleware");

// Order creation & payment intent
router.post("/create-order", optionalAuth, paymentController.createOrder);

// Cryptographic signature & payment intent verification
router.post("/verify", optionalAuth, paymentController.verifyPayment);
router.post("/verify-payment", optionalAuth, paymentController.verifyPayment);

// Webhook listener (Public/Gateway authenticated via webhook signatures)
router.post("/webhook/:gateway?", paymentController.handleWebhook);

module.exports = router;
