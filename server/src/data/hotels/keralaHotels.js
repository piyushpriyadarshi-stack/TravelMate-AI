// ==================================================
// Destination 9: KERALA (dest-kerala)
// 8 Verified Real Hotels across Distinct Kerala Regions:
// Kumarakom, Kochi, Bekal, Kovalam
// Each property stores its specific regional city & true geographic coordinates.
// ==================================================

const keralaHotels = [
  {
    id: "hotel-kerala-taj-kumarakom",
    destinationId: "dest-kerala",
    name: "Taj Kumarakom Resort & Spa, Kerala",
    city: "Kumarakom",
    state: "Kerala",
    country: "India",
    countryCode: "IN",
    fullAddress: "1/404, Kumarakom, Kottayam District 686563, Kerala, India",
    address: "1/404, Kumarakom, Kottayam 686563",
    latitude: 9.6192,
    longitude: 76.4308,
    description: "Built around a 19th-century colonial bungalow established by the missionary Henry Baker on the banks of Vembanad Lake, featuring traditional heritage villas, Jiva Spa, and lagoon boat cruises.",
    shortDescription: "19th-century colonial heritage sanctuary on the shores of serene Vembanad Lake in Kumarakom.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/taj-kumarakom-kerala/",
    phone: "+91 481 252 5831",
    email: "kumarakom.kerala@tajhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 28,
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
      "Vembanad Lake Frontage",
      "Outdoor Swimming Pool",
      "Jiva Ayurvedic Spa",
      "Baker's Gourmet Restaurant",
      "Traditional Houseboat Cruises",
      "Free High-Speed Wi-Fi",
      "Bird Watching Trails"
    ],
    roomTypes: [
      {
        id: "room-ker-taj-cottage",
        name: "Heritage Lagoon Cottage",
        type: "COTTAGE",
        description: "45 sq.m traditional wooden cottage with open-air garden bathroom and lagoon-facing veranda.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "45 sq.m",
        price: 17500,
        pricePerNight: 17500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Lagoon Veranda", "Open-air Shower", "Free Wi-Fi", "Air Conditioning"]
      },
      {
        id: "room-ker-taj-villa-pool",
        name: "Luxury Pool Villa",
        type: "VILLA",
        description: "85 sq.m secluded villa with private plunge pool and direct vistas over Vembanad Lake.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "85 sq.m",
        price: 32000,
        pricePerNight: 32000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Plunge Pool", "Vembanad Lake View", "Butler Service", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Taj Kumarakom Resort backwater lagoon",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/taj-kumarakom-kerala/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-kerala-kumarakom-lake-resort",
    destinationId: "dest-kerala",
    name: "Kumarakom Lake Resort",
    city: "Kumarakom",
    state: "Kerala",
    country: "India",
    countryCode: "IN",
    fullAddress: "Vayitharamattom, Kumarakom, Kottayam 686563, Kerala, India",
    address: "Vayitharamattom, Kumarakom, Kottayam 686563",
    latitude: 9.6053,
    longitude: 76.4258,
    description: "Celebrated luxury heritage retreat on the banks of Lake Vembanad, featuring 250-meter meandering swimming pool, reconstructed 16th-century ancestral Tharavadu manors, and Ayurmana spa.",
    shortDescription: "Celebrated heritage resort with 250m meandering pool and authentic ancestral villas.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.kumarakomlakeresort.in/",
    phone: "+91 481 252 4900",
    email: "klr@klresort.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 65,
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
      "250-Meter Meandering Pool",
      "Infinity Edge Lakefront Pool",
      "Ayurmana Traditional Ayurveda",
      "Ettukettu Multi-Cuisine Restaurant",
      "Sunset Houseboat Cruise",
      "Free High-Speed Wi-Fi",
      "Gym & Water Sports"
    ],
    roomTypes: [
      {
        id: "room-ker-klr-meandering",
        name: "Meandering Pool Villa",
        type: "VILLA",
        description: "55 sq.m traditional Kerala villa with private bathing ghat giving direct steps into the 250m pool.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "55 sq.m",
        price: 21000,
        pricePerNight: 21000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Direct Pool Access", "Open-air Jacuzzi", "Tharavadu Architecture", "Free Wi-Fi"]
      },
      {
        id: "room-ker-klr-pavilion",
        name: "Heritage Lake View Pavilion with Private Pool",
        type: "VILLA",
        description: "90 sq.m standalone pavilion with private courtyard, plunge pool, and panoramic lake view.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "90 sq.m",
        price: 38000,
        pricePerNight: 38000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Pool", "Lakefront Sunset View", "Personal Attendant", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Kumarakom Lake Resort meandering pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.kumarakomlakeresort.in/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-kerala-zuri-kumarakom",
    destinationId: "dest-kerala",
    name: "The Zuri Kumarakom, Kerala Resort & Spa",
    city: "Kumarakom",
    state: "Kerala",
    country: "India",
    countryCode: "IN",
    fullAddress: "V-235 A1 to A54, Karottukayal, Kumarakom 686563, Kerala, India",
    address: "Karottukayal, Kumarakom 686563",
    latitude: 9.6308,
    longitude: 76.4172,
    description: "18-acre luxury backwater resort fronting Lake Vembanad with India's largest resort lagoon pool, Maya Spa offering Western and Ayurvedic therapies, and lagoon villas.",
    shortDescription: "18-acre luxury retreat fronting Lake Vembanad featuring India's largest resort pool.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.thezurihotels.com/lake-resorts-in-kumarakom/",
    phone: "+91 481 252 7272",
    email: "reservations.kumarakom@thezurihotels.com",
    checkInTime: "14:00",
    checkOutTime: "11:00",
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
    pricePerNight: 13000,
    amenities: [
      "Massive Lagoon Swimming Pool",
      "Maya Spa (Ayurvedic & Western)",
      "Laguna Bass Seafood Restaurant",
      "Free High-Speed Wi-Fi",
      "Bamboo Rafting & Kayaking",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-ker-zuri-lagoon",
        name: "Zuri Deluxe Room Lagoon View",
        type: "DELUXE",
        description: "42 sq.m guestroom with private balcony overlooking the palm-lined central lagoon.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "42 sq.m",
        price: 13000,
        pricePerNight: 13000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Lagoon Balcony", "Free Wi-Fi", "Walk-in Shower", "Air Conditioning"]
      },
      {
        id: "room-ker-zuri-pool-villa",
        name: "Zuri Presidential Pool Villa",
        type: "VILLA",
        description: "110 sq.m ultimate luxury villa with private swimming pool and dedicated sun deck.",
        maxGuests: 4,
        bedType: "1 King Bed",
        roomSize: "110 sq.m",
        price: 29000,
        pricePerNight: 29000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Pool", "Sun Deck", "Living Area", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Zuri Kumarakom lagoon pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.thezurihotels.com/lake-resorts-in-kumarakom/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-kerala-le-meridien-kochi",
    destinationId: "dest-kerala",
    name: "Le Méridien Kochi",
    city: "Kochi",
    state: "Kerala",
    country: "India",
    countryCode: "IN",
    fullAddress: "Maradu, Nettoor, Kochi 682304, Kerala, India",
    address: "Maradu, Nettoor, Kochi 682304",
    latitude: 9.9287,
    longitude: 76.3214,
    description: "Spread over 14 acres of calm backwater lagoons in South Kochi, offering outdoor swimming pool, Le Spa, Latest Recipe international dining, and convention center.",
    shortDescription: "14-acre backwater resort in South Kochi with serene lagoon vistas and Le Spa.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.marriott.com/hotels/travel/cokmd-le-meridien-kochi/",
    phone: "+91 484 270 5777",
    email: "lemeridien.kochi@marriott.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 223,
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
      "Backwater Lagoon Waterfront",
      "Outdoor Swimming Pool",
      "Le Spa Ayurvedic Treatments",
      "Latest Recipe Restaurant",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Helipad"
    ],
    roomTypes: [
      {
        id: "room-ker-lm-deluxe",
        name: "Deluxe King Lagoon View",
        type: "DELUXE",
        description: "38 sq.m guestroom with panoramic vistas over the backwater lagoons of Kochi.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "38 sq.m",
        price: 7500,
        pricePerNight: 7500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Lagoon View", "Free Wi-Fi", "Air Conditioning", "Bathtub"]
      },
      {
        id: "room-ker-lm-suite",
        name: "Executive Suite",
        type: "SUITE",
        description: "72 sq.m suite featuring separate living room, balcony, and club lounge privileges.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "72 sq.m",
        price: 14500,
        pricePerNight: 14500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Separate Living Room", "Club Lounge Access", "Lagoon Balcony", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Le Méridien Kochi backwater lagoon pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/cokmd-le-meridien-kochi/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-kerala-grand-hyatt-bolgatty",
    destinationId: "dest-kerala",
    name: "Grand Hyatt Kochi Bolgatty",
    city: "Kochi",
    state: "Kerala",
    country: "India",
    countryCode: "IN",
    fullAddress: "Mulavukad, Bolgatty Island, Kochi 682504, Kerala, India",
    address: "Mulavukad, Bolgatty Island, Kochi 682504",
    latitude: 9.9886,
    longitude: 76.2694,
    description: "Waterfront luxury resort perched on Bolgatty Island with dramatic vistas of Lake Vembanad and the Kochi cityscape, offering Santata Spa and Malabar Cafe.",
    shortDescription: "Waterfront island resort on Bolgatty Island with spectacular Kochi city skyline views.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.hyatt.com/grand-hyatt/cokgh-grand-hyatt-kochi-bolgatty",
    phone: "+91 484 266 1234",
    email: "kochi.grand@hyatt.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 264,
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
      "Island Waterfront Setting",
      "Indoor & Outdoor Pools",
      "Santata Ayurvedic Spa",
      "Malabar Cafe & Thai Soul Dining",
      "Free High-Speed Wi-Fi",
      "Marina Access & Helipad",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-ker-gh-lake-view",
        name: "Grand King Lake View Room",
        type: "DELUXE",
        description: "41 sq.m guestroom with floor-to-ceiling glass framing backwaters and Kochi harbor.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "41 sq.m",
        price: 12500,
        pricePerNight: 12500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Lake View", "Free Wi-Fi", "Walk-in Shower", "Air Conditioning"]
      },
      {
        id: "room-ker-gh-suite",
        name: "Grand Executive Suite",
        type: "SUITE",
        description: "82 sq.m suite with separate parlor, Grand Club lounge privileges, and water panorama.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "82 sq.m",
        price: 23000,
        pricePerNight: 23000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Grand Club Access", "Separate Parlor", "Waterfront Panorama", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Grand Hyatt Kochi Bolgatty waterfront",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/grand-hyatt/cokgh-grand-hyatt-kochi-bolgatty",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-kerala-taj-malabar",
    destinationId: "dest-kerala",
    name: "Taj Malabar Resort & Spa, Cochin",
    city: "Kochi",
    state: "Kerala",
    country: "India",
    countryCode: "IN",
    fullAddress: "Willingdon Island, Kochi 682009, Kerala, India",
    address: "Willingdon Island, Kochi 682009",
    latitude: 9.9678,
    longitude: 76.2636,
    description: "Located on the tip of Willingdon Island overlooking Cochin harbor with views of dolphins in the channel. Features infinity pool, The Rice Boat seafood restaurant, and Jiva Spa.",
    shortDescription: "Historic harbor island hotel on Willingdon Island famous for The Rice Boat seafood dining.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/taj-malabar-cochin/",
    phone: "+91 484 664 3000",
    email: "malabar.cochin@tajhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 96,
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
      "Harbor & Dolphin Channel Views",
      "Infinity Edge Swimming Pool",
      "Jiva Spa",
      "The Rice Boat Specialty Seafood",
      "Luxury Yacht Sunset Cruises",
      "Free High-Speed Wi-Fi",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-ker-taj-malabar-tower",
        name: "Tower Wing Sea View Room",
        type: "DELUXE",
        description: "38 sq.m room with picture windows framing passing ships and Chinese fishing nets.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "38 sq.m",
        price: 14000,
        pricePerNight: 14000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Harbor View", "Free Wi-Fi", "Marble Bathroom", "Air Conditioning"]
      },
      {
        id: "room-ker-taj-malabar-suite",
        name: "Heritage Corner Suite",
        type: "SUITE",
        description: "65 sq.m historic suite with colonial decor, separate living room, and harbor views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "65 sq.m",
        price: 26000,
        pricePerNight: 26000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Harbor Panorama", "Colonial Living Room", "Butler Service", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Taj Malabar Resort Cochin harbor infinity pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/taj-malabar-cochin/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-kerala-taj-bekal",
    destinationId: "dest-kerala",
    name: "Taj Bekal Resort & Spa, Kerala",
    city: "Bekal",
    state: "Kerala",
    country: "India",
    countryCode: "IN",
    fullAddress: "Kappil Beach, Thekkekara, Bekal, Kasaragod 671319, Kerala, India",
    address: "Kappil Beach, Thekkekara, Bekal 671319",
    latitude: 12.4042,
    longitude: 75.0211,
    description: "26-acre beach and backwater sanctuary in North Kerala designed like Kettuvallam houseboats, with meandering water channels, Jiva Grande Spa, and Kappil Beach access.",
    shortDescription: "26-acre beach and backwater sanctuary near Bekal Fort designed like traditional houseboats.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/taj-bekal-kerala/",
    phone: "+91 467 661 6611",
    email: "bekal.kerala@tajhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 66,
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
      "Direct Kappil Beach Access",
      "Outdoor Swimming Pool",
      "Jiva Grande Ayurvedic Spa",
      "Backwater Kayaking",
      "Free High-Speed Wi-Fi",
      "Bekal Fort Proximity",
      "Private Plunge Pools in Villas"
    ],
    roomTypes: [
      {
        id: "room-ker-taj-bekal-villa",
        name: "Superior Charm Room with Balcony",
        type: "DELUXE",
        description: "42 sq.m guestroom with thatch-roof design and balcony facing backwater channels.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "42 sq.m",
        price: 16000,
        pricePerNight: 16000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Backwater Balcony", "Free Wi-Fi", "Day Bed", "Open Sky Shower"]
      },
      {
        id: "room-ker-taj-bekal-plunge-villa",
        name: "Premium Temptation Villa with Plunge Pool",
        type: "VILLA",
        description: "110 sq.m private villa with personal plunge pool and courtyard lounge.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "110 sq.m",
        price: 28000,
        pricePerNight: 28000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Plunge Pool", "Courtyard Sun Lounger", "Butler Service", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Taj Bekal Resort & Spa backwater villa",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/taj-bekal-kerala/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-kerala-leela-kovalam",
    destinationId: "dest-kerala",
    name: "The Leela Kovalam, a Raviz Hotel",
    city: "Kovalam",
    state: "Kerala",
    country: "India",
    countryCode: "IN",
    fullAddress: "Kovalam Beach Road, Thiruvananthapuram 695527, Kerala, India",
    address: "Kovalam Beach Road, Kovalam 695527",
    latitude: 8.3975,
    longitude: 76.9744,
    description: "Iconic 60-acre clifftop resort perched on a rocky headland between two wide beaches in Kovalam, designed by legendary architect Charles Correa, with clifftop infinity pool.",
    shortDescription: "Iconic clifftop resort between two wide beaches in Kovalam with stunning sea views.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.theleela.com/the-leela-kovalam-a-raviz-hotel",
    phone: "+91 471 305 1234",
    email: "reservations@theleela.com",
    checkInTime: "14:00",
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
    pricePerNight: 16500,
    amenities: [
      "Clifftop Oceanfront Setting",
      "Clifftop Infinity Swimming Pool",
      "Ayurveda & Wellness Spa",
      "The Tides Seafood Dining",
      "Private Beach Access with Lift",
      "Free High-Speed Wi-Fi",
      "Sky Bar Sunset Lounge"
    ],
    roomTypes: [
      {
        id: "room-ker-leela-sea-view",
        name: "Beach View Superior Room",
        type: "DELUXE",
        description: "44 sq.m room perched on the cliff with sun deck looking straight into the Arabian Sea surf.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "44 sq.m",
        price: 16500,
        pricePerNight: 16500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Clifftop Ocean Sun Deck", "Free Wi-Fi", "Walk-in Shower", "Air Conditioning"]
      },
      {
        id: "room-ker-leela-club-suite",
        name: "The Club Sea View Suite",
        type: "SUITE",
        description: "88 sq.m ultra-exclusive suite in The Club wing with private infinity pool access and butler.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "88 sq.m",
        price: 33000,
        pricePerNight: 33000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Club Wing", "Panoramic Arabian Sea View", "Club Butler", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Leela Kovalam clifftop ocean panorama",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.theleela.com/the-leela-kovalam-a-raviz-hotel",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = keralaHotels;
