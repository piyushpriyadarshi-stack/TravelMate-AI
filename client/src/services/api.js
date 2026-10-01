// ==================================================
// TravelMate AI - Client API Service
// Communicates with Express backend via proxy or VITE_API_BASE_URL
// ==================================================

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const token = localStorage.getItem("travelmate_token");

  try {
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {})
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      credentials: "include",
      headers,
      ...options
    });

    const data = await response.json();

    if (!response.ok) {
      // If 404 with notFound flag, return data gracefully so caller can render specific notFound message
      if (response.status === 404 && data.notFound) {
        return {
          success: false,
          notFound: true,
          message: data.message || "We couldn't find this destination yet. Try another city or country."
        };
      }
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`API Error on ${endpoint}:`, error.message);
    throw error;
  }
}

export const apiService = {
  // Health & diagnostics
  getHealth: () => request("/health"),

  // Authentication (Stage 2)
  // Two-Step Email Verification Flow
  sendVerificationOtp: (data) =>
    request("/auth/register/send-otp", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  verifyEmailRegister: (data) =>
    request("/auth/register/verify-otp", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  resendVerificationOtp: (email) =>
    request("/auth/register/resend-otp", {
      method: "POST",
      body: JSON.stringify({ email })
    }),

  // Forgot Password & Reset Flow
  forgotPasswordSendOtp: (email) =>
    request("/auth/forgot-password/send-otp", {
      method: "POST",
      body: JSON.stringify({ email })
    }),

  forgotPasswordResendOtp: (email) =>
    request("/auth/forgot-password/resend-otp", {
      method: "POST",
      body: JSON.stringify({ email })
    }),

  forgotPasswordVerifyOtp: ({ email, otp }) =>
    request("/auth/forgot-password/verify-otp", {
      method: "POST",
      body: JSON.stringify({ email, otp })
    }),

  forgotPasswordReset: ({ email, resetToken, newPassword, confirmPassword }) =>
    request("/auth/forgot-password/reset-password", {
      method: "POST",
      body: JSON.stringify({ email, resetToken, newPassword, confirmPassword })
    }),

  registerUser: (data) =>
    request("/auth/register", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  loginUser: (data) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  googleLogin: (credential) =>
    request("/auth/google", {
      method: "POST",
      body: JSON.stringify({ credential })
    }),

  // Amazon Cognito User Pools integration endpoints
  getCognitoConfig: () => request("/auth/cognito/config"),

  cognitoSession: (data) =>
    request("/auth/cognito/session", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  cognitoExchangeOAuth: (data) =>
    request("/auth/cognito/exchange-oauth", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  logoutUser: () =>
    request("/auth/logout", {
      method: "POST"
    }),

  getCurrentUser: () => request("/auth/me"),

  updateUserProfile: (data) =>
    request("/auth/profile", {
      method: "PUT",
      body: JSON.stringify(data)
    }),

  checkAdminAccess: () => request("/auth/admin-check"),

  // Destinations (Stage 3)
  getDestinations: (params = {}) => {
    const query = new URLSearchParams();
    if (params.search) query.set("search", params.search);
    if (params.query) query.set("query", params.query);
    if (params.country) query.set("country", params.country);
    if (params.popular !== undefined) query.set("popular", params.popular);
    if (params.isDomestic !== undefined) query.set("isDomestic", params.isDomestic);
    if (params.limit) query.set("limit", params.limit);
    const queryString = query.toString();
    return request(`/destinations${queryString ? `?${queryString}` : ""}`);
  },

  getDestinationById: (id) => request(`/destinations/${id}`),

  validateSearch: (params = {}) =>
    request("/destinations/validate-search", {
      method: "POST",
      body: JSON.stringify(params)
    }),

  // Hotels
  getHotels: (params = {}) => {
    const query = new URLSearchParams();
    if (params.destinationId) query.set("destinationId", params.destinationId);
    if (params.category) query.set("category", params.category);
    if (params.limit) query.set("limit", params.limit);
    const queryString = query.toString();
    return request(`/hotels${queryString ? `?${queryString}` : ""}`);
  },

  getHotelById: (id) => request(`/hotels/${id}`),

  // Transportation
  getTransportation: (params = {}) => {
    const query = new URLSearchParams();
    if (params.destination) query.set("destination", params.destination);
    if (params.destinationId) query.set("destinationId", params.destinationId);
    if (params.destinationName) query.set("destinationName", params.destinationName);
    if (params.origin) query.set("origin", params.origin);
    if (params.type) query.set("type", params.type);
    if (params.limit) query.set("limit", params.limit);
    if (params.date) query.set("date", params.date);
    if (params.departureDate) query.set("departureDate", params.departureDate);
    if (params.travelers) query.set("travelers", params.travelers);
    if (params.cabinClass) query.set("cabinClass", params.cabinClass);
    if (params.stops) query.set("stops", params.stops);
    if (params.sortBy) query.set("sortBy", params.sortBy);
    const queryString = query.toString();
    return request(`/transportation${queryString ? `?${queryString}` : ""}`);
  },

  // Flight Revalidation (Strict Real-Flight Rule)
  revalidateFlight: (data) =>
    request("/search/flights/revalidate", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  // Activities
  getActivities: (params = {}) => {
    const query = new URLSearchParams();
    if (params.destinationId) query.set("destinationId", params.destinationId);
    if (params.destinationName) query.set("destinationName", params.destinationName);
    const queryString = query.toString();
    return request(`/activities${queryString ? `?${queryString}` : ""}`);
  },

  // Razorpay Standard Web Checkout API
  createRazorpayOrder: (data) =>
    request("/create-order", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  verifyRazorpayPayment: (data) =>
    request("/verify-payment", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  // Dual Gateway Payments (Razorpay + Stripe + Sandbox)
  createPaymentOrder: (data) =>
    request("/payments/create-order", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  verifyPayment: (data) =>
    request("/payments/verify", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  // Bookings (Protected by Authentication)
  createBooking: (data) =>
    request("/bookings", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  getBookings: () => request("/bookings"),

  getBookingById: (id) => request(`/bookings/${id}`),

  cancelBooking: (id) =>
    request(`/bookings/${id}/cancel`, {
      method: "POST"
    }),

  validateBooking: (data) =>
    request("/bookings/validate", {
      method: "POST",
      body: JSON.stringify(data)
    }),

  // AI Travel Assistant (Stage 4)
  parseAITravelPlan: (prompt, userOrigin = null) =>
    request("/ai/travel-assistant", {
      method: "POST",
      body: JSON.stringify({ prompt, userOrigin })
    }),

  // Location Reverse Geocoding
  reverseGeocode: (latitude, longitude) =>
    request("/location/reverse-geocode", {
      method: "POST",
      body: JSON.stringify({ latitude, longitude })
    }),

  // Provider-Based Unified Search Architecture
  searchHotels: (params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") query.set(k, v);
    });
    const qs = query.toString();
    return request(`/search/hotels${qs ? `?${qs}` : ""}`);
  },

  getHotelSearchDetails: (hotelId) => request(`/search/hotels/${hotelId}`),

  searchFlights: (params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") query.set(k, v);
    });
    const qs = query.toString();
    return request(`/search/flights${qs ? `?${qs}` : ""}`);
  },

  getFlightOffer: (offerId) => request(`/search/flights/offers/${encodeURIComponent(offerId)}`),

  searchTrains: (params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") query.set(k, v);
    });
    const qs = query.toString();
    return request(`/search/trains${qs ? `?${qs}` : ""}`);
  },

  searchBuses: (params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") query.set(k, v);
    });
    const qs = query.toString();
    return request(`/search/buses${qs ? `?${qs}` : ""}`);
  },

  searchCabs: (params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") query.set(k, v);
    });
    const qs = query.toString();
    return request(`/search/cabs${qs ? `?${qs}` : ""}`);
  },

  searchTransportation: (params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") query.set(k, v);
    });
    const qs = query.toString();
    return request(`/search/transportation${qs ? `?${qs}` : ""}`);
  },

  getProviderStatus: () => request("/search/providers")
};

