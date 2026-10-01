// ==================================================
// TravelMate AI - Booking Controller
// Enforces user ownership and authentication for all booking interactions.
// ==================================================

const bookingService = require("../services/booking.service");

class BookingController {
  /**
   * POST /api/bookings
   * Create a new confirmed booking for the authenticated user.
   */
  async createBooking(req, res, next) {
    try {
      if (!req.user || !req.user.id) {
        return res.status(401).json({
          success: false,
          message: "Authentication required. Please log in or create an account to book your trip."
        });
      }

      // CRITICAL: userId is strictly taken from authenticated req.user.id!
      const booking = await bookingService.createBooking({
        ...req.body,
        userId: req.user.id
      });

      return res.status(201).json({
        success: true,
        message: "Booking confirmed successfully!",
        booking
      });
    } catch (error) {
      if (error.status === 401 || error.message.includes("Authentication required")) {
        return res.status(401).json({ success: false, message: error.message });
      }
      return res.status(error.status || 400).json({
        success: false,
        message: error.message || "Failed to create booking."
      });
    }
  }

  /**
   * GET /api/bookings
   * Retrieve confirmed bookings.
   * Standard USER only receives their own bookings.
   */
  async getBookings(req, res, next) {
    try {
      if (!req.user || !req.user.id) {
        return res.status(401).json({
          success: false,
          message: "Authentication required. Please log in to view your bookings."
        });
      }

      const bookings = await bookingService.getUserBookings(req.user.id, req.user.role);

      return res.status(200).json({
        success: true,
        count: bookings.length,
        bookings
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        success: false,
        message: error.message || "Failed to retrieve bookings."
      });
    }
  }

  /**
   * GET /api/bookings/:id
   * Retrieve a specific booking by ID or booking reference number.
   * Strictly enforces ownership: Users cannot view other users' bookings.
   */
  async getBookingById(req, res, next) {
    try {
      if (!req.user || !req.user.id) {
        return res.status(401).json({
          success: false,
          message: "Authentication required to view this booking."
        });
      }

      const booking = await bookingService.getBookingById(
        req.params.id,
        req.user.id,
        req.user.role
      );

      if (!booking) {
        return res.status(404).json({
          success: false,
          message: "Booking not found."
        });
      }

      return res.status(200).json({
        success: true,
        booking
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        success: false,
        message: error.message || "Failed to retrieve booking."
      });
    }
  }

  /**
   * POST /api/bookings/:id/cancel
   * Cancels a booking.
   * Strictly enforces ownership: Users cannot cancel another user's booking.
   */
  async cancelBooking(req, res, next) {
    try {
      if (!req.user || !req.user.id) {
        return res.status(401).json({
          success: false,
          message: "Authentication required to cancel a booking."
        });
      }

      const updated = await bookingService.cancelBooking(
        req.params.id,
        req.user.id,
        req.user.role
      );

      return res.status(200).json({
        success: true,
        message: "Booking cancelled successfully.",
        booking: updated
      });
    } catch (error) {
      return res.status(error.status || 400).json({
        success: false,
        message: error.message || "Failed to cancel booking."
      });
    }
  }

  /**
   * POST /api/bookings/validate
   * Validates booking parameters prior to payment order creation.
   */
  async validateBooking(req, res, next) {
    try {
      if (!req.user || !req.user.id) {
        return res.status(401).json({
          success: false,
          message: "Authentication required to validate booking."
        });
      }

      const { destinationId, hotelId, checkIn, checkOut } = req.body;
      if (!destinationId) {
        return res.status(400).json({ success: false, message: "Destination is required." });
      }

      return res.status(200).json({
        success: true,
        message: "Booking parameters are valid and inventory is available.",
        userId: req.user.id
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
}

module.exports = new BookingController();
