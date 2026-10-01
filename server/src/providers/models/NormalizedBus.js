// ==================================================
// TravelMate AI - Normalized Bus Model
// Unified data contract for intercity bus inventory across providers (RedBus, AbhiBus, IntrCity, etc.)
// ==================================================

class NormalizedBus {
  constructor({
    id,
    providerBusId,
    provider = "SandboxBusProvider",
    isLive = false,
    operatorName = "IntrCity SmartBus",
    busType = "Multi-Axle AC Sleeper (2+1)",
    isAC = true,
    isSleeper = true,
    origin = {
      city: "Mumbai",
      majorLocation: "Borivali East"
    },
    destination = {
      city: "Goa",
      majorLocation: "Panjim Bus Stand"
    },
    departure = {
      date: "2026-10-15",
      time: "07:30 PM"
    },
    arrival = {
      date: "2026-10-16",
      time: "08:00 AM"
    },
    duration = "12h 30m",
    durationMinutes = 750,
    boardingPoints = [
      { name: "Borivali East (National Park)", time: "07:30 PM", landmark: "Opp. Skywalk" },
      { name: "Andheri East (Bisleri Compound)", time: "08:15 PM", landmark: "WEH Junction" },
      { name: "Vashi (Old Toll Naka)", time: "09:30 PM", landmark: "Vashi Plaza" }
    ],
    droppingPoints = [
      { name: "Mapusa Bypass", time: "07:15 AM", landmark: "Hotel Green Park Circle" },
      { name: "Panjim Bus Terminal", time: "08:00 AM", landmark: "KTC Bus Stand" }
    ],
    seatAvailability = {
      totalSeats: 40,
      availableSeats: 16,
      windowSeatsAvailable: 6,
      singleSeatsAvailable: 3
    },
    seatTypes = ["SLEEPER", "SEATER"],
    rating = 4.4,
    reviewsCount = 380,
    amenities = ["AC", "Charging Point", "Reading Light", "Blanket", "Water Bottle", "Live Bus Tracking"],
    cancellationPolicy = {
      isRefundable: true,
      description: "0 to 12 hrs before travel: 0% refund. 12 to 24 hrs: 50% refund. >24 hrs: 90% refund."
    },
    stops = 0,
    isDirect = true,
    transferStation = null,
    routeSummary = null,
    fare = 1650,
    taxesAndFees = 82,
    currency = "INR",
    rawProviderPayload = null
  } = {}) {
    this.id = id;
    this.providerBusId = providerBusId || id;
    this.provider = provider;
    this.isLive = Boolean(isLive);
    this.operatorName = operatorName;
    this.busType = busType;
    this.isAC = isAC;
    this.isSleeper = isSleeper;
    this.origin = origin;
    this.destination = destination;
    this.departure = departure;
    this.arrival = arrival;
    this.duration = duration;
    this.durationMinutes = durationMinutes;
    this.stops = stops;
    this.isDirect = isDirect;
    this.transferStation = transferStation;
    this.routeSummary = routeSummary || (isDirect
      ? `${this.origin.city} → ${this.destination.city} (Direct)`
      : `${this.origin.city} → ${transferStation} → ${this.destination.city}`);
    this.boardingPoints = boardingPoints;
    this.droppingPoints = droppingPoints;
    this.seatAvailability = seatAvailability;
    this.seatTypes = seatTypes;
    this.rating = rating;
    this.reviewsCount = reviewsCount;
    this.amenities = amenities;
    this.cancellationPolicy = cancellationPolicy;
    this.fare = fare;
    this.status = "AVAILABLE";
    this.fareLabel = this.isLive ? "Verified live fare" : "Estimated fare";
  }

  toJSON() {
    const originCity = typeof this.origin === "object" ? (this.origin.city || "Origin") : this.origin;
    const originCode = typeof this.origin === "object" ? (this.origin.majorLocation || this.origin.stationCode || "") : "";
    const destCity = typeof this.destination === "object" ? (this.destination.city || "Destination") : this.destination;
    const destinationCode = typeof this.destination === "object" ? (this.destination.majorLocation || this.destination.stationCode || "") : "";
    const seatType = this.seatTypes?.[0] || (this.isSleeper ? "AC Sleeper" : this.isAC ? "AC Seater" : "Non-AC");

    return {
      id: this.id,
      type: "BUS",
      providerBusId: this.providerBusId,
      provider: this.provider,
      operator: this.operatorName,
      operatorName: this.operatorName,
      busType: this.busType,
      isAC: this.isAC,
      isSleeper: this.isSleeper,
      seatType,
      isLive: this.isLive,
      fareLabel: this.fareLabel,
      status: this.status,
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
      transferStation: this.transferStation,
      routeSummary: this.routeSummary,
      boardingPoints: this.boardingPoints,
      droppingPoints: this.droppingPoints,
      rating: this.rating,
      reviewsCount: this.reviewsCount,
      amenities: this.amenities,
      cancellationPolicy: this.cancellationPolicy,
      fare: this.fare,
      price: this.fare,
      taxesAndFees: this.taxesAndFees,
      totalFare: this.totalFare,
      currency: this.currency || "INR"
    };
  }
}

module.exports = NormalizedBus;
