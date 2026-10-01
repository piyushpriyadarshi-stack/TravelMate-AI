// ==================================================
// TravelMate AI - Base Bus Provider Interface
// Defines the contract that every intercity bus provider adapter must implement
// (e.g. RedBus API, AbhiBus, IntrCity, or Sandbox)
// ==================================================

class BaseBusProvider {
  constructor(name = "UnknownBusProvider", isLive = false) {
    if (new.target === BaseBusProvider) {
      throw new TypeError("Cannot construct BaseBusProvider instances directly.");
    }
    this.name = name;
    this.isLive = isLive;
  }

  /**
   * Search intercity buses
   * @param {Object} params
   * @param {string} params.origin - Departure city
   * @param {string} params.destination - Arrival city
   * @param {string} params.date - Departure date (YYYY-MM-DD)
   * @param {number} params.travelers - Seat count
   * @param {string} params.busType - AC, NON_AC, SLEEPER, VOLVO
   * @returns {Promise<{ buses: Array, total: number, isLive: boolean, provider: string }>}
   */
  async searchBuses(params = {}) {
    throw new Error(`searchBuses() must be implemented by ${this.constructor.name}`);
  }
}

module.exports = BaseBusProvider;
