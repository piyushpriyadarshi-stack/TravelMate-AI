// ==================================================
// TravelMate AI - Airport & City Code Registry
// Resolves city names, airport names, and IATA codes for Duffel Flight API
// ==================================================

const CITY_TO_IATA = {
  // India (Major Hubs & Supported Destinations)
  "bhubaneswar": "BBI",
  "bbi": "BBI",
  "biju patnaik": "BBI",
  "delhi": "DEL",
  "new delhi": "DEL",
  "del": "DEL",
  "indira gandhi": "DEL",
  "mumbai": "BOM",
  "bom": "BOM",
  "bombay": "BOM",
  "chhatrapati shivaji": "BOM",
  "goa": "GOI",
  "goi": "GOI",
  "dabolim": "GOI",
  "mopa": "GOX",
  "gox": "GOX",
  "north goa": "GOX",
  "south goa": "GOI",
  "bengaluru": "BLR",
  "bangalore": "BLR",
  "blr": "BLR",
  "kempegowda": "BLR",
  "kolkata": "CCU",
  "calcutta": "CCU",
  "ccu": "CCU",
  "netaji subhash chandra bose": "CCU",
  "hyderabad": "HYD",
  "hyd": "HYD",
  "rajiv gandhi": "HYD",
  "jaipur": "JAI",
  "jai": "JAI",
  "kerala": "COK",
  "kochi": "COK",
  "cochin": "COK",
  "cok": "COK",
  "trivandrum": "TRV",
  "thiruvananthapuram": "TRV",
  "trv": "TRV",
  "kozhikode": "CCJ",
  "calicut": "CCJ",
  "ccj": "CCJ",
  "manali": "KUU",
  "kullu": "KUU",
  "kuu": "KUU",
  "bhuntar": "KUU",
  "chennai": "MAA",
  "madras": "MAA",
  "maa": "MAA",
  "ahmedabad": "AMD",
  "amd": "AMD",
  "pune": "PNQ",
  "pnq": "PNQ",
  "chandigarh": "IXC",
  "ixc": "IXC",
  "lucknow": "LKO",
  "lko": "LKO",
  "varanasi": "VNS",
  "vns": "VNS",
  "amritsar": "ATQ",
  "atq": "ATQ",
  "srinagar": "SXR",
  "sxr": "SXR",
  "guwahati": "GAU",
  "gau": "GAU",

  // International Destinations
  "dubai": "DXB",
  "dxb": "DXB",
  "singapore": "SIN",
  "sin": "SIN",
  "changi": "SIN",
  "paris": "CDG",
  "cdg": "CDG",
  "charles de gaulle": "CDG",
  "orly": "ORY",
  "ory": "ORY",
  "london": "LHR",
  "lhr": "LHR",
  "heathrow": "LHR",
  "gatwick": "LGW",
  "lgw": "LGW",
  "stansted": "STN",
  "stn": "STN",
  "tokyo": "HND",
  "hnd": "HND",
  "haneda": "HND",
  "narita": "NRT",
  "nrt": "NRT",
  "new york": "JFK",
  "jfk": "JFK",
  "newark": "EWR",
  "ewr": "EWR",
  "los angeles": "LAX",
  "lax": "LAX",
  "san francisco": "SFO",
  "sfo": "SFO",
  "chicago": "ORD",
  "ord": "ORD",
  "frankfurt": "FRA",
  "fra": "FRA",
  "amsterdam": "AMS",
  "ams": "AMS",
  "doha": "DOH",
  "doh": "DOH",
  "bangkok": "BKK",
  "bkk": "BKK",
  "suvarnabhumi": "BKK",
  "kuala lumpur": "KUL",
  "kul": "KUL",
  "hong kong": "HKG",
  "hkg": "HKG",
  "sydney": "SYD",
  "syd": "SYD",
  "melbourne": "MEL",
  "mel": "MEL"
};

