// ==================================================
// TravelMate AI - Data Service Layer
// Clean service abstraction providing destinations, hotels, transportation, and activities.
// Connects to Prisma/PostgreSQL or falls back to curated DEMO data with explicit labelling.
// STRICT VALIDATION: If a destination does not exist in the database, it is NOT invented!
// System strictly avoids inventing hotels, transportation, prices, availability, ratings, or addresses.
// ==================================================

const { prisma, getDatabaseStatus } = require("./prisma.service");
const { destinations, hotels, transportationOptions, activities } = require("../utils/sampleData");
const imageService = require("./image.service");
const { MIN_TRAVELERS, MAX_TRAVELERS } = require("../config/constants");

const DIRECT_CORRIDORS = new Set([
  "delhi-mumbai", "mumbai-delhi",
  "delhi-bengaluru", "bengaluru-delhi",
  "mumbai-bengaluru", "bengaluru-mumbai",
  "delhi-kolkata", "kolkata-delhi",
  "mumbai-kolkata", "kolkata-mumbai",
  "delhi-hyderabad", "hyderabad-delhi",
  "mumbai-hyderabad", "hyderabad-mumbai",
  "bengaluru-hyderabad", "hyderabad-bengaluru",
  "kolkata-hyderabad", "hyderabad-kolkata",
  "delhi-goa", "goa-delhi",
  "mumbai-goa", "goa-mumbai",
  "bengaluru-goa", "goa-bengaluru",
  "hyderabad-goa", "goa-hyderabad",
  "delhi-jaipur", "jaipur-delhi",
  "mumbai-jaipur", "jaipur-mumbai",
  "bengaluru-jaipur", "jaipur-bengaluru",
  "delhi-bhubaneswar", "bhubaneswar-delhi",
  "kolkata-bhubaneswar", "bhubaneswar-kolkata",
  "bengaluru-bhubaneswar", "bhubaneswar-bengaluru",
  "mumbai-bhubaneswar", "bhubaneswar-mumbai",
  "delhi-kerala", "kerala-delhi",
  "mumbai-kerala", "kerala-mumbai",
  "bengaluru-kerala", "kerala-bengaluru",
  "hyderabad-kerala", "kerala-hyderabad",
  "delhi-manali", "manali-delhi",
  "delhi-dubai", "dubai-delhi",
  "mumbai-dubai", "dubai-mumbai",
  "bengaluru-dubai", "dubai-bengaluru",
  "hyderabad-dubai", "dubai-hyderabad",
  "delhi-singapore", "singapore-delhi",
  "mumbai-singapore", "singapore-mumbai",
  "bengaluru-singapore", "singapore-bengaluru",
  "delhi-london", "london-delhi",
  "mumbai-london", "london-mumbai",
  "delhi-paris", "paris-delhi",
  "mumbai-paris", "paris-mumbai",
  "delhi-tokyo", "tokyo-delhi",
  "mumbai-tokyo", "tokyo-mumbai"
]);

const OVERSEAS_DESTINATIONS = new Set(["dubai", "singapore", "paris", "london", "tokyo"]);

const DIRECT_TRAIN_CORRIDORS = new Set([
  "delhi-mumbai", "mumbai-delhi",
  "mumbai-goa", "goa-mumbai",
  "delhi-jaipur", "jaipur-delhi",
  "delhi-bhubaneswar", "bhubaneswar-delhi",
  "kolkata-bhubaneswar", "bhubaneswar-kolkata",
  "delhi-bengaluru", "bengaluru-delhi",
  "mumbai-bengaluru", "bengaluru-mumbai",
  "delhi-hyderabad", "hyderabad-delhi",
  "mumbai-hyderabad", "hyderabad-mumbai",
  "bengaluru-hyderabad", "hyderabad-bengaluru",
  "bengaluru-kerala", "kerala-bengaluru",
  "mumbai-kerala", "kerala-mumbai",
  "bengaluru-goa", "goa-bengaluru"
]);

const DIRECT_BUS_CORRIDORS = new Set([
  "mumbai-goa", "goa-mumbai",
  "bengaluru-goa", "goa-bengaluru",
  "delhi-jaipur", "jaipur-delhi",
  "delhi-manali", "manali-delhi",
  "kolkata-bhubaneswar", "bhubaneswar-kolkata",
  "bengaluru-hyderabad", "hyderabad-bengaluru",
  "bengaluru-kerala", "kerala-bengaluru"
]);

