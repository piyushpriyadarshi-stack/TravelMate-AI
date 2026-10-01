import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, CheckCircle, Wifi, Shield, ArrowRight, ExternalLink, BedDouble, Clock, AlertCircle } from "lucide-react";
import { Badge } from "./Badge";
import { SafeImage } from "./SafeImage";
import { imageService } from "../services/imageService";
import { formatCurrency, formatCategory } from "../utils/formatters";

export function HotelCard({ hotel, onSelectHotel, isSelected = false }) {
  if (!hotel) return null;

  const images = imageService.getHotelImages(hotel);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentImage = images[activeImageIndex] || images[0];

  // Room types available
  const primaryRoom = hotel.roomTypes?.[0] || hotel.rooms?.[0];
  const locationLabel = hotel.city
    ? `${hotel.city}${hotel.state && hotel.state !== hotel.city ? `, ${hotel.state}` : ""}`
    : (hotel.destination?.name || hotel.address || "");

  return (
    <div className={`bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium border transition-all duration-300 flex flex-col group ${
      isSelected ? "ring-2 ring-sky-500 border-sky-400" : "border-slate-100"
    }`}>
      {/* Top Image & Gallery Switcher */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <SafeImage
          src={currentImage}
          alt={`${hotel.name} real photograph`}
          fallbackType="hotel"
          showPhotoBadge={true}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 flex-wrap">
          <Badge variant="luxury">{formatCategory(hotel.category)}</Badge>
          <span className="text-[10px] font-semibold bg-slate-900/80 text-sky-200 px-2.5 py-0.5 rounded-full backdrop-blur-md border border-slate-700/50 flex items-center gap-1">
            <CheckCircle className="w-2.5 h-2.5 text-sky-400" />
            Verified Real Hotel
          </span>
        </div>

        {/* Rating */}
        {hotel.rating && (
          <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-bold text-slate-800 flex items-center space-x-1 shadow-sm">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{hotel.rating} / 5.0</span>
          </div>
        )}

        {/* Thumbnail Gallery Bar if multi-image */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between">
            <div className="text-xs text-white flex items-center space-x-1 font-semibold drop-shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="truncate max-w-[160px]">{locationLabel}</span>
              {hotel.distanceKm != null && (
                <span className="text-[10px] bg-sky-500/80 px-1.5 py-0.5 rounded text-white ml-1">
                  {hotel.distanceKm} km
                </span>
              )}
            </div>
            <div className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-xs p-1 rounded-lg">
              {images.slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                  className={`w-6 h-6 rounded-md overflow-hidden border transition-all ${
                    activeImageIndex === idx ? "border-white ring-1 ring-sky-400 scale-110" : "border-white/40 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        {images.length <= 1 && (
          <div className="absolute bottom-3.5 left-3.5 text-xs text-white flex items-center space-x-1 font-semibold drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>{locationLabel}</span>
            {hotel.distanceKm != null && (
              <span className="text-[10px] bg-sky-500/80 px-1.5 py-0.5 rounded text-white ml-1">
                {hotel.distanceKm} km away
              </span>
            )}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold font-display text-slate-800 group-hover:text-sky-600 transition-colors">
              {hotel.name}
            </h3>
            {hotel.officialWebsite && (
              <a
                href={hotel.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Official Website"
                className="text-slate-400 hover:text-sky-600 transition-colors p-1"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
            {hotel.fullAddress || hotel.address}
          </p>
        </div>

        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {hotel.description || hotel.shortDescription}
        </p>

        {/* Featured Room Type if available */}
        {primaryRoom && (
          <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100/80 flex items-center justify-between text-xs text-slate-700">
            <div className="flex items-center space-x-2">
              <BedDouble className="w-4 h-4 text-sky-600 shrink-0" />
              <div>
                <span className="font-semibold block">{primaryRoom.name}</span>
                {primaryRoom.bedType && (
                  <span className="text-[11px] text-slate-500">{primaryRoom.bedType} • {primaryRoom.roomSize || "Spacious"}</span>
                )}
              </div>
            </div>
            <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
              {primaryRoom.type || "ROOM"}
            </span>
          </div>
        )}

        {/* Amenities Highlights */}
        {hotel.amenities && hotel.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {hotel.amenities.slice(0, 4).map((amenity, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-lg bg-slate-50 text-slate-600 text-[11px] border border-slate-100 font-medium"
              >
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 4 && (
              <span className="px-1.5 py-0.5 text-slate-400 text-[10px]">
                +{hotel.amenities.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Availability & Price Row */}
        <div className="pt-3 border-t border-slate-100 space-y-2">
          {/* Price & Booking Button */}
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                  Development price
                </span>
              </div>
              <div className="flex items-baseline space-x-1 mt-1">
                <span className="text-xl font-extrabold text-slate-900 font-display">
                  {formatCurrency(hotel.pricePerNight)}
                </span>
                <span className="text-xs text-slate-500">/ night</span>
              </div>
            </div>

            {onSelectHotel ? (
              <button
                type="button"
                onClick={() => onSelectHotel(hotel)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center space-x-1.5 shadow-sm cursor-pointer ${
                  isSelected
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-slate-900 hover:bg-sky-600 text-white"
                }`}
              >
                <span>{isSelected ? "Selected ✓" : "Choose Hotel"}</span>
                {!isSelected && <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            ) : (
              <Link
                to={`/plan-trip?destination=${encodeURIComponent(hotel.destination?.name || hotel.city || "")}&hotelId=${hotel.id}`}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold transition-all duration-200 flex items-center space-x-1.5 shadow-sm"
              >
                <span>View Rooms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

          {/* Strict Availability Disclaimer */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-50 rounded-lg px-2.5 py-1.5 border border-slate-100">
            <Clock className="w-3 h-3 text-amber-500 shrink-0" />
            <span className="truncate">Live availability requires verification before booking</span>
          </div>
        </div>

      </div>
    </div>
  );
}
