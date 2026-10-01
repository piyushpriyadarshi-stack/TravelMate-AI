// ==================================================
// TravelMate AI - Formatters & UI Helpers
// ==================================================

/**
 * Format number as Indian Rupee currency (e.g. ₹16,500)
 */
export function formatCurrency(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return "₹0";
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Format category key to human readable text
 */
export function formatCategory(cat) {
  switch (cat) {
    case "BUDGET":
      return "Budget";
    case "THREE_STAR":
      return "3-Star";
    case "FOUR_STAR":
      return "4-Star";
    case "FIVE_STAR":
      return "5-Star";
    case "LUXURY":
      return "Luxury Palace/Resort";
    default:
      return cat || "Hotel";
  }
}

/**
 * Format transportation type
 */
export function formatTransportType(type) {
  switch (type) {
    case "FLIGHT":
      return "Flight";
    case "TRAIN":
      return "Train";
    case "BUS":
      return "Bus";
    default:
      return type || "Transportation";
  }
}

/**
 * Safely format/normalize a location that may be a string or structured object
 * (e.g. { airportCode, airportName, city, terminal } or { stationCode, stationName, city })
 */
export function formatLocation(loc) {
  if (!loc) return "";
  if (typeof loc === "string") return loc;
  if (typeof loc === "object") {
    return loc.city || loc.name || loc.stationName || loc.airportName || loc.airportCode || loc.majorLocation || "";
  }
  return String(loc);
}
