import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Edit2,
  X
} from "lucide-react";
import { apiService } from "../services/api";

/**
 * CurrentLocationPicker
 * Provides "📍 Use my current location" via browser Geolocation API
 * Reverse geocodes coordinates via backend POST /api/location/reverse-geocode
 * Displays "📍 Current location detected" with [Use this location] and [Change location]
 * Fallback to manual entry with clear error states
 */
export function CurrentLocationPicker({
  selectedOrigin = "",
  onOriginChange,
  className = ""
}) {
  const [status, setStatus] = useState("idle"); // "idle" | "locating" | "detected" | "error"
  const [detectedLocation, setDetectedLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isManualMode, setIsManualMode] = useState(false);

  // Trigger browser Geolocation
  const handleDetectLocation = () => {
    setErrorMessage("");
    if (!navigator.geolocation) {
      setStatus("error");
      setErrorMessage(
        "Browser does not support geolocation. Please enter your starting location manually."
      );
      setIsManualMode(true);
      return;
    }

    setStatus("locating");

    // Single-shot position request — NO continuous or background tracking
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await apiService.reverseGeocode(latitude, longitude);

          if (res && (res.city || res.state || res.country)) {
            const parts = [res.city, res.state, res.country].filter(Boolean);
            const formatted = parts.join(", ");
            setDetectedLocation({
              city: res.city,
              state: res.state,
              country: res.country,
              formatted
            });
            setStatus("detected");
          } else {
            setStatus("error");
            setErrorMessage(
              "Reverse geocoding failed. Please enter your starting location manually."
            );
            setIsManualMode(true);
          }
        } catch (err) {
          setStatus("error");
          setErrorMessage(
            "Reverse geocoding failed. Please enter your starting location manually."
          );
          setIsManualMode(true);
        }
      },
      (geoError) => {
        setStatus("error");
        setIsManualMode(true);
        if (geoError.code === geoError.PERMISSION_DENIED) {
          setErrorMessage(
            "Location permission was denied. Please enter your starting location manually."
          );
        } else if (geoError.code === geoError.POSITION_UNAVAILABLE) {
          setErrorMessage(
            "Location unavailable. Please enter your starting location manually."
          );
        } else if (geoError.code === geoError.TIMEOUT) {
          setErrorMessage(
            "Location request timed out. Please enter your starting location manually."
          );
        } else {
          setErrorMessage(
            "Unable to retrieve location. Please enter your starting location manually."
          );
        }
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  // User accepts the detected location
  const handleUseDetected = () => {
    if (detectedLocation?.formatted) {
      onOriginChange(detectedLocation.formatted);
      setIsManualMode(false);
    }
  };

  // User chooses to change/enter location manually
  const handleChangeLocation = () => {
    setIsManualMode(true);
  };

  return (
    <div className={`space-y-2.5 ${className}`}>
      {/* 1. Initial State: Action Button & Current Status */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <label className="text-xs font-bold text-slate-700 flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Starting Location (Origin)</span>
          </label>
        </div>

        {/* Use My Current Location Trigger Button */}
        <button
          type="button"
          onClick={handleDetectLocation}
          disabled={status === "locating"}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 border border-sky-200 transition-all shadow-2xs disabled:opacity-50 cursor-pointer"
        >
          {status === "locating" ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-600" />
              <span>Detecting location...</span>
            </>
          ) : (
            <>
              <Navigation className="w-3.5 h-3.5 text-sky-600" />
              <span>📍 Use my current location</span>
            </>
          )}
        </button>
      </div>

      {/* 2. Detected Location Banner (Requirement 4) */}
      {status === "detected" && detectedLocation && (
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200 text-slate-800 shadow-2xs space-y-2.5 animate-fadeIn">
          <div className="flex items-start space-x-2.5">
            <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                📍 Current location detected
              </p>
              <p className="text-sm font-extrabold text-slate-900">
                {detectedLocation.formatted}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-1">
            <button
              type="button"
              onClick={handleUseDetected}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-2xs flex items-center space-x-1.5 cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Use this location</span>
            </button>
            <button
              type="button"
              onClick={handleChangeLocation}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-all cursor-pointer"
            >
              <span>Change location</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. Error Banner (Requirement 5) */}
      {status === "error" && errorMessage && (
        <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start space-x-2.5 animate-fadeIn">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-bold text-amber-900">{errorMessage}</p>
            <p className="text-[11px] text-amber-700">
              You can type your starting location in the field below.
            </p>
          </div>
        </div>
      )}

      {/* 4. Manual Origin Input / Active Location Display (Requirement 4 & 16) */}
      {(isManualMode || selectedOrigin || status === "idle" || status === "error") && (
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <MapPin className="w-4 h-4 text-sky-500" />
          </div>
          <input
            type="text"
            value={typeof selectedOrigin === "string" ? selectedOrigin : (selectedOrigin?.name || selectedOrigin?.city || selectedOrigin?.formatted || "")}
            onChange={(e) => onOriginChange(e.target.value)}
            placeholder="Starting location (e.g. Bhubaneswar, Odisha, India)"
            className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
          />
          {selectedOrigin && (
            <button
              type="button"
              onClick={() => onOriginChange("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  );
}
