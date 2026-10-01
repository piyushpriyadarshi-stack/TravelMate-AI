// ==================================================
// TravelMate AI - Base Train Provider Interface
// Defines the contract that every rail inventory provider must implement
// (e.g. IRCTC Partner API, RailYatri, or Sandbox)
// ==================================================

class BaseTrainProvider {
  constructor(name = "UnknownTrainProvider", isLive = false) {
    if (new.target === BaseTrainProvider) {
      throw new TypeError("Cannot construct BaseTrainProvider instances directly.");
    }
    this.name = name;
    this.isLive = isLive;
  }

  /**
   * Search trains between stations/cities
   * @param {Object} params
   * @param {string} params.origin - Origin station/city
   * @param {string} params.destination - Destination station/city
   * @param {string} params.date - Departure date (YYYY-MM-DD)
   * @param {number} params.travelers - Passenger count
   * @param {string} params.travelClass - 1A, 2A, 3A, SL, CC, EC, etc.
   * @returns {Promise<{ trains: Array, total: number, isLive: boolean, provider: string }>}
   */
  async searchTrains(params = {}) {
    throw new Error(`searchTrains() must be implemented by ${this.constructor.name}`);
  }
}

module.exports = BaseTrainProvider;
