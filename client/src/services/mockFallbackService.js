// ==================================================
// TravelMate AI - Client Mock & Fallback Data Service
// Provides instant, offline-first responses when the live backend
// is unreachable, offline, or hosted on a static host (like Vercel).
// ==================================================

import {
  destinations,
  hotels,
  transportationOptions,
  activities,
  cancellationPolicies
} from "../data/fallbackData.js";

// Dynamic corridors
const OVERSEAS_DESTINATIONS = new Set(["dubai", "singapore", "paris", "london", "tokyo"]);

function normalizeKey(str) {
  if (!str) return "";
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function generateDynamicTransportation(origin = "Delhi", destination = "Goa") {
  const originClean = origin.split(",")[0].trim();
  const destClean = destination.split(",")[0].trim();
  const destKey = normalizeKey(destClean);
  const isOverseas = OVERSEAS_DESTINATIONS.has(destKey);

  const results = [];

  // 1. Flight options (Available for both Domestic & Overseas)
  results.push({
    id: `trans-fl-${normalizeKey(originClean)}-${destKey}-1`,
    type: "FLIGHT",
    provider: isOverseas ? "Emirates / Air India International" : "IndiGo 6E-204",
    origin: originClean,
    destination: destClean,
    departureTime: "07:30 AM",
    arrivalTime: isOverseas ? "01:45 PM" : "09:45 AM",
    duration: isOverseas ? "6h 15m" : "2h 15m",
    capacity: 180,
    availableSeats: 34,
    price: isOverseas ? 24500 : 4250,
    status: "AVAILABLE",
    stops: 0,
    isDirect: true,
    isDemo: true
  });

  results.push({
    id: `trans-fl-${normalizeKey(originClean)}-${destKey}-2`,
    type: "FLIGHT",
    provider: isOverseas ? "Singapore Airlines / Qatar Airways" : "Air India AI-802",
    origin: originClean,
    destination: destClean,
    departureTime: "02:15 PM",
    arrivalTime: isOverseas ? "09:30 PM" : "04:35 PM",
    duration: isOverseas ? "7h 15m" : "2h 20m",
    capacity: 180,
    availableSeats: 22,
    price: isOverseas ? 28900 : 5100,
    status: "AVAILABLE",
    stops: 0,
    isDirect: true,
    isDemo: true
  });

  // 2. Trains (Domestic only)
  if (!isOverseas) {
    results.push({
      id: `trans-tr-${normalizeKey(originClean)}-${destKey}-1`,
      type: "TRAIN",
      provider: "Vande Bharat Superfast Express",
      origin: originClean,
      destination: destClean,
      departureTime: "06:00 AM",
      arrivalTime: "02:30 PM",
      duration: "8h 30m",
      capacity: 530,
      availableSeats: 58,
      price: 1850,
      status: "AVAILABLE",
      stops: 0,
      isDirect: true,
      isDemo: true
    });
    results.push({
      id: `trans-tr-${normalizeKey(originClean)}-${destKey}-2`,
      type: "TRAIN",
      provider: "Rajdhani / Express Connect",
      origin: originClean,
      destination: destClean,
      departureTime: "04:30 PM",
      arrivalTime: "08:15 AM (+1)",
      duration: "15h 45m",
      capacity: 480,
      availableSeats: 41,
      price: 1450,
      status: "AVAILABLE",
      stops: 1,
      isDirect: false,
      isDemo: true
    });
  }

  // 3. Buses (Domestic only)
  if (!isOverseas) {
    results.push({
      id: `trans-bus-${normalizeKey(originClean)}-${destKey}-1`,
      type: "BUS",
      provider: "IntrCity SmartBus Volvo Multi-Axle",
      origin: originClean,
      destination: destClean,
      departureTime: "08:00 PM",
      arrivalTime: "08:30 AM (+1)",
      duration: "12h 30m",
      capacity: 40,
      availableSeats: 14,
      price: 1350,
      status: "AVAILABLE",
      stops: 0,
      isDirect: true,
      isDemo: true
    });
  }

  return results;
}

export const mockFallbackService = {
  // Health
  getHealth: () => ({
    status: "ok",
    mode: "demo",
    service: "TravelMate AI Client Catalog Engine",
    destinationsCount: destinations.length,
    hotelsCount: hotels.length,
    timestamp: new Date().toISOString()
  }),

  // Destinations
  getDestinations: (params = {}) => {
    let filtered = [...destinations];

    const search = (params.search || params.query || "").trim().toLowerCase();
    if (search) {
      filtered = filtered.filter((d) => {
        return (
          d.name.toLowerCase().includes(search) ||
          d.city.toLowerCase().includes(search) ||
          d.country.toLowerCase().includes(search) ||
          (d.state && d.state.toLowerCase().includes(search)) ||
          (d.attractions && d.attractions.some((a) => a.toLowerCase().includes(search)))
        );
      });
    }

    if (params.isDomestic !== undefined) {
      const isDom = params.isDomestic === true || params.isDomestic === "true";
      filtered = filtered.filter((d) => d.isDomestic === isDom);
    }

    if (params.popular !== undefined) {
      const isPop = params.popular === true || params.popular === "true";
      filtered = filtered.filter((d) => Boolean(d.popular) === isPop);
    }

    if (params.country) {
      const c = params.country.toLowerCase();
      filtered = filtered.filter((d) => d.country.toLowerCase() === c);
    }

    const limit = parseInt(params.limit, 10);
    if (!isNaN(limit) && limit > 0) {
      filtered = filtered.slice(0, limit);
    }

    return {
      success: true,
      count: filtered.length,
      data: filtered
    };
  },

  getDestinationById: (id) => {
    if (!id) {
      return { success: false, notFound: true, message: "Destination ID required." };
    }

    const query = id.toLowerCase().trim();
    let dest = destinations.find((d) => d.id.toLowerCase() === query);

    if (!dest) {
      dest = destinations.find((d) => d.name.toLowerCase() === query);
    }
    if (!dest) {
      dest = destinations.find((d) => d.id.toLowerCase() === `dest-${query}`);
    }
    if (!dest) {
      dest = destinations.find((d) => d.name.toLowerCase().includes(query) || d.city.toLowerCase().includes(query));
    }

    if (!dest) {
      return {
        success: false,
        notFound: true,
        message: "We couldn't find this destination yet. Try another city or country."
      };
    }

    // Attach nearby hotels and activities to destination details
    const destHotels = hotels.filter((h) => h.destinationId === dest.id);
    const destActivities = activities.filter((a) => a.destinationId === dest.id);

    return {
      success: true,
      data: {
        ...dest,
        hotels: destHotels,
        activities: destActivities
      }
    };
  },

  validateSearch: (params = {}) => {
    const destName = (params.destination || "").trim();
    const dest = destinations.find(
      (d) =>
        d.name.toLowerCase() === destName.toLowerCase() ||
        d.id.toLowerCase() === destName.toLowerCase() ||
        d.city.toLowerCase().includes(destName.toLowerCase())
    );

    if (!dest) {
      return {
        success: false,
        valid: false,
        message: "Destination not supported yet. Please select one of our 15 curated gateways."
      };
    }

    return {
      success: true,
      valid: true,
      destination: dest
    };
  },

  // Hotels
  getHotels: (params = {}) => {
    let filtered = [...hotels];

    if (params.destinationId) {
      const dId = params.destinationId.toLowerCase();
      filtered = filtered.filter((h) => h.destinationId.toLowerCase() === dId);
    } else if (params.destinationName) {
      const dName = params.destinationName.toLowerCase();
      const matchedDest = destinations.find(
        (d) => d.name.toLowerCase().includes(dName) || d.city.toLowerCase().includes(dName)
      );
      if (matchedDest) {
        filtered = filtered.filter((h) => h.destinationId === matchedDest.id);
      }
    }

    if (params.category) {
      filtered = filtered.filter((h) => h.category?.toLowerCase() === params.category.toLowerCase());
    }

    if (params.minRating) {
      const minR = parseFloat(params.minRating);
      if (!isNaN(minR)) filtered = filtered.filter((h) => h.rating >= minR);
    }

    if (params.maxPrice) {
      const maxP = parseFloat(params.maxPrice);
      if (!isNaN(maxP)) filtered = filtered.filter((h) => h.pricePerNight <= maxP);
    }

    if (params.sortBy) {
      if (params.sortBy === "PRICE_LOW" || params.sortBy === "price_asc") {
        filtered.sort((a, b) => a.pricePerNight - b.pricePerNight);
      } else if (params.sortBy === "PRICE_HIGH" || params.sortBy === "price_desc") {
        filtered.sort((a, b) => b.pricePerNight - a.pricePerNight);
      } else if (params.sortBy === "RATING" || params.sortBy === "rating_desc") {
        filtered.sort((a, b) => b.rating - a.rating);
      }
    }

    const limit = parseInt(params.limit, 10);
    if (!isNaN(limit) && limit > 0) {
      filtered = filtered.slice(0, limit);
    }

    return {
      success: true,
      count: filtered.length,
      data: filtered
    };
  },

  getHotelById: (id) => {
    const hotel = hotels.find((h) => h.id === id);
    if (!hotel) {
      return { success: false, message: "Hotel not found." };
    }
    return { success: true, data: hotel };
  },

  // Transportation
  getTransportation: (params = {}) => {
    const origin = params.origin || "Delhi";
    const dest = params.destination || params.destinationName || "Goa";
    const type = (params.type || "").toUpperCase();

    // Generate route options
    let list = generateDynamicTransportation(origin, dest);

    // Merge static options if matching
    const staticMatches = transportationOptions.filter((t) => {
      const oMatch = !params.origin || t.origin.toLowerCase().includes(params.origin.toLowerCase());
      const dMatch = !params.destination || t.destination.toLowerCase().includes(params.destination.toLowerCase());
      return oMatch && dMatch;
    });

    if (staticMatches.length > 0) {
      list = [...staticMatches, ...list];
    }

    if (type) {
      list = list.filter((t) => t.type === type);
    }

    const limit = parseInt(params.limit, 10);
    if (!isNaN(limit) && limit > 0) {
      list = list.slice(0, limit);
    }

    return {
      success: true,
      count: list.length,
      data: list
    };
  },

  // Activities
  getActivities: (params = {}) => {
    let filtered = [...activities];

    if (params.destinationId) {
      filtered = filtered.filter((a) => a.destinationId === params.destinationId);
    } else if (params.destinationName) {
      const dName = params.destinationName.toLowerCase();
      const matchedDest = destinations.find(
        (d) => d.name.toLowerCase().includes(dName) || d.city.toLowerCase().includes(dName)
      );
      if (matchedDest) {
        filtered = filtered.filter((a) => a.destinationId === matchedDest.id);
      }
    }

    return {
      success: true,
      count: filtered.length,
      data: filtered
    };
  },

  // Unified Search Providers
  searchHotels: (params = {}) => {
    return mockFallbackService.getHotels(params);
  },

  searchFlights: (params = {}) => {
    const origin = params.origin || "Delhi";
    const dest = params.destination || "Goa";
    const options = generateDynamicTransportation(origin, dest).filter((t) => t.type === "FLIGHT");
    return {
      success: true,
      count: options.length,
      data: options
    };
  },

  searchTrains: (params = {}) => {
    const origin = params.origin || "Mumbai";
    const dest = params.destination || "Goa";
    const options = generateDynamicTransportation(origin, dest).filter((t) => t.type === "TRAIN");
    return {
      success: true,
      count: options.length,
      data: options
    };
  },

  searchBuses: (params = {}) => {
    const origin = params.origin || "Delhi";
    const dest = params.destination || "Manali";
    const options = generateDynamicTransportation(origin, dest).filter((t) => t.type === "BUS");
    return {
      success: true,
      count: options.length,
      data: options
    };
  },

  searchCabs: (params = {}) => {
    const origin = params.origin || "Airport";
    const dest = params.destination || "City Center";
    return {
      success: true,
      count: 2,
      data: [
        {
          id: "cab-01",
          type: "CAB",
          provider: "Ola / Uber Prime Sedan",
          origin,
          destination: dest,
          price: 850,
          capacity: 4,
          availableSeats: 4,
          status: "AVAILABLE",
          isDemo: true
        },
        {
          id: "cab-02",
          type: "CAB",
          provider: "Toyota Innova Crysta SUV",
          origin,
          destination: dest,
          price: 1450,
          capacity: 6,
          availableSeats: 6,
          status: "AVAILABLE",
          isDemo: true
        }
      ]
    };
  },

  searchTransportation: (params = {}) => {
    return mockFallbackService.getTransportation(params);
  },

  getProviderStatus: () => ({
    success: true,
    providers: {
      amadeus: { status: "ready", mode: "live_fallback" },
      duffel: { status: "ready", mode: "live_fallback" },
      irctc: { status: "ready", mode: "live_fallback" },
      smartbus: { status: "ready", mode: "live_fallback" }
    }
  }),

  // AI Travel Assistant
  parseAITravelPlan: (prompt, userOrigin) => {
    const promptLower = (prompt || "").toLowerCase();
    // Find mentioned destination
    const matched = destinations.find(
      (d) =>
        promptLower.includes(d.name.toLowerCase()) ||
        promptLower.includes(d.city.toLowerCase()) ||
        promptLower.includes(d.country.toLowerCase())
    ) || destinations[0]; // Default to Goa

    const origin = userOrigin || "Delhi";
    const destHotels = hotels.filter((h) => h.destinationId === matched.id).slice(0, 3);
    const destTrans = generateDynamicTransportation(origin, matched.name).slice(0, 3);
    const destActs = activities.filter((a) => a.destinationId === matched.id);

    return {
      success: true,
      plan: {
        destination: matched.name,
        country: matched.country,
        recommendedDays: 4,
        overview: `A curated travel plan for ${matched.name}, featuring top cultural attractions, beachfront/city relaxation, and verified luxury stays.`,
        itinerary: [
          {
            day: 1,
            title: `Arrival in ${matched.name} & Check-in`,
            activities: [
              `Arrive from ${origin} via verified transit`,
              `Check in at ${destHotels[0]?.name || "Luxury Resort"}`,
              `Evening stroll around local markets and scenic viewpoints`
            ]
          },
          {
            day: 2,
            title: "Iconic Sights & Attractions",
            activities: [
              `Morning tour of ${matched.attractions?.[0] || "historic landmark"}`,
              `Local culinary tasting experience`,
              `Afternoon visit to ${matched.attractions?.[1] || "cultural center"}`
            ]
          },
          {
            day: 3,
            title: "Outdoor Exploration & Adventure",
            activities: [
              destActs[0]?.name || "Guided sightseeing excursion",
              "Sunset photography and fine dining"
            ]
          },
          {
            day: 4,
            title: "Leisure & Departure",
            activities: [
              "Relaxing breakfast and souvenir shopping",
              `Return transit back to ${origin}`
            ]
          }
        ],
        hotels: destHotels,
        transportation: destTrans,
        activities: destActs,
        estimatedTotalBudget: 15000 + (destHotels[0]?.pricePerNight || 4000) * 3
      }
    };
  },

  // Reverse Geocoding
  reverseGeocode: (lat, lng) => {
    return {
      success: true,
      city: "Delhi",
      country: "India",
      address: "New Delhi, Delhi, India"
    };
  },

  // Local Storage Bookings
  createBooking: (data) => {
    const bookingId = `tm-bk-${Date.now().toString(36).toUpperCase()}`;
    const newBooking = {
      id: bookingId,
      bookingReference: `TM-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString(),
      status: "CONFIRMED",
      paymentStatus: "PAID",
      ...data
    };

    try {
      const existing = JSON.parse(localStorage.getItem("travelmate_bookings") || "[]");
      existing.unshift(newBooking);
      localStorage.setItem("travelmate_bookings", JSON.stringify(existing));
    } catch {
      // Ignore localStorage failure
    }

    return {
      success: true,
      booking: newBooking,
      bookingId,
      message: "Booking confirmed successfully!"
    };
  },

  getBookings: () => {
    try {
      const bList = JSON.parse(localStorage.getItem("travelmate_bookings") || "[]");
      const tList = JSON.parse(localStorage.getItem("travelmate_trips") || "[]");
      const combined = [...bList, ...tList];
      // Deduplicate by reference or id
      const seen = new Set();
      const unique = combined.filter(item => {
        const key = item.bookingReference || item.bookingNumber || item.id;
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      return { success: true, count: unique.length, data: unique };
    } catch {
      return { success: true, count: 0, data: [] };
    }
  },

  getBookingById: (id) => {
    try {
      const bList = JSON.parse(localStorage.getItem("travelmate_bookings") || "[]");
      const tList = JSON.parse(localStorage.getItem("travelmate_trips") || "[]");
      const combined = [...bList, ...tList];
      const item = combined.find((b) => b.id === id || b.bookingReference === id || b.bookingNumber === id);
      if (item) return { success: true, data: item, booking: item };
    } catch {
      // Ignore
    }
    return { success: false, message: "Booking not found." };
  },

  cancelBooking: (id) => {
    try {
      const list = JSON.parse(localStorage.getItem("travelmate_bookings") || "[]");
      const idx = list.findIndex((b) => b.id === id || b.bookingReference === id || b.bookingNumber === id);
      if (idx !== -1) {
        list[idx].status = "CANCELLED";
        localStorage.setItem("travelmate_bookings", JSON.stringify(list));
        return { success: true, message: "Booking cancelled.", data: list[idx] };
      }
    } catch {
      // Ignore
    }
    return { success: false, message: "Booking not found." };
  },

  // Razorpay Orders
  createRazorpayOrder: (data) => {
    return {
      success: true,
      orderId: `order_demo_${Date.now()}`,
      keyId: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_TiX8NdaG9PQ7IT",
      amount: (data.amount || 5000) * 100,
      currency: data.currency || "INR"
    };
  },

  verifyRazorpayPayment: (data) => {
    const paymentId = data.razorpay_payment_id || `pay_demo_${Date.now()}`;
    const orderId = data.razorpay_order_id || `order_demo_${Date.now()}`;
    return {
      success: true,
      verified: true,
      paymentId,
      orderId,
      bookingReference: data.bookingNumber || `TM-${Math.floor(100000 + Math.random() * 900000)}`,
      paymentStatus: "PAID",
      status: "CONFIRMED"
    };
  },

  // Auth Fallbacks
  getCurrentUser: () => {
    try {
      const userStr = localStorage.getItem("travelmate_user");
      if (userStr) {
        return { success: true, user: JSON.parse(userStr) };
      }
    } catch {
      // Ignore
    }
    return { success: false, user: null };
  },

  loginUser: ({ email }) => {
    const name = email ? email.split("@")[0] : "Traveler";
    const user = {
      id: `usr-${Date.now()}`,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email: email || "traveler@example.com",
      role: email?.includes("admin") ? "ADMIN" : "USER"
    };
    const token = `demo_token_${Date.now()}`;
    try {
      localStorage.setItem("travelmate_user", JSON.stringify(user));
      localStorage.setItem("travelmate_token", token);
    } catch {
      // Ignore
    }
    return { success: true, user, token, message: "Logged in successfully!" };
  },

  registerUser: (data) => {
    const user = {
      id: `usr-${Date.now()}`,
      name: data.name || "New Traveler",
      email: data.email || "traveler@example.com",
      phone: data.phone || null,
      role: "USER"
    };
    const token = `demo_token_${Date.now()}`;
    try {
      localStorage.setItem("travelmate_user", JSON.stringify(user));
      localStorage.setItem("travelmate_token", token);
    } catch {
      // Ignore
    }
    return { success: true, user, token, message: "Account created successfully!" };
  },

  sendVerificationOtp: () => {
    return {
      success: true,
      message: "Verification code sent to your email (Use 123456 in demo mode)."
    };
  },

  verifyEmailRegister: (data) => {
    return mockFallbackService.registerUser(data);
  }
};
