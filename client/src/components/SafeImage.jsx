import React, { useState } from "react";
import { Camera, ImageOff } from "lucide-react";

/**
 * SafeImage component for authentic real-world photographs.
 * Requirement 8: If a destination photograph fails to load, show a simple neutral fallback:
 * "Destination photo unavailable"
 * Never uses an AI-generated fallback picture.
 */
export function SafeImage({
  src,
  alt = "Destination photograph",
  className = "",
  showPhotoBadge = false,
  attribution,
  fallbackType,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If broken or missing, render neutral fallback
  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-slate-100 border border-slate-200 text-slate-500 p-4 text-center select-none ${className}`}
        role="img"
        aria-label="Destination photo unavailable"
      >
        <ImageOff className="w-6 h-6 text-slate-400 mb-1.5 opacity-80" strokeWidth={1.5} />
        <span className="text-xs font-medium text-slate-600 tracking-wide">
          Destination photo unavailable
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {/* Skeleton Pulse while loading */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />

      {/* Real Photo Verified Badge */}
      {showPhotoBadge && loaded && !hasError && (
        <div className="absolute bottom-2 right-2 bg-slate-900/75 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-md flex items-center space-x-1 pointer-events-none shadow-xs">
          <Camera className="w-3 h-3 text-sky-400" />
          <span>Real Photo</span>
        </div>
      )}

      {/* Real Photo Source Attribution */}
      {attribution && loaded && !hasError && (
        <div className="absolute bottom-2 left-2 bg-slate-950/60 backdrop-blur-xs text-slate-200 text-[9px] px-1.5 py-0.5 rounded pointer-events-none">
          Photo via Unsplash
        </div>
      )}
    </div>
  );
}
