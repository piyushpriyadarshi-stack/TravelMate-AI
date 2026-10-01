import React from "react";
import { Plane, Train, Bus, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { formatCurrency, formatTransportType, formatLocation } from "../utils/formatters";

export function TransportCard({ transport, passengerCount = 1, onSelect, isSelected = false }) {
  if (!transport) return null;

  const count = parseInt(passengerCount, 10) || 1;
  const isFlight = transport.type === "FLIGHT";
  const isTrain = transport.type === "TRAIN";
  const isBus = transport.type === "BUS";

  const getIcon = () => {
    if (isFlight) return Plane;
    if (isTrain) return Train;
    if (isBus) return Bus;
    return Plane;
  };

  const Icon = getIcon();

  // Branding names
  const primaryTitle = isFlight
    ? (transport.marketingCarrier?.name || transport.airline?.name || transport.operatingCarrier?.name || "Airline")
    : isTrain
    ? (transport.operator || "Indian Railways")
    : (transport.operator || transport.operatorName || "Intercity Bus");

  const subtitle = isFlight
    ? (transport.flightNumber || transport.aircraft || "Commercial Flight")
    : isTrain
    ? `${transport.trainName || "Express"}${transport.trainNumber ? ` (${transport.trainNumber})` : ""}`
    : (transport.busType || "Intercity Bus");

  // Stops & Topology
  const stops = transport.stops !== undefined ? transport.stops : (transport.isDirect ? 0 : 1);
  const stopBadgeText = isFlight
    ? (stops === 0 ? "Nonstop" : stops === 1 ? "1 Stop" : `${stops} Stops`)
    : isTrain
    ? (transport.isDirect ? "Direct Train" : "1 Transfer")
    : (transport.isDirect ? "Direct Bus" : "1 Transfer");

  // Class / Category Tag
  const classTag = isFlight
    ? (transport.cabinClass || "Economy")
    : isTrain
    ? (transport.selectedClass || transport.class || "3A")
    : (transport.seatTypes?.[0] || transport.seatType || (transport.isSleeper ? "AC Sleeper" : "AC Seater"));

  // Fare calculations
  const perTravelerFare = transport.price || transport.fare || 0;
  const totalFare = perTravelerFare * count;

  return (
    <div
      onClick={onSelect}
      className={`bg-white rounded-2xl p-5 shadow-soft hover:shadow-premium border transition-all flex flex-col justify-between group cursor-pointer ${
        isSelected
          ? "border-sky-500 ring-2 ring-sky-300 bg-sky-50/30"
          : "border-slate-100 hover:border-slate-300"
      }`}
    >
      <div>
        {/* Top Badges & Provider Branding */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                {primaryTitle}
              </h4>
              <p className="text-[11px] font-medium text-slate-500">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
              {formatTransportType(transport.type)}
            </span>
            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
              {transport.fareLabel || (transport.isLive ? "Live fare" : "Estimated fare")}
            </span>
          </div>
        </div>

        {/* Route, Timing & Pathway */}
        <div className="bg-slate-50/90 rounded-xl p-3 my-3 space-y-2 border border-slate-100">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <div className="max-w-[40%]">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Departure</span>
              <span className="font-bold text-slate-900 block truncate">{formatLocation(transport.origin)}</span>
              <span className="text-[11px] font-bold text-sky-700 mt-0.5 block">{transport.departureTime}</span>
            </div>

            <div className="flex flex-col items-center px-2 flex-shrink-0">
              <span className="text-[10px] text-slate-500 font-bold">{transport.duration || "Direct"}</span>
              <div className="w-16 h-0.5 bg-slate-300 relative my-1">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sky-500" />
              </div>
              <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                stops === 0 || transport.isDirect ? "text-emerald-700 bg-emerald-50" : "text-sky-700 bg-sky-50"
              }`}>
                {stopBadgeText}
              </span>
            </div>

            <div className="text-right max-w-[40%]">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Arrival</span>
              <span className="font-bold text-slate-900 block truncate">{formatLocation(transport.destination)}</span>
              <span className="text-[11px] font-bold text-sky-700 mt-0.5 block">{transport.arrivalTime}</span>
            </div>
          </div>

          {/* Route Summary */}
          {transport.routeSummary && (
            <p className="text-[11px] font-medium text-slate-600 border-t border-slate-200/60 pt-1.5 truncate">
              {transport.routeSummary}
            </p>
          )}

          {/* Transfer or Layover info */}
          {transport.layoverSummary && (
            <div className="text-[10px] text-sky-800 bg-sky-50 rounded px-2 py-0.5 flex items-center space-x-1">
              <Clock className="w-3 h-3 text-sky-600" />
              <span><strong>Layover:</strong> {transport.layoverSummary}</span>
            </div>
          )}

          {transport.transferStation && (
            <div className="text-[10px] text-amber-900 bg-amber-50 border border-amber-200 rounded px-2 py-0.5">
              <strong>Transfer:</strong> {transport.transferStation}
            </div>
          )}
        </div>

        {/* Feature Tags & Neutral Availability */}
        <div className="flex items-center justify-between text-xs py-1 text-slate-600">
          <div className="flex items-center space-x-1.5">
            <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
              {classTag}
            </span>
            {transport.mealsIncluded && (
              <span className="text-[11px] font-medium text-slate-500">• Meals Included</span>
            )}
            {transport.pantryAvailable && (
              <span className="text-[11px] font-medium text-slate-500">• Pantry Car</span>
            )}
          </div>

          <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Available</span>
          </span>
        </div>
      </div>

      {/* Pricing & Selection Action */}
      <div className="pt-3 mt-3 border-t border-slate-100 flex items-end justify-between">
        <div>
          <span className="text-[10px] text-slate-400 uppercase font-bold block">
            {count > 1 ? "Price per traveler" : "Estimated fare"}
          </span>
          <div className="flex items-baseline space-x-1">
            <span className="text-xl font-extrabold font-display text-slate-900">
              {formatCurrency(perTravelerFare)}
            </span>
            <span className="text-xs text-slate-500 font-medium">/ traveler</span>
          </div>
          {count > 1 && (
            <span className="text-[11px] font-bold text-sky-700 block mt-0.5">
              Total: {formatCurrency(totalFare)} ({count} travelers)
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onSelect}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
            isSelected
              ? "bg-emerald-600 text-white shadow-sm"
              : "bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white"
          }`}
        >
          <span>{isSelected ? "Selected ✓" : "Select"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
