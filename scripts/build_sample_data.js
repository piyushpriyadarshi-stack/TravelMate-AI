// ==================================================
// TravelMate AI - Build Sample Data Script
// Merges 15 curated destinations, 45 hotels, 30 activities, and transportation
// Writes directly into server/src/utils/sampleData.js
// ==================================================

const fs = require("fs");
const path = require("path");

const { cancellationPolicies, destinations } = require("./curate_15_destinations");
const { hotels, activities } = require("./curate_hotels_and_activities");

// Retain standard catalog transportation options
const transportationOptions = [
  {
    id: "trans-fl-01",
    type: "FLIGHT",
    provider: "IndiGo 6E-512",
    origin: "Delhi",
    destination: "Goa",
    departureTime: "06:15 AM",
    arrivalTime: "08:50 AM",
    duration: "2h 35m",
    capacity: 180,
    availableSeats: 45,
    price: 4850,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-fl-02",
    type: "FLIGHT",
    provider: "Air India AI-843",
    origin: "Mumbai",
    destination: "Goa",
    departureTime: "09:40 AM",
    arrivalTime: "11:00 AM",
    duration: "1h 20m",
    capacity: 160,
    availableSeats: 32,
    price: 3600,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-fl-03",
    type: "FLIGHT",
    provider: "Emirates EK-501",
    origin: "Mumbai",
    destination: "Dubai",
    departureTime: "04:30 AM",
    arrivalTime: "06:15 AM",
    duration: "3h 15m",
    capacity: 350,
    availableSeats: 64,
    price: 18500,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-fl-03b",
    type: "FLIGHT",
    provider: "Flydubai FZ-436",
    origin: "Delhi",
    destination: "Dubai",
    departureTime: "09:20 AM",
    arrivalTime: "11:55 AM",
    duration: "4h 05m",
    capacity: 180,
    availableSeats: 28,
    price: 16200,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-fl-05",
    type: "FLIGHT",
    provider: "IndiGo 6E-205",
    origin: "Bengaluru",
    destination: "Kerala",
    departureTime: "08:15 AM",
    arrivalTime: "09:25 AM",
    duration: "1h 10m",
    capacity: 180,
    availableSeats: 38,
    price: 2800,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-fl-06",
    type: "FLIGHT",
    provider: "Singapore Airlines SQ-401",
    origin: "Delhi",
    destination: "Singapore",
    departureTime: "09:50 AM",
    arrivalTime: "06:05 PM",
    duration: "5h 45m",
    capacity: 300,
    availableSeats: 52,
    price: 24500,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-fl-07",
    type: "FLIGHT",
    provider: "Air France AF-225",
    origin: "Delhi",
    destination: "Paris",
    departureTime: "01:25 AM",
    arrivalTime: "06:40 AM",
    duration: "8h 45m",
    capacity: 280,
    availableSeats: 41,
    price: 48000,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-fl-08",
    type: "FLIGHT",
    provider: "All Nippon Airways (ANA) NH-838",
    origin: "Delhi",
    destination: "Tokyo",
    departureTime: "07:00 PM",
    arrivalTime: "06:20 AM (+1)",
    duration: "7h 50m",
    capacity: 250,
    availableSeats: 35,
    price: 52000,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-fl-london",
    type: "FLIGHT",
    provider: "British Airways BA-142",
    origin: "Delhi",
    destination: "London",
    departureTime: "03:15 AM",
    arrivalTime: "07:50 AM",
    duration: "9h 05m",
    capacity: 290,
    availableSeats: 44,
    price: 49500,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-tr-01",
    type: "TRAIN",
    provider: "Vande Bharat Express (22229)",
    origin: "Mumbai",
    destination: "Goa",
    departureTime: "05:25 AM",
    arrivalTime: "01:10 PM",
    duration: "7h 45m",
    capacity: 530,
    availableSeats: 64,
    price: 1850,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-tr-04",
    type: "TRAIN",
    provider: "Vande Bharat Express (20977)",
    origin: "Delhi",
    destination: "Jaipur",
    departureTime: "06:10 AM",
    arrivalTime: "10:05 AM",
    duration: "3h 55m",
    capacity: 530,
    availableSeats: 82,
    price: 880,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-bus-01",
    type: "BUS",
    provider: "IntrCity SmartBus Multi-Axle Volvo",
    origin: "Delhi",
    destination: "Manali",
    departureTime: "06:30 PM",
    arrivalTime: "07:30 AM (+1)",
    duration: "13h 00m",
    capacity: 40,
    availableSeats: 16,
    price: 1650,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-bus-goa",
    type: "BUS",
    provider: "Zingbus AC Sleeper (2+1)",
    origin: "Mumbai",
    destination: "Goa",
    departureTime: "08:00 PM",
    arrivalTime: "08:30 AM (+1)",
    duration: "12h 30m",
    capacity: 36,
    availableSeats: 14,
    price: 1450,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-suv-01",
    type: "SUV",
    provider: "Toyota Innova Crysta (AC Private)",
    origin: "Goa Dabolim / Mopa Airport",
    destination: "Goa Hotel Direct Transfer",
    departureTime: "Flexible / On Arrival",
    arrivalTime: "Direct Transfer",
    duration: "45m - 1h",
    capacity: 6,
    availableSeats: 6,
    price: 2400,
    status: "AVAILABLE",
    isDemo: true
  },
  {
    id: "trans-car-01",
    type: "PRIVATE_CAR",
    provider: "Sedan Prime (Maruti Dzire AC)",
    origin: "Goa Dabolim / Mopa Airport",
    destination: "Goa Hotel Direct Transfer",
    departureTime: "Flexible / On Arrival",
    arrivalTime: "Direct Transfer",
    duration: "45m - 1h",
    capacity: 4,
    availableSeats: 4,
    price: 1650,
    status: "AVAILABLE",
    isDemo: true
  }
];

const fileContent = `// ==================================================
// TravelMate AI - Sample / Seed Data
// Limited & Polished Destination Catalogue (Quality > Quantity)
// Supported Destinations:
// India (10): Goa, Delhi, Mumbai, Jaipur, Manali, Bengaluru, Kolkata, Bhubaneswar, Kerala, Hyderabad
// International (5): Dubai, Singapore, Paris, London, Tokyo
// ==================================================

const isDemo = true;

const cancellationPolicies = ${JSON.stringify(cancellationPolicies, null, 2)};

const destinations = ${JSON.stringify(destinations, null, 2)};

const hotels = ${JSON.stringify(hotels, null, 2)};

const transportationOptions = ${JSON.stringify(transportationOptions, null, 2)};

const activities = ${JSON.stringify(activities, null, 2)};

module.exports = {
  isDemo,
  cancellationPolicies,
  destinations,
  hotels,
  transportationOptions,
  activities
};
`;

const targetPath = path.join(__dirname, "../server/src/utils/sampleData.js");
fs.writeFileSync(targetPath, fileContent, "utf8");
console.log(`Successfully generated sampleData.js with:`);
console.log(`- ${destinations.length} destinations`);
console.log(`- ${hotels.length} hotels (3 per destination)`);
console.log(`- ${activities.length} activities (2 per destination)`);
console.log(`- ${transportationOptions.length} transit options`);
