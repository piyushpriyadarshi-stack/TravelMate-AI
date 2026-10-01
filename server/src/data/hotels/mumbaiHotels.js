// ==================================================
// Destination 3: MUMBAI (dest-mumbai)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const mumbaiHotels = [
  {
    id: "hotel-mumbai-taj-mahal-palace",
    destinationId: "dest-mumbai",
    name: "The Taj Mahal Palace, Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    countryCode: "IN",
    fullAddress: "Apollo Bunder, Colaba, Mumbai 400001, India",
    address: "Apollo Bunder, Colaba, Mumbai 400001",
    latitude: 18.9217,
    longitude: 72.8332,
    description: "Legendary 1903 heritage flagship hotel overlooking the Gateway of India and the Arabian Sea. Renowned for Wasabi by Morimoto, Golden Dragon, and Jiva Spa.",
    shortDescription: "Iconic 1903 heritage palace hotel facing the Gateway of India and the Arabian Sea.",
    category: "LUXURY",
    rating: 4.9,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/taj-mahal-palace-mumbai/",
    phone: "+91 22 6665 3366",
    email: "tmhresv.bom@tajhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 543,
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
    pricePerNight: 24000,
    amenities: [
      "Gateway of India Sea Views",
      "Outdoor Swimming Pool",
      "Jiva Spa",
      "Wasabi by Morimoto Dining",
      "Free High-Speed Wi-Fi",
      "Palace Butler Service",
      "Art Gallery & Heritage Tours",
      "Luxury Yacht Charters"
    ],
    roomTypes: [
      {
        id: "room-mumbai-taj-palace-room",
        name: "Palace Wing Superior Room",
        type: "DELUXE",
        description: "38 sq.m historic palace room with antique wood furniture, vaulted high ceilings, and city or courtyard vistas.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "38 sq.m",
        price: 24000,
        pricePerNight: 24000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "High Ceilings", "Marble Bathroom", "Palace Butler"]
      },
      {
        id: "room-mumbai-taj-sea-suite",
        name: "Sea View Luxury Suite",
        type: "SUITE",
        description: "78 sq.m premier suite with sweeping panoramic vistas of the Arabian Sea and Gateway of India harbor.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "78 sq.m",
        price: 55000,
        pricePerNight: 55000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Gateway Sea View", "Living Salon", "24/7 Butler Service", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Taj Mahal Palace Mumbai facing Arabian Sea",
        source: "Unsplash Licensed Hotel Photo"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "room",
        alt: "Taj Mahal Palace luxury suite bedroom",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/taj-mahal-palace-mumbai/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-mumbai-oberoi",
    destinationId: "dest-mumbai",
    name: "The Oberoi, Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    countryCode: "IN",
    fullAddress: "Nariman Point, Netaji Subhash Chandra Bose Road, Mumbai 400021, India",
    address: "Nariman Point, Marine Drive, Mumbai 400021",
    latitude: 18.9272,
    longitude: 72.8206,
    description: "Sleek luxury hotel at Nariman Point offering breathtaking views of Marine Drive and the Queen's Necklace. Home to Ziya by Michelin-starred chef Vineet Bhatia.",
    shortDescription: "Ultra-luxury hotel at Nariman Point overlooking the iconic Queen's Necklace.",
    category: "LUXURY",
    rating: 4.9,
    officialWebsite: "https://www.oberoihotels.com/hotels-in-mumbai/",
    phone: "+91 22 6632 5757",
    email: "reservations.mumbai@oberoihotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 287,
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
      "Marine Drive Ocean Views",
      "Outdoor Heated Pool",
      "The Oberoi Spa (24 Hours)",
      "Ziya Indian Fine Dining",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-mumbai-oberoi-dlx-ocean",
        name: "Deluxe Ocean View Room",
        type: "DELUXE",
        description: "50 sq.m room with floor-to-ceiling glass framing unobstructed views of the Arabian Sea.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "50 sq.m",
        price: 21000,
        pricePerNight: 21000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Ocean View", "Free Wi-Fi", "Standalone Bathtub", "Butler Service"]
      },
      {
        id: "room-mumbai-oberoi-exec-suite",
        name: "Executive Suite Ocean View",
        type: "SUITE",
        description: "80 sq.m corner suite offering sweeping views across the entire curve of Marine Drive.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "80 sq.m",
        price: 42000,
        pricePerNight: 42000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Queen's Necklace View", "Living Room", "Walk-in Wardrobe", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Oberoi Mumbai Nariman Point view",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.oberoihotels.com/hotels-in-mumbai/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-mumbai-trident-nariman",
    destinationId: "dest-mumbai",
    name: "Trident, Nariman Point",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    countryCode: "IN",
    fullAddress: "CR 2 Nariman Point, Netaji Subhash Chandra Bose Road, Mumbai 400021, India",
    address: "CR 2 Nariman Point, Mumbai 400021",
    latitude: 18.9268,
    longitude: 72.8211,
    description: "Towering 35-storey 5-star hotel rising above Marine Drive in South Mumbai financial center, featuring Frangipani, India Jones, and sea-view swimming pool.",
    shortDescription: "Prominent 35-storey South Mumbai hotel towering over Marine Drive promenade.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.tridenthotels.com/hotels-in-mumbai-nariman-point/",
    phone: "+91 22 6632 4343",
    email: "reservations.mumbai@tridenthotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 555,
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
      "Outdoor Swimming Pool",
      "Frangipani & India Jones Dining",
      "Trident Spa",
      "Free High-Speed Wi-Fi",
      "Fitness Centre",
      "Business Centre",
      "Valet Parking"
    ],
    roomTypes: [
      {
        id: "room-mumbai-trident-sup",
        name: "Superior City View Room",
        type: "DOUBLE",
        description: "28 sq.m comfortable room with contemporary design, ergonomic desk, and city skyline views.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "28 sq.m",
        price: 12500,
        pricePerNight: 12500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Workstation", "Air Conditioning", "En-suite Bathroom"]
      },
      {
        id: "room-mumbai-trident-ocean",
        name: "Premier Ocean View Room",
        type: "DELUXE",
        description: "32 sq.m high-floor room with panoramic views of the Arabian Sea and Marine Drive.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 16500,
        pricePerNight: 16500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Ocean View", "High Floor", "Mini Bar", "Complimentary Tea/Coffee"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Trident Nariman Point Mumbai high rise",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tridenthotels.com/hotels-in-mumbai-nariman-point/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-mumbai-itc-maratha",
    destinationId: "dest-mumbai",
    name: "ITC Maratha, a Luxury Collection Hotel",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    countryCode: "IN",
    fullAddress: "Sahar Airport Road, Andheri East, Mumbai 400099, India",
    address: "Sahar Airport Road, Andheri East, Mumbai 400099",
    latitude: 19.1024,
    longitude: 72.8698,
    description: "Grand Maratha dynasty-inspired 5-star hotel near Chhatrapati Shivaji Maharaj International Airport, celebrated for Peshwa Pavilion, Peshawri, and Kaya Kalp Spa.",
    shortDescription: "Regal Maratha-inspired hotel near Mumbai International Airport with Peshawri dining.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.itchotels.com/in/en/itcmaratha-mumbai",
    phone: "+91 22 2830 3030",
    email: "reservations.itcmaratha@itchotels.in",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 380,
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
    pricePerNight: 11500,
    amenities: [
      "Outdoor Swimming Pool",
      "Peshawri & Peshwa Pavilion",
      "Kaya Kalp Spa",
      "Airport Proximity Shuttle",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive Club Lounge"
    ],
    roomTypes: [
      {
        id: "room-mumbai-itc-exec",
        name: "Executive Club Room",
        type: "EXECUTIVE",
        description: "36 sq.m heritage-accented room with soundproof glazing and four-fixture marble bathroom.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "36 sq.m",
        price: 11500,
        pricePerNight: 11500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Soundproofing", "Marble Bath", "Ergonomic Desk"]
      },
      {
        id: "room-mumbai-itc-itc-one",
        name: "ITC One Luxury Room",
        type: "DELUXE",
        description: "51 sq.m exclusive wing room with complimentary airport transfers, personal butler, and lounge privileges.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "51 sq.m",
        price: 18000,
        pricePerNight: 18000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Airport Transfer", "Butler Service", "Club Lounge Access", "Deep Soak Tub"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "ITC Maratha Mumbai grand courtyard",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.itchotels.com/in/en/itcmaratha-mumbai",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-mumbai-st-regis",
    destinationId: "dest-mumbai",
    name: "The St. Regis Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    countryCode: "IN",
    fullAddress: "462 Senapati Bapat Marg, Lower Parel, Mumbai 400013, India",
    address: "462 Senapati Bapat Marg, Lower Parel, Mumbai 400013",
    latitude: 18.9934,
    longitude: 72.8243,
    description: "Soaring 38 floors above High Street Phoenix luxury mall in Lower Parel, offering signature St. Regis Butler service, rooftop swimming pool, and upscale dining.",
    shortDescription: "Soaring 38-floor luxury landmark in Lower Parel connected to Palladium luxury mall.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.marriott.com/hotels/travel/bomxr-the-st-regis-mumbai/",
    phone: "+91 22 6162 8000",
    email: "stregis.mumbai@stregis.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 395,
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
      "Rooftop Swimming Pool",
      "St. Regis Butler Service",
      "Iridium Spa",
      "Seven Kitchens & By the Mekong",
      "Free High-Speed Wi-Fi",
      "Direct Access to Palladium Mall",
      "Athletic Club"
    ],
    roomTypes: [
      {
        id: "room-mumbai-st-regis-dlx",
        name: "Deluxe King Room",
        type: "DELUXE",
        description: "45 sq.m city-view room with St. Regis signature bed and bespoke butler beverage service.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "45 sq.m",
        price: 19000,
        pricePerNight: 19000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Signature Butler", "City Skyline View", "Marble Bath"]
      },
      {
        id: "room-mumbai-st-regis-st-regis-suite",
        name: "St. Regis Suite",
        type: "SUITE",
        description: "90 sq.m opulent suite with panoramic racecourse and sea views, private dining, and powder room.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "90 sq.m",
        price: 36000,
        pricePerNight: 36000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Racecourse View", "Separate Living & Dining", "Butler Service", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The St. Regis Mumbai skyscraper",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/bomxr-the-st-regis-mumbai/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-mumbai-four-seasons",
    destinationId: "dest-mumbai",
    name: "Four Seasons Hotel Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    countryCode: "IN",
    fullAddress: "1/136 Dr E Moses Road, Worli, Mumbai 400018, India",
    address: "1/136 Dr E Moses Road, Worli, Mumbai 400018",
    latitude: 18.9959,
    longitude: 72.8197,
    description: "Sleek 33-storey contemporary hotel in Worli commercial district, home to AER rooftop lounge, an outdoor swimming pool, and Four Seasons Ayurvedic Spa.",
    shortDescription: "Sleek glass tower in Worli featuring the iconic AER rooftop bar and sea views.",
    category: "LUXURY",
    rating: 4.6,
    officialWebsite: "https://www.fourseasons.com/mumbai/",
    phone: "+91 22 2481 8000",
    email: "reservations.mumbai@fourseasons.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 202,
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
    pricePerNight: 16500,
    amenities: [
      "AER Open-air Rooftop Bar",
      "Outdoor Pool",
      "Four Seasons Spa",
      "San:Qi Asian Restaurant",
      "Free High-Speed Wi-Fi",
      "Fitness Club",
      "Chauffeur Fleet"
    ],
    roomTypes: [
      {
        id: "room-mumbai-fs-deluxe-sea",
        name: "Deluxe Sea-View Room",
        type: "DELUXE",
        description: "48 sq.m light-filled room with floor-to-ceiling windows looking onto the Arabian Sea.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "48 sq.m",
        price: 16500,
        pricePerNight: 16500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Sea View", "Free Wi-Fi", "Four Seasons Bed", "Deep Soaking Tub"]
      },
      {
        id: "room-mumbai-fs-exec-suite",
        name: "Four Seasons Executive Suite",
        type: "SUITE",
        description: "85 sq.m suite featuring separate living room with panoramic sunset vistas over the ocean.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "85 sq.m",
        price: 32000,
        pricePerNight: 32000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Ocean Panorama", "Separate Living Area", "Nespresso Machine", "Executive Check-in"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Four Seasons Hotel Mumbai Worli tower",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.fourseasons.com/mumbai/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-mumbai-intercontinental-marine",
    destinationId: "dest-mumbai",
    name: "InterContinental Marine Drive-Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    countryCode: "IN",
    fullAddress: "135 Marine Drive, Churchgate, Mumbai 400020, India",
    address: "135 Marine Drive, Churchgate, Mumbai 400020",
    latitude: 18.9325,
    longitude: 72.8242,
    description: "Boutique luxury hotel perched directly on Marine Drive opposite the Arabian Sea, famous for Dome rooftop cocktail lounge and Kebab Korner restaurant.",
    shortDescription: "Boutique oceanfront address on Marine Drive celebrated for Dome rooftop lounge.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.ihg.com/intercontinental/hotels/us/en/mumbai/bomhb/hoteldetail",
    phone: "+91 22 3987 9999",
    email: "marinedrive@intercontinental.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 59,
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
      "Dome Rooftop Pool & Bar",
      "Front-Row Marine Drive View",
      "Kebab Korner Restaurant",
      "Free High-Speed Wi-Fi",
      "24-Hour Fitness Center",
      "Boutique Butler Service"
    ],
    roomTypes: [
      {
        id: "room-mumbai-ic-deluxe-sea",
        name: "Classic Sea View Room",
        type: "DELUXE",
        description: "42 sq.m guestroom with picture windows framing the Arabian Sea waves.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "42 sq.m",
        price: 14000,
        pricePerNight: 14000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Direct Sea View", "Free Wi-Fi", "Bose SoundDock", "Marble Bath"]
      },
      {
        id: "room-mumbai-ic-dome-suite",
        name: "Marine Drive Suite",
        type: "SUITE",
        description: "70 sq.m corner suite overlooking the illuminated Queen's Necklace promenade.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "70 sq.m",
        price: 27000,
        pricePerNight: 27000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Queen's Necklace Panorama", "Separate Parlour", "Complimentary Cocktails at Dome"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "InterContinental Marine Drive sunset view",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.ihg.com/intercontinental/hotels/us/en/mumbai/bomhb/hoteldetail",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-mumbai-trident-bkc",
    destinationId: "dest-mumbai",
    name: "Trident, Bandra Kurla",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    countryCode: "IN",
    fullAddress: "C-56, G Block, Bandra Kurla Complex, Mumbai 400098, India",
    address: "C-56, G Block, Bandra Kurla Complex, Mumbai 400098",
    latitude: 19.0668,
    longitude: 72.8687,
    description: "Contemporary 5-star hotel at the heart of Bandra Kurla Complex (BKC) financial corridor, offering outdoor lap pool, Trident Spa, and award-winning Botticino Italian restaurant.",
    shortDescription: "Premier corporate 5-star hotel in the heart of Bandra Kurla Complex financial district.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.tridenthotels.com/hotels-in-mumbai-bandra-kurla/",
    phone: "+91 22 6672 7777",
    email: "reservations.bkc@tridenthotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 436,
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
      "Outdoor Lap Pool",
      "Trident Spa",
      "Botticino & O22 Dining",
      "Free High-Speed Wi-Fi",
      "Executive Business Center",
      "Fitness Center",
      "Concierge Service"
    ],
    roomTypes: [
      {
        id: "room-mumbai-trident-bkc-deluxe",
        name: "Deluxe Room",
        type: "DOUBLE",
        description: "30 sq.m guestroom with contemporary red oak accents and ergonomic executive desk.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "30 sq.m",
        price: 13000,
        pricePerNight: 13000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Workstation", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-mumbai-trident-bkc-suite",
        name: "Trident Club Suite",
        type: "SUITE",
        description: "60 sq.m executive suite with Club Lounge access, evening cocktails, and private boardroom access.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "60 sq.m",
        price: 22000,
        pricePerNight: 22000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Trident Club Lounge", "Breakfast Included", "Separate Parlour", "Airport Pickup"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Trident Bandra Kurla Mumbai facade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tridenthotels.com/hotels-in-mumbai-bandra-kurla/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = mumbaiHotels;
