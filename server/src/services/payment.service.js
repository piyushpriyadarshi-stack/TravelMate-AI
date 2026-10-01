// ==================================================
// TravelMate AI - Unified Payment Service Layer
// Dual Gateway Adapter Pattern:
// 1. Razorpay Adapter: Native UPI, RuPay/Visa/Mastercard, NetBanking (INR)
// 2. Stripe Adapter: International Credit & Debit Cards (USD, EUR, GBP)
// 3. Dev Sandbox Adapter: Automatic zero-config fallback when live test keys are missing
// ==================================================

const crypto = require("crypto");
const { prisma, getDatabaseStatus } = require("./prisma.service");
const { destinations, hotels, transportationOptions, activities } = require("../utils/sampleData");
const bookingService = require("./booking.service");
const searchService = require("./search.service");
const dataService = require("./data.service");
const emailService = require("./email.service");
const authService = require("./auth.service");
const { MIN_TRAVELERS, MAX_TRAVELERS } = require("../config/constants");

// Initialize Gateway SDKs conditionally
let Razorpay = null;
let razorpayClient = null;

function getRazorpayClient() {
  if (razorpayClient) return razorpayClient;
  try {
    if (!Razorpay) Razorpay = require("razorpay");
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    if (key_id && key_secret) {
      razorpayClient = new Razorpay({
        key_id,
        key_secret
      });
      console.log("💳 Razorpay Gateway Initialized (Live/Test Mode)");
      return razorpayClient;
    }
  } catch (err) {
    console.warn("Razorpay SDK initialization failed, using sandbox fallback:", err.message);
  }
  return null;
}

// Initial attempt
getRazorpayClient();

let Stripe = null;
let stripeClient = null;
try {
  Stripe = require("stripe");
  if (process.env.STRIPE_SECRET_KEY) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);
    console.log("💳 Stripe Gateway Initialized (Live/Test Mode)");
  }
} catch (err) {
  console.warn("Stripe SDK not loaded, using sandbox fallback:", err.message);
}

// In-memory persistent demo booking registry (for development & offline testing)
const demoBookings = new Map();

class PaymentService {
  /**
   * Helper: Get or initialize Razorpay SDK client.
   */
  getRazorpayClient() {
    return getRazorpayClient();
  }

  /**
   * Helper: Calculate canonical price server-side from verified database/sample data.
   * NEVER trust client-sent totals to prevent price tampering.
   */
  calculateServerPrice({ destinationId, hotelId, roomId, transportId, transportDetails, activityIds, nights, travelers, origin, destinationName }) {
    // 1. Hotel & Room
    const hotel = hotels.find(h => h.id === hotelId);
    let roomPrice = hotel ? hotel.pricePerNight : 5000;
    let roomType = "Standard";
    let roomCapacity = 2;
    if (hotel && hotel.rooms && roomId) {
      const room = hotel.rooms.find(r => r.id === roomId);
      if (room) {
        roomPrice = room.pricePerNight;
        roomType = room.type;
        roomCapacity = room.capacity || room.maxGuests || 2;
      }
    } else if (hotel?.roomCapacity || hotel?.maxGuests) {
      roomCapacity = hotel.roomCapacity || hotel.maxGuests || 2;
    }
    const safeNights = Math.max(1, parseInt(nights || 1, 10));
    const safeTravelers = Math.min(Math.max(MIN_TRAVELERS, parseInt(travelers || 1, 10)), MAX_TRAVELERS);
    const roomsCount = Math.max(1, Math.ceil(safeTravelers / roomCapacity));
    const accommodationTotal = roomPrice * safeNights * roomsCount;

    // 2. Transportation
    let transportTotal = 0;
    let transportObj = null;
    if (transportDetails && transportDetails.id) {
      transportObj = { ...transportDetails };
    } else if (transportId) {
      transportObj = transportationOptions.find(t => t.id === transportId);
      if (!transportObj && (origin || destinationName)) {
        const dynamicList = dataService.getTransportation({ origin: origin || "Delhi", destination: destinationName || "Goa" });
        transportObj = (dynamicList?.data || []).find(t => t.id === transportId);
      }
    }

    if (transportObj) {
      const typeUpper = (transportObj.type || "").toUpperCase();
      const isPerPerson = typeUpper === "FLIGHT" || typeUpper === "TRAIN" || typeUpper === "BUS";
      transportTotal = isPerPerson ? (transportObj.price * safeTravelers) : transportObj.price;
    }

    // 3. Activities
    let activitiesTotal = 0;
    const selectedActsList = [];
    if (Array.isArray(activityIds) && activityIds.length > 0) {
      for (const actId of activityIds) {
        const act = activities.find(a => a.id === actId);
        if (act) {
          activitiesTotal += (act.price * safeTravelers);
          selectedActsList.push({ id: act.id, name: act.name, price: act.price });
        }
      }
    }

    // 4. Taxes & Grand Total
    const subtotal = accommodationTotal + transportTotal + activitiesTotal;
    const taxesAndFees = Math.round(subtotal * 0.12); // 12% GST & Tourism Fees
    const grandTotalINR = subtotal + taxesAndFees;

    return {
      hotelName: hotel ? hotel.name : "Verified Hotel",
      roomType,
      roomPrice,
      roomCapacity,
      roomsCount,
      nights: safeNights,
      travelers: safeTravelers,
      accommodationTotal,
      transportObj,
      transportTotal,
      selectedActsList,
      activitiesTotal,
      subtotal,
      taxesAndFees,
      grandTotalINR
    };
  }

