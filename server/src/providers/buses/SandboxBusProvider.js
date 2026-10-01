// ==================================================
// TravelMate AI - Dynamic Sandbox Bus Provider Adapter
// Implements BaseBusProvider for intercity bus search
// Supports Direct buses, Connecting bus journeys, and Overseas validation
// Clearly flagged as sandbox data (isLive = false)
// ==================================================

const BaseBusProvider = require("../base/BaseBusProvider");
const NormalizedBus = require("../models/NormalizedBus");

// International overseas destinations where buses do not operate from India
const OVERSEAS_DESTINATIONS = new Set(["dubai", "singapore", "paris", "london", "tokyo"]);

// Recognized Direct Bus Corridors (reasonable road distances < 750km)
const DIRECT_BUS_CORRIDORS = new Set([
  "mumbai-goa", "goa-mumbai",
  "bengaluru-goa", "goa-bengaluru",
  "delhi-jaipur", "jaipur-delhi",
  "delhi-manali", "manali-delhi",
  "kolkata-bhubaneswar", "bhubaneswar-kolkata",
  "bengaluru-hyderabad", "hyderabad-bengaluru",
  "bengaluru-kerala", "kerala-bengaluru",
  "mumbai-pune", "pune-mumbai"
]);

// Route-specific transfer points for long-haul bus routes
const CONNECTING_BUS_HUBS = {
  "bhubaneswar-goa": { hub: "Hyderabad Central Intercity Terminal", duration: "24h 30m", depTime: "05:30 PM", arrTime: "06:00 PM (+1)" },
  "kolkata-goa": { hub: "Visakhapatnam Transit Junction", duration: "32h 15m", depTime: "02:00 PM", arrTime: "10:15 PM (+1)" },
  "delhi-goa": { hub: "Indore Intercity Transit Hub", duration: "36h 00m", depTime: "09:00 AM", arrTime: "09:00 PM (+1)" },
  "bengaluru-jaipur": { hub: "Pune Swargate Bus Terminal", duration: "33h 45m", depTime: "01:00 PM", arrTime: "10:45 PM (+1)" }
};

class SandboxBusProvider extends BaseBusProvider {
  constructor() {
    super("SandboxBusProvider", false);
  }

