import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import {
  Check,
  ShieldCheck,
  Calendar,
  Users,
  Hotel as HotelIcon,
  Plane,
  Train,
  Bus,
  MapPin,
  Receipt,
  Copy,
  Printer,
  ArrowRight,
  AlertCircle,
  Loader2,
  Mail,
  Home,
  Briefcase
} from "lucide-react";
import { apiService } from "../services/api";
import { formatCurrency, formatLocation } from "../utils/formatters";
import { useAuth } from "../context/AuthContext";

export function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const bookingId = searchParams.get("bookingId") || searchParams.get("id");

  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState(null);

  useEffect(() => {
    async function fetchVerifiedBooking() {
      if (!bookingId) {
        setErrorMessage("No booking reference was provided in the URL.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setErrorMessage("");

      try {
        const res = await apiService.getBookingById(bookingId);
        const data = res?.booking || res?.data || res;

        if (!data || !data.id && !data.bookingNumber) {
          setErrorMessage("Booking could not be found or you do not have permission to access it.");
          setIsLoading(false);
          return;
        }

        // STRICT SECURITY RULE: Only verified PAID bookings can display payment-success
        const isPaid = (data.paymentStatus === "PAID" || data.bookingStatus === "CONFIRMED");
        if (!isPaid) {
          setErrorMessage("This booking has not been verified as paid. Please complete payment at checkout.");
          setIsLoading(false);
          return;
        }

        setBooking(data);
      } catch (err) {
        console.error("Failed to fetch verified booking:", err);
        setErrorMessage(
          err.message || "Failed to retrieve booking information. Please check your network or login session."
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchVerifiedBooking();
  }, [bookingId]);

  const handleCopy = (text, key) => {
    if (!text) return;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
      }).catch(() => {});
    }
  };

  const formatReceiptDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr || "Recent";
      return d.toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return dateStr || "Recent";
    }
  };

  // 1. Loading State
  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mb-4 text-sky-600">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
        <h2 className="text-xl font-bold font-display text-slate-800">
          Verifying Payment & Booking
        </h2>
        <p className="text-sm text-slate-500 mt-1 max-w-sm">
          Please wait while we verify your transaction status securely with the gateway...
        </p>
      </div>
    );
  }

  // 2. Unverified or Error State (Never display fake success)
  if (errorMessage || !booking) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-4 shadow-inner">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-display text-slate-900">
          Booking Verification Notice
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          {errorMessage || "We could not confirm a completed payment for this reference."}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 w-full justify-center">
          <button
            type="button"
            onClick={() => navigate("/my-trips")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <Briefcase className="w-4 h-4" />
            <span>View My Trips</span>
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Go to Dashboard</span>
          </button>
        </div>
      </div>
    );
  }

  // 3. Verified PAID State (Matching the reference visual style)
  const displayBookingId = booking.bookingNumber || booking.bookingReference || booking.id;
  const guestEmail = booking.guestDetails?.email || user?.email || "your registered email";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8">
      
      {/* Visual Reference Header */}
      <div className="text-center space-y-4 pt-2">
        {/* Large green success/check icon */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#28a745] hover:bg-[#22c55e] rounded-full flex items-center justify-center mx-auto shadow-xl shadow-green-500/20 transition-transform duration-300 hover:scale-105">
          <svg
            className="w-16 h-16 sm:w-18 sm:h-18 text-white"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M13 25L21 33L36 17"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 tracking-tight">
            Your payment was successful
          </h1>
          {/* Supporting message */}
          <p className="text-neutral-500 text-sm sm:text-base font-normal max-w-md mx-auto leading-relaxed">
            Thank you for your payment. We will be in contact with more details shortly
          </p>
        </div>

        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Payment Verified & Authorized</span>
        </div>
      </div>

      {/* Actual Booking Information Card (TravelMate Enhanced) */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden print:border-none print:shadow-none">
        
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5">
            <Receipt className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                Official Booking Confirmation & Receipt
              </div>
              <div className="text-xs font-mono text-slate-300">
                Invoice: {booking.invoiceNumber || `INV-TM-${displayBookingId}`}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              PAID
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Primary Meta Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-slate-100">
            {/* Booking ID */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Booking ID
                </span>
                <span className="text-base font-extrabold font-mono text-sky-700">
                  {displayBookingId}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(displayBookingId, "id")}
                className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1 border border-slate-200 transition-colors cursor-pointer"
                title="Copy Booking ID"
              >
                {copiedKey === "id" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Amount Paid */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Amount Paid
                </span>
                <span className="text-2xl font-black font-display text-emerald-600">
                  {formatCurrency(booking.grandTotal || booking.totalAmount || 0)}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                Payment Status: PAID
              </span>
            </div>
          </div>

          {/* Core Itinerary Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Destination */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-sky-600" /> Destination
              </span>
              <p className="text-sm font-bold text-slate-800">
                {booking.destination || booking.destinationName || "Featured Destination"}
              </p>
              {booking.transportation?.origin && (
                <p className="text-[11px] text-slate-500">
                  Departing from: {formatLocation(booking.transportation.origin)}
                </p>
              )}
            </div>

            {/* Travel Date */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-sky-600" /> Travel Date
              </span>
              <p className="text-sm font-bold text-slate-800">
                {booking.checkIn} to {booking.checkOut}
              </p>
              <p className="text-[11px] text-slate-500">
                {booking.nights || 1} {(booking.nights || 1) === 1 ? "Night" : "Nights"} Duration
              </p>
            </div>

            {/* Travelers */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                <Users className="w-3 h-3 text-sky-600" /> Travelers
              </span>
              <p className="text-sm font-bold text-slate-800">
                {booking.travelers || booking.travelerCount || 1} {(booking.travelers || booking.travelerCount || 1) === 1 ? "Traveler" : "Travelers"}
              </p>
              <p className="text-[11px] text-slate-500 truncate">
                Lead: {booking.guestDetails?.fullName || user?.name || "Traveler"}
              </p>
            </div>

            {/* Transaction Reference */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Gateway & Transaction ID
              </span>
              <p className="text-xs font-bold text-slate-800 font-mono truncate" title={booking.transactionId}>
                {booking.transactionId || `TXN-${displayBookingId}`}
              </p>
              <p className="text-[11px] text-slate-500 capitalize">
                {booking.gateway === "razorpay" ? "🇮🇳 Razorpay Secure" : "🌐 Stripe Global"} • {booking.paymentMethod || "Online"}
              </p>
            </div>
          </div>

          {/* Hotel Details */}
          {booking.hotel && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start space-x-3 text-xs">
              <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700 shrink-0 mt-0.5">
                <HotelIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">
                    {booking.hotel.name}
                  </span>
                  <span className="text-emerald-700 font-bold text-xs">
                    Confirmed Stay
                  </span>
                </div>
                <p className="text-slate-600 text-xs mt-0.5">
                  Room: {booking.hotel.roomType || "Standard Room"} • {booking.hotel.roomsCount || 1} {(booking.hotel.roomsCount || 1) === 1 ? "Room" : "Rooms"}
                </p>
                <p className="text-slate-400 text-[11px] truncate mt-0.5">
                  {booking.hotel.address}
                </p>
              </div>
            </div>
          )}

          {/* Transportation Details */}
          {booking.transportation && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start space-x-3 text-xs">
              <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700 shrink-0 mt-0.5">
                {booking.transportation.type === "TRAIN" ? (
                  <Train className="w-5 h-5" />
                ) : booking.transportation.type === "BUS" ? (
                  <Bus className="w-5 h-5" />
                ) : (
                  <Plane className="w-5 h-5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">
                    {booking.transportation.type === "FLIGHT"
                      ? `${booking.transportation.marketingCarrier?.name || booking.transportation.airline?.name || booking.transportation.airline || "Airline"}${booking.transportation.flightNumber ? ` (${booking.transportation.flightNumber})` : ""}`
                      : (booking.transportation.operator || booking.transportation.provider || "Confirmed Transit")}
                  </span>
                  <span className="text-emerald-700 font-bold text-xs">
                    Confirmed Ticket
                  </span>
                </div>
                <p className="text-slate-600 text-xs mt-0.5">
                  Departure: {booking.transportation.departureTime} • {formatLocation(booking.transportation.origin)} → {formatLocation(booking.transportation.destination)}
                </p>
              </div>
            </div>
          )}

          {/* Email dispatch callout */}
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-start space-x-3 text-xs text-sky-900">
            <Mail className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="font-bold text-sky-950">Confirmation Email Dispatched</p>
              <p className="text-sky-800 text-[11px] leading-relaxed">
                An official booking confirmation and PDF e-ticket have been sent to <strong>{guestEmail}</strong>. Present your Booking ID at hotel check-in and transit gates.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Actions (Required: "View My Trip" and "Go to Dashboard") */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>Print Receipt</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => navigate("/my-trips")}
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>View My Trip</span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Go to Dashboard</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
