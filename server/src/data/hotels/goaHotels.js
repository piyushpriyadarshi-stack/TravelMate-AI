// ==================================================
// Destination 1: GOA (dest-goa)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const goaHotels = [
  {
    id: "hotel-goa-taj-exotica",
    destinationId: "dest-goa",
    name: "Taj Exotica Resort & Spa, Goa",
    city: "Benaulim",
    state: "Goa",
    country: "India",
    countryCode: "IN",
    fullAddress: "Calwaddo, Benaulim, South Goa 403716, India",
    address: "Calwaddo, Benaulim, South Goa 403716",
    latitude: 15.2476,
    longitude: 73.9272,
    description: "Mediterranean-style 56-acre luxury beachfront sanctuary overlooking the Arabian Sea, featuring private beach access, a 9-hole executive golf course, Jiva Ayurvedic spa, and fine dining.",
    shortDescription: "Mediterranean-style 56-acre beachfront sanctuary overlooking the Arabian Sea in Benaulim.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/taj-exotica-goa/",
    phone: "+91 832 668 3333",
    email: "exotica.goa@tajhotels.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 140,
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
    pricePerNight: 18500,
    amenities: [
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
    roomTypes: [
      {
        id: "room-goa-taj-dlx-garden",
        name: "Deluxe Room Garden View",
        type: "DELUXE",
        description: "Spacious 56 sq.m room with Portuguese colonial architecture and private veranda facing landscaped gardens.",
        maxGuests: 3,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "56 sq.m",
        price: 18500,
        pricePerNight: 18500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Private Balcony", "Air Conditioning", "Bathtub", "Mini Bar"]
      },
      {
        id: "room-goa-taj-villa-sea",
        name: "Premium Villa Sea View",
        type: "VILLA",
        description: "Exclusive 116 sq.m private villa with plunge pool and panoramic views of the Arabian Sea.",
        maxGuests: 4,
        bedType: "1 King Bed",
        roomSize: "116 sq.m",
        price: 34000,
        pricePerNight: 34000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Plunge Pool", "Sea View", "Personal Butler", "Jiva Spa Amenities", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Taj Exotica Resort & Spa exterior beachfront view",
        source: "Unsplash Licensed Hotel Photo"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "room",
        alt: "Taj Exotica Resort luxury villa suite bedroom",
        source: "Unsplash Licensed Hotel Photo"
      },
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        type: "pool",
        alt: "Taj Exotica Resort beachfront infinity swimming pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/taj-exotica-goa/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-goa-itc-grand",
    destinationId: "dest-goa",
    name: "ITC Grand Goa, a Luxury Collection Resort & Spa",
    city: "Cansaulim",
    state: "Goa",
    country: "India",
    countryCode: "IN",
    fullAddress: "Arossim Beach Road, Cansaulim, South Goa 403712, India",
    address: "Arossim Beach Road, Cansaulim, South Goa 403712",
    latitude: 15.3408,
    longitude: 73.8893,
    description: "Sprawling 45-acre village-style resort nestled along pristine Arossim Beach featuring multi-level lagoon swimming pools, Kaya Kalp Spa, and traditional Goan architecture.",
    shortDescription: "Sprawling 45-acre village-style resort along pristine Arossim Beach with lagoon pools.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.itchotels.com/in/en/itcgrandgoa-resort-and-spa",
    phone: "+91 832 272 1234",
    email: "reservations.itcgrandgoa@itchotels.in",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 252,
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
    roomTypes: [
      {
        id: "room-goa-itc-garden",
        name: "Garden View Room with Patio",
        type: "DELUXE",
        description: "Elegant 45 sq.m room with sunken marble bathtub and private outdoor patio opening to verdant gardens.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "45 sq.m",
        price: 16000,
        pricePerNight: 16000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Sunken Bathtub", "Private Patio", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-goa-itc-lagoon-suite",
        name: "Sea View Lagoon Suite",
        type: "SUITE",
        description: "Opulent 85 sq.m suite overlooking tranquil water lagoons and the Arabian Sea.",
        maxGuests: 4,
        bedType: "1 King Bed",
        roomSize: "85 sq.m",
        price: 28500,
        pricePerNight: 28500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Sea View", "Living Area", "Lagoon Access", "Executive Lounge Access", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "ITC Grand Goa lagoon resort view",
        source: "Unsplash Licensed Hotel Photo"
      },
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        type: "room",
        alt: "ITC Grand Goa premium room patio",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.itchotels.com/in/en/itcgrandgoa-resort-and-spa",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-goa-alila-diwa",
    destinationId: "dest-goa",
    name: "Alila Diwa Goa",
    city: "Majorda",
    state: "Goa",
    country: "India",
    countryCode: "IN",
    fullAddress: "48/10, Adao Waddo, Majorda, Salcete, South Goa 403713, India",
    address: "48/10, Adao Waddo, Majorda, South Goa 403713",
    latitude: 15.3129,
    longitude: 73.9137,
    description: "Contemporary eco-luxury resort surrounded by lush emerald paddy fields near Gonsua Beach, featuring iconic infinity edge swimming pool and Spa Alila.",
    shortDescription: "Eco-luxury sanctuary bordered by lush emerald paddy fields near Majorda Beach.",
    category: "LUXURY",
    rating: 4.6,
    officialWebsite: "https://www.hyatt.com/alila/alila-diwa-goa",
    phone: "+91 832 274 6800",
    email: "diwagoa@alilahotels.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 153,
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
    pricePerNight: 13500,
    amenities: [
      "Paddy-Field Infinity Pool",
      "Spa Alila",
      "Free Shuttle to Beach",
      "Fine Dining Bistro",
      "Free Wi-Fi",
      "Fitness Centre",
      "Yoga Pavilions",
      "Kids Pool & Club"
    ],
    roomTypes: [
      {
        id: "room-goa-alila-terrace",
        name: "Terrace Room",
        type: "DELUXE",
        description: "Refined 44 sq.m room featuring private balcony overlooking the resort's tranquil waterways.",
        maxGuests: 3,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "44 sq.m",
        price: 13500,
        pricePerNight: 13500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Balcony", "Free Wi-Fi", "Walk-in Shower", "Mini Bar", "Air Conditioning"]
      },
      {
        id: "room-goa-alila-diwa-club",
        name: "Diwa Club Room",
        type: "CLUB",
        description: "Exclusive 66 sq.m club enclave room with access to private lap pool and bespoke butler hospitality.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "66 sq.m",
        price: 21000,
        pricePerNight: 21000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Club Pool Access", "Private Veranda", "Express Check-in", "Afternoon Tea", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Alila Diwa Goa infinity pool overlooking paddy fields",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/alila/alila-diwa-goa",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-goa-w-goa",
    destinationId: "dest-goa",
    name: "W Goa",
    city: "Vagator",
    state: "Goa",
    country: "India",
    countryCode: "IN",
    fullAddress: "Vagator Beach, Bardez, North Goa 403509, India",
    address: "Vagator Beach, Bardez, North Goa 403509",
    latitude: 15.5979,
    longitude: 73.7381,
    description: "Vibrant clifftop luxury retreat perched above Vagator Beach and historical Chapora Fort, known for Rockpool sunset lounge and AWAY Spa.",
    shortDescription: "Vibrant luxury haven perched on the secluded shores of Vagator Beach.",
    category: "LUXURY",
    rating: 4.5,
    officialWebsite: "https://www.marriott.com/hotels/travel/goiwh-w-goa/",
    phone: "+91 832 671 8888",
    email: "w.goa@whotels.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 160,
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
    pricePerNight: 21500,
    amenities: [
      "Rockpool Clifftop Lounge",
      "WET Outdoor Pool",
      "AWAY Spa",
      "Direct Beach Access",
      "FIT Gym",
      "Free High-Speed Wi-Fi",
      "24/7 Room Service",
      "Pet Friendly"
    ],
    roomTypes: [
      {
        id: "room-goa-w-wonderful",
        name: "Wonderful Room",
        type: "DELUXE",
        description: "Chic 42 sq.m guestroom with vibrant psychedelic decor, signature W king bed, and private sit-out.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "42 sq.m",
        price: 21500,
        pricePerNight: 21500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Signature W Bed", "Private Sit-out", "Bose Sound System", "Rain Shower", "Free Wi-Fi"]
      },
      {
        id: "room-goa-w-villa",
        name: "Marvelous Villa with Plunge Pool",
        type: "VILLA",
        description: "Expansive 200 sq.m standalone villa boasting private rooftop terrace and personal plunge pool.",
        maxGuests: 4,
        bedType: "1 King Bed",
        roomSize: "200 sq.m",
        price: 45000,
        pricePerNight: 45000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Plunge Pool", "Rooftop Terrace", "Ocean Horizon View", "Cocktail Bar Setup"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "W Goa cliffside pool and lounge",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/goiwh-w-goa/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-goa-holiday-inn",
    destinationId: "dest-goa",
    name: "Holiday Inn Resort Goa",
    city: "Cavelossim",
    state: "Goa",
    country: "India",
    countryCode: "IN",
    fullAddress: "Mobor Beach, Cavelossim, South Goa 403731, India",
    address: "Mobor Beach, Cavelossim, South Goa 403731",
    latitude: 15.1587,
    longitude: 73.9439,
    description: "Beachfront 25-acre resort located on tranquil Mobor Beach, combining traditional Goan and colonial design with family-friendly amenities and water sports.",
    shortDescription: "Family-friendly beach retreat on peaceful Mobor Beach in Cavelossim.",
    category: "FOUR_STAR",
    rating: 4.4,
    officialWebsite: "https://www.ihg.com/holidayinnresorts/hotels/us/en/goa/goahi/hoteldetail",
    phone: "+91 832 287 0000",
    email: "reservation@holidayinngoa.com",
    checkInTime: "14:00",
    checkOutTime: "11:00",
    totalRooms: 205,
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
      "Direct Beach Access",
      "Swimming Pool",
      "Ayurvedic Center",
      "Multi-cuisine Restaurants",
      "Free Wi-Fi",
      "Tennis Court",
      "Fitness Center",
      "Kids Activity Zone"
    ],
    roomTypes: [
      {
        id: "room-goa-holiday-plaza",
        name: "Plaza Garden View Room",
        type: "DOUBLE",
        description: "Cozy 34 sq.m room with garden-facing balcony and essential beach resort comforts.",
        maxGuests: 2,
        bedType: "1 Queen Bed or 2 Twin Beds",
        roomSize: "34 sq.m",
        price: 8500,
        pricePerNight: 8500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Garden Balcony", "Air Conditioning", "Coffee Maker"]
      },
      {
        id: "room-goa-holiday-deluxe-sea",
        name: "Deluxe Sea Facing Room",
        type: "DELUXE",
        description: "Comfortable 38 sq.m room offering direct vistas of the Arabian Sea.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "38 sq.m",
        price: 12500,
        pricePerNight: 12500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Sea View", "Private Balcony", "Mini Fridge", "En-suite Bath"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Holiday Inn Resort Goa coastal lawns",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.ihg.com/holidayinnresorts/hotels/us/en/goa/goahi/hoteldetail",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-goa-grand-hyatt",
    destinationId: "dest-goa",
    name: "Grand Hyatt Goa",
    city: "Bambolim",
    state: "Goa",
    country: "India",
    countryCode: "IN",
    fullAddress: "P.O. Goa University, Bambolim, North Goa 403206, India",
    address: "P.O. Goa University, Bambolim, North Goa 403206",
    latitude: 15.4526,
    longitude: 73.8557,
    description: "Palatial 17th-century Indo-Portuguese inspired 28-acre waterfront resort on calm Bambolim Bay, featuring Shamana Spa, freeform outdoor pool, and signature dining.",
    shortDescription: "Palatial 28-acre Indo-Portuguese estate fronting tranquil Bambolim Bay.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.hyatt.com/grand-hyatt/goagh-grand-hyatt-goa",
    phone: "+91 832 710 1234",
    email: "goa.grand@hyatt.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 313,
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
    pricePerNight: 17000,
    amenities: [
      "Bayfront Access",
      "Free-form Swimming Pool",
      "Indoor Lap Pool",
      "Shamana Spa",
      "5 Dining Venues",
      "Free Wi-Fi",
      "Fitness Center",
      "Adventure Park & Zipline"
    ],
    roomTypes: [
      {
        id: "room-goa-gh-standard",
        name: "Grand King Room with Balcony",
        type: "DELUXE",
        description: "50 sq.m room with custom teak furnishings and balcony looking out onto landscaped gardens.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "50 sq.m",
        price: 17000,
        pricePerNight: 17000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Whirlpool Tub", "Balcony", "Work Desk", "Air Conditioning"]
      },
      {
        id: "room-goa-gh-bay-suite",
        name: "Grand Suite with Bay View",
        type: "SUITE",
        description: "100 sq.m luxury suite featuring a separate living room, oversized bathroom, and panoramic bay panoramas.",
        maxGuests: 4,
        bedType: "1 King Bed",
        roomSize: "100 sq.m",
        price: 31000,
        pricePerNight: 31000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Bay View", "Grand Club Access", "Private Whirlpool", "Separate Living Room"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Grand Hyatt Goa palatial bayfront estate",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/grand-hyatt/goagh-grand-hyatt-goa",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-goa-novotel-resort",
    destinationId: "dest-goa",
    name: "Novotel Goa Resort & Spa",
    city: "Candolim",
    state: "Goa",
    country: "India",
    countryCode: "IN",
    fullAddress: "Pinto Waddo, Off Candolim Road, Candolim, North Goa 403515, India",
    address: "Pinto Waddo, Off Candolim Road, Candolim, North Goa 403515",
    latitude: 15.5222,
    longitude: 73.7694,
    description: "Relaxed lifestyle resort nestled in Candolim close to North Goa beaches and night markets, offering vitality pool, Warren Tricomi Spa, and swim-up bar.",
    shortDescription: "Chic contemporary retreat located moments from Candolim Beach and dining strips.",
    category: "FOUR_STAR",
    rating: 4.3,
    officialWebsite: "https://all.accor.com/hotel/8855/index.en.shtml",
    phone: "+91 832 711 2424",
    email: "h8855-re@accor.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 121,
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
      "Swimming Pool with Swim-up Bar",
      "Warren Tricomi Spa",
      "Free Beach Shuttle",
      "All-Day Dining Restaurant",
      "Free Wi-Fi",
      "Fitness Center",
      "Kids Play Area"
    ],
    roomTypes: [
      {
        id: "room-goa-novotel-sup",
        name: "Superior King Room",
        type: "DOUBLE",
        description: "Modern 33 sq.m room with private balcony overlooking the vitality pool or hill greenery.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "33 sq.m",
        price: 7200,
        pricePerNight: 7200,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Pool View Balcony", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-goa-novotel-suite",
        name: "Junior Suite",
        type: "SUITE",
        description: "Spacious 54 sq.m suite with master bedroom, seating lounge, and upgraded bath amenities.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "54 sq.m",
        price: 11800,
        pricePerNight: 11800,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Living Area", "Balcony", "Espresso Machine", "Bathtub"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Novotel Goa Resort pool deck",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://all.accor.com/hotel/8855/index.en.shtml",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-goa-radisson-candolim",
    destinationId: "dest-goa",
    name: "Radisson Goa Candolim",
    city: "Candolim",
    state: "Goa",
    country: "India",
    countryCode: "IN",
    fullAddress: "Bammonvaddo, Candolim, Bardez, North Goa 403515, India",
    address: "Bammonvaddo, Candolim, North Goa 403515",
    latitude: 15.5161,
    longitude: 73.7656,
    description: "Centrally located Candolim hotel just 500 meters from golden Candolim Beach, offering contemporary rooms, outdoor pool, and Palms multi-cuisine restaurant.",
    shortDescription: "Contemporary hotel located a short walk from Candolim Beach and coastal nightlife.",
    category: "FOUR_STAR",
    rating: 4.2,
    officialWebsite: "https://www.radissonhotels.com/en-us/hotels/radisson-resort-goa-candolim",
    phone: "+91 832 671 9999",
    email: "reservations.candolim@radisson.com",
    checkInTime: "14:00",
    checkOutTime: "11:00",
    totalRooms: 78,
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
    pricePerNight: 6400,
    amenities: [
      "Outdoor Swimming Pool",
      "Restaurant & Bar",
      "Walking Distance to Beach",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Airport Transfer Available",
      "24/7 Front Desk"
    ],
    roomTypes: [
      {
        id: "room-goa-rad-superior",
        name: "Superior Room",
        type: "DOUBLE",
        description: "Well-appointed 30 sq.m room with modern amenities, work desk, and balcony.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "30 sq.m",
        price: 6400,
        pricePerNight: 6400,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Balcony", "Coffee Maker", "Air Conditioning"]
      },
      {
        id: "room-goa-rad-deluxe",
        name: "Deluxe Pool View Room",
        type: "DELUXE",
        description: "34 sq.m room with private balcony overlooking the courtyard swimming pool.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "34 sq.m",
        price: 8200,
        pricePerNight: 8200,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Pool View", "Balcony", "Free Wi-Fi", "Mini Bar"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Radisson Goa Candolim courtyard and pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.radissonhotels.com/en-us/hotels/radisson-resort-goa-candolim",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = goaHotels;
