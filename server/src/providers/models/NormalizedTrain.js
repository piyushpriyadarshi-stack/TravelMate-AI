// ==================================================
// TravelMate AI - Normalized Train Model
// Unified data contract for rail results across providers (IRCTC Partner API, RailYatri, etc.)
// Supports Direct trains and Connecting rail routes with transfer stations
// ==================================================

class NormalizedTrain {
  constructor({
    id,
    providerTrainId,
    provider = "SandboxTrainProvider",
    isLive = false,
    trainNumber = "22229",
    trainName = "Vande Bharat Express",
    trainType = "EXP", // SUPERFAST, VANDE_BHARAT, RAJDHANI, SHATABDI, EXPRESS
    origin = {
      stationCode: "CSMT",
      stationName: "Chhatrapati Shivaji Maharaj Terminus",
      city: "Mumbai"
    },
    destination = {
      stationCode: "MAO",
      stationName: "Madgaon Junction",
      city: "Goa"
    },
    departure = {
      date: "2026-10-15",
      time: "05:25 AM",
      dayOfWeek: "Thursday"
    },
    arrival = {
      date: "2026-10-15",
      time: "01:10 PM",
      dayOfWeek: "Thursday"
    },
    duration = "7h 45m",
    durationMinutes = 465,
    stops = 0,
    isDirect = true,
    transferStation = null,
    routeSummary = null,
    runningDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    classes = [
      {
        classCode: "CC",
        className: "AC Chair Car",
        fare: 1850,
        availability: "AVAILABLE 64",
        status: "AVAILABLE",
        seatsRemaining: 64,
        cancellationPolicy: "Refundable as per Railway rules"
      },
      {
        classCode: "EC",
        className: "Executive Chair Car",
        fare: 3340,
        availability: "AVAILABLE 12",
        status: "AVAILABLE",
        seatsRemaining: 12,
        cancellationPolicy: "Refundable as per Railway rules"
      }
    ],
    selectedClass = "CC",
    fare = 1850,
    currency = "INR",
    pantryAvailable = true,
    rawProviderPayload = null
  } = {}) {
    this.id = id;
    this.providerTrainId = providerTrainId || id;
    this.provider = provider;
    this.isLive = Boolean(isLive);
    this.trainNumber = trainNumber;
    this.trainName = trainName;
    this.trainType = trainType;
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
    this.runningDays = runningDays;
    this.classes = classes;
    this.selectedClass = selectedClass;
    this.fare = fare;
    this.currency = currency;
    this.operator = "Indian Railways";
    this.status = "AVAILABLE";
    this.fareLabel = this.isLive ? "Verified live fare" : "Estimated fare";
  }

  toJSON() {
    const originCity = typeof this.origin === "object" ? (this.origin.city || "Origin") : this.origin;
    const originCode = typeof this.origin === "object" ? (this.origin.stationCode || "") : "";
    const destCity = typeof this.destination === "object" ? (this.destination.city || "Destination") : this.destination;
    const destinationCode = typeof this.destination === "object" ? (this.destination.stationCode || "") : "";

    return {
      id: this.id,
      type: "TRAIN",
      providerTrainId: this.providerTrainId,
      provider: this.provider,
      operator: this.operator,
      isLive: this.isLive,
      fareLabel: this.fareLabel,
      status: this.status,
      trainNumber: this.trainNumber,
      trainName: this.trainName,
      trainType: this.trainType,
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
      runningDays: this.runningDays,
      classes: this.classes,
      class: this.selectedClass || "3A",
      selectedClass: this.selectedClass,
      fare: this.fare,
      price: this.fare,
      currency: this.currency || "INR",
      pantryAvailable: this.pantryAvailable
    };
  }
}

module.exports = NormalizedTrain;
