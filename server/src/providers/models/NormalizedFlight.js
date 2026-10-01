// ==================================================
// TravelMate AI - Normalized Flight Model
// Unified data contract for flight results across providers (Amadeus, Cleartrip, Skyscanner, etc.)
// Fully supports Direct (Nonstop) and Connecting (1-Stop, 2+ Stops) flights
// ==================================================

class NormalizedFlight {
  constructor({
    id,
    providerFlightId,
    provider = "SandboxFlightProvider",
    isLive = false,
    airline = {
      code: "6E",
      name: "IndiGo",
      logo: ""
    },
    flightNumber = "6E-512",
    aircraft = "Airbus A320neo",
    cabinClass = "ECONOMY", // ECONOMY, PREMIUM_ECONOMY, BUSINESS, FIRST
    origin = {
      airportCode: "DEL",
      airportName: "Indira Gandhi International Airport",
      city: "New Delhi",
      terminal: "3"
    },
    destination = {
      airportCode: "GOI",
      airportName: "Dabolim Airport",
      city: "Goa",
      terminal: "1"
    },
    departure = {
      date: "2026-10-15",
      time: "06:15 AM",
      isoTimestamp: null
    },
    arrival = {
      date: "2026-10-15",
      time: "08:50 AM",
      isoTimestamp: null
    },
    duration = "2h 35m",
    durationMinutes = 155,
    stops = 0, // 0 for nonstop, 1, 2, etc.
    layovers = [], // Array of { airportCode, city, duration, durationMinutes }
    segments = [], // Optional leg-by-leg segments
    baggage = {
      checkIn: "15 kg (1 piece)",
      cabin: "7 kg (1 hand bag)"
    },
    fareFamily = "SAVER", // SAVER, FLEXI, SUPER_SAVER, CORPORATE
    cancellationRefundable = true,
    seatAvailability = 14,
    price = 4850,
    taxesAndFees = 680,
    currency = "INR",
    mealsIncluded = false,
    rawProviderPayload = null,
    marketingCarrier = null,
    operatingCarrier = null
  } = {}) {
    this.id = id;
    this.type = "FLIGHT";
    this.providerFlightId = providerFlightId || id;
    this.provider = provider;
    this.isLive = Boolean(isLive);
    this.airline = airline;
    this.marketingCarrier = marketingCarrier || {
      name: airline?.name || "Airline",
      iataCode: airline?.code || ""
    };
    this.operatingCarrier = operatingCarrier || {
      name: airline?.name || "Airline",
      iataCode: airline?.code || ""
    };
    this.flightNumber = flightNumber;
    this.aircraft = aircraft;
    this.cabinClass = cabinClass;
    this.origin = origin;
    this.destination = destination;
    this.departure = departure;
    this.arrival = arrival;
    this.duration = duration;
    this.durationMinutes = durationMinutes;
    this.stops = stops;
    this.isDirect = stops === 0;
    this.layovers = layovers;
    this.segments = segments;
    this.baggage = baggage;
    this.fareFamily = fareFamily;
    this.cancellationRefundable = cancellationRefundable;
    this.seatAvailability = seatAvailability;
    this.price = price;
    this.taxesAndFees = taxesAndFees || Math.round(price * 0.12);
    this.totalPrice = this.price + this.taxesAndFees;
    this.currency = currency;
    this.mealsIncluded = mealsIncluded;
    this.rawProviderPayload = rawProviderPayload;

    // Strict Real-Flight Labeling & Source of Truth Contract
    this.verificationStatus = this.isLive ? "VERIFIED_LIVE_PROVIDER" : "TEST_DEVELOPMENT_DATA";
    this.label = this.isLive ? "VERIFIED LIVE FLIGHT" : "TEST/DEVELOPMENT DATA — NOT A REAL FLIGHT";
    this.providerNotice = this.isLive
      ? "Verified legitimate airline provider inventory"
      : "TEST/DEVELOPMENT DATA: Sandbox simulated flight. Real booking requires authorized airline/GDS provider API.";

    // Computed stop summary
    if (this.stops === 0) {
      this.stopSummary = "Nonstop";
      this.routeSummary = `${this.origin.city} → ${this.destination.city}`;
      this.layoverSummary = "Direct flight";
    } else if (this.stops === 1 && this.layovers.length > 0) {
      const layover = this.layovers[0];
      this.stopSummary = "1 Stop";
      this.routeSummary = `${this.origin.city} → ${layover.city || layover.airportCode} → ${this.destination.city}`;
      this.layoverSummary = `${layover.duration || "1h 30m"} layover in ${layover.city || layover.airportCode}`;
    } else {
      this.stopSummary = `${this.stops} Stops`;
      const viaCities = this.layovers.map(l => l.city || l.airportCode).join(" → ");
      this.routeSummary = viaCities
        ? `${this.origin.city} → ${viaCities} → ${this.destination.city}`
        : `${this.origin.city} → ${this.destination.city} (${this.stops} stops)`;
      this.layoverSummary = this.layovers.map(l => `${l.duration || ""} in ${l.city}`).join(", ");
    }
    this.status = "AVAILABLE";
    this.fareLabel = this.isLive ? "Verified live fare" : "Estimated fare";
  }

  toJSON() {
    const airlineName = typeof this.airline === "object" ? (this.airline.name || "Airline") : (this.airline || "Airline");
    const originCity = typeof this.origin === "object" ? (this.origin.city || "Origin") : this.origin;
    const originCode = typeof this.origin === "object" ? (this.origin.airportCode || "") : "";
    const destCity = typeof this.destination === "object" ? (this.destination.city || "Destination") : this.destination;
    const destinationCode = typeof this.destination === "object" ? (this.destination.airportCode || "") : "";

    return {
      id: this.id,
      type: "FLIGHT",
      providerFlightId: this.providerFlightId,
      provider: this.provider,
      isLive: this.isLive,
      verificationStatus: this.verificationStatus,
      label: this.label,
      providerNotice: this.providerNotice,
      fareLabel: this.fareLabel,
      status: this.status,
      airline: airlineName,
      airlineDetails: this.airline,
      marketingCarrier: this.marketingCarrier,
      operatingCarrier: this.operatingCarrier,
      flightNumber: this.flightNumber,
      aircraft: this.aircraft,
      cabinClass: this.cabinClass,
      origin: originCity,
      originDetails: this.origin,
      originCode,
      destination: destCity,
      destinationDetails: this.destination,
      destinationCode,
      departureDate: this.departure?.date || "",
      departureTime: this.departure?.time || "",
      arrivalTime: this.arrival?.time || "",
      departure: this.departure,
      arrival: this.arrival,
      duration: this.duration,
      durationMinutes: this.durationMinutes,
      stops: this.stops,
      isDirect: this.isDirect,
      stopSummary: this.stopSummary,
      routeSummary: this.routeSummary,
      layovers: this.layovers,
      layoverSummary: this.layoverSummary,
      segments: this.segments,
      baggage: this.baggage,
      fareFamily: this.fareFamily,
      fareType: this.fareFamily,
      cancellationRefundable: this.cancellationRefundable,
      price: this.price,
      taxesAndFees: this.taxesAndFees,
      totalPrice: this.totalPrice,
      currency: this.currency || "INR",
      mealsIncluded: this.mealsIncluded
    };
  }
}

module.exports = NormalizedFlight;
