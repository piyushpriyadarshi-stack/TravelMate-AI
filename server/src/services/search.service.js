// ==================================================
// TravelMate AI - Search Aggregator Service
// Provider-based orchestration architecture for large-scale travel inventory
// Decouples search queries from underlying inventory providers (Hotels, Flights, Trains, Buses, Cabs)
// ==================================================

const SandboxHotelProvider = require("../providers/hotels/SandboxHotelProvider");
const SandboxFlightProvider = require("../providers/flights/SandboxFlightProvider");
const AuthorizedLiveFlightProvider = require("../providers/flights/AuthorizedLiveFlightProvider");
const DuffelFlightProvider = require("../providers/flights/duffel/duffelFlights");
const SandboxTrainProvider = require("../providers/trains/SandboxTrainProvider");
const SandboxBusProvider = require("../providers/buses/SandboxBusProvider");
const SandboxCabProvider = require("../providers/cabs/SandboxCabProvider");

class SearchService {
  constructor() {
    // Provider Registry: Can dynamically register real APIs without rewriting clients
    this.hotelProviders = new Map();
    this.flightProviders = new Map();
    this.trainProviders = new Map();
    this.busProviders = new Map();

    // Register Sandbox providers
    this.registerHotelProvider("sandbox", new SandboxHotelProvider());
    this.registerFlightProvider("sandbox", new SandboxFlightProvider());
    this.registerTrainProvider("sandbox", new SandboxTrainProvider());
    this.registerBusProvider("sandbox", new SandboxBusProvider());

    // Register Authorized Live Flight Providers
    this.registerFlightProvider("live", new AuthorizedLiveFlightProvider());
    this.registerFlightProvider("duffel", new DuffelFlightProvider());

    // Active flight provider:
    // Uses realistic estimated provider ("sandbox") by default.
    // Automatically switches to "duffel" or live provider when FLIGHT_API_KEY or live duffel token (duffel_live_*) is configured.
    let defaultFlightProvider = "sandbox";
    if (process.env.FLIGHT_PROVIDER) {
      defaultFlightProvider = process.env.FLIGHT_PROVIDER;
    } else if (process.env.FLIGHT_API_KEY || (process.env.DUFFEL_ACCESS_TOKEN && process.env.DUFFEL_ACCESS_TOKEN.startsWith("duffel_live_"))) {
      defaultFlightProvider = "duffel";
    }

    this.activeHotelProviderKey = "sandbox";
    this.activeFlightProviderKey = defaultFlightProvider;
    this.activeTrainProviderKey = "sandbox";
    this.activeBusProviderKey = "sandbox";
  }

  // --- Provider Registration Hooks ---
  registerHotelProvider(key, provider) {
    this.hotelProviders.set(key, provider);
  }
  registerFlightProvider(key, provider) {
    this.flightProviders.set(key, provider);
  }
  registerTrainProvider(key, provider) {
    this.trainProviders.set(key, provider);
  }
  registerBusProvider(key, provider) {
    this.busProviders.set(key, provider);
  }

  // --- Status & Diagnostics ---
  getProviderStatus() {
    const mapStatus = (map, activeKey) => {
      const list = [];
      for (const [key, provider] of map.entries()) {
        list.push({
          key,
          name: provider.name,
          isLive: provider.isLive,
          isActive: key === activeKey
        });
      }
      return list;
    };

    return {
      hotels: mapStatus(this.hotelProviders, this.activeHotelProviderKey),
      flights: mapStatus(this.flightProviders, this.activeFlightProviderKey),
      trains: mapStatus(this.trainProviders, this.activeTrainProviderKey),
      buses: mapStatus(this.busProviders, this.activeBusProviderKey),
      cabs: mapStatus(this.cabProviders, this.activeCabProviderKey)
    };
  }

