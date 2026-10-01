// ==================================================
// TravelMate AI - Sample / Seed Data
// Limited & Polished Destination Catalogue (Quality > Quantity)
// Supported Destinations:
// India (10): Goa, Delhi, Mumbai, Jaipur, Manali, Bengaluru, Kolkata, Bhubaneswar, Kerala, Hyderabad
// International (5): Dubai, Singapore, Paris, London, Tokyo
// ==================================================

const isDemo = true;

const cancellationPolicies = [
  {
    "id": "cp-standard-01",
    "name": "Flexible Cancellation",
    "description": "Free cancellation up to 48 hours before check-in. 50% refund between 24 and 48 hours. Non-refundable within 24 hours.",
    "refundPercentage": 100,
    "daysBeforeTrip": 2,
    "isDemo": true
  },
  {
    "id": "cp-moderate-02",
    "name": "Moderate Policy",
    "description": "Free cancellation up to 7 days before check-in. 50% refund up to 72 hours before check-in.",
    "refundPercentage": 100,
    "daysBeforeTrip": 7,
    "isDemo": true
  }
];

const destinations = [
  {
    "id": "dest-goa",
    "name": "Goa",
    "city": "Panaji / Calangute / Candolim",
    "state": "Goa",
    "country": "India",
    "countryCode": "IN",
    "description": "Golden sand beaches, vibrant coastal nightlife, Portuguese architecture, and fresh seafood shacks along the Arabian Sea.",
    "shortDescription": "Sun-drenched golden beaches, Portuguese colonial charm, and vibrant coastal shacks.",
    "imageUrl": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 15.2993,
    "longitude": 74.124,
    "timezone": "Asia/Kolkata",
    "popular": true,
    "popularity": 100,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Baga & Calangute Beach",
      "Aguada Fort",
      "Dudhsagar Waterfalls",
      "Basilica of Bom Jesus",
      "Anjuna Flea Market"
    ],
    "isDomestic": true,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-delhi",
    "name": "Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "countryCode": "IN",
    "description": "India's vibrant capital where centuries of Mughal monuments, bustling bazaars, and world-class culinary scenes meet modern grandeur.",
    "shortDescription": "Timeless national capital bridging Mughal heritage, bustling street food, and modern avenues.",
    "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 28.6139,
    "longitude": 77.209,
    "timezone": "Asia/Kolkata",
    "popular": true,
    "popularity": 99,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "India Gate",
      "Qutub Minar",
      "Red Fort",
      "Humayun's Tomb",
      "Chandni Chowk"
    ],
    "isDomestic": true,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-mumbai",
    "name": "Mumbai",
    "city": "Mumbai / Bombay",
    "state": "Maharashtra",
    "country": "India",
    "countryCode": "IN",
    "description": "The dynamic financial and cinematic heart of India, famous for the Gateway of India, coastal Marine Drive, and colonial Art Deco.",
    "shortDescription": "India's bustling coastal metropolis with iconic heritage promenades and cinematic energy.",
    "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 18.922,
    "longitude": 72.8347,
    "timezone": "Asia/Kolkata",
    "popular": true,
    "popularity": 98,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Gateway of India",
      "Marine Drive & Queen's Necklace",
      "Elephanta Caves",
      "Colaba Causeway",
      "Bandra Bandstand"
    ],
    "isDomestic": true,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-jaipur",
    "name": "Jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "country": "India",
    "countryCode": "IN",
    "description": "The legendary Pink City of royalty, magnificent hilltop forts, ornate pink sandstone palaces, and vibrant artisan handicraft bazaars.",
    "shortDescription": "Royal Pink City renowned for hilltop forts, ornate palaces, and colorful artisan bazaars.",
    "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 26.9124,
    "longitude": 75.7873,
    "timezone": "Asia/Kolkata",
    "popular": true,
    "popularity": 97,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Amber Fort & Palace",
      "Hawa Mahal",
      "City Palace",
      "Jantar Mantar",
      "Nahargarh Fort"
    ],
    "isDomestic": true,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-manali",
    "name": "Manali",
    "city": "Manali",
    "state": "Himachal Pradesh",
    "country": "India",
    "countryCode": "IN",
    "description": "Breathtaking snow-capped Himalayan peaks, adventure sports in Solang Valley, lush pine forests, and soothing hot springs.",
    "shortDescription": "Majestic Himalayan snow peaks, pine forests, and high-adrenaline alpine sports.",
    "imageUrl": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 32.2432,
    "longitude": 77.1892,
    "timezone": "Asia/Kolkata",
    "popular": true,
    "popularity": 96,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Solang Valley Adventure Hub",
      "Rohtang Pass",
      "Hadimba Temple",
      "Old Manali Cafes",
      "Jogini Waterfalls"
    ],
    "isDomestic": true,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-bengaluru",
    "name": "Bengaluru",
    "city": "Bengaluru / Bangalore",
    "state": "Karnataka",
    "country": "India",
    "countryCode": "IN",
    "description": "India's high-tech Silicon Valley celebrated for pleasant year-round weather, sprawling botanical gardens, and craft microbreweries.",
    "shortDescription": "Dynamic Garden City and tech hub with verdant parks, palaces, and craft brew scene.",
    "imageUrl": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 12.9716,
    "longitude": 77.5946,
    "timezone": "Asia/Kolkata",
    "popular": true,
    "popularity": 95,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Bangalore Palace",
      "Cubbon Park",
      "Lalbagh Botanical Garden",
      "Vidhana Soudha",
      "UB City"
    ],
    "isDomestic": true,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-kolkata",
    "name": "Kolkata",
    "city": "Kolkata / Calcutta",
    "state": "West Bengal",
    "country": "India",
    "countryCode": "IN",
    "description": "The Cultural Capital of India, steeped in colonial architecture along the Hooghly River, iconic yellow cabs, literature, and sweets.",
    "shortDescription": "India's soulful cultural capital with grand colonial architecture and rich literary heritage.",
    "imageUrl": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1534777367038-a5048c861092?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588099768531-a72d4a198538?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 22.5726,
    "longitude": 88.3639,
    "timezone": "Asia/Kolkata",
    "popular": true,
    "popularity": 94,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Victoria Memorial",
      "Howrah Bridge",
      "Dakshineswar Kali Temple",
      "Park Street",
      "College Street Boi Para"
    ],
    "isDomestic": true,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-bhubaneswar",
    "name": "Bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "country": "India",
    "countryCode": "IN",
    "description": "The ancient 'Temple City of India' boasting over a thousand preserved Kalinga architectural temples and rock-cut Buddhist/Jain caves.",
    "shortDescription": "Ancient Kalinga temple capital featuring stone heritage, caves, and Odia crafts.",
    "imageUrl": "https://images.unsplash.com/photo-1629813366051-b58137b2792c?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600100397608-f010f445b955?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1629813366051-b58137b2792c?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 20.2961,
    "longitude": 85.8245,
    "timezone": "Asia/Kolkata",
    "popular": true,
    "popularity": 93,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Lingaraj Temple",
      "Udayagiri & Khandagiri Caves",
      "Mukteshwar Temple",
      "Dhauli Shanti Stupa",
      "Nandankanan Zoo"
    ],
    "isDomestic": true,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-kerala",
    "name": "Kerala",
    "city": "Kochi / Munnar / Alleppey",
    "state": "Kerala",
    "country": "India",
    "countryCode": "IN",
    "description": "God's Own Country, famed for serene palm-fringed backwaters, emerald tea plantations, spice hills, and rejuvenating Ayurvedic wellness.",
    "shortDescription": "Serene palm-fringed backwaters, lush tea hills, and tranquil Arabian Sea coast.",
    "imageUrl": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 9.9312,
    "longitude": 76.2673,
    "timezone": "Asia/Kolkata",
    "popular": true,
    "popularity": 92,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Alleppey Backwaters Houseboat",
      "Munnar Tea Hills",
      "Fort Kochi Chinese Fishing Nets",
      "Periyar National Park",
      "Varkala Cliff Beach"
    ],
    "isDomestic": true,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-hyderabad",
    "name": "Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "India",
    "countryCode": "IN",
    "description": "The City of Pearls, where royal Nizam palaces, ancient hilltop fortresses, aromatic Dum Biryani, and modern IT corridors unite.",
    "shortDescription": "City of Pearls with royal Nizam palaces, aromatic biryani, and historic forts.",
    "imageUrl": "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 17.385,
    "longitude": 78.4867,
    "timezone": "Asia/Kolkata",
    "popular": true,
    "popularity": 91,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Charminar & Laad Bazaar",
      "Golconda Fort",
      "Taj Falaknuma Palace",
      "Hussain Sagar Lake",
      "Chowmahalla Palace"
    ],
    "isDomestic": true,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-dubai",
    "name": "Dubai",
    "city": "Dubai",
    "state": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "description": "Futuristic desert metropolis world-renowned for ultra-modern architecture, luxury shopping, man-made islands, and desert safaris.",
    "shortDescription": "Ultra-luxury modern oasis with iconic skyscrapers, mega malls, and golden desert dunes.",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 25.2048,
    "longitude": 55.2708,
    "timezone": "Asia/Dubai",
    "popular": true,
    "popularity": 90,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Burj Khalifa",
      "The Dubai Mall & Fountains",
      "Palm Jumeirah",
      "Desert Safari Dunes",
      "Dubai Marina Promenade"
    ],
    "isDomestic": false,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-singapore",
    "name": "Singapore",
    "city": "Singapore",
    "state": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "description": "Dynamic global city-state blending futuristic biophilic architecture, Michelin-starred street hawkers, and lush tropical gardens.",
    "shortDescription": "Futuristic Garden City blending iconic skyline, Michelin hawker dining, and lush islands.",
    "imageUrl": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 1.3521,
    "longitude": 103.8198,
    "timezone": "Asia/Singapore",
    "popular": true,
    "popularity": 89,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Marina Bay Sands",
      "Gardens by the Bay",
      "Sentosa Island",
      "Changi Jewel Waterfall",
      "Chinatown & Hawker Centres"
    ],
    "isDomestic": false,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-paris",
    "name": "Paris",
    "city": "Paris",
    "state": "Île-de-France",
    "country": "France",
    "countryCode": "FR",
    "description": "The global City of Light, celebrated for art, haute cuisine, chic boulevards, the Eiffel Tower, and world-class museums like the Louvre.",
    "shortDescription": "Iconic City of Light renowned for haute cuisine, art masterworks, and romantic avenues.",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 48.8566,
    "longitude": 2.3522,
    "timezone": "Europe/Paris",
    "popular": true,
    "popularity": 88,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Arc de Triomphe",
      "Montmartre & Sacré-Cœur"
    ],
    "isDomestic": false,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-london",
    "name": "London",
    "city": "London",
    "state": "Greater London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "description": "Historic capital on the River Thames, home to royal palaces, West End theaters, world-leading museums, and vibrant boroughs.",
    "shortDescription": "Historic British metropolis of royal landmarks, West End theater, and storied Thames bridges.",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 51.5074,
    "longitude": -0.1278,
    "timezone": "Europe/London",
    "popular": true,
    "popularity": 87,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Tower of London & Tower Bridge",
      "Big Ben & Westminster Palace",
      "British Museum",
      "Buckingham Palace",
      "London Eye"
    ],
    "isDomestic": false,
    "isActive": true,
    "isDemo": true
  },
  {
    "id": "dest-tokyo",
    "name": "Tokyo",
    "city": "Tokyo",
    "state": "Kanto",
    "country": "Japan",
    "countryCode": "JP",
    "description": "Mesmerizing fusion of neon-lit skyscrapers, ancient Shinto shrines, unmatched gastronomy, bullet trains, and anime culture.",
    "shortDescription": "Ultra-modern neon metropolis seamlessly honoring centuries-old temples and world-class dining.",
    "imageUrl": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
    ],
    "latitude": 35.6762,
    "longitude": 139.6503,
    "timezone": "Asia/Tokyo",
    "popular": true,
    "popularity": 86,
    "status": "ACTIVE",
    "isSupported": true,
    "attractions": [
      "Shibuya Crossing",
      "Sensō-ji Temple Asakusa",
      "Tokyo Skytree",
      "Shinjuku Gyoen National Garden",
      "Akihabara District"
    ],
    "isDomestic": false,
    "isActive": true,
    "isDemo": true
  }
];

