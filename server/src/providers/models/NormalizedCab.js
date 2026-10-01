// ==================================================
// TravelMate AI - Normalized Cab Model
// Unified data contract for cabs, outstation taxis, and airport transfers (MakeMyTrip Cabs, Uber/Ola partner, etc.)
// ==================================================

class NormalizedCab {
  constructor({
    id,
    providerCabId,
    provider = "SandboxCabProvider",
    isLive = false,
    vehicleCategory = "SEDAN", // HATCHBACK, SEDAN, SUV, LUXURY, TEMPO_TRAVELLER
    vehicleModel = "Maruti Suzuki Dzire or equivalent",
    capacity = 4,
    luggageCapacity = "2 Bags",
    isAC = true,
    tripType = "AIRPORT_HOTEL_TRANSFER", // AIRPORT_HOTEL_TRANSFER, OUTSTATION_ONEWAY, OUTSTATION_ROUNDTRIP, HOURLY_RENTAL
    pickup = {
      location: "Bhubaneswar Airport (BBI)",
      city: "Bhubaneswar"
    },
    destination = {
      location: "Mayfair Palm Beach Resort",
      city: "Gopalpur"
    },
    dateTime = "2026-10-15 10:00 AM",
    driverIncluded = true,
    estimatedFare = 3400,
    taxesAndTolls = "Included in base price",
    pricePerKm = 14,
    freeCancellationMinutes = 60,
    availability = "AVAILABLE",
    rating = 4.7,
    features = ["Air Conditioned", "Sanitized Cab", "Top Rated Chauffeur", "Flight Tracking", "Doorstep Pickup"],
    rawProviderPayload = null
  } = {}) {
    this.id = id;
    this.providerCabId = providerCabId || id;
    this.provider = provider;
    this.isLive = Boolean(isLive);
    this.vehicleCategory = vehicleCategory;
    this.vehicleModel = vehicleModel;
    this.capacity = capacity;
    this.luggageCapacity = luggageCapacity;
    this.isAC = isAC;
    this.tripType = tripType;
    this.pickup = pickup;
    this.destination = destination;
    this.dateTime = dateTime;
    this.driverIncluded = driverIncluded;
    this.estimatedFare = estimatedFare;
    this.taxesAndTolls = taxesAndTolls;
    this.pricePerKm = pricePerKm;
    this.freeCancellationMinutes = freeCancellationMinutes;
    this.availability = availability;
    this.rating = rating;
    this.features = features;
    this.rawProviderPayload = rawProviderPayload;
  }

  toJSON() {
    return {
      id: this.id,
      providerCabId: this.providerCabId,
      provider: this.provider,
      isLive: this.isLive,
      vehicleCategory: this.vehicleCategory,
      vehicleModel: this.vehicleModel,
      capacity: this.capacity,
      luggageCapacity: this.luggageCapacity,
      isAC: this.isAC,
      tripType: this.tripType,
      pickup: this.pickup,
      destination: this.destination,
      dateTime: this.dateTime,
      driverIncluded: this.driverIncluded,
      estimatedFare: this.estimatedFare,
      taxesAndTolls: this.taxesAndTolls,
      pricePerKm: this.pricePerKm,
      freeCancellationMinutes: this.freeCancellationMinutes,
      availability: this.availability,
      rating: this.rating,
      features: this.features
    };
  }
}

module.exports = NormalizedCab;
