// ==================================================
// TravelMate AI - API Route Registry
// ==================================================

const express = require("express");
const router = express.Router();

const healthRoutes = require("./health.routes");
const destinationRoutes = require("./destinations.routes");
const hotelRoutes = require("./hotels.routes");
const transportationRoutes = require("./transportation.routes");
const activitiesRoutes = require("./activities.routes");

const paymentRoutes = require("./payment.routes");
const paymentController = require("../controllers/payment.controller");
const { optionalAuth } = require("../middleware/auth.middleware");

const authRoutes = require("./auth.routes");

const bookingRoutes = require("./booking.routes");

// Attach routes
router.use("/health", healthRoutes);
router.use("/destinations", destinationRoutes);
router.use("/hotels", hotelRoutes);
router.use("/transportation", transportationRoutes);
router.use("/activities", activitiesRoutes);
router.use("/payments", paymentRoutes);

// Direct Razorpay Standard Web Checkout API endpoints
router.post("/create-order", optionalAuth, paymentController.createOrder);
router.post("/verify-payment", optionalAuth, paymentController.verifyPayment);
router.use("/auth", authRoutes);
router.use("/bookings", bookingRoutes);

const aiRoutes = require("./ai.routes");
router.use("/ai", aiRoutes);

const locationRoutes = require("./location.routes");
router.use("/location", locationRoutes);

const searchRoutes = require("./search.routes");
router.use("/search", searchRoutes);

const adminRoutes = require("./admin.routes");
router.use("/admin", adminRoutes);

module.exports = router;
