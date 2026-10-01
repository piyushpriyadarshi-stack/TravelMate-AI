// ==================================================
// TravelMate AI - 45 Hotels & 30 Activities Generator
// 3 Authentic Hotels & 2 Curated Activities for each of the 15 destinations
// ==================================================

const hotels = [
  // --------------------------------------------------
  // 1. GOA (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-goa-taj",
    name: "Taj Exotica Resort & Spa, Goa",
    destinationId: "dest-goa",
    address: "Calwaddo, Benaulim, South Goa 403716",
    description: "Mediterranean-style 56-acre luxury beachfront sanctuary overlooking the Arabian Sea with world-class Ayurvedic spa and private beach.",
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    category: "LUXURY",
    amenities: ["Private Beach Access", "Infinity Pool", "Jiva Ayurvedic Spa", "Golf Course", "Fine Dining", "Free High-Speed Wi-Fi", "Kids Club"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 16500,
    totalRooms: 30,
    availableRooms: 12,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-goa-taj-dlx",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 16500,
        totalRooms: 15,
        availableRooms: 7,
        amenities: ["Sea View Balcony", "King Bed", "Marble Bathroom", "Espresso Machine"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-goa-taj-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 28000,
        totalRooms: 10,
        availableRooms: 3,
        amenities: ["Private Plunge Pool", "Living Lounge", "Butler Service", "Panoramic Terrace"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-goa-novotel",
    name: "Novotel Goa Candolim Resort",
    destinationId: "dest-goa",
    address: "Pinto Waddo, Candolim, North Goa 403515",
    description: "Relaxed 4-star contemporary resort near vibrant Candolim Beach with tropical pool bars, kids play area, and wellness spa.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.5,
    category: "FOUR_STAR",
    amenities: ["Swimming Pool", "Fitness Center", "Breakfast Included", "Bar & Lounge", "Free Wi-Fi", "Beach Shuttle"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    pricePerNight: 6500,
    totalRooms: 40,
    availableRooms: 18,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-goa-novo-sup",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 6500,
        totalRooms: 25,
        availableRooms: 12,
        amenities: ["Pool View", "Queen Bed", "Rain Shower", "Mini Bar"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-goa-novo-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 10500,
        totalRooms: 15,
        availableRooms: 6,
        amenities: ["2 Queen Beds", "Garden Balcony", "Smart TV", "Bathtub"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-goa-alila",
    name: "Alila Diwa Goa - A Hyatt Hotel",
    destinationId: "dest-goa",
    address: "48/10 Adao Waddo, Majorda, South Goa 403713",
    description: "Serene 5-star haven amidst lush paddy fields, infinity pool extending toward the horizon, and walking distance to Gonsua Beach.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    category: "FIVE_STAR",
    amenities: ["Infinity Pool", "Paddy Field Views", "Spa Alila", "Free Airport Transfer", "Fine Dining", "Free Wi-Fi"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 11800,
    totalRooms: 35,
    availableRooms: 14,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-goa-alila-ter",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 11800,
        totalRooms: 20,
        availableRooms: 9,
        amenities: ["Paddy View Terrace", "King Bed", "Sunken Tub", "Daybed"],
        imageUrls: ["https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-goa-alila-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 21500,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["Separate Living Pavilion", "Private Balcony", "Espresso Bar", "Bathrobes"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 2. DELHI (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-delhi-imperial",
    name: "The Imperial, New Delhi",
    destinationId: "dest-delhi",
    address: "Janpath Lane, Connaught Place, New Delhi 110001",
    description: "Legendary 1930s heritage luxury hotel showcasing museum-quality British-Indian colonial artwork, lush gardens, and regal hospitality.",
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    category: "LUXURY",
    amenities: ["Museum Art Gallery", "Outdoor Pool", "Imperial Spa", "Award-Winning Restaurants", "High Tea Lounge", "Butler Service"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 18500,
    totalRooms: 35,
    availableRooms: 10,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-delhi-imp-her",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 18500,
        totalRooms: 20,
        availableRooms: 6,
        amenities: ["Colonial Heritage Decor", "King Four-Poster Bed", "Italian Marble Bath", "Garden Views"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-delhi-imp-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 32000,
        totalRooms: 15,
        availableRooms: 4,
        amenities: ["Art Deco Living Salon", "Private Veranda", "Chauffeur Service", "Walk-in Wardrobe"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-delhi-radisson",
    name: "Radisson Blu Marina Hotel Connaught Place",
    destinationId: "dest-delhi",
    address: "G-59 Connaught Circus, New Delhi 110001",
    description: "Chic boutique 4-star business hotel located in the heart of Delhi's Connaught Place shopping and dining arcade.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.4,
    category: "FOUR_STAR",
    amenities: ["Central CP Location", "Fitness Center", "Complimentary Breakfast", "Free Wi-Fi", "Multi-Cuisine Dining"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 7200,
    totalRooms: 45,
    availableRooms: 19,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-delhi-rad-sup",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 7200,
        totalRooms: 30,
        availableRooms: 14,
        amenities: ["Soundproof Windows", "Queen Bed", "Ergonomic Work Desk", "Rain Shower"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-delhi-rad-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 11500,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["2 Double Beds", "City View", "Tea/Coffee Maker", "Safe"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-delhi-claridges",
    name: "The Claridges New Delhi",
    destinationId: "dest-delhi",
    address: "12 Dr APJ Abdul Kalam Road, Lutyens' Delhi 110011",
    description: "Distinguished 5-star colonial landmark in leafy Lutyens' Delhi featuring cabana swimming pool, Sevillan courtyard, and culinary legends.",
    imageUrls: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    category: "FIVE_STAR",
    amenities: ["Outdoor Pool with Cabanas", "Dhaba Restaurant", "Bakery", "Gym & Spa", "Valet Parking", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 12000,
    totalRooms: 35,
    availableRooms: 12,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-delhi-cla-dlx",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 12000,
        totalRooms: 20,
        availableRooms: 8,
        amenities: ["Lutyens Garden View", "King Bed", "Marble Bathroom", "Artisan Coffee"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-delhi-cla-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 22000,
        totalRooms: 15,
        availableRooms: 4,
        amenities: ["Living Room", "Dining Area", "Complimentary Lounge Access", "Deep Soak Tub"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 3. MUMBAI (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-mumbai-taj",
    name: "The Taj Mahal Palace, Mumbai",
    destinationId: "dest-mumbai",
    address: "Apollo Bunder, Colaba, Mumbai 400001",
    description: "World-renowned 1903 heritage flagship facing the Gateway of India and the Arabian Sea, providing peerless five-star luxury.",
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.95,
    category: "LUXURY",
    amenities: ["Gateway of India View", "Historic Palace Wing", "Harbor Cruise Access", "Jiva Spa", "9 Iconic Restaurants", "Butler Service"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 24000,
    totalRooms: 30,
    availableRooms: 8,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-mum-taj-sea",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 24000,
        totalRooms: 18,
        availableRooms: 5,
        amenities: ["Direct Sea & Gateway View", "Palace Wing Architecture", "Silk Upholstery", "Marble Bath"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-mum-taj-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 45000,
        totalRooms: 12,
        availableRooms: 3,
        amenities: ["Grand Heritage Parlor", "Private Balcony", "Personal Butler", "Limo Airport Transfer"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-mumbai-trident",
    name: "Trident Hotel, Nariman Point",
    destinationId: "dest-mumbai",
    address: "CR 2 Nariman Point, Marine Drive, Mumbai 400021",
    description: "Soaring 5-star hotel perched along Marine Drive, boasting panoramic vistas of the Arabian Sea and the glittering Queen's Necklace.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    category: "FIVE_STAR",
    amenities: ["Marine Drive Oceanfront", "Outdoor Pool", "Spa & Wellness", "Pan-Asian Dining", "Business Center", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 13500,
    totalRooms: 40,
    availableRooms: 15,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-mum-tri-ocean",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 13500,
        totalRooms: 25,
        availableRooms: 10,
        amenities: ["Arabian Sea Ocean View", "King Bed", "Work Desk", "Luxury Bath"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-mum-tri-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 24000,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["Corner Suite with Queen's Necklace View", "Living Lounge", "Club Floor Access"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-mumbai-citizen",
    name: "Citizen Hotel, Juhu Beach",
    destinationId: "dest-mumbai",
    address: "960 Juhu Tara Road, Juhu Beachfront, Mumbai 400049",
    description: "Popular 4-star beachfront hotel opening straight onto the lively sands of Juhu Beach with sea-facing sunset dining.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.3,
    category: "FOUR_STAR",
    amenities: ["Direct Juhu Beach Access", "Sea View Restaurant", "Free Breakfast", "Airport Shuttle", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    pricePerNight: 6800,
    totalRooms: 35,
    availableRooms: 14,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-mum-cit-sea",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 6800,
        totalRooms: 20,
        availableRooms: 8,
        amenities: ["Arabian Sea Facing", "Queen Bed", "Tea Maker", "AC"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-mum-cit-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 10800,
        totalRooms: 15,
        availableRooms: 6,
        amenities: ["2 Double Beds", "Direct Sunset View", "Mini Fridge", "En-suite Bath"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 4. JAIPUR (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-jaipur-rambagh",
    name: "Rambagh Palace, Jaipur",
    destinationId: "dest-jaipur",
    address: "Bhawani Singh Road, Jaipur 302005",
    description: "Former royal residence of the Maharaja of Jaipur, renowned as one of the finest heritage luxury palaces in the world across 47 acres of gardens.",
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.96,
    category: "LUXURY",
    amenities: ["Royal Gardens", "Indoor & Outdoor Pools", "Jiva Grande Spa", "Vintage Car Carriage Tour", "Fine Dining Palaces", "Royal Butler"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 28000,
    totalRooms: 25,
    availableRooms: 6,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-jpr-ram-pal",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 28000,
        totalRooms: 15,
        availableRooms: 4,
        amenities: ["Maharaja Palace Room", "Ornate Frescoes", "King Bed", "Royal Garden View"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-jpr-ram-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 48000,
        totalRooms: 10,
        availableRooms: 2,
        amenities: ["Royal Historical Suite", "Antique Rajput Furniture", "Private Dining Terrace", "Butler"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-jaipur-itc",
    name: "ITC Rajputana, A Luxury Collection Hotel",
    destinationId: "dest-jaipur",
    address: "Palace Road, Gopalbari, Jaipur 302006",
    description: "Regal 5-star haven designed in the architectural style of traditional Rajasthani stepwells, long corridors, and courtyards.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    category: "FIVE_STAR",
    amenities: ["Stepwell Courtyard Pool", "Kaya Kalp Spa", "Peshawri Specialty Restaurant", "Fitness Club", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 10500,
    totalRooms: 40,
    availableRooms: 16,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-jpr-itc-roy",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 10500,
        totalRooms: 25,
        availableRooms: 11,
        amenities: ["Rajputana Royale Decor", "King Bed", "Courtyard View", "Deep Soak Tub"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-jpr-itc-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 19500,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["Thikana Suite", "Spacious Lounge", "Lounge Access", "Fruit Basket"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-jaipur-alsisar",
    name: "Alsisar Haveli - A Heritage Hotel",
    destinationId: "dest-jaipur",
    address: "Sansar Chandra Road, Pink City, Jaipur 302001",
    description: "Charming restored 1892 Rajput noble haveli with tranquil central swimming pool courtyard, antique chandeliers, and hand-painted frescoes.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.6,
    category: "FOUR_STAR",
    amenities: ["Heritage Haveli Courtyard", "Outdoor Pool", "Traditional Rajasthani Dining", "Free Breakfast", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    pricePerNight: 5800,
    totalRooms: 35,
    availableRooms: 12,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-jpr-als-std",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 5800,
        totalRooms: 20,
        availableRooms: 7,
        amenities: ["Haveli Courtyard View", "Handcrafted Furniture", "Four-Poster Bed", "AC"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-jpr-als-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 9400,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["2 Queen Beds", "Spacious Seating", "Antique Decor", "Modern Bathroom"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 5. MANALI (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-manali-castle",
    name: "The Himalayan Castle & Luxury Resort",
    destinationId: "dest-manali",
    address: "Hadimba Temple Road, Manali 175131",
    description: "Victorian Gothic style stone castle set amidst apple orchards, offering sweeping vistas of snow-capped Himalayan peaks and pine forests.",
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    category: "LUXURY",
    amenities: ["Panoramic Mountain View", "Apple Orchard Walks", "Fireplace Lounges", "Heated Pool", "Fine Dining", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    pricePerNight: 9500,
    totalRooms: 28,
    availableRooms: 11,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-mnl-cas-dlx",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 9500,
        totalRooms: 16,
        availableRooms: 7,
        amenities: ["Snow Mountain Balcony", "Stone Fireplace", "King Bed", "Hardwood Floors"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-mnl-cas-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 16500,
        totalRooms: 12,
        availableRooms: 4,
        amenities: ["2-Storey Castle Tower Suite", "Attic Bedroom", "Private Fireplace", "Valley Views"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-manali-span",
    name: "Span Resort & Spa, Manali",
    destinationId: "dest-manali",
    address: "Baragran Bihal, NH 21, Beas Riverfront, Manali 175129",
    description: "Pristine 5-star riverfront resort situated on the banks of the rushing Beas River with private helipad and alpine spa.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    category: "FIVE_STAR",
    amenities: ["Beas Riverfront Lawn", "Helipad Access", "Span Ayurvedic Spa", "Trout Fishing", "Riverside Dining", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 14000,
    totalRooms: 35,
    availableRooms: 12,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-mnl-span-riv",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 14000,
        totalRooms: 20,
        availableRooms: 7,
        amenities: ["Direct River & Pine View", "Private Sit-out", "King Bed", "Heated Bathroom Floors"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-mnl-span-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 24500,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["Luxury Riverside Cottage", "Living Lounge with Fireplace", "Private Garden Patio"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-manali-solang",
    name: "Solang Valley Resort",
    destinationId: "dest-manali",
    address: "Solang Valley, VPO Palchan, Manali 175103",
    description: "Tranquil 4-star mountain lodge right at the edge of Solang Valley, perfect for ski and adventure sports enthusiasts.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.5,
    category: "FOUR_STAR",
    amenities: ["Ski & Snowboard Storage", "Glacier Views", "Gazebo Dining", "Campfire Evenings", "Free Breakfast", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    pricePerNight: 7400,
    totalRooms: 30,
    availableRooms: 13,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-mnl-sol-gla",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 7400,
        totalRooms: 18,
        availableRooms: 8,
        amenities: ["Glacier View Balcony", "Cedar Wood Interiors", "Queen Bed", "Heater"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-mnl-sol-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 11800,
        totalRooms: 12,
        availableRooms: 5,
        amenities: ["2 Queen Beds", "Panoramic Valley Windows", "Tea Station", "Room Heater"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 6. BENGALURU (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-blr-leela",
    name: "The Leela Palace Bengaluru",
    destinationId: "dest-bengaluru",
    address: "23 Old Airport Road, HAL 2nd Stage, Bengaluru 560008",
    description: "Palatial 5-star grand palace inspired by the architectural grandeur of the Royal Mysore Palace, surrounded by 7 acres of landscaped gardens.",
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    category: "LUXURY",
    amenities: ["Mysore Palace Architecture", "Outdoor Lagoon Pool", "Spa & Wellness", "Fine Dining", "Lush Gardens", "Butler Service"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 17000,
    totalRooms: 35,
    availableRooms: 11,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-blr-lee-prem",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 17000,
        totalRooms: 20,
        availableRooms: 7,
        amenities: ["Royal Garden Balcony", "King Bed", "Mother of Pearl Inlay Bath", "Espresso Bar"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-blr-lee-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 31000,
        totalRooms: 15,
        availableRooms: 4,
        amenities: ["Royal Club Suite", "Lounge Access", "Chauffeur Airport Transfer", "Deep Soak Tub"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-blr-itc",
    name: "ITC Gardenia, A Luxury Collection Hotel",
    destinationId: "dest-bengaluru",
    address: "1 Residency Road, Ashok Nagar, Bengaluru 560025",
    description: "Pioneering LEED Platinum eco-luxury 5-star hotel near UB City and Cubbon Park, inspired by nature with open gardens on every floor.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    category: "FIVE_STAR",
    amenities: ["LEED Platinum Certified", "Helipad", "Kaya Kalp Spa", "Rooftop Japanese Dining", "Rooftop Pool", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 12500,
    totalRooms: 40,
    availableRooms: 14,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-blr-itc-tow",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 12500,
        totalRooms: 25,
        availableRooms: 9,
        amenities: ["Towers Room", "Sky Garden Balcony", "King Bed", "Ergonomic Work Station"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-blr-itc-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 22500,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["Flamingo Suite", "Private Dining Salon", "Club Lounge Access", "Luxury Toiletries"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-blr-chancery",
    name: "The Chancery Pavilion",
    destinationId: "dest-bengaluru",
    address: "135 Residency Road, Central Business District, Bengaluru 560025",
    description: "Upscale 4-star contemporary business hotel in the central district featuring outdoor swimming pool and convenient access to MG Road.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.4,
    category: "FOUR_STAR",
    amenities: ["Central Location", "Swimming Pool", "Gym", "Breakfast Included", "Bar & Lounge", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    pricePerNight: 6200,
    totalRooms: 45,
    availableRooms: 18,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-blr-cha-exe",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 6200,
        totalRooms: 28,
        availableRooms: 12,
        amenities: ["City View", "Queen Bed", "High Speed Internet", "Rain Shower"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-blr-cha-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 9800,
        totalRooms: 17,
        availableRooms: 6,
        amenities: ["2 Queen Beds", "Separate Seating", "Coffee Machine", "En-suite Bath"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 7. KOLKATA (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-kol-oberoi",
    name: "The Oberoi Grand, Kolkata",
    destinationId: "dest-kolkata",
    address: "15 Jawaharlal Nehru Road, Chowringhee, Kolkata 700013",
    description: "The revered 'Grande Dame of Chowringhee' Victorian palace hotel offering classical colonial elegance and calm pool courtyards.",
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    category: "LUXURY",
    amenities: ["Colonial Heritage Palace", "Courtyard Swimming Pool", "Oberoi Spa", "Baan Thai Restaurant", "Valet Parking", "Butler Service"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 14500,
    totalRooms: 35,
    availableRooms: 12,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-kol-obe-prem",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 14500,
        totalRooms: 20,
        availableRooms: 8,
        amenities: ["Pool Courtyard View", "Four-Poster Teak Bed", "Marble Bathroom", "Espresso Machine"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-kol-obe-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 26000,
        totalRooms: 15,
        availableRooms: 4,
        amenities: ["Grand Heritage Suite", "Spacious Living Room", "Dedicated Butler", "Fruit Basket"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-kol-itc",
    name: "ITC Sonar, A Luxury Collection Hotel",
    destinationId: "dest-kolkata",
    address: "1 JBS Haldane Avenue, EM Bypass, Kolkata 700046",
    description: "Distinctive 5-star resort hotel celebrating the golden era of Bengal, nestled amidst water lily ponds and lush green lawns.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    category: "FIVE_STAR",
    amenities: ["Water Lily Lagoon Views", "Kaya Kalp Spa", "Dum Pukht Restaurant", "Outdoor Swimming Pool", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 10800,
    totalRooms: 40,
    availableRooms: 15,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-kol-itc-clu",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 10800,
        totalRooms: 25,
        availableRooms: 10,
        amenities: ["Executive Club Room", "Lily Pond View", "King Bed", "Rain Shower"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-kol-itc-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 19500,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["ITC One Luxury Suite", "Private Dining Area", "Lounge Access", "Personalized Bar"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-kol-lalit",
    name: "The Lalit Great Eastern Kolkata",
    destinationId: "dest-kolkata",
    address: "1-3 Old Court House Street, Dalhousie Square, Kolkata 700069",
    description: "Historic 1840 hotel often termed the 'Jewel of the East', effortlessly blending Victorian, Edwardian, and Contemporary wings.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.5,
    category: "FOUR_STAR",
    amenities: ["Heritage Architecture", "Rejuve The Spa", "Outdoor Swimming Pool", "Artisan Bakery", "Central Location", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    pricePerNight: 7900,
    totalRooms: 40,
    availableRooms: 16,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-kol-lal-sup",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 7900,
        totalRooms: 25,
        availableRooms: 11,
        amenities: ["Heritage Wing Room", "Queen Bed", "High Ceilings", "Modern Ensuite"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-kol-lal-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 12500,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["2 Queen Beds", "Spacious Seating", "Historic Views", "Coffee Machine"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 8. BHUBANESWAR (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-bbi-mayfair",
    name: "Mayfair Lagoon, Bhubaneswar",
    destinationId: "dest-bhubaneswar",
    address: "8-B Jaydev Vihar, Bhubaneswar 751013",
    description: "Award-winning eco-luxury 5-star sanctuary nestled around a serene lagoon, featuring lush tropical foliage, heritage Odia statues, and cottages.",
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.85,
    category: "LUXURY",
    amenities: ["Lagoon Boardwalk", "Cottage Villas", "Swimming Pool", "Mayfair Spa", "Authentic Odia & Tea House Dining", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 8500,
    totalRooms: 35,
    availableRooms: 14,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-bbi-may-del",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 8500,
        totalRooms: 20,
        availableRooms: 9,
        amenities: ["Lagoon Balcony View", "Odia Handloom Accents", "King Bed", "Marble Bath"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-bbi-may-cot",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 16500,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["Private Lagoon Cottage", "Sunken Bath", "Plunge Pool Access", "Private Veranda"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-bbi-trident",
    name: "Trident Hotel Bhubaneswar",
    destinationId: "dest-bhubaneswar",
    address: "CB-1 Nayapalli, Bhubaneswar 751013",
    description: "Peaceful 5-star haven set amidst 14 acres of manicured landscaped gardens and fruit orchards, reflecting traditional Kalinga architecture.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    category: "FIVE_STAR",
    amenities: ["Manicured Orchard Grounds", "Outdoor Swimming Pool", "Jogging Track", "Fine Dining", "Fitness Center", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 7800,
    totalRooms: 35,
    availableRooms: 12,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-bbi-tri-gar",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 7800,
        totalRooms: 20,
        availableRooms: 7,
        amenities: ["Garden View", "King Bed", "Writing Desk", "Rain Shower"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-bbi-tri-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 14500,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["Executive Garden Suite", "Living Room", "Fruit Basket", "Deep Tub"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-bbi-vivanta",
    name: "Vivanta Bhubaneswar, DN Square",
    destinationId: "dest-bhubaneswar",
    address: "DN Square, Patia / Kalinga Nagar, Bhubaneswar 751003",
    description: "Contemporary 5-star hotel in the vibrant northern corridor of Bhubaneswar, boasting rooftop infinity pool and stylish rooms.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.6,
    category: "FOUR_STAR",
    amenities: ["Rooftop Infinity Pool", "Fitness Hub", "Mynt Multi-Cuisine Diner", "Wink Bar", "Free Wi-Fi", "Free Parking"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 6400,
    totalRooms: 40,
    availableRooms: 16,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-bbi-viv-sup",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 6400,
        totalRooms: 25,
        availableRooms: 11,
        amenities: ["City View", "King Bed", "Smart TV", "Ergonomic Desk"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-bbi-viv-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 10200,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["2 Queen Beds", "Living Area", "Tea/Coffee Station", "Spacious Bath"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 9. KERALA (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-ker-kumarakom",
    name: "Kumarakom Lake Resort",
    destinationId: "dest-kerala",
    address: "Vembanad Lake, Kumarakom, Kottayam, Kerala 686566",
    description: "Ultra-luxury heritage resort beside Vembanad Lake offering traditional 16th-century Kerala manas, meandering pool villas, and Ayurmana.",
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.95,
    category: "LUXURY",
    amenities: ["Meandering Pool Villa Access", "Vembanad Lake Cruises", "Ayurmana Ayurvedic Spa", "Seafood Bar", "Infinity Pool", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    pricePerNight: 18000,
    totalRooms: 28,
    availableRooms: 9,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-ker-kum-vil",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 18000,
        totalRooms: 16,
        availableRooms: 5,
        amenities: ["Direct Meandering Pool Access", "Open-to-sky Bathroom", "Teak Bed", "Patio"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-ker-kum-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 32000,
        totalRooms: 12,
        availableRooms: 4,
        amenities: ["Presidential Lake Villa", "Private Plunge Pool", "Sunset Veranda", "Butler"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-ker-brunton",
    name: "Brunton Boatyard - CGH Earth",
    destinationId: "dest-kerala",
    address: "1/498 Calvathy Road, Fort Kochi, Kerala 682001",
    description: "Immaculate colonial 5-star hotel built on a historic Victorian shipyard in Fort Kochi, offering sea-facing rooms overlooking the harbor.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    category: "FIVE_STAR",
    amenities: ["Harbor & Sea Facing", "Sunset Boat Cruise", "Outdoor Pool", "Ayurvedic Spa", "History Pier Dining", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 12500,
    totalRooms: 30,
    availableRooms: 10,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-ker-bru-sea",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 12500,
        totalRooms: 18,
        availableRooms: 6,
        amenities: ["Sea Facing Harbor Balcony", "Antique Dutch Furniture", "Four-Poster Bed", "Tub"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-ker-bru-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 21000,
        totalRooms: 12,
        availableRooms: 4,
        amenities: ["Colonial Harbor Suite", "Living Room", "Panoramic Delta View", "Complimentary Tea"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-ker-windermere",
    name: "Windermere Estate, Munnar",
    destinationId: "dest-kerala",
    address: "Bison Valley Road, Pothamedu, Munnar, Kerala 685612",
    description: "Boutique plantation retreat perched on a cardamom and tea hill with breathtaking misty mountain vistas, tranquility, and nature trails.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    category: "FOUR_STAR",
    amenities: ["Tea Plantation Walks", "Mountain View Terraces", "Campfire", "Farm-to-Table Dining", "Library", "Free Wi-Fi"],
    checkInTime: "13:00",
    checkOutTime: "11:00",
    pricePerNight: 8900,
    totalRooms: 25,
    availableRooms: 9,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-ker-win-gar",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 8900,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["Cardamom Plantation View", "Cedar Wood Accents", "Veranda", "Coffee Maker"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-ker-win-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 14500,
        totalRooms: 10,
        availableRooms: 4,
        amenities: ["Planter's Villa", "2 Bedrooms", "Private Fireplace", "Panoramic Valley Views"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 10. HYDERABAD (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-hyd-falaknuma",
    name: "Taj Falaknuma Palace, Hyderabad",
    destinationId: "dest-hyderabad",
    address: "Engine Bowli, Fatima Nagar, Falaknuma, Hyderabad 500053",
    description: "2000-foot hilltop royal Italian-marble palace of the legendary Nizams of Hyderabad, featuring palace horse carriages and coronation dining halls.",
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.97,
    category: "LUXURY",
    amenities: ["Royal Horse Carriage Arrival", "Nizam Dining Halls", "Palace Historian Walk", "Jade Room Library", "Jiva Spa", "Butler Service"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 32000,
    totalRooms: 25,
    availableRooms: 6,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-hyd-fal-pal",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 32000,
        totalRooms: 15,
        availableRooms: 4,
        amenities: ["Palace Wing Luxury Room", "Italian Marble Bath", "City Skyline View", "Royal Butler"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-hyd-fal-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 55000,
        totalRooms: 10,
        availableRooms: 2,
        amenities: ["Historical Royal Suite", "Grand Antique Foyer", "Private Terrace", "Personal Valet"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-hyd-kohenur",
    name: "ITC Kohenur, A Luxury Collection Hotel",
    destinationId: "dest-hyderabad",
    address: "Plot No. 5, Survey No. 83/1, HITEC City, Hyderabad 500081",
    description: "Architectural masterpiece overlooking Durgam Cheruvu lake in HITEC City, inspired by the legendary Kohinoor diamond.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    category: "FIVE_STAR",
    amenities: ["Lake View Terrace", "Outdoor Pool", "Kaya Kalp Spa", "Dum Pukht Begum's Dining", "Executive Lounge", "Free Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 12000,
    totalRooms: 40,
    availableRooms: 14,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-hyd-koh-exe",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 12000,
        totalRooms: 25,
        availableRooms: 9,
        amenities: ["Lake View Balcony", "King Bed", "Rain Shower", "Work Desk"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-hyd-koh-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 21500,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["Kohenur Suite", "Living Room", "Club Lounge Access", "Deep Soak Tub"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-hyd-hyatt",
    name: "Park Hyatt Hyderabad",
    destinationId: "dest-hyderabad",
    address: "Road No. 2, Banjara Hills, Hyderabad 500034",
    description: "Upscale 5-star haven in prestigious Banjara Hills with 8-story atrium, Silk Route artwork, and tranquil infinity pool.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    category: "FOUR_STAR",
    amenities: ["Atrium Lobby", "Infinity Pool", "The Spa", "Tre-Forni Italian Restaurant", "Free Wi-Fi", "Free Parking"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    pricePerNight: 9800,
    totalRooms: 35,
    availableRooms: 12,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-hyd-hya-kng",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 9800,
        totalRooms: 20,
        availableRooms: 7,
        amenities: ["Banjara Hills View", "King Bed", "Spa Bath", "Nespresso Machine"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-hyd-hya-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 15500,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["2 Queen Beds", "Spacious Lounge Area", "Marble Bath", "Smart TV"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 11. DUBAI (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-dxb-burj",
    name: "Burj Al Arab Jumeirah, Dubai",
    destinationId: "dest-dubai",
    address: "Jumeirah Beach Road, Umm Suqeim 3, Dubai",
    description: "The world's only iconic all-suite 7-star sail-shaped luxury palace, offering private beach, Rolls-Royce chauffeurs, and duplex suites.",
    imageUrls: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.98,
    category: "LUXURY",
    amenities: ["Private Island Location", "Rolls-Royce Chauffeur", "Duplex Suites", "Talise Spa", "Private Beach", "24/7 Personal Butler"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 85000,
    totalRooms: 20,
    availableRooms: 4,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-dxb-bur-one",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 85000,
        totalRooms: 12,
        availableRooms: 3,
        amenities: ["Panoramic Gulf Duplex", "Gold-leaf Architecture", "Hermès Amenities", "Butler"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-dxb-bur-two",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 145000,
        totalRooms: 8,
        availableRooms: 1,
        amenities: ["Two-Bedroom Presidential Duplex", "Private Dining Salon", "Cinema Lounge", "Butler"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-dxb-atlantis",
    name: "Atlantis, The Palm Dubai",
    destinationId: "dest-dubai",
    address: "Crescent Road, Palm Jumeirah, Dubai",
    description: "Majestic 5-star ocean-themed resort crowning Palm Jumeirah with Aquaventure Waterpark, underwater suites, and Gordon Ramsay dining.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    category: "FIVE_STAR",
    amenities: ["Complimentary Aquaventure Waterpark", "Lost Chambers Aquarium", "White Sand Beach", "Celebrity Restaurants", "Free Wi-Fi"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 36000,
    totalRooms: 35,
    availableRooms: 12,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-dxb-atl-ocn",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 36000,
        totalRooms: 20,
        availableRooms: 7,
        amenities: ["Palm Ocean View", "King Bed", "Balcony", "Waterpark Entry Included"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-dxb-atl-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 54000,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["2 Queen Beds", "Terrace with Skyline View", "Imperial Club Lounge Access"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-dxb-marriott",
    name: "JW Marriott Marquis Hotel Dubai",
    destinationId: "dest-dubai",
    address: "Sheikh Zayed Road, Business Bay, Dubai",
    description: "Soaring landmark 5-star twin towers in Business Bay, featuring panoramic city skyline views, tranquil outdoor pool, and 12 dining venues.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.6,
    category: "FOUR_STAR",
    amenities: ["Outdoor Swimming Pool", "Saray Spa", "Dubai Canal Proximity", "Free Wi-Fi", "12 Award-Winning Restaurants"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 16500,
    totalRooms: 40,
    availableRooms: 16,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-dxb-mar-sky",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 16500,
        totalRooms: 25,
        availableRooms: 10,
        amenities: ["Skyline View", "King Bed", "Marble Bathroom with Tub", "Smart TV"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-dxb-mar-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 28000,
        totalRooms: 15,
        availableRooms: 6,
        amenities: ["Corner Executive Suite", "Burj Khalifa Views", "Lounge Access", "Espresso Bar"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 12. SINGAPORE (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-sin-mbs",
    name: "Marina Bay Sands, Singapore",
    destinationId: "dest-singapore",
    address: "10 Bayfront Avenue, Marina Bay, Singapore 018956",
    description: "World-famous integrated resort featuring the legendary 57th-floor rooftop Infinity Pool, Sands SkyPark, celebrity restaurants, and luxury mall.",
    imageUrls: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    category: "LUXURY",
    amenities: ["Rooftop 57th Floor Infinity Pool", "Sands SkyPark", "Banyan Tree Spa", "Gardens by the Bay Bridge", "Celebrity Dining", "Free Wi-Fi"],
    checkInTime: "15:00",
    checkOutTime: "11:00",
    pricePerNight: 42000,
    totalRooms: 30,
    availableRooms: 9,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-sin-mbs-har",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 42000,
        totalRooms: 18,
        availableRooms: 6,
        amenities: ["Harbor & Gardens by the Bay View", "Exclusive Infinity Pool Access", "King Bed"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-sin-mbs-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 68000,
        totalRooms: 12,
        availableRooms: 3,
        amenities: ["Sands Premier Suite", "Marina Bay Skyline View", "Club55 Lounge Breakfast", "Butler"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-sin-raffles",
    name: "Raffles Singapore",
    destinationId: "dest-singapore",
    address: "1 Beach Road, Singapore 189673",
    description: "Storied 1887 colonial grande dame birthplace of the Singapore Sling, offering timeless heritage luxury, tranquil courtyards, and suites.",
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.96,
    category: "FIVE_STAR",
    amenities: ["Long Bar & Singapore Sling", "Private Veranda Suites", "Raffles Spa", "Lush Courtyards", "Raffles Butler Service", "Free Wi-Fi"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 55000,
    totalRooms: 25,
    availableRooms: 7,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-sin-raf-cou",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 55000,
        totalRooms: 15,
        availableRooms: 4,
        amenities: ["Courtyard Suite", "Teak Veranda", "Four-Poster Bed", "Peranakan Tiles", "Butler"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-sin-raf-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 85000,
        totalRooms: 10,
        availableRooms: 3,
        amenities: ["Palm Court Suite", "Grand Parlor", "Dedicated Butler", "Marble Bathroom with Tub"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-sin-panpac",
    name: "Pan Pacific Singapore",
    destinationId: "dest-singapore",
    address: "7 Raffles Boulevard, Marina Square, Singapore 039595",
    description: "Contemporary 5-star haven overlooking Marina Bay and the Singapore Flyer, featuring an outdoor pool, award-winning spa, and dining.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    category: "FOUR_STAR",
    amenities: ["Marina Bay Proximity", "Circular Outdoor Pool", "St. Gregory Spa", "Free Wi-Fi", "Award-Winning Buffet"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 18500,
    totalRooms: 35,
    availableRooms: 14,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-sin-pan-pan",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 18500,
        totalRooms: 20,
        availableRooms: 8,
        amenities: ["Marina Bay Skyline Balcony", "King Bed", "Ergonomic Desk", "Smart TV"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-sin-pan-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 29000,
        totalRooms: 15,
        availableRooms: 6,
        amenities: ["2 Double Beds", "City View", "Living Area", "Bathtub"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 13. PARIS (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-par-ritz",
    name: "The Ritz Paris",
    destinationId: "dest-paris",
    address: "15 Place Vendôme, 1st Arrondissement, 75001 Paris, France",
    description: "The epitome of Belle Époque Parisian palace luxury on Place Vendôme, beloved by Coco Chanel and Ernest Hemingway.",
    imageUrls: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.97,
    category: "LUXURY",
    amenities: ["Place Vendôme Location", "Ritz Club & Indoor Pool", "Bar Hemingway", "Michelin Dining", "Private Garden", "Butler"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 78000,
    totalRooms: 25,
    availableRooms: 6,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-par-rit-sup",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 78000,
        totalRooms: 15,
        availableRooms: 4,
        amenities: ["French Neoclassical Decor", "King Bed", "Carrara Marble Bath", "Gold Swan Faucets"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-par-rit-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 135000,
        totalRooms: 10,
        availableRooms: 2,
        amenities: ["Prestige Suite Place Vendôme", "Separate Drawing Room", "Walk-in Wardrobe", "Butler"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-par-plaza",
    name: "Hôtel Plaza Athénée, Paris",
    destinationId: "dest-paris",
    address: "25 Avenue Montaigne, 8th Arrondissement, 75008 Paris, France",
    description: "Haute couture 5-star palace hotel on Avenue Montaigne with signature red geranium balconies, Dior Spa, and Eiffel Tower views.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    category: "FIVE_STAR",
    amenities: ["Eiffel Tower Views", "Dior Spa", "Courtyard Ice Rink / Summer Garden", "Alain Ducasse Heritage", "Free Wi-Fi"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 65000,
    totalRooms: 30,
    availableRooms: 8,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-par-pla-eif",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 65000,
        totalRooms: 18,
        availableRooms: 5,
        amenities: ["Direct Eiffel Tower View Balcony", "Louis XVI Furniture", "King Bed", "Marble Bath"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-par-pla-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 110000,
        totalRooms: 12,
        availableRooms: 3,
        amenities: ["Art Deco Suite Avenue Montaigne", "Private Salon", "Dior Bath Amenities", "Butler"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-par-pullman",
    name: "Pullman Paris Tour Eiffel",
    destinationId: "dest-paris",
    address: "18 Avenue de Suffren, 15th Arrondissement, 75015 Paris, France",
    description: "Modern 4-star design hotel located right at the foot of the Eiffel Tower with private balconies overlooking the iron lady.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.6,
    category: "FOUR_STAR",
    amenities: ["Eiffel Tower Base Location", "Balconies with Direct Tower View", "FRAME Brasserie", "Fitness Lounge", "Free Wi-Fi"],
    checkInTime: "15:00",
    checkOutTime: "11:00",
    pricePerNight: 22000,
    totalRooms: 40,
    availableRooms: 14,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-par-pul-tow",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 22000,
        totalRooms: 25,
        availableRooms: 9,
        amenities: ["Eiffel Tower Balcony", "Queen Bed", "Nespresso Machine", "Rain Shower"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-par-pul-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 35000,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["2 Connected Rooms", "Direct Tower Night Light Show View", "2 Bathrooms"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 14. LONDON (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-lon-savoy",
    name: "The Savoy, London",
    destinationId: "dest-london",
    address: "Strand, Covent Garden, London WC2R 0EZ, United Kingdom",
    description: "World-famous Edwardian and Art Deco luxury hotel overlooking the River Thames, home to the iconic American Bar and Gordon Ramsay's Savoy Grill.",
    imageUrls: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.93,
    category: "LUXURY",
    amenities: ["Thames River View", "The American Bar", "Savoy Grill", "Indoor Pool & Thermal Spa", "Covent Garden Walk", "Savoy Butler"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 58000,
    totalRooms: 30,
    availableRooms: 8,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-lon-sav-tha",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 58000,
        totalRooms: 18,
        availableRooms: 5,
        amenities: ["Thames River Panorama", "Art Deco Heritage", "King Bed", "Marble Bathroom"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-lon-sav-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 98000,
        totalRooms: 12,
        availableRooms: 3,
        amenities: ["Personality River Suite", "Grand Drawing Room", "Savoy Butler", "Cocktail Bar"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-lon-corinthia",
    name: "Corinthia London",
    destinationId: "dest-london",
    address: "Whitehall Place, Westminster, London SW1A 2BD, United Kingdom",
    description: "Grand 5-star Victorian landmark between Trafalgar Square and the River Thames, featuring multi-award-winning ESPA Life four-floor spa.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    category: "FIVE_STAR",
    amenities: ["ESPA Life 4-Floor Spa", "Kerridge's Bar & Grill", "Baccarat Chandelier Lounge", "Westminster Proximity", "Free Wi-Fi"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 52000,
    totalRooms: 35,
    availableRooms: 11,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-lon-cor-exe",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 52000,
        totalRooms: 20,
        availableRooms: 7,
        amenities: ["Executive King Room", "Courtyard View", "Deep Soak Marble Tub", "Nespresso"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-lon-cor-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 88000,
        totalRooms: 15,
        availableRooms: 4,
        amenities: ["Trafalgar Penthouse Suite", "Private Roof Terrace", "Fireplace", "Butler"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-lon-citizenm",
    name: "CitizenM Tower of London",
    destinationId: "dest-london",
    address: "40 Trinity Square, City of London, London EC3N 4DJ, United Kingdom",
    description: "Sleek 4-star boutique hotel directly above Tower Hill station with breathtaking panoramic rooftop views over the Tower of London and River Thames.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.5,
    category: "FOUR_STAR",
    amenities: ["Rooftop Bar with Tower View", "Direct Tube Station Entry", "MoodPad Smart Room Controls", "Free Ultra-Fast Wi-Fi"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    pricePerNight: 16800,
    totalRooms: 40,
    availableRooms: 16,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-lon-cit-tow",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 16800,
        totalRooms: 25,
        availableRooms: 10,
        amenities: ["Tower of London View", "XL King Bed", "Rain Shower", "iPad Room Automation"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-lon-cit-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 27000,
        totalRooms: 15,
        availableRooms: 6,
        amenities: ["2 Interconnecting King Rooms", "Thames & Tower Views", "2 Rain Showers"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },

  // --------------------------------------------------
  // 15. TOKYO (3 Hotels)
  // --------------------------------------------------
  {
    id: "hotel-tok-aman",
    name: "Aman Tokyo",
    destinationId: "dest-tokyo",
    address: "The Otemachi Tower, 1-5-6 Otemachi, Chiyoda-ku, Tokyo 100-0004, Japan",
    description: "Sublime urban sanctuary crowning Otemachi Tower, combining traditional Japanese ryokan elements, washi paper screens, and 30-meter pool.",
    imageUrls: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.97,
    category: "LUXURY",
    amenities: ["Imperial Gardens & Mount Fuji View", "30m Panoramic Indoor Pool", "Aman Spa & Onsen", "Musashi by Aman Sushi", "Free Wi-Fi"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 72000,
    totalRooms: 25,
    availableRooms: 6,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-tok-ama-del",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 72000,
        totalRooms: 15,
        availableRooms: 4,
        amenities: ["Imperial Palace Garden View", "Furo Soaking Tub", "Washi Paper Partitions", "King Bed"],
        imageUrls: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-tok-ama-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 125000,
        totalRooms: 10,
        availableRooms: 2,
        amenities: ["Corner Aman Suite with Mount Fuji View", "Shoji Living Salon", "Pantry", "Butler"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-tok-parkhyatt",
    name: "Park Hyatt Tokyo",
    destinationId: "dest-tokyo",
    address: "3-7-1-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo 163-1055, Japan",
    description: "Famous high-altitude hotel occupying the top 14 floors of Shinjuku Park Tower with Club on the Park spa and New York Bar.",
    imageUrls: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    category: "FIVE_STAR",
    amenities: ["Club on the Park 47th Floor Pool", "New York Grill & Live Jazz Bar", "Mount Fuji Views", "Free Wi-Fi"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 48000,
    totalRooms: 30,
    availableRooms: 9,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-tok-prk-sky",
        type: "DELUXE",
        capacity: 2,
        pricePerNight: 48000,
        totalRooms: 18,
        availableRooms: 6,
        amenities: ["Shinjuku Skyline High Floor", "King Bed", "Deep Marble Soaking Tub", "Walk-in Closet"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-tok-prk-ste",
        type: "SUITE",
        capacity: 4,
        pricePerNight: 85000,
        totalRooms: 12,
        availableRooms: 3,
        amenities: ["Park Suite with Mount Fuji View", "Spacious Living Room", "Club on the Park Access"],
        imageUrls: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  },
  {
    id: "hotel-tok-cerulean",
    name: "Cerulean Tower Tokyu Hotel, Shibuya",
    destinationId: "dest-tokyo",
    address: "26-1 Sakuragaokacho, Shibuya-ku, Tokyo 150-8512, Japan",
    description: "Modern 5-star skyscraper towering above Shibuya Station, providing dramatic vistas over Tokyo Tower, Roppongi, and Mount Fuji.",
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.6,
    category: "FOUR_STAR",
    amenities: ["Shibuya Crossing 5-Min Walk", "Indoor Pool", "Top Floor Bellovisto Bar", "Fitness Club", "Free Wi-Fi"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    pricePerNight: 21000,
    totalRooms: 35,
    availableRooms: 13,
    cancellationPolicyId: "cp-standard-01",
    status: "ACTIVE",
    isDemo: true,
    rooms: [
      {
        id: "room-tok-cer-tow",
        type: "SUPERIOR",
        capacity: 2,
        pricePerNight: 21000,
        totalRooms: 20,
        availableRooms: 8,
        amenities: ["Shibuya City High Floor View", "Queen Bed", "Yukata Robes", "Rain Shower"],
        imageUrls: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      },
      {
        id: "room-tok-cer-fam",
        type: "FAMILY",
        capacity: 4,
        pricePerNight: 34000,
        totalRooms: 15,
        availableRooms: 5,
        amenities: ["2 Queen Beds", "Panoramic Tokyo Tower View", "Executive Lounge Access"],
        imageUrls: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
        status: "AVAILABLE",
        isDemo: true
      }
    ]
  }
];

// 30 Curated Activities (2 for each of the 15 destinations)
const activities = [
  // 1. Goa
  {
    id: "act-goa-scuba",
    destinationId: "dest-goa",
    name: "Grand Island Scuba Diving & Water Sports Combo",
    description: "PADI-guided reef scuba dive, dolphin sightseeing boat cruise, jet-skiing, parasailing, and bumper rides at Baina Beach.",
    duration: "6 Hours",
    price: 2200,
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-goa-churches",
    destinationId: "dest-goa",
    name: "Old Goa Heritage Churches & Spice Plantation Feast Tour",
    description: "Guided architectural exploration of Basilica of Bom Jesus, Se Cathedral, followed by a tropical Sahakari spice farm buffet lunch.",
    duration: "5 Hours",
    price: 1450,
    imageUrl: "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 2. Delhi
  {
    id: "act-delhi-food",
    destinationId: "dest-delhi",
    name: "Old Delhi Chandni Chowk Food & Heritage Rickshaw Trail",
    description: "Immersive culinary walk through historic Chandni Chowk, Paranthe Wali Gali, Khari Baoli spice market, and Jama Masjid with local food guide.",
    duration: "3.5 Hours",
    price: 1250,
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-delhi-monuments",
    destinationId: "dest-delhi",
    name: "UNESCO World Heritage Private Day Tour: Qutub, Humayun & Red Fort",
    description: "Full-day chauffeured AC exploration of Delhi's premier Mughal and Sultanate landmarks with licensed archaeological guide.",
    duration: "7 Hours",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 3. Mumbai
  {
    id: "act-mumbai-south",
    destinationId: "dest-mumbai",
    name: "South Mumbai Colonial Heritage & Art Deco Walking Tour",
    description: "Fascinating walking narrative covering Gateway of India, Kala Ghoda Art Precinct, Chhatrapati Shivaji Maharaj Terminus, and Marine Drive.",
    duration: "3 Hours",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-mumbai-elephanta",
    destinationId: "dest-mumbai",
    name: "Elephanta Caves UNESCO Island Speedboat Tour & Guide",
    description: "Scenic 1-hour cruise across Mumbai harbor from Gateway of India to the 7th-century rock-cut Shiva cave temples with licensed guide.",
    duration: "4.5 Hours",
    price: 1950,
    imageUrl: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 4. Jaipur
  {
    id: "act-jaipur-amber",
    destinationId: "dest-jaipur",
    name: "Amber Fort & Sheesh Mahal Guided Palace Tour with Royal Stepwell",
    description: "Comprehensive guided discovery of the hilltop Amber Fort, mirror palace of Sheesh Mahal, and the mesmerizing Panna Meena Ka Kund stepwell.",
    duration: "4 Hours",
    price: 1400,
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-jaipur-bazaars",
    destinationId: "dest-jaipur",
    name: "Pink City Royal Bazaars, Hawa Mahal & Street Flavors Walk",
    description: "Vibrant photo walk in front of Hawa Mahal, gemstone and bandhani silk bazaars of Johari Bazaar, and authentic Lassiwala tasting.",
    duration: "3 Hours",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 5. Manali
  {
    id: "act-manali-paragliding",
    destinationId: "dest-manali",
    name: "Solang Valley High-Altitude Tandem Paragliding & Adventure",
    description: "Fly high over snow-covered Himalayan peaks with professional certified pilot, plus thrilling quad-bike mountain rides.",
    duration: "3 Hours",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-manali-jogini",
    destinationId: "dest-manali",
    name: "Jogini Waterfalls & Old Manali Pine Forest Alpine Trek",
    description: "Guided nature hike through whispering cedar and pine woodlands to cascading Jogini falls with traditional Himachali herbal tea.",
    duration: "4 Hours",
    price: 1100,
    imageUrl: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 6. Bengaluru
  {
    id: "act-blr-palace",
    destinationId: "dest-bengaluru",
    name: "Bangalore Palace & Cubbon Park Botanical Guided Tour",
    description: "Tudor-style royal Bangalore Palace walkthrough with audio guide, followed by a shaded botanical tree walk in historic Cubbon Park.",
    duration: "3.5 Hours",
    price: 1300,
    imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-blr-brewery",
    destinationId: "dest-bengaluru",
    name: "Bengaluru Craft Brewery & Gastronomic Food Trail",
    description: "Curated evening tasting flight across 3 premier Indiranagar microbreweries with brewmaster tour and artisanal food pairings.",
    duration: "4 Hours",
    price: 1750,
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 7. Kolkata
  {
    id: "act-kol-heritage",
    destinationId: "dest-kolkata",
    name: "Victoria Memorial, St. Paul's Cathedral & Howrah Bridge Walk",
    description: "Classic architecture tour covering marble Victoria Memorial galleries, grand neo-Gothic St. Paul's, and sunset river walk beside Howrah Bridge.",
    duration: "4 Hours",
    price: 1100,
    imageUrl: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-kol-culinary",
    destinationId: "dest-kolkata",
    name: "Historic Kolkata Tram Ride & Authentic Bengali Food Trail",
    description: "Vintage heritage tram ride to College Street, tasting legendary kathi rolls, crispy phuchkas, and traditional rasgullas and sandesh.",
    duration: "3.5 Hours",
    price: 1250,
    imageUrl: "https://images.unsplash.com/photo-1534777367038-a5048c861092?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 8. Bhubaneswar
  {
    id: "act-bbi-temples",
    destinationId: "dest-bhubaneswar",
    name: "Old Town Heritage Trail: Lingaraj, Mukteshwar & Rajarani Temples",
    description: "Intimate guided walking tour across 1,000-year-old Kalinga architectural stone masterworks and sacred Bindusagar lake.",
    duration: "3.5 Hours",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1629813366051-b58137b2792c?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-bbi-caves",
    destinationId: "dest-bhubaneswar",
    name: "Khandagiri & Udayagiri Ancient Rock-Cut Jain Caves Exploration",
    description: "Expert guided ascent through 2nd-century BCE rock-hewn caves, Emperor Kharavela's Hatigumpha inscription, and panoramic hill views.",
    duration: "3 Hours",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1600100397608-f010f445b955?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 9. Kerala
  {
    id: "act-ker-houseboat",
    destinationId: "dest-kerala",
    name: "Alleppey Houseboat Backwater Day Cruise & Traditional Sadya Feast",
    description: "Traditional thatched Kerala houseboat cruising serene lagoons and coconut canals with authentic banana-leaf Sadya feast.",
    duration: "5 Hours",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-ker-tea",
    destinationId: "dest-kerala",
    name: "Munnar Tea Plantations, Eravikulam Safari & Tea Museum Trek",
    description: "Jeep safari to Eravikulam National Park to spot Nilgiri Tahr, walking through emerald tea gardens, and tea-tasting workshop.",
    duration: "5.5 Hours",
    price: 1600,
    imageUrl: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 10. Hyderabad
  {
    id: "act-hyd-charminar",
    destinationId: "dest-hyderabad",
    name: "Charminar & Laad Bazaar Night Heritage Walk with Irani Chai",
    description: "Atmospheric evening exploration around illuminated Charminar, Mecca Masjid, vibrant lacquer bangle shops, and authentic Irani Chai with Osmania biscuits.",
    duration: "3 Hours",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-hyd-golconda",
    destinationId: "dest-hyderabad",
    name: "Golconda Fort Royal Heritage Guided Tour & Sound & Light Spectacle",
    description: "Acoustic wonder exploration of the diamond fortress of Golconda with licensed historian, followed by sunset voice-and-light show.",
    duration: "4.5 Hours",
    price: 1350,
    imageUrl: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 11. Dubai
  {
    id: "act-dxb-safari",
    destinationId: "dest-dubai",
    name: "Premium Red Dunes Desert Safari with BBQ Dinner & Dune Bashing",
    description: "4x4 Land Cruiser dune bashing in the Lahbab red desert, sandboarding, camel rides, falconry show, and sunset BBQ dinner under starlight.",
    duration: "6 Hours",
    price: 3800,
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-dxb-burjkhalifa",
    destinationId: "dest-dubai",
    name: "Burj Khalifa 124th & 125th Floor Observation Deck Tickets",
    description: "High-speed elevator ride to the summit observatory of the world's tallest building for 360-degree panoramic desert and sea vistas.",
    duration: "2 Hours",
    price: 3400,
    imageUrl: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 12. Singapore
  {
    id: "act-sin-gardens",
    destinationId: "dest-singapore",
    name: "Gardens by the Bay & Cloud Forest Flower Dome Pass",
    description: "Explore the futuristic Supertree Grove, the world's largest glass greenhouse Flower Dome, and mist-filled Cloud Forest waterfall.",
    duration: "3.5 Hours",
    price: 2200,
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-sin-sentosa",
    destinationId: "dest-singapore",
    name: "Sentosa Island Cable Car & Universal Studios Singapore Pass",
    description: "Scenic aerial cable car from Mount Faber across Singapore harbor straight into Universal Studios Singapore theme park rides.",
    duration: "Full Day (8 Hours)",
    price: 5600,
    imageUrl: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 13. Paris
  {
    id: "act-par-eiffel",
    destinationId: "dest-paris",
    name: "Eiffel Tower Summit Access & Seine River Sunset Cruise",
    description: "Priority elevator tickets to the topmost observation summit of the Eiffel Tower, followed by a romantic 1-hour cruise past Notre-Dame on the Seine.",
    duration: "3.5 Hours",
    price: 4200,
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-par-louvre",
    destinationId: "dest-paris",
    name: "Louvre Museum Priority Guided Tour: Mona Lisa & Masterpieces",
    description: "Skip-the-line access with art historian visiting the Mona Lisa, Venus de Milo, Winged Victory of Samothrace, and French Crown Jewels.",
    duration: "3 Hours",
    price: 4800,
    imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 14. London
  {
    id: "act-lon-tower",
    destinationId: "dest-london",
    name: "Tower of London & Crown Jewels Tour with River Thames Boat Cruise",
    description: "Early access to the Crown Jewels with Yeoman Warder Beefeater guide, the White Tower armory, and Thames sightseeing boat cruise to Westminster.",
    duration: "4 Hours",
    price: 3900,
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-lon-westminster",
    destinationId: "dest-london",
    name: "Westminster Abbey, Buckingham Palace & Changing of the Guard",
    description: "Royal walking tour to witness the Changing of the Guard, royal parks of St James's, and full audio tour inside historic Westminster Abbey.",
    duration: "3.5 Hours",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },

  // 15. Tokyo
  {
    id: "act-tok-teamlab",
    destinationId: "dest-tokyo",
    name: "TeamLab Planets Digital Art Museum & Tsukiji Outer Market Food Tour",
    description: "Barefoot immersive digital art installations at teamLab Planets Toyosu, paired with fresh sushi and wagyu skewers at Tsukiji market.",
    duration: "4.5 Hours",
    price: 3600,
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  },
  {
    id: "act-tok-fuji",
    destinationId: "dest-tokyo",
    name: "Mount Fuji 5th Station, Lake Kawaguchi & Hakone Ropeway Tour",
    description: "Full-day luxury coach expedition to Mount Fuji's 5th station, scenic Lake Kawaguchi cruise, and volcanic Owakudani cable car.",
    duration: "Full Day (10 Hours)",
    price: 6800,
    imageUrl: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=600&q=80",
    isDemo: true
  }
];

console.log(`Curated ${hotels.length} hotels and ${activities.length} activities.`);
module.exports = { hotels, activities };
