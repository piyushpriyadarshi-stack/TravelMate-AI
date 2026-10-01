// ==================================================
// TravelMate AI - Sandbox Cab Provider Adapter
// Implements BaseCabProvider for private cabs & airport transfers
// Clearly flagged as sandbox data (isLive = false)
// ==================================================

const BaseCabProvider = require("../base/BaseCabProvider");
const NormalizedCab = require("../models/NormalizedCab");

class SandboxCabProvider extends BaseCabProvider {
  constructor() {
    super("SandboxCabProvider", false);
  }

  /**
   * Search private cabs and airport/hotel transfers
   */
  async searchCabs(params = {}) {
    const {
      pickup = "Origin Airport",
      destination = "Destination Hotel",
      dateTime = "2026-10-15 10:00 AM",
      passengers = 2,
      vehicleType = null,
      sortBy = "PRICE_LOW_TO_HIGH",
      page = 1,
      limit = 10
    } = params;

    const pickupCity = pickup.split(",")[0].trim();
    const destCity = destination.split(",")[0].trim();
    const cleanPickupKey = pickupCity.toLowerCase().replace(/[^a-z0-9]/g, "");
    const cleanDestKey = destCity.toLowerCase().replace(/[^a-z0-9]/g, "");

    const vehicleTemplates = [
      {
        category: "HATCHBACK",
        model: "Maruti WagonR / Tata Tiago or equivalent",
        capacity: 4,
        luggage: "1 Large Bag or 2 Small Bags",
        fare: 2100,
        pricePerKm: 12,
        rating: 4.6
      },
      {
        category: "SEDAN",
        model: "Maruti Dzire / Hyundai Aura AC",
        capacity: 4,
        luggage: "2 Large Bags",
        fare: 2850,
        pricePerKm: 14,
        rating: 4.8
      },
      {
        category: "SUV",
        model: "Toyota Innova Crysta (Chauffeur AC)",
        capacity: 6,
        luggage: "4 Large Bags",
        fare: 4800,
        pricePerKm: 19,
        rating: 4.9
      },
      {
        category: "LUXURY",
        model: "Mercedes E-Class / BMW 5 Series",
        capacity: 4,
        luggage: "3 Bags",
        fare: 12500,
        pricePerKm: 45,
        rating: 4.95
      },
      {
        category: "TEMPO_TRAVELLER",
        model: "Force Urbania / Traveller (12+1 Seater AC)",
        capacity: 12,
        luggage: "10 Bags",
        fare: 8900,
        pricePerKm: 28,
        rating: 4.7
      }
    ];

    let cabs = vehicleTemplates.map((v, idx) => {
      return new NormalizedCab({
        id: `cab-${cleanPickupKey}-${cleanDestKey}-${idx + 1}`,
        providerCabId: `sb-cab-${v.category.toLowerCase()}-${idx + 1}`,
        provider: this.name,
        isLive: this.isLive,
        vehicleCategory: v.category,
        vehicleModel: v.model,
        capacity: v.capacity,
        luggageCapacity: v.luggage,
        isAC: true,
        tripType: "AIRPORT_HOTEL_TRANSFER",
        pickup: {
          location: pickup,
          city: pickupCity
        },
        destination: {
          location: destination,
          city: destCity
        },
        dateTime,
        driverIncluded: true,
        estimatedFare: v.fare,
        taxesAndTolls: "Tolls, state taxes & chauffeur allowance included",
        pricePerKm: v.pricePerKm,
        freeCancellationMinutes: 60,
        availability: "AVAILABLE",
        rating: v.rating,
        features: ["Clean sanitized car", "Air Conditioning", "Commercial Chauffeur", "Flight Delay Protection"]
      });
    });

    // Filter by vehicle type
    if (vehicleType) {
      cabs = cabs.filter(c => c.vehicleCategory.toUpperCase() === vehicleType.toUpperCase());
    }

    // Filter by passengers count: cab capacity must be >= passenger count
    const pCount = parseInt(passengers, 10);
    if (!isNaN(pCount) && pCount > 0) {
      cabs = cabs.filter(c => c.capacity >= pCount);
    }

    // Sorting
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      cabs.sort((a, b) => a.estimatedFare - b.estimatedFare);
    } else if (sortBy === "PRICE_HIGH_TO_LOW") {
      cabs.sort((a, b) => b.estimatedFare - a.estimatedFare);
    } else if (sortBy === "CAPACITY") {
      cabs.sort((a, b) => b.capacity - a.capacity);
    }

    const total = cabs.length;
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const pageLimit = Math.max(1, parseInt(limit, 10) || 10);
    const paginated = cabs.slice((pageNum - 1) * pageLimit, pageNum * pageLimit);

    return {
      cabs: paginated,
      total,
      isLive: this.isLive,
      provider: this.name,
      disclaimer: "Sandbox / Development provider. Real cab rates and chauffeur dispatch require cab partner API integration."
    };
  }
}

module.exports = SandboxCabProvider;