const { realHotels: hotels } = require("../data/hotels");

const transportationOptions = [
  {
    "id": "trans-fl-01",
    "type": "FLIGHT",
    "provider": "IndiGo 6E-512",
    "origin": "Delhi",
    "destination": "Goa",
    "departureTime": "06:15 AM",
    "arrivalTime": "08:50 AM",
    "duration": "2h 35m",
    "capacity": 180,
    "availableSeats": 45,
    "price": 4850,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-fl-02",
    "type": "FLIGHT",
    "provider": "Air India AI-843",
    "origin": "Mumbai",
    "destination": "Goa",
    "departureTime": "09:40 AM",
    "arrivalTime": "11:00 AM",
    "duration": "1h 20m",
    "capacity": 160,
    "availableSeats": 32,
    "price": 3600,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-fl-03",
    "type": "FLIGHT",
    "provider": "Emirates EK-501",
    "origin": "Mumbai",
    "destination": "Dubai",
    "departureTime": "04:30 AM",
    "arrivalTime": "06:15 AM",
    "duration": "3h 15m",
    "capacity": 350,
    "availableSeats": 64,
    "price": 18500,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-fl-03b",
    "type": "FLIGHT",
    "provider": "Flydubai FZ-436",
    "origin": "Delhi",
    "destination": "Dubai",
    "departureTime": "09:20 AM",
    "arrivalTime": "11:55 AM",
    "duration": "4h 05m",
    "capacity": 180,
    "availableSeats": 28,
    "price": 16200,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-fl-05",
    "type": "FLIGHT",
    "provider": "IndiGo 6E-205",
    "origin": "Bengaluru",
    "destination": "Kerala",
    "departureTime": "08:15 AM",
    "arrivalTime": "09:25 AM",
    "duration": "1h 10m",
    "capacity": 180,
    "availableSeats": 38,
    "price": 2800,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-fl-06",
    "type": "FLIGHT",
    "provider": "Singapore Airlines SQ-401",
    "origin": "Delhi",
    "destination": "Singapore",
    "departureTime": "09:50 AM",
    "arrivalTime": "06:05 PM",
    "duration": "5h 45m",
    "capacity": 300,
    "availableSeats": 52,
    "price": 24500,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-fl-07",
    "type": "FLIGHT",
    "provider": "Air France AF-225",
    "origin": "Delhi",
    "destination": "Paris",
    "departureTime": "01:25 AM",
    "arrivalTime": "06:40 AM",
    "duration": "8h 45m",
    "capacity": 280,
    "availableSeats": 41,
    "price": 48000,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-fl-08",
    "type": "FLIGHT",
    "provider": "All Nippon Airways (ANA) NH-838",
    "origin": "Delhi",
    "destination": "Tokyo",
    "departureTime": "07:00 PM",
    "arrivalTime": "06:20 AM (+1)",
    "duration": "7h 50m",
    "capacity": 250,
    "availableSeats": 35,
    "price": 52000,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-fl-london",
    "type": "FLIGHT",
    "provider": "British Airways BA-142",
    "origin": "Delhi",
    "destination": "London",
    "departureTime": "03:15 AM",
    "arrivalTime": "07:50 AM",
    "duration": "9h 05m",
    "capacity": 290,
    "availableSeats": 44,
    "price": 49500,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-tr-01",
    "type": "TRAIN",
    "provider": "Vande Bharat Express (22229)",
    "origin": "Mumbai",
    "destination": "Goa",
    "departureTime": "05:25 AM",
    "arrivalTime": "01:10 PM",
    "duration": "7h 45m",
    "capacity": 530,
    "availableSeats": 64,
    "price": 1850,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-tr-04",
    "type": "TRAIN",
    "provider": "Vande Bharat Express (20977)",
    "origin": "Delhi",
    "destination": "Jaipur",
    "departureTime": "06:10 AM",
    "arrivalTime": "10:05 AM",
    "duration": "3h 55m",
    "capacity": 530,
    "availableSeats": 82,
    "price": 880,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-bus-01",
    "type": "BUS",
    "provider": "IntrCity SmartBus Multi-Axle Volvo",
    "origin": "Delhi",
    "destination": "Manali",
    "departureTime": "06:30 PM",
    "arrivalTime": "07:30 AM (+1)",
    "duration": "13h 00m",
    "capacity": 40,
    "availableSeats": 16,
    "price": 1650,
    "status": "AVAILABLE",
    "isDemo": true
  },
  {
    "id": "trans-bus-goa",
    "type": "BUS",
    "provider": "Zingbus AC Sleeper (2+1)",
    "origin": "Mumbai",
    "destination": "Goa",
    "departureTime": "08:00 PM",
    "arrivalTime": "08:30 AM (+1)",
    "duration": "12h 30m",
    "capacity": 36,
    "availableSeats": 14,
    "price": 1450,
    "status": "AVAILABLE"
  }
];