  /**
   * Search intercity buses
   */
  async searchBuses(params = {}) {
    const {
      origin = "Mumbai",
      destination = "Goa",
      date = "2026-10-15",
      travelers = 1,
      busType = null,
      stops = "all", // "all", "direct" (0), "connecting" (1+)
      sortBy = "PRICE_LOW_TO_HIGH",
      page = 1,
      limit = 10
    } = params;

    const originCity = origin.split(",")[0].trim();
    const destCity = destination.split(",")[0].trim();
    const cleanOriginKey = originCity.toLowerCase().replace(/[^a-z0-9]/g, "");
    const cleanDestKey = destCity.toLowerCase().replace(/[^a-z0-9]/g, "");
    const routeKey = `${cleanOriginKey}-${cleanDestKey}`;

    // Case: Overseas Destination
    if (OVERSEAS_DESTINATIONS.has(cleanDestKey)) {
      return {
        buses: [],
        total: 0,
        hasDirect: false,
        hasConnecting: false,
        directCount: 0,
        connectingCount: 0,
        status: "NOT_APPLICABLE",
        message: "Intercity bus transport is unavailable for overseas destinations. Please choose flights.",
        isLive: this.isLive,
        provider: this.name,
        disclaimer: "Intercity bus operations are limited to domestic road networks."
      };
    }

    const hasDirectCorridor = DIRECT_BUS_CORRIDORS.has(routeKey);
    let allBuses = [];

    // 1. Direct buses (Only if corridor exists)
    if (hasDirectCorridor) {
      const directCatalog = [
        {
          operator: "KSRTC / State Express",
          busType: "Express Non-AC Seater (2+2)",
          seatType: "Non-AC",
          isAC: false,
          isSleeper: false,
          depTime: "05:00 PM",
          arrTime: "05:30 AM (+1)",
          duration: "12h 30m",
          durationMinutes: 750,
          fare: 850,
          rating: 4.1
        },
        {
          operator: "Orange Travels",
          busType: "Volvo Multi-Axle AC Seater (2+2)",
          seatType: "AC Seater",
          isAC: true,
          isSleeper: false,
          depTime: "06:15 PM",
          arrTime: "06:45 AM (+1)",
          duration: "12h 30m",
          durationMinutes: 750,
          fare: 1450,
          rating: 4.3
        },
        {
          operator: "IntrCity SmartBus",
          busType: "BharatBenz AC Sleeper (2+1)",
          seatType: "AC Sleeper",
          isAC: true,
          isSleeper: true,
          depTime: "07:30 PM",
          arrTime: "08:00 AM (+1)",
          duration: "12h 30m",
          durationMinutes: 750,
          fare: 2150,
          rating: 4.6
        },
        {
          operator: "Zingbus Plus",
          busType: "Volvo 9600 Luxury AC Sleeper (2+1)",
          seatType: "AC Sleeper",
          isAC: true,
          isSleeper: true,
          depTime: "08:45 PM",
          arrTime: "09:00 AM (+1)",
          duration: "12h 15m",
          durationMinutes: 735,
          fare: 2650,
          rating: 4.5
        }
      ];

      directCatalog.forEach((b, idx) => {
        allBuses.push(
          new NormalizedBus({
            id: `bus-${cleanOriginKey}-${cleanDestKey}-dir-${idx + 1}`,
            providerBusId: `sb-bus-${idx + 101}`,
            provider: this.name,
            isLive: this.isLive,
            operatorName: b.operator,
            busType: b.busType,
            isAC: b.isAC,
            isSleeper: b.isSleeper,
            origin: { city: originCity, majorLocation: `${originCity} Central Boarding Hub` },
            destination: { city: destCity, majorLocation: `${destCity} Bus Terminal` },
            departure: { date, time: b.depTime },
            arrival: { date, time: b.arrTime },
            duration: b.duration,
            durationMinutes: b.durationMinutes,
            stops: 0,
            isDirect: true,
            transferStation: null,
            routeSummary: `${originCity} → ${destCity} (Direct)`,
            boardingPoints: [
              { name: `${originCity} Main Terminal`, time: b.depTime, landmark: "Central Depot" },
              { name: `${originCity} Toll Plaza`, time: "08:45 PM", landmark: "Highway Exit" }
            ],
            droppingPoints: [
              { name: `${destCity} City Center`, time: b.arrTime, landmark: "Main Circle" }
            ],
            seatAvailability: {
              totalSeats: 36,
              availableSeats: 20,
              windowSeatsAvailable: 6,
              singleSeatsAvailable: 3
            },
            seatTypes: [b.seatType],
            rating: b.rating,
            reviewsCount: 220 + idx * 45,
            amenities: b.isAC
              ? ["AC", "Charging Point", "Blanket", "Water Bottle", "Live GPS"]
              : ["Charging Point", "Reading Light", "Water Bottle", "Live GPS"],
            fare: b.fare,
            taxesAndFees: Math.round(b.fare * 0.05),
            currency: "INR"
          })
        );
      });
    }

    // 2. Connecting buses (For long-distance or non-direct corridors)
    const connectingConfig = CONNECTING_BUS_HUBS[routeKey] || {
      hub: "Hyderabad Intercity Transit Hub",
      duration: "24h 30m",
      depTime: "04:00 PM",
      arrTime: "04:30 PM (+1)"
    };

    const connectingCatalog = [
      {
        operator: "KSRTC Express Non-AC",
        busType: "Express Non-AC (Transfer)",
        seatType: "Non-AC",
        isAC: false,
        isSleeper: false,
        depTime: "02:30 PM",
        arrTime: "03:00 PM (+1)",
        duration: connectingConfig.duration,
        durationMinutes: 1470,
        transferStation: connectingConfig.hub,
        fare: 1250,
        rating: 4.1
      },
      {
        operator: "VRL Travels",
        busType: "Multi-Axle AC Seater (Transfer)",
        seatType: "AC Seater",
        isAC: true,
        isSleeper: false,
        depTime: connectingConfig.depTime,
        arrTime: connectingConfig.arrTime,
        duration: connectingConfig.duration,
        durationMinutes: 1470,
        transferStation: connectingConfig.hub,
        fare: 1950,
        rating: 4.3
      },
      {
        operator: "SRS Travels",
        busType: "Bharat Benz AC Sleeper (Transfer)",
        seatType: "AC Sleeper",
        isAC: true,
        isSleeper: true,
        depTime: "06:30 PM",
        arrTime: "07:00 PM (+1)",
        duration: connectingConfig.duration,
        durationMinutes: 1470,
        transferStation: connectingConfig.hub,
        fare: 2850,
        rating: 4.5
      }
    ];

    connectingCatalog.forEach((b, idx) => {
      allBuses.push(
        new NormalizedBus({
          id: `bus-${cleanOriginKey}-${cleanDestKey}-conn-${idx + 1}`,
          providerBusId: `sb-bus-conn-${idx + 201}`,
          provider: this.name,
          isLive: this.isLive,
          operatorName: b.operator,
          busType: b.busType,
          isAC: b.isAC,
          isSleeper: b.isSleeper,
          origin: { city: originCity, majorLocation: `${originCity} Intercity Stand` },
          destination: { city: destCity, majorLocation: `${destCity} Bus Terminal` },
          departure: { date, time: b.depTime },
          arrival: { date, time: b.arrTime },
          duration: b.duration,
          durationMinutes: b.durationMinutes,
          stops: 1,
          isDirect: false,
          transferStation: b.transferStation,
          routeSummary: `${originCity} → ${b.transferStation.split(" ")[0]} → ${destCity}`,
          boardingPoints: [
            { name: `${originCity} Central Depot`, time: b.depTime, landmark: "Bay 3" }
          ],
          droppingPoints: [
            { name: `${destCity} Main Stand`, time: b.arrTime, landmark: "Main Gate" }
          ],
          seatAvailability: {
            totalSeats: 36,
            availableSeats: 16,
            windowSeatsAvailable: 4,
            singleSeatsAvailable: 2
          },
          seatTypes: [b.seatType],
          rating: b.rating,
          reviewsCount: 150 + idx * 30,
          amenities: b.isAC
            ? ["AC", "Charging Point", "Blanket", "Water Bottle", "Live GPS"]
            : ["Charging Point", "Water Bottle", "Live GPS"],
          fare: b.fare,
          taxesAndFees: Math.round(b.fare * 0.05),
          currency: "INR"
        })
      );
    });

    const directBuses = allBuses.filter(b => b.isDirect);
    const connectingBuses = allBuses.filter(b => !b.isDirect);
    const hasDirect = directBuses.length > 0;
    const hasConnecting = connectingBuses.length > 0;

    let routeStatus = "NO_RESULTS";
    let statusMessage = "No bus routes available for this destination and date.";

    if (hasDirect && hasConnecting) {
      routeStatus = "DIRECT_AND_CONNECTING_AVAILABLE";
      statusMessage = "Direct and connecting bus routes available.";
    } else if (!hasDirect && hasConnecting) {
      routeStatus = "NO_DIRECT_RESULTS_BUT_CONNECTING_AVAILABLE";
      statusMessage = `No direct buses available. Connecting bus journeys via ${connectingConfig.hub} are available below.`;
    } else if (hasDirect && !hasConnecting) {
      routeStatus = "DIRECT_ONLY";
      statusMessage = "Direct bus routes available.";
    }

    let filtered = [...allBuses];

    // Filter by stops
    if (stops === "direct" || stops === "nonstop" || stops === "0") {
      filtered = filtered.filter(b => b.isDirect);
    } else if (stops === "connecting" || stops === "1") {
      filtered = filtered.filter(b => !b.isDirect);
    }

    // Filter by busType / seatType (Non-AC, AC Seater, AC Sleeper)
    if (busType && busType.toLowerCase() !== "all") {
      const bq = busType.toLowerCase().trim();
      filtered = filtered.filter(b => {
        const st = (b.seatTypes?.[0] || b.seatType || "").toLowerCase();
        const bt = (b.busType || "").toLowerCase();
        if (bq === "non-ac" || bq === "non ac") return st.includes("non-ac") || (!b.isAC);
        if (bq === "ac seater") return b.isAC && (!b.isSleeper);
        if (bq === "ac sleeper") return b.isAC && b.isSleeper;
        return st.includes(bq) || bt.includes(bq);
      });
    }

    // Sorting
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      filtered.sort((a, b) => a.fare - b.fare);
    } else if (sortBy === "PRICE_HIGH_TO_LOW") {
      filtered.sort((a, b) => b.fare - a.fare);
    } else if (sortBy === "DURATION" || sortBy === "FASTEST") {
      filtered.sort((a, b) => a.durationMinutes - b.durationMinutes);
    } else if (sortBy === "RATING") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "EARLIEST_DEPARTURE") {
      filtered.sort((a, b) => a.departure.time.localeCompare(b.departure.time));
    }

    const total = filtered.length;
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const pageLimit = Math.max(1, parseInt(limit, 10) || 10);
    const paginated = filtered.slice((pageNum - 1) * pageLimit, pageNum * pageLimit);

    return {
      buses: paginated,
      total,
      hasDirect,
      hasConnecting,
      directCount: directBuses.length,
      connectingCount: connectingBuses.length,
      status: routeStatus,
      message: statusMessage,
      isLive: this.isLive,
      provider: this.name,
      disclaimer: "Estimated fares and schedules based on bus operator network."
    };
  }
}

module.exports = SandboxBusProvider;
