// ==================================================
// TravelMate AI - Dynamic Sandbox Train Provider Adapter
// Implements BaseTrainProvider for multi-train rail search
// Supports Direct trains, Connecting train routes with transfer stations, and Overseas validation
// Clearly flagged as sandbox data (isLive = false)
// ==================================================

const BaseTrainProvider = require("../base/BaseTrainProvider");
const NormalizedTrain = require("../models/NormalizedTrain");

// International overseas destinations where Indian Railways does not operate
const OVERSEAS_DESTINATIONS = new Set(["dubai", "singapore", "paris", "london", "tokyo"]);

// Recognized Direct Train Corridors
const DIRECT_TRAIN_CORRIDORS = new Set([
  "delhi-mumbai", "mumbai-delhi",
  "mumbai-goa", "goa-mumbai",
  "delhi-goa", "goa-delhi",
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

// Route-specific transfer stations for popular connecting routes
const CONNECTING_TRAIN_HUBS = {
  "bhubaneswar-goa": { station: "Secunderabad Junction (SC)", duration: "31h 15m", depTime: "06:30 AM", arrTime: "01:45 PM (+1)" },
  "kolkata-goa": { station: "Vijayawada Junction (BZA)", duration: "34h 30m", depTime: "08:15 AM", arrTime: "06:45 PM (+1)" },
  "bengaluru-jaipur": { station: "Vadodara Junction (BRC)", duration: "29h 40m", depTime: "11:30 AM", arrTime: "05:10 PM (+1)" },
  "delhi-manali": { station: "Chandigarh Junction (CDG)", duration: "9h 30m", depTime: "05:50 AM", arrTime: "03:20 PM" }
};

class SandboxTrainProvider extends BaseTrainProvider {
  constructor() {
    super("SandboxTrainProvider", false);
  }

  /**
   * Search trains between origin and destination
   */
  async searchTrains(params = {}) {
    const {
      origin = "Mumbai",
      destination = "Goa",
      date = "2026-10-15",
      travelers = 1,
      travelClass = null,
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
        trains: [],
        total: 0,
        hasDirect: false,
        hasConnecting: false,
        directCount: 0,
        connectingCount: 0,
        status: "NOT_APPLICABLE",
        message: "Train service is not available for overseas destinations. Please select flight options.",
        isLive: this.isLive,
        provider: this.name,
        disclaimer: "Rail transport operates exclusively for domestic routes."
      };
    }

    const hasDirectCorridor = DIRECT_TRAIN_CORRIDORS.has(routeKey);
    let allTrains = [];

    // Class matching helper
    const matchClass = (classes, query) => {
      if (!query || query.toLowerCase() === "all") return classes[0];
      const q = query.toLowerCase().trim();
      return classes.find(c => {
        const code = c.classCode.toLowerCase();
        const name = c.className.toLowerCase();
        if (q === "sleeper" || q === "sl") return code === "sl" || name.includes("sleeper");
        if (q === "3a") return code === "3a" || name.includes("3-tier") || name.includes("3a");
        if (q === "2a") return code === "2a" || name.includes("2-tier") || name.includes("2a");
        if (q === "1a") return code === "1a" || name.includes("1st") || name.includes("1a");
        return code === q || name.includes(q);
      }) || null;
    };

    // 1. Direct trains (Only generated if corridor exists)
    if (hasDirectCorridor) {
      const directCatalog = [
        {
          trainNumber: "12842",
          trainName: "Superfast Express",
          trainType: "SUPERFAST",
          depTime: "06:15 AM",
          arrTime: "02:30 PM",
          duration: "8h 15m",
          durationMinutes: 495,
          classes: [
            { classCode: "SL", className: "Sleeper", fare: 820, availability: "Confirmed", status: "AVAILABLE" },
            { classCode: "3A", className: "3A", fare: 1950, availability: "Confirmed", status: "AVAILABLE" },
            { classCode: "2A", className: "2A", fare: 2950, availability: "Confirmed", status: "AVAILABLE" },
            { classCode: "1A", className: "1A", fare: 4650, availability: "Confirmed", status: "AVAILABLE" }
          ]
        },
        {
          trainNumber: "12432",
          trainName: "Rajdhani Express",
          trainType: "RAJDHANI",
          depTime: "11:05 AM",
          arrTime: "07:15 PM",
          duration: "8h 10m",
          durationMinutes: 490,
          classes: [
            { classCode: "3A", className: "3A", fare: 2850, availability: "Confirmed", status: "AVAILABLE" },
            { classCode: "2A", className: "2A", fare: 3950, availability: "Confirmed", status: "AVAILABLE" },
            { classCode: "1A", className: "1A", fare: 5850, availability: "Confirmed", status: "AVAILABLE" }
          ]
        },
        {
          trainNumber: "22229",
          trainName: "Vande Bharat Express",
          trainType: "VANDE_BHARAT",
          depTime: "05:25 AM",
          arrTime: "01:10 PM",
          duration: "7h 45m",
          durationMinutes: 465,
          classes: [
            { classCode: "3A", className: "3A", fare: 2250, availability: "Confirmed", status: "AVAILABLE" },
            { classCode: "2A", className: "2A", fare: 3850, availability: "Confirmed", status: "AVAILABLE" }
          ]
        },
        {
          trainNumber: "12051",
          trainName: "Jan Shatabdi Express",
          trainType: "SHATABDI",
          depTime: "02:15 PM",
          arrTime: "11:30 PM",
          duration: "9h 15m",
          durationMinutes: 555,
          classes: [
            { classCode: "SL", className: "Sleeper", fare: 650, availability: "Confirmed", status: "AVAILABLE" },
            { classCode: "3A", className: "3A", fare: 1650, availability: "Confirmed", status: "AVAILABLE" }
          ]
        }
      ];

      directCatalog.forEach((t, idx) => {
        const matchedClass = matchClass(t.classes, travelClass) || t.classes[0];
        // If specific class requested and train doesn't have it, skip
        if (travelClass && travelClass.toLowerCase() !== "all" && !matchClass(t.classes, travelClass)) {
          return;
        }

        allTrains.push(
          new NormalizedTrain({
            id: `tr-${cleanOriginKey}-${cleanDestKey}-dir-${idx + 1}`,
            providerTrainId: `sb-tr-${t.trainNumber}`,
            provider: this.name,
            isLive: this.isLive,
            trainNumber: t.trainNumber,
            trainName: t.trainName,
            trainType: t.trainType,
            origin: {
              stationCode: cleanOriginKey.substring(0, 4).toUpperCase() || "STN1",
              stationName: `${originCity} Central Terminal`,
              city: originCity
            },
            destination: {
              stationCode: cleanDestKey.substring(0, 4).toUpperCase() || "STN2",
              stationName: `${destCity} Junction`,
              city: destCity
            },
            departure: { date, time: t.depTime, dayOfWeek: "Thursday" },
            arrival: { date, time: t.arrTime, dayOfWeek: "Thursday" },
            duration: t.duration,
            durationMinutes: t.durationMinutes,
            stops: 0,
            isDirect: true,
            transferStation: null,
            routeSummary: `${originCity} → ${destCity} (Direct)`,
            classes: t.classes,
            selectedClass: matchedClass.className || matchedClass.classCode,
            fare: matchedClass.fare,
            currency: "INR",
            pantryAvailable: true
          })
        );
      });
    }

    // 2. Connecting trains with clear transfer station
    const transferHubConfig = CONNECTING_TRAIN_HUBS[routeKey] || {
      station: "Secunderabad Junction (SC)",
      duration: "28h 15m",
      depTime: "07:00 AM",
      arrTime: "11:15 AM (+1)"
    };

    const connectingCatalog = [
      {
        trainNumber: "12805/17305",
        trainName: `Superfast Express via ${transferHubConfig.station.split(" ")[0]}`,
        trainType: "SUPERFAST",
        depTime: transferHubConfig.depTime,
        arrTime: transferHubConfig.arrTime,
        duration: transferHubConfig.duration,
        durationMinutes: 1450,
        stops: 1,
        transferStation: transferHubConfig.station,
        classes: [
          { classCode: "SL", className: "Sleeper", fare: 1050, availability: "Confirmed", status: "AVAILABLE" },
          { classCode: "3A", className: "3A", fare: 2450, availability: "Confirmed", status: "AVAILABLE" },
          { classCode: "2A", className: "2A", fare: 3650, availability: "Confirmed", status: "AVAILABLE" },
          { classCode: "1A", className: "1A", fare: 5450, availability: "Confirmed", status: "AVAILABLE" }
        ]
      },
      {
        trainNumber: "18047/12779",
        trainName: `Express Connection via ${transferHubConfig.station.split(" ")[0]}`,
        trainType: "EXPRESS",
        depTime: "09:30 AM",
        arrTime: "08:15 PM (+1)",
        duration: "34h 45m",
        durationMinutes: 2085,
        stops: 1,
        transferStation: transferHubConfig.station,
        classes: [
          { classCode: "SL", className: "Sleeper", fare: 980, availability: "Confirmed", status: "AVAILABLE" },
          { classCode: "3A", className: "3A", fare: 2350, availability: "Confirmed", status: "AVAILABLE" },
          { classCode: "2A", className: "2A", fare: 3450, availability: "Confirmed", status: "AVAILABLE" }
        ]
      }
    ];

    connectingCatalog.forEach((t, idx) => {
      const matchedClass = matchClass(t.classes, travelClass) || t.classes[0];
      if (travelClass && travelClass.toLowerCase() !== "all" && !matchClass(t.classes, travelClass)) {
        return;
      }

      allTrains.push(
        new NormalizedTrain({
          id: `tr-${cleanOriginKey}-${cleanDestKey}-conn-${idx + 1}`,
          providerTrainId: `sb-tr-conn-${idx + 1}`,
          provider: this.name,
          isLive: this.isLive,
          trainNumber: t.trainNumber,
          trainName: t.trainName,
          trainType: t.trainType,
          origin: {
            stationCode: cleanOriginKey.substring(0, 4).toUpperCase() || "STN1",
            stationName: `${originCity} Terminal`,
            city: originCity
          },
          destination: {
            stationCode: cleanDestKey.substring(0, 4).toUpperCase() || "STN2",
            stationName: `${destCity} Terminal`,
            city: destCity
          },
          departure: { date, time: t.depTime, dayOfWeek: "Thursday" },
          arrival: { date, time: t.arrTime, dayOfWeek: "Friday" },
          duration: t.duration,
          durationMinutes: t.durationMinutes,
          stops: t.stops,
          isDirect: false,
          transferStation: t.transferStation,
          routeSummary: `${originCity} → ${t.transferStation} → ${destCity}`,
          classes: t.classes,
          selectedClass: matchedClass.className || matchedClass.classCode,
          fare: matchedClass.fare,
          currency: "INR",
          pantryAvailable: true
        })
      );
    });

    const directTrains = allTrains.filter(t => t.isDirect);
    const connectingTrains = allTrains.filter(t => !t.isDirect);
    const hasDirect = directTrains.length > 0;
    const hasConnecting = connectingTrains.length > 0;

    let routeStatus = "NO_RESULTS";
    let statusMessage = "No train routes available for this destination and date.";

    if (hasDirect && hasConnecting) {
      routeStatus = "DIRECT_AND_CONNECTING_AVAILABLE";
      statusMessage = "Direct and connecting train routes available.";
    } else if (!hasDirect && hasConnecting) {
      routeStatus = "NO_DIRECT_RESULTS_BUT_CONNECTING_AVAILABLE";
      statusMessage = `No direct trains available. Connecting train journeys via ${transferHubConfig.station} are available below.`;
    } else if (hasDirect && !hasConnecting) {
      routeStatus = "DIRECT_ONLY";
      statusMessage = "Direct trains available.";
    }

    // Filter by stops if requested
    let filtered = [...allTrains];
    if (stops === "direct" || stops === "nonstop" || stops === "0") {
      filtered = filtered.filter(t => t.isDirect);
    } else if (stops === "connecting" || stops === "1") {
      filtered = filtered.filter(t => !t.isDirect);
    }

    // Sorting
    if (sortBy === "DURATION" || sortBy === "FASTEST") {
      filtered.sort((a, b) => a.durationMinutes - b.durationMinutes);
    } else if (sortBy === "PRICE_LOW_TO_HIGH") {
      filtered.sort((a, b) => a.fare - b.fare);
    } else if (sortBy === "PRICE_HIGH_TO_LOW") {
      filtered.sort((a, b) => b.fare - a.fare);
    } else if (sortBy === "EARLIEST_DEPARTURE") {
      filtered.sort((a, b) => a.departure.time.localeCompare(b.departure.time));
    }

    const total = filtered.length;
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const pageLimit = Math.max(1, parseInt(limit, 10) || 10);
    const paginated = filtered.slice((pageNum - 1) * pageLimit, pageNum * pageLimit);

    return {
      trains: paginated,
      total,
      hasDirect,
      hasConnecting,
      directCount: directTrains.length,
      connectingCount: connectingTrains.length,
      status: routeStatus,
      message: statusMessage,
      isLive: this.isLive,
      provider: this.name,
      disclaimer: "Estimated fares and schedules based on Indian Railways timetable."
    };
  }
}

module.exports = SandboxTrainProvider;