  // ==================================================
  // HOTELS SEARCH
  // ==================================================
  async searchHotels(params = {}) {
    const provider = this.hotelProviders.get(this.activeHotelProviderKey);
    if (!provider) {
      throw new Error(`Active hotel provider '${this.activeHotelProviderKey}' not registered.`);
    }

    const rawResult = await provider.searchHotels(params);
    const limit = Math.max(1, parseInt(params.limit, 10) || 20);
    const page = Math.max(1, parseInt(params.page, 10) || 1);
    const total = rawResult.total || (rawResult.hotels ? rawResult.hotels.length : 0);
    const totalPages = Math.ceil(total / limit) || 1;

    return {
      success: true,
      meta: {
        query: {
          destination: params.destination || null,
          destinationId: params.destinationId || null,
          checkIn: params.checkIn || null,
          checkOut: params.checkOut || null,
          rooms: parseInt(params.rooms, 10) || 1,
          adults: parseInt(params.adults, 10) || 2,
          children: parseInt(params.children, 10) || 0,
          category: params.category || null,
          minPrice: params.minPrice ? parseFloat(params.minPrice) : null,
          maxPrice: params.maxPrice ? parseFloat(params.maxPrice) : null,
          minRating: params.minRating ? parseFloat(params.minRating) : null,
          amenities: params.amenities || []
        },
        pagination: {
          total,
          page,
          limit,
          totalPages,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1
        },
        provider: provider.name,
        isLive: provider.isLive,
        disclaimer: rawResult.disclaimer || (provider.isLive ? "Live Inventory" : "Sandbox / Development data")
      },
      data: rawResult.hotels.map(h => (typeof h.toJSON === "function" ? h.toJSON() : h))
    };
  }

  async getHotelDetails(hotelId) {
    const provider = this.hotelProviders.get(this.activeHotelProviderKey);
    if (!provider) {
      throw new Error("Active hotel provider not registered.");
    }
    const hotel = await provider.getHotelDetails(hotelId);
    if (!hotel) return null;
    return {
      success: true,
      meta: {
        provider: provider.name,
        isLive: provider.isLive
      },
      data: typeof hotel.toJSON === "function" ? hotel.toJSON() : hotel
    };
  }

  // ==================================================
  // FLIGHTS SEARCH & PRE-BOOKING REVALIDATION
  // STRICT REAL-FLIGHT RULE:
  // - Provider response is the source of truth
  // - Revalidates price and availability before booking/payment
  // ==================================================
  async searchFlights(params = {}) {
    const requestedKey = params.provider || this.activeFlightProviderKey;
    const provider = this.flightProviders.get(requestedKey) || this.flightProviders.get(this.activeFlightProviderKey);
    if (!provider) {
      throw new Error(`Flight provider '${requestedKey}' not registered.`);
    }

    const rawResult = await provider.searchFlights(params);
    const limit = Math.max(1, parseInt(params.limit, 10) || 10);
    const page = Math.max(1, parseInt(params.page, 10) || 1);
    const total = rawResult.total || (rawResult.flights ? rawResult.flights.length : 0);
    const totalPages = Math.ceil(total / limit) || 1;

    return {
      success: true,
      meta: {
        query: {
          origin: params.origin || null,
          destination: params.destination || null,
          departureDate: params.departureDate || null,
          returnDate: params.returnDate || null,
          travelers: parseInt(params.travelers, 10) || 1,
          cabinClass: params.cabinClass || "ECONOMY",
          stops: params.stops || "all",
          sortBy: params.sortBy || "PRICE_LOW_TO_HIGH"
        },
        pagination: {
          total,
          page,
          limit,
          totalPages,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1
        },
        hasDirect: rawResult.hasDirect,
        hasConnecting: rawResult.hasConnecting,
        directCount: rawResult.directCount,
        connectingCount: rawResult.connectingCount,
        status: rawResult.status,
        message: rawResult.message || (provider.isLive ? "No verified flights found for this search." : ""),
        provider: provider.name,
        verificationStatus: provider.isLive ? "VERIFIED_LIVE_PROVIDER" : "ESTIMATED_FARE",
        label: provider.isLive ? "Verified Live Flight" : "Estimated fare",
        fareLabel: provider.isLive ? "Live fare" : "Estimated fare",
        disclaimer: rawResult.disclaimer || (provider.isLive ? "Verified results directly from authorized flight inventory." : "Estimated fares and schedules based on live route inventory.")
      },
      data: rawResult.flights.map(f => (typeof f.toJSON === "function" ? f.toJSON() : f))
    };
  }

  async revalidateFlight(params = {}) {
    const requestedKey = params.provider || this.activeFlightProviderKey;
    const provider = this.flightProviders.get(requestedKey) || this.flightProviders.get(this.activeFlightProviderKey);
    if (!provider) {
      throw new Error("Active flight provider not registered.");
    }
    if (typeof provider.revalidateFlight !== "function") {
      throw new Error(`Flight provider '${provider.name}' does not implement revalidateFlight.`);
    }
    return await provider.revalidateFlight(params);
  }

