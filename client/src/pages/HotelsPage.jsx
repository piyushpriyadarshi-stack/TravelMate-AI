import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Hotel as HotelIcon,
  Star,
  Filter,
  SlidersHorizontal,
  CheckCircle,
  MapPin,
  ExternalLink,
  Shield,
  Clock,
  AlertCircle,
  BedDouble,
  Navigation,
  Globe,
  Phone,
  Mail
} from "lucide-react";
import { HotelCard } from "../components/HotelCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Badge } from "../components/Badge";
import { apiService } from "../services/api";
import { formatCurrency, formatCategory } from "../utils/formatters";

const SUPPORTED_DESTINATIONS = [
  { label: "All 15 Destinations", value: "" },
  { label: "Goa, India", value: "dest-goa" },
  { label: "Delhi, India", value: "dest-delhi" },
  { label: "Mumbai, India", value: "dest-mumbai" },
  { label: "Jaipur, India", value: "dest-jaipur" },
  { label: "Manali, India", value: "dest-manali" },
  { label: "Bengaluru, India", value: "dest-bengaluru" },
  { label: "Kolkata, India", value: "dest-kolkata" },
  { label: "Bhubaneswar, India", value: "dest-bhubaneswar" },
  { label: "Kerala, India", value: "dest-kerala" },
  { label: "Hyderabad, India", value: "dest-hyderabad" },
  { label: "Dubai, UAE", value: "dest-dubai" },
  { label: "Singapore", value: "dest-singapore" },
  { label: "Paris, France", value: "dest-paris" },
  { label: "London, UK", value: "dest-london" },
  { label: "Tokyo, Japan", value: "dest-tokyo" }
];

