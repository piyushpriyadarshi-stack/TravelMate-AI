import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  Map, 
  Clock, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Hotel as HotelIcon, 
  Plane,
  Train,
  Bus,
  Users,
  Compass,
  AlertTriangle
} from "lucide-react";
import { HeroSearch } from "../components/HeroSearch";
import { DestinationCard } from "../components/DestinationCard";
import { HotelCard } from "../components/HotelCard";
import { TransportCard } from "../components/TransportCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Badge } from "../components/Badge";
import { apiService } from "../services/api";

export function HomePage() {
  const [destinations, setDestinations] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [transportation, setTransportation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [systemHealth, setSystemHealth] = useState(null);

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

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION (Section 5) */}
      <section className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-sky-200/40 via-cyan-200/30 to-blue-200/40 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 shadow-xs text-xs font-bold text-sky-700">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Smart Travel Planning, Hotel & Transportation Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.15]">
              Plan Your <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">Perfect Journey</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Discover destinations, hotels, and transportation in one place. Powered by smart backend date validation, capacity verification, and AI itinerary assistance.
            </p>
          </div>

          {/* Interactive Hero Search Form */}
          <HeroSearch />

          {/* Platform Trust & Quality Banner */}
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-[11px] shadow-sm border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                <strong>Verified Fares:</strong> Instant availability across Flights, Railways & Buses • <strong>Authentic Visuals:</strong> High-definition destination galleries.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. POPULAR DESTINATIONS (Section 5 & 6) */}
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
            className="inline-flex items-center space-x-2 text-sm font-bold text-sky-600 hover:text-sky-700 group"
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

      {/* 3. RECOMMENDED DESTINATIONS */}
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

      {/* 4. POPULAR HOTELS SECTION (Section 5 & 9) */}
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
            className="inline-flex items-center space-x-2 text-sm font-bold text-sky-600 hover:text-sky-700 group"
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

      {/* 5. TRANSPORTATION OPTIONS (Section 5 & 11) */}
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
            className="inline-flex items-center space-x-2 text-sm font-bold text-sky-600 hover:text-sky-700 group"
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

      {/* 6. WHY TRAVELMATE AI (Section 5 & Section 2 Principle) */}
      <section className="bg-slate-900 text-white py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <Badge variant="brand" className="bg-sky-500/20 text-sky-300 border-sky-400/30">
            Design Philosophy
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight">
            Why TravelMate AI?
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

      {/* 7. HOW IT WORKS (Section 5 & 50) */}
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
          
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 font-extrabold flex items-center justify-center mx-auto text-lg">
              1
            </div>
            <h3 className="font-bold text-slate-800 text-base">Search & Select</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Choose your destination, travel dates, and passenger group with live date validation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 font-extrabold flex items-center justify-center mx-auto text-lg">
              2
            </div>
            <h3 className="font-bold text-slate-800 text-base">Customize Package</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Select room types and transportation (Flights, Indian Railways, Intercity Buses) with dynamic seat availability.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 font-extrabold flex items-center justify-center mx-auto text-lg">
              3
            </div>
            <h3 className="font-bold text-slate-800 text-base">Backend Recalculation</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Server recalculates taxes, checks real room inventory, and creates a secure Razorpay test order.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft space-y-3 text-center">
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

      {/* 8. AI TRAVEL ASSISTANT SPOTLIGHT (Section 5, 25, 26) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Coming in Stage 14: Google Gemini AI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight">
              Meet Your Personal AI Travel Assistant
            </h2>
            <p className="text-sm sm:text-base text-sky-100 leading-relaxed">
              "I want to visit Goa for 4 days with 5 people under ₹50,000 budget." Gemini will comprehend your natural prompt and filter verified hotels and transportation without hallucinating prices.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-white/10">Destination Discovery</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10">Budget Optimization</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10">Custom Itinerary</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/ai-assistant"
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-sky-50 text-sky-900 font-bold text-sm shadow-lg transition-all duration-200 flex items-center space-x-2 group"
            >
              <span>Explore AI Assistant Preview</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
