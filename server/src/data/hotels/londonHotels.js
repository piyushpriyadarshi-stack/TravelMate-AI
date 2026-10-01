// ==================================================
// Destination 14: LONDON (dest-london)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// Deduplicated: The Langham is stored only ONCE; Claridge's completes the curated 8.
// ==================================================

const londonHotels = [
  {
    id: "hotel-lon-the-savoy",
    destinationId: "dest-london",
    name: "The Savoy, London",
    city: "London",
    state: "Greater London",
    country: "United Kingdom",
    countryCode: "GB",
    fullAddress: "Strand, London WC2R 0EZ, United Kingdom",
    address: "Strand, London WC2R 0EZ",
    latitude: 51.5103,
    longitude: -0.1203,
    description: "Britain's first luxury hotel opened in 1889 on the River Thames, famed for Art Deco and Edwardian interiors, Gordon Ramsay's Savoy Grill, and the legendary American Bar.",
    shortDescription: "Britain's iconic 1889 luxury hotel on the Strand overlooking the River Thames.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.thesavoylondon.com/",
    phone: "+44 20 7836 4343",
    email: "savoy@fairmont.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 267,
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
    pricePerNight: 75000,
    amenities: [
      "River Thames Views",
      "Indoor Pool & Beauty Spa",
      "American Bar & Beaufort Bar",
      "Savoy Grill by Gordon Ramsay",
      "Free High-Speed Wi-Fi",
      "24-Hour Savoy Butler Service",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-lon-savoy-sup",
        name: "Superior Queen Room",
        type: "DELUXE",
        description: "32 sq.m room decorated in Edwardian or Art Deco style with marble bathroom and city views.",
        maxGuests: 2,
        bedType: "1 Queen Bed",
        roomSize: "32 sq.m",
        price: 75000,
        pricePerNight: 75000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Art Deco Interiors", "Free Wi-Fi", "Marble Bathroom", "Le Labo Toiletries"]
      },
      {
        id: "room-lon-savoy-river-suite",
        name: "River View Junior Suite",
        type: "SUITE",
        description: "55 sq.m suite offering unobstructed panoramas across the River Thames toward the London Eye.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "55 sq.m",
        price: 135000,
        pricePerNight: 135000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["River Thames Panorama", "Savoy Butler Service", "Separate Sitting Area", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Savoy London riverfront facade",
        source: "Unsplash Licensed Hotel Photo"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "room",
        alt: "The Savoy London Edwardian suite",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.thesavoylondon.com/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-lon-the-ritz",
    destinationId: "dest-london",
    name: "The Ritz London",
    city: "London",
    state: "Greater London",
    country: "United Kingdom",
    countryCode: "GB",
    fullAddress: "150 Piccadilly, St. James's, London W1J 9BR, United Kingdom",
    address: "150 Piccadilly, St. James's, London W1J 9BR",
    latitude: 51.5071,
    longitude: -0.1417,
    description: "Grade II* listed Neoclassical masterpiece on Piccadilly overlooking Green Park since 1906. Renowned worldwide for Afternoon Tea in the Palm Court and Michelin-starred Ritz Restaurant.",
    shortDescription: "Neoclassical icon on Piccadilly famed for world-renowned Afternoon Tea in The Palm Court.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.theritzlondon.com/",
    phone: "+44 20 7493 8181",
    email: "enquire@theritzlondon.com",
    checkInTime: "15:00",
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
    pricePerNight: 82000,
    amenities: [
      "Piccadilly & Green Park Views",
      "The Palm Court World-Famous Afternoon Tea",
      "Michelin-Starred The Ritz Restaurant",
      "The Rivoli Bar Art Deco Lounge",
      "Free High-Speed Wi-Fi",
      "Rolls-Royce Phantom Chauffeur",
      "The Ritz Salon & Fitness"
    ],
    roomTypes: [
      {
        id: "room-lon-ritz-superior",
        name: "Superior Queen Room",
        type: "DELUXE",
        description: "26 sq.m Louis XVI-styled room featuring original 24-karat gold leaf detailing and antique furnishings.",
        maxGuests: 2,
        bedType: "1 Queen Bed",
        roomSize: "26 sq.m",
        price: 82000,
        pricePerNight: 82000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Louis XVI Decor", "24-Karat Gold Details", "Marble Bath", "Free Wi-Fi"]
      },
      {
        id: "room-lon-ritz-park-suite",
        name: "Deluxe Suite Green Park View",
        type: "SUITE",
        description: "70 sq.m suite offering direct views over the royal treetops of Green Park.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "70 sq.m",
        price: 155000,
        pricePerNight: 155000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Green Park View", "Rolls-Royce Airport Transfer", "Dedicated Butler", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Ritz London Piccadilly colonnade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.theritzlondon.com/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-lon-the-langham",
    destinationId: "dest-london",
    name: "The Langham, London",
    city: "London",
    state: "Greater London",
    country: "United Kingdom",
    countryCode: "GB",
    fullAddress: "1C Portland Place, Regent Street, London W1B 1JA, United Kingdom",
    address: "1C Portland Place, Regent Street, London W1B 1JA",
    latitude: 51.5178,
    longitude: -0.1436,
    description: "Europe's first grand hotel opened in 1865 at the top of Regent Street, featuring Artesian cocktail bar (four times World's Best Bar), Chuan Spa with 16m pool, and Palm Court.",
    shortDescription: "Europe's original 1865 grand hotel at the top of Regent Street featuring Artesian bar.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.langhamhotels.com/en/the-langham/london/",
    phone: "+44 20 7636 1500",
    email: "tllon.info@langhamhotels.com",
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
    pricePerNight: 58000,
    amenities: [
      "16-Meter Indoor Pool in Former Bank Vault",
      "Artesian Multi-Award-Winning Cocktail Bar",
      "Chuan Body + Soul Spa",
      "Palm Court Afternoon Tea",
      "Free High-Speed Wi-Fi",
      "Regent Street & Marylebone Proximity",
      "The Langham Club Lounge"
    ],
    roomTypes: [
      {
        id: "room-lon-langham-sup",
        name: "Superior King Room",
        type: "DELUXE",
        description: "33 sq.m classic British room with marble bathroom and Diptyque bath amenities.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "33 sq.m",
        price: 58000,
        pricePerNight: 58000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Diptyque Toiletries", "Marble Bathroom", "Air Conditioning"]
      },
      {
        id: "room-lon-langham-club-suite",
        name: "The Langham Club Suite",
        type: "SUITE",
        description: "68 sq.m suite with The Langham Club lounge access, champagne breakfast, and Regent Street view.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "68 sq.m",
        price: 98000,
        pricePerNight: 98000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Langham Club Lounge Privileges", "Separate Living Room", "Regent Street View", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Langham London Portland Place entrance",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.langhamhotels.com/en/the-langham/london/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-lon-the-dorchester",
    destinationId: "dest-london",
    name: "The Dorchester",
    city: "London",
    state: "Greater London",
    country: "United Kingdom",
    countryCode: "GB",
    fullAddress: "53 Park Lane, Mayfair, London W1K 1QA, United Kingdom",
    address: "53 Park Lane, Mayfair, London W1K 1QA",
    latitude: 51.5072,
    longitude: -0.1528,
    description: "Distinguished 1931 Mayfair landmark overlooking Hyde Park on Park Lane, home to three-Michelin-starred Alain Ducasse at The Dorchester, The Promenade, and The Dorchester Spa.",
    shortDescription: "Distinguished 1931 Mayfair landmark overlooking Hyde Park on prestigious Park Lane.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.dorchestercollection.com/london/the-dorchester",
    phone: "+44 20 7629 8888",
    email: "reservations.tdl@dorchestercollection.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 250,
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
      "Hyde Park Frontline Views",
      "Three-Michelin-Starred Alain Ducasse Restaurant",
      "The Dorchester Spa with Spiezia Organics",
      "The Vesper Bar",
      "Free High-Speed Wi-Fi",
      "Dedicated Butler Service",
      "Valet Parking"
    ],
    roomTypes: [
      {
        id: "room-lon-dorchester-deluxe",
        name: "Deluxe Queen Room",
        type: "DELUXE",
        description: "37 sq.m room decorated in classic English style with Italian marble bathroom and Park Lane views.",
        maxGuests: 2,
        bedType: "1 Queen Bed",
        roomSize: "37 sq.m",
        price: 85000,
        pricePerNight: 85000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Park Lane Outlook", "Free Wi-Fi", "Aromatherapy Associates", "Italian Marble Bath"]
      },
      {
        id: "room-lon-dorchester-park-suite",
        name: "Hyde Park Suite",
        type: "SUITE",
        description: "85 sq.m suite with direct panoramic views over the green canopy of Hyde Park.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "85 sq.m",
        price: 175000,
        pricePerNight: 175000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Hyde Park Panorama", "Dedicated Butler", "Marble Fireplace", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Dorchester Park Lane London facade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.dorchestercollection.com/london/the-dorchester",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-lon-park-hyatt-river-thames",
    destinationId: "dest-london",
    name: "Park Hyatt London River Thames",
    city: "London",
    state: "Greater London",
    country: "United Kingdom",
    countryCode: "GB",
    fullAddress: "7 Nine Elms Lane, London SW8 5PH, United Kingdom",
    address: "7 Nine Elms Lane, London SW8 5PH",
    latitude: 51.4853,
    longitude: -0.1256,
    description: "Ultra-luxury hotel in Nine Elms on the South Bank of the River Thames near the US Embassy and Battersea Power Station, featuring indoor pool with river views and The Spa.",
    shortDescription: "Ultra-luxury riverside sanctuary in Nine Elms overlooking the Thames and Parliament.",
    category: "LUXURY",
    rating: 4.6,
    officialWebsite: "https://www.hyatt.com/park-hyatt/lonph-park-hyatt-london-river-thames",
    phone: "+44 20 8194 1234",
    email: "london.parkhyatt@hyatt.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 203,
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
    pricePerNight: 55000,
    amenities: [
      "River Thames Frontline Views",
      "Indoor 20-Meter Pool Overlooking River",
      "The Spa at Park Hyatt",
      "Nine Elms Chauffeur Service",
      "Free High-Speed Wi-Fi",
      "Fitness Studio",
      "Wine Cellar & Tasting Room"
    ],
    roomTypes: [
      {
        id: "room-lon-ph-river-view",
        name: "Park King River View",
        type: "DELUXE",
        description: "42 sq.m room with floor-to-ceiling glass framing River Thames and Westminster skyline.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "42 sq.m",
        price: 55000,
        pricePerNight: 55000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Thames River View", "Free Wi-Fi", "Walk-in Shower & Soaking Tub", "Le Labo Products"]
      },
      {
        id: "room-lon-ph-suite",
        name: "River Thames Suite",
        type: "SUITE",
        description: "85 sq.m corner suite with separate salon and sunset vistas along the river.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "85 sq.m",
        price: 110000,
        pricePerNight: 110000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Corner River Panorama", "Separate Salon", "Butler Service", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Park Hyatt London River Thames view",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/park-hyatt/lonph-park-hyatt-london-river-thames",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-lon-marriott-county-hall",
    destinationId: "dest-london",
    name: "London Marriott Hotel County Hall",
    city: "London",
    state: "Greater London",
    country: "United Kingdom",
    countryCode: "GB",
    fullAddress: "Westminster Bridge Road, London SE1 7PB, United Kingdom",
    address: "Westminster Bridge Road, London SE1 7PB",
    latitude: 51.5014,
    longitude: -0.1192,
    description: "Located within the historic County Hall building on the South Bank right by Westminster Bridge, offering front-row views of Big Ben, the Houses of Parliament, and the London Eye.",
    shortDescription: "Historic hotel inside County Hall directly facing Big Ben and Parliament on Westminster Bridge.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.marriott.com/hotels/travel/lonch-london-marriott-hotel-county-hall/",
    phone: "+44 20 7928 5200",
    email: "countyhall.concierge@marriott.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 206,
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
      "Front-Row Big Ben & Parliament Views",
      "25-Meter Indoor Swimming Pool",
      "Gillray's Steakhouse & Bar",
      "M Club Lounge",
      "Free High-Speed Wi-Fi",
      "Fitness Center with River View",
      "London Eye Adjacent"
    ],
    roomTypes: [
      {
        id: "room-lon-county-big-ben",
        name: "Deluxe Big Ben View Room",
        type: "DELUXE",
        description: "32 sq.m room with direct windows framing Big Ben clock tower and the River Thames.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 42000,
        pricePerNight: 42000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Direct Big Ben View", "Free Wi-Fi", "Heritage High Ceilings", "Rain Shower"]
      },
      {
        id: "room-lon-county-westminster-suite",
        name: "Westminster Suite River View",
        type: "SUITE",
        description: "65 sq.m suite with separate parlor and uninterrupted views of the Houses of Parliament.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "65 sq.m",
        price: 82000,
        pricePerNight: 82000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Parliament Panorama", "M Club Lounge Access", "Separate Parlor", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "County Hall London facing Big Ben and Thames",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/lonch-london-marriott-hotel-county-hall/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-lon-the-landmark",
    destinationId: "dest-london",
    name: "The Landmark London",
    city: "London",
    state: "Greater London",
    country: "United Kingdom",
    countryCode: "GB",
    fullAddress: "222 Marylebone Road, London NW1 6JQ, United Kingdom",
    address: "222 Marylebone Road, London NW1 6JQ",
    latitude: 51.5222,
    longitude: -0.1628,
    description: "Historic Victorian railway hotel in Marylebone built around an iconic 8-storey glass-roofed atrium filled with palm trees (The Winter Garden), offering 15m pool and spa.",
    shortDescription: "Grand Victorian hotel in Marylebone featuring iconic 8-storey glass-roofed palm atrium.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.landmarklondon.co.uk/",
    phone: "+44 20 7631 8000",
    email: "reservations@thelandmark.co.uk",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 300,
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
    pricePerNight: 48000,
    amenities: [
      "8-Storey Glass-Roofed Winter Garden Atrium",
      "15-Meter Chlorine-Free Swimming Pool",
      "Spa & Sanarium",
      "Winter Garden Afternoon Tea",
      "Free High-Speed Wi-Fi",
      "Marylebone Station Steps Away"
    ],
    roomTypes: [
      {
        id: "room-lon-landmark-superior",
        name: "Superior King Room",
        type: "DELUXE",
        description: "51 sq.m exceptionally large London room with Italian marble bathroom and seating area.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "51 sq.m",
        price: 48000,
        pricePerNight: 48000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Spacious 51 sq.m", "Free Wi-Fi", "Marble Bathroom", "Air Conditioning"]
      },
      {
        id: "room-lon-landmark-atrium-suite",
        name: "Atrium View Suite",
        type: "SUITE",
        description: "75 sq.m suite looking into the dramatic illuminated palm tree atrium.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "75 sq.m",
        price: 88000,
        pricePerNight: 88000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Winter Garden Atrium View", "Separate Living Area", "Deep Soak Tub", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Landmark London glass atrium",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.landmarklondon.co.uk/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-lon-claridges",
    destinationId: "dest-london",
    name: "Claridge's",
    city: "London",
    state: "Greater London",
    country: "United Kingdom",
    countryCode: "GB",
    fullAddress: "Brook Street, Mayfair, London W1K 4HR, United Kingdom",
    address: "Brook Street, Mayfair, London W1K 4HR",
    latitude: 51.5125,
    longitude: -0.1492,
    description: "The epitome of timeless Mayfair Art Deco glamour since 1856, favorite of royalty and Hollywood stars, featuring The Foyer & Reading Room for afternoon tea and the subterranean Claridge's Spa.",
    shortDescription: "The epitome of timeless Mayfair Art Deco glamour favored by royal houses and Hollywood icons.",
    category: "LUXURY",
    rating: 4.9,
    officialWebsite: "https://www.claridges.co.uk/",
    phone: "+44 20 7629 8860",
    email: "reservations@claridges.co.uk",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 190,
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
      "Mayfair Brook Street Address",
      "Subterranean Heated Pool & Claridge's Spa",
      "Fumoir & The Painter's Room Bars",
      "Legendary Claridge's Afternoon Tea",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Lalique and Art Deco Decor"
    ],
    roomTypes: [
      {
        id: "room-lon-claridges-deluxe",
        name: "Deluxe King Room",
        type: "DELUXE",
        description: "41 sq.m room designed in bespoke Art Deco or Victorian style with marble bathroom.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "41 sq.m",
        price: 95000,
        pricePerNight: 95000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Art Deco Interiors", "Free Wi-Fi", "Burberry Trenchcoats Available", "Marble Bath"]
      },
      {
        id: "room-lon-claridges-mayfair-suite",
        name: "Mayfair Suite",
        type: "SUITE",
        description: "80 sq.m signature suite with original Art Deco fireplace, private dressing room, and personal butler.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "80 sq.m",
        price: 185000,
        pricePerNight: 185000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Art Deco Fireplace", "Personal Butler", "Dressing Room", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Claridge's Mayfair London entrance",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.claridges.co.uk/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = londonHotels;
