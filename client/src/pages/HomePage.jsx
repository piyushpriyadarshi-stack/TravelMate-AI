import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  Map, 
  Clock, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  CheckCircle2,
  Hotel as HotelIcon, 
  Plane,
  Train,
  Bus,
  Users,
  Compass,
  Star,
  MapPin,
  TrendingUp,
  Award,
  Quote,
  Send,
  Sun,
  Palmtree,
  Mountain,
  Heart,
  Calendar,
  Globe,
  Check,
  ExternalLink
} from "lucide-react";
import { HeroSearch } from "../components/HeroSearch";
import { DestinationCard } from "../components/DestinationCard";
import { HotelCard } from "../components/HotelCard";
import { TransportCard } from "../components/TransportCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Badge } from "../components/Badge";
import { apiService } from "../services/api";

export function HomePage() {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [transportation, setTransportation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [systemHealth, setSystemHealth] = useState(null);

  // VIP Club Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Travel Vibes quick selector
  const travelVibes = [
    { label: "🏖️ Beach Escapes", dest: "Goa" },
    { label: "❄️ Snow & Hills", dest: "Manali" },
    { label: "🏰 Royal Heritage", dest: "Jaipur" },
    { label: "🌆 Metro Lights", dest: "Mumbai" },
    { label: "🌴 Coastal Serenity", dest: "Bhubaneswar" },
    { label: "✨ Global Skylines", dest: "Dubai" }
  ];

  // Curated Seasonal Escapes
  const seasonalEscapes = [
    {
      id: "dest-goa",
      name: "Goa, India",
      vibe: "Tropical Beaches",
      tag: "Bestseller",
      weather: "28°C Sunny",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      description: "Sun-drenched golden sands, coastal shacks & Arabian Sea breeze.",
      highlights: ["Baga & Anjuna Beach", "Aguada Fort", "Fresh Seafood Shacks"]
    },
    {
      id: "dest-manali",
      name: "Manali, Himachal",
      vibe: "Snow & Alpine",
      tag: "Winter Peaks",
      weather: "12°C Alpine",
      price: "₹1,899",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      description: "Snow-draped Himalayan peaks, Solang Valley adventures & pine retreats.",
      highlights: ["Solang Adventure", "Rohtang Pass", "Old Manali Cafes"]
    },
    {
      id: "dest-jaipur",
      name: "Jaipur, Rajasthan",
      vibe: "Royal Heritage",
      tag: "Cultural Gem",
      weather: "26°C Pleasant",
      price: "₹2,199",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      description: "Majestic hilltop Amber Fort, Hawa Mahal & royal sandstone palaces.",
      highlights: ["Amber Fort", "Hawa Mahal", "Bazaar Handicrafts"]
    },
    {
      id: "dest-paris",
      name: "Paris, France",
      vibe: "Iconic Romance",
      tag: "International",
      weather: "18°C Mild",
      price: "₹8,499",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      description: "Eiffel Tower vistas, world-class Louvre art & historic Seine cruises.",
      highlights: ["Eiffel Tower", "Louvre Museum", "Montmartre Cafes"]
    }
  ];

  // Interactive AI Trip Planner prompts
  const aiPromptSuggestions = [
    {
      icon: "🏖️",
      title: "Goa Beachfront Weekend",
      prompt: "Plan a 4-day Goa friends trip for 4 with beachfront resort under ₹40,000.",
      tags: ["Beachfront", "Group of 4", "Budget ₹40k"]
    },
    {
      icon: "❄️",
      title: "Manali Snow Adventure",
      prompt: "5-day Manali snow adventure with Volvo bus transit from Delhi for 2 people.",
      tags: ["Alpine", "Couple", "Volvo Transit Sync"]
    },
    {
      icon: "👑",
      title: "Royal Jaipur Palace Tour",
      prompt: "Weekend royal palace tour of Jaipur with 5-star heritage stay and guided fort tours.",
      tags: ["Heritage", "Luxury", "Weekend Trip"]
    },
    {
      icon: "🌴",
      title: "Temple & Coastal Hub",
      prompt: "3-day spiritual and cultural tour of Bhubaneswar and Puri with AC cab transfers.",
      tags: ["Heritage", "Culture", "Cabs Included"]
    }
  ];

  // Authentic Verified Traveler Reviews
  const travelerReviews = [
    {
      name: "Sipun Patra",
      role: "Solo & Group Explorer",
      location: "Bhubaneswar to Goa",
      rating: 5,
      avatar: "S",
      avatarBg: "bg-sky-600",
      date: "Travelled Oct 2026",
      comment: "TravelMate made booking both flights and our beachfront resort effortless in one checkout. The AI itinerary matched our group budget perfectly with zero hidden fees!"
    },
    {
      name: "Ananya Mukherjee",
      role: "Family Vacationer",
      location: "Delhi to Manali",
      rating: 5,
      avatar: "A",
      avatarBg: "bg-indigo-600",
      date: "Travelled Sep 2026",
      comment: "Loved the seamless Volvo bus and mountain resort synchronization. Real room capacity checks ensured we actually got the interconnected family suite we paid for."
    },
    {
      name: "Rohit Kulkarni",
      role: "Weekend Traveler",
      location: "Mumbai to Jaipur",
      rating: 5,
      avatar: "R",
      avatarBg: "bg-amber-600",
      date: "Travelled Sep 2026",
      comment: "The mathematical date validation and authentic photography were a game changer. Downloaded the PDF invoice instantly with our verified Booking ID."
    }
  ];

  useEffect(() => {
    async function loadHomeData() {
      try {
        setLoading(true);
        const [destRes, hotelRes, transRes, healthRes] = await Promise.allSettled([
          apiService.getDestinations({ limit: 8 }),
          apiService.getHotels({ limit: 4 }),
          apiService.getTransportation({ limit: 3 }),
          apiService.getHealth()
        ]);

        if (destRes.status === "fulfilled" && destRes.value?.data) {
          setDestinations(destRes.value.data);
        }
        if (hotelRes.status === "fulfilled" && hotelRes.value?.data) {
          setHotels(hotelRes.value.data);
        }
        if (transRes.status === "fulfilled" && transRes.value?.data) {
          setTransportation(transRes.value.data);
        }
        if (healthRes.status === "fulfilled") {
          setSystemHealth(healthRes.value);
        }
      } catch (err) {
        console.error("Error loading home page data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadHomeData();
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="space-y-24 pb-24 overflow-hidden">
      
      {/* ==================================================
          1. HERO SECTION - Breathtaking Atmosphere & Search
          ================================================== */}
      <section className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 bg-gradient-to-b from-sky-50/80 via-white to-slate-50 overflow-hidden">
        
        {/* Layered Ambient Mesh Lighting */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-tr from-sky-300/35 via-cyan-200/30 to-indigo-300/25 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse-glow" />
        <div className="absolute top-1/4 left-[-8%] w-96 h-96 bg-gradient-to-br from-amber-200/25 to-pink-200/20 blur-3xl rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-[-8%] w-96 h-96 bg-gradient-to-bl from-teal-200/25 to-sky-200/25 blur-3xl rounded-full pointer-events-none -z-10" />
        
        {/* Subtle Modern Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#0284c715_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-5 mb-10">
            
            {/* Live AI Pulse Status Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-sky-200/90 shadow-xs text-xs font-bold text-slate-800">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sky-700 font-extrabold uppercase tracking-wide">Next-Gen Travel Engine 2.0</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-semibold">Real-Time Flights, Rail & Verified Stays</span>
            </div>

            {/* Inspiring Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
              Plan Your <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">Perfect Journey</span>
              <br />
              <span className="text-slate-900 font-bold">With Smart AI Precision</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Discover verified destinations, boutique stays, and multi-modal transit across India and the globe. Powered by mathematical seat validation, instant Razorpay checkout, and Gemini itinerary intelligence.
            </p>

            {/* Travel Vibe Selector Chips */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold mr-1">Explore Vibes:</span>
              {travelVibes.map((vibe) => (
                <Link
                  key={vibe.label}
                  to={`/search?destination=${vibe.dest}`}
                  className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-sky-50 hover:text-sky-600 border border-slate-200/80 text-slate-700 font-semibold shadow-2xs hover:shadow-xs hover:border-sky-300 transition-all cursor-pointer"
                >
                  {vibe.label}
                </Link>
              ))}
            </div>

          </div>

          {/* Floating Destination Showcase Cards (Visible on desktop xl) */}
          <div className="relative">
            
            {/* Left Floating Card - Goa Beachfront */}
            <div className="hidden xl:block absolute -left-20 top-12 z-20 w-64 bg-white/95 backdrop-blur-xl p-3.5 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 animate-float-slow">
              <div className="relative h-28 w-full rounded-2xl overflow-hidden mb-2.5">
                <img
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80"
                  alt="Goa Beach"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-emerald-500 text-white font-bold text-[10px] shadow-xs">
                  Bestseller
                </span>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/60 text-white font-bold text-[10px] backdrop-blur-xs flex items-center space-x-1">
                  <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                  <span>4.98</span>
                </span>
              </div>
              <p className="text-xs font-bold text-slate-900 truncate">🏖️ Goa Beachfront Getaway</p>
              <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                <span>Stays from <strong className="text-sky-600">₹2,499</strong></span>
                <span className="text-emerald-600 font-semibold">● Instant Confirm</span>
              </div>
            </div>

            {/* Right Floating Card - Manali Alpine */}
            <div className="hidden xl:block absolute -right-20 top-20 z-20 w-64 bg-white/95 backdrop-blur-xl p-3.5 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 animate-float-delayed">
              <div className="relative h-28 w-full rounded-2xl overflow-hidden mb-2.5">
                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80"
                  alt="Manali Peaks"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-sky-600 text-white font-bold text-[10px] shadow-xs">
                  Snow Season
                </span>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/60 text-white font-bold text-[10px] backdrop-blur-xs flex items-center space-x-1">
                  <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                  <span>4.95</span>
                </span>
              </div>
              <p className="text-xs font-bold text-slate-900 truncate">🏔️ Manali Alpine Haven</p>
              <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                <span>Volvo & Flights <strong className="text-sky-600">₹1,899+</strong></span>
                <span className="text-sky-600 font-semibold">❄️ 12°C Alpine</span>
              </div>
            </div>

            {/* Interactive Hero Search Form */}
            <HeroSearch />

          </div>

          {/* Platform Trust & Quality Metrics Strip */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 p-4 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">50+ Cities</p>
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">India & International</p>
              </div>
              <div className="space-y-1 border-l border-slate-100">
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">1,200+ Stays</p>
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Zero Overbooking</p>
              </div>
              <div className="space-y-1 border-l border-slate-100">
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">Multi-Modal</p>
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Flights, Rail & Buses</p>
              </div>
              <div className="space-y-1 border-l border-slate-100">
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">4.9 ★ Score</p>
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">15,000+ Journeys</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          2. CURATED SEASONAL ESCAPES (Showcase Section)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Handcrafted Travel Collections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              Trending Escapes This Season
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Curated by travel experts with live fare synchronization, high-definition galleries, and instant availability.
            </p>
          </div>
          <Link
            to="/destinations"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-600 font-bold text-xs transition-colors group cursor-pointer"
          >
            <span>Browse All 50+ Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasonalEscapes.map((escape) => (
            <div
              key={escape.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              {/* Image with zoom and overlays */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={escape.image}
                  alt={escape.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                
                {/* Top Tags */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-sky-600 text-white font-bold text-[10px] shadow-xs">
                    {escape.tag}
                  </span>
                  <span className="px-2 py-0.5 rounded-lg bg-black/50 text-white font-bold text-[10px] backdrop-blur-xs">
                    {escape.weather}
                  </span>
                </div>

                {/* Price pill */}
                <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md shadow-xs text-right">
                  <span className="text-[10px] text-slate-400 block font-semibold leading-tight">From</span>
                  <span className="text-sm font-extrabold text-slate-900 leading-tight">{escape.price}</span>
                </div>

                {/* Title */}
                <div className="absolute bottom-3.5 left-3.5 max-w-[65%]">
                  <h3 className="text-xl font-bold font-display text-white truncate">
                    {escape.name}
                  </h3>
                  <span className="text-xs text-sky-300 font-semibold">{escape.vibe}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-500 leading-relaxed">
                  {escape.description}
                </p>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {escape.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 font-semibold px-2 py-0.5 rounded-md">
                        {h}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/destinations/${escape.id}`}
                    className="w-full mt-2 py-2.5 rounded-xl bg-slate-50 hover:bg-sky-600 hover:text-white text-slate-800 text-xs font-bold transition-all flex items-center justify-center space-x-1.5 group/btn cursor-pointer"
                  >
                    <span>Explore & Plan Trip</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          3. INTERACTIVE AI TRIP PROMPT STUDIO
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          
          {/* Subtle Glow Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-bold text-sky-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Gemini Natural Language Intelligence</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                  Experience The AI Travel Assistant
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Type your trip prompt just like talking to a seasoned travel concierge. Gemini parses destination, group size, duration, and budget—strictly matching authentic verified databases without hallucinating fares.
                </p>
              </div>

              <Link
                to="/ai-assistant"
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-sky-50 text-slate-900 font-extrabold text-sm shadow-xl transition-all duration-200 flex items-center space-x-2 self-start lg:self-auto group flex-shrink-0 cursor-pointer"
              >
                <span>Open Full AI Assistant Studio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Clickable AI Prompt Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
              {aiPromptSuggestions.map((item, idx) => (
                <Link
                  key={idx}
                  to="/ai-assistant"
                  className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 hover:border-sky-500/50 rounded-2xl p-4.5 transition-all duration-200 text-left flex flex-col justify-between space-y-3 group cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{item.icon}</span>
                      <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      "{item.prompt}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-700/50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((t, ti) => (
                        <span key={ti} className="text-[10px] bg-slate-900/60 text-slate-300 px-1.5 py-0.5 rounded-md font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-sky-400 font-bold group-hover:translate-x-0.5 transition-transform">
                      Try →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          4. POPULAR DESTINATIONS (Catalog Integration)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4" />
              <span>Explore The World</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Popular Destinations
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Handcrafted travel hubs across India and around the globe.
            </p>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center space-x-2 text-sm font-bold text-sky-600 hover:text-sky-700 group cursor-pointer"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner message="Loading popular destinations..." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(0, 4).map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        )}
      </section>

      {/* ==================================================
          5. RECOMMENDED DESTINATIONS
          ================================================== */}
      {destinations.length > 4 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
                Curated For You
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                Recommended Destinations
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(4, 8).map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </section>
      )}

      {/* ==================================================
          6. FEATURED HOTELS SECTION
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider mb-1">
              <HotelIcon className="w-4 h-4" />
              <span>Premium Stays</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Featured Hotels & Resorts
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Category-graded accommodations with real-time room capacity tracking.
            </p>
          </div>
          <Link
            to="/hotels"
            className="inline-flex items-center space-x-2 text-sm font-bold text-sky-600 hover:text-sky-700 group cursor-pointer"
          >
            <span>Browse All Hotels</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner message="Loading hotels..." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        )}
      </section>

      {/* ==================================================
          7. TRANSPORTATION OPTIONS
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Plane className="w-4 h-4" />
              <span>Seamless Mobility</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Transportation Options
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Direct and connecting flights, Indian Railways expresses, and premier intercity buses.
            </p>
          </div>
          <Link
            to="/transportation"
            className="inline-flex items-center space-x-2 text-sm font-bold text-sky-600 hover:text-sky-700 group cursor-pointer"
          >
            <span>View All Schedules</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transportation.map((trans) => (
            <TransportCard key={trans.id} transport={trans} />
          ))}
        </div>
      </section>

      {/* ==================================================
          8. THE TRAVELMATE ADVANTAGE (Why TravelMate AI)
          ================================================== */}
      <section className="bg-slate-900 text-white py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 lg:px-12 border border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <Badge variant="brand" className="bg-sky-500/20 text-sky-300 border-sky-400/30">
            Platform Architecture
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight">
            Why TravelMate AI Beats Ordinary Booking Sites
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Unlike simple conceptual demos, TravelMate AI enforces robust server-side business rules for dates, passenger capacity, inventory verification, and secure payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Strict Backend Authority
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Section 2 Principle: AI recommends options, but reliable server logic controls dates, room availability, vehicle capacity, and final booking decisions.
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Dynamic Date & Seat Engine
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No hardcoded dates. Past dates are strictly rejected on both frontend and backend. Passenger capacities are mathematically verified.
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Modular Integration Ready
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Clean service abstraction allows plug-and-play migration from seed/demo datasets to live hotel, flight, Razorpay, and Google Maps APIs.
            </p>
          </div>

        </div>
      </section>

      {/* ==================================================
          9. HOW IT WORKS (End-To-End Experience)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
            End-To-End Experience
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900">
            How TravelMate AI Works
          </h2>
          <p className="text-sm text-slate-500">
            From natural-language dreaming to confirmed reservation in 4 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 font-extrabold flex items-center justify-center mx-auto text-lg">
              1
            </div>
            <h3 className="font-bold text-slate-800 text-base">Search & Select</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Choose your destination, travel dates, and passenger group with live date validation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 font-extrabold flex items-center justify-center mx-auto text-lg">
              2
            </div>
            <h3 className="font-bold text-slate-800 text-base">Customize Package</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Select room types and transportation (Flights, Indian Railways, Intercity Buses) with dynamic seat availability.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 font-extrabold flex items-center justify-center mx-auto text-lg">
              3
            </div>
            <h3 className="font-bold text-slate-800 text-base">Backend Recalculation</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Server recalculates taxes, checks real room inventory, and creates a secure Razorpay test order.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 font-extrabold flex items-center justify-center mx-auto text-lg">
              4
            </div>
            <h3 className="font-bold text-slate-800 text-base">Confirmation & Invoice</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Receive a unique Booking ID (e.g. TM-2026-000001), download PDF invoice, and track in "My Trips".
            </p>
          </div>

        </div>
      </section>

      {/* ==================================================
          10. REAL TRAVELER STORIES & REVIEWS
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Community Feedback</span>
          </div>
          <h2 className="text-3xl font-bold font-display text-slate-900">
            Loved By Verified Travelers
          </h2>
          <p className="text-sm text-slate-500">
            Real experiences from travelers who booked smart itineraries through TravelMate AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {travelerReviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-premium transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-600 pl-1.5">5.0</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                <div className={`w-9 h-9 rounded-xl ${review.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-xs`}>
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{review.name}</h4>
                  <p className="text-[10px] text-slate-400">{review.location} • {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          11. VIP SECRET FARE CLUB (Newsletter Banner)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-white inline-block">
              VIP Travel Club
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Never Miss A Seasonal Fare Drop
            </h3>
            <p className="text-sm text-sky-100 leading-relaxed">
              Join 25,000+ smart travelers. Get private flight drop alerts, boutique hotel discounts, and curated AI seasonal itineraries delivered weekly.
            </p>
          </div>

          <div className="w-full lg:w-auto flex-shrink-0">
            {newsletterSubscribed ? (
              <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 text-white font-bold text-sm flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                <span>You're on the VIP list! Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="px-4 py-3 rounded-2xl bg-white text-slate-800 placeholder-slate-400 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-white shadow-sm flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Get Alerts</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
