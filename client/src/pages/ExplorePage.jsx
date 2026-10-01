import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, MapPin, Filter, Sparkles, AlertCircle } from "lucide-react";
import { DestinationCard } from "../components/DestinationCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Badge } from "../components/Badge";
import { apiService } from "../services/api";

export function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("destination") || "";

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [filterType, setFilterType] = useState("all"); // "all", "domestic", "international"

  useEffect(() => {
    async function fetchDestinations() {
      try {
        setLoading(true);
        const params = {};
        if (searchTerm.trim()) {
          params.search = searchTerm.trim();
        }
        if (filterType === "domestic") params.isDomestic = true;
        if (filterType === "international") params.isDomestic = false;
        if (filterType === "popular") params.popular = true;

        const res = await apiService.getDestinations(params);
        if (res && res.data) {
          setDestinations(res.data);
        }
      } catch (err) {
        console.error("Failed to load destinations:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, [searchTerm, filterType]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Title & Search Bar */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <Badge variant="brand" className="bg-sky-400/20 text-sky-200 border-sky-400/30">
            Destination Catalog
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight">
            Explore Destinations
          </h1>
          <p className="text-sm text-sky-200 leading-relaxed">
            Search from domestic jewels across India to premier global gateways.
          </p>

          {/* Search Input */}
          <div className="pt-3">
            <div className="relative max-w-lg">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="🔍 Search city, country or destination..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 text-sm font-semibold placeholder-slate-400 shadow-md focus:outline-hidden focus:ring-2 focus:ring-sky-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterType("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === "all"
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Destinations ({destinations.length})
          </button>
          <button
            onClick={() => setFilterType("popular")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === "popular"
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            ⭐ Popular
          </button>
          <button
            onClick={() => setFilterType("domestic")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === "domestic"
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            India (Domestic)
          </button>
          <button
            onClick={() => setFilterType("international")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === "international"
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            International
          </button>
        </div>

        <span className="text-xs text-slate-400 font-medium">
          Showing {destinations.length} verified destinations
        </span>
      </div>

      {/* Destinations Grid */}
      {loading ? (
        <LoadingSpinner message="Searching destinations catalog..." />
      ) : destinations.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
          <AlertCircle className="w-10 h-10 text-rose-500 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">
            No destinations found.
          </h3>
          <p className="text-sm font-semibold text-rose-700">
            We couldn't find this destination. Try another city or country.
          </p>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try searching for cities like Goa, Manali, Delhi, Mumbai, Jaipur, Bhubaneswar, Dubai, Singapore, Paris, Tokyo, or London.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setFilterType("all");
            }}
            className="px-4 py-2 rounded-xl bg-sky-50 text-sky-700 text-xs font-bold hover:bg-sky-100 transition-colors cursor-pointer"
          >
            Clear Filters & View All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      )}

    </div>
  );
}
