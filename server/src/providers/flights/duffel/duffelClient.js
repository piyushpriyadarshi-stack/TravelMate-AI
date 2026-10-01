// ==================================================
// TravelMate AI - Duffel API Direct Client
// Handles authenticated HTTP communication with Duffel API v2
// STRICT SECURITY:
// - Access token is backend-only and never logged or exposed
// - Sanitizes errors to prevent credential leakage
// - Uses 15-second request timeout
// ==================================================

const dns = require("dns");
try {
  dns.setDefaultResultOrder("ipv4first");
} catch {
  // Ignore if not supported in older node environments
}

const DUFFEL_BASE_URL = "https://api.duffel.com";
const DUFFEL_VERSION = "v2";
const DEFAULT_TIMEOUT_MS = 15000;

class DuffelClient {
  constructor(accessToken = process.env.DUFFEL_ACCESS_TOKEN) {
    this.accessToken = accessToken || process.env.DUFFEL_ACCESS_TOKEN || null;
    this.baseUrl = DUFFEL_BASE_URL;
    this.version = DUFFEL_VERSION;
    this.timeoutMs = DEFAULT_TIMEOUT_MS;
  }

  /**
   * Internal helper to make authenticated requests to Duffel API
   */
  async _request(endpoint, options = {}) {
    if (!this.accessToken) {
      throw new Error("Duffel access token is not configured on the server.");
    }

    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Authorization": `Bearer ${this.accessToken}`,
      "Duffel-Version": this.version,
      "Accept": "application/json",
      "Content-Type": "application/json",
      ...(options.headers || {})
    };

    let controller;
    let timeoutId;
    let signal = options.signal;

    if (!signal) {
      if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
        signal = AbortSignal.timeout(this.timeoutMs);
      } else {
        controller = new AbortController();
        timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
        signal = controller.signal;
      }
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        signal
      });

      if (timeoutId) clearTimeout(timeoutId);

      let data = null;
      const text = await response.text();
      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          data = { raw: text };
        }
      }

      if (!response.ok) {
        const errorMsg = data?.errors?.[0]?.message || `Duffel API HTTP ${response.status}: ${response.statusText}`;
        const errorType = data?.errors?.[0]?.type || "duffel_api_error";
        const errorTitle = data?.errors?.[0]?.title || response.statusText;

        const error = new Error(errorMsg);
        error.status = response.status;
        error.type = errorType;
        error.title = errorTitle;
        error.duffelErrors = data?.errors || [];
        throw error;
      }

      return data;
    } catch (err) {
      if (timeoutId) clearTimeout(timeoutId);

      // Clean, sanitized error message without exposing credentials
      if (err.name === "AbortError" || err.name === "TimeoutError") {
        const timeoutError = new Error("Duffel API request timed out after 15 seconds.");
        timeoutError.status = 504;
        timeoutError.code = "DUFFEL_TIMEOUT";
        throw timeoutError;
      }

      // Re-throw sanitized error
      throw err;
    }
  }

  /**
   * Create an offer request and optionally retrieve offers directly
   * @param {Object} params
   * @param {Array<{origin: string, destination: string, departure_date: string}>} params.slices
   * @param {Array<{type: string, age?: number}>} params.passengers
   * @param {string} [params.cabinClass] - economy, premium_economy, business, first
   * @param {boolean} [params.returnOffers=true]
   * @returns {Promise<Object>} Duffel offer request object with offers
   */
  async createOfferRequest({ slices, passengers, cabinClass, returnOffers = true }) {
    if (!slices || !Array.isArray(slices) || slices.length === 0) {
      throw new Error("Slices array with origin, destination, and departure_date is required.");
    }
    if (!passengers || !Array.isArray(passengers) || passengers.length === 0) {
      throw new Error("Passengers array is required.");
    }

    const payload = {
      data: {
        slices,
        passengers,
        ...(cabinClass ? { cabin_class: cabinClass } : {})
      }
    };

    const endpoint = `/air/offer_requests${returnOffers ? "?return_offers=true" : ""}`;
    const result = await this._request(endpoint, {
      method: "POST",
      body: JSON.stringify(payload)
    });

    return result?.data || null;
  }

  /**
   * Retrieve a single offer by ID from Duffel
   * @param {string} offerId - Duffel offer ID (e.g. off_0000BAtyYH48bu9f8Ab6Ja)
   * @returns {Promise<Object>} Latest offer object
   */
  async getOffer(offerId) {
    if (!offerId || typeof offerId !== "string") {
      throw new Error("Offer ID is required to retrieve a Duffel offer.");
    }

    const cleanId = offerId.trim();
    const result = await this._request(`/air/offers/${encodeURIComponent(cleanId)}`, {
      method: "GET"
    });

    return result?.data || null;
  }

  /**
   * List offers for a specific offer request with sorting
   * @param {string} offerRequestId
   * @param {Object} [options]
   * @param {string} [options.sort] - total_amount, -total_amount, total_duration
   * @param {number} [options.limit]
   */
  async listOffers(offerRequestId, { sort = "total_amount", limit = 50 } = {}) {
    if (!offerRequestId) {
      throw new Error("Offer request ID is required to list offers.");
    }

    const params = new URLSearchParams();
    params.set("offer_request_id", offerRequestId);
    if (sort) params.set("sort", sort);
    if (limit) params.set("limit", limit.toString());

    const result = await this._request(`/air/offers?${params.toString()}`, {
      method: "GET"
    });

    return result?.data || [];
  }
}

module.exports = DuffelClient;
