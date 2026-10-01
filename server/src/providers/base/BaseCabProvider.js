// ==================================================
// TravelMate AI - Base Cab Provider Interface
// Defines the contract for private vehicle & airport transfer adapters
// (e.g. MakeMyTrip Cabs API, Uber/Ola partner API, or Sandbox)
// ==================================================

class BaseCabProvider {
  constructor(name = "UnknownCabProvider", isLive = false) {
    if (new.target === BaseCabProvider) {
      throw new TypeError("Cannot construct BaseCabProvider instances directly.");
    }
    this.name = name;
    this.isLive = isLive;
  }

  /**
   * Search private cabs and airport/hotel transfers
   * @param {Object} params
   * @param {string} params.pickup - Pickup location or city
   * @param {string} params.destination - Drop location or city
   * @param {string} params.dateTime - Pickup date/time
   * @param {number} params.passengers - Passenger count
   * @param {string} params.vehicleType - SEDAN, SUV, HATCHBACK, LUXURY
   * @returns {Promise<{ cabs: Array, total: number, isLive: boolean, provider: string }>}
   */
  async searchCabs(params = {}) {
    throw new Error(`searchCabs() must be implemented by ${this.constructor.name}`);
  }
}

module.exports = BaseCabProvider;
