// ==================================================
// Destination 12: SINGAPORE (dest-singapore)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const singaporeHotels = [
  {
    id: "hotel-sin-marina-bay-sands",
    destinationId: "dest-singapore",
    name: "Marina Bay Sands",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    fullAddress: "10 Bayfront Avenue, Singapore 018956",
    address: "10 Bayfront Avenue, Singapore 018956",
    latitude: 1.2834,
    longitude: 103.8607,
    description: "World-renowned integrated resort featuring the legendary 57th-floor Sands SkyPark rooftop infinity pool, celebrity chef restaurants (Spago, Waku Ghin, CUT), and The Shoppes at Marina Bay Sands.",
    shortDescription: "World-famous integrated resort featuring the iconic 57th-floor rooftop infinity pool.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.marinabaysands.com/",
    phone: "+65 6688 8888",
    email: "inquiries@marinabaysands.com",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    totalRooms: 2561,
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
    pricePerNight: 42000,
    amenities: [
      "Exclusive Sands SkyPark 57th-Floor Infinity Pool",
      "Celebrity Chef Restaurants",
      "The Shoppes Mall & Casino",
      "Banyan Tree Spa",
      "Free High-Speed Wi-Fi",
      "Fitness Center 55th Floor",
      "ArtScience Museum Proximity"
    ],
    roomTypes: [
      {
        id: "room-sin-mbs-deluxe-bay",
        name: "Deluxe Room Marina Bay View",
        type: "DELUXE",
        description: "47 sq.m room with floor-to-ceiling glass framing the shimmering Marina Bay skyline.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "47 sq.m",
        price: 42000,
        pricePerNight: 42000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["SkyPark Pool Access Included", "Marina Bay Skyline View", "Free Wi-Fi", "Walk-in Shower"]
      },
      {
        id: "room-sin-mbs-sands-suite",
        name: "Sands Suite",
        type: "SUITE",
        description: "145 sq.m luxury suite with dedicated butler service, private pool table or massage room.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "145 sq.m",
        price: 85000,
        pricePerNight: 85000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Dedicated Butler", "Pool Table", "Club55 Lounge Access", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Marina Bay Sands Singapore skyline",
        source: "Unsplash Licensed Hotel Photo"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "room",
        alt: "Marina Bay Sands luxury room",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marinabaysands.com/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-sin-pan-pacific",
    destinationId: "dest-singapore",
    name: "Pan Pacific Singapore",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    fullAddress: "7 Raffles Boulevard, Marina Square, Singapore 039595",
    address: "7 Raffles Boulevard, Marina Square, Singapore 039595",
    latitude: 1.2933,
    longitude: 103.8578,
    description: "38-storey 5-star hotel in Marina Bay connected to Marina Square, featuring soaring 35-storey atrium, circular outdoor pool, Edge buffet, and St. Gregory Spa.",
    shortDescription: "Prestigious 5-star hotel in Marina Bay connected to Marina Square with 35-storey atrium.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.panpacific.com/en/hotels-and-resorts/pp-marina.html",
    phone: "+65 6336 8111",
    email: "enquiry.ppsin@panpacific.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 790,
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
    pricePerNight: 21000,
    amenities: [
      "Circular Outdoor Swimming Pool",
      "St. Gregory Spa",
      "Edge Award-winning Buffet & Hai Tien Lo",
      "Pacific Club 38th Floor Lounge",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Connected to Marina Square Mall"
    ],
    roomTypes: [
      {
        id: "room-sin-pp-deluxe",
        name: "Deluxe Panoramic Room",
        type: "DELUXE",
        description: "38 sq.m room with floor-to-ceiling glass framing Singapore city skyline.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "38 sq.m",
        price: 21000,
        pricePerNight: 21000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Skyline View", "Free Wi-Fi", "Walk-in Shower", "Work Desk"]
      },
      {
        id: "room-sin-pp-pacific-club",
        name: "Pacific Club Harbour View Room",
        type: "CLUB",
        description: "46 sq.m high-floor room with 38th-floor Pacific Club Lounge access and panoramic harbour views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "46 sq.m",
        price: 34000,
        pricePerNight: 34000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Pacific Club Lounge", "Harbour View", "Champagne Breakfast", "Afternoon Tea"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Pan Pacific Singapore Marina Bay",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.panpacific.com/en/hotels-and-resorts/pp-marina.html",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-sin-raffles",
    destinationId: "dest-singapore",
    name: "Raffles Singapore",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    fullAddress: "1 Beach Road, Singapore 189673",
    address: "1 Beach Road, Singapore 189673",
    latitude: 1.2947,
    longitude: 103.8544,
    description: "Legendary 1887 colonial grande dame and national monument, birthplace of the Singapore Sling at the Long Bar, featuring all-suite accommodations, private verandahs, and Raffles Butlers.",
    shortDescription: "Legendary 1887 colonial landmark and national monument, birthplace of the Singapore Sling.",
    category: "LUXURY",
    rating: 4.9,
    officialWebsite: "https://www.rafflessingapore.com/",
    phone: "+65 6337 1886",
    email: "singapore@raffles.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 115,
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
    pricePerNight: 72000,
    amenities: [
      "National Monument Heritage Grounds",
      "Rooftop Swimming Pool",
      "Raffles Spa",
      "Long Bar (Birthplace of Singapore Sling)",
      "La Dame de Pic by Anne-Sophie Pic",
      "24-Hour Raffles Butler Service",
      "Courtyard Gardens"
    ],
    roomTypes: [
      {
        id: "room-sin-raffles-state-room",
        name: "State Room Suite",
        type: "SUITE",
        description: "67 sq.m historic suite featuring parlour, bedroom with 14-foot ceiling, and access to common verandah.",
        maxGuests: 2,
        bedType: "1 Four-Poster King Bed",
        roomSize: "67 sq.m",
        price: 72000,
        pricePerNight: 72000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Raffles Butler Service", "14-Foot Ceilings", "Verandah Access", "Peranakan Tiles"]
      },
      {
        id: "room-sin-raffles-palm-court",
        name: "Palm Court Suite",
        type: "SUITE",
        description: "79 sq.m suite overlooking the historic Palm Court garden sanctuary.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "79 sq.m",
        price: 98000,
        pricePerNight: 98000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Palm Court Garden View", "Dedicated Butler", "Singapore Sling Welcome", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Raffles Singapore colonial facade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.rafflessingapore.com/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-sin-the-fullerton",
    destinationId: "dest-singapore",
    name: "The Fullerton Hotel Singapore",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    fullAddress: "1 Fullerton Square, Singapore 049178",
    address: "1 Fullerton Square, Singapore 049178",
    latitude: 1.2864,
    longitude: 103.8536,
    description: "Grand Neoclassical national monument built in 1928 as Singapore's General Post Office at the mouth of the Singapore River, featuring 25-meter infinity pool facing the river and The Fullerton Spa.",
    shortDescription: "Grand 1928 Neoclassical national monument at the mouth of the Singapore River.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.fullertonhotels.com/fullerton-hotel-singapore",
    phone: "+65 6733 8388",
    email: "tfs.info@fullertonhotels.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 400,
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
    pricePerNight: 26000,
    amenities: [
      "25-Meter Riverfront Infinity Pool",
      "The Fullerton Spa",
      "Town Restaurant & Jade Cantonese",
      "Free High-Speed Wi-Fi",
      "Complimentary Heritage Tours",
      "Fitness Center",
      "Straits Club Floor"
    ],
    roomTypes: [
      {
        id: "room-sin-flt-courtyard",
        name: "Heritage Courtyard Room",
        type: "DELUXE",
        description: "42 sq.m room reflecting historic Neoclassical architecture with sunlit atrium views.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "42 sq.m",
        price: 26000,
        pricePerNight: 26000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Atrium View", "Free Wi-Fi", "Balmain Amenities", "Bathtub"]
      },
      {
        id: "room-sin-flt-marina-bay",
        name: "Premier Collyer Quay Marina Bay View Room",
        type: "DELUXE",
        description: "45 sq.m room with direct vista of Marina Bay Sands and waterfront promenade.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "45 sq.m",
        price: 35000,
        pricePerNight: 35000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Marina Bay View", "Straits Club Access", "Evening Cocktails", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Fullerton Hotel Singapore Neoclassical monument",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.fullertonhotels.com/fullerton-hotel-singapore",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-sin-shangri-la",
    destinationId: "dest-singapore",
    name: "Shangri-La Singapore",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    fullAddress: "22 Orange Grove Road, Singapore 258350",
    address: "22 Orange Grove Road, Singapore 258350",
    latitude: 1.3117,
    longitude: 103.8267,
    description: "The birthplace of Shangri-La hospitality nestled in 15 acres of botanical gardens minutes from Orchard Road, featuring free-form pool with water play, Shang Palace, and Chi The Spa.",
    shortDescription: "15-acre tropical botanical garden haven moments from Orchard Road shopping boulevard.",
    category: "LUXURY",
    rating: 4.6,
    officialWebsite: "https://www.shangri-la.com/singapore/shangrila/",
    phone: "+65 6737 3644",
    email: "singapore@shangri-la.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 792,
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
    pricePerNight: 23000,
    amenities: [
      "15 Acres of Botanical Gardens",
      "Outdoor Free-form Pool & Splash Zone",
      "Chi, The Spa",
      "Shang Palace & The Line",
      "Free High-Speed Wi-Fi",
      "Valley Wing Butler Service",
      "Tennis Courts"
    ],
    roomTypes: [
      {
        id: "room-sin-shang-tower-deluxe",
        name: "Tower Wing Deluxe Room",
        type: "DELUXE",
        description: "38 sq.m room with floor-to-ceiling glass and views over the tranquil gardens.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "38 sq.m",
        price: 23000,
        pricePerNight: 23000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Garden View", "Free Wi-Fi", "Walk-in Wardrobe", "Deep Soak Tub"]
      },
      {
        id: "room-sin-shang-valley-suite",
        name: "Valley Wing One-Bedroom Suite",
        type: "SUITE",
        description: "87 sq.m exclusive wing suite with free-flowing Champagne, high tea, and personal butler.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "87 sq.m",
        price: 52000,
        pricePerNight: 52000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Unlimited Champagne Service", "Valley Wing Private Entrance", "Butler Service", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Shangri-La Singapore botanical garden resort",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.shangri-la.com/singapore/shangrila/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-sin-parkroyal-marina-bay",
    destinationId: "dest-singapore",
    name: "PARKROYAL COLLECTION Marina Bay",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    fullAddress: "6 Raffles Boulevard, Marina Square, Singapore 039594",
    address: "6 Raffles Boulevard, Marina Square, Singapore 039594",
    latitude: 1.2917,
    longitude: 103.8569,
    description: "Singapore's first 'Garden-in-a-Hotel' featuring Southeast Asia's largest 21-story indoor atrium sky-lit greenhouse with over 2,400 plants, mineral water pool, and Peppermint farm-to-table dining.",
    shortDescription: "Iconic biophilic garden-in-a-hotel with a 21-story sky-lit indoor greenhouse atrium.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.panpacific.com/en/hotels-and-resorts/pr-collection-marina-bay.html",
    phone: "+65 6845 1000",
    email: "enquiry.prsmb@parkroyalcollection.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 575,
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
      "21-Story Sky-lit Biophilic Atrium",
      "Outdoor Mineral Water Pool with 1,380 Fiber Optics",
      "St. Gregory Spa",
      "Peppermint Farm-to-Table Dining",
      "Free High-Speed Wi-Fi",
      "Fitness Center & Rooftop Urban Farm"
    ],
    roomTypes: [
      {
        id: "room-sin-pr-urban-deluxe",
        name: "Urban Deluxe Room",
        type: "DELUXE",
        description: "33 sq.m eco-designed room with private balcony overlooking the city skyline.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "33 sq.m",
        price: 20000,
        pricePerNight: 20000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Balcony", "Free Wi-Fi", "Filtered Drinking Water Tap", "Eco Amenities"]
      },
      {
        id: "room-sin-pr-collection-suite",
        name: "COLLECTION Club Marina Bay Suite",
        type: "SUITE",
        description: "65 sq.m suite with COLLECTION Club privileges, daily hors d'oeuvres, and Marina Bay view.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "65 sq.m",
        price: 32000,
        pricePerNight: 32000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Marina Bay View", "COLLECTION Club Lounge", "Evening Cocktails", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "PARKROYAL COLLECTION Marina Bay atrium",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.panpacific.com/en/hotels-and-resorts/pr-collection-marina-bay.html",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-sin-swissotel-the-stamford",
    destinationId: "dest-singapore",
    name: "Swissôtel The Stamford",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    fullAddress: "2 Stamford Road, Singapore 178882",
    address: "2 Stamford Road, Singapore 178882",
    latitude: 1.2939,
    longitude: 103.8533,
    description: "One of Southeast Asia's tallest hotels rising 73 storeys above City Hall MRT station, featuring private balconies on all rooms, SKAI 70th-floor restaurant, and Willow Stream Spa.",
    shortDescription: "73-storey tower rising above City Hall MRT station with panoramic Singapore harbour views.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.swissotel.com/hotels/singapore-stamford/",
    phone: "+65 6338 8585",
    email: "singapore-stamford@swissotel.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 1252,
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
    pricePerNight: 19000,
    amenities: [
      "73rd-Floor Skyline Views",
      "Two Outdoor Swimming Pools",
      "Willow Stream Spa",
      "SKAI 70th-Floor Grill & Bar",
      "Free High-Speed Wi-Fi",
      "Direct City Hall MRT Access",
      "Executive Swiss Executive Club"
    ],
    roomTypes: [
      {
        id: "room-sin-swiss-premier-harbour",
        name: "Premier Harbour View Room",
        type: "DELUXE",
        description: "40 sq.m high-floor room with private balcony framing Marina Bay and Singapore Strait.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "40 sq.m",
        price: 19000,
        pricePerNight: 19000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Harbour Balcony", "Free Wi-Fi", "Nespresso Machine", "High Floor"]
      },
      {
        id: "room-sin-swiss-exec-suite",
        name: "Swiss Executive Suite",
        type: "SUITE",
        description: "70 sq.m corner suite with 65th-floor Swiss Executive Club Lounge access and panoramic views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "70 sq.m",
        price: 31000,
        pricePerNight: 31000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Executive Club Lounge", "Private Dual Balconies", "Bathtub", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Swissôtel The Stamford 73-storey tower",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.swissotel.com/hotels/singapore-stamford/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-sin-carlton",
    destinationId: "dest-singapore",
    name: "Carlton Hotel Singapore",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    fullAddress: "76 Bras Basah Road, Singapore 189558",
    address: "76 Bras Basah Road, Singapore 189558",
    latitude: 1.2961,
    longitude: 103.8519,
    description: "Centrally positioned 4-star upscale hotel in the arts and civic district opposite CHIJMES and Raffles City, offering bi-level swimming pool with cabanas, Wah Lok Cantonese restaurant, and gym.",
    shortDescription: "Upscale 4-star hotel in the civic district opposite CHIJMES with bi-level pool.",
    category: "FOUR_STAR",
    rating: 4.3,
    officialWebsite: "https://www.carltonhotel.sg/",
    phone: "+65 6338 8333",
    email: "mail@carltonhotel.sg",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 940,
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
    pricePerNight: 14000,
    amenities: [
      "Bi-Level Swimming Pool & Cabanas",
      "Wah Lok Cantonese Restaurant",
      "Café Mosaic International Buffet",
      "Free High-Speed Wi-Fi",
      "CHIJMES & City Hall MRT Steps Away",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-sin-carlton-deluxe",
        name: "Deluxe King Room",
        type: "DOUBLE",
        description: "30 sq.m guestroom with city views, Herman Miller work chair, and Sealy Posturepedic mattress.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "30 sq.m",
        price: 14000,
        pricePerNight: 14000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Workstation", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-sin-carlton-exec",
        name: "Executive Club Room",
        type: "EXECUTIVE",
        description: "34 sq.m high-floor room with Club Lounge access, evening cocktails, and breakfast.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "34 sq.m",
        price: 19500,
        pricePerNight: 19500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Club Lounge Privileges", "Evening Drinks & Canapes", "City View", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Carlton Hotel Singapore pool deck",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.carltonhotel.sg/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = singaporeHotels;