  async getFlightOffer(offerId) {
    const provider = this.flightProviders.get(this.activeFlightProviderKey) || this.flightProviders.get("duffel");
    if (!provider) {
      throw new Error("Active flight provider not registered.");
    }
    if (typeof provider.revalidateFlight !== "function") {
      throw new Error(`Flight provider '${provider.name}' does not implement revalidateFlight.`);
    }
    return await provider.revalidateFlight({ offerId });
  }

  // ==================================================
  // TRAINS SEARCH
  // ==================================================
  async searchTrains(params = {}) {
    const provider = this.trainProviders.get(this.activeTrainProviderKey);
    if (!provider) {
      throw new Error(`Active train provider '${this.activeTrainProviderKey}' not registered.`);
    }

    const rawResult = await provider.searchTrains(params);
    const limit = Math.max(1, parseInt(params.limit, 10) || 10);
    const page = Math.max(1, parseInt(params.page, 10) || 1);
    const total = rawResult.total || (rawResult.trains ? rawResult.trains.length : 0);
    const totalPages = Math.ceil(total / limit) || 1;

    return {
      success: true,
      meta: {
        query: {
          origin: params.origin || null,
          destination: params.destination || null,
          date: params.date || null,
          travelers: parseInt(params.travelers, 10) || 1,
          travelClass: params.travelClass || null,
          stops: params.stops || "all"
        },
        pagination: {
          total,
          page,
          limit,
          totalPages,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1
        },
        hasDirect: rawResult.hasDirect,
        hasConnecting: rawResult.hasConnecting,
        directCount: rawResult.directCount,
        connectingCount: rawResult.connectingCount,
        status: rawResult.status,
        message: rawResult.message,
        provider: provider.name,
        isLive: provider.isLive,
        fareLabel: "Estimated fare",
        disclaimer: rawResult.disclaimer || "Estimated fares and schedules based on Indian Railways timetable."
      },
      data: rawResult.trains.map(t => (typeof t.toJSON === "function" ? t.toJSON() : t))
    };
  }

  // ==================================================
  // BUSES SEARCH
  // ==================================================
  async searchBuses(params = {}) {
    const provider = this.busProviders.get(this.activeBusProviderKey);
    if (!provider) {
      throw new Error(`Active bus provider '${this.activeBusProviderKey}' not registered.`);
    }

    const rawResult = await provider.searchBuses(params);
    const limit = Math.max(1, parseInt(params.limit, 10) || 10);
    const page = Math.max(1, parseInt(params.page, 10) || 1);
    const total = rawResult.total || (rawResult.buses ? rawResult.buses.length : 0);
    const totalPages = Math.ceil(total / limit) || 1;

    return {
      success: true,
      meta: {
        query: {
          origin: params.origin || null,
          destination: params.destination || null,
          date: params.date || null,
          travelers: parseInt(params.travelers, 10) || 1,
          busType: params.busType || null,
          stops: params.stops || "all"
        },
        pagination: {
          total,
          page,
          limit,
          totalPages,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1
        },
        hasDirect: rawResult.hasDirect,
        hasConnecting: rawResult.hasConnecting,
        directCount: rawResult.directCount,
        connectingCount: rawResult.connectingCount,
        status: rawResult.status,
        message: rawResult.message,
        provider: provider.name,
        isLive: provider.isLive,
        fareLabel: "Estimated fare",
        disclaimer: rawResult.disclaimer || "Estimated fares and schedules based on bus operator network."
      },
      data: rawResult.buses.map(b => (typeof b.toJSON === "function" ? b.toJSON() : b))
    };
  }

  // ==================================================
  // CABS SEARCH (Deprecated - removed from active transportation)
  // ==================================================
  async searchCabs() {
    return {
      success: true,
      meta: {
        total: 0,
        provider: "None",
        isLive: false,
        disclaimer: "Cab search is no longer active."
      },
      data: []
    };
  }

