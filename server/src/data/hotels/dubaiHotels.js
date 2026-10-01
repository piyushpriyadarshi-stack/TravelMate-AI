// ==================================================
// Destination 11: DUBAI (dest-dubai)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const dubaiHotels = [
  {
    id: "hotel-dxb-atlantis-the-palm",
    destinationId: "dest-dubai",
    name: "Atlantis, The Palm",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    fullAddress: "Crescent Road, Palm Jumeirah, Dubai, United Arab Emirates",
    address: "Crescent Road, Palm Jumeirah, Dubai",
    latitude: 25.1304,
    longitude: 55.1172,
    description: "World-famous ocean-themed resort situated on the apex of Palm Jumeirah crescent, featuring Aquaventure Waterpark, The Lost Chambers Aquarium, Ossiano underwater dining, and private beach.",
    shortDescription: "Iconic ocean-themed mega-resort on the crest of Palm Jumeirah with Aquaventure Waterpark.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.atlantis.com/dubai/atlantis-the-palm",
    phone: "+971 4 426 2000",
    email: "dxb-info@atlantisdubai.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 1548,
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
    pricePerNight: 35000,
    amenities: [
      "Aquaventure Waterpark Unlimited Access",
      "The Lost Chambers Aquarium Access",
      "Private White Sand Beach",
      "Ossiano Underwater Dining & Nobu",
      "Awaken Spa",
      "Free High-Speed Wi-Fi",
      "Multiple Outdoor Pools"
    ],
    roomTypes: [
      {
        id: "room-dxb-atl-ocean",
        name: "Ocean King Room",
        type: "DELUXE",
        description: "47 sq.m room with French balcony offering panoramic views across the Arabian Gulf.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "47 sq.m",
        price: 35000,
        pricePerNight: 35000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Arabian Gulf View", "Aquaventure Entry Included", "Free Wi-Fi", "Separate Bath & Shower"]
      },
      {
        id: "room-dxb-atl-terrace-suite",
        name: "Terrace Club Suite",
        type: "SUITE",
        description: "94 sq.m suite featuring private sun-lounger terrace overlooking the Palm island skyline.",
        maxGuests: 4,
        bedType: "1 King Bed",
        roomSize: "94 sq.m",
        price: 68000,
        pricePerNight: 68000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Imperial Club Lounge", "Private Sun Terrace", "Airport Transfers", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Atlantis The Palm Dubai crescent",
        source: "Unsplash Licensed Hotel Photo"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "room",
        alt: "Atlantis The Palm luxury suite",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.atlantis.com/dubai/atlantis-the-palm",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-dxb-jumeirah-beach",
    destinationId: "dest-dubai",
    name: "Jumeirah Beach Hotel",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    fullAddress: "Jumeirah Street, Umm Suqeim 3, Dubai, United Arab Emirates",
    address: "Jumeirah Street, Umm Suqeim 3, Dubai",
    latitude: 25.1412,
    longitude: 55.1906,
    description: "Wave-shaped luxury family resort on private Jumeirah beachfront directly facing Burj Al Arab, offering Wild Wadi Waterpark entry, five swimming pools, and Talise Spa.",
    shortDescription: "Iconic wave-shaped family beach resort with uninterrupted views of Burj Al Arab.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.jumeirah.com/en/stay/dubai/jumeirah-beach-hotel",
    phone: "+971 4 348 0000",
    email: "jbhinfo@jumeirah.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 599,
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
    pricePerNight: 28000,
    amenities: [
      "Burj Al Arab Frontline Views",
      "Complimentary Wild Wadi Waterpark Entry",
      "Private White Sand Beach",
      "5 Resort Swimming Pools",
      "Talise Spa",
      "Free High-Speed Wi-Fi",
      "Sinbad's Kids Club"
    ],
    roomTypes: [
      {
        id: "room-dxb-jbh-ocean-dlx",
        name: "Ocean Deluxe Room",
        type: "DELUXE",
        description: "50 sq.m guestroom with floor-to-ceiling glass framing the iconic Burj Al Arab and Gulf waters.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "50 sq.m",
        price: 28000,
        pricePerNight: 28000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Burj Al Arab View", "Wild Wadi Included", "Free Wi-Fi", "Walk-in Shower"]
      },
      {
        id: "room-dxb-jbh-family-suite",
        name: "Family Garden Suite",
        type: "SUITE",
        description: "100 sq.m suite with separate kids bedroom, living lounge, and private terrace.",
        maxGuests: 4,
        bedType: "1 King + 2 Twin Beds",
        roomSize: "100 sq.m",
        price: 52000,
        pricePerNight: 52000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Terrace", "Family Lounge", "Wild Wadi Entry", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Jumeirah Beach Hotel wave design",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.jumeirah.com/en/stay/dubai/jumeirah-beach-hotel",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-dxb-burj-al-arab",
    destinationId: "dest-dubai",
    name: "Burj Al Arab Jumeirah",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    fullAddress: "1 Jumeirah Street, Umm Suqeim 3, Dubai, United Arab Emirates",
    address: "1 Jumeirah Street, Umm Suqeim 3, Dubai",
    latitude: 25.1413,
    longitude: 55.1853,
    description: "The global icon of Arabian luxury, built on its own man-made island 280 meters offshore. Featuring all-duplex suites, 24-karat gold interiors, helipad, and Sal private beach terrace.",
    shortDescription: "World-renowned sail-shaped 7-star ultra-luxury hotel on its own island.",
    category: "LUXURY",
    rating: 4.9,
    officialWebsite: "https://www.jumeirah.com/en/stay/dubai/burj-al-arab-jumeirah",
    phone: "+971 4 301 7777",
    email: "baainfo@jumeirah.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 199,
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
    pricePerNight: 95000,
    amenities: [
      "Private Island Offshore Setting",
      "Sal Luxury Beach & Pool Terrace",
      "Talise Spa 150m Above Gulf",
      "Ristorante L'Olivo at Al Mahara",
      "Private In-Suite Butler on Every Floor",
      "Helipad & Rolls-Royce Phantom Fleet",
      "24-Karat Gold Leaf Interiors"
    ],
    roomTypes: [
      {
        id: "room-dxb-baa-deluxe-suite",
        name: "Deluxe One-Bedroom Duplex Suite",
        type: "SUITE",
        description: "170 sq.m two-storey duplex suite with private bar, spiral staircase, jacuzzi, and Hermes amenities.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "170 sq.m",
        price: 95000,
        pricePerNight: 95000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Two-Storey Duplex", "Private Butler", "Hermes Bath Products", "Jacuzzi", "Breakfast Included"]
      },
      {
        id: "room-dxb-baa-panoramic-suite",
        name: "Panoramic One-Bedroom Suite",
        type: "SUITE",
        description: "225 sq.m duplex suite with 180-degree glass curved walls overlooking the entire Dubai coastline.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "225 sq.m",
        price: 145000,
        pricePerNight: 145000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["180-Degree Panoramic View", "Rolls-Royce Chauffeur", "Private Dining Salon", "Champagne Service"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Burj Al Arab Jumeirah sail on island",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.jumeirah.com/en/stay/dubai/burj-al-arab-jumeirah",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-dxb-address-dubai-marina",
    destinationId: "dest-dubai",
    name: "Address Dubai Marina",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    fullAddress: "Dubai Marina, Al Marsa Street, Dubai, United Arab Emirates",
    address: "Al Marsa Street, Dubai Marina, Dubai",
    latitude: 25.0772,
    longitude: 55.1408,
    description: "Chic luxury hotel integrated into Dubai Marina Mall overlooking yachts along the marina waterway, featuring 50-meter elevated infinity pool, The Spa, and direct promenade access.",
    shortDescription: "Waterfront luxury hotel in Dubai Marina with 50-meter infinity pool overlooking yachts.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.addresshotels.com/en/hotels/address-dubai-marina/",
    phone: "+971 4 436 7777",
    email: "meet.dubaimarina@addresshotels.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 200,
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
      "50-Meter Elevated Infinity Pool",
      "Direct Dubai Marina Mall Connection",
      "The Spa at Address",
      "Marina Promenade Waterfront Access",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Qix Kids Club"
    ],
    roomTypes: [
      {
        id: "room-dxb-adm-deluxe",
        name: "Deluxe Marina View Room",
        type: "DELUXE",
        description: "40 sq.m guestroom with private balcony framing yachts berthed in Dubai Marina.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "40 sq.m",
        price: 19500,
        pricePerNight: 19500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Marina Balcony", "Free Wi-Fi", "Espresso Machine", "Deep Soak Tub"]
      },
      {
        id: "room-dxb-adm-suite",
        name: "Grand Suite Marina View",
        type: "SUITE",
        description: "70 sq.m suite featuring separate living room, corner balcony, and marina panorama.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "70 sq.m",
        price: 34000,
        pricePerNight: 34000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Corner Marina Balcony", "Separate Living Room", "Club Lounge Access", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Address Dubai Marina infinity pool deck",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.addresshotels.com/en/hotels/address-dubai-marina/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-dxb-marriott-palm-jumeirah",
    destinationId: "dest-dubai",
    name: "Marriott Resort Palm Jumeirah, Dubai",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    fullAddress: "Palm West Beach, Palm Jumeirah, Dubai, United Arab Emirates",
    address: "Palm West Beach, Palm Jumeirah, Dubai",
    latitude: 25.1167,
    longitude: 55.1389,
    description: "Beachfront resort located on vibrant Palm West Beach promenade, featuring 75-meter outdoor pool with swim-up bar, Saray Spa, Cucina trattoria, and beach clubs.",
    shortDescription: "Lively beachfront resort on Palm West Beach with 75-meter pool and vibrant promenade.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.marriott.com/hotels/travel/dxbpj-marriott-resort-palm-jumeirah-dubai/",
    phone: "+971 4 666 1111",
    email: "marriott.palmjumeirah@marriott.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 608,
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
    pricePerNight: 18000,
    amenities: [
      "Palm West Beach Direct Access",
      "75-Meter Oceanfront Swimming Pool",
      "Saray Spa",
      "10 Dining Venues & Bars",
      "Free High-Speed Wi-Fi",
      "Kids Club & Water Play Zone",
      "M Club Lounge"
    ],
    roomTypes: [
      {
        id: "room-dxb-marriott-palm-sea",
        name: "Palm Sea View King Room",
        type: "DELUXE",
        description: "41 sq.m room with private balcony framing Palm West Beach and Dubai Marina skyline.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "41 sq.m",
        price: 18000,
        pricePerNight: 18000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Palm West Beach Balcony", "Free Wi-Fi", "Walk-in Shower", "Air Conditioning"]
      },
      {
        id: "room-dxb-marriott-palm-suite",
        name: "M Club Executive Sea View Suite",
        type: "SUITE",
        description: "82 sq.m suite with separate salon, M Club lounge privileges, and panoramic sea vistas.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "82 sq.m",
        price: 32000,
        pricePerNight: 32000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["M Club Lounge Access", "Separate Living Room", "Marina Skyline View", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Marriott Resort Palm Jumeirah beachfront",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/dxbpj-marriott-resort-palm-jumeirah-dubai/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-dxb-hilton-jumeirah",
    destinationId: "dest-dubai",
    name: "Hilton Dubai Jumeirah",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    fullAddress: "The Walk, Jumeirah Beach Residence, Dubai, United Arab Emirates",
    address: "The Walk, JBR, Dubai",
    latitude: 25.0792,
    longitude: 55.1333,
    description: "Located on The Walk at Jumeirah Beach Residence (JBR), offering private beach access, palm-fringed swimming pool, Wavebreaker beach bar, and BiCE Italian dining.",
    shortDescription: "Beachfront 5-star hotel right on The Walk at JBR with private beach and BiCE Italian dining.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.hilton.com/en/hotels/dxbjbhi-hilton-dubai-jumeirah/",
    phone: "+971 4 399 1111",
    email: "info.jumeirah@hilton.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 389,
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
      "Private JBR Beachfront",
      "Outdoor Swimming Pool & Gardens",
      "Wavebreaker Beach Bar & Grill",
      "BiCE Ristorante",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "The Walk JBR Direct Access"
    ],
    roomTypes: [
      {
        id: "room-dxb-hilton-jbr-deluxe",
        name: "Deluxe Sea View Room",
        type: "DELUXE",
        description: "38 sq.m room with balcony framing Ain Dubai observation wheel and Arabian Gulf.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "38 sq.m",
        price: 16000,
        pricePerNight: 16000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Sea & Ain Dubai View", "Balcony", "Free Wi-Fi", "Air Conditioning"]
      },
      {
        id: "room-dxb-hilton-jbr-suite",
        name: "Executive Gulf Suite",
        type: "SUITE",
        description: "69 sq.m suite with Executive Lounge privileges, separate living room, and beach views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "69 sq.m",
        price: 27000,
        pricePerNight: 27000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Executive Lounge Privileges", "Separate Living Room", "Beach View", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Hilton Dubai Jumeirah beach resort",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hilton.com/en/hotels/dxbjbhi-hilton-dubai-jumeirah/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-dxb-ritz-carlton",
    destinationId: "dest-dubai",
    name: "The Ritz-Carlton, Dubai",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    fullAddress: "Al Mamsha Street, Jumeirah Beach Residence, Dubai, United Arab Emirates",
    address: "Al Mamsha Street, JBR, Dubai",
    latitude: 25.0836,
    longitude: 55.1378,
    description: "Low-rise Mediterranean beachfront enclave in JBR surrounded by landscaped rose gardens, offering 350 meters of private white sand beach, 6 swimming pools, and The Ritz-Carlton Spa.",
    shortDescription: "Intimate Mediterranean-style luxury beachfront enclave in JBR with 350m private beach.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.ritzcarlton.com/en/hotels/dubai/dubai-beach",
    phone: "+971 4 399 4000",
    email: "dubai.leads@ritzcarlton.com",
    checkInTime: "15:00",
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
    pricePerNight: 32000,
    amenities: [
      "350-Meter Private White Sand Beach",
      "6 Outdoor Swimming Pools",
      "The Ritz-Carlton Spa",
      "Blue Jade Asian & Splendido Italian Dining",
      "Free High-Speed Wi-Fi",
      "Ritz Kids Club",
      "Private Butler Service"
    ],
    roomTypes: [
      {
        id: "room-dxb-rc-deluxe-sea",
        name: "Deluxe Sea-Facing Room",
        type: "DELUXE",
        description: "50 sq.m Mediterranean-accented room with private balcony looking out onto the Arabian Gulf.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "50 sq.m",
        price: 32000,
        pricePerNight: 32000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Gulf View Balcony", "Free Wi-Fi", "Marble Bathroom", "Asprey Amenities"]
      },
      {
        id: "room-dxb-rc-club-suite",
        name: "Club Ocean Suite",
        type: "SUITE",
        description: "108 sq.m suite with dedicated Ritz-Carlton Club Lounge access and personal concierge.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "108 sq.m",
        price: 58000,
        pricePerNight: 58000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Club Lounge 5 Presentations", "Ocean Balcony", "Personal Concierge", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Ritz-Carlton Dubai beachfront gardens",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.ritzcarlton.com/en/hotels/dubai/dubai-beach",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-dxb-ja-ocean-view",
    destinationId: "dest-dubai",
    name: "JA Ocean View Hotel",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    fullAddress: "The Walk, Jumeirah Beach Residence, Dubai, United Arab Emirates",
    address: "The Walk, JBR, Dubai",
    latitude: 25.0747,
    longitude: 55.1306,
    description: "Lively 4-star superior hotel located along The Walk at JBR, guaranteeing 100% sea views from every room, infinity edge pool, Il Motto deli, and Motorino pizza.",
    shortDescription: "Vibrant hotel on The Walk at JBR with guaranteed sea views from every room.",
    category: "FOUR_STAR",
    rating: 4.4,
    officialWebsite: "https://www.jaresortshotels.com/dubai/ja-ocean-view-hotel",
    phone: "+971 4 814 5599",
    email: "ovh@jaresorts.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 346,
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
      "Guaranteed Arabian Gulf Sea Views",
      "Infinity Edge Swimming Pool",
      "Public Beach Steps Away",
      "Motorino Pizza & Il Motto Dining",
      "Free High-Speed Wi-Fi",
      "Calm Spa & Salon",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-dxb-ja-sea-king",
        name: "Sea View King Room",
        type: "DOUBLE",
        description: "39 sq.m guestroom with private balcony guaranteeing direct open sea views.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "39 sq.m",
        price: 12000,
        pricePerNight: 12000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Guaranteed Sea View", "Balcony", "Free Wi-Fi", "Walk-in Shower"]
      },
      {
        id: "room-dxb-ja-club-suite",
        name: "Club Sea View Suite",
        type: "SUITE",
        description: "75 sq.m corner suite with Coral Lounge privileges and panoramic Ain Dubai wheel view.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "75 sq.m",
        price: 21000,
        pricePerNight: 21000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Coral Lounge Access", "Corner Sea Balcony", "Living Area", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "JA Ocean View Hotel JBR view",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.jaresortshotels.com/dubai/ja-ocean-view-hotel",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = dubaiHotels;
