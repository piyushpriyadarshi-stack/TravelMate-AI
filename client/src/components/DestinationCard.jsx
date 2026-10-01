import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, Sparkles, ArrowRight, Camera } from "lucide-react";
import { Badge } from "./Badge";
import { SafeImage } from "./SafeImage";
import { imageService } from "../services/imageService";

export function DestinationCard({ destination }) {
  if (!destination) return null;

  const imageUrl = imageService.getDestinationImage(destination);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium border border-slate-100 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Banner */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <SafeImage
          src={imageUrl}
          alt={`${destination.name} real travel photograph`}
          fallbackType="destination"
          showPhotoBadge={true}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent pointer-events-none" />
        
        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          {destination.isDomestic ? (
            <Badge variant="brand">India</Badge>
          ) : (
            <Badge variant="coral">International</Badge>
          )}
          <span className="text-[10px] font-bold bg-black/50 text-white px-2 py-0.5 rounded-full backdrop-blur-xs">
            DEMO DATA
          </span>
        </div>

        {/* Rating / Popularity Badge */}
        <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-bold text-slate-800 flex items-center space-x-1 shadow-sm">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>{destination.popularity}% Match</span>
        </div>

        {/* Title over Image */}
        <Link
          to={`/destinations/${destination.id}`}
          className="absolute bottom-3.5 left-3.5 right-3.5 group-hover:text-sky-300 transition-colors"
        >
          <h3 className="text-2xl font-bold font-display text-white tracking-wide">
            {destination.name}
          </h3>
          <p className="text-xs text-slate-200 flex items-center space-x-1 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{destination.city}, {destination.country}</span>
          </p>
        </Link>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {destination.shortDescription || destination.description}
        </p>

        {/* Key Attractions */}
        {destination.attractions && destination.attractions.length > 0 && (
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
              Highlights:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {destination.attractions.slice(0, 3).map((attr, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-lg bg-slate-50 text-slate-600 text-[11px] border border-slate-100"
                >
                  {attr}
                </span>
              ))}
              {destination.attractions.length > 3 && (
                <span className="px-1.5 py-0.5 rounded-lg bg-slate-50 text-slate-400 text-[11px]">
                  +{destination.attractions.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons: View Details & Plan Trip */}
        <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
          <Link
            to={`/destinations/${destination.id}`}
            className="py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold text-center transition-colors border border-slate-200"
          >
            View Details
          </Link>
          <Link
            to={`/search?destination=${encodeURIComponent(destination.name)}`}
            className="py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold text-center transition-colors flex items-center justify-center space-x-1 shadow-xs"
          >
            <span>Plan Trip</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
