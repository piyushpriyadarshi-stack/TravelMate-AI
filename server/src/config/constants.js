// ==================================================
// TravelMate AI - Configuration Constants
// ==================================================

module.exports = {
  MIN_TRAVELERS: 1,
  MAX_TRAVELERS: parseInt(process.env.MAX_TRAVELERS, 10) || 15,
  DEFAULT_TRAVELERS: 2,
  DATE_FORMAT: "YYYY-MM-DD"
};