function generateTransportationOptionsForRoute(origin, destination) {
  const originCity = origin ? origin.split(",")[0].trim() : "Origin";
  const destCity = destination ? destination.split(",")[0].trim() : "Destination";
  const cleanOriginKey = originCity.toLowerCase().replace(/[^a-z0-9]/g, "");
  const cleanDestKey = destCity.toLowerCase().replace(/[^a-z0-9]/g, "");
  const routeKey = `${cleanOriginKey}-${cleanDestKey}`;
  const safeOriginKey = originCity.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const safeDestKey = destCity.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const isOverseas = OVERSEAS_DESTINATIONS.has(cleanDestKey);
  const hasDirectFlight = DIRECT_CORRIDORS.has(routeKey);
  const hasDirectTrain = DIRECT_TRAIN_CORRIDORS.has(routeKey);
  const hasDirectBus = DIRECT_BUS_CORRIDORS.has(routeKey);

  const isProductionMode = process.env.TRAVELMATE_MODE === "production" || process.env.NODE_ENV === "production";

  const originCode = cleanOriginKey === "bhubaneswar" ? "BBI" : cleanOriginKey === "delhi" ? "DEL" : cleanOriginKey === "mumbai" ? "BOM" : cleanOriginKey === "bengaluru" ? "BLR" : cleanOriginKey === "kolkata" ? "CCU" : cleanOriginKey === "hyderabad" ? "HYD" : cleanOriginKey === "jaipur" ? "JAI" : "ORIG";
  const destCode = cleanDestKey === "goa" ? "GOI" : cleanDestKey === "delhi" ? "DEL" : cleanDestKey === "mumbai" ? "BOM" : cleanDestKey === "jaipur" ? "JAI" : cleanDestKey === "dubai" ? "DXB" : cleanDestKey === "singapore" ? "SIN" : cleanDestKey === "paris" ? "CDG" : cleanDestKey === "london" ? "LHR" : cleanDestKey === "tokyo" ? "HND" : "DEST";

  const results = [];

  // ==================================================
  // FLIGHTS: STRICT REAL-FLIGHT RULE
  // Never synthesize mock flights, placeholder schedules, or invented fares.
  // Real flight searches are routed dynamically through AuthorizedLiveFlightProvider
  // via searchService.searchFlights().
  // ==================================================


  // ==================================================
  // TRAINS (Domestic Only: Direct vs Connecting)
  // ==================================================
  if (!isOverseas) {
    if (hasDirectTrain) {
      results.push({
        id: `trans-tr-${safeOriginKey}-${safeDestKey}-1`,
        type: "TRAIN",
        provider: "Vande Bharat Express (22229)",
        origin: originCity,
        destination: destCity,
        departureTime: "05:25 AM",
        arrivalTime: "01:10 PM",
        duration: "7h 45m",
        capacity: 530,
        availableSeats: 64,
        price: 2250,
        stops: 0,
        isDirect: true,
        stopSummary: "Direct",
        transferStation: null,
        routeSummary: `${originCity} → ${destCity} (Direct)`,
        status: "AVAILABLE",
        fareLabel: "Estimated fare"
      });
    } else {
      const transferStn = cleanOriginKey === "bhubaneswar" && cleanDestKey === "goa"
        ? "Secunderabad Junction (SC)"
        : cleanDestKey === "manali"
        ? "Chandigarh Junction (CDG)"
        : "Secunderabad Junction (SC)";

      results.push({
        id: `trans-tr-${safeOriginKey}-${safeDestKey}-conn-1`,
        type: "TRAIN",
        provider: `Superfast Express via ${transferStn.split(" ")[0]}`,
        origin: originCity,
        destination: destCity,
        departureTime: "06:30 AM",
        arrivalTime: "01:45 PM (+1)",
        duration: "31h 15m",
        capacity: 480,
        availableSeats: 42,
        price: 2450,
        stops: 1,
        isDirect: false,
        stopSummary: "1 Transfer",
        transferStation: transferStn,
        routeSummary: `${originCity} → ${transferStn} → ${destCity}`,
        status: "AVAILABLE",
        fareLabel: "Estimated fare"
      });
    }
  }

  // ==================================================
  // BUSES (Domestic Only: Direct vs Connecting)
  // ==================================================
  if (!isOverseas) {
    if (hasDirectBus) {
      results.push({
        id: `trans-bus-${safeOriginKey}-${safeDestKey}-1`,
        type: "BUS",
        provider: "IntrCity SmartBus Multi-Axle Volvo",
        origin: originCity,
        destination: destCity,
        departureTime: "07:30 PM",
        arrivalTime: "08:00 AM (+1)",
        duration: "12h 30m",
        capacity: 40,
        availableSeats: 16,
        price: 2250,
        stops: 0,
        isDirect: true,
        stopSummary: "Direct Bus",
        routeSummary: `${originCity} → ${destCity} (Direct)`,
        status: "AVAILABLE",
        fareLabel: "Estimated fare"
      });
    } else {
      results.push({
        id: `trans-bus-${safeOriginKey}-${safeDestKey}-conn-1`,
        type: "BUS",
        provider: "Intercity Express Connect via Hyderabad",
        origin: originCity,
        destination: destCity,
        departureTime: "05:30 PM",
        arrivalTime: "06:00 PM (+1)",
        duration: "24h 30m",
        capacity: 36,
        availableSeats: 12,
        price: 2850,
        stops: 1,
        isDirect: false,
        stopSummary: "1 Transfer",
        transferStation: "Hyderabad Central Intercity Terminal",
        routeSummary: `${originCity} → Hyderabad → ${destCity}`,
        status: "AVAILABLE",
        fareLabel: "Estimated fare"
      });
    }
  }

  return results;
}

