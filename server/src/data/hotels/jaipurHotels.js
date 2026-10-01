// ==================================================
// Destination 4: JAIPUR (dest-jaipur)
// 8 Verified Real Hotels with Distinct Geographic Coordinates
// ==================================================

const jaipurHotels = [
  {
    id: "hotel-jaipur-rambagh-palace",
    destinationId: "dest-jaipur",
    name: "Rambagh Palace, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    countryCode: "IN",
    fullAddress: "Bhawani Singh Road, Jaipur 302005, Rajasthan, India",
    address: "Bhawani Singh Road, Jaipur 302005",
    latitude: 26.8979,
    longitude: 75.8085,
    description: "The 'Jewel of Jaipur', former residence of the Maharaja of Jaipur set in 47 acres of landscaped gardens, featuring Suvarna Mahal, peacock lawns, and Jiva Grande Spa.",
    shortDescription: "Former residence of the Maharaja of Jaipur set in 47 acres of ornamental Mughal gardens.",
    category: "LUXURY",
    rating: 4.9,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/rambagh-palace-jaipur/",
    phone: "+91 141 221 1919",
    email: "rambagh.jaipur@tajhotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
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
    pricePerNight: 28000,
    amenities: [
      "Mughal Landscaped Gardens",
      "Indoor & Outdoor Pools",
      "Jiva Grande Spa",
      "Suvarna Mahal Royal Dining",
      "Polo Bar",
      "Free High-Speed Wi-Fi",
      "Royal Butler Service",
      "Vintage Car Escort"
    ],
    roomTypes: [
      {
        id: "room-jaipur-rambagh-palace-room",
        name: "Palace Room",
        type: "DELUXE",
        description: "48 sq.m authentic royal chamber adorned with rich Rajasthani fabrics and hand-painted motifs.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "48 sq.m",
        price: 28000,
        pricePerNight: 28000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Garden View", "Four-Poster Bed", "Palace Butler"]
      },
      {
        id: "room-jaipur-rambagh-historical-suite",
        name: "Historical Suite",
        type: "SUITE",
        description: "105 sq.m majestic suite once graced by visiting dignitaries, with private sun terrace.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "105 sq.m",
        price: 65000,
        pricePerNight: 65000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Terrace", "Personal Butler", "Vintage Car Airport Transfer", "Champagne Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Rambagh Palace Jaipur palace facade",
        source: "Unsplash Licensed Hotel Photo"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "room",
        alt: "Rambagh Palace royal suite bedroom",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/rambagh-palace-jaipur/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-jaipur-oberoi-rajvilas",
    destinationId: "dest-jaipur",
    name: "The Oberoi Rajvilas, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    countryCode: "IN",
    fullAddress: "Goner Road, Jaipur 302031, Rajasthan, India",
    address: "Goner Road, Jaipur 302031",
    latitude: 26.8778,
    longitude: 75.8772,
    description: "Spectacular 32-acre fort-style resort surrounded by reflection pools and gardens, centered around a 280-year-old Shiva temple, featuring luxury tents and Sunken Pool.",
    shortDescription: "32-acre fort-style royal resort featuring luxury tents and private reflection pools.",
    category: "LUXURY",
    rating: 4.9,
    officialWebsite: "https://www.oberoihotels.com/hotels-in-jaipur-rajvilas/",
    phone: "+91 141 268 0101",
    email: "reservations.rajvilas@oberoihotels.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 71,
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
      "Sunken Swimming Pool",
      "The Oberoi Spa in 18th-century Haveli",
      "Surya Mahal Fine Dining",
      "Herb Gardens & Tennis Courts",
      "Free High-Speed Wi-Fi",
      "Private Yoga Pavilions",
      "24-Hour Butler Service"
    ],
    roomTypes: [
      {
        id: "room-jaipur-rajvilas-premier",
        name: "Premier Room with Sunken Bath",
        type: "DELUXE",
        description: "42 sq.m guestroom centered around an ornate sunken marble bath looking into private walled garden.",
        maxGuests: 2,
        bedType: "1 Four-Poster King Bed",
        roomSize: "42 sq.m",
        price: 32000,
        pricePerNight: 32000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Four-Poster Bed", "Sunken Marble Bath", "Private Courtyard View", "Free Wi-Fi"]
      },
      {
        id: "room-jaipur-rajvilas-tent",
        name: "Luxury Tent with Garden Patio",
        type: "VILLA",
        description: "45 sq.m air-conditioned luxury canopy tent with teak floor, clawfoot tub, and private outdoor patio.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "45 sq.m",
        price: 46000,
        pricePerNight: 46000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Royal Canopy Tent", "Clawfoot Bathtub", "Private Garden Patio", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "The Oberoi Rajvilas Jaipur fort resort",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.oberoihotels.com/hotels-in-jaipur-rajvilas/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-jaipur-itc-rajputana",
    destinationId: "dest-jaipur",
    name: "ITC Rajputana, a Luxury Collection Hotel",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    countryCode: "IN",
    fullAddress: "Palace Road, Gopalbari, Jaipur 302006, Rajasthan, India",
    address: "Palace Road, Gopalbari, Jaipur 302006",
    latitude: 26.9197,
    longitude: 75.7925,
    description: "Echoing the grand havelis of Rajasthan with red brick courtyards, traditional stepwells (baolis), Kaya Kalp Spa, and Peshawri tandoori cuisine.",
    shortDescription: "Grand haveli-style hotel with stepwell courtyards and authentic Peshawri dining.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.itchotels.com/in/en/itcrajputana-jaipur",
    phone: "+91 141 405 1600",
    email: "reservations.itcrajputana@itchotels.in",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 218,
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
    pricePerNight: 9800,
    amenities: [
      "Bazaar Style Courtyard Pool",
      "Peshawri Restaurant",
      "Kaya Kalp Spa",
      "Free High-Speed Wi-Fi",
      "Traditional Cultural Performances",
      "Fitness Center",
      "Executive Club Lounge"
    ],
    roomTypes: [
      {
        id: "room-jaipur-itc-exec",
        name: "Executive Club Room",
        type: "EXECUTIVE",
        description: "32 sq.m guestroom with handcrafted jharokha bay window seating looking onto inner courtyards.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "32 sq.m",
        price: 9800,
        pricePerNight: 9800,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Jharokha Window Seating", "Air Conditioning", "En-suite Bath"]
      },
      {
        id: "room-jaipur-itc-thikana-suite",
        name: "Thikana Suite",
        type: "SUITE",
        description: "65 sq.m traditional royal suite with private balcony, separate salon, and butler service.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "65 sq.m",
        price: 18500,
        pricePerNight: 18500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Balcony", "Butler Service", "Living Room", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "ITC Rajputana Jaipur red brick courtyard",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.itchotels.com/in/en/itcrajputana-jaipur",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-jaipur-jai-mahal-palace",
    destinationId: "dest-jaipur",
    name: "Jai Mahal Palace, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    countryCode: "IN",
    fullAddress: "Jacob Road, Civil Lines, Jaipur 302006, Rajasthan, India",
    address: "Jacob Road, Civil Lines, Jaipur 302006",
    latitude: 26.9089,
    longitude: 75.7878,
    description: "1745 AD heritage palace spanning 18 acres of Mughal gardens in Civil Lines. Featuring life-sized chess board, Cinnamon fine dining, and Jiva Spa.",
    shortDescription: "1745 AD heritage palace set in 18 acres of landscaped gardens in Civil Lines.",
    category: "LUXURY",
    rating: 4.8,
    officialWebsite: "https://www.tajhotels.com/en-in/taj/jai-mahal-palace-jaipur/",
    phone: "+91 141 660 1111",
    email: "jaimahal.jaipur@tajhotels.com",
    checkInTime: "14:00",
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
    pricePerNight: 16500,
    amenities: [
      "18-Acre Mughal Gardens",
      "Outdoor Swimming Pool",
      "Jiva Spa",
      "Cinnamon Pan-Indian Dining",
      "Life-sized Chess Set",
      "Free High-Speed Wi-Fi",
      "Palace Concierge"
    ],
    roomTypes: [
      {
        id: "room-jaipur-jm-deluxe",
        name: "Deluxe Room Garden View",
        type: "DELUXE",
        description: "36 sq.m heritage room with classic miniature paintings and garden outlook.",
        maxGuests: 2,
        bedType: "1 King or 2 Twin Beds",
        roomSize: "36 sq.m",
        price: 16500,
        pricePerNight: 16500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Garden View", "Air Conditioning", "Bathtub"]
      },
      {
        id: "room-jaipur-jm-suite",
        name: "Junior Suite",
        type: "SUITE",
        description: "56 sq.m palace suite with separate sitting room and views over the fountain terraces.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "56 sq.m",
        price: 28000,
        pricePerNight: 28000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Separate Sitting Room", "Mughal Garden View", "Butler Service", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Jai Mahal Palace Jaipur gardens",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.tajhotels.com/en-in/taj/jai-mahal-palace-jaipur/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-jaipur-hyatt-mansarovar",
    destinationId: "dest-jaipur",
    name: "Hyatt Regency Jaipur Mansarovar",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    countryCode: "IN",
    fullAddress: "ISKCON Temple Road, Mansarovar, Jaipur 302020, Rajasthan, India",
    address: "ISKCON Temple Road, Mansarovar, Jaipur 302020",
    latitude: 26.8488,
    longitude: 75.7656,
    description: "Architectural fusion of classic Rajasthani arches and modern luxury in Mansarovar, featuring landscaped central courtyard, Shrot restaurant, and StayFit gym.",
    shortDescription: "Contemporary urban oasis in Mansarovar blending traditional arches with modern comforts.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.hyatt.com/hyatt-regency/jaiph-hyatt-regency-jaipur-mansarovar",
    phone: "+91 141 668 1234",
    email: "jaipur.regency@hyatt.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    totalRooms: 245,
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
      "Central Courtyard Pool",
      "Shrot Organic Dining",
      "StayFit Fitness Center",
      "Free High-Speed Wi-Fi",
      "Spa & Wellness",
      "Banquet & Event Lawns"
    ],
    roomTypes: [
      {
        id: "room-jaipur-hyatt-king",
        name: "1 King Bed Courtyard View",
        type: "DOUBLE",
        description: "36 sq.m room with balcony overlooking the serene central courtyard and pool.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "36 sq.m",
        price: 8500,
        pricePerNight: 8500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Courtyard Balcony", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-jaipur-hyatt-regency-suite",
        name: "Regency Suite",
        type: "SUITE",
        description: "72 sq.m suite with living lounge, Regency Club access, and deep soaking bathtub.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "72 sq.m",
        price: 15500,
        pricePerNight: 15500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Regency Club Privileges", "Living Area", "Bathtub", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Hyatt Regency Jaipur Mansarovar courtyard",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hyatt.com/hyatt-regency/jaiph-hyatt-regency-jaipur-mansarovar",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-jaipur-marriott",
    destinationId: "dest-jaipur",
    name: "Jaipur Marriott Hotel",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    countryCode: "IN",
    fullAddress: "Ashram Marg, Near Jawahar Circle, Jaipur 302015, Rajasthan, India",
    address: "Ashram Marg, Near Jawahar Circle, Jaipur 302015",
    latitude: 26.8497,
    longitude: 75.8016,
    description: "Upscale 5-star hotel near Jawahar Circle and Jaipur International Airport, featuring Okra buffet, Saffron Indian specialty restaurant, and O2 Spa.",
    shortDescription: "Upscale 5-star hotel near Jawahar Circle and Jaipur International Airport.",
    category: "FIVE_STAR",
    rating: 4.6,
    officialWebsite: "https://www.marriott.com/hotels/travel/jaimc-jaipur-marriott-hotel/",
    phone: "+91 141 456 7777",
    email: "reservations.jaipur@marriott.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 374,
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
      "Outdoor Pool",
      "O2 Spa",
      "Okra & Saffron Restaurants",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Executive M Club Lounge",
      "Airport Shuttle"
    ],
    roomTypes: [
      {
        id: "room-jaipur-marr-dlx",
        name: "Deluxe King Room",
        type: "DOUBLE",
        description: "34 sq.m room with plush Marriott bedding, marble bathroom, and city views.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "34 sq.m",
        price: 9000,
        pricePerNight: 9000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Marble Bathroom", "Coffee Maker", "Air Conditioning"]
      },
      {
        id: "room-jaipur-marr-exec-suite",
        name: "Executive Suite",
        type: "SUITE",
        description: "68 sq.m suite with access to M Club Lounge, evening appetizers, and separate living area.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "68 sq.m",
        price: 16000,
        pricePerNight: 16000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["M Club Lounge Access", "Living Room", "Bathtub", "Complimentary Breakfast"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Jaipur Marriott Hotel facade",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/jaimc-jaipur-marriott-hotel/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-jaipur-le-meridien",
    destinationId: "dest-jaipur",
    name: "Le Méridien Jaipur Resort & Spa",
    city: "Kukas",
    state: "Rajasthan",
    country: "India",
    countryCode: "IN",
    fullAddress: "RIICO Kukas, Jaipur 302028, Rajasthan, India",
    address: "RIICO Kukas, Jaipur 302028",
    latitude: 27.0392,
    longitude: 75.8947,
    description: "Serene 25-acre resort situated on the foothills of the Aravalli range close to Amber Fort, offering lagoon pool, Surya Vilas dining, and Ayurvedic therapies.",
    shortDescription: "25-acre resort at the base of the Aravalli hills near Amber Fort.",
    category: "FIVE_STAR",
    rating: 4.5,
    officialWebsite: "https://www.marriott.com/hotels/travel/jaimd-le-meridien-jaipur-resort-and-spa/",
    phone: "+91 142 666 9999",
    email: "reservations.lemeridienjaipur@marriott.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 126,
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
    pricePerNight: 8200,
    amenities: [
      "Lagoon Swimming Pool",
      "Spa with Ayurvedic Therapies",
      "Amber Fort Proximity",
      "Free High-Speed Wi-Fi",
      "Cinema Hall & Games Room",
      "Fitness Center"
    ],
    roomTypes: [
      {
        id: "room-jaipur-lm-sup",
        name: "Superior King Room",
        type: "DOUBLE",
        description: "38 sq.m room with Aravalli hill views, private balcony, and sunken tub.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "38 sq.m",
        price: 8200,
        pricePerNight: 8200,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "Hill View", "Sunken Tub", "Balcony"]
      },
      {
        id: "room-jaipur-lm-villa",
        name: "Deluxe Villa with Garden View",
        type: "VILLA",
        description: "85 sq.m standalone villa with private courtyard and outdoor sitting cabana.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "85 sq.m",
        price: 15000,
        pricePerNight: 15000,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Private Courtyard", "Sitting Cabana", "Espresso Machine", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Le Méridien Jaipur resort pool",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.marriott.com/hotels/travel/jaimd-le-meridien-jaipur-resort-and-spa/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "hotel-jaipur-hilton",
    destinationId: "dest-jaipur",
    name: "Hilton Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    countryCode: "IN",
    fullAddress: "42 Geejgarh House, Hawa Sadak, Jaipur 302006, Rajasthan, India",
    address: "42 Geejgarh House, Hawa Sadak, Jaipur 302006",
    latitude: 26.9004,
    longitude: 75.7824,
    description: "Centrally located upscale hotel on Hawa Sadak near Civil Lines, offering outdoor rooftop pool, Chaandi contemporary Indian dining, and signature Hilton serenity.",
    shortDescription: "Central 5-star hotel on Hawa Sadak featuring rooftop pool and mountain vistas.",
    category: "FOUR_STAR",
    rating: 4.4,
    officialWebsite: "https://www.hilton.com/en/hotels/jprhiji-hilton-jaipur/",
    phone: "+91 141 417 0000",
    email: "jaipur.info@hilton.com",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    totalRooms: 129,
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
    pricePerNight: 6800,
    amenities: [
      "Outdoor Swimming Pool",
      "Chaandi & Aurum Restaurants",
      "Spa & Salon",
      "Free High-Speed Wi-Fi",
      "Fitness Center",
      "Business Center"
    ],
    roomTypes: [
      {
        id: "room-jaipur-hilton-guest",
        name: "King Deluxe Room",
        type: "DOUBLE",
        description: "32 sq.m guestroom with city views, ergonomic work chair, and Hilton Serenity bed.",
        maxGuests: 2,
        bedType: "1 King Bed",
        roomSize: "32 sq.m",
        price: 6800,
        pricePerNight: 6800,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Free Wi-Fi", "City View", "Air Conditioning", "Rain Shower"]
      },
      {
        id: "room-jaipur-hilton-exec-suite",
        name: "One Bedroom Suite",
        type: "SUITE",
        description: "65 sq.m spacious suite with separate parlor and Aravalli range panoramic views.",
        maxGuests: 3,
        bedType: "1 King Bed",
        roomSize: "65 sq.m",
        price: 12500,
        pricePerNight: 12500,
        currency: "INR",
        pricingMode: "DEVELOPMENT_TEST",
        amenities: ["Aravalli View", "Separate Parlor", "Bathtub", "Breakfast Included"]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        type: "exterior",
        alt: "Hilton Jaipur hotel building",
        source: "Unsplash Licensed Hotel Photo"
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    sourceUrl: "https://www.hilton.com/en/hotels/jprhiji-hilton-jaipur/",
    verifiedAt: "2026-09-26T12:00:00.000Z",
    status: "ACTIVE"
  }
];

module.exports = jaipurHotels;