const IATA_TO_NAME = {
  "BBI": { city: "Bhubaneswar", name: "Biju Patnaik International Airport", country: "India" },
  "DEL": { city: "New Delhi", name: "Indira Gandhi International Airport", country: "India" },
  "BOM": { city: "Mumbai", name: "Chhatrapati Shivaji Maharaj International Airport", country: "India" },
  "GOI": { city: "Goa (Dabolim)", name: "Dabolim International Airport", country: "India" },
  "GOX": { city: "Goa (Mopa)", name: "Manohar International Airport", country: "India" },
  "BLR": { city: "Bengaluru", name: "Kempegowda International Airport", country: "India" },
  "CCU": { city: "Kolkata", name: "Netaji Subhash Chandra Bose International Airport", country: "India" },
  "HYD": { city: "Hyderabad", name: "Rajiv Gandhi International Airport", country: "India" },
  "JAI": { city: "Jaipur", name: "Jaipur International Airport", country: "India" },
  "COK": { city: "Kochi (Kerala)", name: "Cochin International Airport", country: "India" },
  "TRV": { city: "Thiruvananthapuram", name: "Trivandrum International Airport", country: "India" },
  "CCJ": { city: "Kozhikode", name: "Calicut International Airport", country: "India" },
  "KUU": { city: "Kullu Manali", name: "Kullu-Manali Airport (Bhuntar)", country: "India" },
  "MAA": { city: "Chennai", name: "Chennai International Airport", country: "India" },
  "AMD": { city: "Ahmedabad", name: "Sardar Vallabhbhai Patel International Airport", country: "India" },
  "PNQ": { city: "Pune", name: "Pune Airport", country: "India" },
  "IXC": { city: "Chandigarh", name: "Shaheed Bhagat Singh International Airport", country: "India" },
  "LKO": { city: "Lucknow", name: "Chaudhary Charan Singh International Airport", country: "India" },
  "VNS": { city: "Varanasi", name: "Lal Bahadur Shastri International Airport", country: "India" },
  "ATQ": { city: "Amritsar", name: "Sri Guru Ram Dass Jee International Airport", country: "India" },
  "SXR": { city: "Srinagar", name: "Sheikh ul-Alam International Airport", country: "India" },
  "GAU": { city: "Guwahati", name: "Lokpriya Gopinath Bordoloi International Airport", country: "India" },
  "DXB": { city: "Dubai", name: "Dubai International Airport", country: "United Arab Emirates" },
  "SIN": { city: "Singapore", name: "Singapore Changi Airport", country: "Singapore" },
  "CDG": { city: "Paris", name: "Paris Charles de Gaulle Airport", country: "France" },
  "ORY": { city: "Paris", name: "Paris Orly Airport", country: "France" },
  "LHR": { city: "London", name: "London Heathrow Airport", country: "United Kingdom" },
  "LGW": { city: "London", name: "London Gatwick Airport", country: "United Kingdom" },
  "STN": { city: "London", name: "London Stansted Airport", country: "United Kingdom" },
  "HND": { city: "Tokyo", name: "Tokyo Haneda Airport", country: "Japan" },
  "NRT": { city: "Tokyo", name: "Tokyo Narita Airport", country: "Japan" },
  "JFK": { city: "New York", name: "John F. Kennedy International Airport", country: "United States" },
  "EWR": { city: "New York / Newark", name: "Newark Liberty International Airport", country: "United States" },
  "LAX": { city: "Los Angeles", name: "Los Angeles International Airport", country: "United States" },
  "SFO": { city: "San Francisco", name: "San Francisco International Airport", country: "United States" },
  "ORD": { city: "Chicago", name: "O'Hare International Airport", country: "United States" },
  "FRA": { city: "Frankfurt", name: "Frankfurt Airport", country: "Germany" },
  "AMS": { city: "Amsterdam", name: "Amsterdam Airport Schiphol", country: "Netherlands" },
  "DOH": { city: "Doha", name: "Hamad International Airport", country: "Qatar" },
  "BKK": { city: "Bangkok", name: "Suvarnabhumi Airport", country: "Thailand" },
  "KUL": { city: "Kuala Lumpur", name: "Kuala Lumpur International Airport", country: "Malaysia" },
  "HKG": { city: "Hong Kong", name: "Hong Kong International Airport", country: "Hong Kong" },
  "SYD": { city: "Sydney", name: "Sydney Kingsford Smith Airport", country: "Australia" },
  "MEL": { city: "Melbourne", name: "Melbourne Airport", country: "Australia" }
};

/**
 * Resolves a city name, airport name, or code to a 3-letter IATA code
 * @param {string} input - City name or IATA code
 * @returns {string|null} 3-letter IATA code or null
 */
function resolveIataCode(input) {
  if (!input || typeof input !== "string") return null;
  const cleaned = input.trim();
  const lower = cleaned.toLowerCase();

  // 1. Extract from parentheses like "Goa (GOI)" or "Delhi (DEL)"
  const parenMatch = cleaned.match(/\(([A-Za-z]{3})\)/);
  if (parenMatch && parenMatch[1]) {
    return parenMatch[1].toUpperCase();
  }

  // 2. Exact match in city registry (e.g. "goa" -> "GOI", "delhi" -> "DEL")
  if (CITY_TO_IATA[lower]) {
    return CITY_TO_IATA[lower];
  }

  // 3. Substring match
  for (const [key, code] of Object.entries(CITY_TO_IATA)) {
    if (lower === key || lower.includes(key) || key.includes(lower)) {
      return code;
    }
  }

  // 4. If already a 3-letter uppercase alphabetic code (exclude "goa" which is a city)
  if (/^[A-Za-z]{3}$/.test(cleaned) && lower !== "goa") {
    return cleaned.toUpperCase();
  }

  return null;
}

/**
 * Gets airport/city info from IATA code
 * @param {string} code - 3-letter IATA code
 * @returns {Object} { city, name, country }
 */
function getAirportInfo(code) {
  if (!code) return { city: "Unknown City", name: "Airport", country: "" };
  const upper = code.toUpperCase();
  if (IATA_TO_NAME[upper]) {
    return IATA_TO_NAME[upper];
  }
  return {
    city: upper,
    name: `${upper} Airport`,
    country: ""
  };
}

