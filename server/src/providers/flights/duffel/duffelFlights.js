// ==================================================
// TravelMate AI - Duffel Flight Provider Adapter
// Implements BaseFlightProvider contract using Duffel Flights API v2
// STRICT REAL-FLIGHT RULE:
// - Duffel API is the sole source of truth for all flight records
// - Never creates mock, synthetic, or fake flights
// - Test token is clearly identified (TEST_DEVELOPMENT_DATA)
// - Connecting flights include all actual legs returned by Duffel
// ==================================================

const BaseFlightProvider = require("../../base/BaseFlightProvider");
const NormalizedFlight = require("../../models/NormalizedFlight");
const DuffelClient = require("./duffelClient");
const { resolveIataCode, resolveDestinationAirports, getAirportInfo } = require("./airportRegistry");

/**
 * Parses an ISO 8601 duration (e.g. PT2H17M, PT45M, PT1H) into minutes
 */
function parseIsoDurationMinutes(isoStr) {
  if (!isoStr || typeof isoStr !== "string") return 0;
  const match = isoStr.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  return hours * 60 + minutes;
}

/**
 * Formats ISO 8601 duration into clean human-readable string (e.g. "2h 17m")
 */
function formatIsoDuration(isoStr) {
  const totalMinutes = parseIsoDurationMinutes(isoStr);
  if (!totalMinutes) return "Direct";
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h`;
  return `${minutes}m`;
}

/**
 * Formats minutes into human-readable string (e.g. 90 -> "1h 30m")
 */
function formatMinutes(minutes) {
  if (!minutes || minutes <= 0) return "Direct";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h > 0 && m > 0) return `${h}h ${m}m`;
  if (h > 0) return `${h}h`;
  return `${m}m`;
}

/**
 * Formats ISO date-time into 12-hour AM/PM format (e.g. "09:15 AM")
 */
function formatTime(isoStr) {
  if (!isoStr) return "";
  try {
    const parts = isoStr.split("T");
    if (parts.length < 2) return "";
    const timeParts = parts[1].split(":");
    let hours = parseInt(timeParts[0], 10);
    const minutes = timeParts[1] || "00";
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;
  } catch {
    return "";
  }
}

class DuffelFlightProvider extends BaseFlightProvider {
  constructor(accessToken = process.env.DUFFEL_ACCESS_TOKEN) {
    const token = accessToken || process.env.DUFFEL_ACCESS_TOKEN || "";
    const isTestMode = token.startsWith("duffel_test_") || (process.env.DUFFEL_MODE || "").toLowerCase() === "test";

    // isLive is true if not test mode
    super("Duffel", !isTestMode);

    this.isTestMode = isTestMode;
    this.client = new DuffelClient(token);
  }

  /**
   * Search flights via Duffel Offer Requests API
   * @param {Object} params
   * @param {string} params.origin - City name or IATA code
   * @param {string} params.destination - City name or IATA code
   * @param {string} [params.departureDate] - YYYY-MM-DD
   * @param {string} [params.date] - YYYY-MM-DD
   * @param {string} [params.returnDate] - YYYY-MM-DD (optional for round-trip)
   * @param {number} [params.travelers=1]
   * @param {string} [params.cabinClass="economy"]
   * @param {string} [params.stops="all"] - all, nonstop, 1stop, 2plus
   * @param {string} [params.sortBy="PRICE_LOW_TO_HIGH"]
   */
  async searchFlights(params = {}) {
    const {
      origin,
      destination,
      departureDate,
      date,
      returnDate,
      travelers = 1,
      adults,
      children,
      infants,
      tripType = "ONE_WAY",
      cabinClass = "economy",
      stops = "all",
      sortBy = "PRICE_LOW_TO_HIGH",
      maxPrice,
      page = 1,
      limit = 30,
      hotelLocation
    } = params;

    // 1. Validation
    if (!origin || !destination) {
      return {
        success: false,
        flights: [],
        results: [],
        total: 0,
        isLive: !this.isTestMode,
        isTestMode: this.isTestMode,
        provider: this.name,
        message: "Origin and destination are required for flight search."
      };
    }

    const originIata = resolveIataCode(origin);
    if (!originIata) {
      return {
        success: false,
        flights: [],
        results: [],
        total: 0,
        isLive: !this.isTestMode,
        isTestMode: this.isTestMode,
        provider: this.name,
        message: `Could not identify an airport code for origin "${origin}". Please select a valid city or airport.`
      };
    }

    // Resolve destination to supported commercial airport codes (handles multi-airport destinations e.g. GOI/GOX, COK/TRV/CCJ, CDG/ORY, LHR/LGW, HND/NRT)
    const destAirports = resolveDestinationAirports(destination, hotelLocation || params.location);
    if (!destAirports || destAirports.length === 0) {
      return {
        success: false,
        flights: [],
        results: [],
        total: 0,
        isLive: !this.isTestMode,
        isTestMode: this.isTestMode,
        provider: this.name,
        message: `Could not identify an airport code for destination "${destination}". Please select a valid city or airport.`
      };
    }

    // Exclude candidate airports that equal origin
    const validDestAirports = destAirports.filter(code => code !== originIata);
    if (validDestAirports.length === 0) {
      return {
        success: false,
        flights: [],
        results: [],
        total: 0,
        isLive: !this.isTestMode,
        isTestMode: this.isTestMode,
        provider: this.name,
        message: "Origin and destination airports cannot be the same."
      };
    }

    const depDate = departureDate || date;
    if (!depDate) {
      return {
        success: false,
        flights: [],
        results: [],
        total: 0,
        isLive: !this.isTestMode,
        isTestMode: this.isTestMode,
        provider: this.name,
        message: "Departure date is required for flight search."
      };
    }

    // Validate date format YYYY-MM-DD
    if (!/^\d{4}-\d{2}-\d{2}$/.test(depDate)) {
      return {
        success: false,
        flights: [],
        results: [],
        total: 0,
        isLive: !this.isTestMode,
        isTestMode: this.isTestMode,
        provider: this.name,
        message: "Invalid departure date format. Please use YYYY-MM-DD."
      };
    }

    const todayStr = new Date().toISOString().split("T")[0];
    if (depDate < todayStr) {
      return {
        success: false,
        flights: [],
        results: [],
        total: 0,
        isLive: !this.isTestMode,
        isTestMode: this.isTestMode,
        provider: this.name,
        message: "Departure date cannot be in the past."
      };
    }

    if (returnDate && returnDate < depDate) {
      return {
        success: false,
        flights: [],
        results: [],
        total: 0,
        isLive: !this.isTestMode,
        isTestMode: this.isTestMode,
        provider: this.name,
        message: "Return date must be on or after departure date."
      };
    }

    // 2. Build Passengers (preserves adults, children, infants without synthesizing age data)
    const passengers = [];
    if (adults !== undefined || children !== undefined || infants !== undefined) {
      const numAdults = Math.max(1, parseInt(adults, 10) || 1);
      const numChildren = Math.max(0, parseInt(children, 10) || 0);
      const numInfants = Math.max(0, parseInt(infants, 10) || 0);
      for (let i = 0; i < numAdults; i++) passengers.push({ type: "adult" });
      for (let i = 0; i < numChildren; i++) passengers.push({ type: "child" });
      for (let i = 0; i < numInfants; i++) passengers.push({ type: "infant_without_seat" });
    } else {
      const totalTravelers = Math.max(1, parseInt(travelers, 10) || 1);
      for (let i = 0; i < totalTravelers; i++) {
        passengers.push({ type: "adult" });
      }
    }

    // 3. Map Cabin Class
    const cabinMap = {
      "ECONOMY": "economy",
      "PREMIUM_ECONOMY": "premium_economy",
      "BUSINESS": "business",
      "FIRST": "first",
      "economy": "economy",
      "premium_economy": "premium_economy",
      "business": "business",
      "first": "first"
    };
    const duffelCabin = cabinMap[(cabinClass || "").toLowerCase()] || cabinMap[cabinClass] || "economy";

    // 4. Query Duffel API for all candidate destination airports in parallel
    const searchPromises = validDestAirports.map(destCode => {
      const slices = [
        {
          origin: originIata,
          destination: destCode,
          departure_date: depDate
        }
      ];
      if (returnDate && (tripType === "ROUND_TRIP" || returnDate >= depDate)) {
        slices.push({
          origin: destCode,
          destination: originIata,
          departure_date: returnDate
        });
      }
      return this.client.createOfferRequest({
        slices,
        passengers,
        cabinClass: duffelCabin,
        returnOffers: true
      });
    });

    let searchOutcomes = [];
    try {
      searchOutcomes = await Promise.allSettled(searchPromises);
    } catch (err) {
      console.warn("[DuffelFlightProvider] Search API error:", err.message);
    }

    const allFailed = searchOutcomes.length > 0 && searchOutcomes.every(r => r.status === "rejected");
    if (allFailed) {
      return {
        success: false,
        flights: [],
        results: [],
        total: 0,
        isLive: false,
        isTestMode: this.isTestMode,
        provider: this.name,
        status: "PROVIDER_UNAVAILABLE",
        message: "Live flight search is temporarily unavailable.",
        disclaimer: "Provider connection failed or is currently unavailable."
      };
    }

    // 5. Combine and deduplicate returned offers from all airports
    const seenOfferIds = new Set();
    const rawOffers = [];
    for (const outcome of searchOutcomes) {
      if (outcome.status === "fulfilled" && outcome.value?.offers) {
        for (const offer of outcome.value.offers) {
          if (!seenOfferIds.has(offer.id)) {
            seenOfferIds.add(offer.id);
            rawOffers.push(offer);
          }
        }
      }
    }

    // Zero offers returned by Duffel
    if (rawOffers.length === 0) {
      const isManali = validDestAirports.includes("KUU") || destination.toLowerCase().includes("manali");
      return {
        success: true,
        flights: [],
        results: [],
        total: 0,
        hasDirect: false,
        hasConnecting: false,
        directCount: 0,
        connectingCount: 0,
        isLive: !this.isTestMode,
        isTestMode: this.isTestMode,
        provider: this.name,
        status: "NO_OFFERS",
        message: isManali
          ? "No verified flight offers found for this destination."
          : "No verified flight offers found for this search.",
        disclaimer: this.isTestMode
          ? "Duffel Test Environment: No offers generated for this corridor and date."
          : "No verified flight offers found for this search."
      };
    }

    // 6. Normalize Duffel offers
    const normalizedOffers = rawOffers.map(offer => this._normalizeOffer(offer));

    // 7. Filtering (Stops & Max Price)
    let filtered = normalizedOffers;

    if (stops && stops !== "all") {
      const stopsLower = stops.toString().toLowerCase();
      if (stopsLower === "nonstop" || stopsLower === "0") {
        filtered = filtered.filter(f => f.stops === 0);
      } else if (stopsLower === "1stop" || stopsLower === "1") {
        filtered = filtered.filter(f => f.stops === 1);
      } else if (stopsLower === "2plus" || stopsLower === "2" || stopsLower === "2+") {
        filtered = filtered.filter(f => f.stops >= 2);
      }
    }

    if (maxPrice !== undefined && maxPrice !== null && maxPrice !== "") {
      const maxVal = parseFloat(maxPrice);
      if (!isNaN(maxVal)) {
        filtered = filtered.filter(f => f.totalPrice <= maxVal);
      }
    }

    // 8. Sorting
    const sortUpper = (sortBy || "").toUpperCase();
    if (sortUpper === "PRICE_LOW_TO_HIGH" || sortUpper === "PRICE_ASC") {
      filtered.sort((a, b) => a.totalPrice - b.totalPrice);
    } else if (sortUpper === "PRICE_HIGH_TO_LOW" || sortUpper === "PRICE_DESC") {
      filtered.sort((a, b) => b.totalPrice - a.totalPrice);
    } else if (sortUpper === "DURATION" || sortUpper === "SHORTEST_DURATION") {
      filtered.sort((a, b) => a.durationMinutes - b.durationMinutes);
    } else if (sortUpper === "EARLIEST" || sortUpper === "EARLIEST_DEPARTURE") {
      filtered.sort((a, b) => {
        const tA = a.departure?.isoTimestamp || "";
        const tB = b.departure?.isoTimestamp || "";
        return tA.localeCompare(tB);
      });
    }

    const total = filtered.length;
    const directCount = filtered.filter(f => f.stops === 0).length;
    const connectingCount = filtered.filter(f => f.stops > 0).length;

    // Check if zero results resulted from filter mismatch
    let message = "";
    if (total === 0 && rawOffers.length > 0) {
      message = "No verified flights match your selected filters.";
    }

    return {
      success: true,
      flights: filtered,
      results: filtered,
      total,
      hasDirect: directCount > 0,
      hasConnecting: connectingCount > 0,
      directCount,
      connectingCount,
      isLive: !this.isTestMode,
      isTestMode: this.isTestMode,
      provider: this.name,
      message,
      disclaimer: this.isTestMode
        ? "Duffel Test Environment: Flight offers are generated for testing purposes and are not real bookable market flights."
        : "Verified live flight offers directly from Duffel inventory."
    };
  }

  /**
   * Normalizes a raw Duffel offer into the standard TravelMate NormalizedFlight format
   */
  _normalizeOffer(offer) {
    const slice = offer.slices?.[0] || {};
    const segments = slice.segments || [];

    const firstSeg = segments[0] || {};
    const lastSeg = segments[segments.length - 1] || firstSeg;

    const stops = Math.max(0, segments.length - 1);
    const isDirect = stops === 0;

    // Airline information (Owner / Carrier)
    const owner = offer.owner || {};
    const firstSegMarketing = firstSeg.marketing_carrier || owner;
    const firstSegOperating = firstSeg.operating_carrier || owner;

    const marketingFlightNum = firstSeg.marketing_carrier_flight_number || "";
    const operatingFlightNum = firstSeg.operating_carrier_flight_number || "";

    const marketingCarrier = {
      name: firstSegMarketing.name || owner.name || "Airline",
      iataCode: firstSegMarketing.iata_code || owner.iata_code || "",
      logoUrl: firstSegMarketing.logo_symbol_url || owner.logo_symbol_url || "",
      flightNumber: marketingFlightNum
    };

    const operatingCarrier = {
      name: firstSegOperating.name || owner.name || marketingCarrier.name,
      iataCode: firstSegOperating.iata_code || owner.iata_code || marketingCarrier.iataCode,
      logoUrl: firstSegOperating.logo_symbol_url || owner.logo_symbol_url || marketingCarrier.logoUrl,
      flightNumber: operatingFlightNum || marketingFlightNum
    };

    const carrierCode = marketingCarrier.iataCode || operatingCarrier.iataCode || owner.iata_code || "";
    const rawFlightNum = marketingFlightNum || operatingFlightNum || "";
    const fullFlightNumber = rawFlightNum
      ? (rawFlightNum.includes("-") || rawFlightNum.startsWith(carrierCode) ? rawFlightNum : `${carrierCode}-${rawFlightNum}`.replace(/^-/, ""))
      : carrierCode;

    const airlineName = marketingCarrier.name || operatingCarrier.name || owner.name || "Airline";
    const airlineCode = carrierCode;
    const airlineLogo = marketingCarrier.logoUrl || operatingCarrier.logoUrl || owner.logo_symbol_url || "";

    // Origin and Destination info
    const originAirportCode = firstSeg.origin?.iata_code || slice.origin?.iata_code || "";
    const originAirportInfo = getAirportInfo(originAirportCode);
    const origin = {
      airportCode: originAirportCode,
      airportName: firstSeg.origin?.name || originAirportInfo.name,
      city: firstSeg.origin?.city_name || originAirportInfo.city,
      terminal: firstSeg.origin_terminal || null
    };

    const destAirportCode = lastSeg.destination?.iata_code || slice.destination?.iata_code || "";
    const destAirportInfo = getAirportInfo(destAirportCode);
    const destination = {
      airportCode: destAirportCode,
      airportName: lastSeg.destination?.name || destAirportInfo.name,
      city: lastSeg.destination?.city_name || destAirportInfo.city,
      terminal: lastSeg.destination_terminal || null
    };

    // Departure and Arrival times
    const depIso = firstSeg.departing_at || "";
    const arrIso = lastSeg.arriving_at || "";
    const departure = {
      date: depIso ? depIso.split("T")[0] : "",
      time: formatTime(depIso),
      isoTimestamp: depIso
    };
    const arrival = {
      date: arrIso ? arrIso.split("T")[0] : "",
      time: formatTime(arrIso),
      isoTimestamp: arrIso
    };

    // Duration calculation
    const totalMinutes = parseIsoDurationMinutes(slice.duration);
    const duration = formatIsoDuration(slice.duration);

    // Layovers for connecting flights
    const layovers = [];
    if (segments.length > 1) {
      for (let i = 0; i < segments.length - 1; i++) {
        const segA = segments[i];
        const segB = segments[i + 1];
        const arrTime = new Date(segA.arriving_at);
        const depTime = new Date(segB.departing_at);
        const layoverMinutes = Math.max(0, Math.round((depTime - arrTime) / (1000 * 60)));
        const layoverCode = segA.destination?.iata_code || "";
        const layoverCity = segA.destination?.city_name || getAirportInfo(layoverCode).city;

        layovers.push({
          airportCode: layoverCode,
          city: layoverCity,
          duration: formatMinutes(layoverMinutes),
          durationMinutes: layoverMinutes
        });
      }
    }

    // Detailed Leg-by-Leg Segments (STRICT REAL-FLIGHT RULE: Every leg from Duffel)
    const normalizedSegments = segments.map((seg, idx) => {
      const segMarketing = seg.marketing_carrier || owner;
      const segOperating = seg.operating_carrier || owner;
      const segMarketingFlightNum = seg.marketing_carrier_flight_number || "";
      const segOperatingFlightNum = seg.operating_carrier_flight_number || "";
      const segAirlineCode = segMarketing.iata_code || segOperating.iata_code || "";
      const rawSegFlightNum = segMarketingFlightNum || segOperatingFlightNum || "";
      const segFlightNumber = rawSegFlightNum
        ? (rawSegFlightNum.includes("-") || rawSegFlightNum.startsWith(segAirlineCode) ? rawSegFlightNum : `${segAirlineCode}-${rawSegFlightNum}`.replace(/^-/, ""))
        : segAirlineCode;

      return {
        legNumber: idx + 1,
        airline: segMarketing.name || segOperating.name || "Airline",
        airlineCode: segAirlineCode,
        flightNumber: segFlightNumber,
        marketingCarrier: {
          name: segMarketing.name || "Airline",
          iataCode: segMarketing.iata_code || "",
          flightNumber: segMarketingFlightNum
        },
        operatingCarrier: {
          name: segOperating.name || "Airline",
          iataCode: segOperating.iata_code || "",
          flightNumber: segOperatingFlightNum
        },
        marketingFlightNumber: segMarketingFlightNum,
        operatingFlightNumber: segOperatingFlightNum,
        aircraft: seg.aircraft?.name || null,
        origin: {
          airportCode: seg.origin?.iata_code,
          airportName: seg.origin?.name,
          city: seg.origin?.city_name || getAirportInfo(seg.origin?.iata_code).city,
          terminal: seg.origin_terminal || null
        },
        originCode: seg.origin?.iata_code,
        destination: {
          airportCode: seg.destination?.iata_code,
          airportName: seg.destination?.name,
          city: seg.destination?.city_name || getAirportInfo(seg.destination?.iata_code).city,
          terminal: seg.destination_terminal || null
        },
        destinationCode: seg.destination?.iata_code,
        departure: {
          date: seg.departing_at ? seg.departing_at.split("T")[0] : "",
          time: formatTime(seg.departing_at),
          isoTimestamp: seg.departing_at
        },
        departureTime: formatTime(seg.departing_at),
        arrival: {
          date: seg.arriving_at ? seg.arriving_at.split("T")[0] : "",
          time: formatTime(seg.arriving_at),
          isoTimestamp: seg.arriving_at
        },
        arrivalTime: formatTime(seg.arriving_at),
        duration: formatIsoDuration(seg.duration),
        durationMinutes: parseIsoDurationMinutes(seg.duration)
      };
    });

    // Cabin class
    const passengerInfo = firstSeg.passengers?.[0] || offer.passengers?.[0] || {};
    const cabin = (passengerInfo.cabin_class || slice.cabin_class || "economy").toUpperCase();

    // Baggage information from Duffel passengers
    let checkInBaggage = "Standard allowance";
    let cabinBaggage = "1 cabin bag";
    if (Array.isArray(passengerInfo.baggages) && passengerInfo.baggages.length > 0) {
      const checkedBag = passengerInfo.baggages.find(b => b.type === "checked");
      const carryOnBag = passengerInfo.baggages.find(b => b.type === "carry_on");
      if (checkedBag) {
        checkInBaggage = checkedBag.quantity ? `${checkedBag.quantity} checked bag` : "1 checked bag";
      }
      if (carryOnBag) {
        cabinBaggage = carryOnBag.quantity ? `${carryOnBag.quantity} carry-on` : "1 carry-on";
      }
    }

    // Conditions (Refundable / Changeable)
    const isRefundable = Boolean(offer.conditions?.refund_before_departure?.allowed);
    const isChangeable = Boolean(offer.conditions?.change_before_departure?.allowed);

    // Pricing
    const totalAmount = parseFloat(offer.total_amount) || 0;
    const baseAmount = parseFloat(offer.base_amount) || totalAmount;
    const taxAmount = parseFloat(offer.tax_amount) || Math.max(0, totalAmount - baseAmount);
    const currency = offer.total_currency || "INR";

    return new NormalizedFlight({
      id: offer.id,
      providerFlightId: offer.id,
      provider: "Duffel",
      isLive: Boolean(offer.live_mode),
      airline: {
        code: airlineCode,
        name: airlineName,
        logo: airlineLogo
      },
      marketingCarrier,
      operatingCarrier,
      flightNumber: fullFlightNumber,
      aircraft: firstSeg.aircraft?.name || "Commercial Airliner",
      cabinClass: cabin,
      origin,
      destination,
      departure,
      arrival,
      duration,
      durationMinutes: totalMinutes,
      stops,
      layovers,
      segments: normalizedSegments,
      baggage: {
        checkIn: checkInBaggage,
        cabin: cabinBaggage
      },
      fareFamily: isRefundable ? "FLEXIBLE" : "STANDARD",
      cancellationRefundable: isRefundable,
      seatAvailability: 9,
      price: baseAmount,
      taxesAndFees: taxAmount,
      currency,
      mealsIncluded: false,
      rawProviderPayload: {
        offerId: offer.id,
        live_mode: offer.live_mode,
        expires_at: offer.expires_at,
        conditions: offer.conditions,
        changeAllowed: isChangeable
      }
    });
  }

  /**
   * Pre-booking revalidation: retrieves fresh offer from Duffel
   * Verifies whether offer has expired or price has changed
   * @param {Object} params
   * @param {string} params.offerId - Duffel offer ID
   * @param {number} [params.expectedPrice] - Price at search time
   * @returns {Promise<{ available: boolean, expired: boolean, priceChanged: boolean, verifiedPrice: number, oldPrice: number, newPrice: number, currency: string, expiresAt: string, flight: Object, message: string }>}
   */
  async revalidateFlight(params = {}) {
    const offerId = params.offerId || params.flightId || params.providerFlightId;
    if (!offerId) {
      return {
        available: false,
        message: "Offer ID is required for flight revalidation."
      };
    }

    try {
      const freshOffer = await this.client.getOffer(offerId);
      if (!freshOffer) {
        return {
          available: false,
          expired: true,
          message: "This flight offer is no longer available. Please search again."
        };
      }

      // Check expiration
      if (freshOffer.expires_at) {
        const expiresAt = new Date(freshOffer.expires_at);
        if (expiresAt < new Date()) {
          return {
            available: false,
            expired: true,
            expiresAt: freshOffer.expires_at,
            message: "This flight offer has expired. Please search again for current availability."
          };
        }
      }

      const verifiedPrice = parseFloat(freshOffer.total_amount) || 0;
      const expected = params.expectedPrice !== undefined ? parseFloat(params.expectedPrice) : undefined;
      const priceChanged = expected !== undefined && Math.abs(verifiedPrice - expected) > 0.01;

      const normalized = this._normalizeOffer(freshOffer);

      return {
        available: true,
        expired: false,
        priceChanged,
        verifiedPrice,
        oldPrice: expected !== undefined ? expected : verifiedPrice,
        newPrice: verifiedPrice,
        currency: freshOffer.total_currency || "INR",
        expiresAt: freshOffer.expires_at,
        flight: normalized.toJSON ? normalized.toJSON() : normalized,
        message: priceChanged
          ? `The flight fare has updated from ${expected} to ${freshOffer.total_currency} ${verifiedPrice}. Please review the updated price.`
          : "Flight offer verified and currently available."
      };
    } catch (err) {
      console.warn("[DuffelFlightProvider] Revalidation error:", err.message);
      return {
        available: false,
        message: "This flight offer is no longer available or could not be verified with the provider."
      };
    }
  }

  /**
   * Fetch single offer details by ID
   */
  async getOffer(offerId) {
    return await this.revalidateFlight({ offerId });
  }
}

module.exports = DuffelFlightProvider;
