// ==================================================
// TravelMate AI - Admin Dashboard Controller
// Strict administrative authority: Enforces requireAuth + requireAdmin.
// Normal users receive 403 Forbidden.
// ==================================================

const bookingService = require("../services/booking.service");
const authService = require("../services/auth.service");
const { hotels, transportationOptions, destinations } = require("../utils/sampleData");

class AdminController {
  /**
   * GET /api/admin/dashboard
   * Comprehensive metrics, revenue, and recent booking events.
   * Revenue is calculated strictly and exclusively from verified CONFIRMED/PAID bookings.
   */
  async getDashboardOverview(req, res) {
    try {
      const allBookings = await bookingService.getUserBookings(req.user.id, "ADMIN");
      const allUsers = await authService.getAllUsers();

      // Booking Status Breakdown
      const totalBookings = allBookings.length;
      const confirmedBookings = allBookings.filter(
        b => b.bookingStatus === "CONFIRMED" || b.paymentStatus === "PAID"
      ).length;
      const pendingBookings = allBookings.filter(
        b => b.bookingStatus === "PENDING" || b.paymentStatus === "PENDING"
      ).length;
      const cancelledBookings = allBookings.filter(
        b => b.bookingStatus === "CANCELLED"
      ).length;

      // Verified Revenue: ONLY sum verified paid/confirmed bookings
      const verifiedBookings = allBookings.filter(
        b => b.bookingStatus === "CONFIRMED" || b.paymentStatus === "PAID"
      );
      const totalRevenue = verifiedBookings.reduce((sum, b) => {
        const val = parseFloat(b.grandTotal || b.totalAmount || b.amount || 0);
        return sum + (isNaN(val) ? 0 : val);
      }, 0);

      // Total Users
      const totalUsers = allUsers.length;

      // Recent 10 Bookings with customer details mapped
      const recentBookings = allBookings.slice(0, 10).map(b => {
        const matchingUser = allUsers.find(u => u.id === b.userId);
        return {
          id: b.id,
          bookingNumber: b.bookingNumber || b.bookingReference || b.id,
          bookingReference: b.bookingReference || b.bookingNumber,
          customerName: b.guestDetails?.fullName || matchingUser?.name || "Guest Traveler",
          customerEmail: b.guestDetails?.email || matchingUser?.email || "N/A",
          destination: b.destination || b.destinationName || "Featured Trip",
          travelDate: b.checkIn || (b.createdAt ? b.createdAt.split("T")[0] : "N/A"),
          checkIn: b.checkIn,
          checkOut: b.checkOut,
          nights: b.nights || 1,
          travelers: b.travelers || 1,
          transportation: b.transportation?.provider || b.transportation?.type || "Standard Transit",
          hotel: b.hotel?.name || "Verified Hotel",
          amount: parseFloat(b.grandTotal || b.totalAmount || b.amount || 0),
          paymentStatus: b.paymentStatus || "PENDING",
          bookingStatus: b.bookingStatus || "PENDING",
          createdAt: b.createdAt
        };
      });

      return res.status(200).json({
        success: true,
        data: {
          metrics: {
            totalBookings,
            confirmedBookings,
            pendingBookings,
            cancelledBookings,
            totalUsers,
            totalRevenue: Math.round(totalRevenue)
          },
          recentBookings,
          systemStatus: {
            admin: req.user.email,
            verifiedAt: new Date().toISOString()
          }
        }
      });
    } catch (error) {
      console.error("[AdminController] getDashboardOverview error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to load admin dashboard metrics."
      });
    }
  }

  /**
   * GET /api/admin/bookings
   * Full list of bookings with optional filtering and search.
   */
  async getBookings(req, res) {
    try {
      const { status, search } = req.query;
      let bookings = await bookingService.getUserBookings(req.user.id, "ADMIN");
      const allUsers = await authService.getAllUsers();

      // Map enriched customer details
      let formatted = bookings.map(b => {
        const matchingUser = allUsers.find(u => u.id === b.userId);
        return {
          ...b,
          customerName: b.guestDetails?.fullName || matchingUser?.name || "Guest Traveler",
          customerEmail: b.guestDetails?.email || matchingUser?.email || "N/A",
          customerPhone: b.guestDetails?.phone || matchingUser?.phone || "N/A"
        };
      });

      // Filter by booking / payment status
      if (status && status !== "ALL") {
        const upper = status.toUpperCase();
        formatted = formatted.filter(b => {
          if (upper === "CONFIRMED" || upper === "PAID") {
            return b.bookingStatus === "CONFIRMED" || b.paymentStatus === "PAID";
          }
          if (upper === "PENDING") {
            return b.bookingStatus === "PENDING" || b.paymentStatus === "PENDING";
          }
          if (upper === "CANCELLED") {
            return b.bookingStatus === "CANCELLED";
          }
          return b.bookingStatus === upper || b.paymentStatus === upper;
        });
      }

      // Search by booking number, destination, or customer
      if (search && search.trim()) {
        const q = search.trim().toLowerCase();
        formatted = formatted.filter(b => {
          const num = (b.bookingNumber || b.bookingReference || b.id || "").toLowerCase();
          const dest = (b.destination || b.destinationName || "").toLowerCase();
          const name = (b.customerName || "").toLowerCase();
          const email = (b.customerEmail || "").toLowerCase();
          return num.includes(q) || dest.includes(q) || name.includes(q) || email.includes(q);
        });
      }

      return res.status(200).json({
        success: true,
        count: formatted.length,
        bookings: formatted
      });
    } catch (error) {
      console.error("[AdminController] getBookings error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to load bookings list."
      });
    }
  }

  /**
   * GET /api/admin/bookings/:id
   * Detailed booking record view for admin modal.
   */
  async getBookingDetails(req, res) {
    try {
      const { id } = req.params;
      const booking = await bookingService.getBookingById(id, req.user.id, "ADMIN");
      const allUsers = await authService.getAllUsers();
      const matchingUser = allUsers.find(u => u.id === booking.userId);

      const enriched = {
        ...booking,
        customerName: booking.guestDetails?.fullName || matchingUser?.name || "Guest Traveler",
        customerEmail: booking.guestDetails?.email || matchingUser?.email || "N/A",
        customerPhone: booking.guestDetails?.phone || matchingUser?.phone || "N/A",
        destinationName: booking.destination || booking.destinationName,
        origin: booking.transportation?.origin || "Standard Origin",
        travelDate: `${booking.checkIn || "N/A"} to ${booking.checkOut || "N/A"}`,
        travelerCount: booking.travelers || 1,
        hotelDetails: booking.hotel || null,
        transportationDetails: booking.transportation || null,
        roomType: booking.hotel?.roomType || "Standard Room",
        roomsCount: booking.hotel?.roomsCount || 1,
        amount: parseFloat(booking.grandTotal || booking.totalAmount || booking.amount || 0),
        paymentStatus: booking.paymentStatus || "PENDING",
        bookingStatus: booking.bookingStatus || "PENDING",
        paymentMethod: booking.paymentMethod || "Razorpay Standard Checkout",
        transactionId: booking.transactionId || "N/A",
        customerConfirmationEmailSent: Boolean(booking.customerConfirmationEmailSent),
        adminNotificationEmailSent: Boolean(booking.adminNotificationEmailSent),
        createdAt: booking.createdAt,
        confirmedAt: booking.confirmedAt || booking.createdAt
      };

      return res.status(200).json({
        success: true,
        booking: enriched
      });
    } catch (error) {
      const status = error.status || 500;
      return res.status(status).json({
        success: false,
        message: error.message || "Failed to retrieve booking details."
      });
    }
  }

  /**
   * GET /api/admin/users
   * Registered customer list with booking statistics.
   * Strictly omits passwords, hashes, and secrets.
   */
  async getCustomers(req, res) {
    try {
      const allUsers = await authService.getAllUsers();
      const allBookings = await bookingService.getUserBookings(req.user.id, "ADMIN");

      // Count bookings per user
      const usersWithStats = allUsers.map(user => {
        const userBookings = allBookings.filter(b => b.userId === user.id);
        const totalSpent = userBookings
          .filter(b => b.paymentStatus === "PAID" || b.bookingStatus === "CONFIRMED")
          .reduce((sum, b) => sum + parseFloat(b.grandTotal || b.totalAmount || 0), 0);

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone || "N/A",
          role: user.role,
          authProvider: user.authProvider || "LOCAL",
          isEmailVerified: user.isEmailVerified !== false,
          avatar: user.avatar || null,
          createdAt: user.createdAt,
          bookingsCount: userBookings.length,
          totalSpent: Math.round(totalSpent)
        };
      });

      return res.status(200).json({
        success: true,
        count: usersWithStats.length,
        customers: usersWithStats
      });
    } catch (error) {
      console.error("[AdminController] getCustomers error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve customer accounts."
      });
    }
  }

  /**
   * GET /api/admin/revenue
   * Verified revenue analytics based strictly on verified bookings.
   */
  async getRevenueReport(req, res) {
    try {
      const allBookings = await bookingService.getUserBookings(req.user.id, "ADMIN");
      const verifiedBookings = allBookings.filter(
        b => b.bookingStatus === "CONFIRMED" || b.paymentStatus === "PAID"
      );

      const totalRevenue = verifiedBookings.reduce((sum, b) => {
        return sum + parseFloat(b.grandTotal || b.totalAmount || 0);
      }, 0);

      // Revenue by Destination
      const destinationRevenue = {};
      verifiedBookings.forEach(b => {
        const dest = b.destination || b.destinationName || "Other";
        const amt = parseFloat(b.grandTotal || b.totalAmount || 0);
        destinationRevenue[dest] = (destinationRevenue[dest] || 0) + amt;
      });

      // Revenue by Gateway
      const gatewayRevenue = {};
      verifiedBookings.forEach(b => {
        const gw = (b.gateway || "RAZORPAY").toUpperCase();
        const amt = parseFloat(b.grandTotal || b.totalAmount || 0);
        gatewayRevenue[gw] = (gatewayRevenue[gw] || 0) + amt;
      });

      return res.status(200).json({
        success: true,
        data: {
          totalVerifiedRevenue: Math.round(totalRevenue),
          verifiedBookingsCount: verifiedBookings.length,
          averageOrderValue: verifiedBookings.length ? Math.round(totalRevenue / verifiedBookings.length) : 0,
          revenueByDestination: destinationRevenue,
          revenueByGateway: gatewayRevenue,
          verifiedNotice: "Calculated strictly from verified payment transactions in TravelMate database."
        }
      });
    } catch (error) {
      console.error("[AdminController] getRevenueReport error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to generate revenue report."
      });
    }
  }

  /**
   * GET /api/admin/hotels
   * Registered hotels inventory for management.
   */
  async getHotels(req, res) {
    try {
      return res.status(200).json({
        success: true,
        count: hotels.length,
        hotels
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Failed to load hotel inventory." });
    }
  }

  /**
   * GET /api/admin/transportation
   * Fleet transit routes for management.
   */
  async getTransportation(req, res) {
    try {
      return res.status(200).json({
        success: true,
        count: transportationOptions.length,
        transportation: transportationOptions
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Failed to load transit routes." });
    }
  }

  /**
   * GET /api/admin/check
   * Verifies admin role token status.
   */
  async checkAdminStatus(req, res) {
    return res.status(200).json({
      success: true,
      isAdmin: true,
      role: req.user.role,
      email: req.user.email,
      name: req.user.name
    });
  }
}

module.exports = new AdminController();
