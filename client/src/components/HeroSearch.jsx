import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Users,
  Search,
  AlertCircle,
  CheckCircle2,
  Plus,
  Minus,
  Sparkles,
  Globe,
  Camera,
  Check
} from "lucide-react";
import {
  getTodayDateString,
  getTomorrowDateString,
  addDays,
  validateDates,
  calculateNights
} from "../utils/dateUtils";
import { apiService } from "../services/api";
import { imageService } from "../services/imageService";
import { WorldwideDestinationModal } from "./WorldwideDestinationModal";
import { SafeImage } from "./SafeImage";
import { CurrentLocationPicker } from "./CurrentLocationPicker";

import { MIN_TRAVELERS, MAX_TRAVELERS, DEFAULT_TRAVELERS } from "../utils/constants";
import { parseNaturalQuery } from "../utils/naturalLanguageParser";

export function HeroSearch() {
  const navigate = useNavigate();

  // Dynamic Dates - strictly initialized from system date
  const todayStr = getTodayDateString();
  const tomorrowStr = getTomorrowDateString();

  const [destination, setDestination] = useState("");
  const [selectedDestObject, setSelectedDestObject] = useState(null);
  const [checkInDate, setCheckInDate] = useState(todayStr);
  const [checkOutDate, setCheckOutDate] = useState(tomorrowStr);
  const [travelers, setTravelers] = useState(DEFAULT_TRAVELERS);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  // Autocomplete suggestions
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showWorldwideModal, setShowWorldwideModal] = useState(false);
  const [validationError, setValidationError] = useState("");

  // Stage 4: AI Travel Assistant Mode
  const [searchMode, setSearchMode] = useState("standard"); // "standard" | "ai"
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const [aiExtracted, setAiExtracted] = useState(null);
  const [aiMissing, setAiMissing] = useState([]);
  const [manualOrigin, setManualOrigin] = useState("");

  const handleAiSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!aiPrompt.trim()) return;

    try {
      setAiLoading(true);
      setAiError("");
      const res = await apiService.parseAITravelPlan(aiPrompt.trim(), manualOrigin.trim() || null);
      if (res && res.success) {
        setAiExtracted(res.extracted);
        setAiMissing(res.missingInformation || []);
        if (res.extracted.origin) setManualOrigin(res.extracted.origin);
        if (res.extracted.destination) {
          setDestination(res.extracted.destination);
          if (res.destinationData) setSelectedDestObject(res.destinationData);
        }
        if (res.extracted.travelers) {
          setTravelers(Math.min(Math.max(res.extracted.travelers, MIN_TRAVELERS), MAX_TRAVELERS));
        }
        if (res.extracted.durationDays) {
          setCheckOutDate(addDays(checkInDate, res.extracted.durationDays));
        }
      } else {
        setAiError(res?.error || "AI assistant is temporarily unavailable. You can plan your trip manually.");
      }
    } catch (err) {
      setAiError("AI assistant is temporarily unavailable. You can plan your trip manually.");
    } finally {
      setAiLoading(false);
    }
  };

  // Curated prominent quick picks per Stage 3 requirements
  const quickPicks = [
    { name: "Goa", country: "India", icon: "🏖️" },
    { name: "Manali", country: "India", icon: "❄️" },
    { name: "Delhi", country: "India", icon: "🏛️" },
    { name: "Mumbai", country: "India", icon: "🌆" },
    { name: "Jaipur", country: "India", icon: "🏰" },
    { name: "Bhubaneswar", country: "India", icon: "🌴" },
    { name: "Dubai", country: "UAE", icon: "✨" },
    { name: "Singapore", country: "Singapore", icon: "🦁" },
    { name: "Paris", country: "France", icon: "🗼" },
    { name: "Tokyo", country: "Japan", icon: "🌸" },
    { name: "London", country: "United Kingdom", icon: "🎡" }
  ];

  // Fetch destination suggestions as user types
  useEffect(() => {
    if (destination.trim().length > 1) {
      const timer = setTimeout(async () => {
        try {
          const res = await apiService.getDestinations({ search: destination.trim(), limit: 8 });
          if (res && res.data) {
            setSuggestions(res.data);
            // If exact match exists, save destination object
            const exact = res.data.find(d => d.name.toLowerCase() === destination.trim().toLowerCase());
            if (exact) setSelectedDestObject(exact);
          }
        } catch {
          // Silent fallback
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [destination]);

  // Handle Check-in date change
  const handleCheckInChange = (e) => {
    const newCheckIn = e.target.value;
    setCheckInDate(newCheckIn);
    setValidationError("");

    if (newCheckIn >= checkOutDate) {
      setCheckOutDate(addDays(newCheckIn, 1));
    }
  };

  // Handle Check-out date change
  const handleCheckOutChange = (e) => {
    const newCheckOut = e.target.value;
    setCheckOutDate(newCheckOut);
    setValidationError("");
  };

  // Travelers limit controls (Min 1, Max 40)
  const handleTravelerChange = (delta) => {
    setTravelers((prev) => {
      const next = prev + delta;
      if (next < MIN_TRAVELERS) return MIN_TRAVELERS;
      if (next > MAX_TRAVELERS) return MAX_TRAVELERS;
      return next;
    });
  };

  // Select a destination from suggestions or quick picks
  const handleSelectDestination = (destName, destObj = null) => {
    setDestination(destName);
    setSelectedDestObject(destObj);
    setShowSuggestions(false);
    setValidationError("");

    // If no object provided, try to find in suggestions
    if (!destObj && suggestions.length > 0) {
      const match = suggestions.find(s => s.name.toLowerCase() === destName.toLowerCase());
      if (match) setSelectedDestObject(match);
    }
  };

  // Search submission with rigorous client-side validation
  const handleSearch = (e) => {
    e.preventDefault();
    setValidationError("");

    let targetDestination = destination.trim();
    let targetCheckIn = checkInDate;
    let targetCheckOut = checkOutDate;
    let targetTravelers = travelers;

    // Optional Natural Language query parser preparation (Stage 3 Requirement 17)
    const natural = parseNaturalQuery(targetDestination);
    if (natural.isNaturalLanguage) {
      targetDestination = natural.destination;
      if (natural.nights) {
        targetCheckOut = addDays(targetCheckIn, natural.nights);
      }
      if (natural.travelers) {
        targetTravelers = natural.travelers;
      }
    }

    // 1. Destination check
    if (!targetDestination) {
      setValidationError("Please enter or select a destination to continue.");
      return;
    }

    // 2. Date validation
    const dateCheck = validateDates(targetCheckIn, targetCheckOut);
    if (!dateCheck.isValid) {
      setValidationError(dateCheck.error);
      return;
    }

    // 3. Traveler limits validation
    if (targetTravelers < MIN_TRAVELERS || targetTravelers > MAX_TRAVELERS) {
      setValidationError(`Traveler count must be between ${MIN_TRAVELERS} and ${MAX_TRAVELERS}.`);
      return;
    }

    // Navigate to the Search Results flow preserving all parameters in the URL
    const params = new URLSearchParams({
      destination: targetDestination,
      checkIn: targetCheckIn,
      checkOut: targetCheckOut,
      travelers: targetTravelers.toString()
    });

    if (manualOrigin && manualOrigin.trim()) {
      params.set("origin", manualOrigin.trim());
    }

    if (selectedDestObject?.id) {
      params.set("destinationId", selectedDestObject.id);
    }

    navigate(`/search?${params.toString()}`);
  };

  const nights = calculateNights(checkInDate, checkOutDate);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Search Container Card */}
      <div className="bg-white/95 rounded-3xl shadow-2xl shadow-sky-950/10 border border-slate-200/80 p-5 sm:p-7 lg:p-8 backdrop-blur-2xl relative ring-1 ring-slate-900/5 transition-all">

        {/* Stage 4: Top Mode Selector Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-slate-100 pb-3.5">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setSearchMode("standard")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                searchMode === "standard"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Standard Search</span>
            </button>

            <button
              type="button"
              onClick={() => setSearchMode("ai")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                searchMode === "ai"
                  ? "bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-gradient-to-r from-sky-50 to-indigo-50 hover:from-sky-100 hover:to-indigo-100 text-sky-700 border border-sky-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>✨ Plan with AI</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-[11px] font-bold text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verified Rates • Instant E-Tickets</span>
          </div>
        </div>

        {/* Conditional Mode Rendering: AI Travel Assistant vs Standard Search */}
        {searchMode === "ai" ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-sky-600 font-bold text-xs uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>AI Travel Assistant (Stage 4)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
                Plan your trip with natural language
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Tell us where you are, where you want to go, your travel duration, group size, and budget.
              </p>
            </div>

            {/* Current Location Detector / Starting Location */}
            <CurrentLocationPicker
              selectedOrigin={manualOrigin}
              onOriginChange={setManualOrigin}
              className="bg-slate-50/70 p-3.5 rounded-2xl border border-slate-200/80"
            />

            {/* Natural Language Prompt Input */}
            <form onSubmit={handleAiSubmit} className="space-y-3">
              <div className="relative">
                <textarea
                  rows={3}
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="e.g. I am in Bhubaneswar and want to go to Goa for 5 days with 5 people and budget ₹50000."
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 shadow-inner"
                />

                <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Quick Try Example Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setAiPrompt("I am in Bhubaneswar and want to go to Goa for 5 days with 5 people and budget ₹50000.");
                    }}
                    className="text-xs text-sky-600 hover:text-sky-700 font-semibold flex items-center space-x-1 hover:underline text-left cursor-pointer"
                  >
                    <span>💡 Try: "I am in Bhubaneswar and want to go to Goa for 5 days with 5 people and budget ₹50000."</span>
                  </button>

                  <button
                    type="submit"
                    disabled={aiLoading || !aiPrompt.trim()}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer flex-shrink-0"
                  >
                    {aiLoading ? (
                      <span>Analyzing with AI...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span>Plan with AI</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Error / Fallback Alert (Requirement 17) */}
            {aiError && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center space-x-2.5">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-500" />
                <span className="font-semibold">{aiError}</span>
              </div>
            )}

            {/* Extracted Card (Requirement 10, 11, 16) */}
            {aiExtracted && (
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-50 via-sky-50/40 to-indigo-50/30 border border-sky-200/80 space-y-5 shadow-xs animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base font-display">
                        Here's what I understood
                      </h3>
                      <p className="text-xs text-slate-500">
                        Review or edit any of the extracted parameters below before searching.
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-sky-700 bg-white px-3 py-1 rounded-full border border-sky-200 shadow-2xs self-start sm:self-auto">
                    ✏️ Editable Trip Parameters
                  </span>
                </div>

                {/* Editable Fields (Requirement 11 & 16) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                  {/* From (Origin) - Requirement 16 simple manual origin field */}
                  <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      From (Origin)
                    </label>
                    <input
                      type="text"
                      value={manualOrigin}
                      onChange={(e) => setManualOrigin(e.target.value)}
                      placeholder="e.g. Bhubaneswar"
                      className="w-full text-xs font-bold text-slate-900 focus:outline-hidden focus:text-sky-600 bg-transparent"
                    />
                  </div>

                  {/* To (Destination) */}
                  <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      To (Destination)
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g. Goa"
                      className="w-full text-xs font-bold text-slate-900 focus:outline-hidden focus:text-sky-600 bg-transparent"
                    />
                  </div>

                  {/* Duration */}
                  <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Duration
                    </label>
                    <div className="flex items-center space-x-1">
                      <input
                        type="number"
                        min={1}
                        max={30}
                        value={aiExtracted.durationDays || ""}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          setAiExtracted({ ...aiExtracted, durationDays: val });
                          if (val > 0) setCheckOutDate(addDays(checkInDate, val));
                        }}
                        placeholder="5"
                        className="w-full text-xs font-bold text-slate-900 focus:outline-hidden focus:text-sky-600 bg-transparent"
                      />
                      <span className="text-xs text-slate-400 font-semibold">days</span>
                    </div>
                  </div>

                  {/* Travelers */}
                  <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Travelers
                    </label>
                    <div className="flex items-center space-x-1">
                      <input
                        type="number"
                        min={MIN_TRAVELERS}
                        max={MAX_TRAVELERS}
                        value={travelers}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          setTravelers(isNaN(val) ? 1 : Math.min(Math.max(val, MIN_TRAVELERS), MAX_TRAVELERS));
                        }}
                        className="w-full text-xs font-bold text-slate-900 focus:outline-hidden focus:text-sky-600 bg-transparent"
                      />
                      <span className="text-xs text-slate-400 font-semibold">guests</span>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Budget (INR)
                    </label>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-slate-400 font-semibold">₹</span>
                      <input
                        type="number"
                        value={aiExtracted.budget || ""}
                        onChange={(e) => setAiExtracted({ ...aiExtracted, budget: parseFloat(e.target.value) || 0 })}
                        placeholder="50000"
                        className="w-full text-xs font-bold text-slate-900 focus:outline-hidden focus:text-sky-600 bg-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Missing Information Notice (Requirement 9) */}
                {aiMissing.length > 0 && (
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>
                      Missing information: <strong>{aiMissing.join(", ")}</strong>. You can specify them in the editable fields above.
                    </span>
                  </div>
                )}

                {/* Structured Summary display (Requirement 10) */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-medium">
                    <span>From: <strong className="text-slate-900 font-bold">{manualOrigin || "Not specified"}</strong></span>
                    <span className="text-slate-300">•</span>
                    <span>To: <strong className="text-slate-900 font-bold">{destination || "Not specified"}</strong></span>
                    <span className="text-slate-300">•</span>
                    <span>Duration: <strong className="text-slate-900 font-bold">{aiExtracted.durationDays ? `${aiExtracted.durationDays} days` : "Not specified"}</strong></span>
                    <span className="text-slate-300">•</span>
                    <span>Travelers: <strong className="text-slate-900 font-bold">{travelers}</strong></span>
                    <span className="text-slate-300">•</span>
                    <span>Budget: <strong className="text-slate-900 font-bold">{aiExtracted.budget ? `₹${Number(aiExtracted.budget).toLocaleString("en-IN")}` : "Not specified"}</strong></span>
                  </div>

                  <button
                    type="button"
                    onClick={handleSearch}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>Search Destinations & Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Section 5 Prominent Question Title */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2 text-sky-600 font-bold text-xs uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Destination-First Travel Engine</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
                  Where do you want to go?
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tell us your destination first. We'll find matching verified hotels, transportation & activities.
                </p>
              </div>

          {/* Quick Picks Bar */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
            <button
              type="button"
              onClick={() => setShowWorldwideModal(true)}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold transition-all shadow-sm flex items-center space-x-1.5 whitespace-nowrap cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Browse 50+ Cities</span>
            </button>

            <span className="text-slate-400 font-semibold whitespace-nowrap pl-1 text-[11px] uppercase tracking-wider">Trending:</span>
            {quickPicks.map((pick) => (
              <button
                key={pick.name}
                type="button"
                onClick={() => handleSelectDestination(pick.name)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex items-center space-x-1.5 cursor-pointer ${
                  destination.toLowerCase() === pick.name.toLowerCase()
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/25 ring-2 ring-sky-400/30 scale-105"
                    : "bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-slate-700 hover:scale-105"
                }`}
              >
                <span>{pick.icon}</span>
                <span>{pick.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Selection Feedback Banner (Requirement 5) */}
        {destination.trim().length > 1 && (
          <div className="mb-5 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-sky-50 via-indigo-50 to-blue-50 border border-sky-200 text-slate-800 flex items-center justify-between gap-3 animate-fade-in shadow-xs">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-extrabold text-sky-950 font-display">
                  Great choice! Let's plan your trip to {destination.trim()}.
                </p>
                <p className="text-xs text-slate-600">
                  Real photographs, verified accommodations, transportation & local activities ready to explore.
                </p>
              </div>
            </div>

            <span className="hidden sm:inline-flex text-[11px] font-bold text-sky-700 bg-white/80 px-2.5 py-1 rounded-full border border-sky-200 shadow-xs">
              ✓ Destination Selected
            </span>
          </div>
        )}

        {/* Validation Error Alert */}
        {validationError && (
          <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center space-x-2.5 animate-shake">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-500" />
            <span className="font-semibold">{validationError}</span>
          </div>
        )}

        {/* Main Search Form */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">

          {/* 1. Destination Input */}
          <div className="md:col-span-4 relative">
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Destination</span>
              <button
                type="button"
                onClick={() => setShowWorldwideModal(true)}
                className="text-[11px] font-bold text-sky-600 hover:text-sky-700 flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Catalog</span>
              </button>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <MapPin className="w-5 h-5 text-sky-500" />
              </div>
              <input
                type="text"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setShowSuggestions(true);
                  setValidationError("");
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="🔍 Search city, country or destination..."
                className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowWorldwideModal(true)}
                title="Select destination from all over the world"
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-sky-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && (suggestions.length > 0 || destination.trim().length > 0) && (
              <div className="absolute z-30 left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-1 max-h-72 overflow-y-auto">

                {/* Worldwide Modal Trigger at top of dropdown */}
                <button
                  type="button"
                  onClick={() => {
                    setShowSuggestions(false);
                    setShowWorldwideModal(true);
                  }}
                  className="w-full px-4 py-2.5 text-left text-xs bg-gradient-to-r from-sky-50 to-indigo-50 hover:from-sky-100 hover:to-indigo-100 text-sky-800 border-b border-sky-100 flex items-center justify-between font-bold transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>Select From All Over The World (40+ Destinations)</span>
                  </div>
                  <span className="text-[10px] text-sky-600">Open Catalog →</span>
                </button>

                {suggestions.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectDestination(item.name, item)}
                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-sky-50 flex items-center justify-between text-slate-700 group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200">
                        <SafeImage
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className="font-bold text-slate-800 group-hover:text-sky-600">
                            {item.name}
                          </span>
                          <span className="text-xs text-slate-400">({item.country})</span>
                        </div>
                        <span className="text-[11px] text-slate-400 block line-clamp-1">{item.city}</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-sky-600 group-hover:translate-x-0.5 transition-transform">
                      Select →
                    </span>
                  </button>
                ))}

                {destination.trim().length > 1 && suggestions.length === 0 && (
                  <div className="px-4 py-3 text-xs text-rose-700 bg-rose-50/90 border-t border-rose-100 flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-rose-800">We couldn't find this destination.</p>
                      <p className="text-[11px] text-rose-600">Try another city or country.</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 2. Check-in Date */}
          <div className="md:col-span-3">
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Check-in</span>
              <span className="text-[10px] text-sky-600 font-medium">Min: Today</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Calendar className="w-5 h-5 text-sky-500" />
              </div>
              <input
                type="date"
                min={todayStr}
                value={checkInDate}
                onChange={handleCheckInChange}
                className="w-full pl-11 pr-3 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all cursor-pointer"
              />
            </div>
          </div>

          {/* 3. Check-out Date */}
          <div className="md:col-span-3">
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Check-out</span>
              {nights > 0 && (
                <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-1.5 py-0.5 rounded-sm">
                  {nights} {nights === 1 ? "night" : "nights"}
                </span>
              )}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Calendar className="w-5 h-5 text-sky-500" />
              </div>
              <input
                type="date"
                min={addDays(checkInDate, 1)}
                value={checkOutDate}
                onChange={handleCheckOutChange}
                className="w-full pl-11 pr-3 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all cursor-pointer"
              />
            </div>
          </div>

          {/* 4. Travelers Selector */}
          <div className="md:col-span-2 relative">
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
              Travelers
            </label>
            <div
              onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}
              className="w-full pl-3.5 pr-3 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold flex items-center justify-between cursor-pointer hover:bg-slate-100/70 transition-all"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-sky-500" />
                <span>{travelers} {travelers === 1 ? "Guest" : "Guests"}</span>
              </div>
            </div>

            {/* Travelers Modal/Pop-up */}
            {showTravelerDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-30">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-bold text-slate-800">Guests</p>
                    <p className="text-xs text-slate-400">Limit: {MIN_TRAVELERS} - {MAX_TRAVELERS} guests</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      disabled={travelers <= MIN_TRAVELERS}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravelerChange(-1);
                      }}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 flex items-center justify-center font-bold text-slate-700 cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-slate-800">
                      {travelers}
                    </span>
                    <button
                      type="button"
                      disabled={travelers >= MAX_TRAVELERS}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravelerChange(1);
                      }}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 flex items-center justify-center font-bold text-slate-700 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowTravelerDropdown(false)}
                  className="w-full py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* 5. Submit Button */}
          <div className="md:col-span-12 mt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-bold text-base shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 flex items-center justify-center space-x-2.5 transition-all duration-200 transform active:scale-[0.99] cursor-pointer"
            >
              <Search className="w-5 h-5" />
              <span>Search Trips</span>
            </button>
          </div>

        </form>
        </>
        )}

        {/* Date Validation Policy & Authentic Photography Notice */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Real-world photographs via Unsplash License • Curated Demo Inventory</span>
          </div>
          <span className="text-slate-400 font-medium">
            System Clock: {new Date().toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        </div>

      </div>

      {/* Worldwide Destination Selector Modal */}
      <WorldwideDestinationModal
        isOpen={showWorldwideModal}
        onClose={() => setShowWorldwideModal(false)}
        onSelectDestination={(val) => {
          handleSelectDestination(val);
        }}
        currentSelection={destination}
      />
    </div>
  );
}
