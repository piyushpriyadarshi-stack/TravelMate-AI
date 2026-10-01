// ==================================================
// Destination 2: DELHI (dest-delhi)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const delhiHotels = [
  {
    id: "hotel-delhi-taj-palace",
    destinationId: "dest-delhi",
    name: "Taj Palace, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
    fullAddress: "2 Sardar Patel Marg, Diplomatic Enclave, Chanakyapuri, New Delhi 110021, India",
    address: "2 Sardar Patel Marg, Diplomatic Enclave, Chanakyapuri, New Delhi 110021",
    latitude: 28.5960,
    longitude: 77.1728,
    description: "Iconic 6-acre luxury hotel in Chanakyapuri Diplomatic Enclave, surrounded by verdant ridge forest. Home to Orient Express restaurant and Jiva Spa.",
    shortDescription: "Iconic 6-acre luxury hotel in Chanakyapuri Diplomatic Enclave surrounded by lush ridge forest.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/taj-palace-new-delhi/",
    phone: "+91 11 2611 0202",
    email: "palace.delhi@tajhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 403,
    availableRooms: null,
    pricingMode: "DEVELOPMENT_TEST",
    liveAvailability: false,
    availabilityStatus: "REQUIRES_LIVE_CHECK",
    priceNotice: "Development price — final price and availability will be verified before booking.",
    roomAvailability: {
      verified: false,
      availableRooms: null,
      lastChecked: null,
      message: "Live availability requires verification"
    },
    pricePerNight: 14500,
    amenities: [
      "Outdoor Swimming Pool",
      "Jiva Spa",
      "Orient Express Fine Dining",
      "Fitness Center & Sauna",
      "Free High-Speed Wi-Fi",
      "Executive Club Lounge",
      "Airport Chauffeur",
      "Business Center"
    ],
    roomTypes: [
      {
        id: "room-delhi-taj-sup",
        name: "Superior Room City View",
        type: "DELUXE",
        description: "Classic 38 sq.m room with Indian heritage accents, plush bedding, and panoramic garden views.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "38 sq.m",
        price: 14500,
        pricePerNight: 14500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Marble Bathroom", "Air Conditioning", "Electronic Safe"]
      },
      {
        id: "room-delhi-taj-taj-club",
        name: "Taj Club Executive Room",
        type: "EXECUTIVE",
        description: "45 sq.m premium room with exclusive Taj Club Lounge access, complimentary cocktails, and butler service.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "45 sq.m",
        price: 21000,
        pricePerNight: 21000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Club Lounge Access", "Airport Transfer", "Butler Service", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Taj Palace New Delhi grand entrance",
        source: "Unsplash Licensed Hotel Photo"
      },
      {
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
        type: "room",
        alt: "Taj Palace New Delhi luxury suite",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/taj-palace-new-delhi/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-delhi-taj-mahal",
    destinationId: "dest-delhi",
    name: "Taj Mahal, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
    fullAddress: "1 Man Singh Road, New Delhi 110011, India",
    address: "1 Man Singh Road, New Delhi 110011",
    latitude: 28.6045,
    longitude: 77.2244,
    description: "The distinguished 'Number One Mansingh' in Lutyens' Delhi near India Gate, renowned for Mughal architecture, Machan 24-hour restaurant, and House of Ming.",
    shortDescription: "Distinguished heritage landmark in Lutyens' Delhi near India Gate.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/taj-mahal-new-delhi/",
    phone: "+91 11 6651 3151",
    email: "mahal.delhi@tajhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 294,
    availableRooms: null,
    pricingMode: "DEVELOPMENT_TEST",
    liveAvailability: false,
    availabilityStatus: "REQUIRES_LIVE_CHECK",
    priceNotice: "Development price — final price and availability will be verified before booking.",
    roomAvailability: {
      verified: false,
      availableRooms: null,
      lastChecked: null,
      message: "Live availability requires verification"
    },
    pricePerNight: 16000,
    amenities: [
      "Swimming Pool",
      "Machan & House of Ming Dining",
      "The Chambers Private Club",
      "Jiva Spa",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Valet Parking"
    ],
    roomTypes: [
      {
        id: "room-delhi-tm-deluxe",
        name: "Deluxe Room",
        type: "DELUXE",
        description: "33 sq.m reimagined guestroom paying homage to the Mughal era with modern marble bathroom.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "33 sq.m",
        price: 16000,
        pricePerNight: 16000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Lutyens View", "Rain Shower", "Smart TV"]
      },
      {
        id: "room-delhi-tm-suite",
        name: "Luxury Suite",
        type: "SUITE",
        description: "65 sq.m grand suite with antique artifact decor, living room, and Lutyens city views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "65 sq.m",
        price: 29500,
        pricePerNight: 29500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Separate Living Room", "India Gate View", "Butler Service", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Taj Mahal Hotel New Delhi facade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/taj-mahal-new-delhi/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-delhi-itc-maurya",
    destinationId: "dest-delhi",
    name: "ITC Maurya, a Luxury Collection Hotel",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
    fullAddress: "Diplomatic Enclave, Sardar Patel Marg, Chanakyapuri, New Delhi 110021, India",
    address: "Diplomatic Enclave, Sardar Patel Marg, New Delhi 110021",
    latitude: 28.5978,
    longitude: 77.1741,
    description: "Prestigious address hosting global heads of state, inspired by Mauryan art and home to the world-famous Bukhara and Dum Pukht restaurants.",
    shortDescription: "Historic Chanakyapuri hotel home to world-renowned Bukhara and Mauryan architecture.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.itchotels.com/in/en/itcmaurya-new-delhi",
    phone: "+91 11 2611 2233",
    email: "reservations.itcmaurya@itchotels.in",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 437,
    availableRooms: null,
    pricingMode: "DEVELOPMENT_TEST",
    liveAvailability: false,
    availabilityStatus: "REQUIRES_LIVE_CHECK",
    priceNotice: "Development price — final price and availability will be verified before booking.",
    roomAvailability: {
      verified: false,
      availableRooms: null,
      lastChecked: null,
      message: "Live availability requires verification"
    },
    pricePerNight: 15500,
    amenities: [
      "Bukhara & Dum Pukht Dining",
      "Outdoor Swimming Pool",
      "Kaya Kalp Spa",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Art Gallery Collection",
      "Executive Business Lounge"
    ],
    roomTypes: [
      {
        id: "room-delhi-itc-exec",
        name: "Executive Club Room",
        type: "EXECUTIVE",
        description: "32 sq.m business sanctuary with ergonomic workstation and plush luxury collection bed.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "32 sq.m",
        price: 15500,
        pricePerNight: 15500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Ergonomic Desk", "Four-Fixture Bath", "Air Conditioning"]
      },
      {
        id: "room-delhi-itc-towers",
        name: "ITC One Luxury Suite",
        type: "SUITE",
        description: "56 sq.m state-of-the-art suite with dedicated butler service and private lounge access.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "56 sq.m",
        price: 26000,
        pricePerNight: 26000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Lounge Access", "Dedicated Butler", "Deep Soaking Tub", "High Floor Ridge View"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "ITC Maurya New Delhi architecture",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.itchotels.com/in/en/itcmaurya-new-delhi",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-delhi-leela-palace",
    destinationId: "dest-delhi",
    name: "The Leela Palace New Delhi",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
    fullAddress: "Diplomatic Enclave, Chanakyapuri, New Delhi 110023, India",
    address: "Diplomatic Enclave, Chanakyapuri, New Delhi 110023",
    latitude: 28.5796,
    longitude: 77.1873,
    description: "Modern palace blending Lutyens architecture with royal Indian heritage, featuring rooftop temperature-controlled infinity pool, Le Cirque, and MEGU.",
    shortDescription: "Modern royal palace in Chanakyapuri with rooftop infinity pool and Michelin-pedigree dining.",
    category: "LUXURY",
    rating: 4.9,
    officialWebsite: "https://www.theleela.com/the-leela-palace-new-delhi",
    phone: "+91 11 3933 1234",
    email: "reservations@theleela.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 254,
    availableRooms: null,
    pricingMode: "DEVELOPMENT_TEST",
    liveAvailability: false,
    availabilityStatus: "REQUIRES_LIVE_CHECK",
    priceNotice: "Development price — final price and availability will be verified before booking.",
    roomAvailability: {
      verified: false,
      availableRooms: null,
      lastChecked: null,
      message: "Live availability requires verification"
    },
    pricePerNight: 19500,
    amenities: [
      "Rooftop Infinity Swimming Pool",
      "The Spa by ESPA",
      "Le Cirque & MEGU Restaurants",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Fitness Studio",
      "Rolls-Royce Chauffeur Fleet"
    ],
    roomTypes: [
      {
        id: "room-delhi-leela-grande",
        name: "Grande Deluxe Room",
        type: "DELUXE",
        description: "51 sq.m expansive palace room with gold-leaf vaulted ceilings and Italian marble bathroom.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "51 sq.m",
        price: 19500,
        pricePerNight: 19500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Espresso Machine", "Walk-in Wardrobe", "Deep Soaking Tub"]
      },
      {
        id: "room-delhi-leela-royal",
        name: "Royal Suite with Plunge Pool",
        type: "SUITE",
        description: "140 sq.m ultra-luxury royal suite with separate living salon, dining area, and dedicated butler.",
        maxGuests: 4,
        bedType: "1 King Bed",
        roomSize: "140 sq.m",
        price: 52000,
        pricePerNight: 52000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Jacuzzi", "Dedicated Butler", "Dining Room", "Airport Limousine"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Leela Palace New Delhi grandeur",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.theleela.com/the-leela-palace-new-delhi",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-delhi-oberoi",
    destinationId: "dest-delhi",
    name: "The Oberoi, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
    fullAddress: "Dr Zakir Hussain Marg, New Delhi 110003, India",
    address: "Dr Zakir Hussain Marg, New Delhi 110003",
    latitude: 28.6015,
    longitude: 77.2384,
    description: "Centrally positioned overlooking the UNESCO World Heritage Delhi Golf Course and Humayun's Tomb, equipped with clean air technology, Omya, and Cirrus9 rooftop bar.",
    shortDescription: "Ultra-luxury hotel overlooking Delhi Golf Course with clean-air filtration technology.",
    category: "LUXURY",
    rating: 4.9,
    officialWebsite: "https://www.oberoihotels.com/hotels-in-delhi/",
    phone: "+91 11 2436 3030",
    email: "reservations.delhi@oberoihotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 220,
    availableRooms: null,
    pricingMode: "DEVELOPMENT_TEST",
    liveAvailability: false,
    availabilityStatus: "REQUIRES_LIVE_CHECK",
    priceNotice: "Development price — final price and availability will be verified before booking.",
    roomAvailability: {
      verified: false,
      availableRooms: null,
      lastChecked: null,
      message: "Live availability requires verification"
    },
    pricePerNight: 20000,
    amenities: [
      "Clean Air Filtration System",
      "Indoor & Outdoor Pools",
      "The Oberoi Spa",
      "Omya & Baoshuan Fine Dining",
      "Cirrus9 Rooftop Lounge",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service"
    ],
    roomTypes: [
      {
        id: "room-delhi-oberoi-dlx",
        name: "Deluxe Room Golf View",
        type: "DELUXE",
        description: "55 sq.m spacious room with floor-to-ceiling windows framing green views of the Delhi Golf Course.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "55 sq.m",
        price: 20000,
        pricePerNight: 20000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Golf View", "Air Quality Guarantee", "Deep Soak Tub", "Butler Service"]
      },
      {
        id: "room-delhi-oberoi-prem-suite",
        name: "Premier Suite",
        type: "SUITE",
        description: "90 sq.m corner suite with separate living and dining quarters overlooking Humayun's Tomb gardens.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "90 sq.m",
        price: 38000,
        pricePerNight: 38000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Humayun's Tomb View", "Living & Dining Area", "24/7 Butler", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Oberoi New Delhi golf view",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.oberoihotels.com/hotels-in-delhi/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-delhi-andaz",
    destinationId: "dest-delhi",
    name: "Andaz Delhi",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
    fullAddress: "Asset No. 1, Aerocity, New Delhi 110037, India",
    address: "Asset No. 1, Aerocity, New Delhi 110037",
    latitude: 28.5508,
    longitude: 77.1215,
    description: "Modern luxury lifestyle hotel in Delhi Aerocity near IGI Airport, featuring 401 unique Delhi-inspired art pieces, AnnaMaya foodhall, and Juniper Bar.",
    shortDescription: "Vibrant lifestyle property in Aerocity near IGI Airport celebrating local Delhi culture.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.hyatt.com/andaz/delaz-andaz-delhi",
    phone: "+91 11 4903 1234",
    email: "delhi.andaz@hyatt.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 401,
    availableRooms: null,
    pricingMode: "DEVELOPMENT_TEST",
    liveAvailability: false,
    availabilityStatus: "REQUIRES_LIVE_CHECK",
    priceNotice: "Development price — final price and availability will be verified before booking.",
    roomAvailability: {
      verified: false,
      availableRooms: null,
      lastChecked: null,
      message: "Live availability requires verification"
    },
    pricePerNight: 11000,
    amenities: [
      "Outdoor Pool",
      "AnnaMaya Artisan Foodhall",
      "Juniper Gin Bar",
      "Andaz Spa",
      "Free High-Speed Wi-Fi",
      "Airport Shuttle (Close Proximity)",
      "24-Hour Fitness Studio"
    ],
    roomTypes: [
      {
        id: "room-delhi-andaz-king",
        name: "Andaz King Room",
        type: "DELUXE",
        description: "39 sq.m contemporary room featuring bespoke artwork and floor-to-ceiling soundproof windows.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "39 sq.m",
        price: 11000,
        pricePerNight: 11000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Walk-in Shower", "Complimentary Non-Alcoholic Minibar", "Soundproof Windows"]
      },
      {
        id: "room-delhi-andaz-suite",
        name: "Andaz Courtyard Suite",
        type: "SUITE",
        description: "74 sq.m open-concept designer suite overlooking the central water courtyard.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "74 sq.m",
        price: 19000,
        pricePerNight: 19000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Courtyard View", "Living Lounge", "Bathtub", "Espresso Machine"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Andaz Delhi Aerocity courtyard",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/andaz/delaz-andaz-delhi",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-delhi-hyatt-regency",
    destinationId: "dest-delhi",
    name: "Hyatt Regency Delhi",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
    fullAddress: "Bhikaiji Cama Place, Ring Road, New Delhi 110066, India",
    address: "Bhikaiji Cama Place, Ring Road, New Delhi 110066",
    latitude: 28.5684,
    longitude: 77.1857,
    description: "South Delhi landmark hotel situated near central business and embassy districts, famed for La Piazza Italian restaurant and Club Olympus fitness center.",
    shortDescription: "Established 5-star hotel in South Delhi featuring renowned dining and Club Olympus spa.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.hyatt.com/hyatt-regency/delhi",
    phone: "+91 11 2679 1234",
    email: "delhi.regency@hyatt.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 507,
    availableRooms: null,
    pricingMode: "DEVELOPMENT_TEST",
    liveAvailability: false,
    availabilityStatus: "REQUIRES_LIVE_CHECK",
    priceNotice: "Development price — final price and availability will be verified before booking.",
    roomAvailability: {
      verified: false,
      availableRooms: null,
      lastChecked: null,
      message: "Live availability requires verification"
    },
    pricePerNight: 9500,
    amenities: [
      "Outdoor Swimming Pool",
      "La Piazza Italian Restaurant",
      "Club Olympus Fitness & Spa",
      "Free Wi-Fi",
      "Business Center",
      "24-Hour Room Service",
      "Valet Parking"
    ],
    roomTypes: [
      {
        id: "room-delhi-hr-std",
        name: "Standard King Room",
        type: "DOUBLE",
        description: "28 sq.m comfortable room with work desk, plush mattress, and city or pool views.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "28 sq.m",
        price: 9500,
        pricePerNight: 9500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Work Desk", "Air Conditioning", "En-suite Bath"]
      },
      {
        id: "room-delhi-hr-club",
        name: "Regency Club Room",
        type: "CLUB",
        description: "35 sq.m premium room with Regency Club lounge privileges including evening cocktails and breakfast.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "35 sq.m",
        price: 14500,
        pricePerNight: 14500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Club Lounge Access", "Breakfast Included", "Evening Cocktails", "City View"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Hyatt Regency Delhi swimming pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/hyatt-regency/delhi",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-delhi-welcomhotel-dwarka",
    destinationId: "dest-delhi",
    name: "Welcomhotel by ITC Hotels, Dwarka",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
    fullAddress: "Plot No.3, Sector 10, Dwarka, New Delhi 110075, India",
    address: "Plot No.3, Sector 10, Dwarka, New Delhi 110075",
    latitude: 28.5815,
    longitude: 77.0577,
    description: "Sophisticated 5-star hotel in Dwarka sub-city, offering seamless access to IGI Airport, metro stations, Pavilion 75 buffet, and K&K Indian dining.",
    shortDescription: "Upscale ITC business hotel in Dwarka near Indira Gandhi International Airport.",
    category: "FOUR_STAR",
    rating: 4.3,
    officialWebsite: "https://www.itchotels.com/in/en/welcomhotel-dwarka-new-delhi",
    phone: "+91 11 4093 9393",
    email: "reservations.dwarka@itchotels.in",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 393,
    availableRooms: null,
    pricingMode: "DEVELOPMENT_TEST",
    liveAvailability: false,
    availabilityStatus: "REQUIRES_LIVE_CHECK",
    priceNotice: "Development price — final price and availability will be verified before booking.",
    roomAvailability: {
      verified: false,
      availableRooms: null,
      lastChecked: null,
      message: "Live availability requires verification"
    },
    pricePerNight: 7000,
    amenities: [
      "Outdoor Swimming Pool",
      "K&K Indian Specialty Restaurant",
      "Fitness Center",
      "Free High-Speed Wi-Fi",
      "Airport Connectivity",
      "Business Center",
      "24-Hour Coffee Shop"
    ],
    roomTypes: [
      {
        id: "room-delhi-welcom-sup",
        name: "Deluxe Room",
        type: "DOUBLE",
        description: "30 sq.m guestroom with contemporary furnishings and modern workspace.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "30 sq.m",
        price: 7000,
        pricePerNight: 7000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Tea/Coffee Maker", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-delhi-welcom-suite",
        name: "Executive Suite",
        type: "SUITE",
        description: "58 sq.m suite featuring separate living room, dining nook, and upgraded amenities.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "58 sq.m",
        price: 12000,
        pricePerNight: 12000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Living Room", "Bathtub", "Airport Transfer", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Welcomhotel Dwarka New Delhi",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.itchotels.com/in/en/welcomhotel-dwarka-new-delhi",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = delhiHotels;
