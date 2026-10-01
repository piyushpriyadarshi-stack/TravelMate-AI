import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Search,
  Check,
  Edit2,
  ArrowRight
} from "lucide-react";
import { apiService } from "../services/api";

/**
 * OriginSelector
 * Implements strict requirements:
 * 1. "Where are you travelling from?"
 * 2. Two options: [📍 Use my current location] and [Enter starting city]
 * 3. Browser single-shot navigator.geolocation.getCurrentPosition()
 * 4. Shows:
 *    📍 Your starting location
 *    City, State, Country
 *    [Use this location] [Change]
 * 5. Manual search input for any city (Bhubaneswar, Mumbai, Delhi, Kolkata, etc.)
 */
export function OriginSelector({
  origin = "",
  destinationName = "Goa",
  onSelectOrigin,
  onChangeOrigin,
  errorMessage = ""
}) {
  const [activeMode, setActiveMode] = useState(null); // null | "geolocation" | "manual"
  const [geoStatus, setGeoStatus] = useState("idle"); // "idle" | "locating" | "detected" | "error"
  const [detectedLocation, setDetectedLocation] = useState(null);
  const [geoError, setGeoError] = useState("");
  const [manualCityInput, setManualCityInput] = useState("");

  const popularStartingCities = [
    "Bhubaneswar",
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Bengaluru",
    "Jaipur",
    "Hyderabad",
    "Chennai"
  ];

  // 1. Geolocation Flow
  const handleUseCurrentLocation = () => {
    setActiveMode("geolocation");
    setGeoError("");

    if (!navigator.geolocation) {
      setGeoStatus("error");
      setGeoError("Browser does not support geolocation. Please enter your starting city manually.");
      setActiveMode("manual");
      return;
    }

    setGeoStatus("locating");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await apiService.reverseGeocode(latitude, longitude);

          if (res && (res.city || res.state || res.country)) {
            const parts = [res.city, res.state, res.country].filter(Boolean);
            const formatted = parts.join(", ");
            setDetectedLocation({
              city: res.city || "Detected City",
              state: res.state || "",
              country: res.country || "India",
              formatted
            });
            setGeoStatus("detected");
          } else {
            setGeoStatus("error");
            setGeoError("Could not determine your location. Please enter your starting city manually.");
            setActiveMode("manual");
          }
        } catch (err) {
          setGeoStatus("error");
          setGeoError("Could not determine your location. Please enter your starting city manually.");
          setActiveMode("manual");
        }
      },
      (err) => {
        setGeoStatus("error");
        if (err.code === err.PERMISSION_DENIED) {
          setGeoError("Location permission was denied. Please enter your starting location manually.");
        } else if (err.code === err.POSITION_UNAVAILABLE) {
          setGeoError("Location unavailable. Please enter your starting location manually.");
        } else if (err.code === err.TIMEOUT) {
          setGeoError("Location request timed out. Please enter your starting location manually.");
        } else {
          setGeoError("Unable to retrieve location. Please enter your starting location manually.");
        }
        // Auto-switch to manual entry on error so user is never stuck
        setActiveMode("manual");
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  // Confirm detected location
  const handleConfirmDetected = () => {
    if (detectedLocation) {
      // Use clean city name or formatted location
      const selected = detectedLocation.city || detectedLocation.formatted;
      onSelectOrigin(selected);
      setActiveMode(null);
    }
  };

  // Manual city form submission
  const handleManualSubmit = (e) => {
    if (e) e.preventDefault();
    if (!manualCityInput.trim()) return;
    onSelectOrigin(manualCityInput.trim());
    setActiveMode(null);
  };

  // Quick pick city click
  const handleQuickCityClick = (city) => {
    setManualCityInput(city);
    onSelectOrigin(city);
    setActiveMode(null);
  };

  // If origin is already selected, show the active origin summary banner with change action
  const originStr = typeof origin === "string" ? origin : (origin?.city || origin?.name || origin?.formatted || "");
  if (originStr && originStr.trim()) {
    return (
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-indigo-50/50 to-blue-50 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs animate-fadeIn">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-xs">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
                Starting Location Confirmed
              </span>
            </div>
            <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5 font-display">
              Travelling from <span className="text-sky-700 underline decoration-sky-300 underline-offset-4">{originStr}</span> → <span className="text-slate-800">{destinationName}</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            onChangeOrigin();
            setActiveMode(null);
          }}
          className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-all flex items-center justify-center space-x-1.5 shadow-2xs self-start sm:self-auto cursor-pointer"
        >
          <Edit2 className="w-3.5 h-3.5 text-slate-500" />
          <span>Change Location</span>
        </button>
      </div>
    );
  }

  // ORIGIN SELECTION CARD (Displayed before transportation options)
  return (
    <div
      id="origin-selection-section"
      className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white via-sky-50/30 to-indigo-50/20 border-2 border-sky-300/80 shadow-premium space-y-5 animate-fadeIn"
    >
      {/* Header */}
      <div className="flex items-start space-x-3.5 border-b border-slate-100 pb-4">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block">
            Step 1: Choose Starting Point
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900">
            Where are you travelling from?
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Select or enter your departure city so we can find matching flights, trains, buses, and private transfers to {destinationName}.
          </p>
        </div>
      </div>

      {/* Validation Error Alert (Requirement 9) */}
      {errorMessage && (
        <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center space-x-2.5 animate-shake">
          <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Geolocation Error Alert (Requirement 2 & 10) */}
      {geoError && (
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start space-x-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-bold text-amber-900">{geoError}</p>
            <p className="text-[11px] text-amber-700">
              Please enter your starting city below.
            </p>
          </div>
        </div>
      )}

      {/* Two Main Option Buttons (Requirement 1) */}
      {activeMode === null && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Option A: Use My Current Location */}
            <button
              type="button"
              onClick={handleUseCurrentLocation}
              className="p-4 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-all flex items-center justify-center space-x-2.5 cursor-pointer transform active:scale-[0.99]"
            >
              <Navigation className="w-4 h-4 text-sky-200" />
              <span>📍 Use my current location</span>
            </button>

            {/* Option B: Enter Starting City */}
            <button
              type="button"
              onClick={() => setActiveMode("manual")}
              className="p-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border-2 border-slate-200 hover:border-sky-300 transition-all flex items-center justify-center space-x-2.5 cursor-pointer shadow-xs"
            >
              <Search className="w-4 h-4 text-sky-600" />
              <span>Enter starting city</span>
            </button>
          </div>

          {/* Quick-Pick Popular Origins */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Popular departure cities:
            </span>
            <div className="flex flex-wrap gap-2">
              {popularStartingCities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => handleQuickCityClick(city)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 text-slate-700 border border-slate-200 transition-all shadow-2xs cursor-pointer"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Locating State */}
      {activeMode === "geolocation" && geoStatus === "locating" && (
        <div className="p-6 rounded-2xl bg-sky-50/80 border border-sky-200 flex items-center justify-center space-x-3 text-sky-800">
          <Loader2 className="w-5 h-5 animate-spin text-sky-600" />
          <span className="text-sm font-bold">Requesting location & detecting your city...</span>
        </div>
      )}

      {/* Detected Location Card (Requirement 2 & 4) */}
      {activeMode === "geolocation" && geoStatus === "detected" && detectedLocation && (
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-300 text-slate-900 space-y-4 animate-fadeIn">
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-2xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
                📍 Your starting location
              </p>
              <p className="text-base sm:text-lg font-extrabold text-slate-900 font-display">
                {detectedLocation.formatted}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Approximate city-level location detected. No exact address is stored.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={handleConfirmDetected}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Use this location</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMode("manual")}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-all cursor-pointer"
            >
              <span>Change</span>
            </button>
          </div>
        </div>
      )}

      {/* Manual Search Mode (Requirement 3) */}
      {activeMode === "manual" && (
        <div className="space-y-4 animate-fadeIn">
          <form onSubmit={handleManualSubmit} className="space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Where are you travelling from?
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4 text-sky-500" />
              </div>
              <input
                type="text"
                autoFocus
                value={manualCityInput}
                onChange={(e) => setManualCityInput(e.target.value)}
                placeholder="Search city... (e.g. Bhubaneswar, Mumbai, Delhi, Kolkata)"
                className="w-full pl-10 pr-28 py-3 rounded-2xl bg-white border-2 border-sky-400 text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 shadow-sm"
              />
              <button
                type="submit"
                disabled={!manualCityInput.trim()}
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white font-bold text-xs transition-all cursor-pointer flex items-center space-x-1"
              >
                <span>Confirm</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Quick Click Cities */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Or pick from top cities:
            </span>
            <div className="flex flex-wrap gap-2">
              {popularStartingCities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => handleQuickCityClick(city)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-50 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 text-slate-700 border border-slate-200 transition-all shadow-2xs cursor-pointer"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
            <button
              type="button"
              onClick={handleUseCurrentLocation}
              className="text-sky-600 hover:text-sky-800 font-bold flex items-center space-x-1 cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Use my current location instead</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMode(null)}
              className="text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
