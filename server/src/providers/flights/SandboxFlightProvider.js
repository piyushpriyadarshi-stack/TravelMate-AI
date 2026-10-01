// ==================================================
// TravelMate AI - Dynamic Sandbox Flight Provider
// Real-world route graph supporting Direct (Nonstop) and Connecting (1-Stop, 2-Stops) flights
// Works dynamically across all 15 supported destinations and any user origin
// ==================================================

const BaseFlightProvider = require("../base/BaseFlightProvider");
const NormalizedFlight = require("../models/NormalizedFlight");

// City to IATA code and hub mapping
const AIRPORT_REGISTRY = {
  goa: { code: "GOI", city: "Goa", name: "Dabolim / Manohar International Airport", terminal: "T1", isHub: false },
  delhi: { code: "DEL", city: "Delhi", name: "Indira Gandhi International Airport", terminal: "T3", isHub: true },
  mumbai: { code: "BOM", city: "Mumbai", name: "Chhatrapati Shivaji Maharaj International Airport", terminal: "T2", isHub: true },
  jaipur: { code: "JAI", city: "Jaipur", name: "Jaipur International Airport", terminal: "T2", isHub: false },
  manali: { code: "KUU", city: "Manali", name: "Kullu-Bhuntar Airport", terminal: "T1", isHub: false },
  bengaluru: { code: "BLR", city: "Bengaluru", name: "Kempegowda International Airport", terminal: "T2", isHub: true },
  bangalore: { code: "BLR", city: "Bengaluru", name: "Kempegowda International Airport", terminal: "T2", isHub: true },
  kolkata: { code: "CCU", city: "Kolkata", name: "Netaji Subhash Chandra Bose International Airport", terminal: "T2", isHub: true },
  bhubaneswar: { code: "BBI", city: "Bhubaneswar", name: "Biju Patnaik International Airport", terminal: "T1", isHub: false },
  kerala: { code: "COK", city: "Kerala", name: "Cochin International Airport", terminal: "T3", isHub: false },
  kochi: { code: "COK", city: "Kerala", name: "Cochin International Airport", terminal: "T3", isHub: false },
  hyderabad: { code: "HYD", city: "Hyderabad", name: "Rajiv Gandhi International Airport", terminal: "T1", isHub: true },
  dubai: { code: "DXB", city: "Dubai", name: "Dubai International Airport", terminal: "T3", isHub: true, isInternational: true },
  singapore: { code: "SIN", city: "Singapore", name: "Singapore Changi Airport", terminal: "T3", isHub: true, isInternational: true },
  paris: { code: "CDG", city: "Paris", name: "Paris Charles de Gaulle Airport", terminal: "2E", isHub: true, isInternational: true },
  london: { code: "LHR", city: "London", name: "London Heathrow Airport", terminal: "T5", isHub: true, isInternational: true },
  tokyo: { code: "HND", city: "Tokyo", name: "Tokyo Haneda Airport", terminal: "T3", isHub: true, isInternational: true }
};

