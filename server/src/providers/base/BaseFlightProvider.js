// ==================================================
// TravelMate AI - Base Flight Provider Interface
// Defines the contract that every flight provider adapter must implement
// (e.g. Amadeus GDS, Skyscanner, Cleartrip, or Sandbox)
// ==================================================

class BaseFlightProvider {
  constructor(name = "UnknownFlightProvider", isLive = false) {
    if (new.target === BaseFlightProvider) {
      throw new TypeError("Cannot construct BaseFlightProvider instances directly.");
    }
    this.name = name;
    this.isLive = isLive;
  }

  /**
   * Search flights between origin and destination
   * @param {Object} params
   * @returns {Promise<{ flights: Array, total: number, isLive: boolean, provider: string }>}
   */
  async searchFlights(params = {}) {
    throw new Error(`searchFlights() must be implemented by ${this.constructor.name}`);
  }

  /**
   * Fresh pre-booking availability and price check with provider
   * @param {Object} params
   * @param {string} params.flightId
   * @param {string} params.providerFlightId
   * @param {string} params.departureDate
   * @param {number} params.travelers
   * @param {number} params.expectedPrice
   * @returns {Promise<{ available: boolean, verifiedPrice: number, priceChanged: boolean, flight: Object }>}
   */
  async revalidateFlight(params = {}) {
    throw new Error(`revalidateFlight() must be implemented by ${this.constructor.name}`);
  }
}

module.exports = BaseFlightProvider;