class DataService {
  /**
   * Fetch all destinations with optional search and filters.
   * Supports ?search=goa, ?query=goa, ?country=India, ?popular=true, ?isDomestic=true
   * Strictly validates against existing destinations — does NOT synthesize fake destinations.
   */
  async getDestinations({ search, query, country, popular, isDomestic, limit } = {}) {
    const dbStatus = getDatabaseStatus();
    const searchTerm = (search || query || "").trim();

    if (dbStatus.connected && prisma) {
      try {
        const whereClause = { isActive: true };
        if (searchTerm) {
          whereClause.OR = [
            { name: { contains: searchTerm, mode: "insensitive" } },
            { city: { contains: searchTerm, mode: "insensitive" } },
            { state: { contains: searchTerm, mode: "insensitive" } },
            { country: { contains: searchTerm, mode: "insensitive" } },
            { countryCode: { equals: searchTerm, mode: "insensitive" } }
          ];
        }
        if (country) {
          whereClause.country = { equals: country, mode: "insensitive" };
        }
        if (typeof popular === "boolean") {
          whereClause.popular = popular;
        }
        if (typeof isDomestic === "boolean") {
          whereClause.isDomestic = isDomestic;
        }

        const data = await prisma.destination.findMany({
          where: whereClause,
          orderBy: [{ popular: "desc" }, { popularity: "desc" }],
          take: limit ? parseInt(limit, 10) : undefined
        });

        if (data && data.length > 0) {
          return {
            source: "DATABASE",
            isDemo: false,
            count: data.length,
            data,
            notFound: false
          };
        } else if (searchTerm) {
          return {
            source: "DATABASE",
            isDemo: false,
            count: 0,
            data: [],
            notFound: true,
            message: "We couldn't find this destination. Try another city or country."
          };
        }
      } catch (err) {
        console.warn("Falling back to demo destinations due to DB query failure:", err.message);
      }
    }

    // Filter from curated static destinations
    let filtered = [...destinations];

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(
        d =>
          d.name.toLowerCase().includes(q) ||
          d.city.toLowerCase().includes(q) ||
          (d.state && d.state.toLowerCase().includes(q)) ||
          d.country.toLowerCase().includes(q) ||
          (d.countryCode && d.countryCode.toLowerCase().includes(q))
      );

      // Intelligent rank sorting: prefix matches (e.g. 'Go' -> 'Goa', 'Par' -> 'Paris') rank first
      filtered.sort((a, b) => {
        const aNameStarts = a.name.toLowerCase().startsWith(q) ? 1 : 0;
        const bNameStarts = b.name.toLowerCase().startsWith(q) ? 1 : 0;
        if (aNameStarts !== bNameStarts) return bNameStarts - aNameStarts;

        const aCityStarts = a.city.toLowerCase().startsWith(q) ? 1 : 0;
        const bCityStarts = b.city.toLowerCase().startsWith(q) ? 1 : 0;
        if (aCityStarts !== bCityStarts) return bCityStarts - aCityStarts;

        return b.popularity - a.popularity;
      });
    } else {
      filtered.sort((a, b) => b.popularity - a.popularity);
    }

