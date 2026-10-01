// ==================================================
// TravelMate AI - 15 Curated Destinations Generator
// Builds polished, complete dataset for the 15 initial supported destinations
// Priority order: Goa, Delhi, Mumbai, Jaipur, Manali, Bengaluru, Kolkata, Bhubaneswar, Kerala, Hyderabad, Dubai, Singapore, Paris, London, Tokyo
// ==================================================

const fs = require("fs");
const path = require("path");

const cancellationPolicies = [
  {
    id: "cp-standard-01",
    name: "Flexible Cancellation",
    description: "Free cancellation up to 48 hours before check-in. 50% refund between 24 and 48 hours. Non-refundable within 24 hours.",
    refundPercentage: 100.0,
    daysBeforeTrip: 2,
    isDemo: true
  },
  {
    id: "cp-moderate-02",
    name: "Moderate Policy",
    description: "Free cancellation up to 7 days before check-in. 50% refund up to 72 hours before check-in.",
    refundPercentage: 100.0,
    daysBeforeTrip: 7,
    isDemo: true
  }
];

// The 15 supported destinations in exact priority order
const destinations = [
  // 1. Goa
  {
    id: "dest-goa",
    name: "Goa",
    city: "Panaji / Calangute / Candolim",
    state: "Goa",
    country: "India",
    countryCode: "IN",
    description: "Golden sand beaches, vibrant coastal nightlife, Portuguese architecture, and fresh seafood shacks along the Arabian Sea.",
    shortDescription: "Sun-drenched golden beaches, Portuguese colonial charm, and vibrant coastal shacks.",
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 15.2993,
    longitude: 74.124,
    timezone: "Asia/Kolkata",
    popular: true,
    popularity: 100,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Baga & Calangute Beach", "Aguada Fort", "Dudhsagar Waterfalls", "Basilica of Bom Jesus", "Anjuna Flea Market"],
    isDomestic: true,
    isActive: true,
    isDemo: true
  },

  // 2. Delhi
  {
    id: "dest-delhi",
    name: "Delhi",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
    description: "India's vibrant capital where centuries of Mughal monuments, bustling bazaars, and world-class culinary scenes meet modern grandeur.",
    shortDescription: "Timeless national capital bridging Mughal heritage, bustling street food, and modern avenues.",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 28.6139,
    longitude: 77.209,
    timezone: "Asia/Kolkata",
    popular: true,
    popularity: 99,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["India Gate", "Qutub Minar", "Red Fort", "Humayun's Tomb", "Chandni Chowk"],
    isDomestic: true,
    isActive: true,
    isDemo: true
  },

  // 3. Mumbai
  {
    id: "dest-mumbai",
    name: "Mumbai",
    city: "Mumbai / Bombay",
    state: "Maharashtra",
    country: "India",
    countryCode: "IN",
    description: "The dynamic financial and cinematic heart of India, famous for the Gateway of India, coastal Marine Drive, and colonial Art Deco.",
    shortDescription: "India's bustling coastal metropolis with iconic heritage promenades and cinematic energy.",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 18.922,
    longitude: 72.8347,
    timezone: "Asia/Kolkata",
    popular: true,
    popularity: 98,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Gateway of India", "Marine Drive & Queen's Necklace", "Elephanta Caves", "Colaba Causeway", "Bandra Bandstand"],
    isDomestic: true,
    isActive: true,
    isDemo: true
  },

  // 4. Jaipur
  {
    id: "dest-jaipur",
    name: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    countryCode: "IN",
    description: "The legendary Pink City of royalty, magnificent hilltop forts, ornate pink sandstone palaces, and vibrant artisan handicraft bazaars.",
    shortDescription: "Royal Pink City renowned for hilltop forts, ornate palaces, and colorful artisan bazaars.",
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 26.9124,
    longitude: 75.7873,
    timezone: "Asia/Kolkata",
    popular: true,
    popularity: 97,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Amber Fort & Palace", "Hawa Mahal", "City Palace", "Jantar Mantar", "Nahargarh Fort"],
    isDomestic: true,
    isActive: true,
    isDemo: true
  },

  // 5. Manali
  {
    id: "dest-manali",
    name: "Manali",
    city: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    countryCode: "IN",
    description: "Breathtaking snow-capped Himalayan peaks, adventure sports in Solang Valley, lush pine forests, and soothing hot springs.",
    shortDescription: "Majestic Himalayan snow peaks, pine forests, and high-adrenaline alpine sports.",
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 32.2432,
    longitude: 77.1892,
    timezone: "Asia/Kolkata",
    popular: true,
    popularity: 96,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Solang Valley Adventure Hub", "Rohtang Pass", "Hadimba Temple", "Old Manali Cafes", "Jogini Waterfalls"],
    isDomestic: true,
    isActive: true,
    isDemo: true
  },

  // 6. Bengaluru
  {
    id: "dest-bengaluru",
    name: "Bengaluru",
    city: "Bengaluru / Bangalore",
    state: "Karnataka",
    country: "India",
    countryCode: "IN",
    description: "India's high-tech Silicon Valley celebrated for pleasant year-round weather, sprawling botanical gardens, and craft microbreweries.",
    shortDescription: "Dynamic Garden City and tech hub with verdant parks, palaces, and craft brew scene.",
    imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 12.9716,
    longitude: 77.5946,
    timezone: "Asia/Kolkata",
    popular: true,
    popularity: 95,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Bangalore Palace", "Cubbon Park", "Lalbagh Botanical Garden", "Vidhana Soudha", "UB City"],
    isDomestic: true,
    isActive: true,
    isDemo: true
  },

  // 7. Kolkata
  {
    id: "dest-kolkata",
    name: "Kolkata",
    city: "Kolkata / Calcutta",
    state: "West Bengal",
    country: "India",
    countryCode: "IN",
    description: "The Cultural Capital of India, steeped in colonial architecture along the Hooghly River, iconic yellow cabs, literature, and sweets.",
    shortDescription: "India's soulful cultural capital with grand colonial architecture and rich literary heritage.",
    imageUrl: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1534777367038-a5048c861092?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588099768531-a72d4a198538?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 22.5726,
    longitude: 88.3639,
    timezone: "Asia/Kolkata",
    popular: true,
    popularity: 94,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple", "Park Street", "College Street Boi Para"],
    isDomestic: true,
    isActive: true,
    isDemo: true
  },

  // 8. Bhubaneswar
  {
    id: "dest-bhubaneswar",
    name: "Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    countryCode: "IN",
    description: "The ancient 'Temple City of India' boasting over a thousand preserved Kalinga architectural temples and rock-cut Buddhist/Jain caves.",
    shortDescription: "Ancient Kalinga temple capital featuring stone heritage, caves, and Odia crafts.",
    imageUrl: "https://images.unsplash.com/photo-1629813366051-b58137b2792c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600100397608-f010f445b955?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1629813366051-b58137b2792c?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 20.2961,
    longitude: 85.8245,
    timezone: "Asia/Kolkata",
    popular: true,
    popularity: 93,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Lingaraj Temple", "Udayagiri & Khandagiri Caves", "Mukteshwar Temple", "Dhauli Shanti Stupa", "Nandankanan Zoo"],
    isDomestic: true,
    isActive: true,
    isDemo: true
  },

  // 9. Kerala
  {
    id: "dest-kerala",
    name: "Kerala",
    city: "Kochi / Munnar / Alleppey",
    state: "Kerala",
    country: "India",
    countryCode: "IN",
    description: "God's Own Country, famed for serene palm-fringed backwaters, emerald tea plantations, spice hills, and rejuvenating Ayurvedic wellness.",
    shortDescription: "Serene palm-fringed backwaters, lush tea hills, and tranquil Arabian Sea coast.",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 9.9312,
    longitude: 76.2673,
    timezone: "Asia/Kolkata",
    popular: true,
    popularity: 92,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Alleppey Backwaters Houseboat", "Munnar Tea Hills", "Fort Kochi Chinese Fishing Nets", "Periyar National Park", "Varkala Cliff Beach"],
    isDomestic: true,
    isActive: true,
    isDemo: true
  },

  // 10. Hyderabad
  {
    id: "dest-hyderabad",
    name: "Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    countryCode: "IN",
    description: "The City of Pearls, where royal Nizam palaces, ancient hilltop fortresses, aromatic Dum Biryani, and modern IT corridors unite.",
    shortDescription: "City of Pearls with royal Nizam palaces, aromatic biryani, and historic forts.",
    imageUrl: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 17.385,
    longitude: 78.4867,
    timezone: "Asia/Kolkata",
    popular: true,
    popularity: 91,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Charminar & Laad Bazaar", "Golconda Fort", "Taj Falaknuma Palace", "Hussain Sagar Lake", "Chowmahalla Palace"],
    isDomestic: true,
    isActive: true,
    isDemo: true
  },

  // 11. Dubai
  {
    id: "dest-dubai",
    name: "Dubai",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    description: "Futuristic desert metropolis world-renowned for ultra-modern architecture, luxury shopping, man-made islands, and desert safaris.",
    shortDescription: "Ultra-luxury modern oasis with iconic skyscrapers, mega malls, and golden desert dunes.",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 25.2048,
    longitude: 55.2708,
    timezone: "Asia/Dubai",
    popular: true,
    popularity: 90,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Burj Khalifa", "The Dubai Mall & Fountains", "Palm Jumeirah", "Desert Safari Dunes", "Dubai Marina Promenade"],
    isDomestic: false,
    isActive: true,
    isDemo: true
  },

  // 12. Singapore
  {
    id: "dest-singapore",
    name: "Singapore",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    description: "Dynamic global city-state blending futuristic biophilic architecture, Michelin-starred street hawkers, and lush tropical gardens.",
    shortDescription: "Futuristic Garden City blending iconic skyline, Michelin hawker dining, and lush islands.",
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 1.3521,
    longitude: 103.8198,
    timezone: "Asia/Singapore",
    popular: true,
    popularity: 89,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Changi Jewel Waterfall", "Chinatown & Hawker Centres"],
    isDomestic: false,
    isActive: true,
    isDemo: true
  },

  // 13. Paris
  {
    id: "dest-paris",
    name: "Paris",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    countryCode: "FR",
    description: "The global City of Light, celebrated for art, haute cuisine, chic boulevards, the Eiffel Tower, and world-class museums like the Louvre.",
    shortDescription: "Iconic City of Light renowned for haute cuisine, art masterworks, and romantic avenues.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 48.8566,
    longitude: 2.3522,
    timezone: "Europe/Paris",
    popular: true,
    popularity: 88,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Arc de Triomphe", "Montmartre & Sacré-Cœur"],
    isDomestic: false,
    isActive: true,
    isDemo: true
  },

  // 14. London
  {
    id: "dest-london",
    name: "London",
    city: "London",
    state: "Greater London",
    country: "United Kingdom",
    countryCode: "GB",
    description: "Historic capital on the River Thames, home to royal palaces, West End theaters, world-leading museums, and vibrant boroughs.",
    shortDescription: "Historic British metropolis of royal landmarks, West End theater, and storied Thames bridges.",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 51.5074,
    longitude: -0.1278,
    timezone: "Europe/London",
    popular: true,
    popularity: 87,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Tower of London & Tower Bridge", "Big Ben & Westminster Palace", "British Museum", "Buckingham Palace", "London Eye"],
    isDomestic: false,
    isActive: true,
    isDemo: true
  },

  // 15. Tokyo
  {
    id: "dest-tokyo",
    name: "Tokyo",
    city: "Tokyo",
    state: "Kanto",
    country: "Japan",
    countryCode: "JP",
    description: "Mesmerizing fusion of neon-lit skyscrapers, ancient Shinto shrines, unmatched gastronomy, bullet trains, and anime culture.",
    shortDescription: "Ultra-modern neon metropolis seamlessly honoring centuries-old temples and world-class dining.",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
    ],
    latitude: 35.6762,
    longitude: 139.6503,
    timezone: "Asia/Tokyo",
    popular: true,
    popularity: 86,
    status: "ACTIVE",
    isSupported: true,
    attractions: ["Shibuya Crossing", "Sensō-ji Temple Asakusa", "Tokyo Skytree", "Shinjuku Gyoen National Garden", "Akihabara District"],
    isDomestic: false,
    isActive: true,
    isDemo: true
  }
];

console.log(`Curated ${destinations.length} destinations.`);
module.exports = { cancellationPolicies, destinations };
