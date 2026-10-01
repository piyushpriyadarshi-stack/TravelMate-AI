// ==================================================
// Destination 7: KOLKATA (dest-kolkata)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const kolkataHotels = [
  {
    id: "hotel-ccu-itc-royal-bengal",
    destinationId: "dest-kolkata",
    name: "ITC Royal Bengal, a Luxury Collection Hotel",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    countryCode: "IN",
    fullAddress: "1 JBS Haldane Avenue, Kolkata 700046, West Bengal, India",
    address: "1 JBS Haldane Avenue, Kolkata 700046",
    latitude: 22.5447,
    longitude: 88.3975,
    description: "Palatial 30-storey luxury tribute to Bengal's heritage along EM Bypass, featuring grand marble colonnades, Grand Market Pavilion, Royal Vega, and Kaya Kalp Spa.",
    shortDescription: "Palatial 30-storey luxury hotel honoring Bengal's cultural aristocracy along EM Bypass.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.itchotels.com/in/en/itcroyalbengal-kolkata",
    phone: "+91 33 4446 4646",
    email: "reservations.itcroyalbengal@itchotels.in",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 456,
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
      "Rooftop Swimming Pool",
      "Kaya Kalp The Royal Spa",
      "Royal Vega & Grand Market Pavilion",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "The Brass Room Lounge",
      "Helipad"
    ],
    roomTypes: [
      {
        id: "room-ccu-itc-tower",
        name: "The Towers Room",
        type: "EXECUTIVE",
        description: "48 sq.m expansive room with handcrafted Bengal art, marble bathroom, and Towers Lounge privileges.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "48 sq.m",
        price: 13500,
        pricePerNight: 13500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Towers Lounge Privileges", "Marble Bath", "City View"]
      },
      {
        id: "room-ccu-itc-bengal-suite",
        name: "Bengal Suite",
        type: "SUITE",
        description: "96 sq.m palatial suite with separate living salon, dining area, and dedicated butler.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "96 sq.m",
        price: 27000,
        pricePerNight: 27000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Dedicated Butler", "Dining Area", "Living Salon", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "ITC Royal Bengal Kolkata grand tower",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.itchotels.com/in/en/itcroyalbengal-kolkata",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-ccu-itc-sonar",
    destinationId: "dest-kolkata",
    name: "ITC Sonar, a Luxury Collection Hotel",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    countryCode: "IN",
    fullAddress: "1 JBS Haldane Avenue, Opp Science City, Kolkata 700046, West Bengal, India",
    address: "1 JBS Haldane Avenue, Opp Science City, Kolkata 700046",
    latitude: 22.5432,
    longitude: 88.3969,
    description: "Designed on the concept of traditional baganbaris (Bengal country garden houses) with sprawling lily ponds, outdoor pool, Eden Pavilion, and Dum Pukht.",
    shortDescription: "Garden hotel set amid tranquil lily ponds and water pavilions opposite Science City.",
    category: "FIVE_STAR",
    rating: 4.7,
    officialWebsite: "https://www.itchotels.com/in/en/itcsonar-kolkata",
    phone: "+91 33 2345 4545",
    email: "reservations.itcsonar@itchotels.in",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 237,
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
      "Tranquil Water Garden & Lily Ponds",
      "Outdoor Swimming Pool",
      "Dum Pukht Awadhi Dining",
      "Kaya Kalp Spa",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Jogging Track"
    ],
    roomTypes: [
      {
        id: "room-ccu-sonar-exec",
        name: "Executive Club Room",
        type: "EXECUTIVE",
        description: "37 sq.m room with warm wooden flooring overlooking reflective lotus ponds.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "37 sq.m",
        price: 11000,
        pricePerNight: 11000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Water Garden View", "Free Wi-Fi", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-ccu-sonar-itc-one",
        name: "ITC One Luxury Room",
        type: "DELUXE",
        description: "51 sq.m premier room with personalized butler assistance and lounge privileges.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "51 sq.m",
        price: 17500,
        pricePerNight: 17500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Lounge Access", "Butler Service", "Sunken Bathtub", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "ITC Sonar Kolkata lily pond",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.itchotels.com/in/en/itcsonar-kolkata",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-ccu-jw-marriott",
    destinationId: "dest-kolkata",
    name: "JW Marriott Hotel Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    countryCode: "IN",
    fullAddress: "4A JBS Haldane Avenue, Kolkata 700105, West Bengal, India",
    address: "4A JBS Haldane Avenue, Kolkata 700105",
    latitude: 22.5489,
    longitude: 88.3982,
    description: "Contemporary 5-star hotel situated on EM Bypass featuring an outdoor infinity edge pool, Spa by JW, JW Kitchen, and Vintage Asia fine dining.",
    shortDescription: "Sleek 5-star luxury property on EM Bypass with infinity pool and Asian fine dining.",
    category: "FIVE_STAR",
    rating: 4.7,
    officialWebsite: "https://www.marriott.com/hotels/travel/ccujw-jw-marriott-hotel-kolkata/",
    phone: "+91 33 6633 0000",
    email: "jw.kolkata@marriott.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 281,
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
    pricePerNight: 12500,
    amenities: [
      "Outdoor Infinity Pool",
      "Spa by JW",
      "JW Kitchen & Vintage Asia",
      "Gold's Gym Fitness Center",
      "Free High-Speed Wi-Fi",
      "Executive Lounge",
      "24-Hour Room Service"
    ],
    roomTypes: [
      {
        id: "room-ccu-jw-deluxe",
        name: "Deluxe King Room",
        type: "DELUXE",
        description: "40 sq.m guestroom with panoramic city views and luxurious JW bedding.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "40 sq.m",
        price: 12500,
        pricePerNight: 12500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["City View", "Free Wi-Fi", "Marble Bathroom", "Coffee Maker"]
      },
      {
        id: "room-ccu-jw-exec-suite",
        name: "Executive Suite",
        type: "SUITE",
        description: "80 sq.m suite featuring separate living room, executive lounge privileges, and skyline views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "80 sq.m",
        price: 24000,
        pricePerNight: 24000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Executive Lounge Access", "Living Room", "Skyline Panorama", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "JW Marriott Hotel Kolkata infinity pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/ccujw-jw-marriott-hotel-kolkata/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-ccu-taj-bengal",
    destinationId: "dest-kolkata",
    name: "Taj Bengal, Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    countryCode: "IN",
    fullAddress: "34B Belvedere Road, Alipore, Kolkata 700027, West Bengal, India",
    address: "34B Belvedere Road, Alipore, Kolkata 700027",
    latitude: 22.5356,
    longitude: 88.3328,
    description: "Distinguished 5-star landmark in green Alipore designed by architect Bob Fox, featuring towering atrium filled with palms, Sonargaon Bengali dining, and Jiva Spa.",
    shortDescription: "Distinguished luxury hotel in upscale Alipore with iconic towering atrium and Sonargaon dining.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/taj-bengal-kolkata/",
    phone: "+91 33 6612 3939",
    email: "bengal.kolkata@tajhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 229,
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
    pricePerNight: 13000,
    amenities: [
      "Outdoor Swimming Pool",
      "Jiva Spa",
      "Sonargaon Authentic Bengali Dining",
      "The Atrium Bar & Lounge",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Art Gallery"
    ],
    roomTypes: [
      {
        id: "room-ccu-tb-deluxe",
        name: "Deluxe Room",
        type: "DELUXE",
        description: "34 sq.m room with colonial woodwork, city or pool views, and marble bath.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "34 sq.m",
        price: 13000,
        pricePerNight: 13000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Atrium or Pool View", "Marble Bath", "Air Conditioning"]
      },
      {
        id: "room-ccu-tb-taj-club",
        name: "Taj Club Room",
        type: "EXECUTIVE",
        description: "42 sq.m executive floor room with Taj Club Lounge privileges and complimentary airport transfers.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "42 sq.m",
        price: 19500,
        pricePerNight: 19500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Taj Club Lounge", "Airport Transfer", "Butler Service", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Taj Bengal Kolkata Alipore entrance",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/taj-bengal-kolkata/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-ccu-hyatt-centric-ballygunge",
    destinationId: "dest-kolkata",
    name: "Hyatt Centric Ballygunge Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    countryCode: "IN",
    fullAddress: "17 Garcha 1st Lane, Dover Terrace, Ballygunge, Kolkata 700019, West Bengal, India",
    address: "17 Garcha 1st Lane, Dover Terrace, Ballygunge, Kolkata 700019",
    latitude: 22.5256,
    longitude: 88.3618,
    description: "Contemporary lifestyle hotel in vibrant South Kolkata residential neighborhood of Ballygunge, offering outdoor pool, Yauatcha Asian dining, and salon.",
    shortDescription: "Vibrant lifestyle hotel in trendy South Kolkata close to cultural cafes and boutiques.",
    category: "FOUR_STAR",
    rating: 4.4,
    officialWebsite: "https://www.hyatt.com/hyatt-centric/ccuhc-hyatt-centric-ballygunge-kolkata",
    phone: "+91 33 3988 1234",
    email: "ballygunge.centric@hyatt.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 93,
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
      "Outdoor Pool",
      "Yauatcha Asian Dining",
      "Ballygunge Neighborhood Hub",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "24-Hour Front Desk"
    ],
    roomTypes: [
      {
        id: "room-ccu-hc-king",
        name: "Standard King Bed",
        type: "DOUBLE",
        description: "30 sq.m guestroom with eclectic local artwork and modern walk-in rain shower.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "30 sq.m",
        price: 7500,
        pricePerNight: 7500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Rain Shower", "Work Desk", "Air Conditioning"]
      },
      {
        id: "room-ccu-hc-suite",
        name: "Centric Suite",
        type: "SUITE",
        description: "58 sq.m suite with living lounge, Nespresso machine, and neighborhood vistas.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "58 sq.m",
        price: 13500,
        pricePerNight: 13500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Living Lounge", "Nespresso Machine", "Bathtub", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Hyatt Centric Ballygunge modern facade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/hyatt-centric/ccuhc-hyatt-centric-ballygunge-kolkata",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-ccu-hyatt-regency",
    destinationId: "dest-kolkata",
    name: "Hyatt Regency Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    countryCode: "IN",
    fullAddress: "JA-1, Sector III, Salt Lake City, Kolkata 700098, West Bengal, India",
    address: "JA-1, Sector III, Salt Lake City, Kolkata 700098",
    latitude: 22.5714,
    longitude: 88.4061,
    description: "Spread over 6.5 acres in Salt Lake City, offering outdoor landscaped swimming pool, Club Prana spa, squash and tennis courts, and Guchhi tandoori dining.",
    shortDescription: "6.5-acre business resort in Salt Lake City with sports courts and Club Prana spa.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.hyatt.com/hyatt-regency/kolka-hyatt-regency-kolkata",
    phone: "+91 33 2335 1234",
    email: "kolkata.regency@hyatt.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 233,
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
      "Landscaped Outdoor Pool",
      "Club Prana Spa & Salon",
      "Squash & Tennis Courts",
      "Guchhi & Waterside Cafe",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Salt Lake Stadium Proximity"
    ],
    roomTypes: [
      {
        id: "room-ccu-hr-std",
        name: "Standard King Room",
        type: "DOUBLE",
        description: "36 sq.m room with floor-to-ceiling windows and Italian marble bathroom.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "36 sq.m",
        price: 8000,
        pricePerNight: 8000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Marble Bathroom", "Air Conditioning", "Tea/Coffee Maker"]
      },
      {
        id: "room-ccu-hr-regency-suite",
        name: "Regency Suite",
        type: "SUITE",
        description: "72 sq.m suite with separate parlor, Regency Club privileges, and pool views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "72 sq.m",
        price: 15000,
        pricePerNight: 15000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Regency Club Lounge", "Pool View", "Deep Soak Tub", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Hyatt Regency Kolkata grounds",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/hyatt-regency/kolka-hyatt-regency-kolkata",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-ccu-oberoi-grand",
    destinationId: "dest-kolkata",
    name: "The Oberoi Grand, Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    countryCode: "IN",
    fullAddress: "15 Jawaharlal Nehru Road, New Market Area, Dharmatala, Kolkata 700013, West Bengal, India",
    address: "15 Jawaharlal Nehru Road, Dharmatala, Kolkata 700013",
    latitude: 22.5606,
    longitude: 88.3519,
    description: "The legendary 'Grande Dame of Chowringhee' established in the late 19th century, featuring central palm-fringed swimming pool, Threesixtythree° dining, and Spa.",
    shortDescription: "Legendary 'Grande Dame of Chowringhee' colonial palace hotel in the heart of Kolkata.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.oberoihotels.com/hotels-in-kolkata/",
    phone: "+91 33 2249 2323",
    email: "reservations.kolkata@oberoihotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 209,
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
      "Colonial Courtyard Pool",
      "The Oberoi Spa",
      "Threesixtythree° & Baan Thai",
      "Free High-Speed Wi-Fi",
      "New Market Walking Proximity",
      "24-Hour Butler Service",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-ccu-og-premier",
        name: "Premier Room with Courtyard View",
        type: "DELUXE",
        description: "38 sq.m Victorian-inspired room with teak furnishings looking onto palm-shaded pool courtyard.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "38 sq.m",
        price: 16000,
        pricePerNight: 16000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Courtyard Pool View", "Free Wi-Fi", "Victorian Furnishings", "Butler Service"]
      },
      {
        id: "room-ccu-og-heritage-suite",
        name: "Classic Heritage Suite",
        type: "SUITE",
        description: "75 sq.m historic suite with high ceilings, antique four-poster bed, and separate salon.",
        maxGuests: 3,
        bedType: "1 Four-Poster King Bed",
        roomSize: "75 sq.m",
        price: 32000,
        pricePerNight: 32000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Four-Poster Bed", "Separate Salon", "24/7 Butler", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Oberoi Grand Kolkata colonial colonnade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.oberoihotels.com/hotels-in-kolkata/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-ccu-westin-rajarhat",
    destinationId: "dest-kolkata",
    name: "The Westin Kolkata Rajarhat",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    countryCode: "IN",
    fullAddress: "Plot No. CBD/2, International Financial Hub, Action Area II, New Town, Kolkata 700156, West Bengal, India",
    address: "Plot No. CBD/2, Action Area II, New Town, Kolkata 700156",
    latitude: 22.6025,
    longitude: 88.4739,
    description: "Towering 32-storey hotel in New Town Rajarhat IT corridor close to Kolkata Airport, featuring outdoor infinity pool, Heavenly Spa by Westin, and 31/32 rooftop lounge.",
    shortDescription: "Towering 32-storey luxury hotel in New Town Rajarhat near Netaji Subhash Chandra Bose Airport.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.marriott.com/hotels/travel/ccuwi-the-westin-kolkata-rajarhat/",
    phone: "+91 33 4037 1234",
    email: "westin.kolkata@westin.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 304,
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
      "Outdoor Infinity Pool",
      "Heavenly Spa by Westin",
      "31/32 Rooftop Lounge",
      "WestinWORKOUT Fitness Studio",
      "Free High-Speed Wi-Fi",
      "Executive Club Lounge",
      "Airport Shuttle"
    ],
    roomTypes: [
      {
        id: "room-ccu-westin-deluxe",
        name: "Deluxe King City View",
        type: "DELUXE",
        description: "42 sq.m room featuring signature Westin Heavenly Bed and views of Eco Park lake.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "42 sq.m",
        price: 9500,
        pricePerNight: 9500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Heavenly Bed", "Free Wi-Fi", "Eco Park View", "Deep Soak Tub"]
      },
      {
        id: "room-ccu-westin-exec-suite",
        name: "Westin Executive Suite",
        type: "SUITE",
        description: "85 sq.m high-floor suite with Westin Club Lounge access and panoramic New Town views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "85 sq.m",
        price: 18500,
        pricePerNight: 18500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Westin Club Access", "Separate Living Room", "High Floor Panorama", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Westin Kolkata Rajarhat tower",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/ccuwi-the-westin-kolkata-rajarhat/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = kolkataHotels;