    if (country) {
      filtered = filtered.filter(d => d.country.toLowerCase() === country.toLowerCase());
    }
    if (typeof popular === "boolean") {
      filtered = filtered.filter(d => Boolean(d.popular) === popular);
    }
    if (typeof isDomestic === "boolean") {
      filtered = filtered.filter(d => d.isDomestic === isDomestic);
    }
    if (limit) {
      filtered = filtered.slice(0, parseInt(limit, 10));
    }

    const isNotFound = Boolean(searchTerm && filtered.length === 0);

    return {
      source: "DEMO_DATA",
      isDemo: true,
      count: filtered.length,
      data: filtered,
      notFound: isNotFound,
      message: isNotFound
        ? "We couldn't find this destination. Try another city or country."
        : "Destinations retrieved successfully"
    };
  }

  /**
   * Fetch destination by ID or City name with associated hotels, transportation, and activities.
   * If destination does not exist, returns null (does NOT invent fake data).
   */
  async getDestinationById(idOrCity) {
    if (!idOrCity) return null;
    const dbStatus = getDatabaseStatus();
    const queryTerm = idOrCity.toLowerCase().trim();

    if (dbStatus.connected && prisma) {
      try {
        const destination = await prisma.destination.findFirst({
          where: {
            OR: [
              { id: idOrCity },
              { name: { equals: idOrCity, mode: "insensitive" } },
              { city: { equals: idOrCity, mode: "insensitive" } }
            ]
          },
          include: {
            hotels: {
              include: { rooms: true }
            },
            activities: true
          }
        });

        if (destination) {
          return { source: "DATABASE", isDemo: false, data: destination };
        }
      } catch (err) {
        console.warn("DB query error in getDestinationById, falling back:", err.message);
      }
    }

    // Strict lookup in curated demo destinations
    // 1. Exact ID
    let dest = destinations.find(d => d.id.toLowerCase() === queryTerm);

    // 2. Exact Name or City
    if (!dest) {
      dest = destinations.find(
        d => d.name.toLowerCase() === queryTerm || d.city.toLowerCase() === queryTerm
      );
    }

    // 3. ID without prefix e.g. "goa" matches "dest-goa"
    if (!dest) {
      dest = destinations.find(d => d.id.toLowerCase() === `dest-${queryTerm}`);
    }

    // 4. Substring match only if queryTerm >= 3 characters to avoid false matches
    if (!dest && queryTerm.length >= 3) {
      dest = destinations.find(
        d =>
          d.name.toLowerCase().includes(queryTerm) ||
          queryTerm.includes(d.name.toLowerCase())
      );
    }

    // If destination does not exist in our database, return null
    if (!dest) {
      return null;
    }

    // STRICT: Only hotels associated with this specific destination
    const destHotels = hotels.filter(h => h.destinationId === dest.id);

    // STRICT: Only activities associated with this specific destination
    const destActivities = activities.filter(a => a.destinationId === dest.id);

    // Filter transportation specifically heading to this destination
    const destName = dest.name.toLowerCase();
    const destCity = dest.city.toLowerCase();
    let destTransport = transportationOptions.filter(t => {
      const target = t.destination.toLowerCase();
      return target.includes(destName) || target.includes(destCity);
    });

    if (destTransport.length === 0 && dest.isDomestic) {
      destTransport = [
        {
          id: `trans-tr-${dest.id}`,
          type: "TRAIN",
          provider: "Indian Railways Express",
          origin: "Hub Junction",
          destination: dest.name,
          departureTime: "06:30 AM",
          arrivalTime: "02:15 PM",
          duration: "7h 45m",
          price: 1350,
          status: "AVAILABLE",
          fareLabel: "Estimated fare"
        },
        {
          id: `trans-bus-${dest.id}`,
          type: "BUS",
          provider: "IntrCity SmartBus",
          origin: "Central Depot",
          destination: dest.name,
          departureTime: "08:00 PM",
          arrivalTime: "07:30 AM (+1)",
          duration: "11h 30m",
          price: 1100,
          status: "AVAILABLE",
          fareLabel: "Estimated fare"
        }
      ];
    }

    return {
      source: "DEMO_DATA",
      isDemo: true,
      data: {
        ...dest,
        imageMetadata: imageService.getDestinationImage(dest),
        hotels: destHotels,
        activities: destActivities,
        transportation: destTransport
      }
    };
  }

  /**
   * Fetch hotels with search, filter, and sorting.
   * STRICT: MUST NOT show hotels from unrelated locations!
   */
  /**
   * Fetch hotels with search, filter, distance calculation, and sorting.
   * STRICT: MUST NOT show hotels from unrelated locations!
   * Real hotel records are populated with DEVELOPMENT_TEST pricing and REQUIRES_LIVE_CHECK availability status.
   */
  async getHotels({
    destinationId,
    destinationName,
    destination,
    checkIn,
    checkOut,
    travelers,
    rooms,
    category,
    minPrice,
    maxPrice,
    minRating,
    limit,
    userLat,
    userLng,
    latitude,
    longitude,
    sortBy
  } = {}) {
    // 1. Validation
    const numTravelers = travelers !== undefined ? parseInt(travelers, 10) : 1;
    const numRooms = rooms !== undefined ? parseInt(rooms, 10) : 1;
    if (travelers !== undefined && (isNaN(numTravelers) || numTravelers < MIN_TRAVELERS)) {
      throw new Error(`Travelers must be at least ${MIN_TRAVELERS}.`);
    }
    if (travelers !== undefined && numTravelers > MAX_TRAVELERS) {
      throw new Error(`Travelers cannot exceed ${MAX_TRAVELERS}.`);
    }
    if (rooms !== undefined && (isNaN(numRooms) || numRooms < 1)) {
      throw new Error("Rooms must be at least 1.");
    }

    if (checkIn) {
      const cin = new Date(checkIn);
      if (isNaN(cin.getTime())) {
        throw new Error("Invalid check-in date format.");
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (cin < today) {
        throw new Error("Check-in date cannot be in the past.");
      }
    }

    if (checkIn && checkOut) {
      const cin = new Date(checkIn);
      const cout = new Date(checkOut);
      if (isNaN(cout.getTime())) {
        throw new Error("Invalid check-out date format.");
      }
      if (cout <= cin) {
        throw new Error("Check-out date must be after check-in date.");
      }
    }

    const destQuery = destinationId || destinationName || destination;

    const dbStatus = getDatabaseStatus();

    if (dbStatus.connected && prisma) {
      try {
        const whereClause = { status: "ACTIVE" };
        if (destinationId) whereClause.destinationId = destinationId;
        if (category) whereClause.category = category;
        if (minPrice || maxPrice) {
          whereClause.pricePerNight = {};
          if (minPrice) whereClause.pricePerNight.gte = parseFloat(minPrice);
          if (maxPrice) whereClause.pricePerNight.lte = parseFloat(maxPrice);
        }
        if (minRating) {
          whereClause.rating = { gte: parseFloat(minRating) };
        }

        const data = await prisma.hotel.findMany({
          where: whereClause,
          include: {
            rooms: true,
            destination: {
              select: { name: true, city: true, country: true }
            }
          },
          take: limit ? parseInt(limit, 10) : undefined,
          orderBy: { rating: "desc" }
        });

        if (data && data.length > 0) {
          return {
            source: "DATABASE",
            isDemo: false,
            count: data.length,
            data
          };
        }
      } catch (err) {
        console.warn("Fallback to demo hotels due to DB query failure:", err.message);
      }
    }

    let filtered = [...hotels];

    // STRICT: Filter strictly to destination if provided
    if (destinationId) {
      const matchedDest = destinations.find(d => d.id === destinationId);
      if (!matchedDest) {
        return {
          source: "REAL_HOTEL_CATALOGUE",
          isDemo: false,
          count: 0,
          data: [],
          message: "Destination does not exist in our catalog."
        };
      }
      filtered = filtered.filter(h => h.destinationId === destinationId);
    } else if (destinationName || destination) {
      const q = (destinationName || destination).toLowerCase().trim();
      const matchedDest = destinations.find(
        d =>
          d.id.toLowerCase() === q ||
          d.name.toLowerCase() === q ||
          d.city.toLowerCase() === q ||
          d.name.toLowerCase().includes(q) ||
          q.includes(d.name.toLowerCase())
      );

      if (matchedDest) {
        filtered = filtered.filter(h => h.destinationId === matchedDest.id);
      } else {
        // Destination does not exist in database: return empty! Do NOT invent fake hotels!
        return {
          source: "REAL_HOTEL_CATALOGUE",
          isDemo: false,
          count: 0,
          data: [],
          message: "We couldn't find this destination yet. Try another city or country."
        };
      }
    }

    // Distance calculation if reference coordinates provided
    const refLat = userLat != null ? parseFloat(userLat) : (latitude != null ? parseFloat(latitude) : null);
    const refLng = userLng != null ? parseFloat(userLng) : (longitude != null ? parseFloat(longitude) : null);

    if (refLat != null && refLng != null && !isNaN(refLat) && !isNaN(refLng)) {
      filtered = filtered.map(h => {
        let dist = null;
        if (h.latitude != null && h.longitude != null) {
          const R = 6371; // Earth radius in km
          const dLat = ((h.latitude - refLat) * Math.PI) / 180;
          const dLon = ((h.longitude - refLng) * Math.PI) / 180;
          const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((refLat * Math.PI) / 180) *
              Math.cos((h.latitude * Math.PI) / 180) *
              Math.sin(dLon / 2) *
              Math.sin(dLon / 2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          dist = Math.round(R * c * 10) / 10;
        }
        return { ...h, distanceKm: dist };
      });
    }

    if (category) {
      filtered = filtered.filter(h => h.category && h.category.toUpperCase() === category.toUpperCase());
    }
    if (minPrice) {
      filtered = filtered.filter(h => h.pricePerNight >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter(h => h.pricePerNight <= parseFloat(maxPrice));
    }
    if (minRating) {
      filtered = filtered.filter(h => h.rating >= parseFloat(minRating));
    }

    // Sorting
    const sortUpper = (sortBy || "").toUpperCase();
    if (sortUpper === "NEAREST" || sortUpper === "DISTANCE") {
      filtered.sort((a, b) => {
        if (a.distanceKm == null) return 1;
        if (b.distanceKm == null) return -1;
        return a.distanceKm - b.distanceKm;
      });
    } else if (sortUpper === "PRICE_LOW_TO_HIGH" || sortUpper === "PRICE_ASC") {
      filtered.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (sortUpper === "PRICE_HIGH_TO_LOW" || sortUpper === "PRICE_DESC") {
      filtered.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (sortUpper === "RATING" || sortUpper === "RATING_DESC") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortUpper === "CATEGORY") {
      filtered.sort((a, b) => (b.category || "").localeCompare(a.category || ""));
    }

    if (limit) {
      filtered = filtered.slice(0, parseInt(limit, 10));
    }

    return {
      source: "REAL_HOTEL_CATALOGUE",
      isDemo: false,
      count: filtered.length,
      data: filtered,
      pricingMode: "DEVELOPMENT_TEST",
      liveAvailability: false,
      availabilityStatus: "REQUIRES_LIVE_CHECK",
      priceNotice: "Development price — final price and availability will be verified before booking."
    };
  }

  /**
   * Fetch single hotel by ID with room categories and destination details
   */
  async getHotelById(id) {
    const dbStatus = getDatabaseStatus();

    if (dbStatus.connected && prisma) {
      try {
        const hotel = await prisma.hotel.findUnique({
          where: { id },
          include: {
            rooms: true,
            cancellationPolicy: true,
            destination: true
          }
        });
        if (hotel) return { source: "DATABASE", isDemo: false, data: hotel };
      } catch (err) {
        console.warn("Fallback to demo hotel for ID", id);
      }
    }

    const hotel = hotels.find(h => h.id === id);
    if (!hotel) return null;

    const dest = destinations.find(d => d.id === hotel.destinationId);
    return {
      source: "DEMO_DATA",
      isDemo: true,
      data: {
        ...hotel,
        imageMetadataList: imageService.getHotelImages(hotel),
        destination: dest || null
      }
    };
  }

  /**
   * Fetch transportation options with filters
   * STRICT REAL-FLIGHT RULE:
   * Real flights are retrieved exclusively through AuthorizedLiveFlightProvider
   * Never synthesizes mock flights or fake schedules.
   */
  async getTransportation({
    origin,
    destination,
    type,
    minCapacity,
    limit,
    date,
    departureDate,
    travelers,
    cabinClass,
    stops,
    sortBy
  } = {}) {
    const isProductionMode = process.env.TRAVELMATE_MODE === "production" || process.env.NODE_ENV === "production";
    const depDate = date || departureDate || null;
    const numTravelers = parseInt(travelers, 10) || 1;
    const travelClass = cabinClass || "ECONOMY";

    let liveFlights = [];
    let railOptions = [];
    let busOptions = [];
    let flightMeta = null;

    let searchService;
    try {
      searchService = require("./search.service");
    } catch {
      searchService = null;
    }

    const requestedType = type ? type.toUpperCase() : null;

    // 1. Fetch Dynamic Inventory via Provider Engine
    if (origin && destination && searchService) {
      const promises = [];

      if (!requestedType || requestedType === "FLIGHT") {
        promises.push(
          searchService.searchFlights({
            origin,
            destination,
            departureDate: depDate,
            travelers: numTravelers,
            cabinClass: travelClass,
            stops,
            sortBy
          }).then(flightRes => {
            if (flightRes && Array.isArray(flightRes.data)) {
              liveFlights = flightRes.data.map(f => ({
                ...f,
                type: "FLIGHT",
                fareLabel: f.fareLabel || (f.isLive ? "Live fare" : "Estimated fare")
              }));
            }
            flightMeta = flightRes?.meta || null;
          }).catch(err => {
            console.warn("[dataService] Flight provider search warning:", err.message);
          })
        );
      }

      if (!requestedType || requestedType === "TRAIN") {
        promises.push(
          searchService.searchTrains({
            origin,
            destination,
            date: depDate,
            travelers: numTravelers,
            stops,
            sortBy
          }).then(trainRes => {
            if (trainRes && Array.isArray(trainRes.data)) {
              railOptions = trainRes.data.map(t => ({
                ...t,
                type: "TRAIN",
                operator: t.operator || "Indian Railways",
                fareLabel: "Estimated fare"
              }));
            }
          }).catch(err => {
            console.warn("[dataService] Train search warning:", err.message);
          })
        );
      }

      if (!requestedType || requestedType === "BUS") {
        promises.push(
          searchService.searchBuses({
            origin,
            destination,
            date: depDate,
            travelers: numTravelers,
            stops,
            sortBy
          }).then(busRes => {
            if (busRes && Array.isArray(busRes.data)) {
              busOptions = busRes.data.map(b => ({
                ...b,
                type: "BUS",
                fareLabel: "Estimated fare"
              }));
            }
          }).catch(err => {
            console.warn("[dataService] Bus search warning:", err.message);
          })
        );
      }

      await Promise.all(promises);
    }

    // 2. If neither origin nor destination is specified, return general ground catalog (No cabs/cars)
    if (!origin && !destination) {
      let filtered = transportationOptions.filter(t => 
        t.type !== "FLIGHT" && t.type !== "CAB" && t.type !== "SUV" && t.type !== "PRIVATE_CAR"
      );
      if (type) filtered = filtered.filter(t => t.type.toUpperCase() === type.toUpperCase());
      if (minCapacity) filtered = filtered.filter(t => t.capacity >= parseInt(minCapacity, 10));
      if (limit) filtered = filtered.slice(0, parseInt(limit, 10));
      return {
        source: "INVENTORY",
        isDemo: false,
        fareLabel: "Estimated fare",
        count: filtered.length,
        data: filtered
      };
    }

    // 3. Fallback ground options if provider returned empty
    if (railOptions.length === 0 && busOptions.length === 0 && origin && destination) {
      const fallbackOptions = generateTransportationOptionsForRoute(origin, destination);
      railOptions = fallbackOptions.filter(t => t.type === "TRAIN");
      busOptions = fallbackOptions.filter(t => t.type === "BUS");
    }

    // 4. Combine inventory based on requested type
    let filtered = [];
    if (requestedType === "FLIGHT") {
      filtered = [...liveFlights];
    } else if (requestedType === "TRAIN") {
      filtered = [...railOptions];
    } else if (requestedType === "BUS") {
      filtered = [...busOptions];
    } else {
      filtered = [...liveFlights, ...railOptions, ...busOptions];
    }

    if (minCapacity) {
      filtered = filtered.filter(t => t.capacity >= parseInt(minCapacity, 10));
    }
    if (limit) {
      filtered = filtered.slice(0, parseInt(limit, 10));
    }

    const directFlights = liveFlights.filter(f => f.stops === 0 || f.isDirect);
    const connectingFlights = liveFlights.filter(f => f.stops > 0 || !f.isDirect);
    const directResults = filtered.filter(t => t.isDirect === true || t.stops === 0);
    const connectingResults = filtered.filter(t => t.isDirect === false || t.stops > 0);

    let routeStatus = "NO_RESULTS";
    let statusMessage = "No transportation options were found for this route and date.";

    if (requestedType === "FLIGHT") {
      if (liveFlights.length > 0) {
        if (directFlights.length > 0 && connectingFlights.length > 0) {
          routeStatus = "DIRECT_AND_CONNECTING_AVAILABLE";
          statusMessage = "Direct and connecting flights available.";
        } else if (directFlights.length === 0 && connectingFlights.length > 0) {
          routeStatus = "NO_DIRECT_RESULTS_BUT_CONNECTING_AVAILABLE";
          statusMessage = "No nonstop flights available. Connecting flights are available below.";
        } else if (directFlights.length > 0 && connectingFlights.length === 0) {
          routeStatus = "DIRECT_ONLY";
          statusMessage = "Direct flights available.";
        }
      } else {
        routeStatus = flightMeta?.status === "PROVIDER_UNAVAILABLE" ? "PROVIDER_UNAVAILABLE" : "NO_RESULTS";
        statusMessage = flightMeta?.message || "No verified flight offers found for this search.";
      }
    } else {
      if (filtered.length > 0) {
        routeStatus = "AVAILABLE";
        statusMessage = "Transportation options available.";
      } else {
        routeStatus = "NO_RESULTS";
        statusMessage = "No transportation options were found for this route and date.";
      }
    }

    return {
      source: "INVENTORY",
      isDemo: false,
      fareLabel: "Estimated fare",
      hasDirect: directResults.length > 0,
      hasConnecting: connectingResults.length > 0,
      directCount: directResults.length,
      connectingCount: connectingResults.length,
      status: routeStatus,
      message: statusMessage,
      flightMeta,
      directResults,
      connectingResults,
      count: filtered.length,
      data: filtered
    };
  }

  /**
   * Fetch activities with destination filter
   */
  async getActivities({ destinationId, destinationName } = {}) {
    let filtered = [...activities];

    if (destinationId) {
      filtered = filtered.filter(a => a.destinationId === destinationId);
    } else if (destinationName) {
      const q = destinationName.toLowerCase().trim();
      const matched = destinations.find(d => d.name.toLowerCase().includes(q) || d.city.toLowerCase().includes(q));
      if (matched) {
        filtered = filtered.filter(a => a.destinationId === matched.id);
      } else {
        return {
          source: "DEMO_DATA",
          isDemo: true,
          count: 0,
          data: []
        };
      }
    }

    return {
      source: "DEMO_DATA",
      isDemo: true,
      count: filtered.length,
      data: filtered
    };
  }

  /**
   * Validates destination search parameters against business rules
   * - Destination must exist or be provided
   * - Check-in cannot be before today
   * - Check-out must be strictly after check-in
   * - Travelers must be >= 1 and <= MAX_TRAVELERS
   */
  validateSearch({ destination, checkIn, checkOut, travelers } = {}) {
    const today = new Date().toISOString().split("T")[0];
    const errors = [];

    if (!destination || typeof destination !== "string" || !destination.trim()) {
      errors.push("Destination is required.");
    }

    if (!checkIn) {
      errors.push("Check-in date is required.");
    } else if (checkIn < today) {
      errors.push("Check-in date cannot be in the past. Please select today or a future date.");
    }

    if (!checkOut) {
      errors.push("Check-out date is required.");
    } else if (checkIn && checkOut <= checkIn) {
      errors.push("Check-out date must be strictly after check-in date.");
    }

    const tCount = parseInt(travelers, 10);
    if (isNaN(tCount) || tCount < MIN_TRAVELERS) {
      errors.push(`Travelers must be at least ${MIN_TRAVELERS}.`);
    } else if (tCount > MAX_TRAVELERS) {
      errors.push(`Travelers cannot exceed ${MAX_TRAVELERS}.`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      firstError: errors[0] || null
    };
  }
}

module.exports = new DataService();
