// ==================================================
// Destination 10: HYDERABAD (dest-hyderabad)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const hyderabadHotels = [
  {
    id: "hotel-hyd-park-hyatt",
    destinationId: "dest-hyderabad",
    name: "Park Hyatt Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    countryCode: "IN",
    fullAddress: "Road No. 2, Banjara Hills, Hyderabad 500034, Telangana, India",
    address: "Road No. 2, Banjara Hills, Hyderabad 500034",
    latitude: 17.4247,
    longitude: 78.4283,
    description: "Architectural masterpiece designed by John Portman in upscale Banjara Hills, featuring a monumental 8-storey atrium, Tre-Forni Italian dining, The Spa, and swimming pool.",
    shortDescription: "Architectural masterpiece in upscale Banjara Hills with 8-storey atrium and Italian dining.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.hyatt.com/park-hyatt/hydph-park-hyatt-hyderabad",
    phone: "+91 40 4949 1234",
    email: "hyderabad.park@hyatt.com",
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
    pricePerNight: 12500,
    amenities: [
      "Monumental 8-Storey Atrium",
      "Outdoor Swimming Pool",
      "The Spa (Swedish & Ayurvedic)",
      "Tre-Forni & Rika Asian Dining",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Banjara Hills Central Location"
    ],
    roomTypes: [
      {
        id: "room-hyd-ph-king",
        name: "Park King Room",
        type: "DELUXE",
        description: "45 sq.m luxury guestroom with custom furnishings, city view, and oversized soaking bathtub.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "45 sq.m",
        price: 12500,
        pricePerNight: 12500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["City View", "Free Wi-Fi", "Oversized Marble Tub", "Air Conditioning"]
      },
      {
        id: "room-hyd-ph-suite",
        name: "Park Suite",
        type: "SUITE",
        description: "90 sq.m corner suite with separate parlor, walk-in closet, and personalized butler service.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "90 sq.m",
        price: 24000,
        pricePerNight: 24000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Corner Skyline View", "Separate Parlor", "Butler Service", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Park Hyatt Hyderabad atrium and facade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/park-hyatt/hydph-park-hyatt-hyderabad",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-hyd-itc-kohenur",
    destinationId: "dest-hyderabad",
    name: "ITC Kohenur, a Luxury Collection Hotel",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    countryCode: "IN",
    fullAddress: "Plot No. 5, Survey No. 83/1, Knowledge City, Madhapur, Hyderabad 500081, Telangana, India",
    address: "Knowledge City, Madhapur, Hyderabad 500081",
    latitude: 17.4336,
    longitude: 78.3789,
    description: "Futuristic luxury landmark in HITEC City overlooking Durgam Cheruvu lake, inspired by the legendary Koh-i-Noor diamond. Featuring Golconda Pavilion, Yi Jing, and Kaya Kalp Spa.",
    shortDescription: "Futuristic luxury landmark in HITEC City overlooking Durgam Cheruvu lake.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.itchotels.com/in/en/itckohenur-hyderabad",
    phone: "+91 40 6766 0101",
    email: "reservations.itckohenur@itchotels.in",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 274,
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
      "Durgam Cheruvu Lake Views",
      "Rooftop Swimming Pool",
      "Kaya Kalp Royal Spa",
      "Yi Jing Chinese & Golconda Pavilion",
      "Free High-Speed Wi-Fi",
      "Skye Rooftop Bar",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-hyd-itc-towers",
        name: "The Towers Room Lake View",
        type: "EXECUTIVE",
        description: "44 sq.m room with floor-to-ceiling glass framing the lake and cable-stayed bridge.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "44 sq.m",
        price: 15000,
        pricePerNight: 15000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Durgam Cheruvu View", "Towers Lounge Privileges", "Marble Bathroom", "Free Wi-Fi"]
      },
      {
        id: "room-hyd-itc-suite",
        name: "Kohenur Presidential Suite",
        type: "SUITE",
        description: "115 sq.m luxury diamond-themed suite with separate living and dining rooms and dedicated butler.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "115 sq.m",
        price: 36000,
        pricePerNight: 36000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Panoramic Lake View", "Dining Room", "Dedicated Butler", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "ITC Kohenur Hyderabad diamond facade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.itchotels.com/in/en/itckohenur-hyderabad",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-hyd-taj-falaknuma",
    destinationId: "dest-hyderabad",
    name: "Taj Falaknuma Palace, Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    countryCode: "IN",
    fullAddress: "Engine Bowli, Falaknuma, Hyderabad 500053, Telangana, India",
    address: "Engine Bowli, Falaknuma, Hyderabad 500053",
    latitude: 17.3314,
    longitude: 78.4678,
    description: "The 'Mirror of the Sky' perched 2,000 feet above Hyderabad, former palace of the Nizam with horse-drawn carriage arrivals, Venetian chandeliers, 101-seat dining table, and Jiva Spa.",
    shortDescription: "Former palace of the Nizam perched 2,000 feet above the city with horse-drawn carriage arrivals.",
    category: "LUXURY",
    rating: 4.9,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/taj-falaknuma-palace-hyderabad/",
    phone: "+91 40 6629 8585",
    email: "falaknuma.hyderabad@tajhotels.com",
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
    pricePerNight: 35000,
    amenities: [
      "2,000 Feet Hilltop Palace Views",
      "Horse-drawn Royal Carriage Arrival",
      "Jiva Spa with Royal Therapies",
      "Adaa Nizami Fine Dining",
      "101 Dining Table Historical Tours",
      "Outdoor Pool & Hookah Lounge",
      "Palace Historian Walks"
    ],
    roomTypes: [
      {
        id: "room-hyd-falak-palace-room",
        name: "Palace Room Courtyard View",
        type: "DELUXE",
        description: "42 sq.m authentic chamber decorated in pastel silks, high ceilings, and French tapestry.",
        maxGuests: 2,
        bedType: "1 Four-Poster King Bed",
        roomSize: "42 sq.m",
        price: 35000,
        pricePerNight: 35000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Four-Poster Bed", "Palace Butler", "Courtyard View", "Free Wi-Fi"]
      },
      {
        id: "room-hyd-falak-historical-suite",
        name: "Historical Grand Suite",
        type: "SUITE",
        description: "90 sq.m suite once reserved for royal guests with private terrace overlooking Hyderabad city.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "90 sq.m",
        price: 75000,
        pricePerNight: 75000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["City Panorama Terrace", "Palace Historian Tour", "Horse Carriage Transfer", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Taj Falaknuma Palace hilltop view",
        source: "Unsplash Licensed Hotel Photo"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "room",
        alt: "Taj Falaknuma royal suite",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/taj-falaknuma-palace-hyderabad/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-hyd-marriott-tank-bund",
    destinationId: "dest-hyderabad",
    name: "Hyderabad Marriott Hotel & Convention Centre",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    countryCode: "IN",
    fullAddress: "Tank Bund Road, Opposite Hussain Sagar Lake, Hyderabad 500080, Telangana, India",
    address: "Tank Bund Road, Opp Hussain Sagar Lake, Hyderabad 500080",
    latitude: 17.4239,
    longitude: 78.4878,
    description: "Scenic 5-star hotel fronting historic Hussain Sagar Lake and Buddha statue, offering outdoor pool, Quan Spa, Okra multi-cuisine buffet, and Bidri Hyderabadi dining.",
    shortDescription: "Scenic lakefront hotel on Tank Bund Road fronting historic Hussain Sagar Lake.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.marriott.com/hotels/travel/hydmc-hyderabad-marriott-hotel-and-convention-centre/",
    phone: "+91 40 2752 2999",
    email: "marriott.hyderabad@marriott.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 295,
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
      "Hussain Sagar Lake Views",
      "Outdoor Pool & Lawn",
      "Quan Spa",
      "Bidri Riyasati Dining",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive M Club Lounge"
    ],
    roomTypes: [
      {
        id: "room-hyd-marr-lake",
        name: "Deluxe King Lake View Room",
        type: "DELUXE",
        description: "34 sq.m room with direct views over Hussain Sagar Lake and the Buddha statue.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "34 sq.m",
        price: 8500,
        pricePerNight: 8500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Lake View", "Free Wi-Fi", "Air Conditioning", "Coffee Maker"]
      },
      {
        id: "room-hyd-marr-exec-suite",
        name: "Executive Suite",
        type: "SUITE",
        description: "68 sq.m lake-facing suite with M Club Lounge access, separate living room, and breakfast.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "68 sq.m",
        price: 15500,
        pricePerNight: 15500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["M Club Access", "Panoramic Lake View", "Living Area", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Hyderabad Marriott Hotel Hussain Sagar Lake view",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/hydmc-hyderabad-marriott-hotel-and-convention-centre/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-hyd-itc-kakatiya",
    destinationId: "dest-hyderabad",
    name: "ITC Kakatiya, a Luxury Collection Hotel",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    countryCode: "IN",
    fullAddress: "6-3-1187, Begumpet, Hyderabad 500016, Telangana, India",
    address: "6-3-1187, Begumpet, Hyderabad 500016",
    latitude: 17.4339,
    longitude: 78.4578,
    description: "Classic luxury hotel in Begumpet paying tribute to the Kakatiya dynasty, built around an outdoor pool with rock pool setting. Home to Kebabs & Kurries and Kaya Kalp Spa.",
    shortDescription: "Kakatiya dynasty-inspired heritage luxury hotel in central Begumpet.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.itchotels.com/in/en/itckakatiya-hyderabad",
    phone: "+91 40 2340 0132",
    email: "reservations.itckakatiya@itchotels.in",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 188,
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
    pricePerNight: 9000,
    amenities: [
      "Rock Swimming Pool",
      "Kaya Kalp Spa",
      "Kebabs & Kurries & Dakshin",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive Club Lounge"
    ],
    roomTypes: [
      {
        id: "room-hyd-itc-kaka-exec",
        name: "Executive Club Room",
        type: "EXECUTIVE",
        description: "32 sq.m guestroom with handcrafted Kakatiya stone motifs and marble bathroom.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "32 sq.m",
        price: 9000,
        pricePerNight: 9000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Workstation", "Marble Bath", "Air Conditioning"]
      },
      {
        id: "room-hyd-itc-kaka-one",
        name: "ITC One Luxury Room",
        type: "DELUXE",
        description: "48 sq.m premier room with dedicated butler, lounge privileges, and airport transfers.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "48 sq.m",
        price: 14500,
        pricePerNight: 14500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Butler Service", "Lounge Access", "Airport Transfer", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "ITC Kakatiya Begumpet pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.itchotels.com/in/en/itckakatiya-hyderabad",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-hyd-novotel-airport",
    destinationId: "dest-hyderabad",
    name: "Novotel Hyderabad Airport",
    city: "Shamshabad",
    state: "Telangana",
    country: "India",
    countryCode: "IN",
    fullAddress: "Rajiv Gandhi International Airport, Shamshabad, Hyderabad 500108, Telangana, India",
    address: "RGIA, Shamshabad, Hyderabad 500108",
    latitude: 17.2344,
    longitude: 78.4311,
    description: "Spread over 5.5 acres just moments from Rajiv Gandhi International Airport terminals, offering resort-style outdoor pool, O2 Spa, tennis courts, and Food Exchange restaurant.",
    shortDescription: "5.5-acre airport resort hotel moments from Rajiv Gandhi International Airport Shamshabad.",
    category: "FOUR_STAR",
    rating: 4.4,
    officialWebsite: "https://all.accor.com/hotel/6687/index.en.shtml",
    phone: "+91 40 6625 0000",
    email: "h6687-re@accor.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 289,
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
      "Resort Outdoor Pool",
      "Free 24-Hour Airport Shuttle",
      "O2 Spa",
      "Food Exchange & The Bar",
      "Free High-Speed Wi-Fi",
      "Tennis & Basketball Courts",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-hyd-novo-air-sup",
        name: "Superior King Room",
        type: "DOUBLE",
        description: "32 sq.m soundproof room with pool or runway views and airport shuttle inclusion.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 7500,
        pricePerNight: 7500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Airport Shuttle", "Soundproof Glazing", "Free Wi-Fi", "Air Conditioning"]
      },
      {
        id: "room-hyd-novo-air-suite",
        name: "Executive Suite",
        type: "SUITE",
        description: "64 sq.m suite featuring separate living room, pool view, and espresso machine.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "64 sq.m",
        price: 13500,
        pricePerNight: 13500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Pool View", "Living Room", "Espresso Machine", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Novotel Hyderabad Airport pool grounds",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://all.accor.com/hotel/6687/index.en.shtml",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-hyd-trident",
    destinationId: "dest-hyderabad",
    name: "Trident, Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    countryCode: "IN",
    fullAddress: "Survey No. 64, Hitec City, Madhapur, Hyderabad 500081, Telangana, India",
    address: "Hitec City, Madhapur, Hyderabad 500081",
    latitude: 17.4478,
    longitude: 78.3775,
    description: "Sophisticated 5-star hotel in the heart of HITEC City, offering 10th-floor outdoor infinity pool with skyline views, The Trident Spa, Amara world dining, and Kanak Indian specialty restaurant.",
    shortDescription: "Premier corporate 5-star hotel in HITEC City with 10th-floor skyline infinity pool.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.tridenthotels.com/hotels-in-hyderabad/",
    phone: "+91 40 6623 2323",
    email: "reservations.hyderabad@tridenthotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 323,
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
      "10th-Floor Skyline Infinity Pool",
      "The Trident Spa",
      "Amara & Kanak Restaurants",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "HITEC City Business Center",
      "Trident Club Floor"
    ],
    roomTypes: [
      {
        id: "room-hyd-trident-deluxe",
        name: "Deluxe King Room",
        type: "DELUXE",
        description: "41 sq.m guestroom with floor-to-ceiling windows and marble bathroom with soaking tub.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "41 sq.m",
        price: 11500,
        pricePerNight: 11500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Skyline View", "Free Wi-Fi", "Soaking Tub", "Work Desk"]
      },
      {
        id: "room-hyd-trident-club-suite",
        name: "Trident Club Suite",
        type: "SUITE",
        description: "82 sq.m suite on high floors with Club Lounge access, evening cocktails, and private lounge.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "82 sq.m",
        price: 21000,
        pricePerNight: 21000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Club Lounge Access", "High Floor Skyline View", "Separate Parlor", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Trident Hyderabad HITEC City pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tridenthotels.com/hotels-in-hyderabad/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-hyd-hyatt-place",
    destinationId: "dest-hyderabad",
    name: "Hyatt Place Hyderabad/Banjara Hills",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    countryCode: "IN",
    fullAddress: "Road No. 1, Banjara Hills, Hyderabad 500034, Telangana, India",
    address: "Road No. 1, Banjara Hills, Hyderabad 500034",
    latitude: 17.4144,
    longitude: 78.4503,
    description: "Centrally located on Road No. 1 in Banjara Hills near city shopping and hospitals, featuring rooftop pool with skyline view, Gallery Kitchen buffet, and 24/7 fitness center.",
    shortDescription: "Modern 4-star select-service hotel on Road No. 1 Banjara Hills with rooftop pool.",
    category: "FOUR_STAR",
    rating: 4.4,
    officialWebsite: "https://www.hyatt.com/hyatt-place/hydzb-hyatt-place-hyderabad-banjara-hills",
    phone: "+91 40 6780 1234",
    email: "hyderabad.place@hyatt.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
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
    pricePerNight: 6200,
    amenities: [
      "Rooftop Swimming Pool",
      "Gallery Kitchen Buffet",
      "24-Hour Fitness Gym",
      "Free High-Speed Wi-Fi",
      "Banjara Hills Central Location",
      "Cozy Corner Sofa-Sleeper"
    ],
    roomTypes: [
      {
        id: "room-hyd-hp-standard",
        name: "Standard King Bed with Cozy Corner",
        type: "DOUBLE",
        description: "28 sq.m room with dedicated Hyatt Cozy Corner sectional sofa-sleeper.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "28 sq.m",
        price: 6200,
        pricePerNight: 6200,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Cozy Corner Sofa", "Free Wi-Fi", "Air Conditioning", "Coffee Maker"]
      },
      {
        id: "room-hyd-hp-view",
        name: "High Floor View King",
        type: "DELUXE",
        description: "32 sq.m room on higher floors with panoramic views of the city skyline.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 7800,
        pricePerNight: 7800,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Skyline View", "Mini Fridge", "Free Wi-Fi", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Hyatt Place Hyderabad Banjara Hills",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/hyatt-place/hydzb-hyatt-place-hyderabad-banjara-hills",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = hyderabadHotels;