// Known Direct Nonstop Corridors
// Any route not in this set has NO nonstop flights, but HAS connecting flights through hubs!
const DIRECT_CORRIDORS = new Set([
  // Metro Trunk Corridors
  "delhi-mumbai", "mumbai-delhi",
  "delhi-bengaluru", "bengaluru-delhi",
  "mumbai-bengaluru", "bengaluru-mumbai",
  "delhi-kolkata", "kolkata-delhi",
  "mumbai-kolkata", "kolkata-mumbai",
  "delhi-hyderabad", "hyderabad-delhi",
  "mumbai-hyderabad", "hyderabad-mumbai",
  "bengaluru-hyderabad", "hyderabad-bengaluru",
  "kolkata-hyderabad", "hyderabad-kolkata",

  // Major Metros to Goa
  "delhi-goa", "goa-delhi",
  "mumbai-goa", "goa-mumbai",
  "bengaluru-goa", "goa-bengaluru",
  "hyderabad-goa", "goa-hyderabad",
  "bhubaneswar-goa", "goa-bhubaneswar",

  // Major Metros to Jaipur
  "delhi-jaipur", "jaipur-delhi",
  "mumbai-jaipur", "jaipur-mumbai",
  "bengaluru-jaipur", "jaipur-bengaluru",

  // Major Metros to Bhubaneswar
  "delhi-bhubaneswar", "bhubaneswar-delhi",
  "kolkata-bhubaneswar", "bhubaneswar-kolkata",
  "bengaluru-bhubaneswar", "bhubaneswar-bengaluru",
  "mumbai-bhubaneswar", "bhubaneswar-mumbai",

  // Major Metros to Kerala (Cochin)
  "delhi-kerala", "kerala-delhi",
  "mumbai-kerala", "kerala-mumbai",
  "bengaluru-kerala", "kerala-bengaluru",
  "hyderabad-kerala", "kerala-hyderabad",

  // Delhi to Manali (Alliance Air turboprop)
  "delhi-manali", "manali-delhi",

  // International Direct Trunk Routes from Major Indian Gateways
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

function getAirportInfo(cityName) {
  const clean = (cityName || "").toLowerCase().replace(/[^a-z]/g, "");
  for (const [k, v] of Object.entries(AIRPORT_REGISTRY)) {
    if (clean.includes(k) || k.includes(clean)) {
      return v;
    }
  }
  const code = (clean.substring(0, 3) || "AIR").toUpperCase();
  return {
    code,
    city: cityName,
    name: `${cityName} Airport`,
    terminal: "T1",
    isHub: false
  };
}

class SandboxFlightProvider extends BaseFlightProvider {
  constructor() {
    super("SandboxFlightProvider", false);
  }

  /**
   * Search flights with real-world Direct & Connecting topologies
   */
  async searchFlights(params = {}) {
    const {
      origin = "Delhi",
      destination = "Goa",
      departureDate = "2026-10-15",
      returnDate = null,
      travelers = 1,
      cabinClass = "ECONOMY",
      stops = "all", // "all", "nonstop" (0), "1stop" (1), "2stops" (2)
      maxPrice = null,
      sortBy = "PRICE_LOW_TO_HIGH",
      page = 1,
      limit = 10
    } = params;

    const originCity = origin.split(",")[0].trim();
    const destCity = destination.split(",")[0].trim();
    const oKey = originCity.toLowerCase().replace(/[^a-z]/g, "");
    const dKey = destCity.toLowerCase().replace(/[^a-z]/g, "");
    const routeKey = `${oKey}-${dKey}`;

    const originInfo = getAirportInfo(originCity);
    const destInfo = getAirportInfo(destCity);

    const hasDirectCorridor = DIRECT_CORRIDORS.has(routeKey);

    let rawFlights = [];

    // ==================================================
    // 1. GENERATE DIRECT (NONSTOP) FLIGHTS
    // Only if route is a recognized direct corridor!
    // ==================================================
    if (hasDirectCorridor) {
      const isOverseas = destInfo.isInternational;

      const directTemplates = isOverseas
        ? [
            {
              airline: destInfo.code === "DXB" ? "Emirates" : destInfo.code === "SIN" ? "Singapore Airlines" : destInfo.code === "CDG" ? "Air France" : destInfo.code === "LHR" ? "British Airways" : "All Nippon Airways (ANA)",
              code: destInfo.code === "DXB" ? "EK" : destInfo.code === "SIN" ? "SQ" : destInfo.code === "CDG" ? "AF" : destInfo.code === "LHR" ? "BA" : "NH",
              flightNo: `${destInfo.code === "DXB" ? "EK" : destInfo.code === "SIN" ? "SQ" : destInfo.code === "CDG" ? "AF" : destInfo.code === "LHR" ? "BA" : "NH"}-501`,
              aircraft: "Boeing 777-300ER",
              depTime: "04:30 AM",
              arrTime: destInfo.code === "DXB" ? "07:15 AM" : destInfo.code === "SIN" ? "12:45 PM" : "11:20 AM",
              duration: destInfo.code === "DXB" ? "4h 15m" : destInfo.code === "SIN" ? "5h 45m" : "8h 50m",
              durationMinutes: destInfo.code === "DXB" ? 255 : destInfo.code === "SIN" ? 345 : 530,
              basePrice: destInfo.code === "DXB" ? 18500 : destInfo.code === "SIN" ? 24500 : destInfo.code === "CDG" ? 48000 : 52000,
              fareFamily: "FLEXI",
              meals: true,
              seatsLeft: 18
            },
            {
              airline: "Air India",
              code: "AI",
              flightNo: "AI-143",
              aircraft: "Boeing 787-8 Dreamliner",
              depTime: "09:40 AM",
              arrTime: destInfo.code === "DXB" ? "12:10 PM" : destInfo.code === "SIN" ? "05:55 PM" : "04:30 PM",
              duration: destInfo.code === "DXB" ? "4h 00m" : destInfo.code === "SIN" ? "5h 45m" : "8h 50m",
              durationMinutes: destInfo.code === "DXB" ? 240 : destInfo.code === "SIN" ? 345 : 530,
              basePrice: destInfo.code === "DXB" ? 16200 : destInfo.code === "SIN" ? 22000 : destInfo.code === "CDG" ? 44000 : 49000,
              fareFamily: "SAVER",
              meals: true,
              seatsLeft: 12
            }
          ]
        : (() => {
            const isShort = [
              "mumbai-goa", "goa-mumbai",
              "delhi-jaipur", "jaipur-delhi",
              "kolkata-bhubaneswar", "bhubaneswar-kolkata",
              "delhi-manali", "manali-delhi",
              "bengaluru-goa", "goa-bengaluru"
            ].includes(routeKey);

            const isLong = [
              "bhubaneswar-goa", "goa-bhubaneswar",
              "delhi-kerala", "kerala-delhi",
              "kolkata-goa", "goa-kolkata"
            ].includes(routeKey);

            const baseP = isShort
              ? { indigo: 3950, akasa: 4250, airIndia: 4850, vistara: 5400 }
              : isLong
              ? { indigo: 6850, akasa: 7200, airIndia: 8100, vistara: 8900 }
              : { indigo: 5200, akasa: 5650, airIndia: 6400, vistara: 7200 };

            return [
              {
                airline: "IndiGo",
                code: "6E",
                flightNo: "6E-512",
                aircraft: "Airbus A320neo",
                depTime: "06:15 AM",
                arrTime: isShort ? "07:35 AM" : isLong ? "09:10 AM" : "08:45 AM",
                duration: isShort ? "1h 20m" : isLong ? "2h 55m" : "2h 30m",
                durationMinutes: isShort ? 80 : isLong ? 175 : 150,
                basePrice: baseP.indigo,
                fareFamily: "SAVER",
                meals: false
              },
              {
                airline: "Akasa Air",
                code: "QP",
                flightNo: "QP-1354",
                aircraft: "Boeing 737 MAX 8",
                depTime: "08:30 AM",
                arrTime: isShort ? "09:50 AM" : isLong ? "11:25 AM" : "11:00 AM",
                duration: isShort ? "1h 20m" : isLong ? "2h 55m" : "2h 30m",
                durationMinutes: isShort ? 80 : isLong ? 175 : 150,
                basePrice: baseP.akasa,
                fareFamily: "SAVER",
                meals: false
              },
              {
                airline: "Air India",
                code: "AI",
                flightNo: "AI-843",
                aircraft: "Airbus A321neo",
                depTime: "11:00 AM",
                arrTime: isShort ? "12:20 PM" : isLong ? "01:55 PM" : "01:30 PM",
                duration: isShort ? "1h 20m" : isLong ? "2h 55m" : "2h 30m",
                durationMinutes: isShort ? 80 : isLong ? 175 : 150,
                basePrice: baseP.airIndia,
                fareFamily: "FLEXI",
                meals: true
              },
              {
                airline: "Vistara",
                code: "UK",
                flightNo: "UK-871",
                aircraft: "Airbus A321neo",
                depTime: "05:15 PM",
                arrTime: isShort ? "06:40 PM" : isLong ? "08:15 PM" : "07:50 PM",
                duration: isShort ? "1h 25m" : isLong ? "3h 00m" : "2h 35m",
                durationMinutes: isShort ? 85 : isLong ? 180 : 155,
                basePrice: baseP.vistara,
                fareFamily: "PREMIUM_FLEX",
                meals: true
              }
            ];
          })();

      directTemplates.forEach((t, idx) => {
        let multiplier = 1;
        if (cabinClass === "BUSINESS") multiplier = 3.2;
        else if (cabinClass === "PREMIUM_ECONOMY") multiplier = 1.6;
        const finalPrice = Math.round(t.basePrice * multiplier);

        rawFlights.push(
          new NormalizedFlight({
            id: `fl-${oKey}-${dKey}-dir-${idx + 1}`,
            providerFlightId: `sb-fl-${t.code}-${idx + 101}`,
            provider: this.name,
            isLive: this.isLive,
            airline: { code: t.code, name: t.airline, logo: "" },
            flightNumber: t.flightNo,
            aircraft: t.aircraft,
            cabinClass,
            origin: {
              airportCode: originInfo.code,
              airportName: originInfo.name,
              city: originInfo.city,
              terminal: originInfo.terminal
            },
            destination: {
              airportCode: destInfo.code,
              airportName: destInfo.name,
              city: destInfo.city,
              terminal: destInfo.terminal
            },
            departure: { date: departureDate, time: t.depTime, isoTimestamp: `${departureDate}T${t.depTime}` },
            arrival: { date: departureDate, time: t.arrTime, isoTimestamp: `${departureDate}T${t.arrTime}` },
            duration: t.duration,
            durationMinutes: t.durationMinutes,
            stops: 0,
            layovers: [],
            segments: [
              {
                legIndex: 1,
                flightNumber: t.flightNo,
                airline: t.airline,
                aircraft: t.aircraft,
                origin: { airportCode: originInfo.code, city: originInfo.city, airportName: originInfo.name },
                destination: { airportCode: destInfo.code, city: destInfo.city, airportName: destInfo.name },
                departure: { date: departureDate, time: t.depTime },
                arrival: { date: departureDate, time: t.arrTime },
                duration: t.duration
              }
            ],
            baggage: { checkIn: cabinClass === "BUSINESS" ? "30 kg" : "15 kg", cabin: "7 kg" },
            fareFamily: t.fareFamily,
            cancellationRefundable: true,
            seatAvailability: t.seatsLeft,
            price: finalPrice,
            taxesAndFees: Math.round(finalPrice * 0.12),
            currency: "INR",
            mealsIncluded: t.meals
          })
        );
      });
    }

    // ==================================================
    // 2. GENERATE CONNECTING FLIGHTS (1 Stop & 2 Stops)
    // Selects logical hub based on origin and destination
    // ==================================================
    let primaryHub = { code: "HYD", city: "Hyderabad", name: "Rajiv Gandhi International Airport" };
    let secondaryHub = { code: "BOM", city: "Mumbai", name: "Chhatrapati Shivaji Maharaj International Airport" };
    let tertiaryHub = { code: "BLR", city: "Bengaluru", name: "Kempegowda International Airport" };

    if (destInfo.isInternational) {
      primaryHub = { code: "DEL", city: "Delhi", name: "Indira Gandhi International Airport" };
      secondaryHub = { code: "BOM", city: "Mumbai", name: "Chhatrapati Shivaji Maharaj International Airport" };
      tertiaryHub = { code: "DXB", city: "Dubai", name: "Dubai International Airport" };
    } else if (oKey === "bhubaneswar" && dKey === "goa") {
      primaryHub = { code: "HYD", city: "Hyderabad", name: "Rajiv Gandhi International Airport" };
      secondaryHub = { code: "BOM", city: "Mumbai", name: "Chhatrapati Shivaji Maharaj International Airport" };
      tertiaryHub = { code: "BLR", city: "Bengaluru", name: "Kempegowda International Airport" };
    } else if (dKey === "manali") {
      primaryHub = { code: "DEL", city: "Delhi", name: "Indira Gandhi International Airport" };
      secondaryHub = { code: "IXC", city: "Chandigarh", name: "Chandigarh International Airport" };
    } else if (oKey === "kolkata" || oKey === "bhubaneswar") {
      primaryHub = { code: "HYD", city: "Hyderabad", name: "Rajiv Gandhi International Airport" };
      secondaryHub = { code: "BLR", city: "Bengaluru", name: "Kempegowda International Airport" };
    }

    const connectingTemplates = [
      {
        airline: "IndiGo",
        code: "6E",
        flightNo: "6E-621 / 6E-843",
        aircraft: "Airbus A320neo",
        depTime: "10:30 AM",
        arrTime: "03:45 PM",
        duration: "5h 15m",
        durationMinutes: 315,
        stops: 1,
        layover: { airportCode: primaryHub.code, city: primaryHub.city, duration: "1h 35m", durationMinutes: 95 },
        segments: [
          {
            legIndex: 1,
            flightNumber: "6E-621",
            airline: "IndiGo",
            aircraft: "Airbus A320neo",
            origin: { airportCode: originInfo.code, city: originInfo.city, airportName: originInfo.name },
            destination: { airportCode: primaryHub.code, city: primaryHub.city, airportName: primaryHub.name },
            departure: { date: departureDate, time: "10:30 AM" },
            arrival: { date: departureDate, time: "12:10 PM" },
            duration: "1h 40m"
          },
          {
            legIndex: 2,
            flightNumber: "6E-843",
            airline: "IndiGo",
            aircraft: "Airbus A320neo",
            origin: { airportCode: primaryHub.code, city: primaryHub.city, airportName: primaryHub.name },
            destination: { airportCode: destInfo.code, city: destInfo.city, airportName: destInfo.name },
            departure: { date: departureDate, time: "01:45 PM" },
            arrival: { date: departureDate, time: "03:45 PM" },
            duration: "2h 00m"
          }
        ],
        basePrice: destInfo.isInternational ? 34000 : 7500,
        fareFamily: "SAVER",
        meals: false,
        seatsLeft: 14
      },
      {
        airline: "Air India",
        code: "AI",
        flightNo: "AI-472 / AI-631",
        aircraft: "Airbus A321neo",
        depTime: "08:15 AM",
        arrTime: "02:25 PM",
        duration: "6h 10m",
        durationMinutes: 370,
        stops: 1,
        layover: { airportCode: secondaryHub.code, city: secondaryHub.city, duration: "2h 15m", durationMinutes: 135 },
        segments: [
          {
            legIndex: 1,
            flightNumber: "AI-472",
            airline: "Air India",
            aircraft: "Airbus A321neo",
            origin: { airportCode: originInfo.code, city: originInfo.city, airportName: originInfo.name },
            destination: { airportCode: secondaryHub.code, city: secondaryHub.city, airportName: secondaryHub.name },
            departure: { date: departureDate, time: "08:15 AM" },
            arrival: { date: departureDate, time: "10:10 AM" },
            duration: "1h 55m"
          },
          {
            legIndex: 2,
            flightNumber: "AI-631",
            airline: "Air India",
            aircraft: "Airbus A321neo",
            origin: { airportCode: secondaryHub.code, city: secondaryHub.city, airportName: secondaryHub.name },
            destination: { airportCode: destInfo.code, city: destInfo.city, airportName: destInfo.name },
            departure: { date: departureDate, time: "12:25 PM" },
            arrival: { date: departureDate, time: "02:25 PM" },
            duration: "2h 00m"
          }
        ],
        basePrice: destInfo.isInternational ? 38500 : 8100,
        fareFamily: "FLEXI",
        meals: true,
        seatsLeft: 8
      },
      {
        airline: "Vistara",
        code: "UK",
        flightNo: "UK-731 / UK-871",
        aircraft: "Airbus A320neo",
        depTime: "01:20 PM",
        arrTime: "07:10 PM",
        duration: "5h 50m",
        durationMinutes: 350,
        stops: 1,
        layover: { airportCode: tertiaryHub.code, city: tertiaryHub.city, duration: "1h 45m", durationMinutes: 105 },
        segments: [
          {
            legIndex: 1,
            flightNumber: "UK-731",
            airline: "Vistara",
            aircraft: "Airbus A320neo",
            origin: { airportCode: originInfo.code, city: originInfo.city, airportName: originInfo.name },
            destination: { airportCode: tertiaryHub.code, city: tertiaryHub.city, airportName: tertiaryHub.name },
            departure: { date: departureDate, time: "01:20 PM" },
            arrival: { date: departureDate, time: "03:25 PM" },
            duration: "2h 05m"
          },
          {
            legIndex: 2,
            flightNumber: "UK-871",
            airline: "Vistara",
            aircraft: "Airbus A320neo",
            origin: { airportCode: tertiaryHub.code, city: tertiaryHub.city, airportName: tertiaryHub.name },
            destination: { airportCode: destInfo.code, city: destInfo.city, airportName: destInfo.name },
            departure: { date: departureDate, time: "05:10 PM" },
            arrival: { date: departureDate, time: "07:10 PM" },
            duration: "2h 00m"
          }
        ],
        basePrice: destInfo.isInternational ? 42000 : 8600,
        fareFamily: "PREMIUM_FLEX",
        meals: true,
        seatsLeft: 11
      },
      {
        airline: "SpiceJet",
        code: "SG",
        flightNo: "SG-332 / SG-491",
        aircraft: "Boeing 737-800",
        depTime: "06:45 AM",
        arrTime: "02:15 PM",
        duration: "7h 30m",
        durationMinutes: 450,
        stops: 2,
        layovers: [
          { airportCode: primaryHub.code, city: primaryHub.city, duration: "1h 30m", durationMinutes: 90 },
          { airportCode: secondaryHub.code, city: secondaryHub.city, duration: "1h 45m", durationMinutes: 105 }
        ],
        segments: [
          {
            legIndex: 1,
            flightNumber: "SG-332",
            airline: "SpiceJet",
            aircraft: "Boeing 737-800",
            origin: { airportCode: originInfo.code, city: originInfo.city, airportName: originInfo.name },
            destination: { airportCode: primaryHub.code, city: primaryHub.city, airportName: primaryHub.name },
            departure: { date: departureDate, time: "06:45 AM" },
            arrival: { date: departureDate, time: "08:30 AM" },
            duration: "1h 45m"
          },
          {
            legIndex: 2,
            flightNumber: "SG-491",
            airline: "SpiceJet",
            aircraft: "Boeing 737-800",
            origin: { airportCode: primaryHub.code, city: primaryHub.city, airportName: primaryHub.name },
            destination: { airportCode: destInfo.code, city: destInfo.city, airportName: destInfo.name },
            departure: { date: departureDate, time: "11:45 AM" },
            arrival: { date: departureDate, time: "02:15 PM" },
            duration: "2h 30m"
          }
        ],
        basePrice: destInfo.isInternational ? 31000 : 6800,
        fareFamily: "SUPER_SAVER",
        meals: false,
        seatsLeft: 5
      }
    ];

    connectingTemplates.forEach((t, idx) => {
      let multiplier = 1;
      if (cabinClass === "BUSINESS") multiplier = 3.2;
      else if (cabinClass === "PREMIUM_ECONOMY") multiplier = 1.6;
      const finalPrice = Math.round(t.basePrice * multiplier);

      rawFlights.push(
        new NormalizedFlight({
          id: `fl-${oKey}-${dKey}-conn-${idx + 1}`,
          providerFlightId: `sb-fl-${t.code}-${idx + 201}`,
          provider: this.name,
          isLive: this.isLive,
          airline: { code: t.code, name: t.airline, logo: "" },
          flightNumber: t.flightNo,
          aircraft: t.aircraft,
          cabinClass,
          origin: {
            airportCode: originInfo.code,
            airportName: originInfo.name,
            city: originInfo.city,
            terminal: originInfo.terminal
          },
          destination: {
            airportCode: destInfo.code,
            airportName: destInfo.name,
            city: destInfo.city,
            terminal: destInfo.terminal
          },
          departure: { date: departureDate, time: t.depTime, isoTimestamp: `${departureDate}T${t.depTime}` },
          arrival: { date: departureDate, time: t.arrTime, isoTimestamp: `${departureDate}T${t.arrTime}` },
          duration: t.duration,
          durationMinutes: t.durationMinutes,
          stops: t.stops,
          layovers: t.layovers || (t.layover ? [t.layover] : []),
          segments: t.segments || [], // Leg-by-leg verification
          baggage: { checkIn: cabinClass === "BUSINESS" ? "30 kg" : "15 kg", cabin: "7 kg" },
          fareFamily: t.fareFamily,
          cancellationRefundable: t.fareFamily !== "SUPER_SAVER",
          seatAvailability: t.seatsLeft,
          price: finalPrice,
          taxesAndFees: Math.round(finalPrice * 0.12),
          currency: "INR",
          mealsIncluded: t.meals
        })
      );
    });

    // Determine counts and statuses before user-level filters
    const allDirect = rawFlights.filter(f => f.stops === 0);
    const allConnecting = rawFlights.filter(f => f.stops > 0);

    const hasDirect = allDirect.length > 0;
    const hasConnecting = allConnecting.length > 0;

    let routeStatus = "NO_RESULTS";
    let statusMessage = "No verified flights found for this route and date.";

    if (hasDirect && hasConnecting) {
      routeStatus = "DIRECT_AND_CONNECTING_AVAILABLE";
      statusMessage = "Direct and connecting flights available.";
    } else if (!hasDirect && hasConnecting) {
      routeStatus = "NO_DIRECT_RESULTS_BUT_CONNECTING_AVAILABLE";
      statusMessage = "No nonstop flights available. Connecting flights are available below.";
    } else if (hasDirect && !hasConnecting) {
      routeStatus = "DIRECT_ONLY";
      statusMessage = "Direct flights available.";
    }

    // Apply Filter: Stops
    let filtered = [...rawFlights];
    const stopFilter = (stops || "").toLowerCase();

    if (stopFilter === "nonstop" || stopFilter === "0") {
      filtered = filtered.filter(f => f.stops === 0);
    } else if (stopFilter === "1stop" || stopFilter === "1") {
      filtered = filtered.filter(f => f.stops === 1);
    } else if (stopFilter.startsWith("2") || stopFilter.includes("2") || stopFilter === "connecting") {
      filtered = filtered.filter(f => f.stops >= 2);
    }

    // Apply Filter: Max Price
    if (maxPrice) {
      filtered = filtered.filter(f => f.price <= parseFloat(maxPrice));
    }

    // Sorting
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "PRICE_HIGH_TO_LOW") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "DURATION" || sortBy === "FASTEST") {
      filtered.sort((a, b) => a.durationMinutes - b.durationMinutes);
    } else if (sortBy === "EARLIEST_DEPARTURE") {
      filtered.sort((a, b) => a.departure.time.localeCompare(b.departure.time));
    }

    const total = filtered.length;
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const pageLimit = Math.max(1, parseInt(limit, 10) || 10);
    const paginated = filtered.slice((pageNum - 1) * pageLimit, pageNum * pageLimit);

    return {
      flights: paginated,
      total,
      hasDirect,
      hasConnecting,
      directCount: allDirect.length,
      connectingCount: allConnecting.length,
      status: routeStatus,
      message: statusMessage,
      isLive: this.isLive,
      disclaimer: "Estimated fares and schedules based on route inventory.",
      fareLabel: "Estimated fare"
    };
  }

  /**
   * Pre-booking availability and price check for Sandbox flights
   */
  async revalidateFlight(params = {}) {
    const { flightId, providerFlightId, expectedPrice } = params;
    return {
      available: true,
      verifiedPrice: expectedPrice || 4850,
      priceChanged: false,
      verifiedAt: new Date().toISOString(),
      provider: this.name,
      isLive: false,
      verificationStatus: "ESTIMATED_FARE",
      label: "Estimated fare",
      fareLabel: "Estimated fare",
      providerNotice: "Estimated fare verified for booking."
    };
  }
}

module.exports = SandboxFlightProvider;
