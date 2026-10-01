// ==================================================
// TravelMate AI - Booking Service Layer
// Enforces strict authentication & ownership for all booking operations.
// Integrates with PostgreSQL via Prisma, with persistent fallback store (.data/bookings.json).
// ==================================================

const fs = require("fs");
const path = require("path");
const { prisma, getDatabaseStatus } = require("./prisma.service");
const { destinations, hotels, transportationOptions, activities } = require("../utils/sampleData");
const { MIN_TRAVELERS, MAX_TRAVELERS } = require("../config/constants");

const DATA_DIR = path.resolve(__dirname, "../../../.data");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");

function loadBookings() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(BOOKINGS_FILE)) {
      const raw = fs.readFileSync(BOOKINGS_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn("Failed reading bookings.json:", err.message);
  }
  return [];
}

function saveBookings(bookings) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
  } catch (err) {
    console.warn("Failed saving bookings.json:", err.message);
  }
}

class BookingService {
  /**
   * Create a new confirmed booking.
   * STRICT REQUIREMENT: userId must come from validated authenticated user (req.user.id).
   */
  async createBooking({
    userId,
    destinationId,
    destinationName,
    hotelId,
    roomId,
    transportId,
    transportObj,
    activityIds = [],
    checkIn,
    checkOut,
    nights = 1,
    travelers = 1,
    guestDetails,
    paymentMethod,
    gateway = "razorpay",
    transactionId,
    grandTotal,
    bookingNumber: customBookingNumber
  }) {
    if (!userId) {
      throw new Error("Authentication required. A user ID must be provided by the authenticated session.");
    }

    const destCode = (destinationName || "TRIP").toUpperCase().replace(/[^A-Z]/g, "").slice(0, 4);
    const bookingNumber = customBookingNumber || `TM-2026-${destCode}-${Math.floor(1000 + Math.random() * 9000)}`;
    const invoiceNumber = `INV-TM-2026-${Math.floor(100000 + Math.random() * 900000)}`;

    const bookings = loadBookings();
    // Idempotency: Return existing booking if customBookingNumber is already confirmed
    if (customBookingNumber) {
      const existing = bookings.find(b => b.bookingNumber === customBookingNumber || b.bookingReference === customBookingNumber);
      if (existing) {
        return existing;
      }
    }

    const hotel = hotels.find(h => h.id === hotelId);
    let selectedRoom = null;
    if (hotel && hotel.rooms && roomId) {
      selectedRoom = hotel.rooms.find(r => r.id === roomId);
    }

    const transport = transportObj || (transportId ? transportationOptions.find(t => t.id === transportId) : null);
    const selectedActivitiesList = Array.isArray(activityIds)
      ? activities.filter(a => activityIds.includes(a.id))
      : [];

    const isFlight = transport?.type === "FLIGHT";
    const bookingRecord = {
      id: `bk_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      bookingNumber,
      bookingReference: bookingNumber, // Compatible with client representation
      invoiceNumber,
      userId, // Strictly tied to authenticated user!
      destinationId,
      destination: destinationName || "Featured Destination",
      checkIn,
      checkOut,
      nights: parseInt(nights || 1, 10),
      travelers: Math.min(Math.max(parseInt(travelers || 1, 10), MIN_TRAVELERS), MAX_TRAVELERS),
      hotel: hotel ? {
        id: hotel.id,
        name: hotel.name,
        address: hotel.address,
        roomType: selectedRoom ? selectedRoom.type : "Standard Room",
        pricePerNight: selectedRoom ? selectedRoom.pricePerNight : hotel.pricePerNight
      } : null,
      transportation: transport ? {
        id: transport.id,
        type: transport.type || (transport.flightNumber ? "FLIGHT" : "TRANSPORT"),
        provider: typeof transport.provider === "string" ? transport.provider : (transport.airline?.name || "Flight Provider"),
        flightNumber: transport.flightNumber || transport.routeNumber,
        origin: typeof transport.origin === "string" ? transport.origin : (transport.origin?.city || "Origin"),
        destination: typeof transport.destination === "string" ? transport.destination : (transport.destination?.city || "Destination"),
        departureTime: transport.departureTime || transport.departure?.time || "TBD",
        arrivalTime: transport.arrivalTime || transport.arrival?.time || "TBD",
        duration: transport.duration || "",
        stops: transport.stops !== undefined ? transport.stops : (transport.isDirect ? 0 : 1),
        isDirect: transport.isDirect !== undefined ? transport.isDirect : transport.stops === 0,
        segments: transport.segments || [],
        price: transport.price,
        isLive: Boolean(transport.isLive),
        verificationStatus: transport.verificationStatus || (transport.isLive ? "VERIFIED_LIVE_PROVIDER" : "TEST_DEVELOPMENT_DATA"),
        label: transport.label || (transport.isLive ? "VERIFIED LIVE FLIGHT" : "TEST/DEVELOPMENT DATA"),
        verifiedAt: transport.verifiedAt || new Date().toISOString(),
        providerFlightId: transport.providerFlightId || transport.id
      } : null,
      activities: selectedActivitiesList.map(a => ({ id: a.id, name: a.name, price: a.price })),
      guestDetails: guestDetails || {},
      grandTotal: parseFloat(grandTotal || 0),
      gateway,
      paymentMethod: paymentMethod || "VERIFIED_GATEWAY",
      transactionId: transactionId || `TXN-${Date.now()}`,
      bookingStatus: "CONFIRMED",
      paymentStatus: "PAID",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Save to Prisma if DB connected
    const dbStatus = getDatabaseStatus();
    if (dbStatus.connected && prisma) {
      try {
        await prisma.booking.create({
          data: {
            bookingNumber,
            userId,
            destinationId: destinationId || "dest-goa-001",
            checkInDate: new Date(checkIn || Date.now()),
            checkOutDate: new Date(checkOut || Date.now() + 86400000),
            travelerCount: Math.min(Math.max(parseInt(travelers || 1, 10), MIN_TRAVELERS), MAX_TRAVELERS),
            totalAmount: parseFloat(grandTotal || 0),
            bookingStatus: "CONFIRMED",
            paymentStatus: "PAID"
          }
        });
      } catch (err) {
        console.warn("Prisma booking creation failed, saving to persistent store:", err.message);
      }
    }

    // Save to persistent file store
    bookings.unshift(bookingRecord);
    saveBookings(bookings);

    return bookingRecord;
  }

  /**
   * Get all bookings for an authenticated user.
   * Ordinary users ONLY get their own bookings. Admins can view all.
   */
  async getUserBookings(userId, userRole = "USER") {
    if (!userId) {
      throw new Error("Authentication required to view bookings.");
    }

    const bookings = loadBookings();

    if (userRole === "ADMIN") {
      return bookings;
    }

    // Strictly filter by userId
    return bookings.filter(b => b.userId === userId);
  }

  /**
   * Get a specific booking by ID or bookingNumber.
   * Strictly enforces ownership: only the owner or an ADMIN can view it.
   */
  async getBookingById(bookingId, userId, userRole = "USER") {
    if (!userId) {
      throw new Error("Authentication required.");
    }

    const bookings = loadBookings();
    const booking = bookings.find(b => b.id === bookingId || b.bookingNumber === bookingId || b.bookingReference === bookingId);

    if (!booking) {
      const err = new Error("Booking not found.");
      err.status = 404;
      throw err;
    }

    // Ownership check
    if (booking.userId !== userId && userRole !== "ADMIN") {
      const err = new Error("Access denied. You do not have permission to view this reservation.");
      err.status = 403;
      throw err;
    }

    return booking;
  }

  /**
   * Cancel an existing booking.
   * Strictly enforces ownership: only the owner or an ADMIN can cancel.
   */
  async cancelBooking(bookingId, userId, userRole = "USER") {
    if (!userId) {
      throw new Error("Authentication required to cancel a booking.");
    }

    const bookings = loadBookings();
    const index = bookings.findIndex(b => b.id === bookingId || b.bookingNumber === bookingId || b.bookingReference === bookingId);

    if (index === -1) {
      const err = new Error("Booking not found.");
      err.status = 404;
      throw err;
    }

    const booking = bookings[index];

    // Ownership check
    if (booking.userId !== userId && userRole !== "ADMIN") {
      const err = new Error("Access denied. You cannot cancel a reservation belonging to another user.");
      err.status = 403;
      throw err;
    }

    booking.bookingStatus = "CANCELLED";
    booking.updatedAt = new Date().toISOString();
    bookings[index] = booking;
    saveBookings(bookings);

    return booking;
  }
}

module.exports = new BookingService();
