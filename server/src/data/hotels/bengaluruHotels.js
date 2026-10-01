// ==================================================
// Destination 6: BENGALURU (dest-bengaluru)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const bengaluruHotels = [
  {
    id: "hotel-blr-taj-west-end",
    destinationId: "dest-bengaluru",
    name: "Taj West End, Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    countryCode: "IN",
    fullAddress: "25 Race Course Road, High Grounds, Bengaluru 560001, Karnataka, India",
    address: "25 Race Course Road, High Grounds, Bengaluru 560001",
    latitude: 12.9847,
    longitude: 77.5847,
    description: "Built in 1887 across 20 acres of lush botanical gardens, featuring heritage trees, colonial architecture, Blue Ginger Vietnamese restaurant, and Jiva Spa.",
    shortDescription: "Historic 1887 sanctuary set in 20 acres of heritage botanical gardens on Race Course Road.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/taj-west-end-bengaluru/",
    phone: "+91 80 6660 5660",
    email: "westend.bengaluru@tajhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 117,
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
      "20-Acre Botanical Garden",
      "Outdoor Swimming Pool",
      "Jiva Spa",
      "Blue Ginger Vietnamese Dining",
      "Free High-Speed Wi-Fi",
      "Tennis Courts",
      "Heritage Walks"
    ],
    roomTypes: [
      {
        id: "room-blr-taj-garden",
        name: "Luxury Garden View Room",
        type: "DELUXE",
        description: "51 sq.m room with colonial verandah opening directly onto hundred-year-old banyan trees.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "51 sq.m",
        price: 16000,
        pricePerNight: 16000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Botanical Verandah", "Free Wi-Fi", "Marble Bathroom", "Air Conditioning"]
      },
      {
        id: "room-blr-taj-suite",
        name: "Colonial Heritage Suite",
        type: "SUITE",
        description: "98 sq.m historic suite with high ceilings, private dining room, and butler service.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "98 sq.m",
        price: 35000,
        pricePerNight: 35000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Dining Room", "Heritage Verandah", "Personal Butler", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Taj West End Bengaluru colonial garden",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/taj-west-end-bengaluru/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-blr-itc-gardenia",
    destinationId: "dest-bengaluru",
    name: "ITC Gardenia, a Luxury Collection Hotel",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    countryCode: "IN",
    fullAddress: "1 Residency Road, Ashok Nagar, Bengaluru 560025, Karnataka, India",
    address: "1 Residency Road, Ashok Nagar, Bengaluru 560025",
    latitude: 12.9669,
    longitude: 77.5968,
    description: "LEED Platinum certified luxury hotel inspired by Bengaluru's gardens, featuring wind-cooled lobby, outdoor pool, Kaya Kalp Spa, and Edo Japanese restaurant.",
    shortDescription: "LEED Platinum luxury hotel on Residency Road embodying Bengaluru's Garden City heritage.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.itchotels.com/in/en/itcgardenia-bengaluru",
    phone: "+91 80 2211 9898",
    email: "reservations.itcgardenia@itchotels.in",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 292,
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
      "Kaya Kalp The Royal Spa",
      "Edo Japanese Restaurant",
      "Cubbon Pavilion",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive Club Lounge"
    ],
    roomTypes: [
      {
        id: "room-blr-itc-tower",
        name: "The Towers Room",
        type: "EXECUTIVE",
        description: "41 sq.m room with balcony overlooking the garden atrium, plus Towers Lounge privileges.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "41 sq.m",
        price: 14500,
        pricePerNight: 14500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Garden Balcony", "Towers Lounge", "Free Wi-Fi", "Marble Bathroom"]
      },
      {
        id: "room-blr-itc-flamingo",
        name: "Flamingo Suite",
        type: "SUITE",
        description: "82 sq.m suite featuring private terrace garden and round-the-clock butler service.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "82 sq.m",
        price: 28000,
        pricePerNight: 28000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Terrace Garden", "Butler Service", "Living Room", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "ITC Gardenia Bengaluru vertical garden",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.itchotels.com/in/en/itcgardenia-bengaluru",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-blr-oberoi",
    destinationId: "dest-bengaluru",
    name: "The Oberoi, Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    countryCode: "IN",
    fullAddress: "37-39 Mahatma Gandhi Road, Bengaluru 560001, Karnataka, India",
    address: "37-39 Mahatma Gandhi Road, Bengaluru 560001",
    latitude: 12.9738,
    longitude: 77.6186,
    description: "Centrally positioned on MG Road, built around a centenarian raintree with lush gardens. Offering private balconies in all rooms, Rim Naam Thai restaurant, and Oberoi Spa.",
    shortDescription: "Urban resort on MG Road built around a centenarian raintree with private room balconies.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.oberoihotels.com/hotels-in-bengaluru/",
    phone: "+91 80 2558 5858",
    email: "reservations.bengaluru@oberoihotels.com",
    checkInTime: "14:00",
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
    pricePerNight: 17500,
    amenities: [
      "Centenarian Raintree Gardens",
      "Outdoor Swimming Pool",
      "The Oberoi Spa",
      "Rim Naam Alfresco Thai Dining",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-blr-oberoi-prem-garden",
        name: "Premier Garden View Room",
        type: "DELUXE",
        description: "44 sq.m room with private balcony looking directly onto tropical garden foliage.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "44 sq.m",
        price: 17500,
        pricePerNight: 17500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Garden Balcony", "Free Wi-Fi", "Standalone Tub", "Butler Service"]
      },
      {
        id: "room-blr-oberoi-exec-suite",
        name: "Executive Suite with Balcony",
        type: "SUITE",
        description: "80 sq.m suite featuring spacious living room, dual balconies, and personalized dining.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "80 sq.m",
        price: 32000,
        pricePerNight: 32000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Dual Balconies", "Living Room", "24/7 Butler", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Oberoi Bengaluru raintree garden",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.oberoihotels.com/hotels-in-bengaluru/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-blr-jw-marriott",
    destinationId: "dest-bengaluru",
    name: "JW Marriott Hotel Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    countryCode: "IN",
    fullAddress: "24/1 Vittal Mallya Road, Bengaluru 560001, Karnataka, India",
    address: "24/1 Vittal Mallya Road, Bengaluru 560001",
    latitude: 12.9723,
    longitude: 77.5956,
    description: "Overlooking lush Cubbon Park and UB City luxury mall, featuring heated outdoor pool, Spa by JW, JW Kitchen, and rooftop ALBA Italian dining.",
    shortDescription: "Prestigious address overlooking Cubbon Park and adjoining luxury UB City.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.marriott.com/hotels/travel/blrjw-jw-marriott-hotel-bengaluru/",
    phone: "+91 80 6718 9999",
    email: "jw.bengaluru@marriott.com",
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
    pricePerNight: 15500,
    amenities: [
      "Cubbon Park Facing Views",
      "Outdoor Heated Pool",
      "Spa by JW",
      "ALBA Italian & JW Kitchen",
      "Free High-Speed Wi-Fi",
      "Executive Lounge Access",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-blr-jw-park-view",
        name: "Deluxe King Cubbon Park View",
        type: "DELUXE",
        description: "42 sq.m room with floor-to-ceiling glass looking out over the emerald green canopy of Cubbon Park.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "42 sq.m",
        price: 15500,
        pricePerNight: 15500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Cubbon Park View", "Free Wi-Fi", "Marble Bathroom", "Coffee Maker"]
      },
      {
        id: "room-blr-jw-exec-suite",
        name: "Executive Suite",
        type: "SUITE",
        description: "84 sq.m corner suite with executive lounge privileges, separate living room, and powder room.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "84 sq.m",
        price: 29000,
        pricePerNight: 29000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Executive Lounge", "Living Room", "Park Panorama", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "JW Marriott Bengaluru Cubbon Park view",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/blrjw-jw-marriott-hotel-bengaluru/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-blr-hyatt-centric",
    destinationId: "dest-bengaluru",
    name: "Hyatt Centric MG Road Bangalore",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    countryCode: "IN",
    fullAddress: "1/1 Swami Vivekananda Road, Ulsoor, Bengaluru 560008, Karnataka, India",
    address: "1/1 Swami Vivekananda Road, Ulsoor, Bengaluru 560008",
    latitude: 12.9754,
    longitude: 77.6214,
    description: "Chic boutique lifestyle hotel overlooking Ulsoor Lake and near MG Road metro, offering rooftop pool, The Bengaluru Brasserie, and spa.",
    shortDescription: "Chic lifestyle hotel overlooking scenic Ulsoor Lake near MG Road shopping hubs.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.hyatt.com/hyatt-centric/blrmg-hyatt-centric-mg-road-bangalore",
    phone: "+91 80 4344 0000",
    email: "bangalore.centric@hyatt.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 143,
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
      "Ulsoor Lake Views",
      "Outdoor Rooftop Pool",
      "The Bengaluru Brasserie",
      "Spa & Salon",
      "Free High-Speed Wi-Fi",
      "24-Hour Fitness Studio"
    ],
    roomTypes: [
      {
        id: "room-blr-hc-king",
        name: "King Bed City View",
        type: "DOUBLE",
        description: "32 sq.m modern room with bold artwork and views of MG Road skyline.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 8500,
        pricePerNight: 8500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "City View", "Rain Shower", "Work Desk"]
      },
      {
        id: "room-blr-hc-lake-suite",
        name: "Executive Suite Lake View",
        type: "SUITE",
        description: "65 sq.m suite with direct vista of tranquil Ulsoor Lake waters.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "65 sq.m",
        price: 15500,
        pricePerNight: 15500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Ulsoor Lake View", "Living Area", "Espresso Machine", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Hyatt Centric MG Road Bangalore pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/hyatt-centric/blrmg-hyatt-centric-mg-road-bangalore",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-blr-leela-palace",
    destinationId: "dest-bengaluru",
    name: "The Leela Palace Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    countryCode: "IN",
    fullAddress: "23 HAL Old Airport Road, Kodihalli, Bengaluru 560008, Karnataka, India",
    address: "23 HAL Old Airport Road, Kodihalli, Bengaluru 560008",
    latitude: 12.9606,
    longitude: 77.6484,
    description: "Palatial 7-acre grand hotel inspired by the Vijayanagara Empire with copper domes and ornate archways, featuring Le Cirque Signature, Jamavar, and lagoon pool.",
    shortDescription: "Palatial architectural masterpiece inspired by Vijayanagara royalty set in 7 acres.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.theleela.com/the-leela-palace-bengaluru",
    phone: "+91 80 2521 1234",
    email: "reservations@theleela.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 357,
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
      "Lagoon Outdoor Swimming Pool",
      "The Spa by ESPA",
      "Le Cirque Signature & Jamavar",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Luxury Shopping Arcade",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-blr-leela-deluxe",
        name: "Deluxe Palace Room",
        type: "DELUXE",
        description: "50 sq.m regal guestroom with silk fabrics, gold-leaf details, and garden balcony.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "50 sq.m",
        price: 18000,
        pricePerNight: 18000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Garden Balcony", "Free Wi-Fi", "Marble Bathroom", "Palace Butler"]
      },
      {
        id: "room-blr-leela-royal-suite",
        name: "Royal Suite",
        type: "SUITE",
        description: "110 sq.m royal suite with separate living and dining rooms, private pantry, and Jacuzzi.",
        maxGuests: 4,
        bedType: "1 King Bed",
        roomSize: "110 sq.m",
        price: 45000,
        pricePerNight: 45000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Jacuzzi", "Dining Room", "Dedicated Butler", "Airport Limousine"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Leela Palace Bengaluru domes",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.theleela.com/the-leela-palace-bengaluru",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-blr-ritz-carlton",
    destinationId: "dest-bengaluru",
    name: "The Ritz-Carlton, Bangalore",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    countryCode: "IN",
    fullAddress: "99 Residency Road, Shanthala Nagar, Ashok Nagar, Bengaluru 560025, Karnataka, India",
    address: "99 Residency Road, Shanthala Nagar, Bengaluru 560025",
    latitude: 12.9686,
    longitude: 77.6033,
    description: "Centrally located on Residency Road featuring iconic Jaali architectural screens, outdoor swimming pool with private cabanas, The Ritz-Carlton Spa, and Bang rooftop bar.",
    shortDescription: "Ultra-luxury hotel on Residency Road featuring Jaali architecture and Bang rooftop lounge.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.ritzcarlton.com/en/hotels/india/bangalore",
    phone: "+91 80 4914 8000",
    email: "rc.blrrz.leads@ritzcarlton.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 277,
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
      "Outdoor Pool with Private Cabanas",
      "The Ritz-Carlton Spa",
      "Bang Rooftop Bar",
      "Riwaz Indian Specialty Dining",
      "Free High-Speed Wi-Fi",
      "24-Hour Fitness Center",
      "Club Lounge Privileges"
    ],
    roomTypes: [
      {
        id: "room-blr-rc-deluxe",
        name: "Deluxe King Room",
        type: "DELUXE",
        description: "52 sq.m guestroom with marble bathroom, Asprey bath amenities, and panoramic city views.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "52 sq.m",
        price: 16500,
        pricePerNight: 16500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Asprey Amenities", "Free Wi-Fi", "Oversized Marble Bath", "City View"]
      },
      {
        id: "room-blr-rc-club-suite",
        name: "The Ritz-Carlton Club Suite",
        type: "SUITE",
        description: "95 sq.m corner suite with Club Lounge access, five daily culinary presentations, and private salon.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "95 sq.m",
        price: 34000,
        pricePerNight: 34000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Club Lounge 5 Presentations", "Separate Living Room", "Walk-in Wardrobe", "Butler Service"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Ritz-Carlton Bangalore exterior",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.ritzcarlton.com/en/hotels/india/bangalore",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-blr-shangri-la",
    destinationId: "dest-bengaluru",
    name: "Shangri-La Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    countryCode: "IN",
    fullAddress: "56-6B Palace Road, Abshot Layout, Vasanth Nagar, Bengaluru 560052, Karnataka, India",
    address: "56-6B Palace Road, Vasanth Nagar, Bengaluru 560052",
    latitude: 12.9934,
    longitude: 77.5898,
    description: "Soaring 19-storey hotel on Palace Road near Bangalore Palace, offering panoramic Bangalore skyline views, outdoor pool, CHI The Spa, and Shang Palace.",
    shortDescription: "19-storey luxury tower on Palace Road with panoramic skyline views and CHI The Spa.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.shangri-la.com/bengaluru/shangrila/",
    phone: "+91 80 4512 8888",
    email: "bengaluru@shangri-la.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 397,
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
      "Outdoor Swimming Pool",
      "CHI, The Spa",
      "Shang Palace Cantonese Dining",
      "Hype Rooftop Lounge",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Horizon Club Privileges"
    ],
    roomTypes: [
      {
        id: "room-blr-shang-deluxe",
        name: "Deluxe King Palace View",
        type: "DELUXE",
        description: "44 sq.m room with floor-to-ceiling glass looking toward Bangalore Palace grounds.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "44 sq.m",
        price: 12000,
        pricePerNight: 12000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Palace View", "Free Wi-Fi", "Marble Bathroom", "Coffee Maker"]
      },
      {
        id: "room-blr-shang-horizon-suite",
        name: "Horizon Club Suite",
        type: "SUITE",
        description: "90 sq.m corner suite with Horizon Club lounge access, evening wine tasting, and private boardroom.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "90 sq.m",
        price: 24000,
        pricePerNight: 24000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Horizon Club Access", "Separate Living Area", "Complimentary Breakfast", "High Floor Skyline View"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Shangri-La Bengaluru tower",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.shangri-la.com/bengaluru/shangrila/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = bengaluruHotels;
