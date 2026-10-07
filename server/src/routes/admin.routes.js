// ==================================================
// TravelMate AI - Admin Routes
// Strictly protected: requires both valid authentication and ADMIN role.
// Any unauthorized access attempt receives 401 Unauthorized or 403 Forbidden.
// ==================================================

const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const { requireAuth, requireAdmin } = require("../middleware/auth.middleware");

// Enforce requireAuth and requireAdmin across all admin endpoints
router.use(requireAuth);
router.use(requireAdmin);

// Dashboard Overview Metrics & Recent Bookings
router.get("/dashboard", (req, res) => adminController.getDashboardOverview(req, res));

// Bookings List (with filter & search)
router.get("/bookings", (req, res) => adminController.getBookings(req, res));

// Booking Details Modal Data
router.get("/bookings/:id", (req, res) => adminController.getBookingDetails(req, res));

// Customer Accounts (strictly secure, no secrets)
router.get("/users", (req, res) => adminController.getCustomers(req, res));

// Verified Revenue Report
router.get("/revenue", (req, res) => adminController.getRevenueReport(req, res));
router.get("/payments", (req, res) => adminController.getRevenueReport(req, res));

// Inventory Management
router.get("/hotels", (req, res) => adminController.getHotels(req, res));
router.get("/transportation", (req, res) => adminController.getTransportation(req, res));

// Admin Verification Check
router.get("/check", (req, res) => adminController.checkAdminStatus(req, res));

module.exports = router;