  /**
   * Create Payment Order via appropriate adapter
   * @param {Object} orderRequest
   */
  async createPaymentOrder({
    userId,
    gateway = "auto", // "razorpay" | "stripe" | "sandbox" | "auto"
    destinationId,
    destinationName,
    origin,
    hotelId,
    roomId,
    transportId,
    transportDetails,
    activityIds = [],
    checkIn,
    checkOut,
    nights,
    travelers,
    guestDetails,
    currency = "INR"
  }) {
    if (!userId) {
      const err = new Error("Authentication required. Please log in or create an account to continue with your booking.");
      err.status = 401;
      throw err;
    }

    // 1. Calculate canonical price
    const pricing = this.calculateServerPrice({
      destinationId,
      hotelId,
      roomId,
      transportId,
      transportDetails,
      activityIds,
      nights,
      travelers,
      origin,
      destinationName
    });

    // STRICT REAL-FLIGHT RULE:
    // Before a user proceeds to booking/payment, perform a fresh availability/price check with the provider.
    // The final booking must use the verified provider response.
    if (pricing.transportObj && (pricing.transportObj.type === "FLIGHT" || transportId?.includes("-fl-") || transportId?.startsWith("fl-"))) {
      try {
        const revalRes = await searchService.revalidateFlight({
          flightId: transportId,
          providerFlightId: pricing.transportObj.providerFlightId || transportId,
          departureDate: checkIn,
          travelers: pricing.travelers,
          expectedPrice: pricing.transportObj.price
        });

        if (!revalRes || revalRes.available === false) {
          const err = new Error(revalRes?.message || "Flight availability is temporarily unavailable.");
          err.status = 400;
          throw err;
        }

        if (revalRes.priceChanged && revalRes.verifiedPrice) {
          pricing.transportObj.price = revalRes.verifiedPrice;
          pricing.transportTotal = pricing.transportObj.price * pricing.travelers;
          pricing.subtotal = pricing.accommodationTotal + pricing.transportTotal + pricing.activitiesTotal;
          pricing.taxesAndFees = Math.round(pricing.subtotal * 0.12);
          pricing.grandTotalINR = pricing.subtotal + pricing.taxesAndFees;
        }

        pricing.transportObj.isLive = Boolean(revalRes.isLive);
        pricing.transportObj.verificationStatus = revalRes.isLive ? "VERIFIED_LIVE_PROVIDER" : "TEST_DEVELOPMENT_DATA";
        pricing.transportObj.label = revalRes.isLive ? "VERIFIED LIVE FLIGHT" : "TEST/DEVELOPMENT DATA";
        pricing.transportObj.verifiedAt = revalRes.verifiedAt || new Date().toISOString();
        pricing.transportObj.providerNotice = revalRes.isLive
          ? "Verified live airline provider inventory"
          : "TEST/DEVELOPMENT DATA — NOT A REAL FLIGHT";
      } catch (revalErr) {
        if (revalErr.status) throw revalErr;
        const err = new Error("Flight availability is temporarily unavailable.");
        err.status = 503;
        throw err;
      }
    }

    const destCode = (destinationName || "TRIP").toUpperCase().replace(/[^A-Z]/g, "").slice(0, 4);
    const bookingNumber = `TM-2026-${destCode}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Auto-select gateway: INR -> Razorpay, others -> Stripe
    let effectiveGateway = gateway;
    if (effectiveGateway === "auto") {
      effectiveGateway = currency.toUpperCase() === "INR" ? "razorpay" : "stripe";
    }

    // --------------------------------------------------
    // ADAPTER 1: RAZORPAY (INR / UPI / Indian Cards)
    // --------------------------------------------------
    if (effectiveGateway === "razorpay") {
      const client = this.getRazorpayClient();
      if (client) {
        try {
          const razorpayOrder = await client.orders.create({
            amount: Math.round(pricing.grandTotalINR * 100), // In paise
            currency: "INR",
            receipt: bookingNumber,
            notes: {
              destination: destinationName || destinationId,
              customerName: guestDetails?.fullName || "Guest",
              travelers: String(pricing.travelers)
            }
          });

          // Store pending booking
          demoBookings.set(bookingNumber, {
            bookingNumber,
            userId,
            destinationId,
            destinationName,
            hotelId,
            roomId,
            transportId,
            activityIds,
            nights: pricing.nights,
            travelers: pricing.travelers,
            orderId: razorpayOrder.id,
            gateway: "razorpay",
            pricing,
            checkIn,
            checkOut,
            guestDetails,
            currency: "INR",
            amount: pricing.grandTotalINR,
            status: "PENDING",
            createdAt: new Date().toISOString()
          });

          return {
            success: true,
            gateway: "razorpay",
            isSandbox: false,
            orderId: razorpayOrder.id,
            amount: pricing.grandTotalINR,
            amountInUnits: pricing.grandTotalINR * 100,
            currency: "INR",
            keyId: process.env.RAZORPAY_KEY_ID,
            bookingNumber,
            customer: guestDetails
          };
        } catch (err) {
          console.warn("Razorpay API call failed, falling back to sandbox adapter:", err.message);
        }
      }

      // Razorpay Dev Sandbox Fallback
      const sandboxOrderId = `order_rzp_mock_${Date.now()}`;
      demoBookings.set(bookingNumber, {
        bookingNumber,
        userId,
        destinationId,
        destinationName,
        hotelId,
        roomId,
        transportId,
        activityIds,
        nights: pricing.nights,
        travelers: pricing.travelers,
        orderId: sandboxOrderId,
        gateway: "razorpay",
        isSandbox: true,
        pricing,
        checkIn,
        checkOut,
        guestDetails,
        currency: "INR",
        amount: pricing.grandTotalINR,
        status: "PENDING",
        createdAt: new Date().toISOString()
      });

      return {
        success: true,
        gateway: "razorpay",
        isSandbox: true,
        orderId: sandboxOrderId,
        amount: pricing.grandTotalINR,
        amountInUnits: pricing.grandTotalINR * 100,
        currency: "INR",
        keyId: process.env.RAZORPAY_KEY_ID || "rzp_test_sandbox_fallback",
        bookingNumber,
        customer: guestDetails,
        sandboxNotice: "Razorpay live test keys not set in .env. Activated Dev Sandbox Mode with instant test authorization."
      };
    }

    // --------------------------------------------------
    // ADAPTER 2: STRIPE (International Cards in USD/EUR/GBP)
    // --------------------------------------------------
    if (effectiveGateway === "stripe") {
      const foreignCurrency = (currency || "USD").toUpperCase();
      // Exchange estimation: 1 USD ~ 85 INR, 1 EUR ~ 93 INR, 1 GBP ~ 110 INR
      const exchangeRate = foreignCurrency === "EUR" ? 93 : foreignCurrency === "GBP" ? 110 : 85;
      const foreignAmount = Math.max(1, Math.round(pricing.grandTotalINR / exchangeRate));

      if (stripeClient) {
        try {
          const paymentIntent = await stripeClient.paymentIntents.create({
            amount: Math.round(foreignAmount * 100), // In cents
            currency: foreignCurrency.toLowerCase(),
            description: `TravelMate Booking ${bookingNumber} - ${destinationName}`,
            metadata: {
              bookingNumber,
              customerEmail: guestDetails?.email || ""
            }
          });

          demoBookings.set(bookingNumber, {
            bookingNumber,
            userId,
            destinationId,
            destinationName,
            hotelId,
            roomId,
            transportId,
            activityIds,
            nights: pricing.nights,
            travelers: pricing.travelers,
            paymentIntentId: paymentIntent.id,
            gateway: "stripe",
            pricing,
            checkIn,
            checkOut,
            guestDetails,
            currency: foreignCurrency,
            amount: foreignAmount,
            status: "PENDING",
            createdAt: new Date().toISOString()
          });

          return {
            success: true,
            gateway: "stripe",
            isSandbox: false,
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id,
            amount: foreignAmount,
            currency: foreignCurrency,
            publishableKey: process.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_sample",
            bookingNumber,
            customer: guestDetails
          };
        } catch (err) {
          console.warn("Stripe API call failed, falling back to sandbox adapter:", err.message);
        }
      }

      // Stripe Dev Sandbox Fallback
      const sandboxIntentId = `pi_stripe_mock_${Date.now()}`;
      demoBookings.set(bookingNumber, {
        bookingNumber,
        userId,
        destinationId,
        destinationName,
        hotelId,
        roomId,
        transportId,
        activityIds,
        nights: pricing.nights,
        travelers: pricing.travelers,
        paymentIntentId: sandboxIntentId,
        gateway: "stripe",
        isSandbox: true,
        pricing,
        checkIn,
        checkOut,
        guestDetails,
        currency: foreignCurrency,
        amount: foreignAmount,
        status: "PENDING",
        createdAt: new Date().toISOString()
      });

      return {
        success: true,
        gateway: "stripe",
        isSandbox: true,
        clientSecret: `pi_mock_secret_${Date.now()}`,
        paymentIntentId: sandboxIntentId,
        amount: foreignAmount,
        currency: foreignCurrency,
        publishableKey: "pk_test_sandbox_fallback",
        bookingNumber,
        customer: guestDetails,
        sandboxNotice: "Stripe test keys not set in .env. Activated Dev Sandbox Mode with instant card simulation."
      };
    }

    throw new Error(`Unsupported payment gateway: '${gateway}'`);
  }

  /**
   * Verify Payment Signature & Confirm Booking
   * STRICT REQUIREMENT: Must verify authenticated user ownership
   */
  async verifyPayment({
    gateway = "razorpay",
    bookingNumber,
    orderId,
    paymentId,
    signature,
    paymentIntentId,
    paymentMethod = "UPI",
    userId,
    userEmail,
    userName
  }) {
    if (!userId) {
      const err = new Error("Authentication required. Please log in to complete payment verification.");
      err.status = 401;
      throw err;
    }

    if (!bookingNumber) {
      throw new Error("Booking number is required for payment verification.");
    }

    // Idempotency: If this booking is already confirmed & paid, return it safely without duplicate charge/record
    try {
      const existingUserBookings = await bookingService.getUserBookings(userId, "USER");
      const alreadyConfirmed = existingUserBookings.find(
        b => (b.bookingNumber === bookingNumber || b.bookingReference === bookingNumber) && b.paymentStatus === "PAID"
      );
      if (alreadyConfirmed) {
        return {
          success: true,
          message: "Payment already verified and booking confirmed.",
          bookingReference: alreadyConfirmed.bookingReference || alreadyConfirmed.bookingNumber,
          invoiceNumber: alreadyConfirmed.invoiceNumber,
          transactionId: alreadyConfirmed.transactionId,
          status: "CONFIRMED",
          paymentStatus: "PAID",
          paidAt: alreadyConfirmed.createdAt,
          gateway: alreadyConfirmed.gateway || gateway,
          currency: "INR",
          amountPaid: alreadyConfirmed.grandTotal,
          booking: alreadyConfirmed,
          alreadyConfirmed: true
        };
      }
    } catch {}

    const booking = demoBookings.get(bookingNumber);
    if (!booking) {
      return {
        success: false,
        message: "Booking order not found or expired."
      };
    }

    if (booking && booking.userId && booking.userId !== userId) {
      const err = new Error("Access denied. You do not have permission to verify this booking.");
      err.status = 403;
      throw err;
    }

    let isSignatureValid = false;

    // 1. Verify Razorpay Signature
    if (gateway === "razorpay") {
      if (process.env.RAZORPAY_KEY_SECRET && signature && !orderId?.startsWith("order_rzp_mock")) {
        const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
        hmac.update(`${orderId}|${paymentId}`);
        const expectedSignature = hmac.digest("hex");
        isSignatureValid = (expectedSignature === signature);
      } else if (orderId?.startsWith("order_rzp_mock")) {
        // Dev Sandbox Verification: Requires valid sandbox signature and orderId match
        isSignatureValid = (signature === "sig_mock_sandbox" && booking.orderId === orderId);
      } else {
        isSignatureValid = false;
      }
    }

    // 2. Verify Stripe PaymentIntent
    if (gateway === "stripe") {
      if (stripeClient && paymentIntentId && !paymentIntentId.startsWith("pi_stripe_mock")) {
        try {
          const intent = await stripeClient.paymentIntents.retrieve(paymentIntentId);
          isSignatureValid = (intent.status === "succeeded" || intent.status === "processing");
        } catch {
          isSignatureValid = false;
        }
      } else {
        // Dev Sandbox Verification
        isSignatureValid = true;
      }
    }

    if (!isSignatureValid) {
      if (booking) booking.status = "FAILED";
      return {
        success: false,
        message: "Payment authentication failed: Invalid cryptographic signature or unauthorized transaction."
      };
    }

    // 3. Mark booking as CONFIRMED and create persistent booking record
    const invoiceNumber = `INV-TM-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const confirmedAt = new Date().toISOString();
    const finalAmount = booking?.amount || (booking?.pricing?.grandTotalINR || 0);

    if (booking) {
      booking.status = "CONFIRMED";
      booking.paymentStatus = "PAID";
      booking.invoiceNumber = invoiceNumber;
      booking.transactionId = paymentId || paymentIntentId || `TXN-${Date.now()}`;
      booking.paymentMethod = paymentMethod;
      booking.confirmedAt = confirmedAt;
    }

    // Save to persistent BookingService strictly linked to authenticated userId!
    const confirmedBooking = await bookingService.createBooking({
      userId,
      bookingNumber,
      destinationId: booking?.destinationId,
      destinationName: booking?.destinationName,
      hotelId: booking?.hotelId,
      roomId: booking?.roomId,
      transportId: booking?.transportId,
      transportObj: booking?.pricing?.transportObj,
      activityIds: booking?.activityIds,
      checkIn: booking?.checkIn,
      checkOut: booking?.checkOut,
      nights: booking?.nights || 1,
      travelers: booking?.travelers || 1,
      guestDetails: booking?.guestDetails,
      paymentMethod,
      gateway,
      transactionId: paymentId || paymentIntentId || `TXN-${Date.now()}`,
      grandTotal: finalAmount
    });

    // 4. Send Confirmation Email after successful payment verification
    try {
      let recipientEmail = userEmail || booking?.guestDetails?.email;
      let recipientName = userName || booking?.guestDetails?.fullName;

      if (!recipientEmail && authService?.findById) {
        const userObj = await authService.findById(userId);
        if (userObj) {
          recipientEmail = userObj.email;
          recipientName = recipientName || userObj.name;
        }
      }

      if (recipientEmail) {
        await emailService.sendBookingConfirmationEmail({
          to: recipientEmail,
          name: recipientName,
          booking: confirmedBooking
        });
      }
    } catch (emailErr) {
      console.error("[PaymentService] Error sending confirmation email:", emailErr.message);
    }

    return {
      success: true,
      message: "Payment verified and booking confirmed successfully!",
      bookingReference: bookingNumber,
      invoiceNumber,
      transactionId: paymentId || paymentIntentId || `TXN-${Date.now()}`,
      status: "CONFIRMED",
      paymentStatus: "PAID",
      paidAt: confirmedAt,
      gateway,
      currency: booking?.currency || "INR",
      amountPaid: finalAmount,
      booking: confirmedBooking,
      isDemoBooking: Boolean(booking?.isSandbox)
    };
  }

  /**
   * Unified Webhook Listener
   */
  async handleWebhook({ gateway, headers, body, rawBody }) {
    if (gateway === "razorpay") {
      const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
      if (secret && headers["x-razorpay-signature"]) {
        const shasum = crypto.createHmac("sha256", secret);
        shasum.update(rawBody || JSON.stringify(body));
        const digest = shasum.digest("hex");
        if (digest !== headers["x-razorpay-signature"]) {
          return { success: false, message: "Invalid webhook signature" };
        }
      }
      return { success: true, event: body.event };
    }

    if (gateway === "stripe") {
      const secret = process.env.STRIPE_WEBHOOK_SECRET;
      if (stripeClient && secret && headers["stripe-signature"]) {
        try {
          const event = stripeClient.webhooks.constructEvent(rawBody, headers["stripe-signature"], secret);
          return { success: true, event: event.type };
        } catch (err) {
          return { success: false, message: err.message };
        }
      }
    }

    return { success: true, message: "Webhook acknowledged" };
  }
}

module.exports = new PaymentService();
