// ==================================================
// TravelMate AI - Natural Language Search Architecture Preparation (Stage 3)
// Prepares query structure for future AI travel assistance.
// STRICT RULE: Rule-based extraction only. Does NOT invent destinations or availability.
// ==================================================

const { MIN_TRAVELERS, MAX_TRAVELERS } = require("../config/constants");

/**
 * Extracts candidate parameters from natural queries such as:
 * "I want to visit Goa for 5 days with my family"
 * "Trip to Paris for 2 people"
 * "Manali 3 days solo"
 */
function parseNaturalQuery(query = "") {
  if (!query || typeof query !== "string") {
    return {
      destination: "",
      nights: 2,
      travelers: 2,
      isNaturalLanguage: false
    };
  }

  const clean = query.trim();
  let detectedDestination = clean;
  let detectedNights = null;
  let detectedTravelers = null;
  let isNaturalLanguage = false;

  // 1. Detect duration e.g. "for 5 days", "3 nights", "5d"
  const durationMatch = clean.match(/(\d+)\s*(?:days?|nights?|d\b)/i);
  if (durationMatch) {
    isNaturalLanguage = true;
    const days = parseInt(durationMatch[1], 10);
    if (days >= 1 && days <= 60) {
      detectedNights = days;
    }
  }

  // 2. Detect traveler count or keywords e.g. "family", "couple", "solo", "4 people", "2 travelers"
  const travelerCountMatch = clean.match(/(\d+)\s*(?:people|persons?|travelers?|guests?|adults?)/i);
  if (travelerCountMatch) {
    isNaturalLanguage = true;
    const count = parseInt(travelerCountMatch[1], 10);
    if (count >= MIN_TRAVELERS && count <= MAX_TRAVELERS) {
      detectedTravelers = count;
    }
  } else if (/\bfamily\b/i.test(clean)) {
    isNaturalLanguage = true;
    detectedTravelers = 4; // Standard family of 4
  } else if (/\bcouple\b/i.test(clean)) {
    isNaturalLanguage = true;
    detectedTravelers = 2;
  } else if (/\bsolo\b/i.test(clean)) {
    isNaturalLanguage = true;
    detectedTravelers = 1;
  }

  // 3. Strip common phrasing to isolate destination candidate
  // e.g. "I want to visit Goa with my family" -> "Goa"
  const destinationCandidate = clean
    .replace(/^i want to (?:visit|go to|travel to|explore)\s+/i, "")
    .replace(/^plan (?:a )?trip to\s+/i, "")
    .replace(/^(?:trip|travel|vacation) to\s+/i, "")
    .replace(/for \d+\s*(?:days?|nights?)/i, "")
    .replace(/with (?:my )?(?:family|friends|partner|wife|husband)/i, "")
    .replace(/for \d+\s*(?:people|persons?|travelers?)/i, "")
    .replace(/\b(solo|couple|family)\b/i, "")
    .trim();

  if (destinationCandidate && destinationCandidate !== clean) {
    isNaturalLanguage = true;
    detectedDestination = destinationCandidate;
  }

  return {
    rawQuery: clean,
    destination: detectedDestination || clean,
    nights: detectedNights || 2,
    travelers: detectedTravelers || 2,
    isNaturalLanguage
  };
}

module.exports = { parseNaturalQuery };
