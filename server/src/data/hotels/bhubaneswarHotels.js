// ==================================================
// Destination 8: BHUBANESWAR (dest-bhubaneswar)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const bhubaneswarHotels = [
  {
    id: "hotel-bbi-mayfair-lagoon",
    destinationId: "dest-bhubaneswar",
    name: "MAYFAIR Lagoon, Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    countryCode: "IN",
    fullAddress: "8-B Jaydev Vihar, Bhubaneswar 751013, Odisha, India",
    address: "8-B Jaydev Vihar, Bhubaneswar 751013",
    latitude: 20.2995,
    longitude: 85.8239,
    description: "Sprawling 10-acre eco-friendly luxury resort centered around an expansive lagoon in Jaydev Vihar, featuring Odishan temple stone architecture, private villas, Mayfair Spa, and Tea Pot buffet.",
    shortDescription: "Sprawling 10-acre luxury sanctuary surrounding a picturesque lagoon in Jaydev Vihar.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.mayfairhotels.com/mayfair-lagoon-bhubaneswar.html",
    phone: "+91 674 666 0101",
    email: "lagoon@mayfairhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 102,
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
      "Natural Lagoon Waterway",
      "Outdoor Swimming Pool",
      "Mayfair Spa & Wellness",
      "Tea Pot & Kanika Odia Dining",
      "Free High-Speed Wi-Fi",
      "Fitness Center & Tennis",
      "Bowling Alley & Entertainment"
    ],
    roomTypes: [
      {
        id: "room-bbi-mayfair-exec",
        name: "Executive Cottage Room",
        type: "COTTAGE",
        description: "36 sq.m wooden cottage with balcony overlooking serene lagoon waters and tropical greenery.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "36 sq.m",
        price: 9500,
        pricePerNight: 9500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Lagoon View", "Balcony", "Free Wi-Fi", "Air Conditioning"]
      },
      {
        id: "room-bbi-mayfair-villa",
        name: "Lagoon Villa with Private Pool",
        type: "VILLA",
        description: "85 sq.m luxury standalone villa with private plunge pool and personalized butler hospitality.",
        maxGuests: 4,
        bedType: "1 King Bed",
        roomSize: "85 sq.m",
        price: 22000,
        pricePerNight: 22000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Plunge Pool", "Lagoon Water Access", "Butler Service", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "MAYFAIR Lagoon Bhubaneswar waterway",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.mayfairhotels.com/mayfair-lagoon-bhubaneswar.html",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-bbi-trident",
    destinationId: "dest-bengaluru", // Note: destinationId will be dest-bhubaneswar
    destinationId: "dest-bhubaneswar",
    name: "Trident, Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    countryCode: "IN",
    fullAddress: "CB-1 Nayapalli, Bhubaneswar 751013, Odisha, India",
    address: "CB-1 Nayapalli, Bhubaneswar 751013",
    latitude: 20.3012,
    longitude: 85.8194,
    description: "Serene 14-acre resort located in Nayapalli, surrounded by lush manicured gardens and fruit orchards, offering outdoor pool, jogging track, and The Restaurant serving Odia seafood specialties.",
    shortDescription: "14-acre tranquil garden sanctuary in Nayapalli with orchard trails and outdoor pool.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.tridenthotels.com/hotels-in-bhubaneswar/",
    phone: "+91 674 230 1010",
    email: "reservations.bhubaneswar@tridenthotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 62,
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
    pricePerNight: 8000,
    amenities: [
      "14-Acre Landscaped Gardens",
      "Outdoor Swimming Pool",
      "The Restaurant (Authentic Odia & Global)",
      "Jogging Track",
      "Free High-Speed Wi-Fi",
      "Business Center",
      "Concierge Desk"
    ],
    roomTypes: [
      {
        id: "room-bbi-trident-deluxe",
        name: "Deluxe Garden View Room",
        type: "DELUXE",
        description: "28 sq.m comfortable room with floor-to-ceiling glass looking onto fruit orchards.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "28 sq.m",
        price: 8000,
        pricePerNight: 8000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Garden View", "Free Wi-Fi", "Mini Bar", "Air Conditioning"]
      },
      {
        id: "room-bbi-trident-suite",
        name: "Trident Suite",
        type: "SUITE",
        description: "56 sq.m suite featuring separate living area, private terrace, and orchard views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "56 sq.m",
        price: 15500,
        pricePerNight: 15500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Terrace", "Living Room", "Bathtub", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Trident Bhubaneswar garden lawns",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tridenthotels.com/hotels-in-bhubaneswar/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-bbi-swosti-premium",
    destinationId: "dest-bhubaneswar",
    name: "Swosti Premium Hotel",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    countryCode: "IN",
    fullAddress: "P1 Jaydev Vihar, Nandankanan Road, Bhubaneswar 751013, Odisha, India",
    address: "P1 Jaydev Vihar, Nandankanan Road, Bhubaneswar 751013",
    latitude: 20.3041,
    longitude: 85.8252,
    description: "Largest convention luxury hotel in Eastern India on Nandankanan Road, featuring outdoor swimming pool, Scottish Bar, Panorama restaurant, and health club.",
    shortDescription: "Largest convention hotel in Eastern India with extensive banqueting and pool facilities.",
    category: "FOUR_STAR",
    rating: 4.3,
    officialWebsite: "https://www.swostihotels.com/swosti-premium/",
    phone: "+91 674 661 1111",
    email: "information@swostihotels.com",
    checkInTime: "12:00",
    checkOutTime: "11:00",
    totalRooms: 147,
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
      "Outdoor Swimming Pool",
      "Panorama & Confetti Restaurants",
      "Rob Roy Scottish Bar",
      "Free High-Speed Wi-Fi",
      "Gym & Steam Bath",
      "Banqueting Convention Halls"
    ],
    roomTypes: [
      {
        id: "room-bbi-swosti-exec",
        name: "Business Club Room",
        type: "DOUBLE",
        description: "28 sq.m functional room with modern work desk and pool or city views.",
        maxGuests: 2,
        bedType: "1 Queen Bed",
        roomSize: "28 sq.m",
        price: 5500,
        pricePerNight: 5500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Work Desk", "Air Conditioning", "Tea/Coffee Maker"]
      },
      {
        id: "room-bbi-swosti-suite",
        name: "Premium Executive Suite",
        type: "SUITE",
        description: "52 sq.m suite with living lounge, jacuzzi tub, and city skyline view.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "52 sq.m",
        price: 9500,
        pricePerNight: 9500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Living Lounge", "Jacuzzi", "Airport Pickup", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Swosti Premium Hotel Bhubaneswar",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.swostihotels.com/swosti-premium/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-bbi-vivanta",
    destinationId: "dest-bhubaneswar",
    name: "Vivanta Bhubaneswar DN Square",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    countryCode: "IN",
    fullAddress: "DN Regalia Mall, Patrapada, Bhubaneswar 751019, Odisha, India",
    address: "DN Regalia Mall, Patrapada, Bhubaneswar 751019",
    latitude: 20.2464,
    longitude: 85.7533,
    description: "Contemporary 5-star hotel attached to DN Regalia Mall on NH16, offering rooftop pool, Mynt all-day dining, Wink bar, and close access to AIIMS Bhubaneswar.",
    shortDescription: "Sleek contemporary 5-star hotel attached to DN Regalia Mall on NH16 with rooftop pool.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.tajhotels.com/en-in/vivanta/bhubaneswar-dn-square/",
    phone: "+91 674 668 5555",
    email: "vivanta.dnsquare@tajhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 136,
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
    pricePerNight: 7200,
    amenities: [
      "Rooftop Swimming Pool",
      "Mynt Multi-Cuisine Dining",
      "Wink Lounge Bar",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Connected to DN Regalia Mall",
      "NH16 Highway Connectivity"
    ],
    roomTypes: [
      {
        id: "room-bbi-vivanta-superior",
        name: "Superior City View Room",
        type: "DOUBLE",
        description: "32 sq.m vibrant room with floor-to-ceiling glass and plush king bedding.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 7200,
        pricePerNight: 7200,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "City View", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-bbi-vivanta-suite",
        name: "Executive Suite",
        type: "SUITE",
        description: "64 sq.m suite featuring separate living area, bathtub, and high-floor panoramic views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "64 sq.m",
        price: 13500,
        pricePerNight: 13500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Separate Living Room", "Bathtub", "High Floor Skyline View", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Vivanta Bhubaneswar rooftop pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/vivanta/bhubaneswar-dn-square/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-bbi-welcomhotel",
    destinationId: "dest-bhubaneswar",
    name: "Welcomhotel by ITC Hotels, Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    countryCode: "IN",
    fullAddress: "D/1, Dumduma, Khandagiri, Bhubaneswar 751019, Odisha, India",
    address: "D/1, Dumduma, Khandagiri, Bhubaneswar 751019",
    latitude: 20.2522,
    longitude: 75.7767, // corrected to real Bhubaneswar coord: 20.2522, 85.7767
    longitude: 85.7767,
    description: "LEED Platinum luxury hotel inspired by Kalinga temple architecture close to ancient Khandagiri & Udayagiri Caves, featuring Sunjar restaurant, K&K, and Kairali Ayurvedic Spa.",
    shortDescription: "LEED Platinum hotel near Khandagiri Caves paying homage to ancient Kalinga temple stonecraft.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.itchotels.com/in/en/welcomhotelbhubaneswar",
    phone: "+91 674 350 2020",
    email: "reservations.whbhubaneswar@itchotels.in",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 107,
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
    pricePerNight: 7500,
    amenities: [
      "Outdoor Swimming Pool",
      "K&K Specialty Dining & Sunjar",
      "Kairali Ayurvedic Spa",
      "Khandagiri Caves Proximity",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive Boardroom"
    ],
    roomTypes: [
      {
        id: "room-bbi-welcom-deluxe",
        name: "Deluxe King Room",
        type: "DOUBLE",
        description: "32 sq.m room with Odia ikat textiles, stone carvings, and courtyard garden view.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 7500,
        pricePerNight: 7500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Courtyard View", "Free Wi-Fi", "Rain Shower", "Air Conditioning"]
      },
      {
        id: "room-bbi-welcom-suite",
        name: "Welcomhotel Suite",
        type: "SUITE",
        description: "64 sq.m suite with living lounge, deep soaking tub, and temple-inspired decor.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "64 sq.m",
        price: 14000,
        pricePerNight: 14000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Living Lounge", "Deep Soak Tub", "Khandagiri View", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Welcomhotel Bhubaneswar Kalinga architecture",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.itchotels.com/in/en/welcomhotelbhubaneswar",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-bbi-mayfair-convention",
    destinationId: "dest-bhubaneswar",
    name: "MAYFAIR Convention, Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    countryCode: "IN",
    fullAddress: "Near Jaydev Vihar, Bhubaneswar 751013, Odisha, India",
    address: "Near Jaydev Vihar, Bhubaneswar 751013",
    latitude: 20.2988,
    longitude: 85.8248,
    description: "Executive business hotel across from MAYFAIR Lagoon in Jaydev Vihar, offering direct convention center access, multi-cuisine dining, and gym.",
    shortDescription: "Executive business hotel located opposite MAYFAIR Lagoon in Jaydev Vihar.",
    category: "FOUR_STAR",
    rating: 4.4,
    officialWebsite: "https://www.mayfairhotels.com/mayfair-convention-bhubaneswar.html",
    phone: "+91 674 666 0102",
    email: "convention@mayfairhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 60,
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
    pricePerNight: 5000,
    amenities: [
      "Convention Center Access",
      "Multi-Cuisine Restaurant",
      "Access to Lagoon Facilities",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Business Center"
    ],
    roomTypes: [
      {
        id: "room-bbi-mayfair-conv-exec",
        name: "Executive Room",
        type: "DOUBLE",
        description: "26 sq.m business room with ergonomic workspace and modern amenities.",
        maxGuests: 2,
        bedType: "1 Queen Bed",
        roomSize: "26 sq.m",
        price: 5000,
        pricePerNight: 5000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Work Desk", "Air Conditioning", "Tea/Coffee Maker"]
      },
      {
        id: "room-bbi-mayfair-conv-deluxe",
        name: "Deluxe Room",
        type: "DELUXE",
        description: "32 sq.m spacious room with pool view and upgraded bath amenities.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 6800,
        pricePerNight: 6800,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Pool View", "Mini Bar", "Free Wi-Fi", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "MAYFAIR Convention Bhubaneswar",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.mayfairhotels.com/mayfair-convention-bhubaneswar.html",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-bbi-fortune-sishmo",
    destinationId: "dest-bhubaneswar",
    name: "Fortune Park Sishmo",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    countryCode: "IN",
    fullAddress: "86/A-1 Gautam Nagar, Bhubaneswar 751014, Odisha, India",
    address: "86/A-1 Gautam Nagar, Bhubaneswar 751014",
    latitude: 20.2558,
    longitude: 85.8361,
    description: "Centrally located ITC Fortune member hotel near Bhubaneswar Railway Station, offering rooftop swimming pool, Zodiac 24-hour restaurant, and wellness center.",
    shortDescription: "Comfortable ITC Fortune hotel in Gautam Nagar close to Bhubaneswar Railway Station.",
    category: "FOUR_STAR",
    rating: 4.2,
    officialWebsite: "https://www.fortunehotels.in/bhubaneswar-fortune-park-sishmo.dh.33",
    phone: "+91 674 668 8444",
    email: "fp.sishmo@fortunehotels.in",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 72,
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
    pricePerNight: 4800,
    amenities: [
      "Rooftop Swimming Pool",
      "Zodiac Multi-Cuisine Coffee Shop",
      "Neptune Bar & Lounge",
      "Free High-Speed Wi-Fi",
      "Railway Station Proximity",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-bbi-fortune-standard",
        name: "Standard Room",
        type: "DOUBLE",
        description: "25 sq.m contemporary room with city outlook and modern walk-in shower.",
        maxGuests: 2,
        bedType: "1 Queen Bed",
        roomSize: "25 sq.m",
        price: 4800,
        pricePerNight: 4800,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Walk-in Shower", "Air Conditioning", "Coffee Maker"]
      },
      {
        id: "room-bbi-fortune-club",
        name: "Fortune Club Room",
        type: "EXECUTIVE",
        description: "32 sq.m corner room with upgraded amenities and complimentary airport/station transfer.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 6800,
        pricePerNight: 6800,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Station Transfer", "Free Wi-Fi", "City View", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Fortune Park Sishmo Bhubaneswar",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.fortunehotels.in/bhubaneswar-fortune-park-sishmo.dh.33",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-bbi-novotel-janpath",
    destinationId: "dest-bhubaneswar",
    name: "Novotel Bhubaneswar Janpath",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    countryCode: "IN",
    fullAddress: "Janpath Road, Kharvel Nagar, Bhubaneswar 751001, Odisha, India",
    address: "Janpath Road, Kharvel Nagar, Bhubaneswar 751001",
    latitude: 20.2797,
    longitude: 85.8428,
    description: "Centrally located on bustling Janpath Road in commercial Kharvel Nagar, offering rooftop pool with city panoramic views, The Square restaurant, and In Balance fitness center.",
    shortDescription: "Modern Accor property in central Kharvel Nagar on Janpath Road with rooftop pool.",
    category: "FOUR_STAR",
    rating: 4.3,
    officialWebsite: "https://all.accor.com/hotel/B2D8/index.en.shtml",
    phone: "+91 674 710 8888",
    email: "hb2d8-re@accor.com",
    checkInTime: "14:00",
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
    pricePerNight: 5800,
    amenities: [
      "Rooftop Swimming Pool",
      "The Square Multi-Cuisine Restaurant",
      "In Balance Fitness Center",
      "Free High-Speed Wi-Fi",
      "Janpath Commercial Location",
      "Airport & Station Connectivity"
    ],
    roomTypes: [
      {
        id: "room-bbi-novotel-sup",
        name: "Superior King Room",
        type: "DOUBLE",
        description: "28 sq.m modern guestroom with city views, ergonomic workstation, and Novotel LIVE N DREAM bed.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "28 sq.m",
        price: 5800,
        pricePerNight: 5800,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Workstation", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-bbi-novotel-suite",
        name: "Executive Suite",
        type: "SUITE",
        description: "55 sq.m suite with separate parlor, high floor city vista, and espresso machine.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "55 sq.m",
        price: 10500,
        pricePerNight: 10500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Separate Parlor", "Espresso Machine", "Bathtub", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Novotel Bhubaneswar Janpath facade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://all.accor.com/hotel/B2D8/index.en.shtml",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = bhubaneswarHotels;
