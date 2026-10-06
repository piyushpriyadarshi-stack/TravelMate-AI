// ==================================================
// TravelMate AI - Client Fallback & Demo Catalog Data
// Contains verified destinations, hotels, transportation options & activities
// ==================================================

export const isDemo = true;

export const cancellationPolicies = [
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

export const destinations = [
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

export const hotels = [
  {
    "id": "hotel-goa-taj-exotica",
    "destinationId": "dest-goa",
    "name": "Taj Exotica Resort & Spa, Goa",
    "city": "Benaulim",
    "state": "Goa",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Calwaddo, Benaulim, South Goa 403716, India",
    "address": "Calwaddo, Benaulim, South Goa 403716",
    "latitude": 15.2476,
    "longitude": 73.9272,
    "description": "Mediterranean-style 56-acre luxury beachfront sanctuary overlooking the Arabian Sea, featuring private beach access, a 9-hole executive golf course, Jiva Ayurvedic spa, and fine dining.",
    "shortDescription": "Mediterranean-style 56-acre beachfront sanctuary overlooking the Arabian Sea in Benaulim.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/taj-exotica-goa/",
    "phone": "+91 832 668 3333",
    "email": "exotica.goa@tajhotels.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 140,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 18500,
    "amenities": [
      "Private Beach Access",
      "Outdoor Swimming Pool",
      "Jiva Ayurvedic Spa",
      "Executive Golf Course",
      "Fine Dining Restaurants",
      "Free High-Speed Wi-Fi",
      "Fitness Centre",
      "Tennis Courts",
      "Room Service",
      "Airport Transfer"
    ],
    "roomTypes": [
      {
        "id": "room-goa-taj-dlx-garden",
        "name": "Deluxe Room Garden View",
        "type": "DELUXE",
        "description": "Spacious 56 sq.m room with Portuguese colonial architecture and private veranda facing landscaped gardens.",
        "maxGuests": 3,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "56 sq.m",
        "price": 18500,
        "pricePerNight": 18500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Private Balcony",
          "Air Conditioning",
          "Bathtub",
          "Mini Bar"
        ]
      },
      {
        "id": "room-goa-taj-villa-sea",
        "name": "Premium Villa Sea View",
        "type": "VILLA",
        "description": "Exclusive 116 sq.m private villa with plunge pool and panoramic views of the Arabian Sea.",
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "116 sq.m",
        "price": 34000,
        "pricePerNight": 34000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Plunge Pool",
          "Sea View",
          "Personal Butler",
          "Jiva Spa Amenities",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Taj Exotica Resort & Spa exterior beachfront view",
        "source": "Unsplash Licensed Hotel Photo"
      },
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "room",
        "alt": "Taj Exotica Resort luxury villa suite bedroom",
        "source": "Unsplash Licensed Hotel Photo"
      },
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "type": "pool",
        "alt": "Taj Exotica Resort beachfront infinity swimming pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/taj-exotica-goa/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-goa-taj-dlx-garden",
        "name": "Deluxe Room Garden View",
        "type": "DELUXE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "56 sq.m",
        "description": "Spacious 56 sq.m room with Portuguese colonial architecture and private veranda facing landscaped gardens.",
        "pricePerNight": 18500,
        "price": 18500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Private Balcony",
          "Air Conditioning",
          "Bathtub",
          "Mini Bar"
        ]
      },
      {
        "id": "room-goa-taj-villa-sea",
        "name": "Premium Villa Sea View",
        "type": "VILLA",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "116 sq.m",
        "description": "Exclusive 116 sq.m private villa with plunge pool and panoramic views of the Arabian Sea.",
        "pricePerNight": 34000,
        "price": 34000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Plunge Pool",
          "Sea View",
          "Personal Butler",
          "Jiva Spa Amenities",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-goa-itc-grand",
    "destinationId": "dest-goa",
    "name": "ITC Grand Goa, a Luxury Collection Resort & Spa",
    "city": "Cansaulim",
    "state": "Goa",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Arossim Beach Road, Cansaulim, South Goa 403712, India",
    "address": "Arossim Beach Road, Cansaulim, South Goa 403712",
    "latitude": 15.3408,
    "longitude": 73.8893,
    "description": "Sprawling 45-acre village-style resort nestled along pristine Arossim Beach featuring multi-level lagoon swimming pools, Kaya Kalp Spa, and traditional Goan architecture.",
    "shortDescription": "Sprawling 45-acre village-style resort along pristine Arossim Beach with lagoon pools.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.itchotels.com/in/en/itcgrandgoa-resort-and-spa",
    "phone": "+91 832 272 1234",
    "email": "reservations.itcgrandgoa@itchotels.in",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 252,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 16000,
    "amenities": [
      "Direct Beach Access",
      "Multi-Level Lagoon Pool",
      "Kaya Kalp Spa",
      "6 Dining Venues",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Kids Zone",
      "Concierge Service",
      "Airport Shuttle"
    ],
    "roomTypes": [
      {
        "id": "room-goa-itc-garden",
        "name": "Garden View Room with Patio",
        "type": "DELUXE",
        "description": "Elegant 45 sq.m room with sunken marble bathtub and private outdoor patio opening to verdant gardens.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "price": 16000,
        "pricePerNight": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Sunken Bathtub",
          "Private Patio",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-goa-itc-lagoon-suite",
        "name": "Sea View Lagoon Suite",
        "type": "SUITE",
        "description": "Opulent 85 sq.m suite overlooking tranquil water lagoons and the Arabian Sea.",
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "price": 28500,
        "pricePerNight": 28500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Sea View",
          "Living Area",
          "Lagoon Access",
          "Executive Lounge Access",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "ITC Grand Goa lagoon resort view",
        "source": "Unsplash Licensed Hotel Photo"
      },
      {
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "type": "room",
        "alt": "ITC Grand Goa premium room patio",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.itchotels.com/in/en/itcgrandgoa-resort-and-spa",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-goa-itc-garden",
        "name": "Garden View Room with Patio",
        "type": "DELUXE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "description": "Elegant 45 sq.m room with sunken marble bathtub and private outdoor patio opening to verdant gardens.",
        "pricePerNight": 16000,
        "price": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Sunken Bathtub",
          "Private Patio",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-goa-itc-lagoon-suite",
        "name": "Sea View Lagoon Suite",
        "type": "SUITE",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "description": "Opulent 85 sq.m suite overlooking tranquil water lagoons and the Arabian Sea.",
        "pricePerNight": 28500,
        "price": 28500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Sea View",
          "Living Area",
          "Lagoon Access",
          "Executive Lounge Access",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-goa-alila-diwa",
    "destinationId": "dest-goa",
    "name": "Alila Diwa Goa",
    "city": "Majorda",
    "state": "Goa",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "48/10, Adao Waddo, Majorda, Salcete, South Goa 403713, India",
    "address": "48/10, Adao Waddo, Majorda, South Goa 403713",
    "latitude": 15.3129,
    "longitude": 73.9137,
    "description": "Contemporary eco-luxury resort surrounded by lush emerald paddy fields near Gonsua Beach, featuring iconic infinity edge swimming pool and Spa Alila.",
    "shortDescription": "Eco-luxury sanctuary bordered by lush emerald paddy fields near Majorda Beach.",
    "category": "LUXURY",
    "rating": 4.6,
    "officialWebsite": "https://www.hyatt.com/alila/alila-diwa-goa",
    "phone": "+91 832 274 6800",
    "email": "diwagoa@alilahotels.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 153,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 13500,
    "amenities": [
      "Paddy-Field Infinity Pool",
      "Spa Alila",
      "Free Shuttle to Beach",
      "Fine Dining Bistro",
      "Free Wi-Fi",
      "Fitness Centre",
      "Yoga Pavilions",
      "Kids Pool & Club"
    ],
    "roomTypes": [
      {
        "id": "room-goa-alila-terrace",
        "name": "Terrace Room",
        "type": "DELUXE",
        "description": "Refined 44 sq.m room featuring private balcony overlooking the resort's tranquil waterways.",
        "maxGuests": 3,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "44 sq.m",
        "price": 13500,
        "pricePerNight": 13500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Balcony",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Mini Bar",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-goa-alila-diwa-club",
        "name": "Diwa Club Room",
        "type": "CLUB",
        "description": "Exclusive 66 sq.m club enclave room with access to private lap pool and bespoke butler hospitality.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "66 sq.m",
        "price": 21000,
        "pricePerNight": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Club Pool Access",
          "Private Veranda",
          "Express Check-in",
          "Afternoon Tea",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Alila Diwa Goa infinity pool overlooking paddy fields",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/alila/alila-diwa-goa",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-goa-alila-terrace",
        "name": "Terrace Room",
        "type": "DELUXE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "44 sq.m",
        "description": "Refined 44 sq.m room featuring private balcony overlooking the resort's tranquil waterways.",
        "pricePerNight": 13500,
        "price": 13500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Balcony",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Mini Bar",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-goa-alila-diwa-club",
        "name": "Diwa Club Room",
        "type": "CLUB",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "66 sq.m",
        "description": "Exclusive 66 sq.m club enclave room with access to private lap pool and bespoke butler hospitality.",
        "pricePerNight": 21000,
        "price": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Club Pool Access",
          "Private Veranda",
          "Express Check-in",
          "Afternoon Tea",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-goa-w-goa",
    "destinationId": "dest-goa",
    "name": "W Goa",
    "city": "Vagator",
    "state": "Goa",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Vagator Beach, Bardez, North Goa 403509, India",
    "address": "Vagator Beach, Bardez, North Goa 403509",
    "latitude": 15.5979,
    "longitude": 73.7381,
    "description": "Vibrant clifftop luxury retreat perched above Vagator Beach and historical Chapora Fort, known for Rockpool sunset lounge and AWAY Spa.",
    "shortDescription": "Vibrant luxury haven perched on the secluded shores of Vagator Beach.",
    "category": "LUXURY",
    "rating": 4.5,
    "officialWebsite": "https://www.marriott.com/hotels/travel/goiwh-w-goa/",
    "phone": "+91 832 671 8888",
    "email": "w.goa@whotels.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 160,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 21500,
    "amenities": [
      "Rockpool Clifftop Lounge",
      "WET Outdoor Pool",
      "AWAY Spa",
      "Direct Beach Access",
      "FIT Gym",
      "Free High-Speed Wi-Fi",
      "24/7 Room Service",
      "Pet Friendly"
    ],
    "roomTypes": [
      {
        "id": "room-goa-w-wonderful",
        "name": "Wonderful Room",
        "type": "DELUXE",
        "description": "Chic 42 sq.m guestroom with vibrant psychedelic decor, signature W king bed, and private sit-out.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "price": 21500,
        "pricePerNight": 21500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Signature W Bed",
          "Private Sit-out",
          "Bose Sound System",
          "Rain Shower",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-goa-w-villa",
        "name": "Marvelous Villa with Plunge Pool",
        "type": "VILLA",
        "description": "Expansive 200 sq.m standalone villa boasting private rooftop terrace and personal plunge pool.",
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "200 sq.m",
        "price": 45000,
        "pricePerNight": 45000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Plunge Pool",
          "Rooftop Terrace",
          "Ocean Horizon View",
          "Cocktail Bar Setup"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "W Goa cliffside pool and lounge",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/goiwh-w-goa/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-goa-w-wonderful",
        "name": "Wonderful Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "description": "Chic 42 sq.m guestroom with vibrant psychedelic decor, signature W king bed, and private sit-out.",
        "pricePerNight": 21500,
        "price": 21500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Signature W Bed",
          "Private Sit-out",
          "Bose Sound System",
          "Rain Shower",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-goa-w-villa",
        "name": "Marvelous Villa with Plunge Pool",
        "type": "VILLA",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "200 sq.m",
        "description": "Expansive 200 sq.m standalone villa boasting private rooftop terrace and personal plunge pool.",
        "pricePerNight": 45000,
        "price": 45000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Plunge Pool",
          "Rooftop Terrace",
          "Ocean Horizon View",
          "Cocktail Bar Setup"
        ]
      }
    ]
  },
  {
    "id": "hotel-goa-holiday-inn",
    "destinationId": "dest-goa",
    "name": "Holiday Inn Resort Goa",
    "city": "Cavelossim",
    "state": "Goa",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Mobor Beach, Cavelossim, South Goa 403731, India",
    "address": "Mobor Beach, Cavelossim, South Goa 403731",
    "latitude": 15.1587,
    "longitude": 73.9439,
    "description": "Beachfront 25-acre resort located on tranquil Mobor Beach, combining traditional Goan and colonial design with family-friendly amenities and water sports.",
    "shortDescription": "Family-friendly beach retreat on peaceful Mobor Beach in Cavelossim.",
    "category": "FOUR_STAR",
    "rating": 4.4,
    "officialWebsite": "https://www.ihg.com/holidayinnresorts/hotels/us/en/goa/goahi/hoteldetail",
    "phone": "+91 832 287 0000",
    "email": "reservation@holidayinngoa.com",
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "totalRooms": 205,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 8500,
    "amenities": [
      "Direct Beach Access",
      "Swimming Pool",
      "Ayurvedic Center",
      "Multi-cuisine Restaurants",
      "Free Wi-Fi",
      "Tennis Court",
      "Fitness Center",
      "Kids Activity Zone"
    ],
    "roomTypes": [
      {
        "id": "room-goa-holiday-plaza",
        "name": "Plaza Garden View Room",
        "type": "DOUBLE",
        "description": "Cozy 34 sq.m room with garden-facing balcony and essential beach resort comforts.",
        "maxGuests": 2,
        "bedType": "1 Queen Bed or 2 Twin Beds",
        "roomSize": "34 sq.m",
        "price": 8500,
        "pricePerNight": 8500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Garden Balcony",
          "Air Conditioning",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-goa-holiday-deluxe-sea",
        "name": "Deluxe Sea Facing Room",
        "type": "DELUXE",
        "description": "Comfortable 38 sq.m room offering direct vistas of the Arabian Sea.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "price": 12500,
        "pricePerNight": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Sea View",
          "Private Balcony",
          "Mini Fridge",
          "En-suite Bath"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Holiday Inn Resort Goa coastal lawns",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.ihg.com/holidayinnresorts/hotels/us/en/goa/goahi/hoteldetail",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-goa-holiday-plaza",
        "name": "Plaza Garden View Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Queen Bed or 2 Twin Beds",
        "roomSize": "34 sq.m",
        "description": "Cozy 34 sq.m room with garden-facing balcony and essential beach resort comforts.",
        "pricePerNight": 8500,
        "price": 8500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Garden Balcony",
          "Air Conditioning",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-goa-holiday-deluxe-sea",
        "name": "Deluxe Sea Facing Room",
        "type": "DELUXE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "description": "Comfortable 38 sq.m room offering direct vistas of the Arabian Sea.",
        "pricePerNight": 12500,
        "price": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Sea View",
          "Private Balcony",
          "Mini Fridge",
          "En-suite Bath"
        ]
      }
    ]
  },
  {
    "id": "hotel-goa-grand-hyatt",
    "destinationId": "dest-goa",
    "name": "Grand Hyatt Goa",
    "city": "Bambolim",
    "state": "Goa",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "P.O. Goa University, Bambolim, North Goa 403206, India",
    "address": "P.O. Goa University, Bambolim, North Goa 403206",
    "latitude": 15.4526,
    "longitude": 73.8557,
    "description": "Palatial 17th-century Indo-Portuguese inspired 28-acre waterfront resort on calm Bambolim Bay, featuring Shamana Spa, freeform outdoor pool, and signature dining.",
    "shortDescription": "Palatial 28-acre Indo-Portuguese estate fronting tranquil Bambolim Bay.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.hyatt.com/grand-hyatt/goagh-grand-hyatt-goa",
    "phone": "+91 832 710 1234",
    "email": "goa.grand@hyatt.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 313,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 17000,
    "amenities": [
      "Bayfront Access",
      "Free-form Swimming Pool",
      "Indoor Lap Pool",
      "Shamana Spa",
      "5 Dining Venues",
      "Free Wi-Fi",
      "Fitness Center",
      "Adventure Park & Zipline"
    ],
    "roomTypes": [
      {
        "id": "room-goa-gh-standard",
        "name": "Grand King Room with Balcony",
        "type": "DELUXE",
        "description": "50 sq.m room with custom teak furnishings and balcony looking out onto landscaped gardens.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "50 sq.m",
        "price": 17000,
        "pricePerNight": 17000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Whirlpool Tub",
          "Balcony",
          "Work Desk",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-goa-gh-bay-suite",
        "name": "Grand Suite with Bay View",
        "type": "SUITE",
        "description": "100 sq.m luxury suite featuring a separate living room, oversized bathroom, and panoramic bay panoramas.",
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "100 sq.m",
        "price": 31000,
        "pricePerNight": 31000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Bay View",
          "Grand Club Access",
          "Private Whirlpool",
          "Separate Living Room"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Grand Hyatt Goa palatial bayfront estate",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/grand-hyatt/goagh-grand-hyatt-goa",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-goa-gh-standard",
        "name": "Grand King Room with Balcony",
        "type": "DELUXE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "50 sq.m",
        "description": "50 sq.m room with custom teak furnishings and balcony looking out onto landscaped gardens.",
        "pricePerNight": 17000,
        "price": 17000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Whirlpool Tub",
          "Balcony",
          "Work Desk",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-goa-gh-bay-suite",
        "name": "Grand Suite with Bay View",
        "type": "SUITE",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "100 sq.m",
        "description": "100 sq.m luxury suite featuring a separate living room, oversized bathroom, and panoramic bay panoramas.",
        "pricePerNight": 31000,
        "price": 31000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Bay View",
          "Grand Club Access",
          "Private Whirlpool",
          "Separate Living Room"
        ]
      }
    ]
  },
  {
    "id": "hotel-goa-novotel-resort",
    "destinationId": "dest-goa",
    "name": "Novotel Goa Resort & Spa",
    "city": "Candolim",
    "state": "Goa",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Pinto Waddo, Off Candolim Road, Candolim, North Goa 403515, India",
    "address": "Pinto Waddo, Off Candolim Road, Candolim, North Goa 403515",
    "latitude": 15.5222,
    "longitude": 73.7694,
    "description": "Relaxed lifestyle resort nestled in Candolim close to North Goa beaches and night markets, offering vitality pool, Warren Tricomi Spa, and swim-up bar.",
    "shortDescription": "Chic contemporary retreat located moments from Candolim Beach and dining strips.",
    "category": "FOUR_STAR",
    "rating": 4.3,
    "officialWebsite": "https://all.accor.com/hotel/8855/index.en.shtml",
    "phone": "+91 832 711 2424",
    "email": "h8855-re@accor.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 121,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 7200,
    "amenities": [
      "Swimming Pool with Swim-up Bar",
      "Warren Tricomi Spa",
      "Free Beach Shuttle",
      "All-Day Dining Restaurant",
      "Free Wi-Fi",
      "Fitness Center",
      "Kids Play Area"
    ],
    "roomTypes": [
      {
        "id": "room-goa-novotel-sup",
        "name": "Superior King Room",
        "type": "DOUBLE",
        "description": "Modern 33 sq.m room with private balcony overlooking the vitality pool or hill greenery.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "33 sq.m",
        "price": 7200,
        "pricePerNight": 7200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Pool View Balcony",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-goa-novotel-suite",
        "name": "Junior Suite",
        "type": "SUITE",
        "description": "Spacious 54 sq.m suite with master bedroom, seating lounge, and upgraded bath amenities.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "54 sq.m",
        "price": 11800,
        "pricePerNight": 11800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Living Area",
          "Balcony",
          "Espresso Machine",
          "Bathtub"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Novotel Goa Resort pool deck",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://all.accor.com/hotel/8855/index.en.shtml",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-goa-novotel-sup",
        "name": "Superior King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "33 sq.m",
        "description": "Modern 33 sq.m room with private balcony overlooking the vitality pool or hill greenery.",
        "pricePerNight": 7200,
        "price": 7200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Pool View Balcony",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-goa-novotel-suite",
        "name": "Junior Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "54 sq.m",
        "description": "Spacious 54 sq.m suite with master bedroom, seating lounge, and upgraded bath amenities.",
        "pricePerNight": 11800,
        "price": 11800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Living Area",
          "Balcony",
          "Espresso Machine",
          "Bathtub"
        ]
      }
    ]
  },
  {
    "id": "hotel-goa-radisson-candolim",
    "destinationId": "dest-goa",
    "name": "Radisson Goa Candolim",
    "city": "Candolim",
    "state": "Goa",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Bammonvaddo, Candolim, Bardez, North Goa 403515, India",
    "address": "Bammonvaddo, Candolim, North Goa 403515",
    "latitude": 15.5161,
    "longitude": 73.7656,
    "description": "Centrally located Candolim hotel just 500 meters from golden Candolim Beach, offering contemporary rooms, outdoor pool, and Palms multi-cuisine restaurant.",
    "shortDescription": "Contemporary hotel located a short walk from Candolim Beach and coastal nightlife.",
    "category": "FOUR_STAR",
    "rating": 4.2,
    "officialWebsite": "https://www.radissonhotels.com/en-us/hotels/radisson-resort-goa-candolim",
    "phone": "+91 832 671 9999",
    "email": "reservations.candolim@radisson.com",
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "totalRooms": 78,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 6400,
    "amenities": [
      "Outdoor Swimming Pool",
      "Restaurant & Bar",
      "Walking Distance to Beach",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Airport Transfer Available",
      "24/7 Front Desk"
    ],
    "roomTypes": [
      {
        "id": "room-goa-rad-superior",
        "name": "Superior Room",
        "type": "DOUBLE",
        "description": "Well-appointed 30 sq.m room with modern amenities, work desk, and balcony.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "30 sq.m",
        "price": 6400,
        "pricePerNight": 6400,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Balcony",
          "Coffee Maker",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-goa-rad-deluxe",
        "name": "Deluxe Pool View Room",
        "type": "DELUXE",
        "description": "34 sq.m room with private balcony overlooking the courtyard swimming pool.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "34 sq.m",
        "price": 8200,
        "pricePerNight": 8200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Pool View",
          "Balcony",
          "Free Wi-Fi",
          "Mini Bar"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Radisson Goa Candolim courtyard and pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.radissonhotels.com/en-us/hotels/radisson-resort-goa-candolim",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-goa-rad-superior",
        "name": "Superior Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "30 sq.m",
        "description": "Well-appointed 30 sq.m room with modern amenities, work desk, and balcony.",
        "pricePerNight": 6400,
        "price": 6400,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Balcony",
          "Coffee Maker",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-goa-rad-deluxe",
        "name": "Deluxe Pool View Room",
        "type": "DELUXE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "34 sq.m",
        "description": "34 sq.m room with private balcony overlooking the courtyard swimming pool.",
        "pricePerNight": 8200,
        "price": 8200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Pool View",
          "Balcony",
          "Free Wi-Fi",
          "Mini Bar"
        ]
      }
    ]
  },
  {
    "id": "hotel-delhi-taj-palace",
    "destinationId": "dest-delhi",
    "name": "Taj Palace, New Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "2 Sardar Patel Marg, Diplomatic Enclave, Chanakyapuri, New Delhi 110021, India",
    "address": "2 Sardar Patel Marg, Diplomatic Enclave, Chanakyapuri, New Delhi 110021",
    "latitude": 28.596,
    "longitude": 77.1728,
    "description": "Iconic 6-acre luxury hotel in Chanakyapuri Diplomatic Enclave, surrounded by verdant ridge forest. Home to Orient Express restaurant and Jiva Spa.",
    "shortDescription": "Iconic 6-acre luxury hotel in Chanakyapuri Diplomatic Enclave surrounded by lush ridge forest.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/taj-palace-new-delhi/",
    "phone": "+91 11 2611 0202",
    "email": "palace.delhi@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 403,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 14500,
    "amenities": [
      "Outdoor Swimming Pool",
      "Jiva Spa",
      "Orient Express Fine Dining",
      "Fitness Center & Sauna",
      "Free High-Speed Wi-Fi",
      "Executive Club Lounge",
      "Airport Chauffeur",
      "Business Center"
    ],
    "roomTypes": [
      {
        "id": "room-delhi-taj-sup",
        "name": "Superior Room City View",
        "type": "DELUXE",
        "description": "Classic 38 sq.m room with Indian heritage accents, plush bedding, and panoramic garden views.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "38 sq.m",
        "price": 14500,
        "pricePerNight": 14500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Marble Bathroom",
          "Air Conditioning",
          "Electronic Safe"
        ]
      },
      {
        "id": "room-delhi-taj-taj-club",
        "name": "Taj Club Executive Room",
        "type": "EXECUTIVE",
        "description": "45 sq.m premium room with exclusive Taj Club Lounge access, complimentary cocktails, and butler service.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "price": 21000,
        "pricePerNight": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Club Lounge Access",
          "Airport Transfer",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Taj Palace New Delhi grand entrance",
        "source": "Unsplash Licensed Hotel Photo"
      },
      {
        "url": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
        "type": "room",
        "alt": "Taj Palace New Delhi luxury suite",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/taj-palace-new-delhi/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-delhi-taj-sup",
        "name": "Superior Room City View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "38 sq.m",
        "description": "Classic 38 sq.m room with Indian heritage accents, plush bedding, and panoramic garden views.",
        "pricePerNight": 14500,
        "price": 14500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Marble Bathroom",
          "Air Conditioning",
          "Electronic Safe"
        ]
      },
      {
        "id": "room-delhi-taj-taj-club",
        "name": "Taj Club Executive Room",
        "type": "EXECUTIVE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "description": "45 sq.m premium room with exclusive Taj Club Lounge access, complimentary cocktails, and butler service.",
        "pricePerNight": 21000,
        "price": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Club Lounge Access",
          "Airport Transfer",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-delhi-taj-mahal",
    "destinationId": "dest-delhi",
    "name": "Taj Mahal, New Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "1 Man Singh Road, New Delhi 110011, India",
    "address": "1 Man Singh Road, New Delhi 110011",
    "latitude": 28.6045,
    "longitude": 77.2244,
    "description": "The distinguished 'Number One Mansingh' in Lutyens' Delhi near India Gate, renowned for Mughal architecture, Machan 24-hour restaurant, and House of Ming.",
    "shortDescription": "Distinguished heritage landmark in Lutyens' Delhi near India Gate.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/taj-mahal-new-delhi/",
    "phone": "+91 11 6651 3151",
    "email": "mahal.delhi@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 294,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 16000,
    "amenities": [
      "Swimming Pool",
      "Machan & House of Ming Dining",
      "The Chambers Private Club",
      "Jiva Spa",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Valet Parking"
    ],
    "roomTypes": [
      {
        "id": "room-delhi-tm-deluxe",
        "name": "Deluxe Room",
        "type": "DELUXE",
        "description": "33 sq.m reimagined guestroom paying homage to the Mughal era with modern marble bathroom.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "33 sq.m",
        "price": 16000,
        "pricePerNight": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Lutyens View",
          "Rain Shower",
          "Smart TV"
        ]
      },
      {
        "id": "room-delhi-tm-suite",
        "name": "Luxury Suite",
        "type": "SUITE",
        "description": "65 sq.m grand suite with antique artifact decor, living room, and Lutyens city views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "price": 29500,
        "pricePerNight": 29500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Separate Living Room",
          "India Gate View",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Taj Mahal Hotel New Delhi facade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/taj-mahal-new-delhi/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-delhi-tm-deluxe",
        "name": "Deluxe Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "33 sq.m",
        "description": "33 sq.m reimagined guestroom paying homage to the Mughal era with modern marble bathroom.",
        "pricePerNight": 16000,
        "price": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Lutyens View",
          "Rain Shower",
          "Smart TV"
        ]
      },
      {
        "id": "room-delhi-tm-suite",
        "name": "Luxury Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "description": "65 sq.m grand suite with antique artifact decor, living room, and Lutyens city views.",
        "pricePerNight": 29500,
        "price": 29500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Separate Living Room",
          "India Gate View",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-delhi-itc-maurya",
    "destinationId": "dest-delhi",
    "name": "ITC Maurya, a Luxury Collection Hotel",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Diplomatic Enclave, Sardar Patel Marg, Chanakyapuri, New Delhi 110021, India",
    "address": "Diplomatic Enclave, Sardar Patel Marg, New Delhi 110021",
    "latitude": 28.5978,
    "longitude": 77.1741,
    "description": "Prestigious address hosting global heads of state, inspired by Mauryan art and home to the world-famous Bukhara and Dum Pukht restaurants.",
    "shortDescription": "Historic Chanakyapuri hotel home to world-renowned Bukhara and Mauryan architecture.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.itchotels.com/in/en/itcmaurya-new-delhi",
    "phone": "+91 11 2611 2233",
    "email": "reservations.itcmaurya@itchotels.in",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 437,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 15500,
    "amenities": [
      "Bukhara & Dum Pukht Dining",
      "Outdoor Swimming Pool",
      "Kaya Kalp Spa",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Art Gallery Collection",
      "Executive Business Lounge"
    ],
    "roomTypes": [
      {
        "id": "room-delhi-itc-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "description": "32 sq.m business sanctuary with ergonomic workstation and plush luxury collection bed.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "32 sq.m",
        "price": 15500,
        "pricePerNight": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Ergonomic Desk",
          "Four-Fixture Bath",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-delhi-itc-towers",
        "name": "ITC One Luxury Suite",
        "type": "SUITE",
        "description": "56 sq.m state-of-the-art suite with dedicated butler service and private lounge access.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "56 sq.m",
        "price": 26000,
        "pricePerNight": 26000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Lounge Access",
          "Dedicated Butler",
          "Deep Soaking Tub",
          "High Floor Ridge View"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "ITC Maurya New Delhi architecture",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.itchotels.com/in/en/itcmaurya-new-delhi",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-delhi-itc-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "32 sq.m",
        "description": "32 sq.m business sanctuary with ergonomic workstation and plush luxury collection bed.",
        "pricePerNight": 15500,
        "price": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Ergonomic Desk",
          "Four-Fixture Bath",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-delhi-itc-towers",
        "name": "ITC One Luxury Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "56 sq.m",
        "description": "56 sq.m state-of-the-art suite with dedicated butler service and private lounge access.",
        "pricePerNight": 26000,
        "price": 26000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Lounge Access",
          "Dedicated Butler",
          "Deep Soaking Tub",
          "High Floor Ridge View"
        ]
      }
    ]
  },
  {
    "id": "hotel-delhi-leela-palace",
    "destinationId": "dest-delhi",
    "name": "The Leela Palace New Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Diplomatic Enclave, Chanakyapuri, New Delhi 110023, India",
    "address": "Diplomatic Enclave, Chanakyapuri, New Delhi 110023",
    "latitude": 28.5796,
    "longitude": 77.1873,
    "description": "Modern palace blending Lutyens architecture with royal Indian heritage, featuring rooftop temperature-controlled infinity pool, Le Cirque, and MEGU.",
    "shortDescription": "Modern royal palace in Chanakyapuri with rooftop infinity pool and Michelin-pedigree dining.",
    "category": "LUXURY",
    "rating": 4.9,
    "officialWebsite": "https://www.theleela.com/the-leela-palace-new-delhi",
    "phone": "+91 11 3933 1234",
    "email": "reservations@theleela.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 254,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 19500,
    "amenities": [
      "Rooftop Infinity Swimming Pool",
      "The Spa by ESPA",
      "Le Cirque & MEGU Restaurants",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Fitness Studio",
      "Rolls-Royce Chauffeur Fleet"
    ],
    "roomTypes": [
      {
        "id": "room-delhi-leela-grande",
        "name": "Grande Deluxe Room",
        "type": "DELUXE",
        "description": "51 sq.m expansive palace room with gold-leaf vaulted ceilings and Italian marble bathroom.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "51 sq.m",
        "price": 19500,
        "pricePerNight": 19500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Espresso Machine",
          "Walk-in Wardrobe",
          "Deep Soaking Tub"
        ]
      },
      {
        "id": "room-delhi-leela-royal",
        "name": "Royal Suite with Plunge Pool",
        "type": "SUITE",
        "description": "140 sq.m ultra-luxury royal suite with separate living salon, dining area, and dedicated butler.",
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "140 sq.m",
        "price": 52000,
        "pricePerNight": 52000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Jacuzzi",
          "Dedicated Butler",
          "Dining Room",
          "Airport Limousine"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Leela Palace New Delhi grandeur",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.theleela.com/the-leela-palace-new-delhi",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-delhi-leela-grande",
        "name": "Grande Deluxe Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "51 sq.m",
        "description": "51 sq.m expansive palace room with gold-leaf vaulted ceilings and Italian marble bathroom.",
        "pricePerNight": 19500,
        "price": 19500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Espresso Machine",
          "Walk-in Wardrobe",
          "Deep Soaking Tub"
        ]
      },
      {
        "id": "room-delhi-leela-royal",
        "name": "Royal Suite with Plunge Pool",
        "type": "SUITE",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "140 sq.m",
        "description": "140 sq.m ultra-luxury royal suite with separate living salon, dining area, and dedicated butler.",
        "pricePerNight": 52000,
        "price": 52000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Jacuzzi",
          "Dedicated Butler",
          "Dining Room",
          "Airport Limousine"
        ]
      }
    ]
  },
  {
    "id": "hotel-delhi-oberoi",
    "destinationId": "dest-delhi",
    "name": "The Oberoi, New Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Dr Zakir Hussain Marg, New Delhi 110003, India",
    "address": "Dr Zakir Hussain Marg, New Delhi 110003",
    "latitude": 28.6015,
    "longitude": 77.2384,
    "description": "Centrally positioned overlooking the UNESCO World Heritage Delhi Golf Course and Humayun's Tomb, equipped with clean air technology, Omya, and Cirrus9 rooftop bar.",
    "shortDescription": "Ultra-luxury hotel overlooking Delhi Golf Course with clean-air filtration technology.",
    "category": "LUXURY",
    "rating": 4.9,
    "officialWebsite": "https://www.oberoihotels.com/hotels-in-delhi/",
    "phone": "+91 11 2436 3030",
    "email": "reservations.delhi@oberoihotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 220,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 20000,
    "amenities": [
      "Clean Air Filtration System",
      "Indoor & Outdoor Pools",
      "The Oberoi Spa",
      "Omya & Baoshuan Fine Dining",
      "Cirrus9 Rooftop Lounge",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service"
    ],
    "roomTypes": [
      {
        "id": "room-delhi-oberoi-dlx",
        "name": "Deluxe Room Golf View",
        "type": "DELUXE",
        "description": "55 sq.m spacious room with floor-to-ceiling windows framing green views of the Delhi Golf Course.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "price": 20000,
        "pricePerNight": 20000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Golf View",
          "Air Quality Guarantee",
          "Deep Soak Tub",
          "Butler Service"
        ]
      },
      {
        "id": "room-delhi-oberoi-prem-suite",
        "name": "Premier Suite",
        "type": "SUITE",
        "description": "90 sq.m corner suite with separate living and dining quarters overlooking Humayun's Tomb gardens.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "price": 38000,
        "pricePerNight": 38000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Humayun's Tomb View",
          "Living & Dining Area",
          "24/7 Butler",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Oberoi New Delhi golf view",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.oberoihotels.com/hotels-in-delhi/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-delhi-oberoi-dlx",
        "name": "Deluxe Room Golf View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "description": "55 sq.m spacious room with floor-to-ceiling windows framing green views of the Delhi Golf Course.",
        "pricePerNight": 20000,
        "price": 20000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Golf View",
          "Air Quality Guarantee",
          "Deep Soak Tub",
          "Butler Service"
        ]
      },
      {
        "id": "room-delhi-oberoi-prem-suite",
        "name": "Premier Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "description": "90 sq.m corner suite with separate living and dining quarters overlooking Humayun's Tomb gardens.",
        "pricePerNight": 38000,
        "price": 38000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Humayun's Tomb View",
          "Living & Dining Area",
          "24/7 Butler",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-delhi-andaz",
    "destinationId": "dest-delhi",
    "name": "Andaz Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Asset No. 1, Aerocity, New Delhi 110037, India",
    "address": "Asset No. 1, Aerocity, New Delhi 110037",
    "latitude": 28.5508,
    "longitude": 77.1215,
    "description": "Modern luxury lifestyle hotel in Delhi Aerocity near IGI Airport, featuring 401 unique Delhi-inspired art pieces, AnnaMaya foodhall, and Juniper Bar.",
    "shortDescription": "Vibrant lifestyle property in Aerocity near IGI Airport celebrating local Delhi culture.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.hyatt.com/andaz/delaz-andaz-delhi",
    "phone": "+91 11 4903 1234",
    "email": "delhi.andaz@hyatt.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 401,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 11000,
    "amenities": [
      "Outdoor Pool",
      "AnnaMaya Artisan Foodhall",
      "Juniper Gin Bar",
      "Andaz Spa",
      "Free High-Speed Wi-Fi",
      "Airport Shuttle (Close Proximity)",
      "24-Hour Fitness Studio"
    ],
    "roomTypes": [
      {
        "id": "room-delhi-andaz-king",
        "name": "Andaz King Room",
        "type": "DELUXE",
        "description": "39 sq.m contemporary room featuring bespoke artwork and floor-to-ceiling soundproof windows.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "39 sq.m",
        "price": 11000,
        "pricePerNight": 11000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Walk-in Shower",
          "Complimentary Non-Alcoholic Minibar",
          "Soundproof Windows"
        ]
      },
      {
        "id": "room-delhi-andaz-suite",
        "name": "Andaz Courtyard Suite",
        "type": "SUITE",
        "description": "74 sq.m open-concept designer suite overlooking the central water courtyard.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "74 sq.m",
        "price": 19000,
        "pricePerNight": 19000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Courtyard View",
          "Living Lounge",
          "Bathtub",
          "Espresso Machine"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Andaz Delhi Aerocity courtyard",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/andaz/delaz-andaz-delhi",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-delhi-andaz-king",
        "name": "Andaz King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "39 sq.m",
        "description": "39 sq.m contemporary room featuring bespoke artwork and floor-to-ceiling soundproof windows.",
        "pricePerNight": 11000,
        "price": 11000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Walk-in Shower",
          "Complimentary Non-Alcoholic Minibar",
          "Soundproof Windows"
        ]
      },
      {
        "id": "room-delhi-andaz-suite",
        "name": "Andaz Courtyard Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "74 sq.m",
        "description": "74 sq.m open-concept designer suite overlooking the central water courtyard.",
        "pricePerNight": 19000,
        "price": 19000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Courtyard View",
          "Living Lounge",
          "Bathtub",
          "Espresso Machine"
        ]
      }
    ]
  },
  {
    "id": "hotel-delhi-hyatt-regency",
    "destinationId": "dest-delhi",
    "name": "Hyatt Regency Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Bhikaiji Cama Place, Ring Road, New Delhi 110066, India",
    "address": "Bhikaiji Cama Place, Ring Road, New Delhi 110066",
    "latitude": 28.5684,
    "longitude": 77.1857,
    "description": "South Delhi landmark hotel situated near central business and embassy districts, famed for La Piazza Italian restaurant and Club Olympus fitness center.",
    "shortDescription": "Established 5-star hotel in South Delhi featuring renowned dining and Club Olympus spa.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.hyatt.com/hyatt-regency/delhi",
    "phone": "+91 11 2679 1234",
    "email": "delhi.regency@hyatt.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 507,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 9500,
    "amenities": [
      "Outdoor Swimming Pool",
      "La Piazza Italian Restaurant",
      "Club Olympus Fitness & Spa",
      "Free Wi-Fi",
      "Business Center",
      "24-Hour Room Service",
      "Valet Parking"
    ],
    "roomTypes": [
      {
        "id": "room-delhi-hr-std",
        "name": "Standard King Room",
        "type": "DOUBLE",
        "description": "28 sq.m comfortable room with work desk, plush mattress, and city or pool views.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "28 sq.m",
        "price": 9500,
        "pricePerNight": 9500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Work Desk",
          "Air Conditioning",
          "En-suite Bath"
        ]
      },
      {
        "id": "room-delhi-hr-club",
        "name": "Regency Club Room",
        "type": "CLUB",
        "description": "35 sq.m premium room with Regency Club lounge privileges including evening cocktails and breakfast.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "35 sq.m",
        "price": 14500,
        "pricePerNight": 14500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Club Lounge Access",
          "Breakfast Included",
          "Evening Cocktails",
          "City View"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Hyatt Regency Delhi swimming pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/hyatt-regency/delhi",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-delhi-hr-std",
        "name": "Standard King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "28 sq.m",
        "description": "28 sq.m comfortable room with work desk, plush mattress, and city or pool views.",
        "pricePerNight": 9500,
        "price": 9500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Work Desk",
          "Air Conditioning",
          "En-suite Bath"
        ]
      },
      {
        "id": "room-delhi-hr-club",
        "name": "Regency Club Room",
        "type": "CLUB",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "35 sq.m",
        "description": "35 sq.m premium room with Regency Club lounge privileges including evening cocktails and breakfast.",
        "pricePerNight": 14500,
        "price": 14500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Club Lounge Access",
          "Breakfast Included",
          "Evening Cocktails",
          "City View"
        ]
      }
    ]
  },
  {
    "id": "hotel-delhi-welcomhotel-dwarka",
    "destinationId": "dest-delhi",
    "name": "Welcomhotel by ITC Hotels, Dwarka",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Plot No.3, Sector 10, Dwarka, New Delhi 110075, India",
    "address": "Plot No.3, Sector 10, Dwarka, New Delhi 110075",
    "latitude": 28.5815,
    "longitude": 77.0577,
    "description": "Sophisticated 5-star hotel in Dwarka sub-city, offering seamless access to IGI Airport, metro stations, Pavilion 75 buffet, and K&K Indian dining.",
    "shortDescription": "Upscale ITC business hotel in Dwarka near Indira Gandhi International Airport.",
    "category": "FOUR_STAR",
    "rating": 4.3,
    "officialWebsite": "https://www.itchotels.com/in/en/welcomhotel-dwarka-new-delhi",
    "phone": "+91 11 4093 9393",
    "email": "reservations.dwarka@itchotels.in",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 393,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 7000,
    "amenities": [
      "Outdoor Swimming Pool",
      "K&K Indian Specialty Restaurant",
      "Fitness Center",
      "Free High-Speed Wi-Fi",
      "Airport Connectivity",
      "Business Center",
      "24-Hour Coffee Shop"
    ],
    "roomTypes": [
      {
        "id": "room-delhi-welcom-sup",
        "name": "Deluxe Room",
        "type": "DOUBLE",
        "description": "30 sq.m guestroom with contemporary furnishings and modern workspace.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "30 sq.m",
        "price": 7000,
        "pricePerNight": 7000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Tea/Coffee Maker",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-delhi-welcom-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "description": "58 sq.m suite featuring separate living room, dining nook, and upgraded amenities.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "58 sq.m",
        "price": 12000,
        "pricePerNight": 12000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Living Room",
          "Bathtub",
          "Airport Transfer",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Welcomhotel Dwarka New Delhi",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.itchotels.com/in/en/welcomhotel-dwarka-new-delhi",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-delhi-welcom-sup",
        "name": "Deluxe Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "30 sq.m",
        "description": "30 sq.m guestroom with contemporary furnishings and modern workspace.",
        "pricePerNight": 7000,
        "price": 7000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Tea/Coffee Maker",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-delhi-welcom-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "58 sq.m",
        "description": "58 sq.m suite featuring separate living room, dining nook, and upgraded amenities.",
        "pricePerNight": 12000,
        "price": 12000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Living Room",
          "Bathtub",
          "Airport Transfer",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-mumbai-taj-mahal-palace",
    "destinationId": "dest-mumbai",
    "name": "The Taj Mahal Palace, Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Apollo Bunder, Colaba, Mumbai 400001, India",
    "address": "Apollo Bunder, Colaba, Mumbai 400001",
    "latitude": 18.9217,
    "longitude": 72.8332,
    "description": "Legendary 1903 heritage flagship hotel overlooking the Gateway of India and the Arabian Sea. Renowned for Wasabi by Morimoto, Golden Dragon, and Jiva Spa.",
    "shortDescription": "Iconic 1903 heritage palace hotel facing the Gateway of India and the Arabian Sea.",
    "category": "LUXURY",
    "rating": 4.9,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/taj-mahal-palace-mumbai/",
    "phone": "+91 22 6665 3366",
    "email": "tmhresv.bom@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 543,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 24000,
    "amenities": [
      "Gateway of India Sea Views",
      "Outdoor Swimming Pool",
      "Jiva Spa",
      "Wasabi by Morimoto Dining",
      "Free High-Speed Wi-Fi",
      "Palace Butler Service",
      "Art Gallery & Heritage Tours",
      "Luxury Yacht Charters"
    ],
    "roomTypes": [
      {
        "id": "room-mumbai-taj-palace-room",
        "name": "Palace Wing Superior Room",
        "type": "DELUXE",
        "description": "38 sq.m historic palace room with antique wood furniture, vaulted high ceilings, and city or courtyard vistas.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "price": 24000,
        "pricePerNight": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "High Ceilings",
          "Marble Bathroom",
          "Palace Butler"
        ]
      },
      {
        "id": "room-mumbai-taj-sea-suite",
        "name": "Sea View Luxury Suite",
        "type": "SUITE",
        "description": "78 sq.m premier suite with sweeping panoramic vistas of the Arabian Sea and Gateway of India harbor.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "78 sq.m",
        "price": 55000,
        "pricePerNight": 55000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Gateway Sea View",
          "Living Salon",
          "24/7 Butler Service",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Taj Mahal Palace Mumbai facing Arabian Sea",
        "source": "Unsplash Licensed Hotel Photo"
      },
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "room",
        "alt": "Taj Mahal Palace luxury suite bedroom",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/taj-mahal-palace-mumbai/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-mumbai-taj-palace-room",
        "name": "Palace Wing Superior Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "description": "38 sq.m historic palace room with antique wood furniture, vaulted high ceilings, and city or courtyard vistas.",
        "pricePerNight": 24000,
        "price": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "High Ceilings",
          "Marble Bathroom",
          "Palace Butler"
        ]
      },
      {
        "id": "room-mumbai-taj-sea-suite",
        "name": "Sea View Luxury Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "78 sq.m",
        "description": "78 sq.m premier suite with sweeping panoramic vistas of the Arabian Sea and Gateway of India harbor.",
        "pricePerNight": 55000,
        "price": 55000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Gateway Sea View",
          "Living Salon",
          "24/7 Butler Service",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-mumbai-oberoi",
    "destinationId": "dest-mumbai",
    "name": "The Oberoi, Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Nariman Point, Netaji Subhash Chandra Bose Road, Mumbai 400021, India",
    "address": "Nariman Point, Marine Drive, Mumbai 400021",
    "latitude": 18.9272,
    "longitude": 72.8206,
    "description": "Sleek luxury hotel at Nariman Point offering breathtaking views of Marine Drive and the Queen's Necklace. Home to Ziya by Michelin-starred chef Vineet Bhatia.",
    "shortDescription": "Ultra-luxury hotel at Nariman Point overlooking the iconic Queen's Necklace.",
    "category": "LUXURY",
    "rating": 4.9,
    "officialWebsite": "https://www.oberoihotels.com/hotels-in-mumbai/",
    "phone": "+91 22 6632 5757",
    "email": "reservations.mumbai@oberoihotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 287,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 21000,
    "amenities": [
      "Marine Drive Ocean Views",
      "Outdoor Heated Pool",
      "The Oberoi Spa (24 Hours)",
      "Ziya Indian Fine Dining",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-mumbai-oberoi-dlx-ocean",
        "name": "Deluxe Ocean View Room",
        "type": "DELUXE",
        "description": "50 sq.m room with floor-to-ceiling glass framing unobstructed views of the Arabian Sea.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "50 sq.m",
        "price": 21000,
        "pricePerNight": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Ocean View",
          "Free Wi-Fi",
          "Standalone Bathtub",
          "Butler Service"
        ]
      },
      {
        "id": "room-mumbai-oberoi-exec-suite",
        "name": "Executive Suite Ocean View",
        "type": "SUITE",
        "description": "80 sq.m corner suite offering sweeping views across the entire curve of Marine Drive.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "price": 42000,
        "pricePerNight": 42000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Queen's Necklace View",
          "Living Room",
          "Walk-in Wardrobe",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Oberoi Mumbai Nariman Point view",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.oberoihotels.com/hotels-in-mumbai/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-mumbai-oberoi-dlx-ocean",
        "name": "Deluxe Ocean View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "50 sq.m",
        "description": "50 sq.m room with floor-to-ceiling glass framing unobstructed views of the Arabian Sea.",
        "pricePerNight": 21000,
        "price": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Ocean View",
          "Free Wi-Fi",
          "Standalone Bathtub",
          "Butler Service"
        ]
      },
      {
        "id": "room-mumbai-oberoi-exec-suite",
        "name": "Executive Suite Ocean View",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "description": "80 sq.m corner suite offering sweeping views across the entire curve of Marine Drive.",
        "pricePerNight": 42000,
        "price": 42000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Queen's Necklace View",
          "Living Room",
          "Walk-in Wardrobe",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-mumbai-trident-nariman",
    "destinationId": "dest-mumbai",
    "name": "Trident, Nariman Point",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "CR 2 Nariman Point, Netaji Subhash Chandra Bose Road, Mumbai 400021, India",
    "address": "CR 2 Nariman Point, Mumbai 400021",
    "latitude": 18.9268,
    "longitude": 72.8211,
    "description": "Towering 35-storey 5-star hotel rising above Marine Drive in South Mumbai financial center, featuring Frangipani, India Jones, and sea-view swimming pool.",
    "shortDescription": "Prominent 35-storey South Mumbai hotel towering over Marine Drive promenade.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.tridenthotels.com/hotels-in-mumbai-nariman-point/",
    "phone": "+91 22 6632 4343",
    "email": "reservations.mumbai@tridenthotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 555,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 12500,
    "amenities": [
      "Outdoor Swimming Pool",
      "Frangipani & India Jones Dining",
      "Trident Spa",
      "Free High-Speed Wi-Fi",
      "Fitness Centre",
      "Business Centre",
      "Valet Parking"
    ],
    "roomTypes": [
      {
        "id": "room-mumbai-trident-sup",
        "name": "Superior City View Room",
        "type": "DOUBLE",
        "description": "28 sq.m comfortable room with contemporary design, ergonomic desk, and city skyline views.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "28 sq.m",
        "price": 12500,
        "pricePerNight": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Workstation",
          "Air Conditioning",
          "En-suite Bathroom"
        ]
      },
      {
        "id": "room-mumbai-trident-ocean",
        "name": "Premier Ocean View Room",
        "type": "DELUXE",
        "description": "32 sq.m high-floor room with panoramic views of the Arabian Sea and Marine Drive.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 16500,
        "pricePerNight": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Ocean View",
          "High Floor",
          "Mini Bar",
          "Complimentary Tea/Coffee"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Trident Nariman Point Mumbai high rise",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tridenthotels.com/hotels-in-mumbai-nariman-point/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-mumbai-trident-sup",
        "name": "Superior City View Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "28 sq.m",
        "description": "28 sq.m comfortable room with contemporary design, ergonomic desk, and city skyline views.",
        "pricePerNight": 12500,
        "price": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Workstation",
          "Air Conditioning",
          "En-suite Bathroom"
        ]
      },
      {
        "id": "room-mumbai-trident-ocean",
        "name": "Premier Ocean View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m high-floor room with panoramic views of the Arabian Sea and Marine Drive.",
        "pricePerNight": 16500,
        "price": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Ocean View",
          "High Floor",
          "Mini Bar",
          "Complimentary Tea/Coffee"
        ]
      }
    ]
  },
  {
    "id": "hotel-mumbai-itc-maratha",
    "destinationId": "dest-mumbai",
    "name": "ITC Maratha, a Luxury Collection Hotel",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Sahar Airport Road, Andheri East, Mumbai 400099, India",
    "address": "Sahar Airport Road, Andheri East, Mumbai 400099",
    "latitude": 19.1024,
    "longitude": 72.8698,
    "description": "Grand Maratha dynasty-inspired 5-star hotel near Chhatrapati Shivaji Maharaj International Airport, celebrated for Peshwa Pavilion, Peshawri, and Kaya Kalp Spa.",
    "shortDescription": "Regal Maratha-inspired hotel near Mumbai International Airport with Peshawri dining.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.itchotels.com/in/en/itcmaratha-mumbai",
    "phone": "+91 22 2830 3030",
    "email": "reservations.itcmaratha@itchotels.in",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 380,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 11500,
    "amenities": [
      "Outdoor Swimming Pool",
      "Peshawri & Peshwa Pavilion",
      "Kaya Kalp Spa",
      "Airport Proximity Shuttle",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive Club Lounge"
    ],
    "roomTypes": [
      {
        "id": "room-mumbai-itc-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "description": "36 sq.m heritage-accented room with soundproof glazing and four-fixture marble bathroom.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "36 sq.m",
        "price": 11500,
        "pricePerNight": 11500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Soundproofing",
          "Marble Bath",
          "Ergonomic Desk"
        ]
      },
      {
        "id": "room-mumbai-itc-itc-one",
        "name": "ITC One Luxury Room",
        "type": "DELUXE",
        "description": "51 sq.m exclusive wing room with complimentary airport transfers, personal butler, and lounge privileges.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "51 sq.m",
        "price": 18000,
        "pricePerNight": 18000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Airport Transfer",
          "Butler Service",
          "Club Lounge Access",
          "Deep Soak Tub"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "ITC Maratha Mumbai grand courtyard",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.itchotels.com/in/en/itcmaratha-mumbai",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-mumbai-itc-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "36 sq.m",
        "description": "36 sq.m heritage-accented room with soundproof glazing and four-fixture marble bathroom.",
        "pricePerNight": 11500,
        "price": 11500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Soundproofing",
          "Marble Bath",
          "Ergonomic Desk"
        ]
      },
      {
        "id": "room-mumbai-itc-itc-one",
        "name": "ITC One Luxury Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "51 sq.m",
        "description": "51 sq.m exclusive wing room with complimentary airport transfers, personal butler, and lounge privileges.",
        "pricePerNight": 18000,
        "price": 18000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Airport Transfer",
          "Butler Service",
          "Club Lounge Access",
          "Deep Soak Tub"
        ]
      }
    ]
  },
  {
    "id": "hotel-mumbai-st-regis",
    "destinationId": "dest-mumbai",
    "name": "The St. Regis Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "462 Senapati Bapat Marg, Lower Parel, Mumbai 400013, India",
    "address": "462 Senapati Bapat Marg, Lower Parel, Mumbai 400013",
    "latitude": 18.9934,
    "longitude": 72.8243,
    "description": "Soaring 38 floors above High Street Phoenix luxury mall in Lower Parel, offering signature St. Regis Butler service, rooftop swimming pool, and upscale dining.",
    "shortDescription": "Soaring 38-floor luxury landmark in Lower Parel connected to Palladium luxury mall.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.marriott.com/hotels/travel/bomxr-the-st-regis-mumbai/",
    "phone": "+91 22 6162 8000",
    "email": "stregis.mumbai@stregis.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 395,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 19000,
    "amenities": [
      "Rooftop Swimming Pool",
      "St. Regis Butler Service",
      "Iridium Spa",
      "Seven Kitchens & By the Mekong",
      "Free High-Speed Wi-Fi",
      "Direct Access to Palladium Mall",
      "Athletic Club"
    ],
    "roomTypes": [
      {
        "id": "room-mumbai-st-regis-dlx",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "description": "45 sq.m city-view room with St. Regis signature bed and bespoke butler beverage service.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "price": 19000,
        "pricePerNight": 19000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Signature Butler",
          "City Skyline View",
          "Marble Bath"
        ]
      },
      {
        "id": "room-mumbai-st-regis-st-regis-suite",
        "name": "St. Regis Suite",
        "type": "SUITE",
        "description": "90 sq.m opulent suite with panoramic racecourse and sea views, private dining, and powder room.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "price": 36000,
        "pricePerNight": 36000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Racecourse View",
          "Separate Living & Dining",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The St. Regis Mumbai skyscraper",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/bomxr-the-st-regis-mumbai/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-mumbai-st-regis-dlx",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "description": "45 sq.m city-view room with St. Regis signature bed and bespoke butler beverage service.",
        "pricePerNight": 19000,
        "price": 19000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Signature Butler",
          "City Skyline View",
          "Marble Bath"
        ]
      },
      {
        "id": "room-mumbai-st-regis-st-regis-suite",
        "name": "St. Regis Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "description": "90 sq.m opulent suite with panoramic racecourse and sea views, private dining, and powder room.",
        "pricePerNight": 36000,
        "price": 36000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Racecourse View",
          "Separate Living & Dining",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-mumbai-four-seasons",
    "destinationId": "dest-mumbai",
    "name": "Four Seasons Hotel Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "1/136 Dr E Moses Road, Worli, Mumbai 400018, India",
    "address": "1/136 Dr E Moses Road, Worli, Mumbai 400018",
    "latitude": 18.9959,
    "longitude": 72.8197,
    "description": "Sleek 33-storey contemporary hotel in Worli commercial district, home to AER rooftop lounge, an outdoor swimming pool, and Four Seasons Ayurvedic Spa.",
    "shortDescription": "Sleek glass tower in Worli featuring the iconic AER rooftop bar and sea views.",
    "category": "LUXURY",
    "rating": 4.6,
    "officialWebsite": "https://www.fourseasons.com/mumbai/",
    "phone": "+91 22 2481 8000",
    "email": "reservations.mumbai@fourseasons.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 202,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 16500,
    "amenities": [
      "AER Open-air Rooftop Bar",
      "Outdoor Pool",
      "Four Seasons Spa",
      "San:Qi Asian Restaurant",
      "Free High-Speed Wi-Fi",
      "Fitness Club",
      "Chauffeur Fleet"
    ],
    "roomTypes": [
      {
        "id": "room-mumbai-fs-deluxe-sea",
        "name": "Deluxe Sea-View Room",
        "type": "DELUXE",
        "description": "48 sq.m light-filled room with floor-to-ceiling windows looking onto the Arabian Sea.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "price": 16500,
        "pricePerNight": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Sea View",
          "Free Wi-Fi",
          "Four Seasons Bed",
          "Deep Soaking Tub"
        ]
      },
      {
        "id": "room-mumbai-fs-exec-suite",
        "name": "Four Seasons Executive Suite",
        "type": "SUITE",
        "description": "85 sq.m suite featuring separate living room with panoramic sunset vistas over the ocean.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "price": 32000,
        "pricePerNight": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Ocean Panorama",
          "Separate Living Area",
          "Nespresso Machine",
          "Executive Check-in"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Four Seasons Hotel Mumbai Worli tower",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.fourseasons.com/mumbai/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-mumbai-fs-deluxe-sea",
        "name": "Deluxe Sea-View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "description": "48 sq.m light-filled room with floor-to-ceiling windows looking onto the Arabian Sea.",
        "pricePerNight": 16500,
        "price": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Sea View",
          "Free Wi-Fi",
          "Four Seasons Bed",
          "Deep Soaking Tub"
        ]
      },
      {
        "id": "room-mumbai-fs-exec-suite",
        "name": "Four Seasons Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "description": "85 sq.m suite featuring separate living room with panoramic sunset vistas over the ocean.",
        "pricePerNight": 32000,
        "price": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Ocean Panorama",
          "Separate Living Area",
          "Nespresso Machine",
          "Executive Check-in"
        ]
      }
    ]
  },
  {
    "id": "hotel-mumbai-intercontinental-marine",
    "destinationId": "dest-mumbai",
    "name": "InterContinental Marine Drive-Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "135 Marine Drive, Churchgate, Mumbai 400020, India",
    "address": "135 Marine Drive, Churchgate, Mumbai 400020",
    "latitude": 18.9325,
    "longitude": 72.8242,
    "description": "Boutique luxury hotel perched directly on Marine Drive opposite the Arabian Sea, famous for Dome rooftop cocktail lounge and Kebab Korner restaurant.",
    "shortDescription": "Boutique oceanfront address on Marine Drive celebrated for Dome rooftop lounge.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.ihg.com/intercontinental/hotels/us/en/mumbai/bomhb/hoteldetail",
    "phone": "+91 22 3987 9999",
    "email": "marinedrive@intercontinental.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 59,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 14000,
    "amenities": [
      "Dome Rooftop Pool & Bar",
      "Front-Row Marine Drive View",
      "Kebab Korner Restaurant",
      "Free High-Speed Wi-Fi",
      "24-Hour Fitness Center",
      "Boutique Butler Service"
    ],
    "roomTypes": [
      {
        "id": "room-mumbai-ic-deluxe-sea",
        "name": "Classic Sea View Room",
        "type": "DELUXE",
        "description": "42 sq.m guestroom with picture windows framing the Arabian Sea waves.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "price": 14000,
        "pricePerNight": 14000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Direct Sea View",
          "Free Wi-Fi",
          "Bose SoundDock",
          "Marble Bath"
        ]
      },
      {
        "id": "room-mumbai-ic-dome-suite",
        "name": "Marine Drive Suite",
        "type": "SUITE",
        "description": "70 sq.m corner suite overlooking the illuminated Queen's Necklace promenade.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "70 sq.m",
        "price": 27000,
        "pricePerNight": 27000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Queen's Necklace Panorama",
          "Separate Parlour",
          "Complimentary Cocktails at Dome"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "InterContinental Marine Drive sunset view",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.ihg.com/intercontinental/hotels/us/en/mumbai/bomhb/hoteldetail",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-mumbai-ic-deluxe-sea",
        "name": "Classic Sea View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "description": "42 sq.m guestroom with picture windows framing the Arabian Sea waves.",
        "pricePerNight": 14000,
        "price": 14000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Direct Sea View",
          "Free Wi-Fi",
          "Bose SoundDock",
          "Marble Bath"
        ]
      },
      {
        "id": "room-mumbai-ic-dome-suite",
        "name": "Marine Drive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "70 sq.m",
        "description": "70 sq.m corner suite overlooking the illuminated Queen's Necklace promenade.",
        "pricePerNight": 27000,
        "price": 27000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Queen's Necklace Panorama",
          "Separate Parlour",
          "Complimentary Cocktails at Dome"
        ]
      }
    ]
  },
  {
    "id": "hotel-mumbai-trident-bkc",
    "destinationId": "dest-mumbai",
    "name": "Trident, Bandra Kurla",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "C-56, G Block, Bandra Kurla Complex, Mumbai 400098, India",
    "address": "C-56, G Block, Bandra Kurla Complex, Mumbai 400098",
    "latitude": 19.0668,
    "longitude": 72.8687,
    "description": "Contemporary 5-star hotel at the heart of Bandra Kurla Complex (BKC) financial corridor, offering outdoor lap pool, Trident Spa, and award-winning Botticino Italian restaurant.",
    "shortDescription": "Premier corporate 5-star hotel in the heart of Bandra Kurla Complex financial district.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.tridenthotels.com/hotels-in-mumbai-bandra-kurla/",
    "phone": "+91 22 6672 7777",
    "email": "reservations.bkc@tridenthotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 436,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 13000,
    "amenities": [
      "Outdoor Lap Pool",
      "Trident Spa",
      "Botticino & O22 Dining",
      "Free High-Speed Wi-Fi",
      "Executive Business Center",
      "Fitness Center",
      "Concierge Service"
    ],
    "roomTypes": [
      {
        "id": "room-mumbai-trident-bkc-deluxe",
        "name": "Deluxe Room",
        "type": "DOUBLE",
        "description": "30 sq.m guestroom with contemporary red oak accents and ergonomic executive desk.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "30 sq.m",
        "price": 13000,
        "pricePerNight": 13000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Workstation",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-mumbai-trident-bkc-suite",
        "name": "Trident Club Suite",
        "type": "SUITE",
        "description": "60 sq.m executive suite with Club Lounge access, evening cocktails, and private boardroom access.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "60 sq.m",
        "price": 22000,
        "pricePerNight": 22000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Trident Club Lounge",
          "Breakfast Included",
          "Separate Parlour",
          "Airport Pickup"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Trident Bandra Kurla Mumbai facade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tridenthotels.com/hotels-in-mumbai-bandra-kurla/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-mumbai-trident-bkc-deluxe",
        "name": "Deluxe Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "30 sq.m",
        "description": "30 sq.m guestroom with contemporary red oak accents and ergonomic executive desk.",
        "pricePerNight": 13000,
        "price": 13000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Workstation",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-mumbai-trident-bkc-suite",
        "name": "Trident Club Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "60 sq.m",
        "description": "60 sq.m executive suite with Club Lounge access, evening cocktails, and private boardroom access.",
        "pricePerNight": 22000,
        "price": 22000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Trident Club Lounge",
          "Breakfast Included",
          "Separate Parlour",
          "Airport Pickup"
        ]
      }
    ]
  },
  {
    "id": "hotel-jaipur-rambagh-palace",
    "destinationId": "dest-jaipur",
    "name": "Rambagh Palace, Jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Bhawani Singh Road, Jaipur 302005, Rajasthan, India",
    "address": "Bhawani Singh Road, Jaipur 302005",
    "latitude": 26.8979,
    "longitude": 75.8085,
    "description": "The 'Jewel of Jaipur', former residence of the Maharaja of Jaipur set in 47 acres of landscaped gardens, featuring Suvarna Mahal, peacock lawns, and Jiva Grande Spa.",
    "shortDescription": "Former residence of the Maharaja of Jaipur set in 47 acres of ornamental Mughal gardens.",
    "category": "LUXURY",
    "rating": 4.9,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/rambagh-palace-jaipur/",
    "phone": "+91 141 221 1919",
    "email": "rambagh.jaipur@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 78,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 28000,
    "amenities": [
      "Mughal Landscaped Gardens",
      "Indoor & Outdoor Pools",
      "Jiva Grande Spa",
      "Suvarna Mahal Royal Dining",
      "Polo Bar",
      "Free High-Speed Wi-Fi",
      "Royal Butler Service",
      "Vintage Car Escort"
    ],
    "roomTypes": [
      {
        "id": "room-jaipur-rambagh-palace-room",
        "name": "Palace Room",
        "type": "DELUXE",
        "description": "48 sq.m authentic royal chamber adorned with rich Rajasthani fabrics and hand-painted motifs.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "price": 28000,
        "pricePerNight": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Garden View",
          "Four-Poster Bed",
          "Palace Butler"
        ]
      },
      {
        "id": "room-jaipur-rambagh-historical-suite",
        "name": "Historical Suite",
        "type": "SUITE",
        "description": "105 sq.m majestic suite once graced by visiting dignitaries, with private sun terrace.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "105 sq.m",
        "price": 65000,
        "pricePerNight": 65000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Terrace",
          "Personal Butler",
          "Vintage Car Airport Transfer",
          "Champagne Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Rambagh Palace Jaipur palace facade",
        "source": "Unsplash Licensed Hotel Photo"
      },
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "room",
        "alt": "Rambagh Palace royal suite bedroom",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/rambagh-palace-jaipur/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-jaipur-rambagh-palace-room",
        "name": "Palace Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "description": "48 sq.m authentic royal chamber adorned with rich Rajasthani fabrics and hand-painted motifs.",
        "pricePerNight": 28000,
        "price": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Garden View",
          "Four-Poster Bed",
          "Palace Butler"
        ]
      },
      {
        "id": "room-jaipur-rambagh-historical-suite",
        "name": "Historical Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "105 sq.m",
        "description": "105 sq.m majestic suite once graced by visiting dignitaries, with private sun terrace.",
        "pricePerNight": 65000,
        "price": 65000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Terrace",
          "Personal Butler",
          "Vintage Car Airport Transfer",
          "Champagne Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-jaipur-oberoi-rajvilas",
    "destinationId": "dest-jaipur",
    "name": "The Oberoi Rajvilas, Jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Goner Road, Jaipur 302031, Rajasthan, India",
    "address": "Goner Road, Jaipur 302031",
    "latitude": 26.8778,
    "longitude": 75.8772,
    "description": "Spectacular 32-acre fort-style resort surrounded by reflection pools and gardens, centered around a 280-year-old Shiva temple, featuring luxury tents and Sunken Pool.",
    "shortDescription": "32-acre fort-style royal resort featuring luxury tents and private reflection pools.",
    "category": "LUXURY",
    "rating": 4.9,
    "officialWebsite": "https://www.oberoihotels.com/hotels-in-jaipur-rajvilas/",
    "phone": "+91 141 268 0101",
    "email": "reservations.rajvilas@oberoihotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 71,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 32000,
    "amenities": [
      "Sunken Swimming Pool",
      "The Oberoi Spa in 18th-century Haveli",
      "Surya Mahal Fine Dining",
      "Herb Gardens & Tennis Courts",
      "Free High-Speed Wi-Fi",
      "Private Yoga Pavilions",
      "24-Hour Butler Service"
    ],
    "roomTypes": [
      {
        "id": "room-jaipur-rajvilas-premier",
        "name": "Premier Room with Sunken Bath",
        "type": "DELUXE",
        "description": "42 sq.m guestroom centered around an ornate sunken marble bath looking into private walled garden.",
        "maxGuests": 2,
        "bedType": "1 Four-Poster King Bed",
        "roomSize": "42 sq.m",
        "price": 32000,
        "pricePerNight": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Four-Poster Bed",
          "Sunken Marble Bath",
          "Private Courtyard View",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-jaipur-rajvilas-tent",
        "name": "Luxury Tent with Garden Patio",
        "type": "VILLA",
        "description": "45 sq.m air-conditioned luxury canopy tent with teak floor, clawfoot tub, and private outdoor patio.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "price": 46000,
        "pricePerNight": 46000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Royal Canopy Tent",
          "Clawfoot Bathtub",
          "Private Garden Patio",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Oberoi Rajvilas Jaipur fort resort",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.oberoihotels.com/hotels-in-jaipur-rajvilas/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-jaipur-rajvilas-premier",
        "name": "Premier Room with Sunken Bath",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Four-Poster King Bed",
        "roomSize": "42 sq.m",
        "description": "42 sq.m guestroom centered around an ornate sunken marble bath looking into private walled garden.",
        "pricePerNight": 32000,
        "price": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Four-Poster Bed",
          "Sunken Marble Bath",
          "Private Courtyard View",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-jaipur-rajvilas-tent",
        "name": "Luxury Tent with Garden Patio",
        "type": "VILLA",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "description": "45 sq.m air-conditioned luxury canopy tent with teak floor, clawfoot tub, and private outdoor patio.",
        "pricePerNight": 46000,
        "price": 46000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Royal Canopy Tent",
          "Clawfoot Bathtub",
          "Private Garden Patio",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-jaipur-itc-rajputana",
    "destinationId": "dest-jaipur",
    "name": "ITC Rajputana, a Luxury Collection Hotel",
    "city": "Jaipur",
    "state": "Rajasthan",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Palace Road, Gopalbari, Jaipur 302006, Rajasthan, India",
    "address": "Palace Road, Gopalbari, Jaipur 302006",
    "latitude": 26.9197,
    "longitude": 75.7925,
    "description": "Echoing the grand havelis of Rajasthan with red brick courtyards, traditional stepwells (baolis), Kaya Kalp Spa, and Peshawri tandoori cuisine.",
    "shortDescription": "Grand haveli-style hotel with stepwell courtyards and authentic Peshawri dining.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.itchotels.com/in/en/itcrajputana-jaipur",
    "phone": "+91 141 405 1600",
    "email": "reservations.itcrajputana@itchotels.in",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 218,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 9800,
    "amenities": [
      "Bazaar Style Courtyard Pool",
      "Peshawri Restaurant",
      "Kaya Kalp Spa",
      "Free High-Speed Wi-Fi",
      "Traditional Cultural Performances",
      "Fitness Center",
      "Executive Club Lounge"
    ],
    "roomTypes": [
      {
        "id": "room-jaipur-itc-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "description": "32 sq.m guestroom with handcrafted jharokha bay window seating looking onto inner courtyards.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "32 sq.m",
        "price": 9800,
        "pricePerNight": 9800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Jharokha Window Seating",
          "Air Conditioning",
          "En-suite Bath"
        ]
      },
      {
        "id": "room-jaipur-itc-thikana-suite",
        "name": "Thikana Suite",
        "type": "SUITE",
        "description": "65 sq.m traditional royal suite with private balcony, separate salon, and butler service.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "price": 18500,
        "pricePerNight": 18500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Balcony",
          "Butler Service",
          "Living Room",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "ITC Rajputana Jaipur red brick courtyard",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.itchotels.com/in/en/itcrajputana-jaipur",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-jaipur-itc-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "32 sq.m",
        "description": "32 sq.m guestroom with handcrafted jharokha bay window seating looking onto inner courtyards.",
        "pricePerNight": 9800,
        "price": 9800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Jharokha Window Seating",
          "Air Conditioning",
          "En-suite Bath"
        ]
      },
      {
        "id": "room-jaipur-itc-thikana-suite",
        "name": "Thikana Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "description": "65 sq.m traditional royal suite with private balcony, separate salon, and butler service.",
        "pricePerNight": 18500,
        "price": 18500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Balcony",
          "Butler Service",
          "Living Room",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-jaipur-jai-mahal-palace",
    "destinationId": "dest-jaipur",
    "name": "Jai Mahal Palace, Jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Jacob Road, Civil Lines, Jaipur 302006, Rajasthan, India",
    "address": "Jacob Road, Civil Lines, Jaipur 302006",
    "latitude": 26.9089,
    "longitude": 75.7878,
    "description": "1745 AD heritage palace spanning 18 acres of Mughal gardens in Civil Lines. Featuring life-sized chess board, Cinnamon fine dining, and Jiva Spa.",
    "shortDescription": "1745 AD heritage palace set in 18 acres of landscaped gardens in Civil Lines.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/jai-mahal-palace-jaipur/",
    "phone": "+91 141 660 1111",
    "email": "jaimahal.jaipur@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 100,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 16500,
    "amenities": [
      "18-Acre Mughal Gardens",
      "Outdoor Swimming Pool",
      "Jiva Spa",
      "Cinnamon Pan-Indian Dining",
      "Life-sized Chess Set",
      "Free High-Speed Wi-Fi",
      "Palace Concierge"
    ],
    "roomTypes": [
      {
        "id": "room-jaipur-jm-deluxe",
        "name": "Deluxe Room Garden View",
        "type": "DELUXE",
        "description": "36 sq.m heritage room with classic miniature paintings and garden outlook.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "36 sq.m",
        "price": 16500,
        "pricePerNight": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Garden View",
          "Air Conditioning",
          "Bathtub"
        ]
      },
      {
        "id": "room-jaipur-jm-suite",
        "name": "Junior Suite",
        "type": "SUITE",
        "description": "56 sq.m palace suite with separate sitting room and views over the fountain terraces.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "56 sq.m",
        "price": 28000,
        "pricePerNight": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Separate Sitting Room",
          "Mughal Garden View",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Jai Mahal Palace Jaipur gardens",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/jai-mahal-palace-jaipur/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-jaipur-jm-deluxe",
        "name": "Deluxe Room Garden View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "36 sq.m",
        "description": "36 sq.m heritage room with classic miniature paintings and garden outlook.",
        "pricePerNight": 16500,
        "price": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Garden View",
          "Air Conditioning",
          "Bathtub"
        ]
      },
      {
        "id": "room-jaipur-jm-suite",
        "name": "Junior Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "56 sq.m",
        "description": "56 sq.m palace suite with separate sitting room and views over the fountain terraces.",
        "pricePerNight": 28000,
        "price": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Separate Sitting Room",
          "Mughal Garden View",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-jaipur-hyatt-mansarovar",
    "destinationId": "dest-jaipur",
    "name": "Hyatt Regency Jaipur Mansarovar",
    "city": "Jaipur",
    "state": "Rajasthan",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "ISKCON Temple Road, Mansarovar, Jaipur 302020, Rajasthan, India",
    "address": "ISKCON Temple Road, Mansarovar, Jaipur 302020",
    "latitude": 26.8488,
    "longitude": 75.7656,
    "description": "Architectural fusion of classic Rajasthani arches and modern luxury in Mansarovar, featuring landscaped central courtyard, Shrot restaurant, and StayFit gym.",
    "shortDescription": "Contemporary urban oasis in Mansarovar blending traditional arches with modern comforts.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.hyatt.com/hyatt-regency/jaiph-hyatt-regency-jaipur-mansarovar",
    "phone": "+91 141 668 1234",
    "email": "jaipur.regency@hyatt.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 245,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 8500,
    "amenities": [
      "Central Courtyard Pool",
      "Shrot Organic Dining",
      "StayFit Fitness Center",
      "Free High-Speed Wi-Fi",
      "Spa & Wellness",
      "Banquet & Event Lawns"
    ],
    "roomTypes": [
      {
        "id": "room-jaipur-hyatt-king",
        "name": "1 King Bed Courtyard View",
        "type": "DOUBLE",
        "description": "36 sq.m room with balcony overlooking the serene central courtyard and pool.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "36 sq.m",
        "price": 8500,
        "pricePerNight": 8500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Courtyard Balcony",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-jaipur-hyatt-regency-suite",
        "name": "Regency Suite",
        "type": "SUITE",
        "description": "72 sq.m suite with living lounge, Regency Club access, and deep soaking bathtub.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "72 sq.m",
        "price": 15500,
        "pricePerNight": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Regency Club Privileges",
          "Living Area",
          "Bathtub",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Hyatt Regency Jaipur Mansarovar courtyard",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/hyatt-regency/jaiph-hyatt-regency-jaipur-mansarovar",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-jaipur-hyatt-king",
        "name": "1 King Bed Courtyard View",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "36 sq.m",
        "description": "36 sq.m room with balcony overlooking the serene central courtyard and pool.",
        "pricePerNight": 8500,
        "price": 8500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Courtyard Balcony",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-jaipur-hyatt-regency-suite",
        "name": "Regency Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "72 sq.m",
        "description": "72 sq.m suite with living lounge, Regency Club access, and deep soaking bathtub.",
        "pricePerNight": 15500,
        "price": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Regency Club Privileges",
          "Living Area",
          "Bathtub",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-jaipur-marriott",
    "destinationId": "dest-jaipur",
    "name": "Jaipur Marriott Hotel",
    "city": "Jaipur",
    "state": "Rajasthan",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Ashram Marg, Near Jawahar Circle, Jaipur 302015, Rajasthan, India",
    "address": "Ashram Marg, Near Jawahar Circle, Jaipur 302015",
    "latitude": 26.8497,
    "longitude": 75.8016,
    "description": "Upscale 5-star hotel near Jawahar Circle and Jaipur International Airport, featuring Okra buffet, Saffron Indian specialty restaurant, and O2 Spa.",
    "shortDescription": "Upscale 5-star hotel near Jawahar Circle and Jaipur International Airport.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.marriott.com/hotels/travel/jaimc-jaipur-marriott-hotel/",
    "phone": "+91 141 456 7777",
    "email": "reservations.jaipur@marriott.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 374,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 9000,
    "amenities": [
      "Outdoor Pool",
      "O2 Spa",
      "Okra & Saffron Restaurants",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive M Club Lounge",
      "Airport Shuttle"
    ],
    "roomTypes": [
      {
        "id": "room-jaipur-marr-dlx",
        "name": "Deluxe King Room",
        "type": "DOUBLE",
        "description": "34 sq.m room with plush Marriott bedding, marble bathroom, and city views.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "34 sq.m",
        "price": 9000,
        "pricePerNight": 9000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Marble Bathroom",
          "Coffee Maker",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-jaipur-marr-exec-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "description": "68 sq.m suite with access to M Club Lounge, evening appetizers, and separate living area.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "68 sq.m",
        "price": 16000,
        "pricePerNight": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "M Club Lounge Access",
          "Living Room",
          "Bathtub",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Jaipur Marriott Hotel facade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/jaimc-jaipur-marriott-hotel/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-jaipur-marr-dlx",
        "name": "Deluxe King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "34 sq.m",
        "description": "34 sq.m room with plush Marriott bedding, marble bathroom, and city views.",
        "pricePerNight": 9000,
        "price": 9000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Marble Bathroom",
          "Coffee Maker",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-jaipur-marr-exec-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "68 sq.m",
        "description": "68 sq.m suite with access to M Club Lounge, evening appetizers, and separate living area.",
        "pricePerNight": 16000,
        "price": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "M Club Lounge Access",
          "Living Room",
          "Bathtub",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-jaipur-le-meridien",
    "destinationId": "dest-jaipur",
    "name": "Le Méridien Jaipur Resort & Spa",
    "city": "Kukas",
    "state": "Rajasthan",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "RIICO Kukas, Jaipur 302028, Rajasthan, India",
    "address": "RIICO Kukas, Jaipur 302028",
    "latitude": 27.0392,
    "longitude": 75.8947,
    "description": "Serene 25-acre resort situated on the foothills of the Aravalli range close to Amber Fort, offering lagoon pool, Surya Vilas dining, and Ayurvedic therapies.",
    "shortDescription": "25-acre resort at the base of the Aravalli hills near Amber Fort.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.marriott.com/hotels/travel/jaimd-le-meridien-jaipur-resort-and-spa/",
    "phone": "+91 142 666 9999",
    "email": "reservations.lemeridienjaipur@marriott.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 126,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 8200,
    "amenities": [
      "Lagoon Swimming Pool",
      "Spa with Ayurvedic Therapies",
      "Amber Fort Proximity",
      "Free High-Speed Wi-Fi",
      "Cinema Hall & Games Room",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-jaipur-lm-sup",
        "name": "Superior King Room",
        "type": "DOUBLE",
        "description": "38 sq.m room with Aravalli hill views, private balcony, and sunken tub.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "price": 8200,
        "pricePerNight": 8200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Hill View",
          "Sunken Tub",
          "Balcony"
        ]
      },
      {
        "id": "room-jaipur-lm-villa",
        "name": "Deluxe Villa with Garden View",
        "type": "VILLA",
        "description": "85 sq.m standalone villa with private courtyard and outdoor sitting cabana.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "price": 15000,
        "pricePerNight": 15000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Courtyard",
          "Sitting Cabana",
          "Espresso Machine",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Le Méridien Jaipur resort pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/jaimd-le-meridien-jaipur-resort-and-spa/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-jaipur-lm-sup",
        "name": "Superior King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "description": "38 sq.m room with Aravalli hill views, private balcony, and sunken tub.",
        "pricePerNight": 8200,
        "price": 8200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Hill View",
          "Sunken Tub",
          "Balcony"
        ]
      },
      {
        "id": "room-jaipur-lm-villa",
        "name": "Deluxe Villa with Garden View",
        "type": "VILLA",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "description": "85 sq.m standalone villa with private courtyard and outdoor sitting cabana.",
        "pricePerNight": 15000,
        "price": 15000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Courtyard",
          "Sitting Cabana",
          "Espresso Machine",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-jaipur-hilton",
    "destinationId": "dest-jaipur",
    "name": "Hilton Jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "42 Geejgarh House, Hawa Sadak, Jaipur 302006, Rajasthan, India",
    "address": "42 Geejgarh House, Hawa Sadak, Jaipur 302006",
    "latitude": 26.9004,
    "longitude": 75.7824,
    "description": "Centrally located upscale hotel on Hawa Sadak near Civil Lines, offering outdoor rooftop pool, Chaandi contemporary Indian dining, and signature Hilton serenity.",
    "shortDescription": "Central 5-star hotel on Hawa Sadak featuring rooftop pool and mountain vistas.",
    "category": "FOUR_STAR",
    "rating": 4.4,
    "officialWebsite": "https://www.hilton.com/en/hotels/jprhiji-hilton-jaipur/",
    "phone": "+91 141 417 0000",
    "email": "jaipur.info@hilton.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 129,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 6800,
    "amenities": [
      "Outdoor Swimming Pool",
      "Chaandi & Aurum Restaurants",
      "Spa & Salon",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Business Center"
    ],
    "roomTypes": [
      {
        "id": "room-jaipur-hilton-guest",
        "name": "King Deluxe Room",
        "type": "DOUBLE",
        "description": "32 sq.m guestroom with city views, ergonomic work chair, and Hilton Serenity bed.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 6800,
        "pricePerNight": 6800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "City View",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-jaipur-hilton-exec-suite",
        "name": "One Bedroom Suite",
        "type": "SUITE",
        "description": "65 sq.m spacious suite with separate parlor and Aravalli range panoramic views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "price": 12500,
        "pricePerNight": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Aravalli View",
          "Separate Parlor",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Hilton Jaipur hotel building",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hilton.com/en/hotels/jprhiji-hilton-jaipur/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-jaipur-hilton-guest",
        "name": "King Deluxe Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m guestroom with city views, ergonomic work chair, and Hilton Serenity bed.",
        "pricePerNight": 6800,
        "price": 6800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "City View",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-jaipur-hilton-exec-suite",
        "name": "One Bedroom Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "description": "65 sq.m spacious suite with separate parlor and Aravalli range panoramic views.",
        "pricePerNight": 12500,
        "price": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Aravalli View",
          "Separate Parlor",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-manali-anantmaya",
    "destinationId": "dest-manali",
    "name": "The Anantmaya Resort",
    "city": "Prini",
    "state": "Himachal Pradesh",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Naggar Road, Prini, Manali 175143, Himachal Pradesh, India",
    "address": "Naggar Road, Prini, Manali 175143",
    "latitude": 32.2178,
    "longitude": 77.1952,
    "description": "Serene boutique resort set amidst apple orchards in Prini, offering breathtaking 360-degree snow-capped Himalayan views, Basil Leaf restaurant, and spa.",
    "shortDescription": "Boutique luxury resort amidst apple orchards in Prini with unobstructed Himalayan panoramas.",
    "category": "FIVE_STAR",
    "rating": 4.7,
    "officialWebsite": "https://www.anantmaya.com/",
    "phone": "+91 1902 250 114",
    "email": "info@anantmaya.com",
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "totalRooms": 42,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 8500,
    "amenities": [
      "Snow-Capped Himalayan Views",
      "Apple Orchard Garden",
      "Basil Leaf Restaurant",
      "Ayurvedic Spa & Sauna",
      "Free High-Speed Wi-Fi",
      "Central Heating",
      "Bonfire Evenings"
    ],
    "roomTypes": [
      {
        "id": "room-manali-anant-luxury",
        "name": "Luxury Valley View Room",
        "type": "DELUXE",
        "description": "35 sq.m wooden-accented room with private balcony framing Rohtang mountain peaks.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "35 sq.m",
        "price": 8500,
        "pricePerNight": 8500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Valley View",
          "Balcony",
          "Heating",
          "Free Wi-Fi",
          "Tea/Coffee Maker"
        ]
      },
      {
        "id": "room-manali-anant-suite",
        "name": "Anantmaya Presidential Suite",
        "type": "SUITE",
        "description": "65 sq.m duplex chalet suite with glass-fronted fireplace and panoramic snow peak vista.",
        "maxGuests": 4,
        "bedType": "1 King Bed + 1 Queen Bed",
        "roomSize": "65 sq.m",
        "price": 16500,
        "pricePerNight": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Fireplace",
          "Duplex Chalet",
          "Panoramic Balcony",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Anantmaya Resort mountain backdrop",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.anantmaya.com/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-manali-anant-luxury",
        "name": "Luxury Valley View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "35 sq.m",
        "description": "35 sq.m wooden-accented room with private balcony framing Rohtang mountain peaks.",
        "pricePerNight": 8500,
        "price": 8500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Valley View",
          "Balcony",
          "Heating",
          "Free Wi-Fi",
          "Tea/Coffee Maker"
        ]
      },
      {
        "id": "room-manali-anant-suite",
        "name": "Anantmaya Presidential Suite",
        "type": "SUITE",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King Bed + 1 Queen Bed",
        "roomSize": "65 sq.m",
        "description": "65 sq.m duplex chalet suite with glass-fronted fireplace and panoramic snow peak vista.",
        "pricePerNight": 16500,
        "price": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Fireplace",
          "Duplex Chalet",
          "Panoramic Balcony",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-manali-the-himalayan",
    "destinationId": "dest-manali",
    "name": "The Himalayan",
    "city": "Manali",
    "state": "Himachal Pradesh",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Hadimba Road, Manali 175131, Himachal Pradesh, India",
    "address": "Hadimba Road, Manali 175131",
    "latitude": 32.2472,
    "longitude": 77.1814,
    "description": "Gothic-revival premier castle resort set among cedar groves near Hadimba Temple, offering outdoor heated swimming pool and antique-furnished chambers.",
    "shortDescription": "Gothic-revival castle resort featuring antique suites and heated outdoor pool near Hadimba.",
    "category": "LUXURY",
    "rating": 4.6,
    "officialWebsite": "https://www.thehimalayan.com/",
    "phone": "+91 1902 250 999",
    "email": "info@thehimalayan.com",
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "totalRooms": 20,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 12000,
    "amenities": [
      "Outdoor Heated Swimming Pool",
      "Castle Dining Room",
      "The Dungeon Bar",
      "Cedar Grove Gardens",
      "Free High-Speed Wi-Fi",
      "Fireplace in Cottages",
      "Spa & Wellness"
    ],
    "roomTypes": [
      {
        "id": "room-manali-himalayan-castle",
        "name": "Castle Grand Room",
        "type": "DELUXE",
        "description": "42 sq.m medieval castle chamber with four-poster bed, brass bath fittings, and mountain views.",
        "maxGuests": 2,
        "bedType": "1 Four-Poster King Bed",
        "roomSize": "42 sq.m",
        "price": 12000,
        "pricePerNight": 12000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Four-Poster Bed",
          "Mountain View",
          "Cast-Iron Fireplace",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-manali-himalayan-cottage",
        "name": "Two-Bedroom Stone Cottage",
        "type": "COTTAGE",
        "description": "90 sq.m standalone stone cottage with wood-burning fireplace, kitchenette, and private veranda.",
        "maxGuests": 4,
        "bedType": "2 King Beds",
        "roomSize": "90 sq.m",
        "price": 24000,
        "pricePerNight": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Wood Fireplace",
          "Kitchenette",
          "Private Veranda",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Himalayan Manali castle architecture",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.thehimalayan.com/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-manali-himalayan-castle",
        "name": "Castle Grand Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Four-Poster King Bed",
        "roomSize": "42 sq.m",
        "description": "42 sq.m medieval castle chamber with four-poster bed, brass bath fittings, and mountain views.",
        "pricePerNight": 12000,
        "price": 12000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Four-Poster Bed",
          "Mountain View",
          "Cast-Iron Fireplace",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-manali-himalayan-cottage",
        "name": "Two-Bedroom Stone Cottage",
        "type": "COTTAGE",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "2 King Beds",
        "roomSize": "90 sq.m",
        "description": "90 sq.m standalone stone cottage with wood-burning fireplace, kitchenette, and private veranda.",
        "pricePerNight": 24000,
        "price": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Wood Fireplace",
          "Kitchenette",
          "Private Veranda",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-manali-johnson-lodge",
    "destinationId": "dest-manali",
    "name": "Johnson Lodge & Spa",
    "city": "Manali",
    "state": "Himachal Pradesh",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Circuit House Road, Siyal, Manali 175131, Himachal Pradesh, India",
    "address": "Circuit House Road, Siyal, Manali 175131",
    "latitude": 32.2479,
    "longitude": 77.1867,
    "description": "Historic wood and stone alpine lodge near Circuit House, famed for Johnson's Cafe & Bar serving trout delicacies, garden cocktail lawns, and spa.",
    "shortDescription": "Historic alpine lodge on Circuit House Road renowned for Johnson's Cafe and trout dining.",
    "category": "FOUR_STAR",
    "rating": 4.4,
    "officialWebsite": "https://www.johnsonlodge.in/",
    "phone": "+91 1902 251 523",
    "email": "reservations@johnsonlodge.in",
    "checkInTime": "13:00",
    "checkOutTime": "11:00",
    "totalRooms": 26,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 6500,
    "amenities": [
      "Famous Johnson's Cafe & Bar",
      "Garden Cocktail Lawns",
      "Ayurvedic Spa & Sauna",
      "Free High-Speed Wi-Fi",
      "Room Heating",
      "Travel Desk for Solang Excursions"
    ],
    "roomTypes": [
      {
        "id": "room-manali-johnson-deluxe",
        "name": "Deluxe Alpine Room",
        "type": "DELUXE",
        "description": "28 sq.m room finished in fragrant pine wood with modern en-suite bath.",
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "28 sq.m",
        "price": 6500,
        "pricePerNight": 6500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Pine Wood Interiors",
          "Room Heater",
          "Tea/Coffee Maker"
        ]
      },
      {
        "id": "room-manali-johnson-suite",
        "name": "Garden Suite with Fireplace",
        "type": "SUITE",
        "description": "48 sq.m suite featuring private fireplace and French doors opening onto apple lawns.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "price": 11000,
        "pricePerNight": 11000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Fireplace",
          "Garden View",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Johnson Lodge Manali alpine wooden architecture",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.johnsonlodge.in/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-manali-johnson-deluxe",
        "name": "Deluxe Alpine Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "28 sq.m",
        "description": "28 sq.m room finished in fragrant pine wood with modern en-suite bath.",
        "pricePerNight": 6500,
        "price": 6500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Pine Wood Interiors",
          "Room Heater",
          "Tea/Coffee Maker"
        ]
      },
      {
        "id": "room-manali-johnson-suite",
        "name": "Garden Suite with Fireplace",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "description": "48 sq.m suite featuring private fireplace and French doors opening onto apple lawns.",
        "pricePerNight": 11000,
        "price": 11000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Fireplace",
          "Garden View",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-manali-shingar-regency",
    "destinationId": "dest-manali",
    "name": "Shingar Regency",
    "city": "Manali",
    "state": "Himachal Pradesh",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Hadimba Temple Road, Manali 175131, Himachal Pradesh, India",
    "address": "Hadimba Temple Road, Manali 175131",
    "latitude": 32.2483,
    "longitude": 77.1822,
    "description": "Charming hillside retreat located just paces from Hadimba Temple, surrounded by towering deodar trees with Jharokha multi-cuisine restaurant and Apple Lounge bar.",
    "shortDescription": "Hillside hotel amid towering deodar forests moments from ancient Hadimba Temple.",
    "category": "FOUR_STAR",
    "rating": 4.3,
    "officialWebsite": "https://www.shingarhotels.com/",
    "phone": "+91 1902 253 434",
    "email": "manali@shingarhotels.com",
    "checkInTime": "13:00",
    "checkOutTime": "11:00",
    "totalRooms": 64,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 5500,
    "amenities": [
      "Deodar Forest Views",
      "Jharokha Restaurant",
      "Apple Lounge Bar",
      "Free High-Speed Wi-Fi",
      "Central Heating",
      "Hadimba Temple Walking Distance"
    ],
    "roomTypes": [
      {
        "id": "room-manali-shingar-sup",
        "name": "Superior Valley View Room",
        "type": "DOUBLE",
        "description": "26 sq.m room with balcony framing pine valleys and snowy ridge lines.",
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "26 sq.m",
        "price": 5500,
        "pricePerNight": 5500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Valley Balcony",
          "Free Wi-Fi",
          "Room Heater",
          "TV"
        ]
      },
      {
        "id": "room-manali-shingar-regency",
        "name": "Regency Suite",
        "type": "SUITE",
        "description": "44 sq.m suite with master bedroom and living area overlooking cedar forest.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "price": 9200,
        "pricePerNight": 9200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Cedar Forest View",
          "Separate Living Area",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Shingar Regency Manali pine forest view",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.shingarhotels.com/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-manali-shingar-sup",
        "name": "Superior Valley View Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "26 sq.m",
        "description": "26 sq.m room with balcony framing pine valleys and snowy ridge lines.",
        "pricePerNight": 5500,
        "price": 5500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Valley Balcony",
          "Free Wi-Fi",
          "Room Heater",
          "TV"
        ]
      },
      {
        "id": "room-manali-shingar-regency",
        "name": "Regency Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "description": "44 sq.m suite with master bedroom and living area overlooking cedar forest.",
        "pricePerNight": 9200,
        "price": 9200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Cedar Forest View",
          "Separate Living Area",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-manali-span-resort",
    "destinationId": "dest-manali",
    "name": "Span Resort & Spa",
    "city": "Baragran",
    "state": "Himachal Pradesh",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Baragran N.H. 21, Kullu-Manali Highway, Manali 175129, Himachal Pradesh, India",
    "address": "Baragran N.H. 21, Kullu-Manali Highway, Manali 175129",
    "latitude": 32.1287,
    "longitude": 77.1725,
    "description": "Legendary 12-acre riverside resort established in 1981 right on the banks of the glacial Beas River, featuring outdoor heated swimming pool, helipad, and Spa l'Occitane.",
    "shortDescription": "Iconic 12-acre riverside sanctuary situated directly on the banks of the Beas River.",
    "category": "LUXURY",
    "rating": 4.6,
    "officialWebsite": "https://spanresorts.com/",
    "phone": "+91 1902 240 138",
    "email": "info@spanresorts.com",
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "totalRooms": 36,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 15000,
    "amenities": [
      "Direct Beas River Frontage",
      "Heated Swimming Pool",
      "Spa l'Occitane",
      "Private Helipad",
      "Trout Fishing Angling",
      "Riverside Dining & Bonfires",
      "Free High-Speed Wi-Fi"
    ],
    "roomTypes": [
      {
        "id": "room-manali-span-grand",
        "name": "Grand Deluxe Riverside Room",
        "type": "DELUXE",
        "description": "48 sq.m room with wood fireplace and French doors opening right onto the roaring Beas River.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "price": 15000,
        "pricePerNight": 15000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Riverfront Veranda",
          "Wood Fireplace",
          "Deep Soak Tub",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-manali-span-cottage",
        "name": "Premier River Chalet",
        "type": "COTTAGE",
        "description": "85 sq.m standalone luxury chalet with private lawn touching the riverbank.",
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "price": 28000,
        "pricePerNight": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Riverbank Lawn",
          "Living Room",
          "Fireplace",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Span Resort & Spa Beas riverbank",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://spanresorts.com/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-manali-span-grand",
        "name": "Grand Deluxe Riverside Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "description": "48 sq.m room with wood fireplace and French doors opening right onto the roaring Beas River.",
        "pricePerNight": 15000,
        "price": 15000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Riverfront Veranda",
          "Wood Fireplace",
          "Deep Soak Tub",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-manali-span-cottage",
        "name": "Premier River Chalet",
        "type": "COTTAGE",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "description": "85 sq.m standalone luxury chalet with private lawn touching the riverbank.",
        "pricePerNight": 28000,
        "price": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Riverbank Lawn",
          "Living Room",
          "Fireplace",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-manali-allure-grand",
    "destinationId": "dest-manali",
    "name": "The Allure Grand Resort",
    "city": "Bahang",
    "state": "Himachal Pradesh",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Bahang, Leh-Manali Highway, Manali 175103, Himachal Pradesh, India",
    "address": "Bahang, Leh-Manali Highway, Manali 175103",
    "latitude": 32.2731,
    "longitude": 77.1894,
    "description": "Riverside resort perched on the Leh-Manali Highway with clear views of the Beas River and snow ridges, featuring outdoor pool, Spa, and multi-cuisine restaurant.",
    "shortDescription": "Riverside resort along the Leh-Manali Highway offering unobstructed river and valley views.",
    "category": "FOUR_STAR",
    "rating": 4.4,
    "officialWebsite": "https://thealluregrand.com/",
    "phone": "+91 1902 251 044",
    "email": "info@thealluregrand.com",
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "totalRooms": 50,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 6200,
    "amenities": [
      "Riverside Deck & Pool",
      "Wellness Spa",
      "Multi-Cuisine Restaurant",
      "Free High-Speed Wi-Fi",
      "Central Heating",
      "Free On-site Parking"
    ],
    "roomTypes": [
      {
        "id": "room-manali-allure-classic",
        "name": "River View Deluxe Room",
        "type": "DELUXE",
        "description": "32 sq.m guestroom with private balcony looking out onto the Beas River and pine forest.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 6200,
        "pricePerNight": 6200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "River View Balcony",
          "Free Wi-Fi",
          "Room Heater",
          "Tea Maker"
        ]
      },
      {
        "id": "room-manali-allure-suite",
        "name": "Allure Grand Suite",
        "type": "SUITE",
        "description": "55 sq.m riverfront suite with floor-to-ceiling glass and jacuzzi tub.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "price": 10500,
        "pricePerNight": 10500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Jacuzzi Tub",
          "Riverfront Glass Wall",
          "Living Area",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Allure Grand Resort riverside",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://thealluregrand.com/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-manali-allure-classic",
        "name": "River View Deluxe Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m guestroom with private balcony looking out onto the Beas River and pine forest.",
        "pricePerNight": 6200,
        "price": 6200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "River View Balcony",
          "Free Wi-Fi",
          "Room Heater",
          "Tea Maker"
        ]
      },
      {
        "id": "room-manali-allure-suite",
        "name": "Allure Grand Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "description": "55 sq.m riverfront suite with floor-to-ceiling glass and jacuzzi tub.",
        "pricePerNight": 10500,
        "price": 10500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Jacuzzi Tub",
          "Riverfront Glass Wall",
          "Living Area",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-manali-snow-valley",
    "destinationId": "dest-manali",
    "name": "Snow Valley Resorts",
    "city": "Manali",
    "state": "Himachal Pradesh",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Log Huts Area, Manali 175131, Himachal Pradesh, India",
    "address": "Log Huts Area, Manali 175131",
    "latitude": 32.2536,
    "longitude": 77.1783,
    "description": "Peaceful resort in the prime Log Huts VIP area, surrounded by apple orchards and pine woods with Valley View dining and games parlor.",
    "shortDescription": "Popular family resort situated in the prime Log Huts area with panoramic valley views.",
    "category": "THREE_STAR",
    "rating": 4.3,
    "officialWebsite": "https://www.snowvalleyresorts.com/manali/",
    "phone": "+91 1902 253 228",
    "email": "manali@snowvalleyresorts.com",
    "checkInTime": "13:00",
    "checkOutTime": "11:00",
    "totalRooms": 52,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 4200,
    "amenities": [
      "Valley View Terrace",
      "The Orchid Multi-Cuisine Restaurant",
      "Games Room & Pool Table",
      "Free High-Speed Wi-Fi",
      "Room Heating",
      "Kids Play Area"
    ],
    "roomTypes": [
      {
        "id": "room-manali-sv-standard",
        "name": "Standard Room",
        "type": "DOUBLE",
        "description": "22 sq.m pine-finished room with essential comforts and forest air.",
        "maxGuests": 2,
        "bedType": "1 Double Bed",
        "roomSize": "22 sq.m",
        "price": 4200,
        "pricePerNight": 4200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Room Heater",
          "TV",
          "Hot Water"
        ]
      },
      {
        "id": "room-manali-sv-duplex",
        "name": "Duplex Family Suite",
        "type": "FAMILY",
        "description": "40 sq.m split-level duplex suite ideal for families travelling with children.",
        "maxGuests": 4,
        "bedType": "2 Queen Beds",
        "roomSize": "40 sq.m",
        "price": 7500,
        "pricePerNight": 7500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Duplex Layout",
          "Valley Balcony",
          "Tea/Coffee Maker",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Snow Valley Resorts Log Huts Area",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.snowvalleyresorts.com/manali/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-manali-sv-standard",
        "name": "Standard Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Double Bed",
        "roomSize": "22 sq.m",
        "description": "22 sq.m pine-finished room with essential comforts and forest air.",
        "pricePerNight": 4200,
        "price": 4200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Room Heater",
          "TV",
          "Hot Water"
        ]
      },
      {
        "id": "room-manali-sv-duplex",
        "name": "Duplex Family Suite",
        "type": "FAMILY",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "2 Queen Beds",
        "roomSize": "40 sq.m",
        "description": "40 sq.m split-level duplex suite ideal for families travelling with children.",
        "pricePerNight": 7500,
        "price": 7500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Duplex Layout",
          "Valley Balcony",
          "Tea/Coffee Maker",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-manali-apple-country",
    "destinationId": "dest-manali",
    "name": "Apple Country Resort",
    "city": "Manali",
    "state": "Himachal Pradesh",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Log Huts Area, Old Manali, Manali 175131, Himachal Pradesh, India",
    "address": "Log Huts Area, Old Manali, Manali 175131",
    "latitude": 32.2558,
    "longitude": 77.1764,
    "description": "Set at one of the highest points in Log Huts Area, surrounded by pine forests and apple orchards, offering Pure Veg fine dining, Discotheque, and Aroma Spa.",
    "shortDescription": "High-altitude resort in Log Huts area with panoramic Himalayan valley views and spa.",
    "category": "FOUR_STAR",
    "rating": 4.2,
    "officialWebsite": "https://www.applecountryresorts.com/",
    "phone": "+91 1902 254 107",
    "email": "reservations@applecountryresorts.com",
    "checkInTime": "13:00",
    "checkOutTime": "11:00",
    "totalRooms": 39,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 5800,
    "amenities": [
      "Highest Point Panoramic Views",
      "Pure Vegetarian Gourmet Dining",
      "Aroma Spa & Sauna",
      "Free High-Speed Wi-Fi",
      "Discotheque & Bar",
      "Central Heating"
    ],
    "roomTypes": [
      {
        "id": "room-manali-apple-deluxe",
        "name": "Deluxe Pine Room",
        "type": "DELUXE",
        "description": "28 sq.m room lined with cedar woodwork and balcony facing snow peaks.",
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "28 sq.m",
        "price": 5800,
        "pricePerNight": 5800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Pine Wood Balcony",
          "Free Wi-Fi",
          "Room Heater",
          "Mountain View"
        ]
      },
      {
        "id": "room-manali-apple-honeymoon",
        "name": "Honeymoon Suite with Jacuzzi",
        "type": "SUITE",
        "description": "46 sq.m suite featuring in-room jacuzzi overlooking the snow peaks.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "46 sq.m",
        "price": 11000,
        "pricePerNight": 11000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "In-room Jacuzzi",
          "Panoramic View",
          "Special Floral Decor",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Apple Country Resort snow view",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.applecountryresorts.com/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-manali-apple-deluxe",
        "name": "Deluxe Pine Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "28 sq.m",
        "description": "28 sq.m room lined with cedar woodwork and balcony facing snow peaks.",
        "pricePerNight": 5800,
        "price": 5800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Pine Wood Balcony",
          "Free Wi-Fi",
          "Room Heater",
          "Mountain View"
        ]
      },
      {
        "id": "room-manali-apple-honeymoon",
        "name": "Honeymoon Suite with Jacuzzi",
        "type": "SUITE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "46 sq.m",
        "description": "46 sq.m suite featuring in-room jacuzzi overlooking the snow peaks.",
        "pricePerNight": 11000,
        "price": 11000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "In-room Jacuzzi",
          "Panoramic View",
          "Special Floral Decor",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-blr-taj-west-end",
    "destinationId": "dest-bengaluru",
    "name": "Taj West End, Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "25 Race Course Road, High Grounds, Bengaluru 560001, Karnataka, India",
    "address": "25 Race Course Road, High Grounds, Bengaluru 560001",
    "latitude": 12.9847,
    "longitude": 77.5847,
    "description": "Built in 1887 across 20 acres of lush botanical gardens, featuring heritage trees, colonial architecture, Blue Ginger Vietnamese restaurant, and Jiva Spa.",
    "shortDescription": "Historic 1887 sanctuary set in 20 acres of heritage botanical gardens on Race Course Road.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/taj-west-end-bengaluru/",
    "phone": "+91 80 6660 5660",
    "email": "westend.bengaluru@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 117,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 16000,
    "amenities": [
      "20-Acre Botanical Garden",
      "Outdoor Swimming Pool",
      "Jiva Spa",
      "Blue Ginger Vietnamese Dining",
      "Free High-Speed Wi-Fi",
      "Tennis Courts",
      "Heritage Walks"
    ],
    "roomTypes": [
      {
        "id": "room-blr-taj-garden",
        "name": "Luxury Garden View Room",
        "type": "DELUXE",
        "description": "51 sq.m room with colonial verandah opening directly onto hundred-year-old banyan trees.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "51 sq.m",
        "price": 16000,
        "pricePerNight": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Botanical Verandah",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-blr-taj-suite",
        "name": "Colonial Heritage Suite",
        "type": "SUITE",
        "description": "98 sq.m historic suite with high ceilings, private dining room, and butler service.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "98 sq.m",
        "price": 35000,
        "pricePerNight": 35000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Dining Room",
          "Heritage Verandah",
          "Personal Butler",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Taj West End Bengaluru colonial garden",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/taj-west-end-bengaluru/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-blr-taj-garden",
        "name": "Luxury Garden View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "51 sq.m",
        "description": "51 sq.m room with colonial verandah opening directly onto hundred-year-old banyan trees.",
        "pricePerNight": 16000,
        "price": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Botanical Verandah",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-blr-taj-suite",
        "name": "Colonial Heritage Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "98 sq.m",
        "description": "98 sq.m historic suite with high ceilings, private dining room, and butler service.",
        "pricePerNight": 35000,
        "price": 35000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Dining Room",
          "Heritage Verandah",
          "Personal Butler",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-blr-itc-gardenia",
    "destinationId": "dest-bengaluru",
    "name": "ITC Gardenia, a Luxury Collection Hotel",
    "city": "Bengaluru",
    "state": "Karnataka",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "1 Residency Road, Ashok Nagar, Bengaluru 560025, Karnataka, India",
    "address": "1 Residency Road, Ashok Nagar, Bengaluru 560025",
    "latitude": 12.9669,
    "longitude": 77.5968,
    "description": "LEED Platinum certified luxury hotel inspired by Bengaluru's gardens, featuring wind-cooled lobby, outdoor pool, Kaya Kalp Spa, and Edo Japanese restaurant.",
    "shortDescription": "LEED Platinum luxury hotel on Residency Road embodying Bengaluru's Garden City heritage.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.itchotels.com/in/en/itcgardenia-bengaluru",
    "phone": "+91 80 2211 9898",
    "email": "reservations.itcgardenia@itchotels.in",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 292,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 14500,
    "amenities": [
      "Outdoor Swimming Pool",
      "Kaya Kalp The Royal Spa",
      "Edo Japanese Restaurant",
      "Cubbon Pavilion",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive Club Lounge"
    ],
    "roomTypes": [
      {
        "id": "room-blr-itc-tower",
        "name": "The Towers Room",
        "type": "EXECUTIVE",
        "description": "41 sq.m room with balcony overlooking the garden atrium, plus Towers Lounge privileges.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "41 sq.m",
        "price": 14500,
        "pricePerNight": 14500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Garden Balcony",
          "Towers Lounge",
          "Free Wi-Fi",
          "Marble Bathroom"
        ]
      },
      {
        "id": "room-blr-itc-flamingo",
        "name": "Flamingo Suite",
        "type": "SUITE",
        "description": "82 sq.m suite featuring private terrace garden and round-the-clock butler service.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "82 sq.m",
        "price": 28000,
        "pricePerNight": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Terrace Garden",
          "Butler Service",
          "Living Room",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "ITC Gardenia Bengaluru vertical garden",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.itchotels.com/in/en/itcgardenia-bengaluru",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-blr-itc-tower",
        "name": "The Towers Room",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "41 sq.m",
        "description": "41 sq.m room with balcony overlooking the garden atrium, plus Towers Lounge privileges.",
        "pricePerNight": 14500,
        "price": 14500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Garden Balcony",
          "Towers Lounge",
          "Free Wi-Fi",
          "Marble Bathroom"
        ]
      },
      {
        "id": "room-blr-itc-flamingo",
        "name": "Flamingo Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "82 sq.m",
        "description": "82 sq.m suite featuring private terrace garden and round-the-clock butler service.",
        "pricePerNight": 28000,
        "price": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Terrace Garden",
          "Butler Service",
          "Living Room",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-blr-oberoi",
    "destinationId": "dest-bengaluru",
    "name": "The Oberoi, Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "37-39 Mahatma Gandhi Road, Bengaluru 560001, Karnataka, India",
    "address": "37-39 Mahatma Gandhi Road, Bengaluru 560001",
    "latitude": 12.9738,
    "longitude": 77.6186,
    "description": "Centrally positioned on MG Road, built around a centenarian raintree with lush gardens. Offering private balconies in all rooms, Rim Naam Thai restaurant, and Oberoi Spa.",
    "shortDescription": "Urban resort on MG Road built around a centenarian raintree with private room balconies.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.oberoihotels.com/hotels-in-bengaluru/",
    "phone": "+91 80 2558 5858",
    "email": "reservations.bengaluru@oberoihotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 160,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 17500,
    "amenities": [
      "Centenarian Raintree Gardens",
      "Outdoor Swimming Pool",
      "The Oberoi Spa",
      "Rim Naam Alfresco Thai Dining",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-blr-oberoi-prem-garden",
        "name": "Premier Garden View Room",
        "type": "DELUXE",
        "description": "44 sq.m room with private balcony looking directly onto tropical garden foliage.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "price": 17500,
        "pricePerNight": 17500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Garden Balcony",
          "Free Wi-Fi",
          "Standalone Tub",
          "Butler Service"
        ]
      },
      {
        "id": "room-blr-oberoi-exec-suite",
        "name": "Executive Suite with Balcony",
        "type": "SUITE",
        "description": "80 sq.m suite featuring spacious living room, dual balconies, and personalized dining.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "price": 32000,
        "pricePerNight": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Dual Balconies",
          "Living Room",
          "24/7 Butler",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Oberoi Bengaluru raintree garden",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.oberoihotels.com/hotels-in-bengaluru/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-blr-oberoi-prem-garden",
        "name": "Premier Garden View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "description": "44 sq.m room with private balcony looking directly onto tropical garden foliage.",
        "pricePerNight": 17500,
        "price": 17500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Garden Balcony",
          "Free Wi-Fi",
          "Standalone Tub",
          "Butler Service"
        ]
      },
      {
        "id": "room-blr-oberoi-exec-suite",
        "name": "Executive Suite with Balcony",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "description": "80 sq.m suite featuring spacious living room, dual balconies, and personalized dining.",
        "pricePerNight": 32000,
        "price": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Dual Balconies",
          "Living Room",
          "24/7 Butler",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-blr-jw-marriott",
    "destinationId": "dest-bengaluru",
    "name": "JW Marriott Hotel Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "24/1 Vittal Mallya Road, Bengaluru 560001, Karnataka, India",
    "address": "24/1 Vittal Mallya Road, Bengaluru 560001",
    "latitude": 12.9723,
    "longitude": 77.5956,
    "description": "Overlooking lush Cubbon Park and UB City luxury mall, featuring heated outdoor pool, Spa by JW, JW Kitchen, and rooftop ALBA Italian dining.",
    "shortDescription": "Prestigious address overlooking Cubbon Park and adjoining luxury UB City.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.marriott.com/hotels/travel/blrjw-jw-marriott-hotel-bengaluru/",
    "phone": "+91 80 6718 9999",
    "email": "jw.bengaluru@marriott.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 281,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 15500,
    "amenities": [
      "Cubbon Park Facing Views",
      "Outdoor Heated Pool",
      "Spa by JW",
      "ALBA Italian & JW Kitchen",
      "Free High-Speed Wi-Fi",
      "Executive Lounge Access",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-blr-jw-park-view",
        "name": "Deluxe King Cubbon Park View",
        "type": "DELUXE",
        "description": "42 sq.m room with floor-to-ceiling glass looking out over the emerald green canopy of Cubbon Park.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "price": 15500,
        "pricePerNight": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Cubbon Park View",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-blr-jw-exec-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "description": "84 sq.m corner suite with executive lounge privileges, separate living room, and powder room.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "84 sq.m",
        "price": 29000,
        "pricePerNight": 29000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Executive Lounge",
          "Living Room",
          "Park Panorama",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "JW Marriott Bengaluru Cubbon Park view",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/blrjw-jw-marriott-hotel-bengaluru/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-blr-jw-park-view",
        "name": "Deluxe King Cubbon Park View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "description": "42 sq.m room with floor-to-ceiling glass looking out over the emerald green canopy of Cubbon Park.",
        "pricePerNight": 15500,
        "price": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Cubbon Park View",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-blr-jw-exec-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "84 sq.m",
        "description": "84 sq.m corner suite with executive lounge privileges, separate living room, and powder room.",
        "pricePerNight": 29000,
        "price": 29000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Executive Lounge",
          "Living Room",
          "Park Panorama",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-blr-hyatt-centric",
    "destinationId": "dest-bengaluru",
    "name": "Hyatt Centric MG Road Bangalore",
    "city": "Bengaluru",
    "state": "Karnataka",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "1/1 Swami Vivekananda Road, Ulsoor, Bengaluru 560008, Karnataka, India",
    "address": "1/1 Swami Vivekananda Road, Ulsoor, Bengaluru 560008",
    "latitude": 12.9754,
    "longitude": 77.6214,
    "description": "Chic boutique lifestyle hotel overlooking Ulsoor Lake and near MG Road metro, offering rooftop pool, The Bengaluru Brasserie, and spa.",
    "shortDescription": "Chic lifestyle hotel overlooking scenic Ulsoor Lake near MG Road shopping hubs.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.hyatt.com/hyatt-centric/blrmg-hyatt-centric-mg-road-bangalore",
    "phone": "+91 80 4344 0000",
    "email": "bangalore.centric@hyatt.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 143,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 8500,
    "amenities": [
      "Ulsoor Lake Views",
      "Outdoor Rooftop Pool",
      "The Bengaluru Brasserie",
      "Spa & Salon",
      "Free High-Speed Wi-Fi",
      "24-Hour Fitness Studio"
    ],
    "roomTypes": [
      {
        "id": "room-blr-hc-king",
        "name": "King Bed City View",
        "type": "DOUBLE",
        "description": "32 sq.m modern room with bold artwork and views of MG Road skyline.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 8500,
        "pricePerNight": 8500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "City View",
          "Rain Shower",
          "Work Desk"
        ]
      },
      {
        "id": "room-blr-hc-lake-suite",
        "name": "Executive Suite Lake View",
        "type": "SUITE",
        "description": "65 sq.m suite with direct vista of tranquil Ulsoor Lake waters.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "price": 15500,
        "pricePerNight": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Ulsoor Lake View",
          "Living Area",
          "Espresso Machine",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Hyatt Centric MG Road Bangalore pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/hyatt-centric/blrmg-hyatt-centric-mg-road-bangalore",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-blr-hc-king",
        "name": "King Bed City View",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m modern room with bold artwork and views of MG Road skyline.",
        "pricePerNight": 8500,
        "price": 8500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "City View",
          "Rain Shower",
          "Work Desk"
        ]
      },
      {
        "id": "room-blr-hc-lake-suite",
        "name": "Executive Suite Lake View",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "description": "65 sq.m suite with direct vista of tranquil Ulsoor Lake waters.",
        "pricePerNight": 15500,
        "price": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Ulsoor Lake View",
          "Living Area",
          "Espresso Machine",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-blr-leela-palace",
    "destinationId": "dest-bengaluru",
    "name": "The Leela Palace Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "23 HAL Old Airport Road, Kodihalli, Bengaluru 560008, Karnataka, India",
    "address": "23 HAL Old Airport Road, Kodihalli, Bengaluru 560008",
    "latitude": 12.9606,
    "longitude": 77.6484,
    "description": "Palatial 7-acre grand hotel inspired by the Vijayanagara Empire with copper domes and ornate archways, featuring Le Cirque Signature, Jamavar, and lagoon pool.",
    "shortDescription": "Palatial architectural masterpiece inspired by Vijayanagara royalty set in 7 acres.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.theleela.com/the-leela-palace-bengaluru",
    "phone": "+91 80 2521 1234",
    "email": "reservations@theleela.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 357,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 18000,
    "amenities": [
      "Lagoon Outdoor Swimming Pool",
      "The Spa by ESPA",
      "Le Cirque Signature & Jamavar",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Luxury Shopping Arcade",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-blr-leela-deluxe",
        "name": "Deluxe Palace Room",
        "type": "DELUXE",
        "description": "50 sq.m regal guestroom with silk fabrics, gold-leaf details, and garden balcony.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "50 sq.m",
        "price": 18000,
        "pricePerNight": 18000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Garden Balcony",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Palace Butler"
        ]
      },
      {
        "id": "room-blr-leela-royal-suite",
        "name": "Royal Suite",
        "type": "SUITE",
        "description": "110 sq.m royal suite with separate living and dining rooms, private pantry, and Jacuzzi.",
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "110 sq.m",
        "price": 45000,
        "pricePerNight": 45000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Jacuzzi",
          "Dining Room",
          "Dedicated Butler",
          "Airport Limousine"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Leela Palace Bengaluru domes",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.theleela.com/the-leela-palace-bengaluru",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-blr-leela-deluxe",
        "name": "Deluxe Palace Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "50 sq.m",
        "description": "50 sq.m regal guestroom with silk fabrics, gold-leaf details, and garden balcony.",
        "pricePerNight": 18000,
        "price": 18000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Garden Balcony",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Palace Butler"
        ]
      },
      {
        "id": "room-blr-leela-royal-suite",
        "name": "Royal Suite",
        "type": "SUITE",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "110 sq.m",
        "description": "110 sq.m royal suite with separate living and dining rooms, private pantry, and Jacuzzi.",
        "pricePerNight": 45000,
        "price": 45000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Jacuzzi",
          "Dining Room",
          "Dedicated Butler",
          "Airport Limousine"
        ]
      }
    ]
  },
  {
    "id": "hotel-blr-ritz-carlton",
    "destinationId": "dest-bengaluru",
    "name": "The Ritz-Carlton, Bangalore",
    "city": "Bengaluru",
    "state": "Karnataka",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "99 Residency Road, Shanthala Nagar, Ashok Nagar, Bengaluru 560025, Karnataka, India",
    "address": "99 Residency Road, Shanthala Nagar, Bengaluru 560025",
    "latitude": 12.9686,
    "longitude": 77.6033,
    "description": "Centrally located on Residency Road featuring iconic Jaali architectural screens, outdoor swimming pool with private cabanas, The Ritz-Carlton Spa, and Bang rooftop bar.",
    "shortDescription": "Ultra-luxury hotel on Residency Road featuring Jaali architecture and Bang rooftop lounge.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.ritzcarlton.com/en/hotels/india/bangalore",
    "phone": "+91 80 4914 8000",
    "email": "rc.blrrz.leads@ritzcarlton.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 277,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 16500,
    "amenities": [
      "Outdoor Pool with Private Cabanas",
      "The Ritz-Carlton Spa",
      "Bang Rooftop Bar",
      "Riwaz Indian Specialty Dining",
      "Free High-Speed Wi-Fi",
      "24-Hour Fitness Center",
      "Club Lounge Privileges"
    ],
    "roomTypes": [
      {
        "id": "room-blr-rc-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "description": "52 sq.m guestroom with marble bathroom, Asprey bath amenities, and panoramic city views.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "52 sq.m",
        "price": 16500,
        "pricePerNight": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Asprey Amenities",
          "Free Wi-Fi",
          "Oversized Marble Bath",
          "City View"
        ]
      },
      {
        "id": "room-blr-rc-club-suite",
        "name": "The Ritz-Carlton Club Suite",
        "type": "SUITE",
        "description": "95 sq.m corner suite with Club Lounge access, five daily culinary presentations, and private salon.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "95 sq.m",
        "price": 34000,
        "pricePerNight": 34000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Club Lounge 5 Presentations",
          "Separate Living Room",
          "Walk-in Wardrobe",
          "Butler Service"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Ritz-Carlton Bangalore exterior",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.ritzcarlton.com/en/hotels/india/bangalore",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-blr-rc-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "52 sq.m",
        "description": "52 sq.m guestroom with marble bathroom, Asprey bath amenities, and panoramic city views.",
        "pricePerNight": 16500,
        "price": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Asprey Amenities",
          "Free Wi-Fi",
          "Oversized Marble Bath",
          "City View"
        ]
      },
      {
        "id": "room-blr-rc-club-suite",
        "name": "The Ritz-Carlton Club Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "95 sq.m",
        "description": "95 sq.m corner suite with Club Lounge access, five daily culinary presentations, and private salon.",
        "pricePerNight": 34000,
        "price": 34000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Club Lounge 5 Presentations",
          "Separate Living Room",
          "Walk-in Wardrobe",
          "Butler Service"
        ]
      }
    ]
  },
  {
    "id": "hotel-blr-shangri-la",
    "destinationId": "dest-bengaluru",
    "name": "Shangri-La Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "56-6B Palace Road, Abshot Layout, Vasanth Nagar, Bengaluru 560052, Karnataka, India",
    "address": "56-6B Palace Road, Vasanth Nagar, Bengaluru 560052",
    "latitude": 12.9934,
    "longitude": 77.5898,
    "description": "Soaring 19-storey hotel on Palace Road near Bangalore Palace, offering panoramic Bangalore skyline views, outdoor pool, CHI The Spa, and Shang Palace.",
    "shortDescription": "19-storey luxury tower on Palace Road with panoramic skyline views and CHI The Spa.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.shangri-la.com/bengaluru/shangrila/",
    "phone": "+91 80 4512 8888",
    "email": "bengaluru@shangri-la.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 397,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 12000,
    "amenities": [
      "Outdoor Swimming Pool",
      "CHI, The Spa",
      "Shang Palace Cantonese Dining",
      "Hype Rooftop Lounge",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Horizon Club Privileges"
    ],
    "roomTypes": [
      {
        "id": "room-blr-shang-deluxe",
        "name": "Deluxe King Palace View",
        "type": "DELUXE",
        "description": "44 sq.m room with floor-to-ceiling glass looking toward Bangalore Palace grounds.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "price": 12000,
        "pricePerNight": 12000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Palace View",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-blr-shang-horizon-suite",
        "name": "Horizon Club Suite",
        "type": "SUITE",
        "description": "90 sq.m corner suite with Horizon Club lounge access, evening wine tasting, and private boardroom.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "price": 24000,
        "pricePerNight": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Horizon Club Access",
          "Separate Living Area",
          "Complimentary Breakfast",
          "High Floor Skyline View"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Shangri-La Bengaluru tower",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.shangri-la.com/bengaluru/shangrila/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-blr-shang-deluxe",
        "name": "Deluxe King Palace View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "description": "44 sq.m room with floor-to-ceiling glass looking toward Bangalore Palace grounds.",
        "pricePerNight": 12000,
        "price": 12000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Palace View",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-blr-shang-horizon-suite",
        "name": "Horizon Club Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "description": "90 sq.m corner suite with Horizon Club lounge access, evening wine tasting, and private boardroom.",
        "pricePerNight": 24000,
        "price": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Horizon Club Access",
          "Separate Living Area",
          "Complimentary Breakfast",
          "High Floor Skyline View"
        ]
      }
    ]
  },
  {
    "id": "hotel-ccu-itc-royal-bengal",
    "destinationId": "dest-kolkata",
    "name": "ITC Royal Bengal, a Luxury Collection Hotel",
    "city": "Kolkata",
    "state": "West Bengal",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "1 JBS Haldane Avenue, Kolkata 700046, West Bengal, India",
    "address": "1 JBS Haldane Avenue, Kolkata 700046",
    "latitude": 22.5447,
    "longitude": 88.3975,
    "description": "Palatial 30-storey luxury tribute to Bengal's heritage along EM Bypass, featuring grand marble colonnades, Grand Market Pavilion, Royal Vega, and Kaya Kalp Spa.",
    "shortDescription": "Palatial 30-storey luxury hotel honoring Bengal's cultural aristocracy along EM Bypass.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.itchotels.com/in/en/itcroyalbengal-kolkata",
    "phone": "+91 33 4446 4646",
    "email": "reservations.itcroyalbengal@itchotels.in",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 456,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 13500,
    "amenities": [
      "Rooftop Swimming Pool",
      "Kaya Kalp The Royal Spa",
      "Royal Vega & Grand Market Pavilion",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "The Brass Room Lounge",
      "Helipad"
    ],
    "roomTypes": [
      {
        "id": "room-ccu-itc-tower",
        "name": "The Towers Room",
        "type": "EXECUTIVE",
        "description": "48 sq.m expansive room with handcrafted Bengal art, marble bathroom, and Towers Lounge privileges.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "price": 13500,
        "pricePerNight": 13500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Towers Lounge Privileges",
          "Marble Bath",
          "City View"
        ]
      },
      {
        "id": "room-ccu-itc-bengal-suite",
        "name": "Bengal Suite",
        "type": "SUITE",
        "description": "96 sq.m palatial suite with separate living salon, dining area, and dedicated butler.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "96 sq.m",
        "price": 27000,
        "pricePerNight": 27000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Dedicated Butler",
          "Dining Area",
          "Living Salon",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "ITC Royal Bengal Kolkata grand tower",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.itchotels.com/in/en/itcroyalbengal-kolkata",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ccu-itc-tower",
        "name": "The Towers Room",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "description": "48 sq.m expansive room with handcrafted Bengal art, marble bathroom, and Towers Lounge privileges.",
        "pricePerNight": 13500,
        "price": 13500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Towers Lounge Privileges",
          "Marble Bath",
          "City View"
        ]
      },
      {
        "id": "room-ccu-itc-bengal-suite",
        "name": "Bengal Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "96 sq.m",
        "description": "96 sq.m palatial suite with separate living salon, dining area, and dedicated butler.",
        "pricePerNight": 27000,
        "price": 27000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Dedicated Butler",
          "Dining Area",
          "Living Salon",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-ccu-itc-sonar",
    "destinationId": "dest-kolkata",
    "name": "ITC Sonar, a Luxury Collection Hotel",
    "city": "Kolkata",
    "state": "West Bengal",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "1 JBS Haldane Avenue, Opp Science City, Kolkata 700046, West Bengal, India",
    "address": "1 JBS Haldane Avenue, Opp Science City, Kolkata 700046",
    "latitude": 22.5432,
    "longitude": 88.3969,
    "description": "Designed on the concept of traditional baganbaris (Bengal country garden houses) with sprawling lily ponds, outdoor pool, Eden Pavilion, and Dum Pukht.",
    "shortDescription": "Garden hotel set amid tranquil lily ponds and water pavilions opposite Science City.",
    "category": "FIVE_STAR",
    "rating": 4.7,
    "officialWebsite": "https://www.itchotels.com/in/en/itcsonar-kolkata",
    "phone": "+91 33 2345 4545",
    "email": "reservations.itcsonar@itchotels.in",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 237,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 11000,
    "amenities": [
      "Tranquil Water Garden & Lily Ponds",
      "Outdoor Swimming Pool",
      "Dum Pukht Awadhi Dining",
      "Kaya Kalp Spa",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Jogging Track"
    ],
    "roomTypes": [
      {
        "id": "room-ccu-sonar-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "description": "37 sq.m room with warm wooden flooring overlooking reflective lotus ponds.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "37 sq.m",
        "price": 11000,
        "pricePerNight": 11000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Water Garden View",
          "Free Wi-Fi",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-ccu-sonar-itc-one",
        "name": "ITC One Luxury Room",
        "type": "DELUXE",
        "description": "51 sq.m premier room with personalized butler assistance and lounge privileges.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "51 sq.m",
        "price": 17500,
        "pricePerNight": 17500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Lounge Access",
          "Butler Service",
          "Sunken Bathtub",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "ITC Sonar Kolkata lily pond",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.itchotels.com/in/en/itcsonar-kolkata",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ccu-sonar-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "37 sq.m",
        "description": "37 sq.m room with warm wooden flooring overlooking reflective lotus ponds.",
        "pricePerNight": 11000,
        "price": 11000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Water Garden View",
          "Free Wi-Fi",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-ccu-sonar-itc-one",
        "name": "ITC One Luxury Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "51 sq.m",
        "description": "51 sq.m premier room with personalized butler assistance and lounge privileges.",
        "pricePerNight": 17500,
        "price": 17500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Lounge Access",
          "Butler Service",
          "Sunken Bathtub",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-ccu-jw-marriott",
    "destinationId": "dest-kolkata",
    "name": "JW Marriott Hotel Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "4A JBS Haldane Avenue, Kolkata 700105, West Bengal, India",
    "address": "4A JBS Haldane Avenue, Kolkata 700105",
    "latitude": 22.5489,
    "longitude": 88.3982,
    "description": "Contemporary 5-star hotel situated on EM Bypass featuring an outdoor infinity edge pool, Spa by JW, JW Kitchen, and Vintage Asia fine dining.",
    "shortDescription": "Sleek 5-star luxury property on EM Bypass with infinity pool and Asian fine dining.",
    "category": "FIVE_STAR",
    "rating": 4.7,
    "officialWebsite": "https://www.marriott.com/hotels/travel/ccujw-jw-marriott-hotel-kolkata/",
    "phone": "+91 33 6633 0000",
    "email": "jw.kolkata@marriott.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 281,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 12500,
    "amenities": [
      "Outdoor Infinity Pool",
      "Spa by JW",
      "JW Kitchen & Vintage Asia",
      "Gold's Gym Fitness Center",
      "Free High-Speed Wi-Fi",
      "Executive Lounge",
      "24-Hour Room Service"
    ],
    "roomTypes": [
      {
        "id": "room-ccu-jw-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "description": "40 sq.m guestroom with panoramic city views and luxurious JW bedding.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "40 sq.m",
        "price": 12500,
        "pricePerNight": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "City View",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-ccu-jw-exec-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "description": "80 sq.m suite featuring separate living room, executive lounge privileges, and skyline views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "price": 24000,
        "pricePerNight": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Executive Lounge Access",
          "Living Room",
          "Skyline Panorama",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "JW Marriott Hotel Kolkata infinity pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/ccujw-jw-marriott-hotel-kolkata/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ccu-jw-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "40 sq.m",
        "description": "40 sq.m guestroom with panoramic city views and luxurious JW bedding.",
        "pricePerNight": 12500,
        "price": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "City View",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-ccu-jw-exec-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "description": "80 sq.m suite featuring separate living room, executive lounge privileges, and skyline views.",
        "pricePerNight": 24000,
        "price": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Executive Lounge Access",
          "Living Room",
          "Skyline Panorama",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-ccu-taj-bengal",
    "destinationId": "dest-kolkata",
    "name": "Taj Bengal, Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "34B Belvedere Road, Alipore, Kolkata 700027, West Bengal, India",
    "address": "34B Belvedere Road, Alipore, Kolkata 700027",
    "latitude": 22.5356,
    "longitude": 88.3328,
    "description": "Distinguished 5-star landmark in green Alipore designed by architect Bob Fox, featuring towering atrium filled with palms, Sonargaon Bengali dining, and Jiva Spa.",
    "shortDescription": "Distinguished luxury hotel in upscale Alipore with iconic towering atrium and Sonargaon dining.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/taj-bengal-kolkata/",
    "phone": "+91 33 6612 3939",
    "email": "bengal.kolkata@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 229,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 13000,
    "amenities": [
      "Outdoor Swimming Pool",
      "Jiva Spa",
      "Sonargaon Authentic Bengali Dining",
      "The Atrium Bar & Lounge",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Art Gallery"
    ],
    "roomTypes": [
      {
        "id": "room-ccu-tb-deluxe",
        "name": "Deluxe Room",
        "type": "DELUXE",
        "description": "34 sq.m room with colonial woodwork, city or pool views, and marble bath.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "34 sq.m",
        "price": 13000,
        "pricePerNight": 13000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Atrium or Pool View",
          "Marble Bath",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ccu-tb-taj-club",
        "name": "Taj Club Room",
        "type": "EXECUTIVE",
        "description": "42 sq.m executive floor room with Taj Club Lounge privileges and complimentary airport transfers.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "price": 19500,
        "pricePerNight": 19500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Taj Club Lounge",
          "Airport Transfer",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Taj Bengal Kolkata Alipore entrance",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/taj-bengal-kolkata/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ccu-tb-deluxe",
        "name": "Deluxe Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "34 sq.m",
        "description": "34 sq.m room with colonial woodwork, city or pool views, and marble bath.",
        "pricePerNight": 13000,
        "price": 13000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Atrium or Pool View",
          "Marble Bath",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ccu-tb-taj-club",
        "name": "Taj Club Room",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "description": "42 sq.m executive floor room with Taj Club Lounge privileges and complimentary airport transfers.",
        "pricePerNight": 19500,
        "price": 19500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Taj Club Lounge",
          "Airport Transfer",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-ccu-hyatt-centric-ballygunge",
    "destinationId": "dest-kolkata",
    "name": "Hyatt Centric Ballygunge Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "17 Garcha 1st Lane, Dover Terrace, Ballygunge, Kolkata 700019, West Bengal, India",
    "address": "17 Garcha 1st Lane, Dover Terrace, Ballygunge, Kolkata 700019",
    "latitude": 22.5256,
    "longitude": 88.3618,
    "description": "Contemporary lifestyle hotel in vibrant South Kolkata residential neighborhood of Ballygunge, offering outdoor pool, Yauatcha Asian dining, and salon.",
    "shortDescription": "Vibrant lifestyle hotel in trendy South Kolkata close to cultural cafes and boutiques.",
    "category": "FOUR_STAR",
    "rating": 4.4,
    "officialWebsite": "https://www.hyatt.com/hyatt-centric/ccuhc-hyatt-centric-ballygunge-kolkata",
    "phone": "+91 33 3988 1234",
    "email": "ballygunge.centric@hyatt.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 93,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 7500,
    "amenities": [
      "Outdoor Pool",
      "Yauatcha Asian Dining",
      "Ballygunge Neighborhood Hub",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "24-Hour Front Desk"
    ],
    "roomTypes": [
      {
        "id": "room-ccu-hc-king",
        "name": "Standard King Bed",
        "type": "DOUBLE",
        "description": "30 sq.m guestroom with eclectic local artwork and modern walk-in rain shower.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "30 sq.m",
        "price": 7500,
        "pricePerNight": 7500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Rain Shower",
          "Work Desk",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ccu-hc-suite",
        "name": "Centric Suite",
        "type": "SUITE",
        "description": "58 sq.m suite with living lounge, Nespresso machine, and neighborhood vistas.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "58 sq.m",
        "price": 13500,
        "pricePerNight": 13500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Living Lounge",
          "Nespresso Machine",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Hyatt Centric Ballygunge modern facade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/hyatt-centric/ccuhc-hyatt-centric-ballygunge-kolkata",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ccu-hc-king",
        "name": "Standard King Bed",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "30 sq.m",
        "description": "30 sq.m guestroom with eclectic local artwork and modern walk-in rain shower.",
        "pricePerNight": 7500,
        "price": 7500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Rain Shower",
          "Work Desk",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ccu-hc-suite",
        "name": "Centric Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "58 sq.m",
        "description": "58 sq.m suite with living lounge, Nespresso machine, and neighborhood vistas.",
        "pricePerNight": 13500,
        "price": 13500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Living Lounge",
          "Nespresso Machine",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-ccu-hyatt-regency",
    "destinationId": "dest-kolkata",
    "name": "Hyatt Regency Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "JA-1, Sector III, Salt Lake City, Kolkata 700098, West Bengal, India",
    "address": "JA-1, Sector III, Salt Lake City, Kolkata 700098",
    "latitude": 22.5714,
    "longitude": 88.4061,
    "description": "Spread over 6.5 acres in Salt Lake City, offering outdoor landscaped swimming pool, Club Prana spa, squash and tennis courts, and Guchhi tandoori dining.",
    "shortDescription": "6.5-acre business resort in Salt Lake City with sports courts and Club Prana spa.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.hyatt.com/hyatt-regency/kolka-hyatt-regency-kolkata",
    "phone": "+91 33 2335 1234",
    "email": "kolkata.regency@hyatt.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 233,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 8000,
    "amenities": [
      "Landscaped Outdoor Pool",
      "Club Prana Spa & Salon",
      "Squash & Tennis Courts",
      "Guchhi & Waterside Cafe",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Salt Lake Stadium Proximity"
    ],
    "roomTypes": [
      {
        "id": "room-ccu-hr-std",
        "name": "Standard King Room",
        "type": "DOUBLE",
        "description": "36 sq.m room with floor-to-ceiling windows and Italian marble bathroom.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "36 sq.m",
        "price": 8000,
        "pricePerNight": 8000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Marble Bathroom",
          "Air Conditioning",
          "Tea/Coffee Maker"
        ]
      },
      {
        "id": "room-ccu-hr-regency-suite",
        "name": "Regency Suite",
        "type": "SUITE",
        "description": "72 sq.m suite with separate parlor, Regency Club privileges, and pool views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "72 sq.m",
        "price": 15000,
        "pricePerNight": 15000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Regency Club Lounge",
          "Pool View",
          "Deep Soak Tub",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Hyatt Regency Kolkata grounds",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/hyatt-regency/kolka-hyatt-regency-kolkata",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ccu-hr-std",
        "name": "Standard King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "36 sq.m",
        "description": "36 sq.m room with floor-to-ceiling windows and Italian marble bathroom.",
        "pricePerNight": 8000,
        "price": 8000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Marble Bathroom",
          "Air Conditioning",
          "Tea/Coffee Maker"
        ]
      },
      {
        "id": "room-ccu-hr-regency-suite",
        "name": "Regency Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "72 sq.m",
        "description": "72 sq.m suite with separate parlor, Regency Club privileges, and pool views.",
        "pricePerNight": 15000,
        "price": 15000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Regency Club Lounge",
          "Pool View",
          "Deep Soak Tub",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-ccu-oberoi-grand",
    "destinationId": "dest-kolkata",
    "name": "The Oberoi Grand, Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "15 Jawaharlal Nehru Road, New Market Area, Dharmatala, Kolkata 700013, West Bengal, India",
    "address": "15 Jawaharlal Nehru Road, Dharmatala, Kolkata 700013",
    "latitude": 22.5606,
    "longitude": 88.3519,
    "description": "The legendary 'Grande Dame of Chowringhee' established in the late 19th century, featuring central palm-fringed swimming pool, Threesixtythree° dining, and Spa.",
    "shortDescription": "Legendary 'Grande Dame of Chowringhee' colonial palace hotel in the heart of Kolkata.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.oberoihotels.com/hotels-in-kolkata/",
    "phone": "+91 33 2249 2323",
    "email": "reservations.kolkata@oberoihotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 209,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 16000,
    "amenities": [
      "Colonial Courtyard Pool",
      "The Oberoi Spa",
      "Threesixtythree° & Baan Thai",
      "Free High-Speed Wi-Fi",
      "New Market Walking Proximity",
      "24-Hour Butler Service",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-ccu-og-premier",
        "name": "Premier Room with Courtyard View",
        "type": "DELUXE",
        "description": "38 sq.m Victorian-inspired room with teak furnishings looking onto palm-shaded pool courtyard.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "price": 16000,
        "pricePerNight": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Courtyard Pool View",
          "Free Wi-Fi",
          "Victorian Furnishings",
          "Butler Service"
        ]
      },
      {
        "id": "room-ccu-og-heritage-suite",
        "name": "Classic Heritage Suite",
        "type": "SUITE",
        "description": "75 sq.m historic suite with high ceilings, antique four-poster bed, and separate salon.",
        "maxGuests": 3,
        "bedType": "1 Four-Poster King Bed",
        "roomSize": "75 sq.m",
        "price": 32000,
        "pricePerNight": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Four-Poster Bed",
          "Separate Salon",
          "24/7 Butler",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Oberoi Grand Kolkata colonial colonnade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.oberoihotels.com/hotels-in-kolkata/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ccu-og-premier",
        "name": "Premier Room with Courtyard View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "description": "38 sq.m Victorian-inspired room with teak furnishings looking onto palm-shaded pool courtyard.",
        "pricePerNight": 16000,
        "price": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Courtyard Pool View",
          "Free Wi-Fi",
          "Victorian Furnishings",
          "Butler Service"
        ]
      },
      {
        "id": "room-ccu-og-heritage-suite",
        "name": "Classic Heritage Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 Four-Poster King Bed",
        "roomSize": "75 sq.m",
        "description": "75 sq.m historic suite with high ceilings, antique four-poster bed, and separate salon.",
        "pricePerNight": 32000,
        "price": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Four-Poster Bed",
          "Separate Salon",
          "24/7 Butler",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-ccu-westin-rajarhat",
    "destinationId": "dest-kolkata",
    "name": "The Westin Kolkata Rajarhat",
    "city": "Kolkata",
    "state": "West Bengal",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Plot No. CBD/2, International Financial Hub, Action Area II, New Town, Kolkata 700156, West Bengal, India",
    "address": "Plot No. CBD/2, Action Area II, New Town, Kolkata 700156",
    "latitude": 22.6025,
    "longitude": 88.4739,
    "description": "Towering 32-storey hotel in New Town Rajarhat IT corridor close to Kolkata Airport, featuring outdoor infinity pool, Heavenly Spa by Westin, and 31/32 rooftop lounge.",
    "shortDescription": "Towering 32-storey luxury hotel in New Town Rajarhat near Netaji Subhash Chandra Bose Airport.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.marriott.com/hotels/travel/ccuwi-the-westin-kolkata-rajarhat/",
    "phone": "+91 33 4037 1234",
    "email": "westin.kolkata@westin.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 304,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 9500,
    "amenities": [
      "Outdoor Infinity Pool",
      "Heavenly Spa by Westin",
      "31/32 Rooftop Lounge",
      "WestinWORKOUT Fitness Studio",
      "Free High-Speed Wi-Fi",
      "Executive Club Lounge",
      "Airport Shuttle"
    ],
    "roomTypes": [
      {
        "id": "room-ccu-westin-deluxe",
        "name": "Deluxe King City View",
        "type": "DELUXE",
        "description": "42 sq.m room featuring signature Westin Heavenly Bed and views of Eco Park lake.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "price": 9500,
        "pricePerNight": 9500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Heavenly Bed",
          "Free Wi-Fi",
          "Eco Park View",
          "Deep Soak Tub"
        ]
      },
      {
        "id": "room-ccu-westin-exec-suite",
        "name": "Westin Executive Suite",
        "type": "SUITE",
        "description": "85 sq.m high-floor suite with Westin Club Lounge access and panoramic New Town views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "price": 18500,
        "pricePerNight": 18500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Westin Club Access",
          "Separate Living Room",
          "High Floor Panorama",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Westin Kolkata Rajarhat tower",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/ccuwi-the-westin-kolkata-rajarhat/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ccu-westin-deluxe",
        "name": "Deluxe King City View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "description": "42 sq.m room featuring signature Westin Heavenly Bed and views of Eco Park lake.",
        "pricePerNight": 9500,
        "price": 9500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Heavenly Bed",
          "Free Wi-Fi",
          "Eco Park View",
          "Deep Soak Tub"
        ]
      },
      {
        "id": "room-ccu-westin-exec-suite",
        "name": "Westin Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "description": "85 sq.m high-floor suite with Westin Club Lounge access and panoramic New Town views.",
        "pricePerNight": 18500,
        "price": 18500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Westin Club Access",
          "Separate Living Room",
          "High Floor Panorama",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-bbi-mayfair-lagoon",
    "destinationId": "dest-bhubaneswar",
    "name": "MAYFAIR Lagoon, Bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "8-B Jaydev Vihar, Bhubaneswar 751013, Odisha, India",
    "address": "8-B Jaydev Vihar, Bhubaneswar 751013",
    "latitude": 20.2995,
    "longitude": 85.8239,
    "description": "Sprawling 10-acre eco-friendly luxury resort centered around an expansive lagoon in Jaydev Vihar, featuring Odishan temple stone architecture, private villas, Mayfair Spa, and Tea Pot buffet.",
    "shortDescription": "Sprawling 10-acre luxury sanctuary surrounding a picturesque lagoon in Jaydev Vihar.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.mayfairhotels.com/mayfair-lagoon-bhubaneswar.html",
    "phone": "+91 674 666 0101",
    "email": "lagoon@mayfairhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 102,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 9500,
    "amenities": [
      "Natural Lagoon Waterway",
      "Outdoor Swimming Pool",
      "Mayfair Spa & Wellness",
      "Tea Pot & Kanika Odia Dining",
      "Free High-Speed Wi-Fi",
      "Fitness Center & Tennis",
      "Bowling Alley & Entertainment"
    ],
    "roomTypes": [
      {
        "id": "room-bbi-mayfair-exec",
        "name": "Executive Cottage Room",
        "type": "COTTAGE",
        "description": "36 sq.m wooden cottage with balcony overlooking serene lagoon waters and tropical greenery.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "36 sq.m",
        "price": 9500,
        "pricePerNight": 9500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Lagoon View",
          "Balcony",
          "Free Wi-Fi",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-bbi-mayfair-villa",
        "name": "Lagoon Villa with Private Pool",
        "type": "VILLA",
        "description": "85 sq.m luxury standalone villa with private plunge pool and personalized butler hospitality.",
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "price": 22000,
        "pricePerNight": 22000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Plunge Pool",
          "Lagoon Water Access",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "MAYFAIR Lagoon Bhubaneswar waterway",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.mayfairhotels.com/mayfair-lagoon-bhubaneswar.html",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-bbi-mayfair-exec",
        "name": "Executive Cottage Room",
        "type": "COTTAGE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "36 sq.m",
        "description": "36 sq.m wooden cottage with balcony overlooking serene lagoon waters and tropical greenery.",
        "pricePerNight": 9500,
        "price": 9500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Lagoon View",
          "Balcony",
          "Free Wi-Fi",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-bbi-mayfair-villa",
        "name": "Lagoon Villa with Private Pool",
        "type": "VILLA",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "description": "85 sq.m luxury standalone villa with private plunge pool and personalized butler hospitality.",
        "pricePerNight": 22000,
        "price": 22000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Plunge Pool",
          "Lagoon Water Access",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-bbi-trident",
    "destinationId": "dest-bhubaneswar",
    "name": "Trident, Bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "CB-1 Nayapalli, Bhubaneswar 751013, Odisha, India",
    "address": "CB-1 Nayapalli, Bhubaneswar 751013",
    "latitude": 20.3012,
    "longitude": 85.8194,
    "description": "Serene 14-acre resort located in Nayapalli, surrounded by lush manicured gardens and fruit orchards, offering outdoor pool, jogging track, and The Restaurant serving Odia seafood specialties.",
    "shortDescription": "14-acre tranquil garden sanctuary in Nayapalli with orchard trails and outdoor pool.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.tridenthotels.com/hotels-in-bhubaneswar/",
    "phone": "+91 674 230 1010",
    "email": "reservations.bhubaneswar@tridenthotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 62,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 8000,
    "amenities": [
      "14-Acre Landscaped Gardens",
      "Outdoor Swimming Pool",
      "The Restaurant (Authentic Odia & Global)",
      "Jogging Track",
      "Free High-Speed Wi-Fi",
      "Business Center",
      "Concierge Desk"
    ],
    "roomTypes": [
      {
        "id": "room-bbi-trident-deluxe",
        "name": "Deluxe Garden View Room",
        "type": "DELUXE",
        "description": "28 sq.m comfortable room with floor-to-ceiling glass looking onto fruit orchards.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "28 sq.m",
        "price": 8000,
        "pricePerNight": 8000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Garden View",
          "Free Wi-Fi",
          "Mini Bar",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-bbi-trident-suite",
        "name": "Trident Suite",
        "type": "SUITE",
        "description": "56 sq.m suite featuring separate living area, private terrace, and orchard views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "56 sq.m",
        "price": 15500,
        "pricePerNight": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Terrace",
          "Living Room",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Trident Bhubaneswar garden lawns",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tridenthotels.com/hotels-in-bhubaneswar/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-bbi-trident-deluxe",
        "name": "Deluxe Garden View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "28 sq.m",
        "description": "28 sq.m comfortable room with floor-to-ceiling glass looking onto fruit orchards.",
        "pricePerNight": 8000,
        "price": 8000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Garden View",
          "Free Wi-Fi",
          "Mini Bar",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-bbi-trident-suite",
        "name": "Trident Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "56 sq.m",
        "description": "56 sq.m suite featuring separate living area, private terrace, and orchard views.",
        "pricePerNight": 15500,
        "price": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Terrace",
          "Living Room",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-bbi-swosti-premium",
    "destinationId": "dest-bhubaneswar",
    "name": "Swosti Premium Hotel",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "P1 Jaydev Vihar, Nandankanan Road, Bhubaneswar 751013, Odisha, India",
    "address": "P1 Jaydev Vihar, Nandankanan Road, Bhubaneswar 751013",
    "latitude": 20.3041,
    "longitude": 85.8252,
    "description": "Largest convention luxury hotel in Eastern India on Nandankanan Road, featuring outdoor swimming pool, Scottish Bar, Panorama restaurant, and health club.",
    "shortDescription": "Largest convention hotel in Eastern India with extensive banqueting and pool facilities.",
    "category": "FOUR_STAR",
    "rating": 4.3,
    "officialWebsite": "https://www.swostihotels.com/swosti-premium/",
    "phone": "+91 674 661 1111",
    "email": "information@swostihotels.com",
    "checkInTime": "12:00",
    "checkOutTime": "11:00",
    "totalRooms": 147,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 5500,
    "amenities": [
      "Outdoor Swimming Pool",
      "Panorama & Confetti Restaurants",
      "Rob Roy Scottish Bar",
      "Free High-Speed Wi-Fi",
      "Gym & Steam Bath",
      "Banqueting Convention Halls"
    ],
    "roomTypes": [
      {
        "id": "room-bbi-swosti-exec",
        "name": "Business Club Room",
        "type": "DOUBLE",
        "description": "28 sq.m functional room with modern work desk and pool or city views.",
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "28 sq.m",
        "price": 5500,
        "pricePerNight": 5500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Work Desk",
          "Air Conditioning",
          "Tea/Coffee Maker"
        ]
      },
      {
        "id": "room-bbi-swosti-suite",
        "name": "Premium Executive Suite",
        "type": "SUITE",
        "description": "52 sq.m suite with living lounge, jacuzzi tub, and city skyline view.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "52 sq.m",
        "price": 9500,
        "pricePerNight": 9500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Living Lounge",
          "Jacuzzi",
          "Airport Pickup",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Swosti Premium Hotel Bhubaneswar",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.swostihotels.com/swosti-premium/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-bbi-swosti-exec",
        "name": "Business Club Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "28 sq.m",
        "description": "28 sq.m functional room with modern work desk and pool or city views.",
        "pricePerNight": 5500,
        "price": 5500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Work Desk",
          "Air Conditioning",
          "Tea/Coffee Maker"
        ]
      },
      {
        "id": "room-bbi-swosti-suite",
        "name": "Premium Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "52 sq.m",
        "description": "52 sq.m suite with living lounge, jacuzzi tub, and city skyline view.",
        "pricePerNight": 9500,
        "price": 9500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Living Lounge",
          "Jacuzzi",
          "Airport Pickup",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-bbi-vivanta",
    "destinationId": "dest-bhubaneswar",
    "name": "Vivanta Bhubaneswar DN Square",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "DN Regalia Mall, Patrapada, Bhubaneswar 751019, Odisha, India",
    "address": "DN Regalia Mall, Patrapada, Bhubaneswar 751019",
    "latitude": 20.2464,
    "longitude": 85.7533,
    "description": "Contemporary 5-star hotel attached to DN Regalia Mall on NH16, offering rooftop pool, Mynt all-day dining, Wink bar, and close access to AIIMS Bhubaneswar.",
    "shortDescription": "Sleek contemporary 5-star hotel attached to DN Regalia Mall on NH16 with rooftop pool.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.tajhotels.com/en-in/vivanta/bhubaneswar-dn-square/",
    "phone": "+91 674 668 5555",
    "email": "vivanta.dnsquare@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 136,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 7200,
    "amenities": [
      "Rooftop Swimming Pool",
      "Mynt Multi-Cuisine Dining",
      "Wink Lounge Bar",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Connected to DN Regalia Mall",
      "NH16 Highway Connectivity"
    ],
    "roomTypes": [
      {
        "id": "room-bbi-vivanta-superior",
        "name": "Superior City View Room",
        "type": "DOUBLE",
        "description": "32 sq.m vibrant room with floor-to-ceiling glass and plush king bedding.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 7200,
        "pricePerNight": 7200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "City View",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-bbi-vivanta-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "description": "64 sq.m suite featuring separate living area, bathtub, and high-floor panoramic views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "64 sq.m",
        "price": 13500,
        "pricePerNight": 13500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Separate Living Room",
          "Bathtub",
          "High Floor Skyline View",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Vivanta Bhubaneswar rooftop pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/vivanta/bhubaneswar-dn-square/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-bbi-vivanta-superior",
        "name": "Superior City View Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m vibrant room with floor-to-ceiling glass and plush king bedding.",
        "pricePerNight": 7200,
        "price": 7200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "City View",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-bbi-vivanta-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "64 sq.m",
        "description": "64 sq.m suite featuring separate living area, bathtub, and high-floor panoramic views.",
        "pricePerNight": 13500,
        "price": 13500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Separate Living Room",
          "Bathtub",
          "High Floor Skyline View",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-bbi-welcomhotel",
    "destinationId": "dest-bhubaneswar",
    "name": "Welcomhotel by ITC Hotels, Bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "D/1, Dumduma, Khandagiri, Bhubaneswar 751019, Odisha, India",
    "address": "D/1, Dumduma, Khandagiri, Bhubaneswar 751019",
    "latitude": 20.2522,
    "longitude": 85.7767,
    "description": "LEED Platinum luxury hotel inspired by Kalinga temple architecture close to ancient Khandagiri & Udayagiri Caves, featuring Sunjar restaurant, K&K, and Kairali Ayurvedic Spa.",
    "shortDescription": "LEED Platinum hotel near Khandagiri Caves paying homage to ancient Kalinga temple stonecraft.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.itchotels.com/in/en/welcomhotelbhubaneswar",
    "phone": "+91 674 350 2020",
    "email": "reservations.whbhubaneswar@itchotels.in",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 107,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 7500,
    "amenities": [
      "Outdoor Swimming Pool",
      "K&K Specialty Dining & Sunjar",
      "Kairali Ayurvedic Spa",
      "Khandagiri Caves Proximity",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive Boardroom"
    ],
    "roomTypes": [
      {
        "id": "room-bbi-welcom-deluxe",
        "name": "Deluxe King Room",
        "type": "DOUBLE",
        "description": "32 sq.m room with Odia ikat textiles, stone carvings, and courtyard garden view.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 7500,
        "pricePerNight": 7500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Courtyard View",
          "Free Wi-Fi",
          "Rain Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-bbi-welcom-suite",
        "name": "Welcomhotel Suite",
        "type": "SUITE",
        "description": "64 sq.m suite with living lounge, deep soaking tub, and temple-inspired decor.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "64 sq.m",
        "price": 14000,
        "pricePerNight": 14000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Living Lounge",
          "Deep Soak Tub",
          "Khandagiri View",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Welcomhotel Bhubaneswar Kalinga architecture",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.itchotels.com/in/en/welcomhotelbhubaneswar",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-bbi-welcom-deluxe",
        "name": "Deluxe King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m room with Odia ikat textiles, stone carvings, and courtyard garden view.",
        "pricePerNight": 7500,
        "price": 7500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Courtyard View",
          "Free Wi-Fi",
          "Rain Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-bbi-welcom-suite",
        "name": "Welcomhotel Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "64 sq.m",
        "description": "64 sq.m suite with living lounge, deep soaking tub, and temple-inspired decor.",
        "pricePerNight": 14000,
        "price": 14000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Living Lounge",
          "Deep Soak Tub",
          "Khandagiri View",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-bbi-mayfair-convention",
    "destinationId": "dest-bhubaneswar",
    "name": "MAYFAIR Convention, Bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Near Jaydev Vihar, Bhubaneswar 751013, Odisha, India",
    "address": "Near Jaydev Vihar, Bhubaneswar 751013",
    "latitude": 20.2988,
    "longitude": 85.8248,
    "description": "Executive business hotel across from MAYFAIR Lagoon in Jaydev Vihar, offering direct convention center access, multi-cuisine dining, and gym.",
    "shortDescription": "Executive business hotel located opposite MAYFAIR Lagoon in Jaydev Vihar.",
    "category": "FOUR_STAR",
    "rating": 4.4,
    "officialWebsite": "https://www.mayfairhotels.com/mayfair-convention-bhubaneswar.html",
    "phone": "+91 674 666 0102",
    "email": "convention@mayfairhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 60,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 5000,
    "amenities": [
      "Convention Center Access",
      "Multi-Cuisine Restaurant",
      "Access to Lagoon Facilities",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Business Center"
    ],
    "roomTypes": [
      {
        "id": "room-bbi-mayfair-conv-exec",
        "name": "Executive Room",
        "type": "DOUBLE",
        "description": "26 sq.m business room with ergonomic workspace and modern amenities.",
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "26 sq.m",
        "price": 5000,
        "pricePerNight": 5000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Work Desk",
          "Air Conditioning",
          "Tea/Coffee Maker"
        ]
      },
      {
        "id": "room-bbi-mayfair-conv-deluxe",
        "name": "Deluxe Room",
        "type": "DELUXE",
        "description": "32 sq.m spacious room with pool view and upgraded bath amenities.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 6800,
        "pricePerNight": 6800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Pool View",
          "Mini Bar",
          "Free Wi-Fi",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "MAYFAIR Convention Bhubaneswar",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.mayfairhotels.com/mayfair-convention-bhubaneswar.html",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-bbi-mayfair-conv-exec",
        "name": "Executive Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "26 sq.m",
        "description": "26 sq.m business room with ergonomic workspace and modern amenities.",
        "pricePerNight": 5000,
        "price": 5000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Work Desk",
          "Air Conditioning",
          "Tea/Coffee Maker"
        ]
      },
      {
        "id": "room-bbi-mayfair-conv-deluxe",
        "name": "Deluxe Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m spacious room with pool view and upgraded bath amenities.",
        "pricePerNight": 6800,
        "price": 6800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Pool View",
          "Mini Bar",
          "Free Wi-Fi",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-bbi-fortune-sishmo",
    "destinationId": "dest-bhubaneswar",
    "name": "Fortune Park Sishmo",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "86/A-1 Gautam Nagar, Bhubaneswar 751014, Odisha, India",
    "address": "86/A-1 Gautam Nagar, Bhubaneswar 751014",
    "latitude": 20.2558,
    "longitude": 85.8361,
    "description": "Centrally located ITC Fortune member hotel near Bhubaneswar Railway Station, offering rooftop swimming pool, Zodiac 24-hour restaurant, and wellness center.",
    "shortDescription": "Comfortable ITC Fortune hotel in Gautam Nagar close to Bhubaneswar Railway Station.",
    "category": "FOUR_STAR",
    "rating": 4.2,
    "officialWebsite": "https://www.fortunehotels.in/bhubaneswar-fortune-park-sishmo.dh.33",
    "phone": "+91 674 668 8444",
    "email": "fp.sishmo@fortunehotels.in",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 72,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 4800,
    "amenities": [
      "Rooftop Swimming Pool",
      "Zodiac Multi-Cuisine Coffee Shop",
      "Neptune Bar & Lounge",
      "Free High-Speed Wi-Fi",
      "Railway Station Proximity",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-bbi-fortune-standard",
        "name": "Standard Room",
        "type": "DOUBLE",
        "description": "25 sq.m contemporary room with city outlook and modern walk-in shower.",
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "25 sq.m",
        "price": 4800,
        "pricePerNight": 4800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-bbi-fortune-club",
        "name": "Fortune Club Room",
        "type": "EXECUTIVE",
        "description": "32 sq.m corner room with upgraded amenities and complimentary airport/station transfer.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 6800,
        "pricePerNight": 6800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Station Transfer",
          "Free Wi-Fi",
          "City View",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Fortune Park Sishmo Bhubaneswar",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.fortunehotels.in/bhubaneswar-fortune-park-sishmo.dh.33",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-bbi-fortune-standard",
        "name": "Standard Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "25 sq.m",
        "description": "25 sq.m contemporary room with city outlook and modern walk-in shower.",
        "pricePerNight": 4800,
        "price": 4800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-bbi-fortune-club",
        "name": "Fortune Club Room",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m corner room with upgraded amenities and complimentary airport/station transfer.",
        "pricePerNight": 6800,
        "price": 6800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Station Transfer",
          "Free Wi-Fi",
          "City View",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-bbi-novotel-janpath",
    "destinationId": "dest-bhubaneswar",
    "name": "Novotel Bhubaneswar Janpath",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Janpath Road, Kharvel Nagar, Bhubaneswar 751001, Odisha, India",
    "address": "Janpath Road, Kharvel Nagar, Bhubaneswar 751001",
    "latitude": 20.2797,
    "longitude": 85.8428,
    "description": "Centrally located on bustling Janpath Road in commercial Kharvel Nagar, offering rooftop pool with city panoramic views, The Square restaurant, and In Balance fitness center.",
    "shortDescription": "Modern Accor property in central Kharvel Nagar on Janpath Road with rooftop pool.",
    "category": "FOUR_STAR",
    "rating": 4.3,
    "officialWebsite": "https://all.accor.com/hotel/B2D8/index.en.shtml",
    "phone": "+91 674 710 8888",
    "email": "hb2d8-re@accor.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 115,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 5800,
    "amenities": [
      "Rooftop Swimming Pool",
      "The Square Multi-Cuisine Restaurant",
      "In Balance Fitness Center",
      "Free High-Speed Wi-Fi",
      "Janpath Commercial Location",
      "Airport & Station Connectivity"
    ],
    "roomTypes": [
      {
        "id": "room-bbi-novotel-sup",
        "name": "Superior King Room",
        "type": "DOUBLE",
        "description": "28 sq.m modern guestroom with city views, ergonomic workstation, and Novotel LIVE N DREAM bed.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "28 sq.m",
        "price": 5800,
        "pricePerNight": 5800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Workstation",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-bbi-novotel-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "description": "55 sq.m suite with separate parlor, high floor city vista, and espresso machine.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "price": 10500,
        "pricePerNight": 10500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Separate Parlor",
          "Espresso Machine",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Novotel Bhubaneswar Janpath facade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://all.accor.com/hotel/B2D8/index.en.shtml",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-bbi-novotel-sup",
        "name": "Superior King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "28 sq.m",
        "description": "28 sq.m modern guestroom with city views, ergonomic workstation, and Novotel LIVE N DREAM bed.",
        "pricePerNight": 5800,
        "price": 5800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Workstation",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-bbi-novotel-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "description": "55 sq.m suite with separate parlor, high floor city vista, and espresso machine.",
        "pricePerNight": 10500,
        "price": 10500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Separate Parlor",
          "Espresso Machine",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-kerala-taj-kumarakom",
    "destinationId": "dest-kerala",
    "name": "Taj Kumarakom Resort & Spa, Kerala",
    "city": "Kumarakom",
    "state": "Kerala",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "1/404, Kumarakom, Kottayam District 686563, Kerala, India",
    "address": "1/404, Kumarakom, Kottayam 686563",
    "latitude": 9.6192,
    "longitude": 76.4308,
    "description": "Built around a 19th-century colonial bungalow established by the missionary Henry Baker on the banks of Vembanad Lake, featuring traditional heritage villas, Jiva Spa, and lagoon boat cruises.",
    "shortDescription": "19th-century colonial heritage sanctuary on the shores of serene Vembanad Lake in Kumarakom.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/taj-kumarakom-kerala/",
    "phone": "+91 481 252 5831",
    "email": "kumarakom.kerala@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 28,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 17500,
    "amenities": [
      "Vembanad Lake Frontage",
      "Outdoor Swimming Pool",
      "Jiva Ayurvedic Spa",
      "Baker's Gourmet Restaurant",
      "Traditional Houseboat Cruises",
      "Free High-Speed Wi-Fi",
      "Bird Watching Trails"
    ],
    "roomTypes": [
      {
        "id": "room-ker-taj-cottage",
        "name": "Heritage Lagoon Cottage",
        "type": "COTTAGE",
        "description": "45 sq.m traditional wooden cottage with open-air garden bathroom and lagoon-facing veranda.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "price": 17500,
        "pricePerNight": 17500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Lagoon Veranda",
          "Open-air Shower",
          "Free Wi-Fi",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ker-taj-villa-pool",
        "name": "Luxury Pool Villa",
        "type": "VILLA",
        "description": "85 sq.m secluded villa with private plunge pool and direct vistas over Vembanad Lake.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "price": 32000,
        "pricePerNight": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Plunge Pool",
          "Vembanad Lake View",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Taj Kumarakom Resort backwater lagoon",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/taj-kumarakom-kerala/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ker-taj-cottage",
        "name": "Heritage Lagoon Cottage",
        "type": "COTTAGE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "description": "45 sq.m traditional wooden cottage with open-air garden bathroom and lagoon-facing veranda.",
        "pricePerNight": 17500,
        "price": 17500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Lagoon Veranda",
          "Open-air Shower",
          "Free Wi-Fi",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ker-taj-villa-pool",
        "name": "Luxury Pool Villa",
        "type": "VILLA",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "description": "85 sq.m secluded villa with private plunge pool and direct vistas over Vembanad Lake.",
        "pricePerNight": 32000,
        "price": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Plunge Pool",
          "Vembanad Lake View",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-kerala-kumarakom-lake-resort",
    "destinationId": "dest-kerala",
    "name": "Kumarakom Lake Resort",
    "city": "Kumarakom",
    "state": "Kerala",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Vayitharamattom, Kumarakom, Kottayam 686563, Kerala, India",
    "address": "Vayitharamattom, Kumarakom, Kottayam 686563",
    "latitude": 9.6053,
    "longitude": 76.4258,
    "description": "Celebrated luxury heritage retreat on the banks of Lake Vembanad, featuring 250-meter meandering swimming pool, reconstructed 16th-century ancestral Tharavadu manors, and Ayurmana spa.",
    "shortDescription": "Celebrated heritage resort with 250m meandering pool and authentic ancestral villas.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.kumarakomlakeresort.in/",
    "phone": "+91 481 252 4900",
    "email": "klr@klresort.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 65,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 21000,
    "amenities": [
      "250-Meter Meandering Pool",
      "Infinity Edge Lakefront Pool",
      "Ayurmana Traditional Ayurveda",
      "Ettukettu Multi-Cuisine Restaurant",
      "Sunset Houseboat Cruise",
      "Free High-Speed Wi-Fi",
      "Gym & Water Sports"
    ],
    "roomTypes": [
      {
        "id": "room-ker-klr-meandering",
        "name": "Meandering Pool Villa",
        "type": "VILLA",
        "description": "55 sq.m traditional Kerala villa with private bathing ghat giving direct steps into the 250m pool.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "price": 21000,
        "pricePerNight": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Direct Pool Access",
          "Open-air Jacuzzi",
          "Tharavadu Architecture",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-ker-klr-pavilion",
        "name": "Heritage Lake View Pavilion with Private Pool",
        "type": "VILLA",
        "description": "90 sq.m standalone pavilion with private courtyard, plunge pool, and panoramic lake view.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "price": 38000,
        "pricePerNight": 38000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Pool",
          "Lakefront Sunset View",
          "Personal Attendant",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Kumarakom Lake Resort meandering pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.kumarakomlakeresort.in/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ker-klr-meandering",
        "name": "Meandering Pool Villa",
        "type": "VILLA",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "description": "55 sq.m traditional Kerala villa with private bathing ghat giving direct steps into the 250m pool.",
        "pricePerNight": 21000,
        "price": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Direct Pool Access",
          "Open-air Jacuzzi",
          "Tharavadu Architecture",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-ker-klr-pavilion",
        "name": "Heritage Lake View Pavilion with Private Pool",
        "type": "VILLA",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "description": "90 sq.m standalone pavilion with private courtyard, plunge pool, and panoramic lake view.",
        "pricePerNight": 38000,
        "price": 38000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Pool",
          "Lakefront Sunset View",
          "Personal Attendant",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-kerala-zuri-kumarakom",
    "destinationId": "dest-kerala",
    "name": "The Zuri Kumarakom, Kerala Resort & Spa",
    "city": "Kumarakom",
    "state": "Kerala",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "V-235 A1 to A54, Karottukayal, Kumarakom 686563, Kerala, India",
    "address": "Karottukayal, Kumarakom 686563",
    "latitude": 9.6308,
    "longitude": 76.4172,
    "description": "18-acre luxury backwater resort fronting Lake Vembanad with India's largest resort lagoon pool, Maya Spa offering Western and Ayurvedic therapies, and lagoon villas.",
    "shortDescription": "18-acre luxury retreat fronting Lake Vembanad featuring India's largest resort pool.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.thezurihotels.com/lake-resorts-in-kumarakom/",
    "phone": "+91 481 252 7272",
    "email": "reservations.kumarakom@thezurihotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "11:00",
    "totalRooms": 72,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 13000,
    "amenities": [
      "Massive Lagoon Swimming Pool",
      "Maya Spa (Ayurvedic & Western)",
      "Laguna Bass Seafood Restaurant",
      "Free High-Speed Wi-Fi",
      "Bamboo Rafting & Kayaking",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-ker-zuri-lagoon",
        "name": "Zuri Deluxe Room Lagoon View",
        "type": "DELUXE",
        "description": "42 sq.m guestroom with private balcony overlooking the palm-lined central lagoon.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "price": 13000,
        "pricePerNight": 13000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Lagoon Balcony",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ker-zuri-pool-villa",
        "name": "Zuri Presidential Pool Villa",
        "type": "VILLA",
        "description": "110 sq.m ultimate luxury villa with private swimming pool and dedicated sun deck.",
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "110 sq.m",
        "price": 29000,
        "pricePerNight": 29000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Pool",
          "Sun Deck",
          "Living Area",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Zuri Kumarakom lagoon pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.thezurihotels.com/lake-resorts-in-kumarakom/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ker-zuri-lagoon",
        "name": "Zuri Deluxe Room Lagoon View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "description": "42 sq.m guestroom with private balcony overlooking the palm-lined central lagoon.",
        "pricePerNight": 13000,
        "price": 13000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Lagoon Balcony",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ker-zuri-pool-villa",
        "name": "Zuri Presidential Pool Villa",
        "type": "VILLA",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "110 sq.m",
        "description": "110 sq.m ultimate luxury villa with private swimming pool and dedicated sun deck.",
        "pricePerNight": 29000,
        "price": 29000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Pool",
          "Sun Deck",
          "Living Area",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-kerala-le-meridien-kochi",
    "destinationId": "dest-kerala",
    "name": "Le Méridien Kochi",
    "city": "Kochi",
    "state": "Kerala",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Maradu, Nettoor, Kochi 682304, Kerala, India",
    "address": "Maradu, Nettoor, Kochi 682304",
    "latitude": 9.9287,
    "longitude": 76.3214,
    "description": "Spread over 14 acres of calm backwater lagoons in South Kochi, offering outdoor swimming pool, Le Spa, Latest Recipe international dining, and convention center.",
    "shortDescription": "14-acre backwater resort in South Kochi with serene lagoon vistas and Le Spa.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.marriott.com/hotels/travel/cokmd-le-meridien-kochi/",
    "phone": "+91 484 270 5777",
    "email": "lemeridien.kochi@marriott.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 223,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 7500,
    "amenities": [
      "Backwater Lagoon Waterfront",
      "Outdoor Swimming Pool",
      "Le Spa Ayurvedic Treatments",
      "Latest Recipe Restaurant",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Helipad"
    ],
    "roomTypes": [
      {
        "id": "room-ker-lm-deluxe",
        "name": "Deluxe King Lagoon View",
        "type": "DELUXE",
        "description": "38 sq.m guestroom with panoramic vistas over the backwater lagoons of Kochi.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "price": 7500,
        "pricePerNight": 7500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Lagoon View",
          "Free Wi-Fi",
          "Air Conditioning",
          "Bathtub"
        ]
      },
      {
        "id": "room-ker-lm-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "description": "72 sq.m suite featuring separate living room, balcony, and club lounge privileges.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "72 sq.m",
        "price": 14500,
        "pricePerNight": 14500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Separate Living Room",
          "Club Lounge Access",
          "Lagoon Balcony",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Le Méridien Kochi backwater lagoon pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/cokmd-le-meridien-kochi/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ker-lm-deluxe",
        "name": "Deluxe King Lagoon View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "description": "38 sq.m guestroom with panoramic vistas over the backwater lagoons of Kochi.",
        "pricePerNight": 7500,
        "price": 7500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Lagoon View",
          "Free Wi-Fi",
          "Air Conditioning",
          "Bathtub"
        ]
      },
      {
        "id": "room-ker-lm-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "72 sq.m",
        "description": "72 sq.m suite featuring separate living room, balcony, and club lounge privileges.",
        "pricePerNight": 14500,
        "price": 14500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Separate Living Room",
          "Club Lounge Access",
          "Lagoon Balcony",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-kerala-grand-hyatt-bolgatty",
    "destinationId": "dest-kerala",
    "name": "Grand Hyatt Kochi Bolgatty",
    "city": "Kochi",
    "state": "Kerala",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Mulavukad, Bolgatty Island, Kochi 682504, Kerala, India",
    "address": "Mulavukad, Bolgatty Island, Kochi 682504",
    "latitude": 9.9886,
    "longitude": 76.2694,
    "description": "Waterfront luxury resort perched on Bolgatty Island with dramatic vistas of Lake Vembanad and the Kochi cityscape, offering Santata Spa and Malabar Cafe.",
    "shortDescription": "Waterfront island resort on Bolgatty Island with spectacular Kochi city skyline views.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.hyatt.com/grand-hyatt/cokgh-grand-hyatt-kochi-bolgatty",
    "phone": "+91 484 266 1234",
    "email": "kochi.grand@hyatt.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 264,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 12500,
    "amenities": [
      "Island Waterfront Setting",
      "Indoor & Outdoor Pools",
      "Santata Ayurvedic Spa",
      "Malabar Cafe & Thai Soul Dining",
      "Free High-Speed Wi-Fi",
      "Marina Access & Helipad",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-ker-gh-lake-view",
        "name": "Grand King Lake View Room",
        "type": "DELUXE",
        "description": "41 sq.m guestroom with floor-to-ceiling glass framing backwaters and Kochi harbor.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "41 sq.m",
        "price": 12500,
        "pricePerNight": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Lake View",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ker-gh-suite",
        "name": "Grand Executive Suite",
        "type": "SUITE",
        "description": "82 sq.m suite with separate parlor, Grand Club lounge privileges, and water panorama.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "82 sq.m",
        "price": 23000,
        "pricePerNight": 23000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Grand Club Access",
          "Separate Parlor",
          "Waterfront Panorama",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Grand Hyatt Kochi Bolgatty waterfront",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/grand-hyatt/cokgh-grand-hyatt-kochi-bolgatty",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ker-gh-lake-view",
        "name": "Grand King Lake View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "41 sq.m",
        "description": "41 sq.m guestroom with floor-to-ceiling glass framing backwaters and Kochi harbor.",
        "pricePerNight": 12500,
        "price": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Lake View",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ker-gh-suite",
        "name": "Grand Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "82 sq.m",
        "description": "82 sq.m suite with separate parlor, Grand Club lounge privileges, and water panorama.",
        "pricePerNight": 23000,
        "price": 23000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Grand Club Access",
          "Separate Parlor",
          "Waterfront Panorama",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-kerala-taj-malabar",
    "destinationId": "dest-kerala",
    "name": "Taj Malabar Resort & Spa, Cochin",
    "city": "Kochi",
    "state": "Kerala",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Willingdon Island, Kochi 682009, Kerala, India",
    "address": "Willingdon Island, Kochi 682009",
    "latitude": 9.9678,
    "longitude": 76.2636,
    "description": "Located on the tip of Willingdon Island overlooking Cochin harbor with views of dolphins in the channel. Features infinity pool, The Rice Boat seafood restaurant, and Jiva Spa.",
    "shortDescription": "Historic harbor island hotel on Willingdon Island famous for The Rice Boat seafood dining.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/taj-malabar-cochin/",
    "phone": "+91 484 664 3000",
    "email": "malabar.cochin@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 96,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 14000,
    "amenities": [
      "Harbor & Dolphin Channel Views",
      "Infinity Edge Swimming Pool",
      "Jiva Spa",
      "The Rice Boat Specialty Seafood",
      "Luxury Yacht Sunset Cruises",
      "Free High-Speed Wi-Fi",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-ker-taj-malabar-tower",
        "name": "Tower Wing Sea View Room",
        "type": "DELUXE",
        "description": "38 sq.m room with picture windows framing passing ships and Chinese fishing nets.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "price": 14000,
        "pricePerNight": 14000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Harbor View",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ker-taj-malabar-suite",
        "name": "Heritage Corner Suite",
        "type": "SUITE",
        "description": "65 sq.m historic suite with colonial decor, separate living room, and harbor views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "price": 26000,
        "pricePerNight": 26000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Harbor Panorama",
          "Colonial Living Room",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Taj Malabar Resort Cochin harbor infinity pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/taj-malabar-cochin/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ker-taj-malabar-tower",
        "name": "Tower Wing Sea View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "description": "38 sq.m room with picture windows framing passing ships and Chinese fishing nets.",
        "pricePerNight": 14000,
        "price": 14000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Harbor View",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ker-taj-malabar-suite",
        "name": "Heritage Corner Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "description": "65 sq.m historic suite with colonial decor, separate living room, and harbor views.",
        "pricePerNight": 26000,
        "price": 26000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Harbor Panorama",
          "Colonial Living Room",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-kerala-taj-bekal",
    "destinationId": "dest-kerala",
    "name": "Taj Bekal Resort & Spa, Kerala",
    "city": "Bekal",
    "state": "Kerala",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Kappil Beach, Thekkekara, Bekal, Kasaragod 671319, Kerala, India",
    "address": "Kappil Beach, Thekkekara, Bekal 671319",
    "latitude": 12.4042,
    "longitude": 75.0211,
    "description": "26-acre beach and backwater sanctuary in North Kerala designed like Kettuvallam houseboats, with meandering water channels, Jiva Grande Spa, and Kappil Beach access.",
    "shortDescription": "26-acre beach and backwater sanctuary near Bekal Fort designed like traditional houseboats.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/taj-bekal-kerala/",
    "phone": "+91 467 661 6611",
    "email": "bekal.kerala@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 66,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 16000,
    "amenities": [
      "Direct Kappil Beach Access",
      "Outdoor Swimming Pool",
      "Jiva Grande Ayurvedic Spa",
      "Backwater Kayaking",
      "Free High-Speed Wi-Fi",
      "Bekal Fort Proximity",
      "Private Plunge Pools in Villas"
    ],
    "roomTypes": [
      {
        "id": "room-ker-taj-bekal-villa",
        "name": "Superior Charm Room with Balcony",
        "type": "DELUXE",
        "description": "42 sq.m guestroom with thatch-roof design and balcony facing backwater channels.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "price": 16000,
        "pricePerNight": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Backwater Balcony",
          "Free Wi-Fi",
          "Day Bed",
          "Open Sky Shower"
        ]
      },
      {
        "id": "room-ker-taj-bekal-plunge-villa",
        "name": "Premium Temptation Villa with Plunge Pool",
        "type": "VILLA",
        "description": "110 sq.m private villa with personal plunge pool and courtyard lounge.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "110 sq.m",
        "price": 28000,
        "pricePerNight": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Plunge Pool",
          "Courtyard Sun Lounger",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Taj Bekal Resort & Spa backwater villa",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/taj-bekal-kerala/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ker-taj-bekal-villa",
        "name": "Superior Charm Room with Balcony",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "description": "42 sq.m guestroom with thatch-roof design and balcony facing backwater channels.",
        "pricePerNight": 16000,
        "price": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Backwater Balcony",
          "Free Wi-Fi",
          "Day Bed",
          "Open Sky Shower"
        ]
      },
      {
        "id": "room-ker-taj-bekal-plunge-villa",
        "name": "Premium Temptation Villa with Plunge Pool",
        "type": "VILLA",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "110 sq.m",
        "description": "110 sq.m private villa with personal plunge pool and courtyard lounge.",
        "pricePerNight": 28000,
        "price": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Plunge Pool",
          "Courtyard Sun Lounger",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-kerala-leela-kovalam",
    "destinationId": "dest-kerala",
    "name": "The Leela Kovalam, a Raviz Hotel",
    "city": "Kovalam",
    "state": "Kerala",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Kovalam Beach Road, Thiruvananthapuram 695527, Kerala, India",
    "address": "Kovalam Beach Road, Kovalam 695527",
    "latitude": 8.3975,
    "longitude": 76.9744,
    "description": "Iconic 60-acre clifftop resort perched on a rocky headland between two wide beaches in Kovalam, designed by legendary architect Charles Correa, with clifftop infinity pool.",
    "shortDescription": "Iconic clifftop resort between two wide beaches in Kovalam with stunning sea views.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.theleela.com/the-leela-kovalam-a-raviz-hotel",
    "phone": "+91 471 305 1234",
    "email": "reservations@theleela.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 188,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 16500,
    "amenities": [
      "Clifftop Oceanfront Setting",
      "Clifftop Infinity Swimming Pool",
      "Ayurveda & Wellness Spa",
      "The Tides Seafood Dining",
      "Private Beach Access with Lift",
      "Free High-Speed Wi-Fi",
      "Sky Bar Sunset Lounge"
    ],
    "roomTypes": [
      {
        "id": "room-ker-leela-sea-view",
        "name": "Beach View Superior Room",
        "type": "DELUXE",
        "description": "44 sq.m room perched on the cliff with sun deck looking straight into the Arabian Sea surf.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "price": 16500,
        "pricePerNight": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Clifftop Ocean Sun Deck",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ker-leela-club-suite",
        "name": "The Club Sea View Suite",
        "type": "SUITE",
        "description": "88 sq.m ultra-exclusive suite in The Club wing with private infinity pool access and butler.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "88 sq.m",
        "price": 33000,
        "pricePerNight": 33000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Club Wing",
          "Panoramic Arabian Sea View",
          "Club Butler",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Leela Kovalam clifftop ocean panorama",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.theleela.com/the-leela-kovalam-a-raviz-hotel",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-ker-leela-sea-view",
        "name": "Beach View Superior Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "description": "44 sq.m room perched on the cliff with sun deck looking straight into the Arabian Sea surf.",
        "pricePerNight": 16500,
        "price": 16500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Clifftop Ocean Sun Deck",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-ker-leela-club-suite",
        "name": "The Club Sea View Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "88 sq.m",
        "description": "88 sq.m ultra-exclusive suite in The Club wing with private infinity pool access and butler.",
        "pricePerNight": 33000,
        "price": 33000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Club Wing",
          "Panoramic Arabian Sea View",
          "Club Butler",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-hyd-park-hyatt",
    "destinationId": "dest-hyderabad",
    "name": "Park Hyatt Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Road No. 2, Banjara Hills, Hyderabad 500034, Telangana, India",
    "address": "Road No. 2, Banjara Hills, Hyderabad 500034",
    "latitude": 17.4247,
    "longitude": 78.4283,
    "description": "Architectural masterpiece designed by John Portman in upscale Banjara Hills, featuring a monumental 8-storey atrium, Tre-Forni Italian dining, The Spa, and swimming pool.",
    "shortDescription": "Architectural masterpiece in upscale Banjara Hills with 8-storey atrium and Italian dining.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.hyatt.com/park-hyatt/hydph-park-hyatt-hyderabad",
    "phone": "+91 40 4949 1234",
    "email": "hyderabad.park@hyatt.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 209,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 12500,
    "amenities": [
      "Monumental 8-Storey Atrium",
      "Outdoor Swimming Pool",
      "The Spa (Swedish & Ayurvedic)",
      "Tre-Forni & Rika Asian Dining",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Banjara Hills Central Location"
    ],
    "roomTypes": [
      {
        "id": "room-hyd-ph-king",
        "name": "Park King Room",
        "type": "DELUXE",
        "description": "45 sq.m luxury guestroom with custom furnishings, city view, and oversized soaking bathtub.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "price": 12500,
        "pricePerNight": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "City View",
          "Free Wi-Fi",
          "Oversized Marble Tub",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-hyd-ph-suite",
        "name": "Park Suite",
        "type": "SUITE",
        "description": "90 sq.m corner suite with separate parlor, walk-in closet, and personalized butler service.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "price": 24000,
        "pricePerNight": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Corner Skyline View",
          "Separate Parlor",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Park Hyatt Hyderabad atrium and facade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/park-hyatt/hydph-park-hyatt-hyderabad",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-hyd-ph-king",
        "name": "Park King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "description": "45 sq.m luxury guestroom with custom furnishings, city view, and oversized soaking bathtub.",
        "pricePerNight": 12500,
        "price": 12500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "City View",
          "Free Wi-Fi",
          "Oversized Marble Tub",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-hyd-ph-suite",
        "name": "Park Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "description": "90 sq.m corner suite with separate parlor, walk-in closet, and personalized butler service.",
        "pricePerNight": 24000,
        "price": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Corner Skyline View",
          "Separate Parlor",
          "Butler Service",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-hyd-itc-kohenur",
    "destinationId": "dest-hyderabad",
    "name": "ITC Kohenur, a Luxury Collection Hotel",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Plot No. 5, Survey No. 83/1, Knowledge City, Madhapur, Hyderabad 500081, Telangana, India",
    "address": "Knowledge City, Madhapur, Hyderabad 500081",
    "latitude": 17.4336,
    "longitude": 78.3789,
    "description": "Futuristic luxury landmark in HITEC City overlooking Durgam Cheruvu lake, inspired by the legendary Koh-i-Noor diamond. Featuring Golconda Pavilion, Yi Jing, and Kaya Kalp Spa.",
    "shortDescription": "Futuristic luxury landmark in HITEC City overlooking Durgam Cheruvu lake.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.itchotels.com/in/en/itckohenur-hyderabad",
    "phone": "+91 40 6766 0101",
    "email": "reservations.itckohenur@itchotels.in",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 274,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 15000,
    "amenities": [
      "Durgam Cheruvu Lake Views",
      "Rooftop Swimming Pool",
      "Kaya Kalp Royal Spa",
      "Yi Jing Chinese & Golconda Pavilion",
      "Free High-Speed Wi-Fi",
      "Skye Rooftop Bar",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-hyd-itc-towers",
        "name": "The Towers Room Lake View",
        "type": "EXECUTIVE",
        "description": "44 sq.m room with floor-to-ceiling glass framing the lake and cable-stayed bridge.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "price": 15000,
        "pricePerNight": 15000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Durgam Cheruvu View",
          "Towers Lounge Privileges",
          "Marble Bathroom",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-hyd-itc-suite",
        "name": "Kohenur Presidential Suite",
        "type": "SUITE",
        "description": "115 sq.m luxury diamond-themed suite with separate living and dining rooms and dedicated butler.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "115 sq.m",
        "price": 36000,
        "pricePerNight": 36000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Panoramic Lake View",
          "Dining Room",
          "Dedicated Butler",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "ITC Kohenur Hyderabad diamond facade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.itchotels.com/in/en/itckohenur-hyderabad",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-hyd-itc-towers",
        "name": "The Towers Room Lake View",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "description": "44 sq.m room with floor-to-ceiling glass framing the lake and cable-stayed bridge.",
        "pricePerNight": 15000,
        "price": 15000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Durgam Cheruvu View",
          "Towers Lounge Privileges",
          "Marble Bathroom",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-hyd-itc-suite",
        "name": "Kohenur Presidential Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "115 sq.m",
        "description": "115 sq.m luxury diamond-themed suite with separate living and dining rooms and dedicated butler.",
        "pricePerNight": 36000,
        "price": 36000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Panoramic Lake View",
          "Dining Room",
          "Dedicated Butler",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-hyd-taj-falaknuma",
    "destinationId": "dest-hyderabad",
    "name": "Taj Falaknuma Palace, Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Engine Bowli, Falaknuma, Hyderabad 500053, Telangana, India",
    "address": "Engine Bowli, Falaknuma, Hyderabad 500053",
    "latitude": 17.3314,
    "longitude": 78.4678,
    "description": "The 'Mirror of the Sky' perched 2,000 feet above Hyderabad, former palace of the Nizam with horse-drawn carriage arrivals, Venetian chandeliers, 101-seat dining table, and Jiva Spa.",
    "shortDescription": "Former palace of the Nizam perched 2,000 feet above the city with horse-drawn carriage arrivals.",
    "category": "LUXURY",
    "rating": 4.9,
    "officialWebsite": "https://www.tajhotels.com/en-in/taj/taj-falaknuma-palace-hyderabad/",
    "phone": "+91 40 6629 8585",
    "email": "falaknuma.hyderabad@tajhotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 60,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 35000,
    "amenities": [
      "2,000 Feet Hilltop Palace Views",
      "Horse-drawn Royal Carriage Arrival",
      "Jiva Spa with Royal Therapies",
      "Adaa Nizami Fine Dining",
      "101 Dining Table Historical Tours",
      "Outdoor Pool & Hookah Lounge",
      "Palace Historian Walks"
    ],
    "roomTypes": [
      {
        "id": "room-hyd-falak-palace-room",
        "name": "Palace Room Courtyard View",
        "type": "DELUXE",
        "description": "42 sq.m authentic chamber decorated in pastel silks, high ceilings, and French tapestry.",
        "maxGuests": 2,
        "bedType": "1 Four-Poster King Bed",
        "roomSize": "42 sq.m",
        "price": 35000,
        "pricePerNight": 35000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Four-Poster Bed",
          "Palace Butler",
          "Courtyard View",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-hyd-falak-historical-suite",
        "name": "Historical Grand Suite",
        "type": "SUITE",
        "description": "90 sq.m suite once reserved for royal guests with private terrace overlooking Hyderabad city.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "price": 75000,
        "pricePerNight": 75000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "City Panorama Terrace",
          "Palace Historian Tour",
          "Horse Carriage Transfer",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Taj Falaknuma Palace hilltop view",
        "source": "Unsplash Licensed Hotel Photo"
      },
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "room",
        "alt": "Taj Falaknuma royal suite",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tajhotels.com/en-in/taj/taj-falaknuma-palace-hyderabad/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-hyd-falak-palace-room",
        "name": "Palace Room Courtyard View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Four-Poster King Bed",
        "roomSize": "42 sq.m",
        "description": "42 sq.m authentic chamber decorated in pastel silks, high ceilings, and French tapestry.",
        "pricePerNight": 35000,
        "price": 35000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Four-Poster Bed",
          "Palace Butler",
          "Courtyard View",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-hyd-falak-historical-suite",
        "name": "Historical Grand Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "description": "90 sq.m suite once reserved for royal guests with private terrace overlooking Hyderabad city.",
        "pricePerNight": 75000,
        "price": 75000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "City Panorama Terrace",
          "Palace Historian Tour",
          "Horse Carriage Transfer",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-hyd-marriott-tank-bund",
    "destinationId": "dest-hyderabad",
    "name": "Hyderabad Marriott Hotel & Convention Centre",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Tank Bund Road, Opposite Hussain Sagar Lake, Hyderabad 500080, Telangana, India",
    "address": "Tank Bund Road, Opp Hussain Sagar Lake, Hyderabad 500080",
    "latitude": 17.4239,
    "longitude": 78.4878,
    "description": "Scenic 5-star hotel fronting historic Hussain Sagar Lake and Buddha statue, offering outdoor pool, Quan Spa, Okra multi-cuisine buffet, and Bidri Hyderabadi dining.",
    "shortDescription": "Scenic lakefront hotel on Tank Bund Road fronting historic Hussain Sagar Lake.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.marriott.com/hotels/travel/hydmc-hyderabad-marriott-hotel-and-convention-centre/",
    "phone": "+91 40 2752 2999",
    "email": "marriott.hyderabad@marriott.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 295,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 8500,
    "amenities": [
      "Hussain Sagar Lake Views",
      "Outdoor Pool & Lawn",
      "Quan Spa",
      "Bidri Riyasati Dining",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive M Club Lounge"
    ],
    "roomTypes": [
      {
        "id": "room-hyd-marr-lake",
        "name": "Deluxe King Lake View Room",
        "type": "DELUXE",
        "description": "34 sq.m room with direct views over Hussain Sagar Lake and the Buddha statue.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "34 sq.m",
        "price": 8500,
        "pricePerNight": 8500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Lake View",
          "Free Wi-Fi",
          "Air Conditioning",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-hyd-marr-exec-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "description": "68 sq.m lake-facing suite with M Club Lounge access, separate living room, and breakfast.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "68 sq.m",
        "price": 15500,
        "pricePerNight": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "M Club Access",
          "Panoramic Lake View",
          "Living Area",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Hyderabad Marriott Hotel Hussain Sagar Lake view",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/hydmc-hyderabad-marriott-hotel-and-convention-centre/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-hyd-marr-lake",
        "name": "Deluxe King Lake View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "34 sq.m",
        "description": "34 sq.m room with direct views over Hussain Sagar Lake and the Buddha statue.",
        "pricePerNight": 8500,
        "price": 8500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Lake View",
          "Free Wi-Fi",
          "Air Conditioning",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-hyd-marr-exec-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "68 sq.m",
        "description": "68 sq.m lake-facing suite with M Club Lounge access, separate living room, and breakfast.",
        "pricePerNight": 15500,
        "price": 15500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "M Club Access",
          "Panoramic Lake View",
          "Living Area",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-hyd-itc-kakatiya",
    "destinationId": "dest-hyderabad",
    "name": "ITC Kakatiya, a Luxury Collection Hotel",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "6-3-1187, Begumpet, Hyderabad 500016, Telangana, India",
    "address": "6-3-1187, Begumpet, Hyderabad 500016",
    "latitude": 17.4339,
    "longitude": 78.4578,
    "description": "Classic luxury hotel in Begumpet paying tribute to the Kakatiya dynasty, built around an outdoor pool with rock pool setting. Home to Kebabs & Kurries and Kaya Kalp Spa.",
    "shortDescription": "Kakatiya dynasty-inspired heritage luxury hotel in central Begumpet.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.itchotels.com/in/en/itckakatiya-hyderabad",
    "phone": "+91 40 2340 0132",
    "email": "reservations.itckakatiya@itchotels.in",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 188,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 9000,
    "amenities": [
      "Rock Swimming Pool",
      "Kaya Kalp Spa",
      "Kebabs & Kurries & Dakshin",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive Club Lounge"
    ],
    "roomTypes": [
      {
        "id": "room-hyd-itc-kaka-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "description": "32 sq.m guestroom with handcrafted Kakatiya stone motifs and marble bathroom.",
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "32 sq.m",
        "price": 9000,
        "pricePerNight": 9000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Workstation",
          "Marble Bath",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-hyd-itc-kaka-one",
        "name": "ITC One Luxury Room",
        "type": "DELUXE",
        "description": "48 sq.m premier room with dedicated butler, lounge privileges, and airport transfers.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "price": 14500,
        "pricePerNight": 14500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Butler Service",
          "Lounge Access",
          "Airport Transfer",
          "Complimentary Breakfast"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "ITC Kakatiya Begumpet pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.itchotels.com/in/en/itckakatiya-hyderabad",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-hyd-itc-kaka-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King or 2 Twin Beds",
        "roomSize": "32 sq.m",
        "description": "32 sq.m guestroom with handcrafted Kakatiya stone motifs and marble bathroom.",
        "pricePerNight": 9000,
        "price": 9000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Workstation",
          "Marble Bath",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-hyd-itc-kaka-one",
        "name": "ITC One Luxury Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "48 sq.m",
        "description": "48 sq.m premier room with dedicated butler, lounge privileges, and airport transfers.",
        "pricePerNight": 14500,
        "price": 14500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Butler Service",
          "Lounge Access",
          "Airport Transfer",
          "Complimentary Breakfast"
        ]
      }
    ]
  },
  {
    "id": "hotel-hyd-novotel-airport",
    "destinationId": "dest-hyderabad",
    "name": "Novotel Hyderabad Airport",
    "city": "Shamshabad",
    "state": "Telangana",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Rajiv Gandhi International Airport, Shamshabad, Hyderabad 500108, Telangana, India",
    "address": "RGIA, Shamshabad, Hyderabad 500108",
    "latitude": 17.2344,
    "longitude": 78.4311,
    "description": "Spread over 5.5 acres just moments from Rajiv Gandhi International Airport terminals, offering resort-style outdoor pool, O2 Spa, tennis courts, and Food Exchange restaurant.",
    "shortDescription": "5.5-acre airport resort hotel moments from Rajiv Gandhi International Airport Shamshabad.",
    "category": "FOUR_STAR",
    "rating": 4.4,
    "officialWebsite": "https://all.accor.com/hotel/6687/index.en.shtml",
    "phone": "+91 40 6625 0000",
    "email": "h6687-re@accor.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 289,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 7500,
    "amenities": [
      "Resort Outdoor Pool",
      "Free 24-Hour Airport Shuttle",
      "O2 Spa",
      "Food Exchange & The Bar",
      "Free High-Speed Wi-Fi",
      "Tennis & Basketball Courts",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-hyd-novo-air-sup",
        "name": "Superior King Room",
        "type": "DOUBLE",
        "description": "32 sq.m soundproof room with pool or runway views and airport shuttle inclusion.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 7500,
        "pricePerNight": 7500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Airport Shuttle",
          "Soundproof Glazing",
          "Free Wi-Fi",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-hyd-novo-air-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "description": "64 sq.m suite featuring separate living room, pool view, and espresso machine.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "64 sq.m",
        "price": 13500,
        "pricePerNight": 13500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Pool View",
          "Living Room",
          "Espresso Machine",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Novotel Hyderabad Airport pool grounds",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://all.accor.com/hotel/6687/index.en.shtml",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-hyd-novo-air-sup",
        "name": "Superior King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m soundproof room with pool or runway views and airport shuttle inclusion.",
        "pricePerNight": 7500,
        "price": 7500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Airport Shuttle",
          "Soundproof Glazing",
          "Free Wi-Fi",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-hyd-novo-air-suite",
        "name": "Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "64 sq.m",
        "description": "64 sq.m suite featuring separate living room, pool view, and espresso machine.",
        "pricePerNight": 13500,
        "price": 13500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Pool View",
          "Living Room",
          "Espresso Machine",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-hyd-trident",
    "destinationId": "dest-hyderabad",
    "name": "Trident, Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Survey No. 64, Hitec City, Madhapur, Hyderabad 500081, Telangana, India",
    "address": "Hitec City, Madhapur, Hyderabad 500081",
    "latitude": 17.4478,
    "longitude": 78.3775,
    "description": "Sophisticated 5-star hotel in the heart of HITEC City, offering 10th-floor outdoor infinity pool with skyline views, The Trident Spa, Amara world dining, and Kanak Indian specialty restaurant.",
    "shortDescription": "Premier corporate 5-star hotel in HITEC City with 10th-floor skyline infinity pool.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.tridenthotels.com/hotels-in-hyderabad/",
    "phone": "+91 40 6623 2323",
    "email": "reservations.hyderabad@tridenthotels.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 323,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 11500,
    "amenities": [
      "10th-Floor Skyline Infinity Pool",
      "The Trident Spa",
      "Amara & Kanak Restaurants",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "HITEC City Business Center",
      "Trident Club Floor"
    ],
    "roomTypes": [
      {
        "id": "room-hyd-trident-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "description": "41 sq.m guestroom with floor-to-ceiling windows and marble bathroom with soaking tub.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "41 sq.m",
        "price": 11500,
        "pricePerNight": 11500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Skyline View",
          "Free Wi-Fi",
          "Soaking Tub",
          "Work Desk"
        ]
      },
      {
        "id": "room-hyd-trident-club-suite",
        "name": "Trident Club Suite",
        "type": "SUITE",
        "description": "82 sq.m suite on high floors with Club Lounge access, evening cocktails, and private lounge.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "82 sq.m",
        "price": 21000,
        "pricePerNight": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Club Lounge Access",
          "High Floor Skyline View",
          "Separate Parlor",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Trident Hyderabad HITEC City pool",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.tridenthotels.com/hotels-in-hyderabad/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-hyd-trident-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "41 sq.m",
        "description": "41 sq.m guestroom with floor-to-ceiling windows and marble bathroom with soaking tub.",
        "pricePerNight": 11500,
        "price": 11500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Skyline View",
          "Free Wi-Fi",
          "Soaking Tub",
          "Work Desk"
        ]
      },
      {
        "id": "room-hyd-trident-club-suite",
        "name": "Trident Club Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "82 sq.m",
        "description": "82 sq.m suite on high floors with Club Lounge access, evening cocktails, and private lounge.",
        "pricePerNight": 21000,
        "price": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Club Lounge Access",
          "High Floor Skyline View",
          "Separate Parlor",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-hyd-hyatt-place",
    "destinationId": "dest-hyderabad",
    "name": "Hyatt Place Hyderabad/Banjara Hills",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "India",
    "countryCode": "IN",
    "fullAddress": "Road No. 1, Banjara Hills, Hyderabad 500034, Telangana, India",
    "address": "Road No. 1, Banjara Hills, Hyderabad 500034",
    "latitude": 17.4144,
    "longitude": 78.4503,
    "description": "Centrally located on Road No. 1 in Banjara Hills near city shopping and hospitals, featuring rooftop pool with skyline view, Gallery Kitchen buffet, and 24/7 fitness center.",
    "shortDescription": "Modern 4-star select-service hotel on Road No. 1 Banjara Hills with rooftop pool.",
    "category": "FOUR_STAR",
    "rating": 4.4,
    "officialWebsite": "https://www.hyatt.com/hyatt-place/hydzb-hyatt-place-hyderabad-banjara-hills",
    "phone": "+91 40 6780 1234",
    "email": "hyderabad.place@hyatt.com",
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 147,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 6200,
    "amenities": [
      "Rooftop Swimming Pool",
      "Gallery Kitchen Buffet",
      "24-Hour Fitness Gym",
      "Free High-Speed Wi-Fi",
      "Banjara Hills Central Location",
      "Cozy Corner Sofa-Sleeper"
    ],
    "roomTypes": [
      {
        "id": "room-hyd-hp-standard",
        "name": "Standard King Bed with Cozy Corner",
        "type": "DOUBLE",
        "description": "28 sq.m room with dedicated Hyatt Cozy Corner sectional sofa-sleeper.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "28 sq.m",
        "price": 6200,
        "pricePerNight": 6200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Cozy Corner Sofa",
          "Free Wi-Fi",
          "Air Conditioning",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-hyd-hp-view",
        "name": "High Floor View King",
        "type": "DELUXE",
        "description": "32 sq.m room on higher floors with panoramic views of the city skyline.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 7800,
        "pricePerNight": 7800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Skyline View",
          "Mini Fridge",
          "Free Wi-Fi",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Hyatt Place Hyderabad Banjara Hills",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/hyatt-place/hydzb-hyatt-place-hyderabad-banjara-hills",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-hyd-hp-standard",
        "name": "Standard King Bed with Cozy Corner",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "28 sq.m",
        "description": "28 sq.m room with dedicated Hyatt Cozy Corner sectional sofa-sleeper.",
        "pricePerNight": 6200,
        "price": 6200,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Cozy Corner Sofa",
          "Free Wi-Fi",
          "Air Conditioning",
          "Coffee Maker"
        ]
      },
      {
        "id": "room-hyd-hp-view",
        "name": "High Floor View King",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m room on higher floors with panoramic views of the city skyline.",
        "pricePerNight": 7800,
        "price": 7800,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Skyline View",
          "Mini Fridge",
          "Free Wi-Fi",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-dxb-atlantis-the-palm",
    "destinationId": "dest-dubai",
    "name": "Atlantis, The Palm",
    "city": "Dubai",
    "state": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "fullAddress": "Crescent Road, Palm Jumeirah, Dubai, United Arab Emirates",
    "address": "Crescent Road, Palm Jumeirah, Dubai",
    "latitude": 25.1304,
    "longitude": 55.1172,
    "description": "World-famous ocean-themed resort situated on the apex of Palm Jumeirah crescent, featuring Aquaventure Waterpark, The Lost Chambers Aquarium, Ossiano underwater dining, and private beach.",
    "shortDescription": "Iconic ocean-themed mega-resort on the crest of Palm Jumeirah with Aquaventure Waterpark.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.atlantis.com/dubai/atlantis-the-palm",
    "phone": "+971 4 426 2000",
    "email": "dxb-info@atlantisdubai.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 1548,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 35000,
    "amenities": [
      "Aquaventure Waterpark Unlimited Access",
      "The Lost Chambers Aquarium Access",
      "Private White Sand Beach",
      "Ossiano Underwater Dining & Nobu",
      "Awaken Spa",
      "Free High-Speed Wi-Fi",
      "Multiple Outdoor Pools"
    ],
    "roomTypes": [
      {
        "id": "room-dxb-atl-ocean",
        "name": "Ocean King Room",
        "type": "DELUXE",
        "description": "47 sq.m room with French balcony offering panoramic views across the Arabian Gulf.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "47 sq.m",
        "price": 35000,
        "pricePerNight": 35000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Arabian Gulf View",
          "Aquaventure Entry Included",
          "Free Wi-Fi",
          "Separate Bath & Shower"
        ]
      },
      {
        "id": "room-dxb-atl-terrace-suite",
        "name": "Terrace Club Suite",
        "type": "SUITE",
        "description": "94 sq.m suite featuring private sun-lounger terrace overlooking the Palm island skyline.",
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "94 sq.m",
        "price": 68000,
        "pricePerNight": 68000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Imperial Club Lounge",
          "Private Sun Terrace",
          "Airport Transfers",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Atlantis The Palm Dubai crescent",
        "source": "Unsplash Licensed Hotel Photo"
      },
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "room",
        "alt": "Atlantis The Palm luxury suite",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.atlantis.com/dubai/atlantis-the-palm",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-dxb-atl-ocean",
        "name": "Ocean King Room",
        "type": "DELUXE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "47 sq.m",
        "description": "47 sq.m room with French balcony offering panoramic views across the Arabian Gulf.",
        "pricePerNight": 35000,
        "price": 35000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Arabian Gulf View",
          "Aquaventure Entry Included",
          "Free Wi-Fi",
          "Separate Bath & Shower"
        ]
      },
      {
        "id": "room-dxb-atl-terrace-suite",
        "name": "Terrace Club Suite",
        "type": "SUITE",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King Bed",
        "roomSize": "94 sq.m",
        "description": "94 sq.m suite featuring private sun-lounger terrace overlooking the Palm island skyline.",
        "pricePerNight": 68000,
        "price": 68000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Imperial Club Lounge",
          "Private Sun Terrace",
          "Airport Transfers",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-dxb-jumeirah-beach",
    "destinationId": "dest-dubai",
    "name": "Jumeirah Beach Hotel",
    "city": "Dubai",
    "state": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "fullAddress": "Jumeirah Street, Umm Suqeim 3, Dubai, United Arab Emirates",
    "address": "Jumeirah Street, Umm Suqeim 3, Dubai",
    "latitude": 25.1412,
    "longitude": 55.1906,
    "description": "Wave-shaped luxury family resort on private Jumeirah beachfront directly facing Burj Al Arab, offering Wild Wadi Waterpark entry, five swimming pools, and Talise Spa.",
    "shortDescription": "Iconic wave-shaped family beach resort with uninterrupted views of Burj Al Arab.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.jumeirah.com/en/stay/dubai/jumeirah-beach-hotel",
    "phone": "+971 4 348 0000",
    "email": "jbhinfo@jumeirah.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 599,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 28000,
    "amenities": [
      "Burj Al Arab Frontline Views",
      "Complimentary Wild Wadi Waterpark Entry",
      "Private White Sand Beach",
      "5 Resort Swimming Pools",
      "Talise Spa",
      "Free High-Speed Wi-Fi",
      "Sinbad's Kids Club"
    ],
    "roomTypes": [
      {
        "id": "room-dxb-jbh-ocean-dlx",
        "name": "Ocean Deluxe Room",
        "type": "DELUXE",
        "description": "50 sq.m guestroom with floor-to-ceiling glass framing the iconic Burj Al Arab and Gulf waters.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "50 sq.m",
        "price": 28000,
        "pricePerNight": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Burj Al Arab View",
          "Wild Wadi Included",
          "Free Wi-Fi",
          "Walk-in Shower"
        ]
      },
      {
        "id": "room-dxb-jbh-family-suite",
        "name": "Family Garden Suite",
        "type": "SUITE",
        "description": "100 sq.m suite with separate kids bedroom, living lounge, and private terrace.",
        "maxGuests": 4,
        "bedType": "1 King + 2 Twin Beds",
        "roomSize": "100 sq.m",
        "price": 52000,
        "pricePerNight": 52000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Terrace",
          "Family Lounge",
          "Wild Wadi Entry",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Jumeirah Beach Hotel wave design",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.jumeirah.com/en/stay/dubai/jumeirah-beach-hotel",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-dxb-jbh-ocean-dlx",
        "name": "Ocean Deluxe Room",
        "type": "DELUXE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "50 sq.m",
        "description": "50 sq.m guestroom with floor-to-ceiling glass framing the iconic Burj Al Arab and Gulf waters.",
        "pricePerNight": 28000,
        "price": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Burj Al Arab View",
          "Wild Wadi Included",
          "Free Wi-Fi",
          "Walk-in Shower"
        ]
      },
      {
        "id": "room-dxb-jbh-family-suite",
        "name": "Family Garden Suite",
        "type": "SUITE",
        "capacity": 4,
        "maxGuests": 4,
        "bedType": "1 King + 2 Twin Beds",
        "roomSize": "100 sq.m",
        "description": "100 sq.m suite with separate kids bedroom, living lounge, and private terrace.",
        "pricePerNight": 52000,
        "price": 52000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Terrace",
          "Family Lounge",
          "Wild Wadi Entry",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-dxb-burj-al-arab",
    "destinationId": "dest-dubai",
    "name": "Burj Al Arab Jumeirah",
    "city": "Dubai",
    "state": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "fullAddress": "1 Jumeirah Street, Umm Suqeim 3, Dubai, United Arab Emirates",
    "address": "1 Jumeirah Street, Umm Suqeim 3, Dubai",
    "latitude": 25.1413,
    "longitude": 55.1853,
    "description": "The global icon of Arabian luxury, built on its own man-made island 280 meters offshore. Featuring all-duplex suites, 24-karat gold interiors, helipad, and Sal private beach terrace.",
    "shortDescription": "World-renowned sail-shaped 7-star ultra-luxury hotel on its own island.",
    "category": "LUXURY",
    "rating": 4.9,
    "officialWebsite": "https://www.jumeirah.com/en/stay/dubai/burj-al-arab-jumeirah",
    "phone": "+971 4 301 7777",
    "email": "baainfo@jumeirah.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 199,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 95000,
    "amenities": [
      "Private Island Offshore Setting",
      "Sal Luxury Beach & Pool Terrace",
      "Talise Spa 150m Above Gulf",
      "Ristorante L'Olivo at Al Mahara",
      "Private In-Suite Butler on Every Floor",
      "Helipad & Rolls-Royce Phantom Fleet",
      "24-Karat Gold Leaf Interiors"
    ],
    "roomTypes": [
      {
        "id": "room-dxb-baa-deluxe-suite",
        "name": "Deluxe One-Bedroom Duplex Suite",
        "type": "SUITE",
        "description": "170 sq.m two-storey duplex suite with private bar, spiral staircase, jacuzzi, and Hermes amenities.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "170 sq.m",
        "price": 95000,
        "pricePerNight": 95000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Two-Storey Duplex",
          "Private Butler",
          "Hermes Bath Products",
          "Jacuzzi",
          "Breakfast Included"
        ]
      },
      {
        "id": "room-dxb-baa-panoramic-suite",
        "name": "Panoramic One-Bedroom Suite",
        "type": "SUITE",
        "description": "225 sq.m duplex suite with 180-degree glass curved walls overlooking the entire Dubai coastline.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "225 sq.m",
        "price": 145000,
        "pricePerNight": 145000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "180-Degree Panoramic View",
          "Rolls-Royce Chauffeur",
          "Private Dining Salon",
          "Champagne Service"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Burj Al Arab Jumeirah sail on island",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.jumeirah.com/en/stay/dubai/burj-al-arab-jumeirah",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-dxb-baa-deluxe-suite",
        "name": "Deluxe One-Bedroom Duplex Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "170 sq.m",
        "description": "170 sq.m two-storey duplex suite with private bar, spiral staircase, jacuzzi, and Hermes amenities.",
        "pricePerNight": 95000,
        "price": 95000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Two-Storey Duplex",
          "Private Butler",
          "Hermes Bath Products",
          "Jacuzzi",
          "Breakfast Included"
        ]
      },
      {
        "id": "room-dxb-baa-panoramic-suite",
        "name": "Panoramic One-Bedroom Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "225 sq.m",
        "description": "225 sq.m duplex suite with 180-degree glass curved walls overlooking the entire Dubai coastline.",
        "pricePerNight": 145000,
        "price": 145000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "180-Degree Panoramic View",
          "Rolls-Royce Chauffeur",
          "Private Dining Salon",
          "Champagne Service"
        ]
      }
    ]
  },
  {
    "id": "hotel-dxb-address-dubai-marina",
    "destinationId": "dest-dubai",
    "name": "Address Dubai Marina",
    "city": "Dubai",
    "state": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "fullAddress": "Dubai Marina, Al Marsa Street, Dubai, United Arab Emirates",
    "address": "Al Marsa Street, Dubai Marina, Dubai",
    "latitude": 25.0772,
    "longitude": 55.1408,
    "description": "Chic luxury hotel integrated into Dubai Marina Mall overlooking yachts along the marina waterway, featuring 50-meter elevated infinity pool, The Spa, and direct promenade access.",
    "shortDescription": "Waterfront luxury hotel in Dubai Marina with 50-meter infinity pool overlooking yachts.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.addresshotels.com/en/hotels/address-dubai-marina/",
    "phone": "+971 4 436 7777",
    "email": "meet.dubaimarina@addresshotels.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 200,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 19500,
    "amenities": [
      "50-Meter Elevated Infinity Pool",
      "Direct Dubai Marina Mall Connection",
      "The Spa at Address",
      "Marina Promenade Waterfront Access",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Qix Kids Club"
    ],
    "roomTypes": [
      {
        "id": "room-dxb-adm-deluxe",
        "name": "Deluxe Marina View Room",
        "type": "DELUXE",
        "description": "40 sq.m guestroom with private balcony framing yachts berthed in Dubai Marina.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "40 sq.m",
        "price": 19500,
        "pricePerNight": 19500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Marina Balcony",
          "Free Wi-Fi",
          "Espresso Machine",
          "Deep Soak Tub"
        ]
      },
      {
        "id": "room-dxb-adm-suite",
        "name": "Grand Suite Marina View",
        "type": "SUITE",
        "description": "70 sq.m suite featuring separate living room, corner balcony, and marina panorama.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "70 sq.m",
        "price": 34000,
        "pricePerNight": 34000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Corner Marina Balcony",
          "Separate Living Room",
          "Club Lounge Access",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Address Dubai Marina infinity pool deck",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.addresshotels.com/en/hotels/address-dubai-marina/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-dxb-adm-deluxe",
        "name": "Deluxe Marina View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "40 sq.m",
        "description": "40 sq.m guestroom with private balcony framing yachts berthed in Dubai Marina.",
        "pricePerNight": 19500,
        "price": 19500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Marina Balcony",
          "Free Wi-Fi",
          "Espresso Machine",
          "Deep Soak Tub"
        ]
      },
      {
        "id": "room-dxb-adm-suite",
        "name": "Grand Suite Marina View",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "70 sq.m",
        "description": "70 sq.m suite featuring separate living room, corner balcony, and marina panorama.",
        "pricePerNight": 34000,
        "price": 34000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Corner Marina Balcony",
          "Separate Living Room",
          "Club Lounge Access",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-dxb-marriott-palm-jumeirah",
    "destinationId": "dest-dubai",
    "name": "Marriott Resort Palm Jumeirah, Dubai",
    "city": "Dubai",
    "state": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "fullAddress": "Palm West Beach, Palm Jumeirah, Dubai, United Arab Emirates",
    "address": "Palm West Beach, Palm Jumeirah, Dubai",
    "latitude": 25.1167,
    "longitude": 55.1389,
    "description": "Beachfront resort located on vibrant Palm West Beach promenade, featuring 75-meter outdoor pool with swim-up bar, Saray Spa, Cucina trattoria, and beach clubs.",
    "shortDescription": "Lively beachfront resort on Palm West Beach with 75-meter pool and vibrant promenade.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.marriott.com/hotels/travel/dxbpj-marriott-resort-palm-jumeirah-dubai/",
    "phone": "+971 4 666 1111",
    "email": "marriott.palmjumeirah@marriott.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 608,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 18000,
    "amenities": [
      "Palm West Beach Direct Access",
      "75-Meter Oceanfront Swimming Pool",
      "Saray Spa",
      "10 Dining Venues & Bars",
      "Free High-Speed Wi-Fi",
      "Kids Club & Water Play Zone",
      "M Club Lounge"
    ],
    "roomTypes": [
      {
        "id": "room-dxb-marriott-palm-sea",
        "name": "Palm Sea View King Room",
        "type": "DELUXE",
        "description": "41 sq.m room with private balcony framing Palm West Beach and Dubai Marina skyline.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "41 sq.m",
        "price": 18000,
        "pricePerNight": 18000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Palm West Beach Balcony",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-dxb-marriott-palm-suite",
        "name": "M Club Executive Sea View Suite",
        "type": "SUITE",
        "description": "82 sq.m suite with separate salon, M Club lounge privileges, and panoramic sea vistas.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "82 sq.m",
        "price": 32000,
        "pricePerNight": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "M Club Lounge Access",
          "Separate Living Room",
          "Marina Skyline View",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Marriott Resort Palm Jumeirah beachfront",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/dxbpj-marriott-resort-palm-jumeirah-dubai/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-dxb-marriott-palm-sea",
        "name": "Palm Sea View King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "41 sq.m",
        "description": "41 sq.m room with private balcony framing Palm West Beach and Dubai Marina skyline.",
        "pricePerNight": 18000,
        "price": 18000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Palm West Beach Balcony",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-dxb-marriott-palm-suite",
        "name": "M Club Executive Sea View Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "82 sq.m",
        "description": "82 sq.m suite with separate salon, M Club lounge privileges, and panoramic sea vistas.",
        "pricePerNight": 32000,
        "price": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "M Club Lounge Access",
          "Separate Living Room",
          "Marina Skyline View",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-dxb-hilton-jumeirah",
    "destinationId": "dest-dubai",
    "name": "Hilton Dubai Jumeirah",
    "city": "Dubai",
    "state": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "fullAddress": "The Walk, Jumeirah Beach Residence, Dubai, United Arab Emirates",
    "address": "The Walk, JBR, Dubai",
    "latitude": 25.0792,
    "longitude": 55.1333,
    "description": "Located on The Walk at Jumeirah Beach Residence (JBR), offering private beach access, palm-fringed swimming pool, Wavebreaker beach bar, and BiCE Italian dining.",
    "shortDescription": "Beachfront 5-star hotel right on The Walk at JBR with private beach and BiCE Italian dining.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.hilton.com/en/hotels/dxbjbhi-hilton-dubai-jumeirah/",
    "phone": "+971 4 399 1111",
    "email": "info.jumeirah@hilton.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 389,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 16000,
    "amenities": [
      "Private JBR Beachfront",
      "Outdoor Swimming Pool & Gardens",
      "Wavebreaker Beach Bar & Grill",
      "BiCE Ristorante",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "The Walk JBR Direct Access"
    ],
    "roomTypes": [
      {
        "id": "room-dxb-hilton-jbr-deluxe",
        "name": "Deluxe Sea View Room",
        "type": "DELUXE",
        "description": "38 sq.m room with balcony framing Ain Dubai observation wheel and Arabian Gulf.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "price": 16000,
        "pricePerNight": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Sea & Ain Dubai View",
          "Balcony",
          "Free Wi-Fi",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-dxb-hilton-jbr-suite",
        "name": "Executive Gulf Suite",
        "type": "SUITE",
        "description": "69 sq.m suite with Executive Lounge privileges, separate living room, and beach views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "69 sq.m",
        "price": 27000,
        "pricePerNight": 27000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Executive Lounge Privileges",
          "Separate Living Room",
          "Beach View",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Hilton Dubai Jumeirah beach resort",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hilton.com/en/hotels/dxbjbhi-hilton-dubai-jumeirah/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-dxb-hilton-jbr-deluxe",
        "name": "Deluxe Sea View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "description": "38 sq.m room with balcony framing Ain Dubai observation wheel and Arabian Gulf.",
        "pricePerNight": 16000,
        "price": 16000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Sea & Ain Dubai View",
          "Balcony",
          "Free Wi-Fi",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-dxb-hilton-jbr-suite",
        "name": "Executive Gulf Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "69 sq.m",
        "description": "69 sq.m suite with Executive Lounge privileges, separate living room, and beach views.",
        "pricePerNight": 27000,
        "price": 27000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Executive Lounge Privileges",
          "Separate Living Room",
          "Beach View",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-dxb-ritz-carlton",
    "destinationId": "dest-dubai",
    "name": "The Ritz-Carlton, Dubai",
    "city": "Dubai",
    "state": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "fullAddress": "Al Mamsha Street, Jumeirah Beach Residence, Dubai, United Arab Emirates",
    "address": "Al Mamsha Street, JBR, Dubai",
    "latitude": 25.0836,
    "longitude": 55.1378,
    "description": "Low-rise Mediterranean beachfront enclave in JBR surrounded by landscaped rose gardens, offering 350 meters of private white sand beach, 6 swimming pools, and The Ritz-Carlton Spa.",
    "shortDescription": "Intimate Mediterranean-style luxury beachfront enclave in JBR with 350m private beach.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.ritzcarlton.com/en/hotels/dubai/dubai-beach",
    "phone": "+971 4 399 4000",
    "email": "dubai.leads@ritzcarlton.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 294,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 32000,
    "amenities": [
      "350-Meter Private White Sand Beach",
      "6 Outdoor Swimming Pools",
      "The Ritz-Carlton Spa",
      "Blue Jade Asian & Splendido Italian Dining",
      "Free High-Speed Wi-Fi",
      "Ritz Kids Club",
      "Private Butler Service"
    ],
    "roomTypes": [
      {
        "id": "room-dxb-rc-deluxe-sea",
        "name": "Deluxe Sea-Facing Room",
        "type": "DELUXE",
        "description": "50 sq.m Mediterranean-accented room with private balcony looking out onto the Arabian Gulf.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "50 sq.m",
        "price": 32000,
        "pricePerNight": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Gulf View Balcony",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Asprey Amenities"
        ]
      },
      {
        "id": "room-dxb-rc-club-suite",
        "name": "Club Ocean Suite",
        "type": "SUITE",
        "description": "108 sq.m suite with dedicated Ritz-Carlton Club Lounge access and personal concierge.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "108 sq.m",
        "price": 58000,
        "pricePerNight": 58000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Club Lounge 5 Presentations",
          "Ocean Balcony",
          "Personal Concierge",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Ritz-Carlton Dubai beachfront gardens",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.ritzcarlton.com/en/hotels/dubai/dubai-beach",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-dxb-rc-deluxe-sea",
        "name": "Deluxe Sea-Facing Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "50 sq.m",
        "description": "50 sq.m Mediterranean-accented room with private balcony looking out onto the Arabian Gulf.",
        "pricePerNight": 32000,
        "price": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Gulf View Balcony",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Asprey Amenities"
        ]
      },
      {
        "id": "room-dxb-rc-club-suite",
        "name": "Club Ocean Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "108 sq.m",
        "description": "108 sq.m suite with dedicated Ritz-Carlton Club Lounge access and personal concierge.",
        "pricePerNight": 58000,
        "price": 58000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Club Lounge 5 Presentations",
          "Ocean Balcony",
          "Personal Concierge",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-dxb-ja-ocean-view",
    "destinationId": "dest-dubai",
    "name": "JA Ocean View Hotel",
    "city": "Dubai",
    "state": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "fullAddress": "The Walk, Jumeirah Beach Residence, Dubai, United Arab Emirates",
    "address": "The Walk, JBR, Dubai",
    "latitude": 25.0747,
    "longitude": 55.1306,
    "description": "Lively 4-star superior hotel located along The Walk at JBR, guaranteeing 100% sea views from every room, infinity edge pool, Il Motto deli, and Motorino pizza.",
    "shortDescription": "Vibrant hotel on The Walk at JBR with guaranteed sea views from every room.",
    "category": "FOUR_STAR",
    "rating": 4.4,
    "officialWebsite": "https://www.jaresortshotels.com/dubai/ja-ocean-view-hotel",
    "phone": "+971 4 814 5599",
    "email": "ovh@jaresorts.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 346,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 12000,
    "amenities": [
      "Guaranteed Arabian Gulf Sea Views",
      "Infinity Edge Swimming Pool",
      "Public Beach Steps Away",
      "Motorino Pizza & Il Motto Dining",
      "Free High-Speed Wi-Fi",
      "Calm Spa & Salon",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-dxb-ja-sea-king",
        "name": "Sea View King Room",
        "type": "DOUBLE",
        "description": "39 sq.m guestroom with private balcony guaranteeing direct open sea views.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "39 sq.m",
        "price": 12000,
        "pricePerNight": 12000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Guaranteed Sea View",
          "Balcony",
          "Free Wi-Fi",
          "Walk-in Shower"
        ]
      },
      {
        "id": "room-dxb-ja-club-suite",
        "name": "Club Sea View Suite",
        "type": "SUITE",
        "description": "75 sq.m corner suite with Coral Lounge privileges and panoramic Ain Dubai wheel view.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "75 sq.m",
        "price": 21000,
        "pricePerNight": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Coral Lounge Access",
          "Corner Sea Balcony",
          "Living Area",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "JA Ocean View Hotel JBR view",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.jaresortshotels.com/dubai/ja-ocean-view-hotel",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-dxb-ja-sea-king",
        "name": "Sea View King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "39 sq.m",
        "description": "39 sq.m guestroom with private balcony guaranteeing direct open sea views.",
        "pricePerNight": 12000,
        "price": 12000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Guaranteed Sea View",
          "Balcony",
          "Free Wi-Fi",
          "Walk-in Shower"
        ]
      },
      {
        "id": "room-dxb-ja-club-suite",
        "name": "Club Sea View Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "75 sq.m",
        "description": "75 sq.m corner suite with Coral Lounge privileges and panoramic Ain Dubai wheel view.",
        "pricePerNight": 21000,
        "price": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Coral Lounge Access",
          "Corner Sea Balcony",
          "Living Area",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-sin-marina-bay-sands",
    "destinationId": "dest-singapore",
    "name": "Marina Bay Sands",
    "city": "Singapore",
    "state": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "fullAddress": "10 Bayfront Avenue, Singapore 018956",
    "address": "10 Bayfront Avenue, Singapore 018956",
    "latitude": 1.2834,
    "longitude": 103.8607,
    "description": "World-renowned integrated resort featuring the legendary 57th-floor Sands SkyPark rooftop infinity pool, celebrity chef restaurants (Spago, Waku Ghin, CUT), and The Shoppes at Marina Bay Sands.",
    "shortDescription": "World-famous integrated resort featuring the iconic 57th-floor rooftop infinity pool.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.marinabaysands.com/",
    "phone": "+65 6688 8888",
    "email": "inquiries@marinabaysands.com",
    "checkInTime": "15:00",
    "checkOutTime": "11:00",
    "totalRooms": 2561,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 42000,
    "amenities": [
      "Exclusive Sands SkyPark 57th-Floor Infinity Pool",
      "Celebrity Chef Restaurants",
      "The Shoppes Mall & Casino",
      "Banyan Tree Spa",
      "Free High-Speed Wi-Fi",
      "Fitness Center 55th Floor",
      "ArtScience Museum Proximity"
    ],
    "roomTypes": [
      {
        "id": "room-sin-mbs-deluxe-bay",
        "name": "Deluxe Room Marina Bay View",
        "type": "DELUXE",
        "description": "47 sq.m room with floor-to-ceiling glass framing the shimmering Marina Bay skyline.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "47 sq.m",
        "price": 42000,
        "pricePerNight": 42000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "SkyPark Pool Access Included",
          "Marina Bay Skyline View",
          "Free Wi-Fi",
          "Walk-in Shower"
        ]
      },
      {
        "id": "room-sin-mbs-sands-suite",
        "name": "Sands Suite",
        "type": "SUITE",
        "description": "145 sq.m luxury suite with dedicated butler service, private pool table or massage room.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "145 sq.m",
        "price": 85000,
        "pricePerNight": 85000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Dedicated Butler",
          "Pool Table",
          "Club55 Lounge Access",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Marina Bay Sands Singapore skyline",
        "source": "Unsplash Licensed Hotel Photo"
      },
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "room",
        "alt": "Marina Bay Sands luxury room",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marinabaysands.com/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-sin-mbs-deluxe-bay",
        "name": "Deluxe Room Marina Bay View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "47 sq.m",
        "description": "47 sq.m room with floor-to-ceiling glass framing the shimmering Marina Bay skyline.",
        "pricePerNight": 42000,
        "price": 42000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "SkyPark Pool Access Included",
          "Marina Bay Skyline View",
          "Free Wi-Fi",
          "Walk-in Shower"
        ]
      },
      {
        "id": "room-sin-mbs-sands-suite",
        "name": "Sands Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "145 sq.m",
        "description": "145 sq.m luxury suite with dedicated butler service, private pool table or massage room.",
        "pricePerNight": 85000,
        "price": 85000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Dedicated Butler",
          "Pool Table",
          "Club55 Lounge Access",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-sin-pan-pacific",
    "destinationId": "dest-singapore",
    "name": "Pan Pacific Singapore",
    "city": "Singapore",
    "state": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "fullAddress": "7 Raffles Boulevard, Marina Square, Singapore 039595",
    "address": "7 Raffles Boulevard, Marina Square, Singapore 039595",
    "latitude": 1.2933,
    "longitude": 103.8578,
    "description": "38-storey 5-star hotel in Marina Bay connected to Marina Square, featuring soaring 35-storey atrium, circular outdoor pool, Edge buffet, and St. Gregory Spa.",
    "shortDescription": "Prestigious 5-star hotel in Marina Bay connected to Marina Square with 35-storey atrium.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.panpacific.com/en/hotels-and-resorts/pp-marina.html",
    "phone": "+65 6336 8111",
    "email": "enquiry.ppsin@panpacific.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 790,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 21000,
    "amenities": [
      "Circular Outdoor Swimming Pool",
      "St. Gregory Spa",
      "Edge Award-winning Buffet & Hai Tien Lo",
      "Pacific Club 38th Floor Lounge",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Connected to Marina Square Mall"
    ],
    "roomTypes": [
      {
        "id": "room-sin-pp-deluxe",
        "name": "Deluxe Panoramic Room",
        "type": "DELUXE",
        "description": "38 sq.m room with floor-to-ceiling glass framing Singapore city skyline.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "price": 21000,
        "pricePerNight": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Skyline View",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Work Desk"
        ]
      },
      {
        "id": "room-sin-pp-pacific-club",
        "name": "Pacific Club Harbour View Room",
        "type": "CLUB",
        "description": "46 sq.m high-floor room with 38th-floor Pacific Club Lounge access and panoramic harbour views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "46 sq.m",
        "price": 34000,
        "pricePerNight": 34000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Pacific Club Lounge",
          "Harbour View",
          "Champagne Breakfast",
          "Afternoon Tea"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Pan Pacific Singapore Marina Bay",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.panpacific.com/en/hotels-and-resorts/pp-marina.html",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-sin-pp-deluxe",
        "name": "Deluxe Panoramic Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "description": "38 sq.m room with floor-to-ceiling glass framing Singapore city skyline.",
        "pricePerNight": 21000,
        "price": 21000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Skyline View",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Work Desk"
        ]
      },
      {
        "id": "room-sin-pp-pacific-club",
        "name": "Pacific Club Harbour View Room",
        "type": "CLUB",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "46 sq.m",
        "description": "46 sq.m high-floor room with 38th-floor Pacific Club Lounge access and panoramic harbour views.",
        "pricePerNight": 34000,
        "price": 34000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Pacific Club Lounge",
          "Harbour View",
          "Champagne Breakfast",
          "Afternoon Tea"
        ]
      }
    ]
  },
  {
    "id": "hotel-sin-raffles",
    "destinationId": "dest-singapore",
    "name": "Raffles Singapore",
    "city": "Singapore",
    "state": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "fullAddress": "1 Beach Road, Singapore 189673",
    "address": "1 Beach Road, Singapore 189673",
    "latitude": 1.2947,
    "longitude": 103.8544,
    "description": "Legendary 1887 colonial grande dame and national monument, birthplace of the Singapore Sling at the Long Bar, featuring all-suite accommodations, private verandahs, and Raffles Butlers.",
    "shortDescription": "Legendary 1887 colonial landmark and national monument, birthplace of the Singapore Sling.",
    "category": "LUXURY",
    "rating": 4.9,
    "officialWebsite": "https://www.rafflessingapore.com/",
    "phone": "+65 6337 1886",
    "email": "singapore@raffles.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 115,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 72000,
    "amenities": [
      "National Monument Heritage Grounds",
      "Rooftop Swimming Pool",
      "Raffles Spa",
      "Long Bar (Birthplace of Singapore Sling)",
      "La Dame de Pic by Anne-Sophie Pic",
      "24-Hour Raffles Butler Service",
      "Courtyard Gardens"
    ],
    "roomTypes": [
      {
        "id": "room-sin-raffles-state-room",
        "name": "State Room Suite",
        "type": "SUITE",
        "description": "67 sq.m historic suite featuring parlour, bedroom with 14-foot ceiling, and access to common verandah.",
        "maxGuests": 2,
        "bedType": "1 Four-Poster King Bed",
        "roomSize": "67 sq.m",
        "price": 72000,
        "pricePerNight": 72000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Raffles Butler Service",
          "14-Foot Ceilings",
          "Verandah Access",
          "Peranakan Tiles"
        ]
      },
      {
        "id": "room-sin-raffles-palm-court",
        "name": "Palm Court Suite",
        "type": "SUITE",
        "description": "79 sq.m suite overlooking the historic Palm Court garden sanctuary.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "79 sq.m",
        "price": 98000,
        "pricePerNight": 98000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Palm Court Garden View",
          "Dedicated Butler",
          "Singapore Sling Welcome",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Raffles Singapore colonial facade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.rafflessingapore.com/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-sin-raffles-state-room",
        "name": "State Room Suite",
        "type": "SUITE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Four-Poster King Bed",
        "roomSize": "67 sq.m",
        "description": "67 sq.m historic suite featuring parlour, bedroom with 14-foot ceiling, and access to common verandah.",
        "pricePerNight": 72000,
        "price": 72000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Raffles Butler Service",
          "14-Foot Ceilings",
          "Verandah Access",
          "Peranakan Tiles"
        ]
      },
      {
        "id": "room-sin-raffles-palm-court",
        "name": "Palm Court Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "79 sq.m",
        "description": "79 sq.m suite overlooking the historic Palm Court garden sanctuary.",
        "pricePerNight": 98000,
        "price": 98000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Palm Court Garden View",
          "Dedicated Butler",
          "Singapore Sling Welcome",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-sin-the-fullerton",
    "destinationId": "dest-singapore",
    "name": "The Fullerton Hotel Singapore",
    "city": "Singapore",
    "state": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "fullAddress": "1 Fullerton Square, Singapore 049178",
    "address": "1 Fullerton Square, Singapore 049178",
    "latitude": 1.2864,
    "longitude": 103.8536,
    "description": "Grand Neoclassical national monument built in 1928 as Singapore's General Post Office at the mouth of the Singapore River, featuring 25-meter infinity pool facing the river and The Fullerton Spa.",
    "shortDescription": "Grand 1928 Neoclassical national monument at the mouth of the Singapore River.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.fullertonhotels.com/fullerton-hotel-singapore",
    "phone": "+65 6733 8388",
    "email": "tfs.info@fullertonhotels.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 400,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 26000,
    "amenities": [
      "25-Meter Riverfront Infinity Pool",
      "The Fullerton Spa",
      "Town Restaurant & Jade Cantonese",
      "Free High-Speed Wi-Fi",
      "Complimentary Heritage Tours",
      "Fitness Center",
      "Straits Club Floor"
    ],
    "roomTypes": [
      {
        "id": "room-sin-flt-courtyard",
        "name": "Heritage Courtyard Room",
        "type": "DELUXE",
        "description": "42 sq.m room reflecting historic Neoclassical architecture with sunlit atrium views.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "price": 26000,
        "pricePerNight": 26000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Atrium View",
          "Free Wi-Fi",
          "Balmain Amenities",
          "Bathtub"
        ]
      },
      {
        "id": "room-sin-flt-marina-bay",
        "name": "Premier Collyer Quay Marina Bay View Room",
        "type": "DELUXE",
        "description": "45 sq.m room with direct vista of Marina Bay Sands and waterfront promenade.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "price": 35000,
        "pricePerNight": 35000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Marina Bay View",
          "Straits Club Access",
          "Evening Cocktails",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Fullerton Hotel Singapore Neoclassical monument",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.fullertonhotels.com/fullerton-hotel-singapore",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-sin-flt-courtyard",
        "name": "Heritage Courtyard Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "description": "42 sq.m room reflecting historic Neoclassical architecture with sunlit atrium views.",
        "pricePerNight": 26000,
        "price": 26000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Atrium View",
          "Free Wi-Fi",
          "Balmain Amenities",
          "Bathtub"
        ]
      },
      {
        "id": "room-sin-flt-marina-bay",
        "name": "Premier Collyer Quay Marina Bay View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "45 sq.m",
        "description": "45 sq.m room with direct vista of Marina Bay Sands and waterfront promenade.",
        "pricePerNight": 35000,
        "price": 35000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Marina Bay View",
          "Straits Club Access",
          "Evening Cocktails",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-sin-shangri-la",
    "destinationId": "dest-singapore",
    "name": "Shangri-La Singapore",
    "city": "Singapore",
    "state": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "fullAddress": "22 Orange Grove Road, Singapore 258350",
    "address": "22 Orange Grove Road, Singapore 258350",
    "latitude": 1.3117,
    "longitude": 103.8267,
    "description": "The birthplace of Shangri-La hospitality nestled in 15 acres of botanical gardens minutes from Orchard Road, featuring free-form pool with water play, Shang Palace, and Chi The Spa.",
    "shortDescription": "15-acre tropical botanical garden haven moments from Orchard Road shopping boulevard.",
    "category": "LUXURY",
    "rating": 4.6,
    "officialWebsite": "https://www.shangri-la.com/singapore/shangrila/",
    "phone": "+65 6737 3644",
    "email": "singapore@shangri-la.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 792,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 23000,
    "amenities": [
      "15 Acres of Botanical Gardens",
      "Outdoor Free-form Pool & Splash Zone",
      "Chi, The Spa",
      "Shang Palace & The Line",
      "Free High-Speed Wi-Fi",
      "Valley Wing Butler Service",
      "Tennis Courts"
    ],
    "roomTypes": [
      {
        "id": "room-sin-shang-tower-deluxe",
        "name": "Tower Wing Deluxe Room",
        "type": "DELUXE",
        "description": "38 sq.m room with floor-to-ceiling glass and views over the tranquil gardens.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "price": 23000,
        "pricePerNight": 23000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Garden View",
          "Free Wi-Fi",
          "Walk-in Wardrobe",
          "Deep Soak Tub"
        ]
      },
      {
        "id": "room-sin-shang-valley-suite",
        "name": "Valley Wing One-Bedroom Suite",
        "type": "SUITE",
        "description": "87 sq.m exclusive wing suite with free-flowing Champagne, high tea, and personal butler.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "87 sq.m",
        "price": 52000,
        "pricePerNight": 52000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Unlimited Champagne Service",
          "Valley Wing Private Entrance",
          "Butler Service",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Shangri-La Singapore botanical garden resort",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.shangri-la.com/singapore/shangrila/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-sin-shang-tower-deluxe",
        "name": "Tower Wing Deluxe Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "38 sq.m",
        "description": "38 sq.m room with floor-to-ceiling glass and views over the tranquil gardens.",
        "pricePerNight": 23000,
        "price": 23000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Garden View",
          "Free Wi-Fi",
          "Walk-in Wardrobe",
          "Deep Soak Tub"
        ]
      },
      {
        "id": "room-sin-shang-valley-suite",
        "name": "Valley Wing One-Bedroom Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "87 sq.m",
        "description": "87 sq.m exclusive wing suite with free-flowing Champagne, high tea, and personal butler.",
        "pricePerNight": 52000,
        "price": 52000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Unlimited Champagne Service",
          "Valley Wing Private Entrance",
          "Butler Service",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-sin-parkroyal-marina-bay",
    "destinationId": "dest-singapore",
    "name": "PARKROYAL COLLECTION Marina Bay",
    "city": "Singapore",
    "state": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "fullAddress": "6 Raffles Boulevard, Marina Square, Singapore 039594",
    "address": "6 Raffles Boulevard, Marina Square, Singapore 039594",
    "latitude": 1.2917,
    "longitude": 103.8569,
    "description": "Singapore's first 'Garden-in-a-Hotel' featuring Southeast Asia's largest 21-story indoor atrium sky-lit greenhouse with over 2,400 plants, mineral water pool, and Peppermint farm-to-table dining.",
    "shortDescription": "Iconic biophilic garden-in-a-hotel with a 21-story sky-lit indoor greenhouse atrium.",
    "category": "FIVE_STAR",
    "rating": 4.6,
    "officialWebsite": "https://www.panpacific.com/en/hotels-and-resorts/pr-collection-marina-bay.html",
    "phone": "+65 6845 1000",
    "email": "enquiry.prsmb@parkroyalcollection.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 575,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 20000,
    "amenities": [
      "21-Story Sky-lit Biophilic Atrium",
      "Outdoor Mineral Water Pool with 1,380 Fiber Optics",
      "St. Gregory Spa",
      "Peppermint Farm-to-Table Dining",
      "Free High-Speed Wi-Fi",
      "Fitness Center & Rooftop Urban Farm"
    ],
    "roomTypes": [
      {
        "id": "room-sin-pr-urban-deluxe",
        "name": "Urban Deluxe Room",
        "type": "DELUXE",
        "description": "33 sq.m eco-designed room with private balcony overlooking the city skyline.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "33 sq.m",
        "price": 20000,
        "pricePerNight": 20000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Balcony",
          "Free Wi-Fi",
          "Filtered Drinking Water Tap",
          "Eco Amenities"
        ]
      },
      {
        "id": "room-sin-pr-collection-suite",
        "name": "COLLECTION Club Marina Bay Suite",
        "type": "SUITE",
        "description": "65 sq.m suite with COLLECTION Club privileges, daily hors d'oeuvres, and Marina Bay view.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "price": 32000,
        "pricePerNight": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Marina Bay View",
          "COLLECTION Club Lounge",
          "Evening Cocktails",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "PARKROYAL COLLECTION Marina Bay atrium",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.panpacific.com/en/hotels-and-resorts/pr-collection-marina-bay.html",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-sin-pr-urban-deluxe",
        "name": "Urban Deluxe Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "33 sq.m",
        "description": "33 sq.m eco-designed room with private balcony overlooking the city skyline.",
        "pricePerNight": 20000,
        "price": 20000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Balcony",
          "Free Wi-Fi",
          "Filtered Drinking Water Tap",
          "Eco Amenities"
        ]
      },
      {
        "id": "room-sin-pr-collection-suite",
        "name": "COLLECTION Club Marina Bay Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "description": "65 sq.m suite with COLLECTION Club privileges, daily hors d'oeuvres, and Marina Bay view.",
        "pricePerNight": 32000,
        "price": 32000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Marina Bay View",
          "COLLECTION Club Lounge",
          "Evening Cocktails",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-sin-swissotel-the-stamford",
    "destinationId": "dest-singapore",
    "name": "Swissôtel The Stamford",
    "city": "Singapore",
    "state": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "fullAddress": "2 Stamford Road, Singapore 178882",
    "address": "2 Stamford Road, Singapore 178882",
    "latitude": 1.2939,
    "longitude": 103.8533,
    "description": "One of Southeast Asia's tallest hotels rising 73 storeys above City Hall MRT station, featuring private balconies on all rooms, SKAI 70th-floor restaurant, and Willow Stream Spa.",
    "shortDescription": "73-storey tower rising above City Hall MRT station with panoramic Singapore harbour views.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.swissotel.com/hotels/singapore-stamford/",
    "phone": "+65 6338 8585",
    "email": "singapore-stamford@swissotel.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 1252,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 19000,
    "amenities": [
      "73rd-Floor Skyline Views",
      "Two Outdoor Swimming Pools",
      "Willow Stream Spa",
      "SKAI 70th-Floor Grill & Bar",
      "Free High-Speed Wi-Fi",
      "Direct City Hall MRT Access",
      "Executive Swiss Executive Club"
    ],
    "roomTypes": [
      {
        "id": "room-sin-swiss-premier-harbour",
        "name": "Premier Harbour View Room",
        "type": "DELUXE",
        "description": "40 sq.m high-floor room with private balcony framing Marina Bay and Singapore Strait.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "40 sq.m",
        "price": 19000,
        "pricePerNight": 19000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Harbour Balcony",
          "Free Wi-Fi",
          "Nespresso Machine",
          "High Floor"
        ]
      },
      {
        "id": "room-sin-swiss-exec-suite",
        "name": "Swiss Executive Suite",
        "type": "SUITE",
        "description": "70 sq.m corner suite with 65th-floor Swiss Executive Club Lounge access and panoramic views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "70 sq.m",
        "price": 31000,
        "pricePerNight": 31000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Executive Club Lounge",
          "Private Dual Balconies",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Swissôtel The Stamford 73-storey tower",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.swissotel.com/hotels/singapore-stamford/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-sin-swiss-premier-harbour",
        "name": "Premier Harbour View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "40 sq.m",
        "description": "40 sq.m high-floor room with private balcony framing Marina Bay and Singapore Strait.",
        "pricePerNight": 19000,
        "price": 19000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Harbour Balcony",
          "Free Wi-Fi",
          "Nespresso Machine",
          "High Floor"
        ]
      },
      {
        "id": "room-sin-swiss-exec-suite",
        "name": "Swiss Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "70 sq.m",
        "description": "70 sq.m corner suite with 65th-floor Swiss Executive Club Lounge access and panoramic views.",
        "pricePerNight": 31000,
        "price": 31000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Executive Club Lounge",
          "Private Dual Balconies",
          "Bathtub",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-sin-carlton",
    "destinationId": "dest-singapore",
    "name": "Carlton Hotel Singapore",
    "city": "Singapore",
    "state": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "fullAddress": "76 Bras Basah Road, Singapore 189558",
    "address": "76 Bras Basah Road, Singapore 189558",
    "latitude": 1.2961,
    "longitude": 103.8519,
    "description": "Centrally positioned 4-star upscale hotel in the arts and civic district opposite CHIJMES and Raffles City, offering bi-level swimming pool with cabanas, Wah Lok Cantonese restaurant, and gym.",
    "shortDescription": "Upscale 4-star hotel in the civic district opposite CHIJMES with bi-level pool.",
    "category": "FOUR_STAR",
    "rating": 4.3,
    "officialWebsite": "https://www.carltonhotel.sg/",
    "phone": "+65 6338 8333",
    "email": "mail@carltonhotel.sg",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 940,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 14000,
    "amenities": [
      "Bi-Level Swimming Pool & Cabanas",
      "Wah Lok Cantonese Restaurant",
      "Café Mosaic International Buffet",
      "Free High-Speed Wi-Fi",
      "CHIJMES & City Hall MRT Steps Away",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-sin-carlton-deluxe",
        "name": "Deluxe King Room",
        "type": "DOUBLE",
        "description": "30 sq.m guestroom with city views, Herman Miller work chair, and Sealy Posturepedic mattress.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "30 sq.m",
        "price": 14000,
        "pricePerNight": 14000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Workstation",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-sin-carlton-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "description": "34 sq.m high-floor room with Club Lounge access, evening cocktails, and breakfast.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "34 sq.m",
        "price": 19500,
        "pricePerNight": 19500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Club Lounge Privileges",
          "Evening Drinks & Canapes",
          "City View",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Carlton Hotel Singapore pool deck",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.carltonhotel.sg/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-sin-carlton-deluxe",
        "name": "Deluxe King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "30 sq.m",
        "description": "30 sq.m guestroom with city views, Herman Miller work chair, and Sealy Posturepedic mattress.",
        "pricePerNight": 14000,
        "price": 14000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Workstation",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-sin-carlton-exec",
        "name": "Executive Club Room",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "34 sq.m",
        "description": "34 sq.m high-floor room with Club Lounge access, evening cocktails, and breakfast.",
        "pricePerNight": 19500,
        "price": 19500,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Club Lounge Privileges",
          "Evening Drinks & Canapes",
          "City View",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-par-shangri-la",
    "destinationId": "dest-paris",
    "name": "Shangri-La Paris",
    "city": "Paris",
    "state": "Île-de-France",
    "country": "France",
    "countryCode": "FR",
    "fullAddress": "10 Avenue d'Iéna, 75116 Paris, France",
    "address": "10 Avenue d'Iéna, 75116 Paris",
    "latitude": 48.8639,
    "longitude": 2.2933,
    "description": "Former palace of Prince Roland Bonaparte overlooking the Eiffel Tower and River Seine in the 16th arrondissement, featuring Chi The Spa, indoor pool in the former stables, and Shang Palace.",
    "shortDescription": "Former palace of Prince Roland Bonaparte offering frontline unobstructed Eiffel Tower views.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.shangri-la.com/paris/shangrila/",
    "phone": "+33 1 53 67 19 98",
    "email": "paris@shangri-la.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 100,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 85000,
    "amenities": [
      "Direct Eiffel Tower & Seine Views",
      "Indoor Sunlit Swimming Pool",
      "Chi, The Spa",
      "Shang Palace Michelin-Starred Dining",
      "Free High-Speed Wi-Fi",
      "Private Terraces & French Gardens"
    ],
    "roomTypes": [
      {
        "id": "room-par-shang-eiffel-dlx",
        "name": "Eiffel View Room",
        "type": "DELUXE",
        "description": "36 sq.m room with floor-to-ceiling French windows looking straight at the Eiffel Tower.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "36 sq.m",
        "price": 85000,
        "pricePerNight": 85000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Direct Eiffel Tower View",
          "Marble Bath with Heated Floors",
          "Free Wi-Fi",
          "Guerlain Products"
        ]
      },
      {
        "id": "room-par-shang-duplex-suite",
        "name": "Duplex Eiffel Tower Suite",
        "type": "SUITE",
        "description": "110 sq.m two-level suite with private terrace looking onto the iron lady.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "110 sq.m",
        "price": 185000,
        "pricePerNight": 185000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Eiffel Terrace",
          "Two-Level Duplex",
          "Butler Service",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Shangri-La Paris Eiffel Tower balcony",
        "source": "Unsplash Licensed Hotel Photo"
      },
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "room",
        "alt": "Shangri-La Paris luxury room",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.shangri-la.com/paris/shangrila/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-par-shang-eiffel-dlx",
        "name": "Eiffel View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "36 sq.m",
        "description": "36 sq.m room with floor-to-ceiling French windows looking straight at the Eiffel Tower.",
        "pricePerNight": 85000,
        "price": 85000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Direct Eiffel Tower View",
          "Marble Bath with Heated Floors",
          "Free Wi-Fi",
          "Guerlain Products"
        ]
      },
      {
        "id": "room-par-shang-duplex-suite",
        "name": "Duplex Eiffel Tower Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "110 sq.m",
        "description": "110 sq.m two-level suite with private terrace looking onto the iron lady.",
        "pricePerNight": 185000,
        "price": 185000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Eiffel Terrace",
          "Two-Level Duplex",
          "Butler Service",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-par-ritz-paris",
    "destinationId": "dest-paris",
    "name": "Ritz Paris",
    "city": "Paris",
    "state": "Île-de-France",
    "country": "France",
    "countryCode": "FR",
    "fullAddress": "15 Place Vendôme, 75001 Paris, France",
    "address": "15 Place Vendôme, 75001 Paris",
    "latitude": 48.8683,
    "longitude": 2.3294,
    "description": "The grandest palace hotel in Paris founded in 1898 on Place Vendôme by César Ritz. Immortalized by Coco Chanel and Ernest Hemingway, featuring the Ritz Club indoor pool and Bar Hemingway.",
    "shortDescription": "Legendary 1898 palace hotel on Place Vendôme immortalized by Coco Chanel and Hemingway.",
    "category": "LUXURY",
    "rating": 4.9,
    "officialWebsite": "https://www.ritzparis.com/",
    "phone": "+33 1 43 16 30 30",
    "email": "reservations@ritzparis.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 142,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 98000,
    "amenities": [
      "Place Vendôme Prestigious Address",
      "Ritz Club Neoclassical Indoor Pool",
      "Bar Hemingway & Salon Proust",
      "The Grand Jardin French Gardens",
      "Free High-Speed Wi-Fi",
      "Ritz Escoffier Cooking School",
      "24-Hour In-Suite Butler"
    ],
    "roomTypes": [
      {
        "id": "room-par-ritz-superior",
        "name": "Superior Room",
        "type": "DELUXE",
        "description": "35 sq.m classic Parisian room with Louis XVI woodwork and golden swan tapware.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "35 sq.m",
        "price": 98000,
        "pricePerNight": 98000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Place Vendôme Courtyard View",
          "Swan Golden Faucets",
          "Free Wi-Fi",
          "Louis XVI Furniture"
        ]
      },
      {
        "id": "room-par-ritz-prestige-suite",
        "name": "Prestige Suite Vendôme",
        "type": "SUITE",
        "description": "90 sq.m historical suite looking directly onto the columns of Place Vendôme.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "price": 210000,
        "pricePerNight": 210000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Place Vendôme View",
          "Antique Salon",
          "Dedicated Butler",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Ritz Paris Place Vendôme entrance",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.ritzparis.com/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-par-ritz-superior",
        "name": "Superior Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "35 sq.m",
        "description": "35 sq.m classic Parisian room with Louis XVI woodwork and golden swan tapware.",
        "pricePerNight": 98000,
        "price": 98000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Place Vendôme Courtyard View",
          "Swan Golden Faucets",
          "Free Wi-Fi",
          "Louis XVI Furniture"
        ]
      },
      {
        "id": "room-par-ritz-prestige-suite",
        "name": "Prestige Suite Vendôme",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "90 sq.m",
        "description": "90 sq.m historical suite looking directly onto the columns of Place Vendôme.",
        "pricePerNight": 210000,
        "price": 210000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Place Vendôme View",
          "Antique Salon",
          "Dedicated Butler",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-par-le-meurice",
    "destinationId": "dest-paris",
    "name": "Le Meurice - Dorchester Collection",
    "city": "Paris",
    "state": "Île-de-France",
    "country": "France",
    "countryCode": "FR",
    "fullAddress": "228 Rue de Rivoli, 75001 Paris, France",
    "address": "228 Rue de Rivoli, 75001 Paris",
    "latitude": 48.8653,
    "longitude": 2.3283,
    "description": "The 'Hotel of Kings' facing the Tuileries Garden since 1835, blending 18th-century Versailles opulence with whimsical Philippe Starck designs and two-Michelin-starred Alain Ducasse dining.",
    "shortDescription": "Palace hotel facing the Tuileries Garden celebrated for 18th-century opulence and Alain Ducasse dining.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.dorchestercollection.com/paris/le-meurice",
    "phone": "+33 1 44 58 10 10",
    "email": "reservations.lmp@dorchestercollection.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 160,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 88000,
    "amenities": [
      "Tuileries Garden Frontline Views",
      "Two-Michelin-Starred Restaurant le Meurice Alain Ducasse",
      "Spa Valmont pour Le Meurice",
      "Bar 228 Jazz Lounge",
      "Free High-Speed Wi-Fi",
      "Cédric Grolet Pastry Boutique"
    ],
    "roomTypes": [
      {
        "id": "room-par-meurice-sup",
        "name": "Superior Room",
        "type": "DELUXE",
        "description": "30 sq.m room decorated in classic Louis XVI style with Italian marble bathroom.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "30 sq.m",
        "price": 88000,
        "pricePerNight": 88000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Tuileries Courtyard View",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Penhaligon's Toiletries"
        ]
      },
      {
        "id": "room-par-meurice-tuileries-suite",
        "name": "Tuileries Garden Suite",
        "type": "SUITE",
        "description": "80 sq.m suite with direct uninterrupted panorama of Tuileries Garden and the Louvre.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "price": 175000,
        "pricePerNight": 175000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Tuileries Panoramic View",
          "Versailles Salon",
          "Butler Service",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Le Meurice Paris Rue de Rivoli",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.dorchestercollection.com/paris/le-meurice",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-par-meurice-sup",
        "name": "Superior Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "30 sq.m",
        "description": "30 sq.m room decorated in classic Louis XVI style with Italian marble bathroom.",
        "pricePerNight": 88000,
        "price": 88000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Tuileries Courtyard View",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Penhaligon's Toiletries"
        ]
      },
      {
        "id": "room-par-meurice-tuileries-suite",
        "name": "Tuileries Garden Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "description": "80 sq.m suite with direct uninterrupted panorama of Tuileries Garden and the Louvre.",
        "pricePerNight": 175000,
        "price": 175000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Tuileries Panoramic View",
          "Versailles Salon",
          "Butler Service",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-par-intercontinental-le-grand",
    "destinationId": "dest-paris",
    "name": "InterContinental Paris Le Grand",
    "city": "Paris",
    "state": "Île-de-France",
    "country": "France",
    "countryCode": "FR",
    "fullAddress": "2 Rue Scribe, 75009 Paris, France",
    "address": "2 Rue Scribe, 75009 Paris",
    "latitude": 48.8711,
    "longitude": 2.3308,
    "description": "Inaugurated in 1862 by Empress Eugénie facing the Palais Garnier Opera house, home to the historic Café de la Paix and magnificent glass-roofed winter garden Verrière.",
    "shortDescription": "Napoleon III-era grand hotel directly facing the majestic Palais Garnier Opera.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.ihg.com/intercontinental/hotels/us/en/paris/parhb/hoteldetail",
    "phone": "+33 1 40 07 32 32",
    "email": "legrand@ihg.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 470,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 38000,
    "amenities": [
      "Opera Garnier Direct Views",
      "Historic Café de la Paix",
      "I-Spa by Algotherm",
      "La Verrière Winter Garden",
      "Free High-Speed Wi-Fi",
      "Club InterContinental Lounge",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-par-ic-classic",
        "name": "Classic King Room",
        "type": "DOUBLE",
        "description": "28 sq.m room designed in Napoleon III style with gilded accents and courtyard view.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "28 sq.m",
        "price": 38000,
        "pricePerNight": 38000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Courtyard View",
          "Free Wi-Fi",
          "Air Conditioning",
          "Byredo Amenities"
        ]
      },
      {
        "id": "room-par-ic-opera-view",
        "name": "Premium Opera View Room",
        "type": "DELUXE",
        "description": "36 sq.m room with large windows directly overlooking the facade of Palais Garnier Opera.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "36 sq.m",
        "price": 52000,
        "pricePerNight": 52000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Palais Garnier Opera View",
          "Club InterContinental Access",
          "Nespresso Machine",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "InterContinental Paris Le Grand Opera view",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.ihg.com/intercontinental/hotels/us/en/paris/parhb/hoteldetail",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-par-ic-classic",
        "name": "Classic King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "28 sq.m",
        "description": "28 sq.m room designed in Napoleon III style with gilded accents and courtyard view.",
        "pricePerNight": 38000,
        "price": 38000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Courtyard View",
          "Free Wi-Fi",
          "Air Conditioning",
          "Byredo Amenities"
        ]
      },
      {
        "id": "room-par-ic-opera-view",
        "name": "Premium Opera View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "36 sq.m",
        "description": "36 sq.m room with large windows directly overlooking the facade of Palais Garnier Opera.",
        "pricePerNight": 52000,
        "price": 52000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Palais Garnier Opera View",
          "Club InterContinental Access",
          "Nespresso Machine",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-par-hyatt-regency-etoile",
    "destinationId": "dest-paris",
    "name": "Hyatt Regency Paris Étoile",
    "city": "Paris",
    "state": "Île-de-France",
    "country": "France",
    "countryCode": "FR",
    "fullAddress": "3 Place du Général Kœnig, 75017 Paris, France",
    "address": "3 Place du Général Kœnig, 75017 Paris",
    "latitude": 48.8808,
    "longitude": 2.2833,
    "description": "The only skyscraper hotel in Paris rising 34 storeys at Porte Maillot, connecting to Palais des Congrès. Home to Windo Skybar on the 34th floor offering panoramic Eiffel views.",
    "shortDescription": "The only skyscraper hotel in Paris rising 34 storeys with panoramic 34th-floor Eiffel views.",
    "category": "FOUR_STAR",
    "rating": 4.3,
    "officialWebsite": "https://www.hyatt.com/hyatt-regency/parhr-hyatt-regency-paris-etoile",
    "phone": "+33 1 40 68 12 34",
    "email": "parisetoile.regency@hyatt.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 995,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 18000,
    "amenities": [
      "34th-Floor Windo Skybar",
      "Panoramic Eiffel Tower Views",
      "Direct Palais des Congrès Connection",
      "Free High-Speed Wi-Fi",
      "Fitness Center with City View",
      "Regency Club Floor"
    ],
    "roomTypes": [
      {
        "id": "room-par-hr-standard",
        "name": "Standard King Room",
        "type": "DOUBLE",
        "description": "22 sq.m streamlined room with large picture windows and Parisian skyline views.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "22 sq.m",
        "price": 18000,
        "pricePerNight": 18000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "City View",
          "Free Wi-Fi",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-par-hr-eiffel-view",
        "name": "High Floor Eiffel Tower View Room",
        "type": "DELUXE",
        "description": "26 sq.m high-floor room with panoramic unobstructed views of the Eiffel Tower.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "26 sq.m",
        "price": 26000,
        "pricePerNight": 26000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Direct Eiffel Tower View",
          "High Floor (Fl 20+)",
          "Regency Club Access",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Hyatt Regency Paris Etoile skyscraper tower",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/hyatt-regency/parhr-hyatt-regency-paris-etoile",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-par-hr-standard",
        "name": "Standard King Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "22 sq.m",
        "description": "22 sq.m streamlined room with large picture windows and Parisian skyline views.",
        "pricePerNight": 18000,
        "price": 18000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "City View",
          "Free Wi-Fi",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-par-hr-eiffel-view",
        "name": "High Floor Eiffel Tower View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "26 sq.m",
        "description": "26 sq.m high-floor room with panoramic unobstructed views of the Eiffel Tower.",
        "pricePerNight": 26000,
        "price": 26000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Direct Eiffel Tower View",
          "High Floor (Fl 20+)",
          "Regency Club Access",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-par-pullman-tour-eiffel",
    "destinationId": "dest-paris",
    "name": "Pullman Paris Tour Eiffel",
    "city": "Paris",
    "state": "Île-de-France",
    "country": "France",
    "countryCode": "FR",
    "fullAddress": "18 Avenue de Suffren, 75015 Paris, France",
    "address": "18 Avenue de Suffren, 75015 Paris",
    "latitude": 48.8553,
    "longitude": 2.2931,
    "description": "Located just steps from the foot of the Eiffel Tower on the Left Bank, featuring FR/AME brasserie, rooftop views, fitness lounge with Trocadéro views, and balconies on most rooms.",
    "shortDescription": "Modern 4-star hotel situated footsteps from the base of the Eiffel Tower with private balconies.",
    "category": "FOUR_STAR",
    "rating": 4.4,
    "officialWebsite": "https://all.accor.com/hotel/7229/index.en.shtml",
    "phone": "+33 1 44 38 56 00",
    "email": "h7229@accor.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 430,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 24000,
    "amenities": [
      "Footsteps from the Eiffel Tower",
      "Balconies with Eiffel Tower Views",
      "FR/AME Modern Brasserie",
      "24-Hour Fitness Lounge with Trocadéro View",
      "Free High-Speed Wi-Fi",
      "Direct Metro Access (Bir-Hakeim)"
    ],
    "roomTypes": [
      {
        "id": "room-par-pullman-classic",
        "name": "Classic King Room with Balcony",
        "type": "DOUBLE",
        "description": "26 sq.m contemporary room with private balcony overlooking the Parisian courtyard.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "26 sq.m",
        "price": 24000,
        "pricePerNight": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Private Balcony",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-par-pullman-eiffel",
        "name": "Deluxe Eiffel Tower View Room",
        "type": "DELUXE",
        "description": "32 sq.m high-floor room with private balcony directly facing the Eiffel Tower iron structure.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 38000,
        "pricePerNight": 38000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Direct Front-Row Eiffel Balcony",
          "Nespresso Machine",
          "C.O. Bigelow Amenities",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Pullman Paris Tour Eiffel next to Eiffel Tower",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://all.accor.com/hotel/7229/index.en.shtml",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-par-pullman-classic",
        "name": "Classic King Room with Balcony",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "26 sq.m",
        "description": "26 sq.m contemporary room with private balcony overlooking the Parisian courtyard.",
        "pricePerNight": 24000,
        "price": 24000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Private Balcony",
          "Free Wi-Fi",
          "Walk-in Shower",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-par-pullman-eiffel",
        "name": "Deluxe Eiffel Tower View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m high-floor room with private balcony directly facing the Eiffel Tower iron structure.",
        "pricePerNight": 38000,
        "price": 38000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Direct Front-Row Eiffel Balcony",
          "Nespresso Machine",
          "C.O. Bigelow Amenities",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-par-plaza-athenee",
    "destinationId": "dest-paris",
    "name": "Hôtel Plaza Athénée - Dorchester Collection",
    "city": "Paris",
    "state": "Île-de-France",
    "country": "France",
    "countryCode": "FR",
    "fullAddress": "25 Avenue Montaigne, 75008 Paris, France",
    "address": "25 Avenue Montaigne, 75008 Paris",
    "latitude": 48.8661,
    "longitude": 2.3047,
    "description": "The haute couture palace on prestigious Avenue Montaigne since 1913, famous for its red geranium-lined facade, Christian Dior Spa, courtyard ice rink in winter, and Jean Imbert dining.",
    "shortDescription": "Haute couture palace on Avenue Montaigne famed for red geranium awnings and Dior Spa.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.dorchestercollection.com/paris/hotel-plaza-athenee",
    "phone": "+33 1 53 67 66 65",
    "email": "reservations.hpa@dorchestercollection.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 154,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 92000,
    "amenities": [
      "Avenue Montaigne Haute Couture Location",
      "The Dior Spa",
      "Jean Imbert au Plaza Athénée",
      "Famous Courtyard Garden",
      "Free High-Speed Wi-Fi",
      "Personal Butler Service"
    ],
    "roomTypes": [
      {
        "id": "room-par-hpa-superior",
        "name": "Superior King Room",
        "type": "DELUXE",
        "description": "30 sq.m room decorated in classic Parisian Art Deco or Regency style with avenue view.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "30 sq.m",
        "price": 92000,
        "pricePerNight": 92000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Avenue Montaigne Outlook",
          "Free Wi-Fi",
          "Guerlain Bath Essentials",
          "Marble Bath"
        ]
      },
      {
        "id": "room-par-hpa-eiffel-suite",
        "name": "Eiffel Tower Signature Suite",
        "type": "SUITE",
        "description": "80 sq.m suite featuring private balcony directly framing the Eiffel Tower above Avenue Montaigne.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "price": 195000,
        "pricePerNight": 195000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Signature Eiffel Balcony",
          "Separate Salon",
          "Dedicated Butler",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Hôtel Plaza Athénée Avenue Montaigne red geraniums",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.dorchestercollection.com/paris/hotel-plaza-athenee",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-par-hpa-superior",
        "name": "Superior King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "30 sq.m",
        "description": "30 sq.m room decorated in classic Parisian Art Deco or Regency style with avenue view.",
        "pricePerNight": 92000,
        "price": 92000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Avenue Montaigne Outlook",
          "Free Wi-Fi",
          "Guerlain Bath Essentials",
          "Marble Bath"
        ]
      },
      {
        "id": "room-par-hpa-eiffel-suite",
        "name": "Eiffel Tower Signature Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "description": "80 sq.m suite featuring private balcony directly framing the Eiffel Tower above Avenue Montaigne.",
        "pricePerNight": 195000,
        "price": 195000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Signature Eiffel Balcony",
          "Separate Salon",
          "Dedicated Butler",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-par-westin-vendome",
    "destinationId": "dest-paris",
    "name": "The Westin Paris – Vendôme",
    "city": "Paris",
    "state": "Île-de-France",
    "country": "France",
    "countryCode": "FR",
    "fullAddress": "3 Rue de Castiglione, 75001 Paris, France",
    "address": "3 Rue de Castiglione, 75001 Paris",
    "latitude": 48.8664,
    "longitude": 2.3278,
    "description": "Historic grand hotel situated between Place Vendôme and the Tuileries Garden, offering views of the Eiffel Tower, Le First restaurant, and central courtyard patio.",
    "shortDescription": "Historic hotel between Place Vendôme and Tuileries Garden with views of the Eiffel Tower.",
    "category": "FOUR_STAR",
    "rating": 4.3,
    "officialWebsite": "https://www.marriott.com/hotels/travel/parwi-the-westin-paris-vendome/",
    "phone": "+33 1 44 77 11 11",
    "email": "westin.paris@westin.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 428,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 28000,
    "amenities": [
      "Tuileries Garden & Place Vendôme Location",
      "Le First Restaurant & Courtyard Patio",
      "Six Senses Spa Proximity",
      "Free High-Speed Wi-Fi",
      "WestinWORKOUT Fitness Studio",
      "24-Hour Concierge"
    ],
    "roomTypes": [
      {
        "id": "room-par-westin-sup",
        "name": "Superior Room",
        "type": "DOUBLE",
        "description": "26 sq.m room featuring Westin Heavenly Bed and views of the interior courtyard patio.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "26 sq.m",
        "price": 28000,
        "pricePerNight": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Heavenly Bed",
          "Free Wi-Fi",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-par-westin-tuileries-view",
        "name": "Deluxe Tuileries Garden View Room",
        "type": "DELUXE",
        "description": "32 sq.m room directly facing the Tuileries Garden with the Eiffel Tower in the backdrop.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 42000,
        "pricePerNight": 42000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Tuileries & Eiffel View",
          "Bathtub",
          "Nespresso Machine",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Westin Paris Vendome Castiglione facade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/parwi-the-westin-paris-vendome/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-par-westin-sup",
        "name": "Superior Room",
        "type": "DOUBLE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "26 sq.m",
        "description": "26 sq.m room featuring Westin Heavenly Bed and views of the interior courtyard patio.",
        "pricePerNight": 28000,
        "price": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Heavenly Bed",
          "Free Wi-Fi",
          "Air Conditioning",
          "Rain Shower"
        ]
      },
      {
        "id": "room-par-westin-tuileries-view",
        "name": "Deluxe Tuileries Garden View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m room directly facing the Tuileries Garden with the Eiffel Tower in the backdrop.",
        "pricePerNight": 42000,
        "price": 42000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Tuileries & Eiffel View",
          "Bathtub",
          "Nespresso Machine",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-lon-the-savoy",
    "destinationId": "dest-london",
    "name": "The Savoy, London",
    "city": "London",
    "state": "Greater London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "fullAddress": "Strand, London WC2R 0EZ, United Kingdom",
    "address": "Strand, London WC2R 0EZ",
    "latitude": 51.5103,
    "longitude": -0.1203,
    "description": "Britain's first luxury hotel opened in 1889 on the River Thames, famed for Art Deco and Edwardian interiors, Gordon Ramsay's Savoy Grill, and the legendary American Bar.",
    "shortDescription": "Britain's iconic 1889 luxury hotel on the Strand overlooking the River Thames.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.thesavoylondon.com/",
    "phone": "+44 20 7836 4343",
    "email": "savoy@fairmont.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 267,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 75000,
    "amenities": [
      "River Thames Views",
      "Indoor Pool & Beauty Spa",
      "American Bar & Beaufort Bar",
      "Savoy Grill by Gordon Ramsay",
      "Free High-Speed Wi-Fi",
      "24-Hour Savoy Butler Service",
      "Fitness Center"
    ],
    "roomTypes": [
      {
        "id": "room-lon-savoy-sup",
        "name": "Superior Queen Room",
        "type": "DELUXE",
        "description": "32 sq.m room decorated in Edwardian or Art Deco style with marble bathroom and city views.",
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "32 sq.m",
        "price": 75000,
        "pricePerNight": 75000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Art Deco Interiors",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Le Labo Toiletries"
        ]
      },
      {
        "id": "room-lon-savoy-river-suite",
        "name": "River View Junior Suite",
        "type": "SUITE",
        "description": "55 sq.m suite offering unobstructed panoramas across the River Thames toward the London Eye.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "price": 135000,
        "pricePerNight": 135000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "River Thames Panorama",
          "Savoy Butler Service",
          "Separate Sitting Area",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Savoy London riverfront facade",
        "source": "Unsplash Licensed Hotel Photo"
      },
      {
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "type": "room",
        "alt": "The Savoy London Edwardian suite",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.thesavoylondon.com/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-lon-savoy-sup",
        "name": "Superior Queen Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m room decorated in Edwardian or Art Deco style with marble bathroom and city views.",
        "pricePerNight": 75000,
        "price": 75000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Art Deco Interiors",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Le Labo Toiletries"
        ]
      },
      {
        "id": "room-lon-savoy-river-suite",
        "name": "River View Junior Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "description": "55 sq.m suite offering unobstructed panoramas across the River Thames toward the London Eye.",
        "pricePerNight": 135000,
        "price": 135000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "River Thames Panorama",
          "Savoy Butler Service",
          "Separate Sitting Area",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-lon-the-ritz",
    "destinationId": "dest-london",
    "name": "The Ritz London",
    "city": "London",
    "state": "Greater London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "fullAddress": "150 Piccadilly, St. James's, London W1J 9BR, United Kingdom",
    "address": "150 Piccadilly, St. James's, London W1J 9BR",
    "latitude": 51.5071,
    "longitude": -0.1417,
    "description": "Grade II* listed Neoclassical masterpiece on Piccadilly overlooking Green Park since 1906. Renowned worldwide for Afternoon Tea in the Palm Court and Michelin-starred Ritz Restaurant.",
    "shortDescription": "Neoclassical icon on Piccadilly famed for world-renowned Afternoon Tea in The Palm Court.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.theritzlondon.com/",
    "phone": "+44 20 7493 8181",
    "email": "enquire@theritzlondon.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 136,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 82000,
    "amenities": [
      "Piccadilly & Green Park Views",
      "The Palm Court World-Famous Afternoon Tea",
      "Michelin-Starred The Ritz Restaurant",
      "The Rivoli Bar Art Deco Lounge",
      "Free High-Speed Wi-Fi",
      "Rolls-Royce Phantom Chauffeur",
      "The Ritz Salon & Fitness"
    ],
    "roomTypes": [
      {
        "id": "room-lon-ritz-superior",
        "name": "Superior Queen Room",
        "type": "DELUXE",
        "description": "26 sq.m Louis XVI-styled room featuring original 24-karat gold leaf detailing and antique furnishings.",
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "26 sq.m",
        "price": 82000,
        "pricePerNight": 82000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Louis XVI Decor",
          "24-Karat Gold Details",
          "Marble Bath",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-lon-ritz-park-suite",
        "name": "Deluxe Suite Green Park View",
        "type": "SUITE",
        "description": "70 sq.m suite offering direct views over the royal treetops of Green Park.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "70 sq.m",
        "price": 155000,
        "pricePerNight": 155000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Green Park View",
          "Rolls-Royce Airport Transfer",
          "Dedicated Butler",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Ritz London Piccadilly colonnade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.theritzlondon.com/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-lon-ritz-superior",
        "name": "Superior Queen Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "26 sq.m",
        "description": "26 sq.m Louis XVI-styled room featuring original 24-karat gold leaf detailing and antique furnishings.",
        "pricePerNight": 82000,
        "price": 82000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Louis XVI Decor",
          "24-Karat Gold Details",
          "Marble Bath",
          "Free Wi-Fi"
        ]
      },
      {
        "id": "room-lon-ritz-park-suite",
        "name": "Deluxe Suite Green Park View",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "70 sq.m",
        "description": "70 sq.m suite offering direct views over the royal treetops of Green Park.",
        "pricePerNight": 155000,
        "price": 155000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Green Park View",
          "Rolls-Royce Airport Transfer",
          "Dedicated Butler",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-lon-the-langham",
    "destinationId": "dest-london",
    "name": "The Langham, London",
    "city": "London",
    "state": "Greater London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "fullAddress": "1C Portland Place, Regent Street, London W1B 1JA, United Kingdom",
    "address": "1C Portland Place, Regent Street, London W1B 1JA",
    "latitude": 51.5178,
    "longitude": -0.1436,
    "description": "Europe's first grand hotel opened in 1865 at the top of Regent Street, featuring Artesian cocktail bar (four times World's Best Bar), Chuan Spa with 16m pool, and Palm Court.",
    "shortDescription": "Europe's original 1865 grand hotel at the top of Regent Street featuring Artesian bar.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.langhamhotels.com/en/the-langham/london/",
    "phone": "+44 20 7636 1500",
    "email": "tllon.info@langhamhotels.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 380,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 58000,
    "amenities": [
      "16-Meter Indoor Pool in Former Bank Vault",
      "Artesian Multi-Award-Winning Cocktail Bar",
      "Chuan Body + Soul Spa",
      "Palm Court Afternoon Tea",
      "Free High-Speed Wi-Fi",
      "Regent Street & Marylebone Proximity",
      "The Langham Club Lounge"
    ],
    "roomTypes": [
      {
        "id": "room-lon-langham-sup",
        "name": "Superior King Room",
        "type": "DELUXE",
        "description": "33 sq.m classic British room with marble bathroom and Diptyque bath amenities.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "33 sq.m",
        "price": 58000,
        "pricePerNight": 58000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Free Wi-Fi",
          "Diptyque Toiletries",
          "Marble Bathroom",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-lon-langham-club-suite",
        "name": "The Langham Club Suite",
        "type": "SUITE",
        "description": "68 sq.m suite with The Langham Club lounge access, champagne breakfast, and Regent Street view.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "68 sq.m",
        "price": 98000,
        "pricePerNight": 98000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Langham Club Lounge Privileges",
          "Separate Living Room",
          "Regent Street View",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Langham London Portland Place entrance",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.langhamhotels.com/en/the-langham/london/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-lon-langham-sup",
        "name": "Superior King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "33 sq.m",
        "description": "33 sq.m classic British room with marble bathroom and Diptyque bath amenities.",
        "pricePerNight": 58000,
        "price": 58000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Free Wi-Fi",
          "Diptyque Toiletries",
          "Marble Bathroom",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-lon-langham-club-suite",
        "name": "The Langham Club Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "68 sq.m",
        "description": "68 sq.m suite with The Langham Club lounge access, champagne breakfast, and Regent Street view.",
        "pricePerNight": 98000,
        "price": 98000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Langham Club Lounge Privileges",
          "Separate Living Room",
          "Regent Street View",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-lon-the-dorchester",
    "destinationId": "dest-london",
    "name": "The Dorchester",
    "city": "London",
    "state": "Greater London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "fullAddress": "53 Park Lane, Mayfair, London W1K 1QA, United Kingdom",
    "address": "53 Park Lane, Mayfair, London W1K 1QA",
    "latitude": 51.5072,
    "longitude": -0.1528,
    "description": "Distinguished 1931 Mayfair landmark overlooking Hyde Park on Park Lane, home to three-Michelin-starred Alain Ducasse at The Dorchester, The Promenade, and The Dorchester Spa.",
    "shortDescription": "Distinguished 1931 Mayfair landmark overlooking Hyde Park on prestigious Park Lane.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.dorchestercollection.com/london/the-dorchester",
    "phone": "+44 20 7629 8888",
    "email": "reservations.tdl@dorchestercollection.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 250,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 85000,
    "amenities": [
      "Hyde Park Frontline Views",
      "Three-Michelin-Starred Alain Ducasse Restaurant",
      "The Dorchester Spa with Spiezia Organics",
      "The Vesper Bar",
      "Free High-Speed Wi-Fi",
      "Dedicated Butler Service",
      "Valet Parking"
    ],
    "roomTypes": [
      {
        "id": "room-lon-dorchester-deluxe",
        "name": "Deluxe Queen Room",
        "type": "DELUXE",
        "description": "37 sq.m room decorated in classic English style with Italian marble bathroom and Park Lane views.",
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "37 sq.m",
        "price": 85000,
        "pricePerNight": 85000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Park Lane Outlook",
          "Free Wi-Fi",
          "Aromatherapy Associates",
          "Italian Marble Bath"
        ]
      },
      {
        "id": "room-lon-dorchester-park-suite",
        "name": "Hyde Park Suite",
        "type": "SUITE",
        "description": "85 sq.m suite with direct panoramic views over the green canopy of Hyde Park.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "price": 175000,
        "pricePerNight": 175000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Hyde Park Panorama",
          "Dedicated Butler",
          "Marble Fireplace",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Dorchester Park Lane London facade",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.dorchestercollection.com/london/the-dorchester",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-lon-dorchester-deluxe",
        "name": "Deluxe Queen Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Queen Bed",
        "roomSize": "37 sq.m",
        "description": "37 sq.m room decorated in classic English style with Italian marble bathroom and Park Lane views.",
        "pricePerNight": 85000,
        "price": 85000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Park Lane Outlook",
          "Free Wi-Fi",
          "Aromatherapy Associates",
          "Italian Marble Bath"
        ]
      },
      {
        "id": "room-lon-dorchester-park-suite",
        "name": "Hyde Park Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "description": "85 sq.m suite with direct panoramic views over the green canopy of Hyde Park.",
        "pricePerNight": 175000,
        "price": 175000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Hyde Park Panorama",
          "Dedicated Butler",
          "Marble Fireplace",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-lon-park-hyatt-river-thames",
    "destinationId": "dest-london",
    "name": "Park Hyatt London River Thames",
    "city": "London",
    "state": "Greater London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "fullAddress": "7 Nine Elms Lane, London SW8 5PH, United Kingdom",
    "address": "7 Nine Elms Lane, London SW8 5PH",
    "latitude": 51.4853,
    "longitude": -0.1256,
    "description": "Ultra-luxury hotel in Nine Elms on the South Bank of the River Thames near the US Embassy and Battersea Power Station, featuring indoor pool with river views and The Spa.",
    "shortDescription": "Ultra-luxury riverside sanctuary in Nine Elms overlooking the Thames and Parliament.",
    "category": "LUXURY",
    "rating": 4.6,
    "officialWebsite": "https://www.hyatt.com/park-hyatt/lonph-park-hyatt-london-river-thames",
    "phone": "+44 20 8194 1234",
    "email": "london.parkhyatt@hyatt.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 203,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 55000,
    "amenities": [
      "River Thames Frontline Views",
      "Indoor 20-Meter Pool Overlooking River",
      "The Spa at Park Hyatt",
      "Nine Elms Chauffeur Service",
      "Free High-Speed Wi-Fi",
      "Fitness Studio",
      "Wine Cellar & Tasting Room"
    ],
    "roomTypes": [
      {
        "id": "room-lon-ph-river-view",
        "name": "Park King River View",
        "type": "DELUXE",
        "description": "42 sq.m room with floor-to-ceiling glass framing River Thames and Westminster skyline.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "price": 55000,
        "pricePerNight": 55000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Thames River View",
          "Free Wi-Fi",
          "Walk-in Shower & Soaking Tub",
          "Le Labo Products"
        ]
      },
      {
        "id": "room-lon-ph-suite",
        "name": "River Thames Suite",
        "type": "SUITE",
        "description": "85 sq.m corner suite with separate salon and sunset vistas along the river.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "price": 110000,
        "pricePerNight": 110000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Corner River Panorama",
          "Separate Salon",
          "Butler Service",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Park Hyatt London River Thames view",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.hyatt.com/park-hyatt/lonph-park-hyatt-london-river-thames",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-lon-ph-river-view",
        "name": "Park King River View",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "42 sq.m",
        "description": "42 sq.m room with floor-to-ceiling glass framing River Thames and Westminster skyline.",
        "pricePerNight": 55000,
        "price": 55000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Thames River View",
          "Free Wi-Fi",
          "Walk-in Shower & Soaking Tub",
          "Le Labo Products"
        ]
      },
      {
        "id": "room-lon-ph-suite",
        "name": "River Thames Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "85 sq.m",
        "description": "85 sq.m corner suite with separate salon and sunset vistas along the river.",
        "pricePerNight": 110000,
        "price": 110000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Corner River Panorama",
          "Separate Salon",
          "Butler Service",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-lon-marriott-county-hall",
    "destinationId": "dest-london",
    "name": "London Marriott Hotel County Hall",
    "city": "London",
    "state": "Greater London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "fullAddress": "Westminster Bridge Road, London SE1 7PB, United Kingdom",
    "address": "Westminster Bridge Road, London SE1 7PB",
    "latitude": 51.5014,
    "longitude": -0.1192,
    "description": "Located within the historic County Hall building on the South Bank right by Westminster Bridge, offering front-row views of Big Ben, the Houses of Parliament, and the London Eye.",
    "shortDescription": "Historic hotel inside County Hall directly facing Big Ben and Parliament on Westminster Bridge.",
    "category": "FIVE_STAR",
    "rating": 4.5,
    "officialWebsite": "https://www.marriott.com/hotels/travel/lonch-london-marriott-hotel-county-hall/",
    "phone": "+44 20 7928 5200",
    "email": "countyhall.concierge@marriott.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 206,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 42000,
    "amenities": [
      "Front-Row Big Ben & Parliament Views",
      "25-Meter Indoor Swimming Pool",
      "Gillray's Steakhouse & Bar",
      "M Club Lounge",
      "Free High-Speed Wi-Fi",
      "Fitness Center with River View",
      "London Eye Adjacent"
    ],
    "roomTypes": [
      {
        "id": "room-lon-county-big-ben",
        "name": "Deluxe Big Ben View Room",
        "type": "DELUXE",
        "description": "32 sq.m room with direct windows framing Big Ben clock tower and the River Thames.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "price": 42000,
        "pricePerNight": 42000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Direct Big Ben View",
          "Free Wi-Fi",
          "Heritage High Ceilings",
          "Rain Shower"
        ]
      },
      {
        "id": "room-lon-county-westminster-suite",
        "name": "Westminster Suite River View",
        "type": "SUITE",
        "description": "65 sq.m suite with separate parlor and uninterrupted views of the Houses of Parliament.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "price": 82000,
        "pricePerNight": 82000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Parliament Panorama",
          "M Club Lounge Access",
          "Separate Parlor",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "County Hall London facing Big Ben and Thames",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.marriott.com/hotels/travel/lonch-london-marriott-hotel-county-hall/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-lon-county-big-ben",
        "name": "Deluxe Big Ben View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "32 sq.m",
        "description": "32 sq.m room with direct windows framing Big Ben clock tower and the River Thames.",
        "pricePerNight": 42000,
        "price": 42000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Direct Big Ben View",
          "Free Wi-Fi",
          "Heritage High Ceilings",
          "Rain Shower"
        ]
      },
      {
        "id": "room-lon-county-westminster-suite",
        "name": "Westminster Suite River View",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "65 sq.m",
        "description": "65 sq.m suite with separate parlor and uninterrupted views of the Houses of Parliament.",
        "pricePerNight": 82000,
        "price": 82000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Parliament Panorama",
          "M Club Lounge Access",
          "Separate Parlor",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-lon-the-landmark",
    "destinationId": "dest-london",
    "name": "The Landmark London",
    "city": "London",
    "state": "Greater London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "fullAddress": "222 Marylebone Road, London NW1 6JQ, United Kingdom",
    "address": "222 Marylebone Road, London NW1 6JQ",
    "latitude": 51.5222,
    "longitude": -0.1628,
    "description": "Historic Victorian railway hotel in Marylebone built around an iconic 8-storey glass-roofed atrium filled with palm trees (The Winter Garden), offering 15m pool and spa.",
    "shortDescription": "Grand Victorian hotel in Marylebone featuring iconic 8-storey glass-roofed palm atrium.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.landmarklondon.co.uk/",
    "phone": "+44 20 7631 8000",
    "email": "reservations@thelandmark.co.uk",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 300,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 48000,
    "amenities": [
      "8-Storey Glass-Roofed Winter Garden Atrium",
      "15-Meter Chlorine-Free Swimming Pool",
      "Spa & Sanarium",
      "Winter Garden Afternoon Tea",
      "Free High-Speed Wi-Fi",
      "Marylebone Station Steps Away"
    ],
    "roomTypes": [
      {
        "id": "room-lon-landmark-superior",
        "name": "Superior King Room",
        "type": "DELUXE",
        "description": "51 sq.m exceptionally large London room with Italian marble bathroom and seating area.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "51 sq.m",
        "price": 48000,
        "pricePerNight": 48000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Spacious 51 sq.m",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-lon-landmark-atrium-suite",
        "name": "Atrium View Suite",
        "type": "SUITE",
        "description": "75 sq.m suite looking into the dramatic illuminated palm tree atrium.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "75 sq.m",
        "price": 88000,
        "pricePerNight": 88000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Winter Garden Atrium View",
          "Separate Living Area",
          "Deep Soak Tub",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "The Landmark London glass atrium",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.landmarklondon.co.uk/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-lon-landmark-superior",
        "name": "Superior King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "51 sq.m",
        "description": "51 sq.m exceptionally large London room with Italian marble bathroom and seating area.",
        "pricePerNight": 48000,
        "price": 48000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Spacious 51 sq.m",
          "Free Wi-Fi",
          "Marble Bathroom",
          "Air Conditioning"
        ]
      },
      {
        "id": "room-lon-landmark-atrium-suite",
        "name": "Atrium View Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "75 sq.m",
        "description": "75 sq.m suite looking into the dramatic illuminated palm tree atrium.",
        "pricePerNight": 88000,
        "price": 88000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Winter Garden Atrium View",
          "Separate Living Area",
          "Deep Soak Tub",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-lon-claridges",
    "destinationId": "dest-london",
    "name": "Claridge's",
    "city": "London",
    "state": "Greater London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "fullAddress": "Brook Street, Mayfair, London W1K 4HR, United Kingdom",
    "address": "Brook Street, Mayfair, London W1K 4HR",
    "latitude": 51.5125,
    "longitude": -0.1492,
    "description": "The epitome of timeless Mayfair Art Deco glamour since 1856, favorite of royalty and Hollywood stars, featuring The Foyer & Reading Room for afternoon tea and the subterranean Claridge's Spa.",
    "shortDescription": "The epitome of timeless Mayfair Art Deco glamour favored by royal houses and Hollywood icons.",
    "category": "LUXURY",
    "rating": 4.9,
    "officialWebsite": "https://www.claridges.co.uk/",
    "phone": "+44 20 7629 8860",
    "email": "reservations@claridges.co.uk",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 190,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 95000,
    "amenities": [
      "Mayfair Brook Street Address",
      "Subterranean Heated Pool & Claridge's Spa",
      "Fumoir & The Painter's Room Bars",
      "Legendary Claridge's Afternoon Tea",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Lalique and Art Deco Decor"
    ],
    "roomTypes": [
      {
        "id": "room-lon-claridges-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "description": "41 sq.m room designed in bespoke Art Deco or Victorian style with marble bathroom.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "41 sq.m",
        "price": 95000,
        "pricePerNight": 95000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Art Deco Interiors",
          "Free Wi-Fi",
          "Burberry Trenchcoats Available",
          "Marble Bath"
        ]
      },
      {
        "id": "room-lon-claridges-mayfair-suite",
        "name": "Mayfair Suite",
        "type": "SUITE",
        "description": "80 sq.m signature suite with original Art Deco fireplace, private dressing room, and personal butler.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "price": 185000,
        "pricePerNight": 185000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "amenities": [
          "Art Deco Fireplace",
          "Personal Butler",
          "Dressing Room",
          "Breakfast Included"
        ]
      }
    ],
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
        "type": "exterior",
        "alt": "Claridge's Mayfair London entrance",
        "source": "Unsplash Licensed Hotel Photo"
      }
    ],
    "imageUrls": [
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80"
    ],
    "sourceUrl": "https://www.claridges.co.uk/",
    "verifiedAt": "2026-09-26T12:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-lon-claridges-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "41 sq.m",
        "description": "41 sq.m room designed in bespoke Art Deco or Victorian style with marble bathroom.",
        "pricePerNight": 95000,
        "price": 95000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Art Deco Interiors",
          "Free Wi-Fi",
          "Burberry Trenchcoats Available",
          "Marble Bath"
        ]
      },
      {
        "id": "room-lon-claridges-mayfair-suite",
        "name": "Mayfair Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "description": "80 sq.m signature suite with original Art Deco fireplace, private dressing room, and personal butler.",
        "pricePerNight": 185000,
        "price": 185000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": [
          "Art Deco Fireplace",
          "Personal Butler",
          "Dressing Room",
          "Breakfast Included"
        ]
      }
    ]
  },
  {
    "id": "hotel-tky-peninsula",
    "destinationId": "dest-tokyo",
    "name": "The Peninsula Tokyo",
    "city": "Tokyo",
    "state": "Kanto",
    "country": "Japan",
    "countryCode": "JP",
    "fullAddress": "1-8-1 Yurakucho, Chiyoda-ku, Tokyo 100-0006, Japan",
    "address": "1-8-1 Yurakucho, Chiyoda-ku, Tokyo",
    "latitude": 35.6742,
    "longitude": 139.7606,
    "description": "Located opposite the Imperial Palace and Hibiya Park, The Peninsula Tokyo combines modern luxury with Japanese aesthetics, featuring 24-story lantern-inspired architecture and Peter restaurant.",
    "shortDescription": "Iconic Japanese lantern-inspired 5-star hotel facing Hibiya Park and Imperial Palace.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.peninsula.com/en/tokyo/5-star-luxury-hotel-ginza",
    "phone": "+81 3 6270 2888",
    "email": "ptk@peninsula.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 314,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 65000,
    "amenities": [
      "Imperial Palace & Hibiya Park Views",
      "Indoor Heated Swimming Pool",
      "The Peninsula Spa & Health Club",
      "Peter Grill & Bar with Panoramic Views",
      "Free High-Speed Wi-Fi",
      "Concierge & Luxury Rolls-Royce Fleet",
      "Subway Station Direct Underground Access"
    ],
    "roomTypes": [
      {
        "id": "room-tky-pen-deluxe",
        "name": "Deluxe Room",
        "type": "DELUXE",
        "description": "54 sq.m room blending traditional Japanese design with modern tech, dressing room, and deep soaking tub.",
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Twin Beds",
        "roomSize": "54 sq.m",
        "price": 65000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-pen-grand-lux",
        "name": "Grand Deluxe Room",
        "type": "PREMIUM",
        "description": "63 sq.m corner room with panoramic skyline and Hibiya Park views, marble bath with built-in TV.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "63 sq.m",
        "price": 85000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-pen-exec-ste",
        "name": "Executive Suite",
        "type": "SUITE",
        "description": "86 sq.m suite featuring separate living room, dining area, walk-in closet, and lavish Japanese hospitality.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "86 sq.m",
        "price": 135000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      }
    ],
    "images": [
      {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_Peninsula_Tokyo.jpg/1280px-The_Peninsula_Tokyo.jpg",
        "type": "exterior",
        "alt": "The Peninsula Tokyo Yurakucho exterior facade",
        "source": "Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Park_Hyatt_Tokyo_Lobby.jpg/1280px-Park_Hyatt_Tokyo_Lobby.jpg",
        "type": "lobby",
        "alt": "Luxury hotel interior in Tokyo",
        "source": "Wikimedia Commons (CC BY-SA 3.0)"
      }
    ],
    "imageUrls": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_Peninsula_Tokyo.jpg/1280px-The_Peninsula_Tokyo.jpg"
    ],
    "sourceUrl": "https://www.peninsula.com/en/tokyo/5-star-luxury-hotel-ginza",
    "verifiedAt": "2025-02-26T00:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-tky-pen-deluxe",
        "name": "Deluxe Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Twin Beds",
        "roomSize": "54 sq.m",
        "description": "54 sq.m room blending traditional Japanese design with modern tech, dressing room, and deep soaking tub.",
        "pricePerNight": 65000,
        "price": 65000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-pen-grand-lux",
        "name": "Grand Deluxe Room",
        "type": "PREMIUM",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "63 sq.m",
        "description": "63 sq.m corner room with panoramic skyline and Hibiya Park views, marble bath with built-in TV.",
        "pricePerNight": 85000,
        "price": 85000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-pen-exec-ste",
        "name": "Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "86 sq.m",
        "description": "86 sq.m suite featuring separate living room, dining area, walk-in closet, and lavish Japanese hospitality.",
        "pricePerNight": 135000,
        "price": 135000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      }
    ]
  },
  {
    "id": "hotel-tky-park-hyatt",
    "destinationId": "dest-tokyo",
    "name": "Park Hyatt Tokyo",
    "city": "Tokyo",
    "state": "Kanto",
    "country": "Japan",
    "countryCode": "JP",
    "fullAddress": "3-7-1-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo 163-1055, Japan",
    "address": "3-7-1-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo",
    "latitude": 35.6856,
    "longitude": 139.6911,
    "description": "Occupying the top 14 floors of Kenzo Tange's 52-story Shinjuku Park Tower, Park Hyatt Tokyo is globally celebrated for its New York Grill, dramatic Mt. Fuji views, and cinematic presence in Lost in Translation.",
    "shortDescription": "World-renowned luxury hotel atop Shinjuku Park Tower with iconic New York Bar & Grill.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.hyatt.com/en-US/hotel/japan/park-hyatt-tokyo/tyoph",
    "phone": "+81 3 5322 1234",
    "email": "tokyo.park@hyatt.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 177,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 70000,
    "amenities": [
      "Club on the Park 47th-Floor Atrium Pool",
      "Panoramic Tokyo & Mt. Fuji Views",
      "New York Grill & New York Bar on 52nd Floor",
      "Spa & Treatment Rooms",
      "Free High-Speed Wi-Fi",
      "24-Hour Fitness Center",
      "Valet Parking & Airport Limousine"
    ],
    "roomTypes": [
      {
        "id": "room-tky-pht-deluxe",
        "name": "Park Deluxe King Room",
        "type": "DELUXE",
        "description": "55 sq.m aerie with wall-to-wall panoramic city views, deep granite soaking tub, and custom Japanese artwork.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "price": 70000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-pht-view",
        "name": "Park View King Room",
        "type": "PREMIUM",
        "description": "60 sq.m room facing Shinjuku Gyoen or Mount Fuji on clear days, walk-in closet and spa bathtub.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "60 sq.m",
        "price": 88000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-pht-ste",
        "name": "Park Suite King",
        "type": "SUITE",
        "description": "100 sq.m suite featuring living room with library, dining area, sauna access, and dramatic metropolitan views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "100 sq.m",
        "price": 150000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      }
    ],
    "images": [
      {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Shinjuku_Park_Tower_2016.JPG/1280px-Shinjuku_Park_Tower_2016.JPG",
        "type": "exterior",
        "alt": "Shinjuku Park Tower housing Park Hyatt Tokyo",
        "source": "Wikimedia Commons (CC BY-SA 4.0)"
      }
    ],
    "imageUrls": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Shinjuku_Park_Tower_2016.JPG/1280px-Shinjuku_Park_Tower_2016.JPG"
    ],
    "sourceUrl": "https://www.hyatt.com/en-US/hotel/japan/park-hyatt-tokyo/tyoph",
    "verifiedAt": "2025-02-26T00:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-tky-pht-deluxe",
        "name": "Park Deluxe King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "55 sq.m",
        "description": "55 sq.m aerie with wall-to-wall panoramic city views, deep granite soaking tub, and custom Japanese artwork.",
        "pricePerNight": 70000,
        "price": 70000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-pht-view",
        "name": "Park View King Room",
        "type": "PREMIUM",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "60 sq.m",
        "description": "60 sq.m room facing Shinjuku Gyoen or Mount Fuji on clear days, walk-in closet and spa bathtub.",
        "pricePerNight": 88000,
        "price": 88000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-pht-ste",
        "name": "Park Suite King",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "100 sq.m",
        "description": "100 sq.m suite featuring living room with library, dining area, sauna access, and dramatic metropolitan views.",
        "pricePerNight": 150000,
        "price": 150000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      }
    ]
  },
  {
    "id": "hotel-tky-imperial",
    "destinationId": "dest-tokyo",
    "name": "Imperial Hotel, Tokyo",
    "city": "Tokyo",
    "state": "Kanto",
    "country": "Japan",
    "countryCode": "JP",
    "fullAddress": "1-1-1 Uchisaiwaicho, Chiyoda-ku, Tokyo 100-8558, Japan",
    "address": "1-1-1 Uchisaiwaicho, Chiyoda-ku, Tokyo",
    "latitude": 35.6719,
    "longitude": 139.7589,
    "description": "Founded in 1890 at the behest of the Japanese aristocracy, the Imperial Hotel is Japan's most historic grand hotel, renowned for unmatched omotenashi service, Les Saisons restaurant, and Imperial suites.",
    "shortDescription": "Historic 1890 landmark hotel known for legendary Japanese hospitality next to Hibiya Park.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.imperialhotel.co.jp/e/tokyo/",
    "phone": "+81 3 3504 1111",
    "email": null,
    "checkInTime": "14:00",
    "checkOutTime": "12:00",
    "totalRooms": 931,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 42000,
    "amenities": [
      "Indoor Pool & Fitness Center",
      "Les Saisons French Fine Dining",
      "Old Imperial Bar (Frank Lloyd Wright elements)",
      "Traditional Japanese Tea Ceremony Room",
      "Free High-Speed Wi-Fi",
      "Business Center & Shopping Arcade",
      "Concierge & Airport Limousine Bus"
    ],
    "roomTypes": [
      {
        "id": "room-tky-imp-std",
        "name": "Main Building Superior Room",
        "type": "DELUXE",
        "description": "32 sq.m refined room with elegant decor, Airweave bedding, and serene views of Hibiya Park.",
        "maxGuests": 2,
        "bedType": "1 Queen Bed or 2 Single Beds",
        "roomSize": "32 sq.m",
        "price": 42000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-imp-tower",
        "name": "Imperial Floor Deluxe Room",
        "type": "PREMIUM",
        "description": "42 sq.m room on exclusive Imperial Floors (14-16F) with dedicated attendant service and city vistas.",
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Twin Beds",
        "roomSize": "42 sq.m",
        "price": 58000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-imp-ste",
        "name": "Premier Suite",
        "type": "SUITE",
        "description": "80 sq.m suite featuring expansive living room, marble bathroom, and panoramic Tokyo skyline views.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "price": 98000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      }
    ],
    "images": [
      {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Imperial_Hotel_Tokyo.jpg/1280px-Imperial_Hotel_Tokyo.jpg",
        "type": "exterior",
        "alt": "Imperial Hotel Tokyo main building facade",
        "source": "Wikimedia Commons (CC BY-SA 3.0)"
      }
    ],
    "imageUrls": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Imperial_Hotel_Tokyo.jpg/1280px-Imperial_Hotel_Tokyo.jpg"
    ],
    "sourceUrl": "https://www.imperialhotel.co.jp/e/tokyo/",
    "verifiedAt": "2025-02-26T00:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-tky-imp-std",
        "name": "Main Building Superior Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 Queen Bed or 2 Single Beds",
        "roomSize": "32 sq.m",
        "description": "32 sq.m refined room with elegant decor, Airweave bedding, and serene views of Hibiya Park.",
        "pricePerNight": 42000,
        "price": 42000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-imp-tower",
        "name": "Imperial Floor Deluxe Room",
        "type": "PREMIUM",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Twin Beds",
        "roomSize": "42 sq.m",
        "description": "42 sq.m room on exclusive Imperial Floors (14-16F) with dedicated attendant service and city vistas.",
        "pricePerNight": 58000,
        "price": 58000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-imp-ste",
        "name": "Premier Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "80 sq.m",
        "description": "80 sq.m suite featuring expansive living room, marble bathroom, and panoramic Tokyo skyline views.",
        "pricePerNight": 98000,
        "price": 98000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      }
    ]
  },
  {
    "id": "hotel-tky-shangri-la",
    "destinationId": "dest-tokyo",
    "name": "Shangri-La Tokyo",
    "city": "Tokyo",
    "state": "Kanto",
    "country": "Japan",
    "countryCode": "JP",
    "fullAddress": "1-8-3 Marunouchi, Chiyoda-ku, Tokyo 100-8283, Japan",
    "address": "1-8-3 Marunouchi, Chiyoda-ku, Tokyo",
    "latitude": 35.6828,
    "longitude": 139.7708,
    "description": "Perched atop the Marunouchi Trust Tower Main next to Tokyo Station, Shangri-La Tokyo offers opulent Asian hospitality, Chi The Spa, and Italian dining at Piacere with Imperial Palace vistas.",
    "shortDescription": "Tranquil luxury retreat adjacent to Tokyo Station with panoramic Imperial Palace views.",
    "category": "LUXURY",
    "rating": 4.7,
    "officialWebsite": "https://www.shangri-la.com/tokyo/shangrila/",
    "phone": "+81 3 6739 7888",
    "email": "tokyo@shangri-la.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 200,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 58000,
    "amenities": [
      "Direct Tokyo Station Shinkansen Meet & Greet",
      "Indoor Heated Pool with Skyline Vistas",
      "Chi, The Spa",
      "Piacere Italian Fine Dining & Nadaman Japanese",
      "Free High-Speed Wi-Fi",
      "Health Club & Steam Sauna",
      "Horizon Club Lounge"
    ],
    "roomTypes": [
      {
        "id": "room-tky-shang-dlx",
        "name": "Deluxe Imperial Garden View Room",
        "type": "DELUXE",
        "description": "50 sq.m room featuring floor-to-ceiling windows overlooking the Imperial Palace gardens and Tokyo Bay.",
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Twin Beds",
        "roomSize": "50 sq.m",
        "price": 58000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-shang-prem",
        "name": "Premier City View Room",
        "type": "PREMIUM",
        "description": "68 sq.m corner room featuring expansive circular windows with Tokyo Skytree and cityscape views.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "68 sq.m",
        "price": 76000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-shang-ste",
        "name": "Executive Suite",
        "type": "SUITE",
        "description": "120 sq.m luxury suite with custom crystal chandeliers, dining table for six, and Horizon Club privileges.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "120 sq.m",
        "price": 130000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      }
    ],
    "images": [
      {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Marunouchi_Trust_Tower_Main_2014.JPG/1280px-Marunouchi_Trust_Tower_Main_2014.JPG",
        "type": "exterior",
        "alt": "Marunouchi Trust Tower housing Shangri-La Tokyo",
        "source": "Wikimedia Commons (CC BY-SA 4.0)"
      }
    ],
    "imageUrls": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Marunouchi_Trust_Tower_Main_2014.JPG/1280px-Marunouchi_Trust_Tower_Main_2014.JPG"
    ],
    "sourceUrl": "https://www.shangri-la.com/tokyo/shangrila/",
    "verifiedAt": "2025-02-26T00:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-tky-shang-dlx",
        "name": "Deluxe Imperial Garden View Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Twin Beds",
        "roomSize": "50 sq.m",
        "description": "50 sq.m room featuring floor-to-ceiling windows overlooking the Imperial Palace gardens and Tokyo Bay.",
        "pricePerNight": 58000,
        "price": 58000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-shang-prem",
        "name": "Premier City View Room",
        "type": "PREMIUM",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "68 sq.m",
        "description": "68 sq.m corner room featuring expansive circular windows with Tokyo Skytree and cityscape views.",
        "pricePerNight": 76000,
        "price": 76000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-shang-ste",
        "name": "Executive Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "120 sq.m",
        "description": "120 sq.m luxury suite with custom crystal chandeliers, dining table for six, and Horizon Club privileges.",
        "pricePerNight": 130000,
        "price": 130000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      }
    ]
  },
  {
    "id": "hotel-tky-ritz-carlton",
    "destinationId": "dest-tokyo",
    "name": "The Ritz-Carlton, Tokyo",
    "city": "Tokyo",
    "state": "Kanto",
    "country": "Japan",
    "countryCode": "JP",
    "fullAddress": "Tokyo Midtown 9-7-1 Akasaka, Minato-ku, Tokyo 107-6245, Japan",
    "address": "Tokyo Midtown 9-7-1 Akasaka, Minato-ku, Tokyo",
    "latitude": 35.6658,
    "longitude": 139.7311,
    "description": "Perched high above Roppongi on floors 45 through 53 of Midtown Tower, The Ritz-Carlton, Tokyo features Hinokizaka Michelin-level Japanese cuisine, The Bar, and unobstructed 360-degree views to Tokyo Tower and Mt. Fuji.",
    "shortDescription": "Ultra-luxury hotel atop Tokyo Midtown Tower in Roppongi with stunning Tokyo Tower views.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.ritzcarlton.com/en/hotels/japan/tokyo",
    "phone": "+81 3 3423 8000",
    "email": "rc.tyorz.leads@ritzcarlton.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 247,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 72000,
    "amenities": [
      "Indoor Lap Pool on 46th Floor",
      "The Ritz-Carlton Spa & Fitness Center",
      "Hinokizaka Japanese Dining & Azure 45",
      "The Bar with Live Jazz & Skyline Views",
      "Club Lounge on 53rd Floor",
      "Free High-Speed Wi-Fi",
      "Tokyo Midtown Direct Underground Access"
    ],
    "roomTypes": [
      {
        "id": "room-tky-rc-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "description": "52 sq.m guest room with deep soaking tub, featherbeds, and breathtaking Tokyo skyline and Roppongi views.",
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Double Beds",
        "roomSize": "52 sq.m",
        "price": 72000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-rc-tower",
        "name": "Tokyo Tower View Room",
        "type": "PREMIUM",
        "description": "52 sq.m room directly facing illuminated Tokyo Tower with marble bath and rainforest shower.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "52 sq.m",
        "price": 88000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-rc-club-ste",
        "name": "Carlton Suite Club Level",
        "type": "SUITE",
        "description": "100 sq.m corner suite with separate living room, Mt. Fuji view, and 5-time culinary presentations in Club Lounge.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "100 sq.m",
        "price": 160000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      }
    ],
    "images": [
      {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Midtown_Tower_in_Tokyo_Midtown%2C_Roppongi.jpg/1280px-Midtown_Tower_in_Tokyo_Midtown%2C_Roppongi.jpg",
        "type": "exterior",
        "alt": "Tokyo Midtown Tower housing The Ritz-Carlton Tokyo",
        "source": "Wikimedia Commons (CC BY-SA 3.0)"
      }
    ],
    "imageUrls": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Midtown_Tower_in_Tokyo_Midtown%2C_Roppongi.jpg/1280px-Midtown_Tower_in_Tokyo_Midtown%2C_Roppongi.jpg"
    ],
    "sourceUrl": "https://www.ritzcarlton.com/en/hotels/japan/tokyo",
    "verifiedAt": "2025-02-26T00:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-tky-rc-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Double Beds",
        "roomSize": "52 sq.m",
        "description": "52 sq.m guest room with deep soaking tub, featherbeds, and breathtaking Tokyo skyline and Roppongi views.",
        "pricePerNight": 72000,
        "price": 72000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-rc-tower",
        "name": "Tokyo Tower View Room",
        "type": "PREMIUM",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "52 sq.m",
        "description": "52 sq.m room directly facing illuminated Tokyo Tower with marble bath and rainforest shower.",
        "pricePerNight": 88000,
        "price": 88000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-rc-club-ste",
        "name": "Carlton Suite Club Level",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "100 sq.m",
        "description": "100 sq.m corner suite with separate living room, Mt. Fuji view, and 5-time culinary presentations in Club Lounge.",
        "pricePerNight": 160000,
        "price": 160000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      }
    ]
  },
  {
    "id": "hotel-tky-hilton",
    "destinationId": "dest-tokyo",
    "name": "Hilton Tokyo",
    "city": "Tokyo",
    "state": "Kanto",
    "country": "Japan",
    "countryCode": "JP",
    "fullAddress": "6-6-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-0023, Japan",
    "address": "6-6-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo",
    "latitude": 35.6922,
    "longitude": 139.6917,
    "description": "Located in the heart of Shinjuku's skyscraper district, Hilton Tokyo provides direct underground access to Tokyo Metro, modern rooms with traditional shoji screens, and an indoor rooftop tennis court.",
    "shortDescription": "Vibrant Shinjuku hotel with 24-hr gym, rooftop tennis courts, and direct subway access.",
    "category": "BUSINESS",
    "rating": 4.5,
    "officialWebsite": "https://www.hilton.com/en/hotels/tyohitw-hilton-tokyo/",
    "phone": "+81 3 3344 5111",
    "email": "tokyo@hilton.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 830,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 28000,
    "amenities": [
      "Indoor Heated Swimming Pool",
      "Two Rooftop Tennis Courts",
      "24-Hour Fitness Center & Sauna",
      "Marble Lounge Famous Dessert Buffets",
      "Free Shuttle to Shinjuku Station",
      "Free High-Speed Wi-Fi",
      "Direct Metro Underground Passage (Tochomae Station)"
    ],
    "roomTypes": [
      {
        "id": "room-tky-hil-hilton",
        "name": "Hilton King Room",
        "type": "DELUXE",
        "description": "30 sq.m room equipped with modern Japanese shoji window screens, ergonomic workspace, and city view.",
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Twin Beds",
        "roomSize": "30 sq.m",
        "price": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-hil-exec",
        "name": "Executive King Room",
        "type": "EXECUTIVE",
        "description": "35 sq.m room on high floors with Executive Lounge breakfast, evening cocktails, and Mt. Fuji views.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "35 sq.m",
        "price": 39000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-hil-ste",
        "name": "Junior Suite",
        "type": "SUITE",
        "description": "44 sq.m open-concept suite with separate living and sleeping zones, deep bath, and Executive benefits.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "price": 52000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      }
    ],
    "images": [
      {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Hilton_Tokyo_2010.jpg/1280px-Hilton_Tokyo_2010.jpg",
        "type": "exterior",
        "alt": "Hilton Tokyo Nishi-Shinjuku exterior facade",
        "source": "Wikimedia Commons (CC BY-SA 3.0)"
      }
    ],
    "imageUrls": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Hilton_Tokyo_2010.jpg/1280px-Hilton_Tokyo_2010.jpg"
    ],
    "sourceUrl": "https://www.hilton.com/en/hotels/tyohitw-hilton-tokyo/",
    "verifiedAt": "2025-02-26T00:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-tky-hil-hilton",
        "name": "Hilton King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Twin Beds",
        "roomSize": "30 sq.m",
        "description": "30 sq.m room equipped with modern Japanese shoji window screens, ergonomic workspace, and city view.",
        "pricePerNight": 28000,
        "price": 28000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-hil-exec",
        "name": "Executive King Room",
        "type": "EXECUTIVE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "35 sq.m",
        "description": "35 sq.m room on high floors with Executive Lounge breakfast, evening cocktails, and Mt. Fuji views.",
        "pricePerNight": 39000,
        "price": 39000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-hil-ste",
        "name": "Junior Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "description": "44 sq.m open-concept suite with separate living and sleeping zones, deep bath, and Executive benefits.",
        "pricePerNight": 52000,
        "price": 52000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      }
    ]
  },
  {
    "id": "hotel-tky-mandarin-oriental",
    "destinationId": "dest-tokyo",
    "name": "Mandarin Oriental, Tokyo",
    "city": "Tokyo",
    "state": "Kanto",
    "country": "Japan",
    "countryCode": "JP",
    "fullAddress": "2-1-1 Nihonbashi Muromachi, Chuo-ku, Tokyo 103-8328, Japan",
    "address": "2-1-1 Nihonbashi Muromachi, Chuo-ku, Tokyo",
    "latitude": 35.6869,
    "longitude": 139.7731,
    "description": "Soaring above historic Nihonbashi atop the 38-floor Nihonbashi Mitsui Tower, Mandarin Oriental Tokyo features Michelin-starred restaurants, The Spa on 37, and dramatic panoramic vistas of Tokyo Skytree.",
    "shortDescription": "Forbes 5-Star luxury hotel in historic Nihonbashi with award-winning dining & sky spa.",
    "category": "LUXURY",
    "rating": 4.8,
    "officialWebsite": "https://www.mandarinoriental.com/en/tokyo/nihonbashi",
    "phone": "+81 3 3270 8800",
    "email": "motky-reservations@mohg.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 179,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 74000,
    "amenities": [
      "Panoramic Sky Spa with Vitality Pools on 37th Floor",
      "Michelin-Starred Dining Options (Signature, Sense, Tapas Molecular)",
      "Oriental Lounge & Mandarin Bar",
      "Fitness Center with Floor-to-Ceiling Windows",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Direct Subway Passage (Mitsukoshimae Station)"
    ],
    "roomTypes": [
      {
        "id": "room-tky-mo-deluxe",
        "name": "Deluxe Premier Room",
        "type": "DELUXE",
        "description": "50 sq.m room showcasing contemporary Japanese craftsmanship, bamboo flooring, and Skytree skyline view.",
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Twin Beds",
        "roomSize": "50 sq.m",
        "price": 74000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-mo-grand",
        "name": "Grand King Room",
        "type": "PREMIUM",
        "description": "60 sq.m room with oversized walk-in wardrobe, spa bathroom with freestanding soaking tub, and bay views.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "60 sq.m",
        "price": 92000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-mo-ste",
        "name": "Mandarin Suite",
        "type": "SUITE",
        "description": "100 sq.m corner suite with separate living salon, dining room, guest powder room, and Imperial Palace vistas.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "100 sq.m",
        "price": 155000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      }
    ],
    "images": [
      {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Nihonbashi_Mitsui_Tower_from_east.JPG/1280px-Nihonbashi_Mitsui_Tower_from_east.JPG",
        "type": "exterior",
        "alt": "Nihonbashi Mitsui Tower housing Mandarin Oriental Tokyo",
        "source": "Wikimedia Commons (CC BY-SA 3.0)"
      }
    ],
    "imageUrls": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Nihonbashi_Mitsui_Tower_from_east.JPG/1280px-Nihonbashi_Mitsui_Tower_from_east.JPG"
    ],
    "sourceUrl": "https://www.mandarinoriental.com/en/tokyo/nihonbashi",
    "verifiedAt": "2025-02-26T00:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-tky-mo-deluxe",
        "name": "Deluxe Premier Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed or 2 Twin Beds",
        "roomSize": "50 sq.m",
        "description": "50 sq.m room showcasing contemporary Japanese craftsmanship, bamboo flooring, and Skytree skyline view.",
        "pricePerNight": 74000,
        "price": 74000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-mo-grand",
        "name": "Grand King Room",
        "type": "PREMIUM",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "60 sq.m",
        "description": "60 sq.m room with oversized walk-in wardrobe, spa bathroom with freestanding soaking tub, and bay views.",
        "pricePerNight": 92000,
        "price": 92000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-mo-ste",
        "name": "Mandarin Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "100 sq.m",
        "description": "100 sq.m corner suite with separate living salon, dining room, guest powder room, and Imperial Palace vistas.",
        "pricePerNight": 155000,
        "price": 155000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      }
    ]
  },
  {
    "id": "hotel-tky-four-seasons-marunouchi",
    "destinationId": "dest-tokyo",
    "name": "Four Seasons Hotel Tokyo at Marunouchi",
    "city": "Tokyo",
    "state": "Kanto",
    "country": "Japan",
    "countryCode": "JP",
    "fullAddress": "Pacific Century Place, 1-11-1 Marunouchi, Chiyoda-ku, Tokyo 100-6277, Japan",
    "address": "1-11-1 Marunouchi, Chiyoda-ku, Tokyo",
    "latitude": 35.6789,
    "longitude": 139.7678,
    "description": "An intimate boutique sanctuary with just 57 rooms in the Pacific Century Place tower, Four Seasons Marunouchi features direct platform escort from Tokyo Station, Michelin-starred MAISON MARUNOUCHI, and Sézanne.",
    "shortDescription": "Intimate 57-room luxury boutique haven adjacent to Tokyo Station with Michelin dining.",
    "category": "BOUTIQUE",
    "rating": 4.8,
    "officialWebsite": "https://www.fourseasons.com/tokyo/",
    "phone": "+81 3 5222 7222",
    "email": "contactus.marunouchi@fourseasons.com",
    "checkInTime": "15:00",
    "checkOutTime": "12:00",
    "totalRooms": 57,
    "availableRooms": null,
    "pricingMode": "DEVELOPMENT_TEST",
    "liveAvailability": false,
    "availabilityStatus": "REQUIRES_LIVE_CHECK",
    "priceNotice": "Development price — final price and availability will be verified before booking.",
    "roomAvailability": {
      "verified": false,
      "availableRooms": null,
      "lastChecked": null,
      "message": "Live availability requires verification"
    },
    "pricePerNight": 80000,
    "amenities": [
      "Complimentary Shinkansen Platform Meet & Greet Service",
      "Traditional Onsen-style Hot Spring Baths & Steam Room",
      "Michelin-Starred Dining (Sézanne)",
      "24-Hour Fitness Center",
      "Free High-Speed Wi-Fi",
      "Boutique Concierge Services",
      "Direct Underground Concourse to Tokyo Station"
    ],
    "roomTypes": [
      {
        "id": "room-tky-fs-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "description": "44 sq.m soundproofed room with floor-to-ceiling windows overlooking bullet trains gliding into Tokyo Station.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "price": 80000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-fs-premier",
        "name": "Premier Tokyo Station View Room",
        "type": "PREMIUM",
        "description": "52 sq.m corner room with dual aspect city views, limestone soaking tub, and customized minibar.",
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "52 sq.m",
        "price": 98000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      },
      {
        "id": "room-tky-fs-ste",
        "name": "Chairman Suite",
        "type": "SUITE",
        "description": "160 sq.m sanctuary with dining salon, marble kitchen, fireplace, and private onsen bathing facilities.",
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "160 sq.m",
        "price": 240000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null
      }
    ],
    "images": [
      {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pacific_Century_Place_Marunouchi_2015.JPG/1280px-Pacific_Century_Place_Marunouchi_2015.JPG",
        "type": "exterior",
        "alt": "Pacific Century Place Marunouchi housing Four Seasons",
        "source": "Wikimedia Commons (CC BY-SA 4.0)"
      }
    ],
    "imageUrls": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pacific_Century_Place_Marunouchi_2015.JPG/1280px-Pacific_Century_Place_Marunouchi_2015.JPG"
    ],
    "sourceUrl": "https://www.fourseasons.com/tokyo/",
    "verifiedAt": "2025-02-26T00:00:00.000Z",
    "status": "ACTIVE",
    "cancellationPolicyId": "cp-standard-01",
    "rooms": [
      {
        "id": "room-tky-fs-deluxe",
        "name": "Deluxe King Room",
        "type": "DELUXE",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "44 sq.m",
        "description": "44 sq.m soundproofed room with floor-to-ceiling windows overlooking bullet trains gliding into Tokyo Station.",
        "pricePerNight": 80000,
        "price": 80000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-fs-premier",
        "name": "Premier Tokyo Station View Room",
        "type": "PREMIUM",
        "capacity": 2,
        "maxGuests": 2,
        "bedType": "1 King Bed",
        "roomSize": "52 sq.m",
        "description": "52 sq.m corner room with dual aspect city views, limestone soaking tub, and customized minibar.",
        "pricePerNight": 98000,
        "price": 98000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      },
      {
        "id": "room-tky-fs-ste",
        "name": "Chairman Suite",
        "type": "SUITE",
        "capacity": 3,
        "maxGuests": 3,
        "bedType": "1 King Bed",
        "roomSize": "160 sq.m",
        "description": "160 sq.m sanctuary with dining salon, marble kitchen, fireplace, and private onsen bathing facilities.",
        "pricePerNight": 240000,
        "price": 240000,
        "currency": "INR",
        "pricingMode": "DEVELOPMENT_TEST",
        "availableRooms": null,
        "amenities": []
      }
    ]
  }
];

export const transportationOptions = [
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

export const activities = [
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
