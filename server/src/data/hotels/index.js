// ==================================================
// TRAVELMATE AI — REAL HOTEL DATASET (15 DESTINATIONS, 120 HOTELS)
// All properties are verified real hotels with distinct geographic coordinates.
// Pricing Mode: DEVELOPMENT_TEST
// Availability Status: REQUIRES_LIVE_CHECK
// ==================================================

const goaHotels = require("./goaHotels");
const delhiHotels = require("./delhiHotels");
const mumbaiHotels = require("./mumbaiHotels");
const jaipurHotels = require("./jaipurHotels");
const manaliHotels = require("./manaliHotels");
const bengaluruHotels = require("./bengaluruHotels");
const kolkataHotels = require("./kolkataHotels");
const bhubaneswarHotels = require("./bhubaneswarHotels");
const keralaHotels = require("./keralaHotels");
const hyderabadHotels = require("./hyderabadHotels");
const dubaiHotels = require("./dubaiHotels");
const singaporeHotels = require("./singaporeHotels");
const parisHotels = require("./parisHotels");
const londonHotels = require("./londonHotels");
const tokyoHotels = require("./tokyoHotels");

function normalizeHotel(h) {
  const rooms = (h.roomTypes || []).map(r => ({
    id: r.id,
    name: r.name,
    type: r.type,
    capacity: r.maxGuests,
    maxGuests: r.maxGuests,
    bedType: r.bedType,
    roomSize: r.roomSize,
    description: r.description,
    pricePerNight: r.price,
    price: r.price,
    currency: r.currency || "INR",
    pricingMode: r.pricingMode || "DEVELOPMENT_TEST",
    availableRooms: null, // STRICT: No fake live room counts
    amenities: r.amenities || []
  }));

  return {
    ...h,
    status: h.status || "ACTIVE",
    cancellationPolicyId: h.cancellationPolicyId || "cp-standard-01",
    availableRooms: null, // STRICT: Live room availability requires real provider check
    rooms
  };
}

const destinationHotelMap = {
  "dest-goa": goaHotels.map(normalizeHotel),
  "dest-delhi": delhiHotels.map(normalizeHotel),
  "dest-mumbai": mumbaiHotels.map(normalizeHotel),
  "dest-jaipur": jaipurHotels.map(normalizeHotel),
  "dest-manali": manaliHotels.map(normalizeHotel),
  "dest-bengaluru": bengaluruHotels.map(normalizeHotel),
  "dest-kolkata": kolkataHotels.map(normalizeHotel),
  "dest-bhubaneswar": bhubaneswarHotels.map(normalizeHotel),
  "dest-kerala": keralaHotels.map(normalizeHotel),
  "dest-hyderabad": hyderabadHotels.map(normalizeHotel),
  "dest-dubai": dubaiHotels.map(normalizeHotel),
  "dest-singapore": singaporeHotels.map(normalizeHotel),
  "dest-paris": parisHotels.map(normalizeHotel),
  "dest-london": londonHotels.map(normalizeHotel),
  "dest-tokyo": tokyoHotels.map(normalizeHotel)
};

// Flatten into 120 verified real hotels
const realHotels = Object.values(destinationHotelMap).flat();

module.exports = {
  realHotels,
  destinationHotelMap,
  goaHotels,
  delhiHotels,
  mumbaiHotels,
  jaipurHotels,
  manaliHotels,
  bengaluruHotels,
  kolkataHotels,
  bhubaneswarHotels,
  keralaHotels,
  hyderabadHotels,
  dubaiHotels,
  singaporeHotels,
  parisHotels,
  londonHotels,
  tokyoHotels
};