export function HotelsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const destIdParam = searchParams.get("destinationId") || "";
  const destNameParam = searchParams.get("destinationName") || "";
  const selectedHotelParam = searchParams.get("selected") || "";

  const [selectedDestinationId, setSelectedDestinationId] = useState(destIdParam);
  const [searchQuery, setSearchQuery] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minRating, setMinRating] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("RATING");
  const [userCoords, setUserCoords] = useState(null);
  const [locationActive, setLocationActive] = useState(false);
  const [selectedHotelDetails, setSelectedHotelDetails] = useState(null);

  // Sync state if URL changes
  useEffect(() => {
    if (destIdParam !== selectedDestinationId) {
      setSelectedDestinationId(destIdParam);
    }
  }, [destIdParam]);

  // Request user coordinates for distance sorting
  const handleEnableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setLocationActive(true);
          setSortBy("NEAREST");
        },
        (err) => {
          console.warn("Location permission denied or unavailable:", err.message);
          alert("Could not access your location. Sorting by rating instead.");
        }
      );
    }
  };

  useEffect(() => {
    async function loadHotels() {
      try {
        setLoading(true);
        const params = {};
        if (selectedDestinationId) params.destinationId = selectedDestinationId;
        else if (destNameParam) params.destinationName = destNameParam;

        if (selectedCategory) params.category = selectedCategory;
        if (minRating) params.minRating = minRating;
        if (maxPrice) params.maxPrice = maxPrice;
        if (sortBy) params.sortBy = sortBy;

        if (userCoords) {
          params.userLat = userCoords.lat;
          params.userLng = userCoords.lng;
        }

        const res = await apiService.getHotels(params);
        if (res && res.data) {
          setHotels(res.data);
        }
      } catch (err) {
        console.error("Failed to load hotels:", err);
      } finally {
        setLoading(false);
      }
    }

    loadHotels();
  }, [selectedDestinationId, destNameParam, selectedCategory, minRating, maxPrice, sortBy, userCoords]);

  // Load single hotel details if selected in query param
  useEffect(() => {
    if (selectedHotelParam) {
      apiService.getHotelById(selectedHotelParam)
        .then((res) => {
          if (res?.data) setSelectedHotelDetails(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [selectedHotelParam]);

  const categories = [
    { label: "All Categories", value: "" },
    { label: "Luxury", value: "LUXURY" },
    { label: "Resort", value: "RESORT" },
    { label: "Boutique", value: "BOUTIQUE" },
    { label: "Business", value: "BUSINESS" },
    { label: "5-Star", value: "FIVE_STAR" },
    { label: "4-Star", value: "FOUR_STAR" },
    { label: "3-Star", value: "THREE_STAR" },
    { label: "Budget", value: "BUDGET" }
  ];

  // Client-side text search filter
  const displayedHotels = hotels.filter((h) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      h.name?.toLowerCase().includes(q) ||
      h.city?.toLowerCase().includes(q) ||
      h.fullAddress?.toLowerCase().includes(q) ||
      h.address?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <Badge variant="brand" className="bg-sky-400/20 text-sky-200 border-sky-400/30">
              Real Hotel Catalogue
            </Badge>
            <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-700/60 flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              120 Real Verified Properties
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
            Hotels & Resorts Across 15 Destinations
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed">
            Every hotel record is an identifiable real property with its own verified geographic coordinates, authentic photographs, and official published details.
          </p>

          {/* Development Price Notice */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 flex items-start space-x-2.5 text-xs text-slate-300">
            <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-semibold block mb-0.5">Development Pricing Notice:</strong>
              Development price — final price and availability will be verified before booking. Live room availability requires connection to a live hotel inventory API.
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2">
          {!locationActive ? (
            <button
              onClick={handleEnableLocation}
              className="px-4 py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 border border-sky-400/40 text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-sky-400" />
              <span>Sort by Nearest to Me</span>
            </button>
          ) : (
            <span className="text-xs text-emerald-300 bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-800 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Location Active
            </span>
          )}

          {(selectedDestinationId || selectedCategory || minRating || maxPrice || searchQuery) && (
            <button
              onClick={() => {
                setSelectedDestinationId("");
                setSelectedCategory("");
                setMinRating("");
                setMaxPrice("");
                setSearchQuery("");
                setSortBy("RATING");
                setSearchParams({});
              }}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
            >
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-soft space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          
          {/* Destination Selector */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
              Destination (15 Cities)
            </label>
            <select
              value={selectedDestinationId}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedDestinationId(val);
                if (val) setSearchParams({ destinationId: val });
                else setSearchParams({});
              }}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            >
              {SUPPORTED_DESTINATIONS.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          {/* Search by Hotel or Area */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
              Search Hotel / Area
            </label>
            <input
              type="text"
              placeholder="e.g. Taj, Shinjuku, Eiffel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-sky-500 placeholder:text-slate-400"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            >
              <option value="RATING">Top Rated</option>
              <option value="NEAREST">Nearest / Distance</option>
              <option value="PRICE_LOW_TO_HIGH">Price: Low to High</option>
              <option value="PRICE_HIGH_TO_LOW">Price: High to Low</option>
              <option value="CATEGORY">Category</option>
            </select>
          </div>

          {/* Min Rating */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
              Min Rating
            </label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            >
              <option value="">Any Rating</option>
              <option value="4.8">★ 4.8 & above (Exceptional)</option>
              <option value="4.5">★ 4.5 & above (Top Rated)</option>
              <option value="4.0">★ 4.0 & above</option>
            </select>
          </div>

        </div>
      </div>

      {/* Selected Hotel Modal / Room Viewer if active */}
      {selectedHotelDetails && (
        <div className="bg-sky-50/90 rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="brand">{formatCategory(selectedHotelDetails.category)}</Badge>
                <span className="text-xs text-sky-700 font-semibold bg-sky-100 px-2 py-0.5 rounded-full">
                  Verified Real Property
                </span>
              </div>
              <h2 className="text-2xl font-bold font-display text-slate-900">
                {selectedHotelDetails.name}
              </h2>
              <p className="text-xs text-slate-600 flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>{selectedHotelDetails.fullAddress || selectedHotelDetails.address}</span>
              </p>
              {selectedHotelDetails.latitude != null && selectedHotelDetails.longitude != null && (
                <p className="text-[11px] text-slate-400 font-mono">
                  Coordinates: {selectedHotelDetails.latitude}° N, {selectedHotelDetails.longitude}° E
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              {selectedHotelDetails.officialWebsite && (
                <a
                  href={selectedHotelDetails.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-sky-700 border border-sky-300 flex items-center space-x-1 shadow-xs"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Official Website</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
              <button
                onClick={() => setSelectedHotelDetails(null)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200"
              >
                Close Details
              </button>
            </div>
          </div>

          {/* Contact and Check-in Info if available */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-white/80 p-3.5 rounded-2xl border border-sky-100">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Check-in / Check-out</span>
              <span className="font-semibold text-slate-700">
                {selectedHotelDetails.checkInTime || "14:00"} / {selectedHotelDetails.checkOutTime || "12:00"}
              </span>
            </div>
            {selectedHotelDetails.phone && (
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Official Phone</span>
                <span className="font-semibold text-slate-700 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-sky-600" />
                  {selectedHotelDetails.phone}
                </span>
              </div>
            )}
            {selectedHotelDetails.email && (
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Official Email</span>
                <span className="font-semibold text-slate-700 flex items-center gap-1">
                  <Mail className="w-3 h-3 text-sky-600" />
                  {selectedHotelDetails.email}
                </span>
              </div>
            )}
          </div>

          {/* Room Categories */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                Verified Room Categories Offered by this Hotel
              </h3>
              <span className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-lg font-medium">
                Live availability requires verification before booking
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {((selectedHotelDetails.roomTypes || selectedHotelDetails.rooms) || []).map((room) => (
                <div key={room.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{room.name || `${room.type} Room`}</span>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {room.type || "ROOM"}
                      </span>
                    </div>
                    {room.description && (
                      <p className="text-[11px] text-slate-600 leading-snug">{room.description}</p>
                    )}
                    <div className="text-[11px] text-slate-500 space-y-0.5 pt-1">
                      {room.bedType && <p>• Bed: {room.bedType}</p>}
                      {room.roomSize && <p>• Size: {room.roomSize}</p>}
                      <p>• Max Capacity: <strong>{room.capacity || room.maxGuests || 2} guests</strong></p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                      Development price
                    </span>
                    <div className="flex items-baseline space-x-1 mt-1">
                      <span className="text-lg font-bold font-display text-slate-900">
                        {formatCurrency(room.price || room.pricePerNight)}
                      </span>
                      <span className="text-xs text-slate-500">/ night</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">
                      Final price & availability verified before booking
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hotel Cards Grid */}
      {loading ? (
        <LoadingSpinner message="Loading verified hotels..." />
      ) : displayedHotels.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
          <AlertCircle className="w-10 h-10 text-rose-500 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">
            No hotels match your filters
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Try choosing another destination or resetting your category and rating filters.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing <strong>{displayedHotels.length}</strong> verified properties
              {selectedDestinationId && (
                <> in <strong>{SUPPORTED_DESTINATIONS.find(d => d.value === selectedDestinationId)?.label}</strong></>
              )}
            </span>
            <span className="text-[11px] text-slate-400">
              Each property features independent coordinates and verified address
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
