// ==================================================
// TravelMate AI - Sandbox Hotel Provider Adapter
// Implements BaseHotelProvider interface for local development and testing.
// Clearly flagged as sandbox data (isLive = false).
// REAL HOTEL DATA ≠ REAL LIVE AVAILABILITY.
// ==================================================

const BaseHotelProvider = require("../base/BaseHotelProvider");
const NormalizedHotel = require("../models/NormalizedHotel");
const { hotels, destinations } = require("../../utils/sampleData");

function calculateHaversineDistanceKm(lat1, lon1, lat2, lon2) {
  if (lat1 == null || lon1 == null || lat2 == null || lon2 == null) return null;
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

class SandboxHotelProvider extends BaseHotelProvider {
  constructor() {
    super("SandboxHotelProvider", false);
  }

  /**
   * Search hotels with unified query parameters and filters
   */
  async searchHotels(params = {}) {
    const {
      destination,
      destinationId,
      checkIn,
      checkOut,
      rooms = 1,
      travelers = 1,
      adults = 2,
      children = 0,
      category,
      minPrice,
      maxPrice,
      minRating,
      amenities = [],
      page = 1,
      limit = 20,
      sortBy = "POPULARITY", // NEAREST, DISTANCE, PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW, RATING, CATEGORY
      userLat,
      userLng,
      latitude,
      longitude
    } = params;

    // Validate parameters
    const numTravelers = parseInt(travelers, 10) || (parseInt(adults, 10) + parseInt(children, 10)) || 1;
    const numRooms = parseInt(rooms, 10) || 1;
    if (numTravelers < 1) {
      throw new Error("Travelers must be at least 1.");
    }
    if (numRooms < 1) {
      throw new Error("Rooms must be at least 1.");
    }

    if (checkIn && checkOut) {
      const cin = new Date(checkIn);
      const cout = new Date(checkOut);
      if (isNaN(cin.getTime()) || isNaN(cout.getTime())) {
        throw new Error("Invalid check-in or check-out date format.");
      }
      if (cout <= cin) {
        throw new Error("Check-out date must be after check-in date.");
      }
    }

    // Filter hotels by destination
    let pool = [...hotels];

    if (destinationId) {
      pool = pool.filter(h => h.destinationId === destinationId);
    } else if (destination) {
      const q = destination.toLowerCase().trim();
      const matchedDest = destinations.find(
        d =>
          d.id.toLowerCase() === q ||
          d.name.toLowerCase() === q ||
          d.city.toLowerCase() === q ||
          d.name.toLowerCase().includes(q) ||
          q.includes(d.name.toLowerCase())
      );

      if (matchedDest) {
        pool = pool.filter(h => h.destinationId === matchedDest.id);
      } else {
        // Destination not in system
        return {
          hotels: [],
          total: 0,
          isLive: this.isLive,
          provider: this.name,
          disclaimer: "Sandbox / Development provider. Destination not recognized."
        };
      }
    }

    // Reference coordinates for distance
    const refLat = userLat != null ? parseFloat(userLat) : (latitude != null ? parseFloat(latitude) : null);
    const refLng = userLng != null ? parseFloat(userLng) : (longitude != null ? parseFloat(longitude) : null);

    // Calculate real distance for each hotel
    pool = pool.map(h => {
      const dist = refLat != null && refLng != null && h.latitude != null && h.longitude != null
        ? calculateHaversineDistanceKm(refLat, refLng, h.latitude, h.longitude)
        : null;
      return {
        ...h,
        distanceKm: dist
      };
    });

    // Category filter
    if (category) {
      pool = pool.filter(h => h.category && h.category.toUpperCase() === category.toUpperCase());
    }

    // Min & Max Price
    if (minPrice !== undefined && minPrice !== null && minPrice !== "") {
      pool = pool.filter(h => h.pricePerNight >= parseFloat(minPrice));
    }
    if (maxPrice !== undefined && maxPrice !== null && maxPrice !== "") {
      pool = pool.filter(h => h.pricePerNight <= parseFloat(maxPrice));
    }

    // Min Rating
    if (minRating) {
      pool = pool.filter(h => h.rating >= parseFloat(minRating));
    }

    // Amenities filter
    if (amenities && amenities.length > 0) {
      const requiredList = Array.isArray(amenities) ? amenities : [amenities];
      pool = pool.filter(h =>
        requiredList.every(req =>
          h.amenities?.some(a => a.toLowerCase().includes(req.toLowerCase()))
        )
      );
    }

    // Sorting
    const sortUpper = (sortBy || "").toUpperCase();
    if (sortUpper === "NEAREST" || sortUpper === "DISTANCE") {
      pool.sort((a, b) => {
        if (a.distanceKm == null) return 1;
        if (b.distanceKm == null) return -1;
        return a.distanceKm - b.distanceKm;
      });
    } else if (sortUpper === "PRICE_LOW_TO_HIGH" || sortUpper === "PRICE_ASC") {
      pool.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (sortUpper === "PRICE_HIGH_TO_LOW" || sortUpper === "PRICE_DESC") {
      pool.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (sortUpper === "RATING" || sortUpper === "RATING_DESC") {
      pool.sort((a, b) => b.rating - a.rating);
    } else if (sortUpper === "CATEGORY") {
      pool.sort((a, b) => (b.category || "").localeCompare(a.category || ""));
    }

    const total = pool.length;

    // Pagination
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const pageLimit = Math.max(1, parseInt(limit, 10) || 20);
    const startIndex = (pageNum - 1) * pageLimit;
    const paginatedHotels = pool.slice(startIndex, startIndex + pageLimit);

    // Map each hotel into NormalizedHotel model
    const normalizedHotels = paginatedHotels.map(h => {
      const dest = destinations.find(d => d.id === h.destinationId);
      return new NormalizedHotel({
        id: h.id,
        providerHotelId: `sandbox-${h.id}`,
        provider: this.name,
        isLive: this.isLive,
        name: h.name,
        tagline: h.shortDescription || `Verified real property in ${h.city || dest?.name}`,
        description: h.description,
        propertyType: h.category === "LUXURY" || h.category === "RESORT" ? "RESORT" : "HOTEL",
        category: h.category,
        starRating: h.rating >= 4.7 ? 5 : 4,
        userRating: h.rating,
        reviewCount: 150,
        location: {
          address: h.fullAddress || h.address || `${h.name}, ${h.city || dest?.city || ""}`,
          city: h.city || dest?.city || "",
          state: h.state || dest?.state || "",
          country: h.country || dest?.country || "India",
          latitude: h.latitude || null,
          longitude: h.longitude || null
        },
        images: h.images || (h.imageUrls ? h.imageUrls.map(u => ({ url: u, type: "exterior", alt: h.name, source: "Official/Media" })) : []),
        amenities: h.amenities || [],
        roomTypes: (h.roomTypes || h.rooms || []).map(r => ({
          id: r.id,
          name: r.name,
          type: r.type,
          capacity: r.maxGuests || r.capacity || 2,
          maxGuests: r.maxGuests || r.capacity || 2,
          bedType: r.bedType || null,
          roomSize: r.roomSize || null,
          description: r.description || null,
          pricePerNight: r.price || r.pricePerNight,
          currency: r.currency || "INR",
          pricingMode: "DEVELOPMENT_TEST",
          availableRooms: null, // STRICT: No fake live room inventory
          amenities: r.amenities || []
        })),
        pricePerNight: h.pricePerNight,
        taxesAndFees: Math.round(h.pricePerNight * 0.12),
        currency: "INR",
        cancellationPolicy: {
          isRefundable: true,
          freeCancellationBefore: "48h before check-in",
          description: "Free cancellation up to 48 hours prior to check-in date."
        },
        checkInTime: h.checkInTime || "14:00",
        checkOutTime: h.checkOutTime || "12:00",
        totalRooms: h.totalRooms || null,
        available: true,
        availableRoomsCount: null, // STRICT: No fake live count
        pricingMode: "DEVELOPMENT_TEST",
        liveAvailability: false,
        availabilityStatus: "REQUIRES_LIVE_CHECK",
        priceNotice: "Development price — final price and availability will be verified before booking.",
        roomAvailability: {
          verified: false,
          availableRooms: null,
          lastChecked: null,
          message: "Live availability requires verification"
        },
        officialWebsite: h.officialWebsite || null,
        phone: h.phone || null,
        email: h.email || null,
        distanceKm: h.distanceKm || null,
        sourceUrl: h.sourceUrl || null,
        verifiedAt: h.verifiedAt || null
      });
    });

    return {
      hotels: normalizedHotels,
      total,
      isLive: this.isLive,
      provider: this.name,
      disclaimer: "Development price — final price and availability will be verified before booking."
    };
  }

  /**
   * Fetch single property details
   */
  async getHotelDetails(hotelId) {
    const raw = hotels.find(h => h.id === hotelId);
    if (!raw) return null;

    const dest = destinations.find(d => d.id === raw.destinationId);
    return new NormalizedHotel({
      id: raw.id,
      providerHotelId: `sandbox-${raw.id}`,
      provider: this.name,
      isLive: this.isLive,
      name: raw.name,
      tagline: raw.shortDescription || `Verified real property in ${raw.city || dest?.name || ""}`,
      description: raw.description,
      propertyType: raw.category === "LUXURY" || raw.category === "RESORT" ? "RESORT" : "HOTEL",
      category: raw.category,
      starRating: raw.rating >= 4.7 ? 5 : 4,
      userRating: raw.rating,
      reviewCount: 150,
      location: {
        address: raw.fullAddress || raw.address,
        city: raw.city || dest?.city || "",
        state: raw.state || dest?.state || "",
        country: raw.country || dest?.country || "India",
        latitude: raw.latitude || null,
        longitude: raw.longitude || null
      },
      images: raw.images || (raw.imageUrls ? raw.imageUrls.map(u => ({ url: u, type: "exterior", alt: raw.name, source: "Official/Media" })) : []),
      amenities: raw.amenities || [],
      roomTypes: (raw.roomTypes || raw.rooms || []).map(r => ({
        id: r.id,
        name: r.name,
        type: r.type,
        capacity: r.maxGuests || r.capacity || 2,
        maxGuests: r.maxGuests || r.capacity || 2,
        bedType: r.bedType || null,
        roomSize: r.roomSize || null,
        description: r.description || null,
        pricePerNight: r.price || r.pricePerNight,
        currency: r.currency || "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null,
        amenities: r.amenities || []
      })),
      pricePerNight: raw.pricePerNight,
      taxesAndFees: Math.round(raw.pricePerNight * 0.12),
      currency: "INR",
      cancellationPolicy: {
        isRefundable: true,
        freeCancellationBefore: "48h before check-in",
        description: "Free cancellation up to 48 hours prior to check-in."
      },
      checkInTime: raw.checkInTime || "14:00",
      checkOutTime: raw.checkOutTime || "12:00",
      totalRooms: raw.totalRooms || null,
      available: true,
      availableRoomsCount: null,
      pricingMode: "DEVELOPMENT_TEST",
      liveAvailability: false,
      availabilityStatus: "REQUIRES_LIVE_CHECK",
      priceNotice: "Development price — final price and availability will be verified before booking.",
      roomAvailability: {
        verified: false,
        availableRooms: null,
        lastChecked: null,
        message: "Live availability requires verification"
      },
      officialWebsite: raw.officialWebsite || null,
      phone: raw.phone || null,
      email: raw.email || null,
      sourceUrl: raw.sourceUrl || null,
      verifiedAt: raw.verifiedAt || null
    });
  }
}

module.exports = SandboxHotelProvider;