const activities = [
  {
    "id": "act-goa-scuba",
    "destinationId": "dest-goa",
    "name": "Grand Island Scuba Diving & Water Sports Combo",
    "description": "PADI-guided reef scuba dive, dolphin sightseeing boat cruise, jet-skiing, parasailing, and bumper rides at Baina Beach.",
    "duration": "6 Hours",
    "price": 2200,
    "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-goa-churches",
    "destinationId": "dest-goa",
    "name": "Old Goa Heritage Churches & Spice Plantation Feast Tour",
    "description": "Guided architectural exploration of Basilica of Bom Jesus, Se Cathedral, followed by a tropical Sahakari spice farm buffet lunch.",
    "duration": "5 Hours",
    "price": 1450,
    "imageUrl": "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-delhi-food",
    "destinationId": "dest-delhi",
    "name": "Old Delhi Chandni Chowk Food & Heritage Rickshaw Trail",
    "description": "Immersive culinary walk through historic Chandni Chowk, Paranthe Wali Gali, Khari Baoli spice market, and Jama Masjid with local food guide.",
    "duration": "3.5 Hours",
    "price": 1250,
    "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-delhi-monuments",
    "destinationId": "dest-delhi",
    "name": "UNESCO World Heritage Private Day Tour: Qutub, Humayun & Red Fort",
    "description": "Full-day chauffeured AC exploration of Delhi's premier Mughal and Sultanate landmarks with licensed archaeological guide.",
    "duration": "7 Hours",
    "price": 1800,
    "imageUrl": "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-mumbai-south",
    "destinationId": "dest-mumbai",
    "name": "South Mumbai Colonial Heritage & Art Deco Walking Tour",
    "description": "Fascinating walking narrative covering Gateway of India, Kala Ghoda Art Precinct, Chhatrapati Shivaji Maharaj Terminus, and Marine Drive.",
    "duration": "3 Hours",
    "price": 1200,
    "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-mumbai-elephanta",
    "destinationId": "dest-mumbai",
    "name": "Elephanta Caves UNESCO Island Speedboat Tour & Guide",
    "description": "Scenic 1-hour cruise across Mumbai harbor from Gateway of India to the 7th-century rock-cut Shiva cave temples with licensed guide.",
    "duration": "4.5 Hours",
    "price": 1950,
    "imageUrl": "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-jaipur-amber",
    "destinationId": "dest-jaipur",
    "name": "Amber Fort & Sheesh Mahal Guided Palace Tour with Royal Stepwell",
    "description": "Comprehensive guided discovery of the hilltop Amber Fort, mirror palace of Sheesh Mahal, and the mesmerizing Panna Meena Ka Kund stepwell.",
    "duration": "4 Hours",
    "price": 1400,
    "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-jaipur-bazaars",
    "destinationId": "dest-jaipur",
    "name": "Pink City Royal Bazaars, Hawa Mahal & Street Flavors Walk",
    "description": "Vibrant photo walk in front of Hawa Mahal, gemstone and bandhani silk bazaars of Johari Bazaar, and authentic Lassiwala tasting.",
    "duration": "3 Hours",
    "price": 950,
    "imageUrl": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-manali-paragliding",
    "destinationId": "dest-manali",
    "name": "Solang Valley High-Altitude Tandem Paragliding & Adventure",
    "description": "Fly high over snow-covered Himalayan peaks with professional certified pilot, plus thrilling quad-bike mountain rides.",
    "duration": "3 Hours",
    "price": 2800,
    "imageUrl": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-manali-jogini",
    "destinationId": "dest-manali",
    "name": "Jogini Waterfalls & Old Manali Pine Forest Alpine Trek",
    "description": "Guided nature hike through whispering cedar and pine woodlands to cascading Jogini falls with traditional Himachali herbal tea.",
    "duration": "4 Hours",
    "price": 1100,
    "imageUrl": "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-blr-palace",
    "destinationId": "dest-bengaluru",
    "name": "Bangalore Palace & Cubbon Park Botanical Guided Tour",
    "description": "Tudor-style royal Bangalore Palace walkthrough with audio guide, followed by a shaded botanical tree walk in historic Cubbon Park.",
    "duration": "3.5 Hours",
    "price": 1300,
    "imageUrl": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-blr-brewery",
    "destinationId": "dest-bengaluru",
    "name": "Bengaluru Craft Brewery & Gastronomic Food Trail",
    "description": "Curated evening tasting flight across 3 premier Indiranagar microbreweries with brewmaster tour and artisanal food pairings.",
    "duration": "4 Hours",
    "price": 1750,
    "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-kol-heritage",
    "destinationId": "dest-kolkata",
    "name": "Victoria Memorial, St. Paul's Cathedral & Howrah Bridge Walk",
    "description": "Classic architecture tour covering marble Victoria Memorial galleries, grand neo-Gothic St. Paul's, and sunset river walk beside Howrah Bridge.",
    "duration": "4 Hours",
    "price": 1100,
    "imageUrl": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-kol-culinary",
    "destinationId": "dest-kolkata",
    "name": "Historic Kolkata Tram Ride & Authentic Bengali Food Trail",
    "description": "Vintage heritage tram ride to College Street, tasting legendary kathi rolls, crispy phuchkas, and traditional rasgullas and sandesh.",
    "duration": "3.5 Hours",
    "price": 1250,
    "imageUrl": "https://images.unsplash.com/photo-1534777367038-a5048c861092?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-bbi-temples",
    "destinationId": "dest-bhubaneswar",
    "name": "Old Town Heritage Trail: Lingaraj, Mukteshwar & Rajarani Temples",
    "description": "Intimate guided walking tour across 1,000-year-old Kalinga architectural stone masterworks and sacred Bindusagar lake.",
    "duration": "3.5 Hours",
    "price": 950,
    "imageUrl": "https://images.unsplash.com/photo-1629813366051-b58137b2792c?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-bbi-caves",
    "destinationId": "dest-bhubaneswar",
    "name": "Khandagiri & Udayagiri Ancient Rock-Cut Jain Caves Exploration",
    "description": "Expert guided ascent through 2nd-century BCE rock-hewn caves, Emperor Kharavela's Hatigumpha inscription, and panoramic hill views.",
    "duration": "3 Hours",
    "price": 850,
    "imageUrl": "https://images.unsplash.com/photo-1600100397608-f010f445b955?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-ker-houseboat",
    "destinationId": "dest-kerala",
    "name": "Alleppey Houseboat Backwater Day Cruise & Traditional Sadya Feast",
    "description": "Traditional thatched Kerala houseboat cruising serene lagoons and coconut canals with authentic banana-leaf Sadya feast.",
    "duration": "5 Hours",
    "price": 3500,
    "imageUrl": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-ker-tea",
    "destinationId": "dest-kerala",
    "name": "Munnar Tea Plantations, Eravikulam Safari & Tea Museum Trek",
    "description": "Jeep safari to Eravikulam National Park to spot Nilgiri Tahr, walking through emerald tea gardens, and tea-tasting workshop.",
    "duration": "5.5 Hours",
    "price": 1600,
    "imageUrl": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-hyd-charminar",
    "destinationId": "dest-hyderabad",
    "name": "Charminar & Laad Bazaar Night Heritage Walk with Irani Chai",
    "description": "Atmospheric evening exploration around illuminated Charminar, Mecca Masjid, vibrant lacquer bangle shops, and authentic Irani Chai with Osmania biscuits.",
    "duration": "3 Hours",
    "price": 950,
    "imageUrl": "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-hyd-golconda",
    "destinationId": "dest-hyderabad",
    "name": "Golconda Fort Royal Heritage Guided Tour & Sound & Light Spectacle",
    "description": "Acoustic wonder exploration of the diamond fortress of Golconda with licensed historian, followed by sunset voice-and-light show.",
    "duration": "4.5 Hours",
    "price": 1350,
    "imageUrl": "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-dxb-safari",
    "destinationId": "dest-dubai",
    "name": "Premium Red Dunes Desert Safari with BBQ Dinner & Dune Bashing",
    "description": "4x4 Land Cruiser dune bashing in the Lahbab red desert, sandboarding, camel rides, falconry show, and sunset BBQ dinner under starlight.",
    "duration": "6 Hours",
    "price": 3800,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-dxb-burjkhalifa",
    "destinationId": "dest-dubai",
    "name": "Burj Khalifa 124th & 125th Floor Observation Deck Tickets",
    "description": "High-speed elevator ride to the summit observatory of the world's tallest building for 360-degree panoramic desert and sea vistas.",
    "duration": "2 Hours",
    "price": 3400,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-sin-gardens",
    "destinationId": "dest-singapore",
    "name": "Gardens by the Bay & Cloud Forest Flower Dome Pass",
    "description": "Explore the futuristic Supertree Grove, the world's largest glass greenhouse Flower Dome, and mist-filled Cloud Forest waterfall.",
    "duration": "3.5 Hours",
    "price": 2200,
    "imageUrl": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-sin-sentosa",
    "destinationId": "dest-singapore",
    "name": "Sentosa Island Cable Car & Universal Studios Singapore Pass",
    "description": "Scenic aerial cable car from Mount Faber across Singapore harbor straight into Universal Studios Singapore theme park rides.",
    "duration": "Full Day (8 Hours)",
    "price": 5600,
    "imageUrl": "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-par-eiffel",
    "destinationId": "dest-paris",
    "name": "Eiffel Tower Summit Access & Seine River Sunset Cruise",
    "description": "Priority elevator tickets to the topmost observation summit of the Eiffel Tower, followed by a romantic 1-hour cruise past Notre-Dame on the Seine.",
    "duration": "3.5 Hours",
    "price": 4200,
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-par-louvre",
    "destinationId": "dest-paris",
    "name": "Louvre Museum Priority Guided Tour: Mona Lisa & Masterpieces",
    "description": "Skip-the-line access with art historian visiting the Mona Lisa, Venus de Milo, Winged Victory of Samothrace, and French Crown Jewels.",
    "duration": "3 Hours",
    "price": 4800,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-lon-tower",
    "destinationId": "dest-london",
    "name": "Tower of London & Crown Jewels Tour with River Thames Boat Cruise",
    "description": "Early access to the Crown Jewels with Yeoman Warder Beefeater guide, the White Tower armory, and Thames sightseeing boat cruise to Westminster.",
    "duration": "4 Hours",
    "price": 3900,
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-lon-westminster",
    "destinationId": "dest-london",
    "name": "Westminster Abbey, Buckingham Palace & Changing of the Guard",
    "description": "Royal walking tour to witness the Changing of the Guard, royal parks of St James's, and full audio tour inside historic Westminster Abbey.",
    "duration": "3.5 Hours",
    "price": 2800,
    "imageUrl": "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-tok-teamlab",
    "destinationId": "dest-tokyo",
    "name": "TeamLab Planets Digital Art Museum & Tsukiji Outer Market Food Tour",
    "description": "Barefoot immersive digital art installations at teamLab Planets Toyosu, paired with fresh sushi and wagyu skewers at Tsukiji market.",
    "duration": "4.5 Hours",
    "price": 3600,
    "imageUrl": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  },
  {
    "id": "act-tok-fuji",
    "destinationId": "dest-tokyo",
    "name": "Mount Fuji 5th Station, Lake Kawaguchi & Hakone Ropeway Tour",
    "description": "Full-day luxury coach expedition to Mount Fuji's 5th station, scenic Lake Kawaguchi cruise, and volcanic Owakudani cable car.",
    "duration": "Full Day (10 Hours)",
    "price": 6800,
    "imageUrl": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=600&q=80",
    "isDemo": true
  }
];

module.exports = {
  isDemo,
  cancellationPolicies,
  destinations,
  hotels,
  transportationOptions,
  activities
};
