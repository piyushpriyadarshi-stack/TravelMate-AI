// ==================================================
// TravelMate AI - Normalized Hotel Model
// Unified data contract for all hotel inventory across providers
// REAL HOTEL DATA ≠ LIVE AVAILABILITY
// ==================================================

class NormalizedHotel {
  constructor({
    id,
    providerHotelId,
    provider = "SandboxHotelProvider",
    isLive = false,
    name,
    tagline = "",
    description = "",
    propertyType = "HOTEL", // HOTEL, RESORT, VILLA, HOMESTAY, APARTMENT
    category = "FOUR_STAR", // BUDGET, THREE_STAR, FOUR_STAR, FIVE_STAR, LUXURY, RESORT, BOUTIQUE, BUSINESS
    starRating = 4,
    userRating = 4.2,
    reviewCount = 0,
    location = {
      address: "",
      city: "",
      state: "",
      country: "",
      latitude: null,
      longitude: null,
      neighborhood: ""
    },
    images = [],
    amenities = [],
    roomTypes = [],
    pricePerNight = 0,
    taxesAndFees = 0,
    currency = "INR",
    cancellationPolicy = {
      isRefundable: true,
      freeCancellationBefore: null,
      description: "Free cancellation up to 48 hours before check-in."
    },
    checkInTime = "14:00",
    checkOutTime = "11:00",
    totalRooms = null,
    available = true,
    availableRoomsCount = null, // null until real availability provider connects
    pricingMode = "DEVELOPMENT_TEST",
    liveAvailability = false,
    availabilityStatus = "REQUIRES_LIVE_CHECK",
    priceNotice = "Development price — final price and availability will be verified before booking.",
    roomAvailability = {
      verified: false,
      availableRooms: null,
      lastChecked: null,
      message: "Live availability requires verification"
    },
    officialWebsite = null,
    phone = null,
    email = null,
    distanceKm = null,
    sourceUrl = null,
    verifiedAt = null,
    policies = [],
    rawProviderPayload = null
  } = {}) {
    this.id = id;
    this.providerHotelId = providerHotelId || id;
    this.provider = provider;
    this.isLive = Boolean(isLive);
    this.name = name;
    this.tagline = tagline;
    this.description = description;
    this.propertyType = propertyType;
    this.category = category;
    this.starRating = starRating;
    this.userRating = userRating;
    this.reviewCount = reviewCount;
    this.location = location;
    this.images = images;
    this.amenities = amenities;
    this.roomTypes = roomTypes;
    this.pricePerNight = pricePerNight;
    this.taxesAndFees = taxesAndFees || Math.round(pricePerNight * 0.12);
    this.totalPricePerNight = this.pricePerNight + this.taxesAndFees;
    this.currency = currency;
    this.cancellationPolicy = cancellationPolicy;
    this.checkInTime = checkInTime;
    this.checkOutTime = checkOutTime;
    this.totalRooms = totalRooms;
    this.available = available;
    this.availableRoomsCount = availableRoomsCount;
    this.pricingMode = pricingMode;
    this.liveAvailability = liveAvailability;
    this.availabilityStatus = availabilityStatus;
    this.priceNotice = priceNotice;
    this.roomAvailability = roomAvailability;
    this.officialWebsite = officialWebsite;
    this.phone = phone;
    this.email = email;
    this.distanceKm = distanceKm;
    this.sourceUrl = sourceUrl;
    this.verifiedAt = verifiedAt;
    this.policies = policies;
    this.rawProviderPayload = rawProviderPayload;
  }

  toJSON() {
    return {
      id: this.id,
      providerHotelId: this.providerHotelId,
      provider: this.provider,
      isLive: this.isLive,
      name: this.name,
      tagline: this.tagline,
      description: this.description,
      propertyType: this.propertyType,
      category: this.category,
      starRating: this.starRating,
      userRating: this.userRating,
      reviewCount: this.reviewCount,
      location: this.location,
      images: this.images,
      amenities: this.amenities,
      roomTypes: this.roomTypes,
      pricePerNight: this.pricePerNight,
      taxesAndFees: this.taxesAndFees,
      totalPricePerNight: this.totalPricePerNight,
      currency: this.currency,
      cancellationPolicy: this.cancellationPolicy,
      checkInTime: this.checkInTime,
      checkOutTime: this.checkOutTime,
      totalRooms: this.totalRooms,
      available: this.available,
      availableRoomsCount: this.availableRoomsCount,
      pricingMode: this.pricingMode,
      liveAvailability: this.liveAvailability,
      availabilityStatus: this.availabilityStatus,
      priceNotice: this.priceNotice,
      roomAvailability: this.roomAvailability,
      officialWebsite: this.officialWebsite,
      phone: this.phone,
      email: this.email,
      distanceKm: this.distanceKm,
      sourceUrl: this.sourceUrl,
      verifiedAt: this.verifiedAt,
      policies: this.policies
    };
  }
}

module.exports = NormalizedHotel;
