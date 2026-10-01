// ==================================================
// TravelMate AI - Booking Routes
// Protected by requireAuth: Unauthenticated users receive 401.
// ==================================================

const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");
const { requireAuth } = require("../middleware/auth.middleware");

// All booking routes strictly require authentication
router.use(requireAuth);

// Create booking
router.post("/", (req, res, next) => bookingController.createBooking(req, res, next));

// Validate booking parameters
router.post("/validate", (req, res, next) => bookingController.validateBooking(req, res, next));

// Get current user's bookings
router.get("/", (req, res, next) => bookingController.getBookings(req, res, next));

// Get specific booking (Enforces user ownership)
router.get("/:id", (req, res, next) => bookingController.getBookingById(req, res, next));

// Cancel booking (Enforces user ownership)
router.post("/:id/cancel", (req, res, next) => bookingController.cancelBooking(req, res, next));

module.exports = router;