  // ==================================================
  // MULTI-MODAL TRANSPORTATION SEARCH (Flights, Trains, Buses)
  // ==================================================
  async searchAllTransportation(params = {}) {
    const origin = params.origin;
    const destination = params.destination;

    if (!origin || !destination) {
      return {
        success: true,
        meta: {
          origin: origin || null,
          destination: destination || null,
          flightStatus: "NO_RESULTS",
          isLive: false,
          total: 0
        },
        data: {
          flights: [],
          trains: [],
          buses: []
        }
      };
    }

    const [flightsRes, trainsRes, busesRes] = await Promise.all([
      this.searchFlights({
        origin,
        destination,
        departureDate: params.date,
        travelers: params.travelers,
        stops: params.stops,
        sortBy: params.sortBy,
        provider: params.provider
      }),
      this.searchTrains({
        origin,
        destination,
        date: params.date,
        travelers: params.travelers,
        travelClass: params.travelClass || params.class,
        stops: params.stops,
        sortBy: params.sortBy
      }),
      this.searchBuses({
        origin,
        destination,
        date: params.date,
        travelers: params.travelers,
        busType: params.busType || params.seatType,
        stops: params.stops,
        sortBy: params.sortBy
      })
    ]);

    const totalResults =
      (flightsRes.data?.length || 0) +
      (trainsRes.data?.length || 0) +
      (busesRes.data?.length || 0);

    const directFlights = (flightsRes.data || []).filter(f => f.stops === 0);
    const connectingFlights = (flightsRes.data || []).filter(f => f.stops > 0);

    return {
      success: true,
      meta: {
        query: {
          origin,
          destination,
          date: params.date || null,
          travelers: parseInt(params.travelers, 10) || 1,
          stops: params.stops || "all",
          sortBy: params.sortBy || "PRICE_LOW_TO_HIGH"
        },
        total: totalResults,
        flightStatus: flightsRes.meta?.status || "NO_RESULTS",
        flightMessage: flightsRes.meta?.message || "",
        flightProvider: flightsRes.meta?.provider || "FlightProvider",
        hasDirectFlights: flightsRes.meta?.hasDirect || false,
        hasConnectingFlights: flightsRes.meta?.hasConnecting || false,
        directFlightCount: flightsRes.meta?.directCount || 0,
        connectingFlightCount: flightsRes.meta?.connectingCount || 0,
        isLive: flightsRes.meta?.isLive || false,
        verificationStatus: flightsRes.meta?.verificationStatus || "ESTIMATED_FARE",
        label: flightsRes.meta?.label || "Estimated fare",
        fareLabel: "Estimated fare",
        trainStatus: trainsRes.meta?.status || "NO_RESULTS",
        trainMessage: trainsRes.meta?.message || "",
        hasDirectTrains: trainsRes.meta?.hasDirect || false,
        hasConnectingTrains: trainsRes.meta?.hasConnecting || false,
        busStatus: busesRes.meta?.status || "NO_RESULTS",
        busMessage: busesRes.meta?.message || "",
        hasDirectBuses: busesRes.meta?.hasDirect || false,
        hasConnectingBuses: busesRes.meta?.hasConnecting || false,
        disclaimer: "Estimated fares and schedules based on live route inventory."
      },
      directResults: {
        flights: directFlights,
        trains: (trainsRes.data || []).filter(t => t.isDirect),
        buses: (busesRes.data || []).filter(b => b.isDirect)
      },
      connectingResults: {
        flights: connectingFlights,
        trains: (trainsRes.data || []).filter(t => !t.isDirect),
        buses: (busesRes.data || []).filter(b => !b.isDirect)
      },
      data: {
        flights: flightsRes.data || [],
        trains: trainsRes.data || [],
        buses: busesRes.data || []
      }
    };
  }

  getProviderStatus() {
    const flightProvider = this.flightProviders.get(this.activeFlightProviderKey);
    return {
      activeFlightProvider: this.activeFlightProviderKey,
      flightProviderName: flightProvider ? flightProvider.name : "None",
      isLive: flightProvider ? flightProvider.isLive : false,
      isTestMode: flightProvider ? flightProvider.isTestMode : true,
      registeredFlightProviders: Array.from(this.flightProviders.keys()),
      activeHotelProvider: this.activeHotelProviderKey,
      activeTrainProvider: this.activeTrainProviderKey,
      activeBusProvider: this.activeBusProviderKey
    };
  }
}

module.exports = new SearchService();
