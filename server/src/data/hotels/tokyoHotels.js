// ==================================================
// Destination 15: TOKYO (dest-tokyo)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const tokyoHotels = [
  {
    id: "hotel-tky-peninsula",
    destinationId: "dest-tokyo",
    name: "The Peninsula Tokyo",
    city: "Tokyo",
    state: "Kanto",
    country: "Japan",
    countryCode: "JP",
    fullAddress: "1-8-1 Yurakucho, Chiyoda-ku, Tokyo 100-0006, Japan",
    address: "1-8-1 Yurakucho, Chiyoda-ku, Tokyo",
    latitude: 35.6742,
    longitude: 139.7606,
    description: "Located opposite the Imperial Palace and Hibiya Park, The Peninsula Tokyo combines modern luxury with Japanese aesthetics, featuring 24-story lantern-inspired architecture and Peter restaurant.",
    shortDescription: "Iconic Japanese lantern-inspired 5-star hotel facing Hibiya Park and Imperial Palace.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.peninsula.com/en/tokyo/5-star-luxury-hotel-ginza",
    phone: "+81 3 6270 2888",
    email: "ptk@peninsula.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 314,
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
    pricePerNight: 65000,
    amenities: [
      "Imperial Palace & Hibiya Park Views",
      "Indoor Heated Swimming Pool",
      "The Peninsula Spa & Health Club",
      "Peter Grill & Bar with Panoramic Views",
      "Free High-Speed Wi-Fi",
      "Concierge & Luxury Rolls-Royce Fleet",
      "Subway Station Direct Underground Access"
    ],
    roomTypes: [
      {
        id: "room-tky-pen-deluxe",
        name: "Deluxe Room",
        type: "DELUXE",
        description: "54 sq.m room blending traditional Japanese design with modern tech, dressing room, and deep soaking tub.",
        maxGuests: 2,
        bedType: "1 King Bed or 2 Twin Beds",
        roomSize: "54 sq.m",
        price: 65000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-pen-grand-lux",
        name: "Grand Deluxe Room",
        type: "PREMIUM",
        description: "63 sq.m corner room with panoramic skyline and Hibiya Park views, marble bath with built-in TV.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "63 sq.m",
        price: 85000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-pen-exec-ste",
        name: "Executive Suite",
        type: "SUITE",
        description: "86 sq.m suite featuring separate living room, dining area, walk-in closet, and lavish Japanese hospitality.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "86 sq.m",
        price: 135000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      }
    ],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_Peninsula_Tokyo.jpg/1280px-The_Peninsula_Tokyo.jpg",
        type: "exterior",
        alt: "The Peninsula Tokyo Yurakucho exterior facade",
        source: "Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Park_Hyatt_Tokyo_Lobby.jpg/1280px-Park_Hyatt_Tokyo_Lobby.jpg",
        type: "lobby",
        alt: "Luxury hotel interior in Tokyo",
        source: "Wikimedia Commons (CC BY-SA 3.0)"
      }
    ],
    imageUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_Peninsula_Tokyo.jpg/1280px-The_Peninsula_Tokyo.jpg"
    ],
    sourceUrl: "https://www.peninsula.com/en/tokyo/5-star-luxury-hotel-ginza",
    verifiedAt: "2025-02-26T00:00:00.000Z"
  },
  {
    id: "hotel-tky-park-hyatt",
    destinationId: "dest-tokyo",
    name: "Park Hyatt Tokyo",
    city: "Tokyo",
    state: "Kanto",
    country: "Japan",
    countryCode: "JP",
    fullAddress: "3-7-1-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo 163-1055, Japan",
    address: "3-7-1-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo",
    latitude: 35.6856,
    longitude: 139.6911,
    description: "Occupying the top 14 floors of Kenzo Tange's 52-story Shinjuku Park Tower, Park Hyatt Tokyo is globally celebrated for its New York Grill, dramatic Mt. Fuji views, and cinematic presence in Lost in Translation.",
    shortDescription: "World-renowned luxury hotel atop Shinjuku Park Tower with iconic New York Bar & Grill.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.hyatt.com/en-US/hotel/japan/park-hyatt-tokyo/tyoph",
    phone: "+81 3 5322 1234",
    email: "tokyo.park@hyatt.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 177,
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
    pricePerNight: 70000,
    amenities: [
      "Club on the Park 47th-Floor Atrium Pool",
      "Panoramic Tokyo & Mt. Fuji Views",
      "New York Grill & New York Bar on 52nd Floor",
      "Spa & Treatment Rooms",
      "Free High-Speed Wi-Fi",
      "24-Hour Fitness Center",
      "Valet Parking & Airport Limousine"
    ],
    roomTypes: [
      {
        id: "room-tky-pht-deluxe",
        name: "Park Deluxe King Room",
        type: "DELUXE",
        description: "55 sq.m aerie with wall-to-wall panoramic city views, deep granite soaking tub, and custom Japanese artwork.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "55 sq.m",
        price: 70000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-pht-view",
        name: "Park View King Room",
        type: "PREMIUM",
        description: "60 sq.m room facing Shinjuku Gyoen or Mount Fuji on clear days, walk-in closet and spa bathtub.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "60 sq.m",
        price: 88000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-pht-ste",
        name: "Park Suite King",
        type: "SUITE",
        description: "100 sq.m suite featuring living room with library, dining area, sauna access, and dramatic metropolitan views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "100 sq.m",
        price: 150000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      }
    ],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Shinjuku_Park_Tower_2016.JPG/1280px-Shinjuku_Park_Tower_2016.JPG",
        type: "exterior",
        alt: "Shinjuku Park Tower housing Park Hyatt Tokyo",
        source: "Wikimedia Commons (CC BY-SA 4.0)"
      }
    ],
    imageUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Shinjuku_Park_Tower_2016.JPG/1280px-Shinjuku_Park_Tower_2016.JPG"
    ],
    sourceUrl: "https://www.hyatt.com/en-US/hotel/japan/park-hyatt-tokyo/tyoph",
    verifiedAt: "2025-02-26T00:00:00.000Z"
  },
  {
    id: "hotel-tky-imperial",
    destinationId: "dest-tokyo",
    name: "Imperial Hotel, Tokyo",
    city: "Tokyo",
    state: "Kanto",
    country: "Japan",
    countryCode: "JP",
    fullAddress: "1-1-1 Uchisaiwaicho, Chiyoda-ku, Tokyo 100-8558, Japan",
    address: "1-1-1 Uchisaiwaicho, Chiyoda-ku, Tokyo",
    latitude: 35.6719,
    longitude: 139.7589,
    description: "Founded in 1890 at the behest of the Japanese aristocracy, the Imperial Hotel is Japan's most historic grand hotel, renowned for unmatched omotenashi service, Les Saisons restaurant, and Imperial suites.",
    shortDescription: "Historic 1890 landmark hotel known for legendary Japanese hospitality next to Hibiya Park.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.imperialhotel.co.jp/e/tokyo/",
    phone: "+81 3 3504 1111",
    email: null,
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 931,
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
      "Indoor Pool & Fitness Center",
      "Les Saisons French Fine Dining",
      "Old Imperial Bar (Frank Lloyd Wright elements)",
      "Traditional Japanese Tea Ceremony Room",
      "Free High-Speed Wi-Fi",
      "Business Center & Shopping Arcade",
      "Concierge & Airport Limousine Bus"
    ],
    roomTypes: [
      {
        id: "room-tky-imp-std",
        name: "Main Building Superior Room",
        type: "DELUXE",
        description: "32 sq.m refined room with elegant decor, Airweave bedding, and serene views of Hibiya Park.",
        maxGuests: 2,
        bedType: "1 Queen Bed or 2 Single Beds",
        roomSize: "32 sq.m",
        price: 42000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-imp-tower",
        name: "Imperial Floor Deluxe Room",
        type: "PREMIUM",
        description: "42 sq.m room on exclusive Imperial Floors (14-16F) with dedicated attendant service and city vistas.",
        maxGuests: 2,
        bedType: "1 King Bed or 2 Twin Beds",
        roomSize: "42 sq.m",
        price: 58000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-imp-ste",
        name: "Premier Suite",
        type: "SUITE",
        description: "80 sq.m suite featuring expansive living room, marble bathroom, and panoramic Tokyo skyline views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "80 sq.m",
        price: 98000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      }
    ],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Imperial_Hotel_Tokyo.jpg/1280px-Imperial_Hotel_Tokyo.jpg",
        type: "exterior",
        alt: "Imperial Hotel Tokyo main building facade",
        source: "Wikimedia Commons (CC BY-SA 3.0)"
      }
    ],
    imageUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Imperial_Hotel_Tokyo.jpg/1280px-Imperial_Hotel_Tokyo.jpg"
    ],
    sourceUrl: "https://www.imperialhotel.co.jp/e/tokyo/",
    verifiedAt: "2025-02-26T00:00:00.000Z"
  },
  {
    id: "hotel-tky-shangri-la",
    destinationId: "dest-tokyo",
    name: "Shangri-La Tokyo",
    city: "Tokyo",
    state: "Kanto",
    country: "Japan",
    countryCode: "JP",
    fullAddress: "1-8-3 Marunouchi, Chiyoda-ku, Tokyo 100-8283, Japan",
    address: "1-8-3 Marunouchi, Chiyoda-ku, Tokyo",
    latitude: 35.6828,
    longitude: 139.7708,
    description: "Perched atop the Marunouchi Trust Tower Main next to Tokyo Station, Shangri-La Tokyo offers opulent Asian hospitality, Chi The Spa, and Italian dining at Piacere with Imperial Palace vistas.",
    shortDescription: "Tranquil luxury retreat adjacent to Tokyo Station with panoramic Imperial Palace views.",
    category: "LUXURY",
    rating: 4.7,
    officialWebsite: "https://www.shangri-la.com/tokyo/shangrila/",
    phone: "+81 3 6739 7888",
    email: "tokyo@shangri-la.com",
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
    pricePerNight: 58000,
    amenities: [
      "Direct Tokyo Station Shinkansen Meet & Greet",
      "Indoor Heated Pool with Skyline Vistas",
      "Chi, The Spa",
      "Piacere Italian Fine Dining & Nadaman Japanese",
      "Free High-Speed Wi-Fi",
      "Health Club & Steam Sauna",
      "Horizon Club Lounge"
    ],
    roomTypes: [
      {
        id: "room-tky-shang-dlx",
        name: "Deluxe Imperial Garden View Room",
        type: "DELUXE",
        description: "50 sq.m room featuring floor-to-ceiling windows overlooking the Imperial Palace gardens and Tokyo Bay.",
        maxGuests: 2,
        bedType: "1 King Bed or 2 Twin Beds",
        roomSize: "50 sq.m",
        price: 58000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-shang-prem",
        name: "Premier City View Room",
        type: "PREMIUM",
        description: "68 sq.m corner room featuring expansive circular windows with Tokyo Skytree and cityscape views.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "68 sq.m",
        price: 76000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-shang-ste",
        name: "Executive Suite",
        type: "SUITE",
        description: "120 sq.m luxury suite with custom crystal chandeliers, dining table for six, and Horizon Club privileges.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "120 sq.m",
        price: 130000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      }
    ],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Marunouchi_Trust_Tower_Main_2014.JPG/1280px-Marunouchi_Trust_Tower_Main_2014.JPG",
        type: "exterior",
        alt: "Marunouchi Trust Tower housing Shangri-La Tokyo",
        source: "Wikimedia Commons (CC BY-SA 4.0)"
      }
    ],
    imageUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Marunouchi_Trust_Tower_Main_2014.JPG/1280px-Marunouchi_Trust_Tower_Main_2014.JPG"
    ],
    sourceUrl: "https://www.shangri-la.com/tokyo/shangrila/",
    verifiedAt: "2025-02-26T00:00:00.000Z"
  },
  {
    id: "hotel-tky-ritz-carlton",
    destinationId: "dest-tokyo",
    name: "The Ritz-Carlton, Tokyo",
    city: "Tokyo",
    state: "Kanto",
    country: "Japan",
    countryCode: "JP",
    fullAddress: "Tokyo Midtown 9-7-1 Akasaka, Minato-ku, Tokyo 107-6245, Japan",
    address: "Tokyo Midtown 9-7-1 Akasaka, Minato-ku, Tokyo",
    latitude: 35.6658,
    longitude: 139.7311,
    description: "Perched high above Roppongi on floors 45 through 53 of Midtown Tower, The Ritz-Carlton, Tokyo features Hinokizaka Michelin-level Japanese cuisine, The Bar, and unobstructed 360-degree views to Tokyo Tower and Mt. Fuji.",
    shortDescription: "Ultra-luxury hotel atop Tokyo Midtown Tower in Roppongi with stunning Tokyo Tower views.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.ritzcarlton.com/en/hotels/japan/tokyo",
    phone: "+81 3 3423 8000",
    email: "rc.tyorz.leads@ritzcarlton.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 247,
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
    pricePerNight: 72000,
    amenities: [
      "Indoor Lap Pool on 46th Floor",
      "The Ritz-Carlton Spa & Fitness Center",
      "Hinokizaka Japanese Dining & Azure 45",
      "The Bar with Live Jazz & Skyline Views",
      "Club Lounge on 53rd Floor",
      "Free High-Speed Wi-Fi",
      "Tokyo Midtown Direct Underground Access"
    ],
    roomTypes: [
      {
        id: "room-tky-rc-deluxe",
        name: "Deluxe King Room",
        type: "DELUXE",
        description: "52 sq.m guest room with deep soaking tub, featherbeds, and breathtaking Tokyo skyline and Roppongi views.",
        maxGuests: 2,
        bedType: "1 King Bed or 2 Double Beds",
        roomSize: "52 sq.m",
        price: 72000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-rc-tower",
        name: "Tokyo Tower View Room",
        type: "PREMIUM",
        description: "52 sq.m room directly facing illuminated Tokyo Tower with marble bath and rainforest shower.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "52 sq.m",
        price: 88000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-rc-club-ste",
        name: "Carlton Suite Club Level",
        type: "SUITE",
        description: "100 sq.m corner suite with separate living room, Mt. Fuji view, and 5-time culinary presentations in Club Lounge.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "100 sq.m",
        price: 160000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      }
    ],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Midtown_Tower_in_Tokyo_Midtown%2C_Roppongi.jpg/1280px-Midtown_Tower_in_Tokyo_Midtown%2C_Roppongi.jpg",
        type: "exterior",
        alt: "Tokyo Midtown Tower housing The Ritz-Carlton Tokyo",
        source: "Wikimedia Commons (CC BY-SA 3.0)"
      }
    ],
    imageUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Midtown_Tower_in_Tokyo_Midtown%2C_Roppongi.jpg/1280px-Midtown_Tower_in_Tokyo_Midtown%2C_Roppongi.jpg"
    ],
    sourceUrl: "https://www.ritzcarlton.com/en/hotels/japan/tokyo",
    verifiedAt: "2025-02-26T00:00:00.000Z"
  },
  {
    id: "hotel-tky-hilton",
    destinationId: "dest-tokyo",
    name: "Hilton Tokyo",
    city: "Tokyo",
    state: "Kanto",
    country: "Japan",
    countryCode: "JP",
    fullAddress: "6-6-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-0023, Japan",
    address: "6-6-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo",
    latitude: 35.6922,
    longitude: 139.6917,
    description: "Located in the heart of Shinjuku's skyscraper district, Hilton Tokyo provides direct underground access to Tokyo Metro, modern rooms with traditional shoji screens, and an indoor rooftop tennis court.",
    shortDescription: "Vibrant Shinjuku hotel with 24-hr gym, rooftop tennis courts, and direct subway access.",
    category: "BUSINESS",
    rating: 4.5,
    officialWebsite: "https://www.hilton.com/en/hotels/tyohitw-hilton-tokyo/",
    phone: "+81 3 3344 5111",
    email: "tokyo@hilton.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 830,
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
      "Indoor Heated Swimming Pool",
      "Two Rooftop Tennis Courts",
      "24-Hour Fitness Center & Sauna",
      "Marble Lounge Famous Dessert Buffets",
      "Free Shuttle to Shinjuku Station",
      "Free High-Speed Wi-Fi",
      "Direct Metro Underground Passage (Tochomae Station)"
    ],
    roomTypes: [
      {
        id: "room-tky-hil-hilton",
        name: "Hilton King Room",
        type: "DELUXE",
        description: "30 sq.m room equipped with modern Japanese shoji window screens, ergonomic workspace, and city view.",
        maxGuests: 2,
        bedType: "1 King Bed or 2 Twin Beds",
        roomSize: "30 sq.m",
        price: 28000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-hil-exec",
        name: "Executive King Room",
        type: "EXECUTIVE",
        description: "35 sq.m room on high floors with Executive Lounge breakfast, evening cocktails, and Mt. Fuji views.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "35 sq.m",
        price: 39000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-hil-ste",
        name: "Junior Suite",
        type: "SUITE",
        description: "44 sq.m open-concept suite with separate living and sleeping zones, deep bath, and Executive benefits.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "44 sq.m",
        price: 52000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      }
    ],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Hilton_Tokyo_2010.jpg/1280px-Hilton_Tokyo_2010.jpg",
        type: "exterior",
        alt: "Hilton Tokyo Nishi-Shinjuku exterior facade",
        source: "Wikimedia Commons (CC BY-SA 3.0)"
      }
    ],
    imageUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Hilton_Tokyo_2010.jpg/1280px-Hilton_Tokyo_2010.jpg"
    ],
    sourceUrl: "https://www.hilton.com/en/hotels/tyohitw-hilton-tokyo/",
    verifiedAt: "2025-02-26T00:00:00.000Z"
  },
  {
    id: "hotel-tky-mandarin-oriental",
    destinationId: "dest-tokyo",
    name: "Mandarin Oriental, Tokyo",
    city: "Tokyo",
    state: "Kanto",
    country: "Japan",
    countryCode: "JP",
    fullAddress: "2-1-1 Nihonbashi Muromachi, Chuo-ku, Tokyo 103-8328, Japan",
    address: "2-1-1 Nihonbashi Muromachi, Chuo-ku, Tokyo",
    latitude: 35.6869,
    longitude: 139.7731,
    description: "Soaring above historic Nihonbashi atop the 38-floor Nihonbashi Mitsui Tower, Mandarin Oriental Tokyo features Michelin-starred restaurants, The Spa on 37, and dramatic panoramic vistas of Tokyo Skytree.",
    shortDescription: "Forbes 5-Star luxury hotel in historic Nihonbashi with award-winning dining & sky spa.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.mandarinoriental.com/en/tokyo/nihonbashi",
    phone: "+81 3 3270 8800",
    email: "motky-reservations@mohg.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 179,
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
    pricePerNight: 74000,
    amenities: [
      "Panoramic Sky Spa with Vitality Pools on 37th Floor",
      "Michelin-Starred Dining Options (Signature, Sense, Tapas Molecular)",
      "Oriental Lounge & Mandarin Bar",
      "Fitness Center with Floor-to-Ceiling Windows",
      "Free High-Speed Wi-Fi",
      "24-Hour Butler Service",
      "Direct Subway Passage (Mitsukoshimae Station)"
    ],
    roomTypes: [
      {
        id: "room-tky-mo-deluxe",
        name: "Deluxe Premier Room",
        type: "DELUXE",
        description: "50 sq.m room showcasing contemporary Japanese craftsmanship, bamboo flooring, and Skytree skyline view.",
        maxGuests: 2,
        bedType: "1 King Bed or 2 Twin Beds",
        roomSize: "50 sq.m",
        price: 74000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-mo-grand",
        name: "Grand King Room",
        type: "PREMIUM",
        description: "60 sq.m room with oversized walk-in wardrobe, spa bathroom with freestanding soaking tub, and bay views.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "60 sq.m",
        price: 92000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-mo-ste",
        name: "Mandarin Suite",
        type: "SUITE",
        description: "100 sq.m corner suite with separate living salon, dining room, guest powder room, and Imperial Palace vistas.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "100 sq.m",
        price: 155000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      }
    ],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Nihonbashi_Mitsui_Tower_from_east.JPG/1280px-Nihonbashi_Mitsui_Tower_from_east.JPG",
        type: "exterior",
        alt: "Nihonbashi Mitsui Tower housing Mandarin Oriental Tokyo",
        source: "Wikimedia Commons (CC BY-SA 3.0)"
      }
    ],
    imageUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Nihonbashi_Mitsui_Tower_from_east.JPG/1280px-Nihonbashi_Mitsui_Tower_from_east.JPG"
    ],
    sourceUrl: "https://www.mandarinoriental.com/en/tokyo/nihonbashi",
    verifiedAt: "2025-02-26T00:00:00.000Z"
  },
  {
    id: "hotel-tky-four-seasons-marunouchi",
    destinationId: "dest-tokyo",
    name: "Four Seasons Hotel Tokyo at Marunouchi",
    city: "Tokyo",
    state: "Kanto",
    country: "Japan",
    countryCode: "JP",
    fullAddress: "Pacific Century Place, 1-11-1 Marunouchi, Chiyoda-ku, Tokyo 100-6277, Japan",
    address: "1-11-1 Marunouchi, Chiyoda-ku, Tokyo",
    latitude: 35.6789,
    longitude: 139.7678,
    description: "An intimate boutique sanctuary with just 57 rooms in the Pacific Century Place tower, Four Seasons Marunouchi features direct platform escort from Tokyo Station, Michelin-starred MAISON MARUNOUCHI, and Sézanne.",
    shortDescription: "Intimate 57-room luxury boutique haven adjacent to Tokyo Station with Michelin dining.",
    category: "BOUTIQUE",
    rating: 4.8,
    officialWebsite: "https://www.fourseasons.com/tokyo/",
    phone: "+81 3 5222 7222",
    email: "contactus.marunouchi@fourseasons.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 57,
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
    pricePerNight: 80000,
    amenities: [
      "Complimentary Shinkansen Platform Meet & Greet Service",
      "Traditional Onsen-style Hot Spring Baths & Steam Room",
      "Michelin-Starred Dining (Sézanne)",
      "24-Hour Fitness Center",
      "Free High-Speed Wi-Fi",
      "Boutique Concierge Services",
      "Direct Underground Concourse to Tokyo Station"
    ],
    roomTypes: [
      {
        id: "room-tky-fs-deluxe",
        name: "Deluxe King Room",
        type: "DELUXE",
        description: "44 sq.m soundproofed room with floor-to-ceiling windows overlooking bullet trains gliding into Tokyo Station.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "44 sq.m",
        price: 80000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-fs-premier",
        name: "Premier Tokyo Station View Room",
        type: "PREMIUM",
        description: "52 sq.m corner room with dual aspect city views, limestone soaking tub, and customized minibar.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "52 sq.m",
        price: 98000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      },
      {
        id: "room-tky-fs-ste",
        name: "Chairman Suite",
        type: "SUITE",
        description: "160 sq.m sanctuary with dining salon, marble kitchen, fireplace, and private onsen bathing facilities.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "160 sq.m",
        price: 240000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        availableRooms: null
      }
    ],
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pacific_Century_Place_Marunouchi_2015.JPG/1280px-Pacific_Century_Place_Marunouchi_2015.JPG",
        type: "exterior",
        alt: "Pacific Century Place Marunouchi housing Four Seasons",
        source: "Wikimedia Commons (CC BY-SA 4.0)"
      }
    ],
    imageUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pacific_Century_Place_Marunouchi_2015.JPG/1280px-Pacific_Century_Place_Marunouchi_2015.JPG"
    ],
    sourceUrl: "https://www.fourseasons.com/tokyo/",
    verifiedAt: "2025-02-26T00:00:00.000Z"
  }
];

module.exports = tokyoHotels;
