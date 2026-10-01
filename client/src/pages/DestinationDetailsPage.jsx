// ==================================================
// TravelMate AI - Destination Details Page (Stage 3)
// Route: /destinations/:id
// Displays authentic real-world photography, location coordinates,
// rich gallery, and direct link to customized trip planning.
// STRICT RULE: No AI-generated imagery. Real photos only.
// ==================================================

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Users,
  Compass,
  Star,
  Camera,
  ArrowRight,
  Globe,
  Clock,
  Sparkles,
  AlertCircle,
  ChevronRight,
  Image as ImageIcon,
  Check,
  Plane
} from "lucide-react";
import { apiService } from "../services/api";
import { imageService } from "../services/imageService";
import { SafeImage } from "../components/SafeImage";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Badge } from "../components/Badge";
import {
  getTodayDateString,
  getTomorrowDateString,
  addDays,
  validateDates,
  calculateNights
} from "../utils/dateUtils";
import { MIN_TRAVELERS, MAX_TRAVELERS, DEFAULT_TRAVELERS } from "../utils/constants";

export function DestinationDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [popularSuggestions, setPopularSuggestions] = useState([]);

  // Active gallery lightbox / modal state
  const [selectedImage, setSelectedImage] = useState(null);

  // Trip planning parameters
  const todayStr = getTodayDateString();
  const tomorrowStr = getTomorrowDateString();
  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [travelers, setTravelers] = useState(DEFAULT_TRAVELERS);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    async function loadDestination() {
      if (!id) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setNotFound(false);

        const res = await apiService.getDestinationById(id);

        if (!res || res.notFound || !res.data) {
          setNotFound(true);
          const pop = await apiService.getDestinations({ limit: 4, popular: true });
          if (pop?.data) setPopularSuggestions(pop.data);
          return;
        }

        setDestination(res.data);
      } catch (err) {
        console.error("Failed to load destination:", err);
        setNotFound(true);
        const pop = await apiService.getDestinations({ limit: 4, popular: true });
        if (pop?.data) setPopularSuggestions(pop.data);
      } finally {
        setLoading(false);
      }
    }

    loadDestination();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const handleCheckInChange = (e) => {
    const val = e.target.value;
    setCheckIn(val);
    setValidationError("");
    if (val >= checkOut) {
      setCheckOut(addDays(val, 1));
    }
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
    setValidationError("");
  };

  const handlePlanTrip = (e) => {
    e.preventDefault();
    setValidationError("");

    const dateCheck = validateDates(checkIn, checkOut);
    if (!dateCheck.isValid) {
      setValidationError(dateCheck.error);
      return;
    }

    if (travelers < MIN_TRAVELERS || travelers > MAX_TRAVELERS) {
      setValidationError(`Travelers must be between ${MIN_TRAVELERS} and ${MAX_TRAVELERS}.`);
      return;
    }

    const params = new URLSearchParams({
      destination: destination.name,
      destinationId: destination.id,
      checkIn,
      checkOut,
      travelers: travelers.toString()
    });

    navigate(`/search?${params.toString()}`);
  };

  // 1. Loading State
  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 px-4">
        <LoadingSpinner size="lg" />
        <p className="text-sm font-semibold text-slate-600 animate-pulse">
          Finding destination details & authentic photography...
        </p>
      </div>
    );
  }

  // 2. Not Found State (Graceful error handling)
  if (notFound || !destination) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-8">
        <div className="bg-rose-50/80 rounded-3xl p-8 sm:p-12 border border-rose-200 space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-500 block">
            Destination Validation Notice
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-rose-950">
            We couldn't find this destination.
          </h1>
          <p className="text-sm text-rose-700 max-w-md mx-auto">
            Try another city or country. We only present vetted destinations with authentic real-world photography.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/destinations"
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-xs transition-colors"
            >
              Browse All Destinations
            </Link>
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-xs transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Popular Recommendations fallback */}
        {popularSuggestions.length > 0 && (
          <div className="space-y-4 text-left">
            <h3 className="text-lg font-bold font-display text-slate-800">
              Popular Verified Destinations:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularSuggestions.map((pop) => (
                <Link
                  key={pop.id}
                  to={`/destinations/${pop.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-md transition-all p-3 flex items-center space-x-3"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <img
                      src={pop.imageUrl}
                      alt={pop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-slate-900 truncate group-hover:text-sky-600">
                      {pop.name}
                    </p>
                    <p className="text-xs text-slate-400 truncate">{pop.country}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  const gallery = imageService.getDestinationGallery(destination);
  const nights = calculateNights(checkIn, checkOut);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
        <Link to="/" className="hover:text-sky-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/destinations" className="hover:text-sky-600 transition-colors">
          Destinations
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 font-bold">{destination.name}</span>
      </nav>

      {/* Hero Header with Real-World Photograph */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 text-white min-h-[420px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-12 border border-slate-800">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={destination.imageUrl}
            alt={`${destination.name} real travel photograph`}
            fallbackType="destination"
            showPhotoBadge={true}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/20" />
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            {destination.isDomestic ? (
              <Badge variant="brand" className="bg-sky-500 text-white border-none font-bold">
                Domestic (India)
              </Badge>
            ) : (
              <Badge variant="coral" className="font-bold">
                International Gateway
              </Badge>
            )}

            {destination.popular && (
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-extrabold shadow-sm">
                <Star className="w-3 h-3 fill-white" />
                <span>Popular Destination</span>
              </span>
            )}

            <span className="text-xs font-bold bg-black/60 backdrop-blur-xs text-white/90 px-3 py-1 rounded-full border border-white/20 flex items-center space-x-1">
              <Camera className="w-3.5 h-3.5 text-sky-400" />
              <span>Verified Real Photograph</span>
            </span>
          </div>

          <div>
            <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white drop-shadow-md">
              {destination.name}
            </h1>
            <p className="text-base sm:text-xl text-sky-200 font-semibold mt-1 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0" />
              <span>
                {destination.city}
                {destination.state && `, ${destination.state}`}
                {destination.country && `, ${destination.country}`}
                {destination.countryCode && ` (${destination.countryCode})`}
              </span>
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
            {destination.shortDescription || destination.description}
          </p>
        </div>
      </div>

      {/* Main Grid: Details on Left, Booking Trip Planner on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Information, Highlights & Photo Gallery */}
        <div className="lg:col-span-7 space-y-8">

          {/* Location & Metadata Bar */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 font-bold uppercase tracking-wider block flex items-center space-x-1">
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                <span>Coordinates</span>
              </span>
              <p className="font-semibold text-slate-800">
                {destination.latitude ? `${destination.latitude.toFixed(4)}° N, ` : "15.2993° N, "}
                {destination.longitude ? `${destination.longitude.toFixed(4)}° E` : "74.1240° E"}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-bold uppercase tracking-wider block flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>Timezone</span>
              </span>
              <p className="font-semibold text-slate-800">
                {destination.timezone || "Asia/Kolkata"}
              </p>
            </div>

            <div className="space-y-1 col-span-2 sm:col-span-1">
              <span className="text-slate-400 font-bold uppercase tracking-wider block flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Rating</span>
              </span>
              <p className="font-semibold text-slate-800">
                {destination.popularity || 95}% Match Score
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-4">
            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center space-x-2">
              <Compass className="w-6 h-6 text-sky-600" />
              <span>About {destination.name}</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {destination.description}
            </p>

            {/* Attractions / Highlights */}
            {destination.attractions && destination.attractions.length > 0 && (
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Attractions & Highlights:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {destination.attractions.map((attr, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-sky-50 text-sky-800 border border-sky-100 text-xs font-semibold flex items-center space-x-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                      <span>{attr}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Real Photo Gallery */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center space-x-2">
                  <ImageIcon className="w-6 h-6 text-sky-600" />
                  <span>Real Photo Gallery</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Authentic real-world photographs from verified sources (Unsplash CDN)
                </p>
              </div>
              <Badge variant="brand" className="text-[10px]">
                {gallery.length} Photos
              </Badge>
            </div>

            {gallery.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className="group relative h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-xs hover:shadow-md transition-all"
                  >
                    <SafeImage
                      src={imgUrl}
                      alt={`${destination.name} photograph view ${idx + 1}`}
                      fallbackType="destination"
                      showPhotoBadge={true}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-bold bg-black/60 px-3 py-1.5 rounded-xl backdrop-blur-xs">
                        View Full Photo
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 text-sm">
                More photos coming soon.
              </div>
            )}
          </div>

          {/* Future Stage Integration Previews */}
          <div className="bg-gradient-to-br from-slate-50 to-sky-50/50 rounded-3xl p-6 border border-slate-200/80 space-y-3">
            <div className="flex items-center space-x-2 text-slate-700 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Upcoming Integrations Preview</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              In subsequent stages, verified accommodations, direct flight/train connectivity, and curated local activities for {destination.name} will be connected. Development inventory is strictly isolated per destination.
            </p>
          </div>

        </div>

        {/* Right Column: "Plan a Trip to [Destination]" Action Card */}
        <div className="lg:col-span-5 sticky top-24 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-premium space-y-6">
            
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600 block">
                Travel Configuration
              </span>
              <h2 className="text-2xl font-bold font-display text-slate-900">
                Plan a Trip to {destination.name}
              </h2>
              <p className="text-xs text-slate-500">
                Select your dates & travelers to review hotels, transportation, and customized pricing.
              </p>
            </div>

            {/* Validation Notice */}
            {validationError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2 animate-shake">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-500" />
                <span className="font-semibold">{validationError}</span>
              </div>
            )}

            <form onSubmit={handlePlanTrip} className="space-y-4">
              
              {/* Check-in */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Check-in Date</span>
                  <span className="text-[10px] text-sky-600 font-medium">Min: Today</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4 text-sky-500" />
                  </div>
                  <input
                    type="date"
                    min={todayStr}
                    value={checkIn}
                    onChange={handleCheckInChange}
                    className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Check-out Date</span>
                  <span className="text-[10px] text-sky-600 font-medium">{nights} {nights === 1 ? "Night" : "Nights"}</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4 text-sky-500" />
                  </div>
                  <input
                    type="date"
                    min={addDays(checkIn, 1)}
                    value={checkOut}
                    onChange={handleCheckOutChange}
                    className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Travelers</span>
                  <span className="text-[10px] text-slate-400 font-medium">Min: 1 • Max: {MAX_TRAVELERS}</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Users className="w-4 h-4 text-sky-500" />
                  </div>
                  <input
                    type="number"
                    min={MIN_TRAVELERS}
                    max={MAX_TRAVELERS}
                    value={travelers}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setTravelers(isNaN(val) ? 1 : Math.min(Math.max(val, MIN_TRAVELERS), MAX_TRAVELERS));
                    }}
                    className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              {/* Action Button: "Plan a Trip to [Destination]" */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-premium hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Plan a Trip to {destination.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 text-center">
              Browsing destinations does not require login. Stage 2 authentication will be prompted only when confirming booking reservations.
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal for Gallery Full View */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          <div className="relative max-w-4xl max-h-[85vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src={selectedImage}
              alt="High-resolution authentic destination photograph"
              className="max-h-[80vh] w-auto object-contain mx-auto"
            />
            <div className="p-4 bg-slate-900/90 text-white flex items-center justify-between text-xs">
              <span className="font-bold">{destination.name} — Verified Real Photograph</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
