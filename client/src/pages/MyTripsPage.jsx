import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Printer,
  Trash2,
  Hotel,
  Plane,
  Train,
  Bus,
  CreditCard,
  CheckCircle2,
  MapPin,
  Users,
  Loader2,
  AlertCircle,
  XCircle
} from "lucide-react";
import { Badge } from "../components/Badge";
import { formatCurrency, formatLocation } from "../utils/formatters";
import { apiService } from "../services/api";

export function MyTripsPage() {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [actionError, setActionError] = useState("");

  const loadUserTrips = async () => {
    setIsLoading(true);
    setActionError("");
    try {
      const res = await apiService.getBookings();
      if (res && res.success && Array.isArray(res.bookings)) {
        setTrips(res.bookings);
      } else if (res && res.success && Array.isArray(res.data)) {
        setTrips(res.data);
      } else {
        const stored = JSON.parse(localStorage.getItem("travelmate_trips") || "[]");
        setTrips(stored);
      }
    } catch (err) {
      console.warn("Could not fetch remote bookings:", err.message);
      const stored = JSON.parse(localStorage.getItem("travelmate_trips") || "[]");
      setTrips(stored);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUserTrips();
  }, []);

  const handleCancelBooking = async (trip) => {
    const bookingRef = trip.bookingReference || trip.bookingNumber || trip.id;
    if (!window.confirm(`Are you sure you want to cancel booking ${bookingRef}?`)) return;

    try {
      if (trip.id || trip.bookingNumber) {
        await apiService.cancelBooking(trip.id || trip.bookingNumber);
      }
      // Also update local storage if present
      const stored = JSON.parse(localStorage.getItem("travelmate_trips") || "[]");
      const updatedStored = stored.filter(t => (t.id !== trip.id && t.bookingReference !== bookingRef));
      localStorage.setItem("travelmate_trips", JSON.stringify(updatedStored));

      // Reload fresh list from backend
      await loadUserTrips();
    } catch (err) {
      setActionError(err.message || "Failed to cancel booking.");
    }
  };

  const handleClearAll = () => {
    if (!window.confirm("Are you sure you want to clear trip history from this browser cache?")) return;
    localStorage.removeItem("travelmate_trips");
    loadUserTrips();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <Badge variant="brand">Verified Bookings</Badge>
            <span className="text-xs text-emerald-600 font-semibold flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Payment Gateway Verified</span>
            </span>
          </div>
          <h1 className="text-3xl font-extrabold font-display text-slate-900 mt-2">
            My Trips & Itineraries
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Track confirmed bookings, print travel vouchers, and manage your reservation details.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          {trips.length > 0 && (
            <button
              onClick={handleClearAll}
              className="px-3.5 py-2.5 rounded-xl border border-slate-200 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-600 text-slate-600 text-xs font-semibold transition-colors flex items-center space-x-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          )}
          <Link
            to="/"
            className="px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center space-x-1.5 shadow-sm"
          >
            <span>Plan a New Trip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Error Alert */}
      {actionError && (
        <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl p-4 text-xs flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{actionError}</span>
        </div>
      )}

      {/* Trips List, Loading, or Empty State */}
      {isLoading ? (
        <div className="min-h-[40vh] flex flex-col items-center justify-center space-y-3">
          <Loader2 className="w-8 h-8 animate-spin text-sky-600" />
          <p className="text-xs text-slate-500 font-semibold">Loading your verified bookings...</p>
        </div>
      ) : trips.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-soft text-center max-w-xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold font-display text-slate-800">
            No Confirmed Trips Yet
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
            You haven't completed any bookings yet. Search for a destination, customize your hotel & transport, and complete checkout using our Razorpay or Stripe payment gateway.
          </p>
          <div className="pt-2">
            <Link
              to="/explore"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold transition-colors inline-flex items-center space-x-2"
            >
              <span>Explore Destinations</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {trips.map((trip) => (
            <div
              key={trip.bookingReference || trip.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Trip Header Banner */}
              <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {trip.destination}, {trip.country || "India"}
                    </h3>
                    <div className="flex items-center space-x-2 text-[11px] text-slate-500">
                      <span>Ref: <strong className="font-mono text-sky-700">{trip.bookingReference || trip.bookingNumber}</strong></span>
                      <span>•</span>
                      <span>Booked: {new Date(trip.bookingDate || trip.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {trip.bookingStatus === "CANCELLED" ? (
                    <span className="bg-rose-100 text-rose-800 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                      <XCircle className="w-3 h-3 text-rose-600" />
                      <span>CANCELLED</span>
                    </span>
                  ) : (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>CONFIRMED</span>
                    </span>
                  )}
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    trip.gateway === "stripe"
                      ? "bg-indigo-100 text-indigo-800"
                      : "bg-sky-100 text-sky-800"
                  }`}>
                    {trip.gateway === "stripe" ? "🌐 Stripe" : "🇮🇳 Razorpay"}
                  </span>
                </div>
              </div>

              {/* Trip Body */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  {/* Dates & Guests */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Duration & Guests</span>
                    <p className="font-semibold text-slate-800 flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{trip.checkIn} to {trip.checkOut} ({trip.nights} nights)</span>
                    </p>
                    <p className="text-slate-500 flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{trip.travelers} Guests • Guest: {trip.guestDetails?.fullName}</span>
                    </p>
                  </div>

                  {/* Hotel Details */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Accommodation</span>
                    <p className="font-bold text-slate-800 flex items-center space-x-1.5">
                      <Hotel className="w-3.5 h-3.5 text-slate-400" />
                      <span>{trip.hotel?.name || "Verified Hotel"}</span>
                    </p>
                    <p className="text-slate-500">
                      {trip.hotel?.roomType} Room • {trip.hotel?.address}
                    </p>
                  </div>

                  {/* Payment Verification Proof */}
                  <div className="space-y-1 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Payment Verification</span>
                    <p className="text-slate-700 font-semibold text-xs flex items-center justify-between">
                      <span>Total Paid:</span>
                      <strong className="text-emerald-700 font-display text-sm">
                        {trip.currency === "USD"
                          ? `$${Math.round(trip.grandTotal / 85)} USD`
                          : trip.currency === "EUR"
                          ? `€${Math.round(trip.grandTotal / 92)} EUR`
                          : formatCurrency(trip.grandTotal)}
                      </strong>
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">
                      Method: {trip.paymentMethod || "Instant Gateway"}
                    </p>
                    <p className="text-[10px] font-mono text-slate-400 truncate">
                      TXN: {trip.transactionId}
                    </p>
                  </div>
                </div>

                {/* Transportation if any */}
                {trip.transportation && (
                  <div className="bg-sky-50/50 p-3 rounded-xl border border-sky-100 text-xs flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {trip.transportation.type === "TRAIN" ? (
                        <Train className="w-4 h-4 text-sky-600" />
                      ) : trip.transportation.type === "BUS" ? (
                        <Bus className="w-4 h-4 text-sky-600" />
                      ) : (
                        <Plane className="w-4 h-4 text-sky-600" />
                      )}
                      <div>
                        <span className="font-bold text-slate-800">
                          {trip.transportation.type === "FLIGHT"
                            ? `${trip.transportation.marketingCarrier?.name || trip.transportation.airline?.name || trip.transportation.operatingCarrier?.name || trip.transportation.airline || "Airline"}${trip.transportation.flightNumber ? ` (${trip.transportation.flightNumber})` : ""}`
                            : (trip.transportation.operator || trip.transportation.provider)}
                        </span>
                        <span className="text-slate-500 ml-2">Departing from {formatLocation(trip.transportation.origin)} ({trip.transportation.departureTime})</span>
                      </div>
                    </div>
                    <span className="font-bold text-sky-900">{formatCurrency(trip.transportation.total)}</span>
                  </div>
                )}

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Official Travel Itinerary Voucher</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => window.print()}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center space-x-1"
                    >
                      <Printer className="w-3.5 h-3.5 text-slate-500" />
                      <span>Print Voucher</span>
                    </button>
                    {trip.bookingStatus !== "CANCELLED" && (
                      <button
                        onClick={() => handleCancelBooking(trip)}
                        className="px-3 py-1.5 rounded-lg border border-rose-200 hover:bg-rose-50 text-rose-600 text-xs font-semibold"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
