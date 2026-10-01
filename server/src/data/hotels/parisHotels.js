// ==================================================
// Destination 13: PARIS (dest-paris)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const parisHotels = [
  {
    id: "hotel-par-shangri-la",
    destinationId: "dest-paris",
    name: "Shangri-La Paris",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    countryCode: "FR",
    fullAddress: "10 Avenue d'Iéna, 75116 Paris, France",
    address: "10 Avenue d'Iéna, 75116 Paris",
    latitude: 48.8639,
    longitude: 2.2933,
    description: "Former palace of Prince Roland Bonaparte overlooking the Eiffel Tower and River Seine in the 16th arrondissement, featuring Chi The Spa, indoor pool in the former stables, and Shang Palace.",
    shortDescription: "Former palace of Prince Roland Bonaparte offering frontline unobstructed Eiffel Tower views.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.shangri-la.com/paris/shangrila/",
    phone: "+33 1 53 67 19 98",
    email: "paris@shangri-la.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 100,
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
    pricePerNight: 85000,
    amenities: [
      "Direct Eiffel Tower & Seine Views",
      "Indoor Sunlit Swimming Pool",
      "Chi, The Spa",
      "Shang Palace Michelin-Starred Dining",
      "Free High-Speed Wi-Fi",
      "Private Terraces & French Gardens"
    ],
    roomTypes: [
      {
        id: "room-par-shang-eiffel-dlx",
        name: "Eiffel View Room",
        type: "DELUXE",
        description: "36 sq.m room with floor-to-ceiling French windows looking straight at the Eiffel Tower.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "36 sq.m",
        price: 85000,
        pricePerNight: 85000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Direct Eiffel Tower View", "Marble Bath with Heated Floors", "Free Wi-Fi", "Guerlain Products"]
      },
      {
        id: "room-par-shang-duplex-suite",
        name: "Duplex Eiffel Tower Suite",
        type: "SUITE",
        description: "110 sq.m two-level suite with private terrace looking onto the iron lady.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "110 sq.m",
        price: 185000,
        pricePerNight: 185000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Eiffel Terrace", "Two-Level Duplex", "Butler Service", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Shangri-La Paris Eiffel Tower balcony",
        source: "Unsplash Licensed Hotel Photo"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "room",
        alt: "Shangri-La Paris luxury room",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.shangri-la.com/paris/shangrila/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-par-ritz-paris",
    destinationId: "dest-paris",
    name: "Ritz Paris",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    countryCode: "FR",
    fullAddress: "15 Place Vendôme, 75001 Paris, France",
    address: "15 Place Vendôme, 75001 Paris",
    latitude: 48.8683,
    longitude: 2.3294,
    description: "The grandest palace hotel in Paris founded in 1898 on Place Vendôme by César Ritz. Immortalized by Coco Chanel and Ernest Hemingway, featuring the Ritz Club indoor pool and Bar Hemingway.",
    shortDescription: "Legendary 1898 palace hotel on Place Vendôme immortalized by Coco Chanel and Hemingway.",
    category: "LUXURY",
    rating: 4.9,
    officialWebsite: "https://www.ritzparis.com/",
    phone: "+33 1 43 16 30 30",
    email: "reservations@ritzparis.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 142,
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
    pricePerNight: 98000,
    amenities: [
      "Place Vendôme Prestigious Address",
      "Ritz Club Neoclassical Indoor Pool",
      "Bar Hemingway & Salon Proust",
      "The Grand Jardin French Gardens",
      "Free High-Speed Wi-Fi",
      "Ritz Escoffier Cooking School",
      "24-Hour In-Suite Butler"
    ],
    roomTypes: [
      {
        id: "room-par-ritz-superior",
        name: "Superior Room",
        type: "DELUXE",
        description: "35 sq.m classic Parisian room with Louis XVI woodwork and golden swan tapware.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "35 sq.m",
        price: 98000,
        pricePerNight: 98000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Place Vendôme Courtyard View", "Swan Golden Faucets", "Free Wi-Fi", "Louis XVI Furniture"]
      },
      {
        id: "room-par-ritz-prestige-suite",
        name: "Prestige Suite Vendôme",
        type: "SUITE",
        description: "90 sq.m historical suite looking directly onto the columns of Place Vendôme.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "90 sq.m",
        price: 210000,
        pricePerNight: 210000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Place Vendôme View", "Antique Salon", "Dedicated Butler", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Ritz Paris Place Vendôme entrance",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.ritzparis.com/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-par-le-meurice",
    destinationId: "dest-paris",
    name: "Le Meurice - Dorchester Collection",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    countryCode: "FR",
    fullAddress: "228 Rue de Rivoli, 75001 Paris, France",
    address: "228 Rue de Rivoli, 75001 Paris",
    latitude: 48.8653,
    longitude: 2.3283,
    description: "The 'Hotel of Kings' facing the Tuileries Garden since 1835, blending 18th-century Versailles opulence with whimsical Philippe Starck designs and two-Michelin-starred Alain Ducasse dining.",
    shortDescription: "Palace hotel facing the Tuileries Garden celebrated for 18th-century opulence and Alain Ducasse dining.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.dorchestercollection.com/paris/le-meurice",
    phone: "+33 1 44 58 10 10",
    email: "reservations.lmp@dorchestercollection.com",
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
    pricePerNight: 88000,
    amenities: [
      "Tuileries Garden Frontline Views",
      "Two-Michelin-Starred Restaurant le Meurice Alain Ducasse",
      "Spa Valmont pour Le Meurice",
      "Bar 228 Jazz Lounge",
      "Free High-Speed Wi-Fi",
      "Cédric Grolet Pastry Boutique"
    ],
    roomTypes: [
      {
        id: "room-par-meurice-sup",
        name: "Superior Room",
        type: "DELUXE",
        description: "30 sq.m room decorated in classic Louis XVI style with Italian marble bathroom.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "30 sq.m",
        price: 88000,
        pricePerNight: 88000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Tuileries Courtyard View", "Free Wi-Fi", "Marble Bathroom", "Penhaligon's Toiletries"]
      },
      {
        id: "room-par-meurice-tuileries-suite",
        name: "Tuileries Garden Suite",
        type: "SUITE",
        description: "80 sq.m suite with direct uninterrupted panorama of Tuileries Garden and the Louvre.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "80 sq.m",
        price: 175000,
        pricePerNight: 175000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Tuileries Panoramic View", "Versailles Salon", "Butler Service", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Le Meurice Paris Rue de Rivoli",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.dorchestercollection.com/paris/le-meurice",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-par-intercontinental-le-grand",
    destinationId: "dest-paris",
    name: "InterContinental Paris Le Grand",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    countryCode: "FR",
    fullAddress: "2 Rue Scribe, 75009 Paris, France",
    address: "2 Rue Scribe, 75009 Paris",
    latitude: 48.8711,
    longitude: 2.3308,
    description: "Inaugurated in 1862 by Empress Eugénie facing the Palais Garnier Opera house, home to the historic Café de la Paix and magnificent glass-roofed winter garden Verrière.",
    shortDescription: "Napoleon III-era grand hotel directly facing the majestic Palais Garnier Opera.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.ihg.com/intercontinental/hotels/us/en/paris/parhb/hoteldetail",
    phone: "+33 1 40 07 32 32",
    email: "legrand@ihg.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 470,
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
    pricePerNight: 38000,
    amenities: [
      "Opera Garnier Direct Views",
      "Historic Café de la Paix",
      "I-Spa by Algotherm",
      "La Verrière Winter Garden",
      "Free High-Speed Wi-Fi",
      "Club InterContinental Lounge",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-par-ic-classic",
        name: "Classic King Room",
        type: "DOUBLE",
        description: "28 sq.m room designed in Napoleon III style with gilded accents and courtyard view.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "28 sq.m",
        price: 38000,
        pricePerNight: 38000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Courtyard View", "Free Wi-Fi", "Air Conditioning", "Byredo Amenities"]
      },
      {
        id: "room-par-ic-opera-view",
        name: "Premium Opera View Room",
        type: "DELUXE",
        description: "36 sq.m room with large windows directly overlooking the facade of Palais Garnier Opera.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "36 sq.m",
        price: 52000,
        pricePerNight: 52000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Palais Garnier Opera View", "Club InterContinental Access", "Nespresso Machine", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "InterContinental Paris Le Grand Opera view",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.ihg.com/intercontinental/hotels/us/en/paris/parhb/hoteldetail",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-par-hyatt-regency-etoile",
    destinationId: "dest-paris",
    name: "Hyatt Regency Paris Étoile",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    countryCode: "FR",
    fullAddress: "3 Place du Général Kœnig, 75017 Paris, France",
    address: "3 Place du Général Kœnig, 75017 Paris",
    latitude: 48.8808,
    longitude: 2.2833,
    description: "The only skyscraper hotel in Paris rising 34 storeys at Porte Maillot, connecting to Palais des Congrès. Home to Windo Skybar on the 34th floor offering panoramic Eiffel views.",
    shortDescription: "The only skyscraper hotel in Paris rising 34 storeys with panoramic 34th-floor Eiffel views.",
    category: "FOUR_STAR",
    rating: 4.3,
    officialWebsite: "https://www.hyatt.com/hyatt-regency/parhr-hyatt-regency-paris-etoile",
    phone: "+33 1 40 68 12 34",
    email: "parisetoile.regency@hyatt.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 995,
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
      "34th-Floor Windo Skybar",
      "Panoramic Eiffel Tower Views",
      "Direct Palais des Congrès Connection",
      "Free High-Speed Wi-Fi",
      "Fitness Center with City View",
      "Regency Club Floor"
    ],
    roomTypes: [
      {
        id: "room-par-hr-standard",
        name: "Standard King Room",
        type: "DOUBLE",
        description: "22 sq.m streamlined room with large picture windows and Parisian skyline views.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "22 sq.m",
        price: 18000,
        pricePerNight: 18000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["City View", "Free Wi-Fi", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-par-hr-eiffel-view",
        name: "High Floor Eiffel Tower View Room",
        type: "DELUXE",
        description: "26 sq.m high-floor room with panoramic unobstructed views of the Eiffel Tower.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "26 sq.m",
        price: 26000,
        pricePerNight: 26000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Direct Eiffel Tower View", "High Floor (Fl 20+)", "Regency Club Access", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Hyatt Regency Paris Etoile skyscraper tower",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/hyatt-regency/parhr-hyatt-regency-paris-etoile",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-par-pullman-tour-eiffel",
    destinationId: "dest-paris",
    name: "Pullman Paris Tour Eiffel",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    countryCode: "FR",
    fullAddress: "18 Avenue de Suffren, 75015 Paris, France",
    address: "18 Avenue de Suffren, 75015 Paris",
    latitude: 48.8553,
    longitude: 2.2931,
    description: "Located just steps from the foot of the Eiffel Tower on the Left Bank, featuring FR/AME brasserie, rooftop views, fitness lounge with Trocadéro views, and balconies on most rooms.",
    shortDescription: "Modern 4-star hotel situated footsteps from the base of the Eiffel Tower with private balconies.",
    category: "FOUR_STAR",
    rating: 4.4,
    officialWebsite: "https://all.accor.com/hotel/7229/index.en.shtml",
    phone: "+33 1 44 38 56 00",
    email: "h7229@accor.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 430,
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
      "Footsteps from the Eiffel Tower",
      "Balconies with Eiffel Tower Views",
      "FR/AME Modern Brasserie",
      "24-Hour Fitness Lounge with Trocadéro View",
      "Free High-Speed Wi-Fi",
      "Direct Metro Access (Bir-Hakeim)"
    ],
    roomTypes: [
      {
        id: "room-par-pullman-classic",
        name: "Classic King Room with Balcony",
        type: "DOUBLE",
        description: "26 sq.m contemporary room with private balcony overlooking the Parisian courtyard.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "26 sq.m",
        price: 24000,
        pricePerNight: 24000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Balcony", "Free Wi-Fi", "Walk-in Shower", "Air Conditioning"]
      },
      {
        id: "room-par-pullman-eiffel",
        name: "Deluxe Eiffel Tower View Room",
        type: "DELUXE",
        description: "32 sq.m high-floor room with private balcony directly facing the Eiffel Tower iron structure.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 38000,
        pricePerNight: 38000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Direct Front-Row Eiffel Balcony", "Nespresso Machine", "C.O. Bigelow Amenities", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Pullman Paris Tour Eiffel next to Eiffel Tower",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://all.accor.com/hotel/7229/index.en.shtml",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-par-plaza-athenee",
    destinationId: "dest-paris",
    name: "Hôtel Plaza Athénée - Dorchester Collection",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    countryCode: "FR",
    fullAddress: "25 Avenue Montaigne, 75008 Paris, France",
    address: "25 Avenue Montaigne, 75008 Paris",
    latitude: 48.8661,
    longitude: 2.3047,
    description: "The haute couture palace on prestigious Avenue Montaigne since 1913, famous for its red geranium-lined facade, Christian Dior Spa, courtyard ice rink in winter, and Jean Imbert dining.",
    shortDescription: "Haute couture palace on Avenue Montaigne famed for red geranium awnings and Dior Spa.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.dorchestercollection.com/paris/hotel-plaza-athenee",
    phone: "+33 1 53 67 66 65",
    email: "reservations.hpa@dorchestercollection.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 154,
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
    pricePerNight: 92000,
    amenities: [
      "Avenue Montaigne Haute Couture Location",
      "The Dior Spa",
      "Jean Imbert au Plaza Athénée",
      "Famous Courtyard Garden",
      "Free High-Speed Wi-Fi",
      "Personal Butler Service"
    ],
    roomTypes: [
      {
        id: "room-par-hpa-superior",
        name: "Superior King Room",
        type: "DELUXE",
        description: "30 sq.m room decorated in classic Parisian Art Deco or Regency style with avenue view.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "30 sq.m",
        price: 92000,
        pricePerNight: 92000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Avenue Montaigne Outlook", "Free Wi-Fi", "Guerlain Bath Essentials", "Marble Bath"]
      },
      {
        id: "room-par-hpa-eiffel-suite",
        name: "Eiffel Tower Signature Suite",
        type: "SUITE",
        description: "80 sq.m suite featuring private balcony directly framing the Eiffel Tower above Avenue Montaigne.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "80 sq.m",
        price: 195000,
        pricePerNight: 195000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Signature Eiffel Balcony", "Separate Salon", "Dedicated Butler", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Hôtel Plaza Athénée Avenue Montaigne red geraniums",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.dorchestercollection.com/paris/hotel-plaza-athenee",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-par-westin-vendome",
    destinationId: "dest-paris",
    name: "The Westin Paris – Vendôme",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    countryCode: "FR",
    fullAddress: "3 Rue de Castiglione, 75001 Paris, France",
    address: "3 Rue de Castiglione, 75001 Paris",
    latitude: 48.8664,
    longitude: 2.3278,
    description: "Historic grand hotel situated between Place Vendôme and the Tuileries Garden, offering views of the Eiffel Tower, Le First restaurant, and central courtyard patio.",
    shortDescription: "Historic hotel between Place Vendôme and Tuileries Garden with views of the Eiffel Tower.",
    category: "FOUR_STAR",
    rating: 4.3,
    officialWebsite: "https://www.marriott.com/hotels/travel/parwi-the-westin-paris-vendome/",
    phone: "+33 1 44 77 11 11",
    email: "westin.paris@westin.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 428,
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
      "Tuileries Garden & Place Vendôme Location",
      "Le First Restaurant & Courtyard Patio",
      "Six Senses Spa Proximity",
      "Free High-Speed Wi-Fi",
      "WestinWORKOUT Fitness Studio",
      "24-Hour Concierge"
    ],
    roomTypes: [
      {
        id: "room-par-westin-sup",
        name: "Superior Room",
        type: "DOUBLE",
        description: "26 sq.m room featuring Westin Heavenly Bed and views of the interior courtyard patio.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "26 sq.m",
        price: 28000,
        pricePerNight: 28000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Heavenly Bed", "Free Wi-Fi", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-par-westin-tuileries-view",
        name: "Deluxe Tuileries Garden View Room",
        type: "DELUXE",
        description: "32 sq.m room directly facing the Tuileries Garden with the Eiffel Tower in the backdrop.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 42000,
        pricePerNight: 42000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Tuileries & Eiffel View", "Bathtub", "Nespresso Machine", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Westin Paris Vendome Castiglione facade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/parwi-the-westin-paris-vendome/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = parisHotels;
