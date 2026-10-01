import React, { useState, useEffect } from "react";
import { 
  Globe, 
  MapPin, 
  Search, 
  X, 
  Sparkles, 
  Star, 
  Compass, 
  Check, 
  ArrowRight,
  Filter
} from "lucide-react";
import { Badge } from "./Badge";
import { apiService } from "../services/api";
import { SafeImage } from "./SafeImage";

export function WorldwideDestinationModal({ isOpen, onClose, onSelectDestination, currentSelection }) {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    if (!isOpen) return;

    async function loadAllDestinations() {
      try {
        setLoading(true);
        const res = await apiService.getDestinations();
        if (res && res.data) {
          setDestinations(res.data);
        }
      } catch (err) {
        console.error("Failed to load worldwide destinations:", err);
      } finally {
        setLoading(false);
      }
    }

    loadAllDestinations();
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter tabs
  const tabs = [
    { id: "all", label: "🌐 All Worldwide" },
    { id: "india", label: "🇮🇳 India (Domestic)" },
    { id: "asia", label: "🌏 Asia & Middle East" },
    { id: "europe", label: "🌍 Europe & West" },
    { id: "beach", label: "🏖️ Beaches & Islands" },
    { id: "mountains", label: "🏔️ Mountains & Hills" }
  ];

  // Client-side category filtering
  const filteredDestinations = destinations.filter((dest) => {
    // 1. Text Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchText =
        dest.name.toLowerCase().includes(q) ||
        dest.city.toLowerCase().includes(q) ||
        dest.country.toLowerCase().includes(q) ||
        (dest.attractions && dest.attractions.some(a => a.toLowerCase().includes(q)));
      if (!matchText) return false;
    }

    // 2. Region / Theme filter
    if (activeTab === "india") {
      return dest.isDomestic === true;
    }
    if (activeTab === "asia") {
      const asianCountries = ["United Arab Emirates", "Singapore", "Indonesia", "Maldives", "Thailand", "Japan"];
      return asianCountries.includes(dest.country);
    }
    if (activeTab === "europe") {
      const westernCountries = ["France", "United Kingdom", "Switzerland", "Italy", "United States", "Australia", "Egypt"];
      return westernCountries.includes(dest.country);
    }
    if (activeTab === "beach") {
      const beachKeywords = ["beach", "island", "sea", "lagoon", "ocean", "coastal", "backwater"];
      const descText = (dest.description + " " + (dest.attractions || []).join(" ")).toLowerCase();
      return beachKeywords.some(kw => descText.includes(kw));
    }
    if (activeTab === "mountains") {
      const mountainKeywords = ["mountain", "hill", "peak", "snow", "himalayan", "alps", "valley", "lake"];
      const descText = (dest.description + " " + (dest.attractions || []).join(" ")).toLowerCase();
      return mountainKeywords.some(kw => descText.includes(kw));
    }

    return true;
  });

  const handleSelect = (destName) => {
    onSelectDestination(destName);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/50">
          <div>
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-1">
              <Globe className="w-3.5 h-3.5" />
              <span>Worldwide Destination Directory</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Select Your Travel Destination
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Choose from 50+ curated domestic & global gateways, or type any custom city worldwide.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Search Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-100 bg-white">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, state, country, or attraction (e.g. Kashmir, Paris, Bali, Berhampur)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 p-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pt-3 pb-1 text-xs no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-sky-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body: Destinations Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {loading ? (
            <div className="py-16 text-center text-slate-400 text-sm">
              Loading worldwide destinations...
            </div>
          ) : filteredDestinations.length === 0 ? (
            <div className="text-center py-12 px-4 bg-rose-50/70 rounded-2xl border border-rose-200 space-y-3">
              <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                <X className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-rose-950">
                We couldn't find this destination yet. Try another city or country.
              </h3>
              <p className="text-xs text-rose-600 max-w-md mx-auto">
                No verified properties or travel routes match "{searchQuery.trim()}". Try selecting one of our 40+ curated domestic or international destinations.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 rounded-xl bg-white border border-rose-200 text-rose-700 hover:bg-rose-50 text-xs font-bold transition-all shadow-xs"
              >
                Clear Search & Show All Destinations
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredDestinations.map((dest) => {
                const isSelected = currentSelection && currentSelection.toLowerCase() === dest.name.toLowerCase();
                return (
                  <div
                    key={dest.id}
                    onClick={() => handleSelect(dest.name)}
                    className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-200 flex flex-col bg-white hover:shadow-md ${
                      isSelected
                        ? "border-sky-500 ring-2 ring-sky-500/20 shadow-sm"
                        : "border-slate-200 hover:border-sky-300"
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-32 w-full overflow-hidden bg-slate-100">
                      <SafeImage
                        src={dest.imageUrl}
                        alt={`${dest.name}, ${dest.country}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-2 left-2">
                        {dest.isDomestic ? (
                          <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-bold text-sky-800">
                            India
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-bold text-purple-800">
                            Global
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                        <span className="text-xs font-bold font-display truncate">
                          {dest.name}
                        </span>
                        <div className="flex items-center space-x-0.5 text-[10px] font-bold text-amber-300">
                          <Star className="w-3 h-3 fill-amber-300" />
                          <span>{dest.popularity}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                      <p className="text-[11px] text-slate-500 line-clamp-1">
                        {dest.city}, {dest.country}
                      </p>

                      <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px]">
                        <span className="text-slate-400 group-hover:text-sky-600 transition-colors font-medium">
                          Click to select
                        </span>
                        {isSelected ? (
                          <span className="flex items-center space-x-1 text-sky-600 font-bold">
                            <Check className="w-3.5 h-3.5" />
                            <span>Selected</span>
                          </span>
                        ) : (
                          <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-transform" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredDestinations.length} destinations worldwide</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold transition-colors"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