/**
 * All 15 TravelMate supported destinations mapped to their real airport IATA codes.
 * Multi-airport destinations contain all valid candidate commercial airports.
 */
const DESTINATION_AIRPORTS = {
  "goa": ["GOI", "GOX"],
  "dest-goa": ["GOI", "GOX"],
  "delhi": ["DEL"],
  "dest-delhi": ["DEL"],
  "mumbai": ["BOM"],
  "dest-mumbai": ["BOM"],
  "jaipur": ["JAI"],
  "dest-jaipur": ["JAI"],
  "manali": ["KUU"],
  "dest-manali": ["KUU"],
  "bengaluru": ["BLR"],
  "dest-bengaluru": ["BLR"],
  "kolkata": ["CCU"],
  "dest-kolkata": ["CCU"],
  "bhubaneswar": ["BBI"],
  "dest-bhubaneswar": ["BBI"],
  "kerala": ["COK", "TRV", "CCJ"],
  "dest-kerala": ["COK", "TRV", "CCJ"],
  "hyderabad": ["HYD"],
  "dest-hyderabad": ["HYD"],
  "dubai": ["DXB"],
  "dest-dubai": ["DXB"],
  "singapore": ["SIN"],
  "dest-singapore": ["SIN"],
  "paris": ["CDG", "ORY"],
  "dest-paris": ["CDG", "ORY"],
  "london": ["LHR", "LGW"],
  "dest-london": ["LHR", "LGW"],
  "tokyo": ["HND", "NRT"],
  "dest-tokyo": ["HND", "NRT"]
};

/**
 * Resolves destination input to a list of supported airport codes.
 * If user specifies a 3-letter code directly (e.g. GOX, COK, LHR), returns [CODE].
 * If user specifies hotel location or specific city within region (e.g. "Kochi", "Trivandrum"),
 * returns that specific airport.
 * If general destination name (e.g. "Goa", "Kerala", "Paris"), returns candidate airports.
 *
 * @param {string} input - Destination name, city, ID, or IATA code
 * @param {string} [hotelLocation] - Optional hotel location or area to resolve multi-airport destination
 * @returns {string[]} Array of 3-letter IATA codes
 */
function resolveDestinationAirports(input, hotelLocation = null) {
  if (!input || typeof input !== "string") return [];
  const cleaned = input.trim();

  const lower = cleaned.toLowerCase();

  // 1. Check paren match like "Goa (GOX)"
  const parenMatch = cleaned.match(/\(([A-Za-z]{3})\)/);
  if (parenMatch && parenMatch[1]) {
    return [parenMatch[1].toUpperCase()];
  }

  // 2. Special case: Location-specific airport resolution for multi-airport regions
  if (hotelLocation && typeof hotelLocation === "string") {
    const locLower = hotelLocation.toLowerCase();
    // Kerala regional airports:
    if (locLower.includes("kochi") || locLower.includes("cochin") || locLower.includes("munnar") || locLower.includes("alleppey") || locLower.includes("alappuzha") || locLower.includes("thekkady")) {
      return ["COK"];
    }
    if (locLower.includes("trivandrum") || locLower.includes("thiruvananthapuram") || locLower.includes("kovalam") || locLower.includes("varkala")) {
      return ["TRV"];
    }
    if (locLower.includes("kozhikode") || locLower.includes("calicut") || locLower.includes("wayanad") || locLower.includes("bekal")) {
      return ["CCJ"];
    }
    // Goa regional airports:
    if (locLower.includes("north goa") || locLower.includes("mopa") || locLower.includes("mandrem") || locLower.includes("morjim") || locLower.includes("arambol") || locLower.includes("ashwem")) {
      return ["GOX"];
    }
    if (locLower.includes("south goa") || locLower.includes("dabolim") || locLower.includes("colva") || locLower.includes("benaulim") || locLower.includes("cavelossim") || locLower.includes("varca")) {
      return ["GOI"];
    }
  }

  // 3. Exact destination lookup in all 15 supported destinations
  if (DESTINATION_AIRPORTS[lower]) {
    return [...DESTINATION_AIRPORTS[lower]];
  }

  // 4. Prefix / substring match for TravelMate destinations
  for (const [key, codes] of Object.entries(DESTINATION_AIRPORTS)) {
    if (lower === key || lower.includes(key) || key.includes(lower)) {
      return [...codes];
    }
  }

  // 5. If directly a 3-letter IATA airport code (e.g. GOX, GOI, COK, TRV, CDG, ORY, HND)
  if (/^[A-Za-z]{3}$/.test(cleaned) && lower !== "goa") {
    return [cleaned.toUpperCase()];
  }

  // 6. Fallback to resolveIataCode
  const single = resolveIataCode(cleaned);
  return single ? [single] : [];
}

module.exports = {
  CITY_TO_IATA,
  IATA_TO_NAME,
  DESTINATION_AIRPORTS,
  resolveIataCode,
  resolveDestinationAirports,
  getAirportInfo
};
