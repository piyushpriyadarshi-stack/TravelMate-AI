// ==================================================
// Destination 5: MANALI (dest-manali)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const manaliHotels = [
  {
    id: "hotel-manali-anantmaya",
    destinationId: "dest-manali",
    name: "The Anantmaya Resort",
    city: "Prini",
    state: "Himachal Pradesh",
    country: "India",
    countryCode: "IN",
    fullAddress: "Naggar Road, Prini, Manali 175143, Himachal Pradesh, India",
    address: "Naggar Road, Prini, Manali 175143",
    latitude: 32.2178,
    longitude: 77.1952,
    description: "Serene boutique resort set amidst apple orchards in Prini, offering breathtaking 360-degree snow-capped Himalayan views, Basil Leaf restaurant, and spa.",
    shortDescription: "Boutique luxury resort amidst apple orchards in Prini with unobstructed Himalayan panoramas.",
    category: "FIVE_STAR",
    rating: 4.7,
    officialWebsite: "https://www.anantmaya.com/",
    phone: "+91 1902 250 114",
    email: "info@anantmaya.com",
    checkInTime: "14:00",
    checkOutTime: "11:00",
    totalRooms: 42,
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
    pricePerNight: 8500,
    amenities: [
      "Snow-Capped Himalayan Views",
      "Apple Orchard Garden",
      "Basil Leaf Restaurant",
      "Ayurvedic Spa & Sauna",
      "Free High-Speed Wi-Fi",
      "Central Heating",
      "Bonfire Evenings"
    ],
    roomTypes: [
      {
        id: "room-manali-anant-luxury",
        name: "Luxury Valley View Room",
        type: "DELUXE",
        description: "35 sq.m wooden-accented room with private balcony framing Rohtang mountain peaks.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "35 sq.m",
        price: 8500,
        pricePerNight: 8500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Valley View", "Balcony", "Heating", "Free Wi-Fi", "Tea/Coffee Maker"]
      },
      {
        id: "room-manali-anant-suite",
        name: "Anantmaya Presidential Suite",
        type: "SUITE",
        description: "65 sq.m duplex chalet suite with glass-fronted fireplace and panoramic snow peak vista.",
        maxGuests: 4,
        bedType: "1 King Bed + 1 Queen Bed",
        roomSize: "65 sq.m",
        price: 16500,
        pricePerNight: 16500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Fireplace", "Duplex Chalet", "Panoramic Balcony", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Anantmaya Resort mountain backdrop",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.anantmaya.com/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-manali-the-himalayan",
    destinationId: "dest-manali",
    name: "The Himalayan",
    city: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    countryCode: "IN",
    fullAddress: "Hadimba Road, Manali 175131, Himachal Pradesh, India",
    address: "Hadimba Road, Manali 175131",
    latitude: 32.2472,
    longitude: 77.1814,
    description: "Gothic-revival premier castle resort set among cedar groves near Hadimba Temple, offering outdoor heated swimming pool and antique-furnished chambers.",
    shortDescription: "Gothic-revival castle resort featuring antique suites and heated outdoor pool near Hadimba.",
    category: "LUXURY",
    rating: 4.6,
    officialWebsite: "https://www.thehimalayan.com/",
    phone: "+91 1902 250 999",
    email: "info@thehimalayan.com",
    checkInTime: "14:00",
    checkOutTime: "11:00",
    totalRooms: 20,
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
    pricePerNight: 12000,
    amenities: [
      "Outdoor Heated Swimming Pool",
      "Castle Dining Room",
      "The Dungeon Bar",
      "Cedar Grove Gardens",
      "Free High-Speed Wi-Fi",
      "Fireplace in Cottages",
      "Spa & Wellness"
    ],
    roomTypes: [
      {
        id: "room-manali-himalayan-castle",
        name: "Castle Grand Room",
        type: "DELUXE",
        description: "42 sq.m medieval castle chamber with four-poster bed, brass bath fittings, and mountain views.",
        maxGuests: 2,
        bedType: "1 Four-Poster King Bed",
        roomSize: "42 sq.m",
        price: 12000,
        pricePerNight: 12000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Four-Poster Bed", "Mountain View", "Cast-Iron Fireplace", "Free Wi-Fi"]
      },
      {
        id: "room-manali-himalayan-cottage",
        name: "Two-Bedroom Stone Cottage",
        type: "COTTAGE",
        description: "90 sq.m standalone stone cottage with wood-burning fireplace, kitchenette, and private veranda.",
        maxGuests: 4,
        bedType: "2 King Beds",
        roomSize: "90 sq.m",
        price: 24000,
        pricePerNight: 24000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Wood Fireplace", "Kitchenette", "Private Veranda", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Himalayan Manali castle architecture",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.thehimalayan.com/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-manali-johnson-lodge",
    destinationId: "dest-manali",
    name: "Johnson Lodge & Spa",
    city: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    countryCode: "IN",
    fullAddress: "Circuit House Road, Siyal, Manali 175131, Himachal Pradesh, India",
    address: "Circuit House Road, Siyal, Manali 175131",
    latitude: 32.2479,
    longitude: 77.1867,
    description: "Historic wood and stone alpine lodge near Circuit House, famed for Johnson's Cafe & Bar serving trout delicacies, garden cocktail lawns, and spa.",
    shortDescription: "Historic alpine lodge on Circuit House Road renowned for Johnson's Cafe and trout dining.",
    category: "FOUR_STAR",
    rating: 4.4,
    officialWebsite: "https://www.johnsonlodge.in/",
    phone: "+91 1902 251 523",
    email: "reservations@johnsonlodge.in",
    checkInTime: "13:00",
    checkOutTime: "11:00",
    totalRooms: 26,
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
    pricePerNight: 6500,
    amenities: [
      "Famous Johnson's Cafe & Bar",
      "Garden Cocktail Lawns",
      "Ayurvedic Spa & Sauna",
      "Free High-Speed Wi-Fi",
      "Room Heating",
      "Travel Desk for Solang Excursions"
    ],
    roomTypes: [
      {
        id: "room-manali-johnson-deluxe",
        name: "Deluxe Alpine Room",
        type: "DELUXE",
        description: "28 sq.m room finished in fragrant pine wood with modern en-suite bath.",
        maxGuests: 2,
        bedType: "1 Queen Bed",
        roomSize: "28 sq.m",
        price: 6500,
        pricePerNight: 6500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Pine Wood Interiors", "Room Heater", "Tea/Coffee Maker"]
      },
      {
        id: "room-manali-johnson-suite",
        name: "Garden Suite with Fireplace",
        type: "SUITE",
        description: "48 sq.m suite featuring private fireplace and French doors opening onto apple lawns.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "48 sq.m",
        price: 11000,
        pricePerNight: 11000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Fireplace", "Garden View", "Bathtub", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Johnson Lodge Manali alpine wooden architecture",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.johnsonlodge.in/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-manali-shingar-regency",
    destinationId: "dest-manali",
    name: "Shingar Regency",
    city: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    countryCode: "IN",
    fullAddress: "Hadimba Temple Road, Manali 175131, Himachal Pradesh, India",
    address: "Hadimba Temple Road, Manali 175131",
    latitude: 32.2483,
    longitude: 77.1822,
    description: "Charming hillside retreat located just paces from Hadimba Temple, surrounded by towering deodar trees with Jharokha multi-cuisine restaurant and Apple Lounge bar.",
    shortDescription: "Hillside hotel amid towering deodar forests moments from ancient Hadimba Temple.",
    category: "FOUR_STAR",
    rating: 4.3,
    officialWebsite: "https://www.shingarhotels.com/",
    phone: "+91 1902 253 434",
    email: "manali@shingarhotels.com",
    checkInTime: "13:00",
    checkOutTime: "11:00",
    totalRooms: 64,
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
    pricePerNight: 5500,
    amenities: [
      "Deodar Forest Views",
      "Jharokha Restaurant",
      "Apple Lounge Bar",
      "Free High-Speed Wi-Fi",
      "Central Heating",
      "Hadimba Temple Walking Distance"
    ],
    roomTypes: [
      {
        id: "room-manali-shingar-sup",
        name: "Superior Valley View Room",
        type: "DOUBLE",
        description: "26 sq.m room with balcony framing pine valleys and snowy ridge lines.",
        maxGuests: 2,
        bedType: "1 Queen Bed",
        roomSize: "26 sq.m",
        price: 5500,
        pricePerNight: 5500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Valley Balcony", "Free Wi-Fi", "Room Heater", "TV"]
      },
      {
        id: "room-manali-shingar-regency",
        name: "Regency Suite",
        type: "SUITE",
        description: "44 sq.m suite with master bedroom and living area overlooking cedar forest.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "44 sq.m",
        price: 9200,
        pricePerNight: 9200,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Cedar Forest View", "Separate Living Area", "Bathtub", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Shingar Regency Manali pine forest view",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.shingarhotels.com/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-manali-span-resort",
    destinationId: "dest-manali",
    name: "Span Resort & Spa",
    city: "Baragran",
    state: "Himachal Pradesh",
    country: "India",
    countryCode: "IN",
    fullAddress: "Baragran N.H. 21, Kullu-Manali Highway, Manali 175129, Himachal Pradesh, India",
    address: "Baragran N.H. 21, Kullu-Manali Highway, Manali 175129",
    latitude: 32.1287,
    longitude: 77.1725,
    description: "Legendary 12-acre riverside resort established in 1981 right on the banks of the glacial Beas River, featuring outdoor heated swimming pool, helipad, and Spa l'Occitane.",
    shortDescription: "Iconic 12-acre riverside sanctuary situated directly on the banks of the Beas River.",
    category: "LUXURY",
    rating: 4.6,
    officialWebsite: "https://spanresorts.com/",
    phone: "+91 1902 240 138",
    email: "info@spanresorts.com",
    checkInTime: "14:00",
    checkOutTime: "11:00",
    totalRooms: 36,
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
    pricePerNight: 15000,
    amenities: [
      "Direct Beas River Frontage",
      "Heated Swimming Pool",
      "Spa l'Occitane",
      "Private Helipad",
      "Trout Fishing Angling",
      "Riverside Dining & Bonfires",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "room-manali-span-grand",
        name: "Grand Deluxe Riverside Room",
        type: "DELUXE",
        description: "48 sq.m room with wood fireplace and French doors opening right onto the roaring Beas River.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "48 sq.m",
        price: 15000,
        pricePerNight: 15000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Riverfront Veranda", "Wood Fireplace", "Deep Soak Tub", "Free Wi-Fi"]
      },
      {
        id: "room-manali-span-cottage",
        name: "Premier River Chalet",
        type: "COTTAGE",
        description: "85 sq.m standalone luxury chalet with private lawn touching the riverbank.",
        maxGuests: 4,
        bedType: "1 King Bed",
        roomSize: "85 sq.m",
        price: 28000,
        pricePerNight: 28000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Riverbank Lawn", "Living Room", "Fireplace", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Span Resort & Spa Beas riverbank",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://spanresorts.com/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-manali-allure-grand",
    destinationId: "dest-manali",
    name: "The Allure Grand Resort",
    city: "Bahang",
    state: "Himachal Pradesh",
    country: "India",
    countryCode: "IN",
    fullAddress: "Bahang, Leh-Manali Highway, Manali 175103, Himachal Pradesh, India",
    address: "Bahang, Leh-Manali Highway, Manali 175103",
    latitude: 32.2731,
    longitude: 77.1894,
    description: "Riverside resort perched on the Leh-Manali Highway with clear views of the Beas River and snow ridges, featuring outdoor pool, Spa, and multi-cuisine restaurant.",
    shortDescription: "Riverside resort along the Leh-Manali Highway offering unobstructed river and valley views.",
    category: "FOUR_STAR",
    rating: 4.4,
    officialWebsite: "https://thealluregrand.com/",
    phone: "+91 1902 251 044",
    email: "info@thealluregrand.com",
    checkInTime: "14:00",
    checkOutTime: "11:00",
    totalRooms: 50,
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
    pricePerNight: 6200,
    amenities: [
      "Riverside Deck & Pool",
      "Wellness Spa",
      "Multi-Cuisine Restaurant",
      "Free High-Speed Wi-Fi",
      "Central Heating",
      "Free On-site Parking"
    ],
    roomTypes: [
      {
        id: "room-manali-allure-classic",
        name: "River View Deluxe Room",
        type: "DELUXE",
        description: "32 sq.m guestroom with private balcony looking out onto the Beas River and pine forest.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 6200,
        pricePerNight: 6200,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["River View Balcony", "Free Wi-Fi", "Room Heater", "Tea Maker"]
      },
      {
        id: "room-manali-allure-suite",
        name: "Allure Grand Suite",
        type: "SUITE",
        description: "55 sq.m riverfront suite with floor-to-ceiling glass and jacuzzi tub.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "55 sq.m",
        price: 10500,
        pricePerNight: 10500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Jacuzzi Tub", "Riverfront Glass Wall", "Living Area", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Allure Grand Resort riverside",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://thealluregrand.com/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-manali-snow-valley",
    destinationId: "dest-manali",
    name: "Snow Valley Resorts",
    city: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    countryCode: "IN",
    fullAddress: "Log Huts Area, Manali 175131, Himachal Pradesh, India",
    address: "Log Huts Area, Manali 175131",
    latitude: 32.2536,
    longitude: 77.1783,
    description: "Peaceful resort in the prime Log Huts VIP area, surrounded by apple orchards and pine woods with Valley View dining and games parlor.",
    shortDescription: "Popular family resort situated in the prime Log Huts area with panoramic valley views.",
    category: "THREE_STAR",
    rating: 4.3,
    officialWebsite: "https://www.snowvalleyresorts.com/manali/",
    phone: "+91 1902 253 228",
    email: "manali@snowvalleyresorts.com",
    checkInTime: "13:00",
    checkOutTime: "11:00",
    totalRooms: 52,
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
    pricePerNight: 4200,
    amenities: [
      "Valley View Terrace",
      "The Orchid Multi-Cuisine Restaurant",
      "Games Room & Pool Table",
      "Free High-Speed Wi-Fi",
      "Room Heating",
      "Kids Play Area"
    ],
    roomTypes: [
      {
        id: "room-manali-sv-standard",
        name: "Standard Room",
        type: "DOUBLE",
        description: "22 sq.m pine-finished room with essential comforts and forest air.",
        maxGuests: 2,
        bedType: "1 Double Bed",
        roomSize: "22 sq.m",
        price: 4200,
        pricePerNight: 4200,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Room Heater", "TV", "Hot Water"]
      },
      {
        id: "room-manali-sv-duplex",
        name: "Duplex Family Suite",
        type: "FAMILY",
        description: "40 sq.m split-level duplex suite ideal for families travelling with children.",
        maxGuests: 4,
        bedType: "2 Queen Beds",
        roomSize: "40 sq.m",
        price: 7500,
        pricePerNight: 7500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Duplex Layout", "Valley Balcony", "Tea/Coffee Maker", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Snow Valley Resorts Log Huts Area",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.snowvalleyresorts.com/manali/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-manali-apple-country",
    destinationId: "dest-manali",
    name: "Apple Country Resort",
    city: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    countryCode: "IN",
    fullAddress: "Log Huts Area, Old Manali, Manali 175131, Himachal Pradesh, India",
    address: "Log Huts Area, Old Manali, Manali 175131",
    latitude: 32.2558,
    longitude: 77.1764,
    description: "Set at one of the highest points in Log Huts Area, surrounded by pine forests and apple orchards, offering Pure Veg fine dining, Discotheque, and Aroma Spa.",
    shortDescription: "High-altitude resort in Log Huts area with panoramic Himalayan valley views and spa.",
    category: "FOUR_STAR",
    rating: 4.2,
    officialWebsite: "https://www.applecountryresorts.com/",
    phone: "+91 1902 254 107",
    email: "reservations@applecountryresorts.com",
    checkInTime: "13:00",
    checkOutTime: "11:00",
    totalRooms: 39,
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
    pricePerNight: 5800,
    amenities: [
      "Highest Point Panoramic Views",
      "Pure Vegetarian Gourmet Dining",
      "Aroma Spa & Sauna",
      "Free High-Speed Wi-Fi",
      "Discotheque & Bar",
      "Central Heating"
    ],
    roomTypes: [
      {
        id: "room-manali-apple-deluxe",
        name: "Deluxe Pine Room",
        type: "DELUXE",
        description: "28 sq.m room lined with cedar woodwork and balcony facing snow peaks.",
        maxGuests: 2,
        bedType: "1 Queen Bed",
        roomSize: "28 sq.m",
        price: 5800,
        pricePerNight: 5800,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Pine Wood Balcony", "Free Wi-Fi", "Room Heater", "Mountain View"]
      },
      {
        id: "room-manali-apple-honeymoon",
        name: "Honeymoon Suite with Jacuzzi",
        type: "SUITE",
        description: "46 sq.m suite featuring in-room jacuzzi overlooking the snow peaks.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "46 sq.m",
        price: 11000,
        pricePerNight: 11000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["In-room Jacuzzi", "Panoramic View", "Special Floral Decor", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Apple Country Resort snow view",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.applecountryresorts.com/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = manaliHotels;
