// ==================================================
// TravelMate AI - Base Hotel Provider Interface
// Defines the contract that every hotel inventory provider must implement
// (e.g. Amadeus, Hotelbeds, Agoda, Expedia Affiliate, or Sandbox)
// ==================================================

class BaseHotelProvider {
  constructor(name = "UnknownHotelProvider", isLive = false) {
    if (new.target === BaseHotelProvider) {
      throw new TypeError("Cannot construct BaseHotelProvider instances directly.");
    }
    this.name = name;
    this.isLive = isLive;
  }

  /**
   * Search hotels by destination, dates, guests, filters
   * @param {Object} params
   * @param {string} params.destination - Destination name or city
   * @param {string} params.destinationId - Optional destination ID
   * @param {string} params.checkIn - Check-in date (YYYY-MM-DD)
   * @param {string} params.checkOut - Check-out date (YYYY-MM-DD)
   * @param {number} params.rooms - Number of rooms
   * @param {number} params.adults - Number of adult guests
   * @param {number} params.children - Number of child guests
   * @param {string} params.category - Hotel category/star rating
   * @param {number} params.minPrice - Price floor
   * @param {number} params.maxPrice - Price ceiling
   * @param {number} params.minRating - Minimum rating filter
   * @param {Array<string>} params.amenities - Required amenities
   * @param {number} params.page - Pagination page
   * @param {number} params.limit - Results per page
   * @returns {Promise<{ hotels: Array, total: number, isLive: boolean, provider: string }>}
   */
  async searchHotels(params = {}) {
    throw new Error(`searchHotels() must be implemented by ${this.constructor.name}`);
  }

  /**
   * Fetch complete property details, rooms, and rate policies
   * @param {string} hotelId
   * @returns {Promise<Object>}
   */
  async getHotelDetails(hotelId) {
    throw new Error(`getHotelDetails() must be implemented by ${this.constructor.name}`);
  }
}

module.exports = BaseHotelProvider;
