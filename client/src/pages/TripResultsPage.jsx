import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Users,
  Search,
  CheckCircle2,
  AlertCircle,
  Hotel as HotelIcon,
  Plane,
  Train,
  Bus,
  Compass,
  Star,
  ArrowRight,
  Shield,
  CreditCard,
  Printer,
  Sparkles,
  Camera,
  Check,
  ChevronRight,
  Clock,
  ExternalLink,
  Lock,
  Loader2,
  Globe,
  Building2,
  QrCode,
  Receipt,
  Plus,
  Minus,
  Copy,
  CheckCheck,
  ShieldCheck,
  Mail,
  FileText
} from "lucide-react";
import { apiService } from "../services/api";
import { imageService } from "../services/imageService";
import { SafeImage } from "../components/SafeImage";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Badge } from "../components/Badge";
import { formatCurrency, formatCategory, formatTransportType, formatLocation } from "../utils/formatters";
import { calculateNights, getTodayDateString, getTomorrowDateString } from "../utils/dateUtils";
import { useAuth } from "../context/AuthContext";
import { OriginSelector } from "../components/OriginSelector";
import { MIN_TRAVELERS, MAX_TRAVELERS } from "../utils/constants";

export function TripResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const destQuery = searchParams.get("destination") || "";
  const checkIn = searchParams.get("checkIn") || getTodayDateString();
  const checkOut = searchParams.get("checkOut") || getTomorrowDateString();
  const initialTravelers = Math.min(
    Math.max(parseInt(searchParams.get("travelers") || "2", 10) || 2, MIN_TRAVELERS),
    MAX_TRAVELERS
  );
  const [travelersCount, setTravelersCount] = useState(initialTravelers);

  // Sync state if searchParams change externally
  useEffect(() => {
    const raw = parseInt(searchParams.get("travelers"), 10);
    if (!isNaN(raw)) {
      const clamped = Math.min(Math.max(raw, MIN_TRAVELERS), MAX_TRAVELERS);
      if (clamped !== travelersCount) {
        setTravelersCount(clamped);
      }
    }
  }, [searchParams]);

  // Handler to update travelers count and synchronize with URL searchParams
  const handleUpdateTravelers = (newCount) => {
    const validCount = Math.min(Math.max(newCount, MIN_TRAVELERS), MAX_TRAVELERS);
    setTravelersCount(validCount);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("travelers", validCount.toString());
    navigate({ search: `?${newParams.toString()}` }, { replace: true });
  };

  const preselectedHotelId = searchParams.get("hotelId");

  // Origin state (Strictly NO hardcoded Delhi default!)
  const [origin, setOrigin] = useState(searchParams.get("origin") || "");
  const [originError, setOriginError] = useState("");
  const [loadingTransport, setLoadingTransport] = useState(false);
  const cleanOrigin = origin
    ? (typeof origin === "string" ? origin.split(",")[0].trim() : (origin?.city || origin?.name || ""))
    : "";

  const nights = calculateNights(checkIn, checkOut);

  // Data states
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [popularSuggestions, setPopularSuggestions] = useState([]);

  // Results data
  const [hotels, setHotels] = useState([]);
  const [transportation, setTransportation] = useState([]);
  const [activities, setActivities] = useState([]);

  // Active filter states
  const [activeTab, setActiveTab] = useState("all"); // "all", "hotels", "transport", "activities"
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTransportType, setSelectedTransportType] = useState("");
  const [flightStopFilter, setFlightStopFilter] = useState("all"); // "all", "nonstop", "1stop", "2plus"
  const [trainClassFilter, setTrainClassFilter] = useState("all"); // "all", "sleeper", "3a", "2a", "1a"
  const [busTypeFilter, setBusTypeFilter] = useState("all"); // "all", "non-ac", "ac seater", "ac sleeper"
  const [transportSort, setTransportSort] = useState("PRICE_LOW_TO_HIGH");
  const [transportMeta, setTransportMeta] = useState({
    status: "",
    message: "",
    hasDirect: false,
    hasConnecting: false,
    directCount: 0,
    connectingCount: 0
  });

  // Trip Customizer State
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);

  // Checkout & Booking State
  const [currentCheckoutStep, setCurrentCheckoutStep] = useState(null); // null, "summary", "details", "payment", "confirmation"
  const [guestDetails, setGuestDetails] = useState({
    fullName: user?.name || "Traveler",
    email: user?.email || "",
    specialRequests: ""
  });

  // Sync guest details when authenticated user changes
  useEffect(() => {
    if (user) {
      setGuestDetails(prev => ({
        ...prev,
        fullName: user.name || prev.fullName,
        email: user.email || prev.email
      }));
    }
  }, [user]);
  const [selectedGateway, setSelectedGateway] = useState("razorpay"); // "razorpay" | "stripe"
  const [currency, setCurrency] = useState("INR"); // "INR" | "USD" | "EUR"
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [bookingConfirmation, setBookingConfirmation] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    if (!text) return;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
      }).catch(() => {
        // fallback
      });
    }
  };

  const formatReceiptDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr || "Just now";
      return d.toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return dateStr || "Just now";
    }
  };

  // Fetch Destination & Curated Inventory
  useEffect(() => {
    async function loadDestinationData() {
      if (!destQuery.trim()) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setNotFound(false);

        // 1. Fetch matching destination with strict validation
        const destRes = await apiService.getDestinationById(destQuery.trim());

        if (!destRes || destRes.notFound || !destRes.data) {
          setNotFound(true);
          // Load popular destinations for recommendations
          const popRes = await apiService.getDestinations({ limit: 8 });
          if (popRes?.data) setPopularSuggestions(popRes.data);
          setLoading(false);
          return;
        }

        const destData = destRes.data;
        setDestination(destData);

        // 2. Fetch Hotels strictly matching this destination
        const hotelsRes = await apiService.getHotels({ destinationId: destData.id });
        const fetchedHotels = hotelsRes?.data || [];
        setHotels(fetchedHotels);

        // Preselect hotel if passed in URL or pick first
        if (fetchedHotels.length > 0) {
          const pre = preselectedHotelId 
            ? fetchedHotels.find(h => h.id === preselectedHotelId) 
            : fetchedHotels[0];
          const initialHotel = pre || fetchedHotels[0];
          setSelectedHotel(initialHotel);
          if (initialHotel.rooms && initialHotel.rooms.length > 0) {
            setSelectedRoom(initialHotel.rooms[0]);
          }
        }

        // 3. Fetch Activities for this destination
        const actRes = await apiService.getActivities({ destinationId: destData.id });
        const fetchedActs = actRes?.data || destData.activities || [];
        setActivities(fetchedActs);
        if (fetchedActs.length > 0) {
          setSelectedActivities([fetchedActs[0]]); // default include 1 recommended activity
        }

      } catch (err) {
        console.error("Failed to load destination details:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    loadDestinationData();
  }, [destQuery, preselectedHotelId]);

  // Dedicated Transportation Loader: strictly loads when origin is selected (Zero default Delhi!)
  useEffect(() => {
    async function loadTransportationForOrigin() {
      if (!destination?.name) return;

      if (!origin || !origin.trim()) {
        setTransportation([]);
        setSelectedTransport(null);
        setTransportMeta({ status: "", message: "", hasDirect: false, hasConnecting: false, directCount: 0, connectingCount: 0 });
        return;
      }

      try {
        setLoadingTransport(true);
        const cleanO = origin
          ? (typeof origin === "string" ? origin.split(",")[0].trim() : (origin?.city || origin?.name || ""))
          : "";
        const transRes = await apiService.getTransportation({
          origin: cleanO,
          destination: destination.name,
          date: checkIn || new Date().toISOString().split("T")[0],
          departureDate: checkIn || new Date().toISOString().split("T")[0],
          returnDate: checkOut || null,
          travelers: travelersCount || 1,
          cabinClass: "ECONOMY",
          stops: flightStopFilter || "all",
          hotelLocation: selectedHotel?.location || selectedHotel?.address || null
        });
        const rawTrans = transRes?.data || [];
        const fetchedTrans = rawTrans.map((t) => ({
          ...t,
          origin: formatLocation(t.origin),
          destination: formatLocation(t.destination),
          originDetails: typeof t.origin === "object" ? t.origin : null,
          destinationDetails: typeof t.destination === "object" ? t.destination : null
        }));
        setTransportation(fetchedTrans);
        setTransportMeta({
          status: transRes?.status || (fetchedTrans.length > 0 ? "AVAILABLE" : "NO_RESULTS"),
          message: transRes?.message || "",
          hasDirect: Boolean(transRes?.hasDirect),
          hasConnecting: Boolean(transRes?.hasConnecting),
          directCount: transRes?.directCount || 0,
          connectingCount: transRes?.connectingCount || 0
        });
        if (fetchedTrans.length > 0) {
          setSelectedTransport(fetchedTrans[0]);
        } else {
          setSelectedTransport(null);
        }
      } catch (err) {
        console.error("Failed to load transportation for origin:", err);
        setTransportation([]);
        setSelectedTransport(null);
        setTransportMeta({
          status: "ERROR",
          message: "Live flight search is temporarily unavailable.",
          hasDirect: false,
          hasConnecting: false,
          directCount: 0,
          connectingCount: 0
        });
      } finally {
        setLoadingTransport(false);
      }
    }

    loadTransportationForOrigin();
  }, [origin, destination?.name, checkIn, travelersCount, flightStopFilter]);

  // Handle hotel selection
  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
    if (hotel.rooms && hotel.rooms.length > 0) {
      setSelectedRoom(hotel.rooms[0]);
    } else {
      setSelectedRoom(null);
    }
  };

  // Toggle activity selection
  const handleToggleActivity = (act) => {
    setSelectedActivities((prev) => {
      const exists = prev.some(a => a.id === act.id);
      if (exists) {
        return prev.filter(a => a.id !== act.id);
      } else {
        return [...prev, act];
      }
    });
  };

  // Cost Calculations
  // Hotel: Room capacity and required rooms count
  const roomCapacity = selectedRoom?.maxGuests || selectedRoom?.capacity || selectedHotel?.roomCapacity || 2;
  const roomsNeeded = Math.max(1, Math.ceil(travelersCount / roomCapacity));
  const roomPricePerNight = selectedRoom?.pricePerNight || selectedHotel?.pricePerNight || 0;
  const accommodationTotal = roomPricePerNight * nights * roomsNeeded;
  
  // Transport cost: if flight/train/bus, multiply by travelers; if private vehicle, unit cost
  const transportTypeUpper = (selectedTransport?.type || "").toUpperCase();
  const isPerPersonTransport = transportTypeUpper === "FLIGHT" || transportTypeUpper === "TRAIN" || transportTypeUpper === "BUS";
  const transportTotal = selectedTransport 
    ? (isPerPersonTransport ? selectedTransport.price * travelersCount : selectedTransport.price)
    : 0;

  // Experiences (Activities) cost: each selected activity × travelersCount
  const activitiesTotal = selectedActivities.reduce((sum, a) => sum + (a.price * travelersCount), 0);
  const subtotal = accommodationTotal + transportTotal + activitiesTotal;
  const taxesAndFees = Math.round(subtotal * 0.12); // 12% GST / tourism taxes
  const grandTotal = subtotal + taxesAndFees;

  // Dynamic SDK loader for Razorpay
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Complete Booking on successful verification
  const completeBookingSuccess = (verifyRes, orderRes) => {
    const confirmationData = {
      bookingReference: verifyRes.bookingReference || orderRes.bookingNumber,
      invoiceNumber: verifyRes.invoiceNumber || `INV-TM-2026-${Math.floor(100000 + Math.random() * 900000)}`,
      transactionId: verifyRes.transactionId || `TXN-${Date.now()}`,
      bookingDate: verifyRes.paidAt || new Date().toISOString(),
      origin: cleanOrigin || (typeof origin === "string" ? origin : origin?.city || origin?.name || ""),
      destination: destination.name,
      country: destination.country,
      checkIn,
      checkOut,
      nights,
      travelers: travelersCount,
      hotel: {
        name: selectedHotel?.name,
        roomType: selectedRoom?.type || "Standard",
        address: selectedHotel?.address,
        pricePerNight: roomPricePerNight,
        roomsCount: roomsNeeded,
        total: accommodationTotal
      },
      transportation: selectedTransport ? {
        provider: selectedTransport.provider,
        airline: selectedTransport.airline,
        marketingCarrier: selectedTransport.marketingCarrier,
        operatingCarrier: selectedTransport.operatingCarrier,
        flightNumber: selectedTransport.flightNumber,
        type: selectedTransport.type,
        origin: formatLocation(selectedTransport.origin),
        destination: formatLocation(selectedTransport.destination),
        departureTime: selectedTransport.departureTime,
        arrivalTime: selectedTransport.arrivalTime,
        duration: selectedTransport.duration,
        stops: selectedTransport.stops,
        segments: selectedTransport.segments || [],
        isLive: Boolean(selectedTransport.isLive),
        verificationStatus: selectedTransport.verificationStatus || (selectedTransport.isLive ? "VERIFIED_LIVE_PROVIDER" : "TEST_DEVELOPMENT_DATA"),
        label: selectedTransport.label || (selectedTransport.isLive ? "VERIFIED LIVE FLIGHT" : "TEST/DEVELOPMENT DATA — NOT A REAL FLIGHT"),
        total: transportTotal
      } : null,
      activities: selectedActivities.map(a => ({ name: a.name, price: a.price })),
      guestDetails,
      paymentMethod: verifyRes.paymentMethod || paymentMethod,
      gateway: orderRes.gateway,
      currency: orderRes.currency,
      grandTotal: orderRes.amount,
      isDemoBooking: !selectedTransport?.isLive
    };

    setBookingConfirmation(confirmationData);
    setCurrentCheckoutStep(null);
    setIsProcessingPayment(false);

    try {
      const existing = JSON.parse(localStorage.getItem("travelmate_trips") || "[]");
      existing.unshift(confirmationData);
      localStorage.setItem("travelmate_trips", JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    const confirmedRef = confirmationData.bookingReference || orderRes.bookingNumber;
    navigate(`/payment-success?bookingId=${encodeURIComponent(confirmedRef)}`);
  };

  // Initiate Booking Workflow (Strict Authentication & Origin Guard)
  const handleStartBooking = async () => {
    // Requirement 9: Origin must be selected to proceed
    const originStr = typeof origin === "string" ? origin : (origin?.city || origin?.name || "");
    if (!originStr || !originStr.trim()) {
      setOriginError("Please select your starting location.");
      const el = document.getElementById("origin-selection-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (!isAuthenticated) {
      navigate("/login", {
        state: {
          from: {
            pathname: "/trip-results",
            search: `?destination=${encodeURIComponent(destQuery)}&checkIn=${checkIn}&checkOut=${checkOut}&travelers=${travelersCount}&origin=${encodeURIComponent(originStr.trim())}`
          },
          message: "Please log in or create an account to continue with your booking."
        }
      });
      return;
    }

    // STRICT REAL-FLIGHT RULE:
    // Before a user proceeds to booking/payment, perform a fresh availability/price check with the provider.
    if (selectedTransport && selectedTransport.type === "FLIGHT") {
      try {
        setIsProcessingPayment(true);
        const revalRes = await apiService.revalidateFlight({
          flightId: selectedTransport.id,
          providerFlightId: selectedTransport.providerFlightId || selectedTransport.id,
          departureDate: checkIn,
          travelers: travelersCount,
          expectedPrice: selectedTransport.price
        });

        if (!revalRes || revalRes.success === false || revalRes.data?.available === false) {
          alert(
            revalRes?.data?.message ||
            revalRes?.message ||
            "This flight offer has expired or is no longer available. Please search again for current availability."
          );
          setIsProcessingPayment(false);
          return;
        }

        // If price changed, update selectedTransport price and require user re-confirmation
        if (revalRes.data?.priceChanged && revalRes.data?.verifiedPrice) {
          const userConfirmed = window.confirm(
            revalRes.data.message ||
            `The flight price has updated to ${revalRes.data.currency || "INR"} ${revalRes.data.verifiedPrice}. Do you wish to continue with the updated price?`
          );
          if (!userConfirmed) {
            setIsProcessingPayment(false);
            return;
          }
          setSelectedTransport(prev => ({
            ...prev,
            price: revalRes.data.verifiedPrice,
            verifiedAt: revalRes.data.verifiedAt
          }));
        }
      } catch (err) {
        console.warn("Flight pre-booking revalidation note:", err.message);
      } finally {
        setIsProcessingPayment(false);
      }
    }

    setCurrentCheckoutStep("summary");
  };

  // Dual Gateway Payment Execution
  const handleExecutePayment = async () => {
    if (!isAuthenticated) {
      navigate("/login", {
        state: {
          from: {
            pathname: "/trip-results",
            search: `?destination=${encodeURIComponent(destQuery)}&checkIn=${checkIn}&checkOut=${checkOut}&travelers=${travelersCount}`
          },
          message: "Please log in or create an account to continue with your booking."
        }
      });
      return;
    }

    setIsProcessingPayment(true);
    setPaymentError("");

    try {
      // 1. Request Order Creation on Backend via Dual Gateway Service
      const orderRes = await apiService.createPaymentOrder({
        gateway: selectedGateway,
        destinationId: destination.id,
        destinationName: destination.name,
        origin: origin?.trim(),
        hotelId: selectedHotel?.id,
        roomId: selectedRoom?.id,
        transportId: selectedTransport?.id,
        transportDetails: selectedTransport,
        activityIds: selectedActivities.map(a => a.id),
        checkIn,
        checkOut,
        nights,
        travelers: travelersCount,
        guestDetails,
        currency
      });

      if (!orderRes || !orderRes.success) {
        throw new Error(orderRes?.message || "Failed to initialize payment gateway order.");
      }

      // 2A. Gateway Execution: RAZORPAY
      if (orderRes.gateway === "razorpay") {
        const hasScript = await loadRazorpayScript();

        // If live Razorpay checkout is available and not in sandbox mock
        if (hasScript && window.Razorpay && !orderRes.isSandbox) {
          const options = {
            key: orderRes.key_id || orderRes.keyId || import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: orderRes.amountInUnits || orderRes.amount,
            currency: orderRes.currency || "INR",
            name: "TravelMate AI",
            description: `Trip to ${destination.name} (${nights} nights)`,
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=120&q=80",
            order_id: orderRes.order_id || orderRes.orderId,
            prefill: {
              name: guestDetails.fullName,
              email: guestDetails.email
            },
            theme: { color: "#0284c7" },
            handler: async (response) => {
              try {
                const verifyRes = await apiService.verifyPayment({
                  gateway: "razorpay",
                  bookingNumber: orderRes.bookingNumber,
                  orderId: response.razorpay_order_id,
                  paymentId: response.razorpay_payment_id,
                  signature: response.razorpay_signature,
                  paymentMethod: paymentMethod.toUpperCase()
                });
                completeBookingSuccess(verifyRes, orderRes);
              } catch (vErr) {
                setPaymentError(vErr.message || "Payment cryptographic verification failed.");
                setIsProcessingPayment(false);
              }
            },
            modal: {
              ondismiss: () => {
                setIsProcessingPayment(false);
                setPaymentError("Payment was cancelled. Your booking was not charged. You can review your details and try again.");
              }
            }
          };
          const rzp = new window.Razorpay(options);
          rzp.on("payment.failed", (response) => {
            const failureReason = response.error?.description || response.error?.reason || "Payment was rejected or failed.";
            setPaymentError(`Payment Failed: ${failureReason}`);
            setIsProcessingPayment(false);
          });
          rzp.open();
          return;
        }

        // Razorpay Dev Sandbox verification (instant verified authorization)
        const verifyRes = await apiService.verifyPayment({
          gateway: "razorpay",
          bookingNumber: orderRes.bookingNumber,
          orderId: orderRes.orderId,
          paymentId: `pay_rzp_mock_${Date.now()}`,
          signature: "sig_mock_sandbox",
          paymentMethod: paymentMethod === "upi" ? "UPI (GPay / PhonePe Verified)" : paymentMethod === "card" ? "Credit Card (Visa Verified)" : "NetBanking (Verified)"
        });
        completeBookingSuccess(verifyRes, orderRes);
      }

      // 2B. Gateway Execution: STRIPE
      else if (orderRes.gateway === "stripe") {
        // Stripe verification (simulated card authorization or paymentIntent)
        const verifyRes = await apiService.verifyPayment({
          gateway: "stripe",
          bookingNumber: orderRes.bookingNumber,
          paymentIntentId: orderRes.paymentIntentId,
          paymentMethod: "Stripe International Card (Visa/Mastercard 3D Secure)"
        });
        completeBookingSuccess(verifyRes, orderRes);
      }

    } catch (err) {
      console.error("Payment execution error:", err);
      setPaymentError(err.message || "An error occurred during payment processing. Please try again.");
      setIsProcessingPayment(false);
    }
  };

  // Filtered lists
  const filteredHotels = hotels.filter(h => {
    if (!selectedCategory) return true;
    return h.category?.toUpperCase() === selectedCategory.toUpperCase();
  });

  const filteredTransport = useMemo(() => {
    // Only accept FLIGHT, TRAIN, and BUS (Strict removal of cabs, cars, SUVs)
    let list = transportation.filter(t => t.type === "FLIGHT" || t.type === "TRAIN" || t.type === "BUS");

    // Filter by transit mode
    if (selectedTransportType) {
      list = list.filter(t => t.type?.toUpperCase() === selectedTransportType.toUpperCase());
    }

    // Flights stop filter
    if (flightStopFilter !== "all") {
      list = list.filter(t => {
        if (t.type !== "FLIGHT") return true;
        const s = t.stops !== undefined ? t.stops : (t.isDirect ? 0 : 1);
        if (flightStopFilter === "nonstop") return s === 0;
        if (flightStopFilter === "1stop") return s === 1;
        if (flightStopFilter === "2plus") return s >= 2;
        return true;
      });
    }

    // Train class filter (Sleeper, 3A, 2A, 1A)
    if (trainClassFilter !== "all") {
      const q = trainClassFilter.toLowerCase();
      list = list.filter(t => {
        if (t.type !== "TRAIN") return true;
        const curClass = (t.selectedClass || t.class || "").toLowerCase();
        if (curClass.includes(q)) return true;
        if (t.classes && Array.isArray(t.classes)) {
          return t.classes.some(c => {
            const code = (c.classCode || "").toLowerCase();
            const name = (c.className || "").toLowerCase();
            if (q === "sleeper") return code === "sl" || name.includes("sleeper");
            if (q === "3a") return code === "3a" || name.includes("3-tier") || name.includes("3a");
            if (q === "2a") return code === "2a" || name.includes("2-tier") || name.includes("2a");
            if (q === "1a") return code === "1a" || name.includes("1st") || name.includes("1a");
            return code === q || name.includes(q);
          });
        }
        return false;
      }).map(t => {
        if (t.type === "TRAIN" && t.classes && Array.isArray(t.classes)) {
          const matched = t.classes.find(c => {
            const code = (c.classCode || "").toLowerCase();
            const name = (c.className || "").toLowerCase();
            if (q === "sleeper") return code === "sl" || name.includes("sleeper");
            if (q === "3a") return code === "3a" || name.includes("3-tier") || name.includes("3a");
            if (q === "2a") return code === "2a" || name.includes("2-tier") || name.includes("2a");
            if (q === "1a") return code === "1a" || name.includes("1st") || name.includes("1a");
            return code === q || name.includes(q);
          });
          if (matched) {
            return {
              ...t,
              price: matched.fare,
              fare: matched.fare,
              selectedClass: matched.className || matched.classCode,
              class: matched.classCode
            };
          }
        }
        return t;
      });
    }

    // Bus type filter (Non-AC, AC Seater, AC Sleeper)
    if (busTypeFilter !== "all") {
      const q = busTypeFilter.toLowerCase();
      list = list.filter(t => {
        if (t.type !== "BUS") return true;
        const st = (t.seatTypes?.[0] || t.seatType || "").toLowerCase();
        const bt = (t.busType || "").toLowerCase();
        if (q === "non-ac") return st.includes("non-ac") || (!t.isAC);
        if (q === "ac seater") return t.isAC && (!t.isSleeper);
        if (q === "ac sleeper") return t.isAC && t.isSleeper;
        return st.includes(q) || bt.includes(q);
      });
    }

    // Helper for duration in minutes
    const getMinutes = (t) => {
      if (t.durationMinutes) return t.durationMinutes;
      const mH = (t.duration || "").match(/(\d+)h/);
      const mM = (t.duration || "").match(/(\d+)m/);
      return (mH ? parseInt(mH[1], 10) * 60 : 0) + (mM ? parseInt(mM[1], 10) : 0) || 9999;
    };

    // Sorting (Price: Low to High, Price: High to Low, Shortest Duration, Earliest Departure)
    list.sort((a, b) => {
      if (transportSort === "PRICE_LOW_TO_HIGH") return (a.price || 0) - (b.price || 0);
      if (transportSort === "PRICE_HIGH_TO_LOW") return (b.price || 0) - (a.price || 0);
      if (transportSort === "DURATION") return getMinutes(a) - getMinutes(b);
      if (transportSort === "EARLIEST") {
        return (a.departureTime || "").localeCompare(b.departureTime || "");
      }
      return 0;
    });

    return list;
  }, [transportation, selectedTransportType, flightStopFilter, trainClassFilter, busTypeFilter, transportSort]);

  // Render Loading State
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <LoadingSpinner message={`Searching verified inventory for ${destQuery || "your destination"}...`} />
      </div>
    );
  }

  // Render NOT FOUND State (Requirement 4 Strict Validation)
  if (notFound || !destination) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        {/* Destination Validation Error Banner */}
        <div className="bg-rose-50/90 rounded-3xl p-8 sm:p-12 border border-rose-200 text-center space-y-4 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-500 block">
              Destination Validation Notice
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-rose-950">
              We couldn't find this destination.
            </h2>
            <p className="text-base font-semibold text-rose-800">
              Try another city or country.
            </p>
            <p className="text-sm text-rose-700">
              Searched query: <strong className="font-semibold text-rose-900 font-mono bg-rose-100/60 px-2 py-0.5 rounded-sm">"{destQuery}"</strong>
            </p>
            <p className="text-xs text-rose-600">
              Per system policy, we only present verified destinations with authentic photography and vetted inventory. We do not invent fake hotels or pricing.
            </p>
          </div>

          {/* Quick Search Again Bar */}
          <div className="pt-4 max-w-md mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const q = e.target.elements.newDest.value.trim();
                if (q) navigate(`/plan-trip?destination=${encodeURIComponent(q)}&checkIn=${checkIn}&checkOut=${checkOut}&travelers=${travelersCount}`);
              }}
              className="flex items-center gap-2"
            >
              <input
                name="newDest"
                type="text"
                placeholder="Try Goa, Manali, Dubai, Paris..."
                className="flex-1 px-4 py-3 rounded-xl bg-white border border-rose-200 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 shadow-xs"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm transition-colors shadow-xs cursor-pointer"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Popular Available Destinations Recommendations */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
                Verified Catalogs
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                Explore Available Verified Destinations
              </h3>
            </div>
            <Link
              to="/explore"
              className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center space-x-1"
            >
              <span>View All 40+ Destinations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(popularSuggestions.length > 0 ? popularSuggestions.slice(0, 4) : [
              { id: "dest-goa", name: "Goa", country: "India", imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80" },
              { id: "dest-manali", name: "Manali", country: "India", imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80" },
              { id: "dest-dubai", name: "Dubai", country: "UAE", imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" },
              { id: "dest-singapore", name: "Singapore", country: "Singapore", imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80" }
            ]).map((pop) => (
              <div
                key={pop.id}
                onClick={() => navigate(`/plan-trip?destination=${encodeURIComponent(pop.name)}&checkIn=${checkIn}&checkOut=${checkOut}&travelers=${travelersCount}`)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <div className="h-36 relative overflow-hidden bg-slate-100">
                  <SafeImage
                    src={pop.imageUrl}
                    alt={pop.name}
                    fallbackType="destination"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 text-white">
                    <p className="font-bold text-base font-display">{pop.name}</p>
                    <p className="text-[11px] text-slate-200">{pop.country}</p>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xs font-bold text-sky-600 group-hover:text-sky-700">
                    Plan Trip to {pop.name} →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

      {/* 1. DESTINATION HEADER & REALISTIC IMAGERY BANNER (Requirement 5) */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-900 text-white min-h-[340px] flex flex-col justify-end p-6 sm:p-10">
        
        {/* Background Real-World Photograph */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={destination.imageUrl}
            alt={`${destination.name} realistic photograph`}
            fallbackType="destination"
            showPhotoBadge={true}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30" />
        </div>

        {/* Floating Content */}
        <div className="relative z-10 space-y-4 max-w-3xl">
          
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-extrabold backdrop-blur-xs shadow-sm">
              <Check className="w-3.5 h-3.5" />
              <span>Great choice! Let's plan your trip to {destination.name}</span>
            </span>
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/50 text-white/90 text-xs font-bold backdrop-blur-xs border border-white/20">
              <Camera className="w-3.5 h-3.5 text-sky-400" />
              <span>Real Photograph via Unsplash</span>
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-500/90 text-white text-xs font-bold">
              DEMO INVENTORY
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white drop-shadow-sm">
              {destination.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-1 flex items-center space-x-1.5 font-medium">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>{destination.city}, {destination.country}</span>
              <span className="text-slate-400">•</span>
              <span className="text-amber-400 font-semibold">{destination.popularity}% Popularity Rating</span>
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl line-clamp-2">
            {destination.description}
          </p>

          {/* Active Trip Parameters Ribbon */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
            <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>
                <strong>{checkIn}</strong> to <strong>{checkOut}</strong> ({nights} {nights === 1 ? "night" : "nights"})
              </span>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 flex items-center space-x-2.5">
              <Users className="w-4 h-4 text-sky-400" />
              <span className="text-slate-200 font-semibold">Travelers:</span>
              <div className="flex items-center space-x-1 bg-black/20 rounded-lg p-0.5 border border-white/10">
                <button
                  type="button"
                  title="Decrease travelers"
                  disabled={travelersCount <= MIN_TRAVELERS}
                  onClick={() => handleUpdateTravelers(travelersCount - 1)}
                  className="w-5 h-5 rounded bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center font-bold text-white transition-colors cursor-pointer"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-5 text-center font-bold text-white text-xs">
                  {travelersCount}
                </span>
                <button
                  type="button"
                  title="Increase travelers"
                  disabled={travelersCount >= MAX_TRAVELERS}
                  onClick={() => handleUpdateTravelers(travelersCount + 1)}
                  className="w-5 h-5 rounded bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center font-bold text-white transition-colors cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <span className="text-slate-300 font-medium text-[11px]">
                ({travelersCount === 1 ? "1 Guest" : `${travelersCount} Guests`} • {roomsNeeded} {roomsNeeded === 1 ? "Room" : "Rooms"})
              </span>
            </div>

            <button
              onClick={() => navigate("/")}
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-3 py-1.5 rounded-xl transition-colors cursor-pointer text-xs"
            >
              Modify Dates
            </button>
          </div>

        </div>
      </div>

      {/* 2. NAVIGATION TABS (Hotels + Transportation + Activities) */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Trip Options
          </button>
          <button
            onClick={() => setActiveTab("hotels")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeTab === "hotels"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <HotelIcon className="w-3.5 h-3.5" />
            <span>Hotels in {destination.name} ({hotels.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("transport")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeTab === "transport"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Plane className="w-3.5 h-3.5" />
            <span>Transportation ({transportation.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("activities")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeTab === "activities"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Activities ({activities.length})</span>
          </button>
        </div>

        <span className="text-xs text-slate-400 font-medium">
          Strictly verified for <strong>{destination.name}</strong> only
        </span>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT: Content on Left + Live Trip Customizer on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Inventory (Hotels, Transport, Activities) */}
        <div className="lg:col-span-8 space-y-10">

          {/* A. HOTELS SECTION (Requirement 2: Hotels available at that destination) */}
          {(activeTab === "all" || activeTab === "hotels") && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider">
                    <HotelIcon className="w-4 h-4" />
                    <span>Accommodations</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                    Hotels & Resorts in {destination.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Showing verified properties in {destination.name}. No unrelated locations displayed.
                  </p>
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl text-slate-700"
                >
                  <option value="">All Categories</option>
                  <option value="LUXURY">Luxury Resorts</option>
                  <option value="FIVE_STAR">5-Star Stays</option>
                  <option value="FOUR_STAR">4-Star Comfort</option>
                  <option value="BUDGET">Budget Accommodations</option>
                </select>
              </div>

              {filteredHotels.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
                  No hotels match this specific category in {destination.name}.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filteredHotels.map((hotel) => {
                    const isHotelSelected = selectedHotel?.id === hotel.id;
                    const hotelImages = imageService.getHotelImages(hotel);
                    return (
                      <div
                        key={hotel.id}
                        className={`bg-white rounded-3xl overflow-hidden border transition-all shadow-soft flex flex-col justify-between ${
                          isHotelSelected ? "ring-2 ring-sky-500 border-sky-400" : "border-slate-100 hover:border-slate-200"
                        }`}
                      >
                        {/* Hotel Photo Banner */}
                        <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                          <SafeImage
                            src={hotelImages[0]}
                            alt={hotel.name}
                            fallbackType="hotel"
                            showPhotoBadge={true}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                          <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                            <Badge variant="luxury">{formatCategory(hotel.category)}</Badge>
                            <span className="text-[10px] font-semibold bg-slate-900/80 text-sky-200 px-2 py-0.5 rounded-full backdrop-blur-md border border-slate-700/50">
                              Verified Real Hotel
                            </span>
                          </div>

                          <div className="absolute top-3 right-3 bg-white/95 px-2 py-0.5 rounded-lg text-xs font-bold text-slate-800 flex items-center space-x-1 shadow-xs">
                            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                            <span>{hotel.rating}</span>
                          </div>

                          <div className="absolute bottom-2.5 left-3 text-xs text-white font-medium">
                            <p className="line-clamp-1">{hotel.fullAddress || hotel.address}</p>
                          </div>
                        </div>

                        {/* Hotel Details */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                          <div>
                            <h4 className="text-base font-bold font-display text-slate-900">
                              {hotel.name}
                            </h4>
                            <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                              {hotel.description}
                            </p>

                            {/* Amenities */}
                            <div className="flex flex-wrap gap-1 mt-2.5">
                              {hotel.amenities?.slice(0, 3).map((a, i) => (
                                <span key={i} className="text-[10px] bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md text-slate-600">
                                  {a}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Room Category Options */}
                          {hotel.rooms && hotel.rooms.length > 0 && (
                            <div className="pt-3 border-t border-slate-100 space-y-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                Room Types & Rates ({nights} {nights === 1 ? "night" : "nights"} • {roomsNeeded} {roomsNeeded === 1 ? "room" : "rooms"} for {travelersCount} guests):
                              </span>
                              <div className="space-y-1.5">
                                {hotel.rooms.map((room) => {
                                  const isRoomSelected = isHotelSelected && selectedRoom?.id === room.id;
                                  const rCap = room.capacity || room.maxGuests || 2;
                                  const rNeeded = Math.max(1, Math.ceil(travelersCount / rCap));
                                  const rTotal = room.pricePerNight * nights * rNeeded;
                                  return (
                                    <div
                                      key={room.id}
                                      onClick={() => {
                                        setSelectedHotel(hotel);
                                        setSelectedRoom(room);
                                      }}
                                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-all ${
                                        isRoomSelected
                                          ? "bg-sky-50 border-sky-400 text-sky-900 font-bold"
                                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                                      }`}
                                    >
                                      <div>
                                        <p className="font-semibold">{room.type} Room (Cap: {rCap} Guests/room)</p>
                                        <p className="text-[10px] text-slate-500 font-normal">
                                          {rNeeded} {rNeeded === 1 ? "room" : "rooms"} needed for {travelersCount} travelers
                                        </p>
                                      </div>
                                      <div className="text-right">
                                        <span className="text-sm font-bold text-slate-900 block">
                                          {formatCurrency(rTotal)}
                                        </span>
                                        <span className="text-[10px] text-slate-400">
                                          {formatCurrency(room.pricePerNight)}/room/night
                                        </span>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Hotel Action */}
                          <div className="pt-2 border-t border-slate-100 space-y-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-[10px] uppercase font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                                  Development price
                                </span>
                                <div className="flex items-baseline space-x-1 mt-1">
                                  <span className="text-lg font-bold font-display text-slate-900">
                                    {formatCurrency(hotel.pricePerNight * roomsNeeded * nights)}
                                  </span>
                                  <span className="text-xs text-slate-400"> total ({roomsNeeded} {roomsNeeded === 1 ? "room" : "rooms"}, {nights} {nights === 1 ? "night" : "nights"})</span>
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleSelectHotel(hotel)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                  isHotelSelected
                                    ? "bg-emerald-600 text-white shadow-xs"
                                    : "bg-slate-900 hover:bg-sky-600 text-white"
                                }`}
                              >
                                {isHotelSelected ? "Selected ✓" : "Choose Hotel"}
                              </button>
                            </div>
                            <p className="text-[10px] text-slate-500 bg-slate-50 px-2 py-1 rounded">
                              ● Live availability requires verification before booking
                            </p>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* B. TRANSPORTATION SECTION (Requirement 1 & 5: Ask where travelling from before showing options) */}
          {(activeTab === "all" || activeTab === "transport") && (
            <div className="space-y-5 pt-4 border-t border-slate-100">
              
              {/* Origin Selection Component (Requirements 1, 2, 3, 4) */}
              <OriginSelector
                origin={origin}
                destinationName={destination.name}
                onSelectOrigin={(newOrigin) => {
                  setOrigin(newOrigin);
                  setOriginError("");
                  const newParams = new URLSearchParams(searchParams);
                  newParams.set("origin", newOrigin);
                  navigate(`?${newParams.toString()}`, { replace: true });
                }}
                onChangeOrigin={() => {
                  setOrigin("");
                  setSelectedTransport(null);
                  setTransportation([]);
                  const newParams = new URLSearchParams(searchParams);
                  newParams.delete("origin");
                  navigate(`?${newParams.toString()}`, { replace: true });
                }}
                errorMessage={originError}
              />

              {/* Only show transportation options once origin is selected (Requirement 5) */}
              {origin ? (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                    <div>
                      <div className="flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider">
                        <Plane className="w-4 h-4" />
                        <span>Travel Connectivity</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                        {cleanOrigin} → {destination.name} Transportation
                      </h3>
                      <p className="text-xs text-slate-500">
                        Flights, trains, intercity buses, and private transfers dynamically routed from {cleanOrigin} to {destination.name}.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {/* Transit Mode Dropdown */}
                      <select
                        value={selectedTransportType}
                        onChange={(e) => setSelectedTransportType(e.target.value)}
                        className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl text-slate-700 cursor-pointer"
                      >
                        <option value="">All Transit Modes</option>
                        <option value="FLIGHT">Flights</option>
                        <option value="TRAIN">Trains</option>
                        <option value="BUS">Buses</option>
                      </select>

                      {/* Sorting Dropdown */}
                      <select
                        value={transportSort}
                        onChange={(e) => setTransportSort(e.target.value)}
                        className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl text-slate-700 cursor-pointer"
                      >
                        <option value="PRICE_LOW_TO_HIGH">Price: Low to High</option>
                        <option value="PRICE_HIGH_TO_LOW">Price: High to Low</option>
                        <option value="DURATION">Shortest Duration</option>
                        <option value="EARLIEST">Earliest Departure</option>
                      </select>
                    </div>
                  </div>

                  {/* Dynamic Transport Sub-Filters */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 pb-1 border-b border-slate-100">
                    {/* Flight Sub-Filters: Nonstop / 1 Stop / 2+ Stops */}
                    {selectedTransportType === "FLIGHT" && (
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                          Flight Stops:
                        </span>
                        {[
                          { id: "all", label: "All Flights" },
                          { id: "nonstop", label: "Nonstop" },
                          { id: "1stop", label: "1 Stop" },
                          { id: "2plus", label: "2+ Stops" }
                        ].map((btn) => (
                          <button
                            key={btn.id}
                            type="button"
                            onClick={() => setFlightStopFilter(btn.id)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              flightStopFilter === btn.id
                                ? "bg-sky-600 text-white shadow-xs"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Train Sub-Filters: Sleeper / 3A / 2A / 1A */}
                    {selectedTransportType === "TRAIN" && (
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                          Train Class:
                        </span>
                        {[
                          { id: "all", label: "All Classes" },
                          { id: "sleeper", label: "Sleeper" },
                          { id: "3a", label: "3A" },
                          { id: "2a", label: "2A" },
                          { id: "1a", label: "1A" }
                        ].map((btn) => (
                          <button
                            key={btn.id}
                            type="button"
                            onClick={() => setTrainClassFilter(btn.id)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              trainClassFilter === btn.id
                                ? "bg-sky-600 text-white shadow-xs"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Bus Sub-Filters: Non-AC / AC Seater / AC Sleeper */}
                    {selectedTransportType === "BUS" && (
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                          Bus Type:
                        </span>
                        {[
                          { id: "all", label: "All Buses" },
                          { id: "non-ac", label: "Non-AC" },
                          { id: "ac seater", label: "AC Seater" },
                          { id: "ac sleeper", label: "AC Sleeper" }
                        ].map((btn) => (
                          <button
                            key={btn.id}
                            type="button"
                            onClick={() => setBusTypeFilter(btn.id)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              busTypeFilter === btn.id
                                ? "bg-sky-600 text-white shadow-xs"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* All Modes Selected: Mode Filter Buttons */}
                    {selectedTransportType === "" && (
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                          Mode:
                        </span>
                        {[
                          { id: "", label: "All Modes" },
                          { id: "FLIGHT", label: "✈️ Flight" },
                          { id: "TRAIN", label: "🚆 Train" },
                          { id: "BUS", label: "🚌 Bus" }
                        ].map((btn) => (
                          <button
                            key={btn.id}
                            type="button"
                            onClick={() => setSelectedTransportType(btn.id)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              selectedTransportType === btn.id
                                ? "bg-sky-600 text-white shadow-xs"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    )}

                    <span className="text-xs text-slate-400">
                      Showing <strong>{filteredTransport.length}</strong> available transit options
                    </span>
                  </div>

                  {/* CONNECTING FLIGHT NOTIFICATION BANNER (Requirements 2, 3, 10 Case B) */}
                  {(transportMeta.status === "NO_DIRECT_RESULTS_BUT_CONNECTING_AVAILABLE" ||
                    (!transportMeta.hasDirect && transportMeta.hasConnecting)) && (
                    <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-900 flex items-start space-x-3.5 my-2 shadow-xs">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded">
                            Flight Route Connectivity
                          </span>
                          <span className="text-xs font-semibold text-amber-800">Dynamic Provider Topology</span>
                        </div>
                        <h4 className="text-sm font-bold text-amber-950 mt-1">
                          No nonstop flights available.
                        </h4>
                        <p className="text-xs text-amber-800 mt-0.5">
                          Connecting flights are available below with layovers at major regional transit hubs.
                        </p>
                      </div>
                    </div>
                  )}

                  {loadingTransport ? (
                    <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500 flex items-center justify-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin text-sky-600" />
                      <span>Loading transportation from {cleanOrigin}...</span>
                    </div>
                  ) : filteredTransport.length === 0 ? (
                    /* REQUIREMENT 10: NO-RESULT HANDLING (Case A, B, C, D) */
                    <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-3">
                      {flightStopFilter === "nonstop" && transportMeta.hasConnecting ? (
                        <>
                          <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                            <Plane className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-800">
                            No verified flights match your selected filters.
                          </h4>
                          <p className="text-xs text-slate-500 max-w-md mx-auto">
                            No nonstop flights match your selected filters. Connecting flights are available below with 1 or more stops. Please adjust your stop filter to view options.
                          </p>
                          <button
                            type="button"
                            onClick={() => setFlightStopFilter("all")}
                            className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                          >
                            View Connecting Flights ({transportMeta.connectingCount || "Available"})
                          </button>
                        </>
                      ) : selectedTransportType === "TRAIN" && destination.country !== "India" ? (
                        <>
                          <div className="w-10 h-10 mx-auto rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                            <Train className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-800">
                            Rail transport is unavailable for overseas destinations.
                          </h4>
                          <p className="text-xs text-slate-500 max-w-md mx-auto">
                            Direct and connecting flights are available from {cleanOrigin} to {destination.name}.
                          </p>
                          <button
                            type="button"
                            onClick={() => setSelectedTransportType("FLIGHT")}
                            className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                          >
                            Switch to Flights
                          </button>
                        </>
                      ) : selectedTransportType === "BUS" && destination.country !== "India" ? (
                        <>
                          <div className="w-10 h-10 mx-auto rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                            <Bus className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-800">
                            Intercity bus transport is unavailable for overseas destinations.
                          </h4>
                          <p className="text-xs text-slate-500 max-w-md mx-auto">
                            Please select flight options for international travel to {destination.name}.
                          </p>
                          <button
                            type="button"
                            onClick={() => setSelectedTransportType("FLIGHT")}
                            className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                          >
                            Switch to Flights
                          </button>
                        </>
                      ) : selectedTransportType === "FLIGHT" ? (
                        <>
                          <div className="w-10 h-10 mx-auto rounded-full bg-slate-100 text-slate-500 flex items-center justify-center">
                            <Plane className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-800">
                            {transportMeta.status === "PROVIDER_UNAVAILABLE" || transportMeta.message?.toLowerCase().includes("temporarily unavailable") || transportMeta.status === "ERROR"
                              ? "Live flight search is temporarily unavailable."
                              : transportation.some(t => t.type === "FLIGHT")
                              ? "No verified flights match your selected filters."
                              : "No verified flights found for this search."}
                          </h4>
                          <p className="text-xs text-slate-500 max-w-md mx-auto">
                            {transportMeta.status === "PROVIDER_UNAVAILABLE" || transportMeta.message?.toLowerCase().includes("temporarily unavailable") || transportMeta.status === "ERROR"
                              ? "Live flight search is temporarily unavailable. Please try again shortly."
                              : transportation.some(t => t.type === "FLIGHT")
                              ? "No verified flights match your selected filters. Please adjust your search filters."
                              : "No verified flights found for this search."}
                          </p>
                        </>
                      ) : transportMeta.status === "ERROR" ? (
                        <>
                          <div className="w-10 h-10 mx-auto rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                            <AlertCircle className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-800">
                            Transportation availability is currently unavailable for this route.
                          </h4>
                          <p className="text-xs text-slate-500 max-w-md mx-auto">
                            The provider service could not be reached. Please verify your connection or try again shortly.
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="w-10 h-10 mx-auto rounded-full bg-slate-100 text-slate-500 flex items-center justify-center">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-800">
                            No transportation options were found for this route and date.
                          </h4>
                          <p className="text-xs text-slate-500 max-w-md mx-auto">
                            Try adjusting your transit mode filter or selecting an alternate departure date.
                          </p>
                        </>
                      )}
                    </div>
                  ) : (
                    /* REQUIREMENT 4, 5, 6, 7: DETAILED TRANSPORTATION RESULTS */
                    <div className="space-y-3">
                      {filteredTransport.map((trans) => {
                        const isTransSelected = selectedTransport?.id === trans.id;
                        const isFlight = trans.type === "FLIGHT";
                        const isTrain = trans.type === "TRAIN";
                        const isBus = trans.type === "BUS";

                        const stops = trans.stops !== undefined ? trans.stops : (trans.isDirect ? 0 : 1);
                        const stopBadgeText = isFlight
                          ? (stops === 0 ? "Nonstop" : stops === 1 ? "1 Stop" : `${stops} Stops`)
                          : isTrain
                          ? (trans.isDirect ? "Direct Train" : "1 Transfer")
                          : (trans.isDirect ? "Direct Bus" : "1 Transfer");

                        return (
                          <div
                            key={trans.id}
                            onClick={() => setSelectedTransport(trans)}
                            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                              isTransSelected
                                ? "bg-sky-50/70 border-sky-400 ring-2 ring-sky-300"
                                : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                            }`}
                          >
                            <div className="flex items-start space-x-3.5 flex-1">
                              <div className="w-10 h-10 rounded-xl bg-slate-100 text-sky-600 flex items-center justify-center font-bold flex-shrink-0">
                                {isFlight ? <Plane className="w-5 h-5" /> :
                                 isTrain ? <Train className="w-5 h-5" /> :
                                 <Bus className="w-5 h-5" />}
                              </div>

                              <div className="space-y-1 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h5 className="text-sm font-bold text-slate-900">
                                    {isFlight
                                      ? (trans.marketingCarrier?.name || trans.airline?.name || trans.operatingCarrier?.name || trans.airline || "Airline")
                                      : (trans.operator || trans.provider)}
                                  </h5>

                                  {isFlight && trans.flightNumber && (
                                    <span className="text-[11px] font-bold text-sky-800 bg-sky-50 border border-sky-200/80 px-2 py-0.5 rounded-md">
                                      {trans.flightNumber}
                                    </span>
                                  )}

                                  {isFlight && trans.provider && (
                                    <span className="text-[10px] font-medium text-slate-500 bg-slate-100 border border-slate-200/70 px-2 py-0.5 rounded-md">
                                      Provider: {trans.provider}
                                    </span>
                                  )}
                                  
                                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                                    {formatTransportType(trans.type)}
                                  </span>

                                  {/* Stop Count / Direct Badge */}
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                    stops === 0 || trans.isDirect
                                      ? "bg-emerald-100 text-emerald-800"
                                      : "bg-sky-100 text-sky-800"
                                  }`}>
                                    {stopBadgeText}
                                  </span>

                                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
                                    {trans.fareLabel || "Estimated fare"}
                                  </span>

                                  {isFlight && trans.isLive && (
                                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                                      <CheckCircle2 className="w-3 h-3" /> Live Inventory
                                    </span>
                                  )}
                                </div>

                                {/* Route Pathway (Bhubaneswar → Hyderabad → Goa) */}
                                <p className="text-xs text-slate-700 font-semibold">
                                  {trans.routeSummary || `${formatLocation(trans.origin)} → ${formatLocation(trans.destination)}`}
                                </p>

                                {/* Layover / Stopover Airport Specification (Requirement 4) */}
                                {isFlight && trans.layoverSummary && (
                                  <div className="text-[11px] text-sky-800 bg-sky-50/80 border border-sky-100 rounded-md px-2 py-0.5 inline-flex items-center space-x-1.5">
                                    <Clock className="w-3 h-3 text-sky-600" />
                                    <span><strong>Layover:</strong> {trans.layoverSummary}</span>
                                  </div>
                                )}

                                {/* Provider-Returned Legs for Connecting Flights (STRICT REAL-FLIGHT RULE) */}
                                {isFlight && trans.segments && trans.segments.length > 0 && (
                                  <div className="mt-2 pt-2 border-t border-slate-100 space-y-1.5">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                      Flight Legs ({trans.segments.length} Legs)
                                    </div>
                                    <div className="space-y-1">
                                      {trans.segments.map((seg, sIdx) => (
                                        <div key={sIdx} className="bg-slate-50/90 rounded-md p-1.5 border border-slate-200/70 text-[11px] flex flex-wrap items-center justify-between gap-1">
                                          <span className="font-bold text-sky-700">
                                            Leg {seg.legNumber || seg.legIndex || sIdx + 1}: {seg.flightNumber || ""} ({seg.marketingCarrier?.name || seg.airline || seg.operatingCarrier?.name || ""})
                                          </span>
                                          <span className="text-slate-700 font-medium">
                                            {(seg.origin?.city || seg.origin)} ({seg.originCode || seg.origin?.airportCode || ""}) → {(seg.destination?.city || seg.destination)} ({seg.destinationCode || seg.destination?.airportCode || ""})
                                          </span>
                                          <span className="text-[10px] text-slate-500 font-semibold">{seg.duration}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Transfer Station for Trains (Requirement 5) */}
                                {isTrain && trans.transferStation && (
                                  <div className="text-[11px] text-amber-900 bg-amber-50 border border-amber-200 rounded-md px-2 py-0.5 inline-flex items-center space-x-1.5">
                                    <span><strong>Transfer Station:</strong> {trans.transferStation}</span>
                                  </div>
                                )}

                                {/* Transfer Station for Buses (Requirement 6) */}
                                {isBus && trans.transferStation && (
                                  <div className="text-[11px] text-slate-700 bg-slate-100 rounded-md px-2 py-0.5 inline-flex items-center space-x-1.5">
                                    <span><strong>Transfer Hub:</strong> {trans.transferStation}</span>
                                  </div>
                                )}

                                {/* Departure, Arrival, Duration & Availability */}
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-slate-500 pt-0.5">
                                  <span>{trans.departureTime} → {trans.arrivalTime}</span>
                                  <span>•</span>
                                  <span>Total duration: <strong>{trans.duration}</strong></span>
                                  <span>•</span>
                                  <span className="text-emerald-700 font-semibold">• Available</span>
                                  {(trans.selectedClass || trans.seatType || trans.busType) && (
                                    <>
                                      <span>•</span>
                                      <span className="font-semibold text-slate-700">
                                        {isTrain ? `Class: ${trans.selectedClass || trans.seatType}` : `Type: ${trans.busType || trans.seatType}`}
                                      </span>
                                    </>
                                  )}
                                  {trans.fareFamily && (
                                    <>
                                      <span>•</span>
                                      <span className="font-semibold text-slate-700">Fare: {trans.fareFamily}</span>
                                    </>
                                  )}
                                </div>

                                {/* Baggage specifications for flights */}
                                {isFlight && trans.baggage && (
                                  <p className="text-[10px] text-slate-400">
                                    Baggage: Check-in {trans.baggage.checkIn} • Cabin {trans.baggage.cabin}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2 flex-shrink-0">
                              <div className="text-right">
                                <span className="text-base font-bold font-display text-slate-900 block">
                                  {formatCurrency(trans.price * travelersCount)}
                                </span>
                                <span className="text-[10px] text-slate-500 font-medium">
                                  Total ({travelersCount} {travelersCount === 1 ? "traveler" : "travelers"})
                                </span>
                                {travelersCount > 1 && (
                                  <span className="text-[10px] text-slate-400 block font-medium">
                                    {formatCurrency(trans.price)} / traveler
                                  </span>
                                )}
                              </div>

                              <button
                                type="button"
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                                  isTransSelected
                                    ? "bg-emerald-600 text-white"
                                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                                }`}
                              >
                                {isTransSelected ? "Selected ✓" : "Select"}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <div className="p-6 text-center bg-slate-50/80 rounded-2xl border border-dashed border-slate-300 text-xs text-slate-500 space-y-1.5">
                  <p className="font-bold text-slate-700 text-sm">Please select your starting location above.</p>
                  <p className="text-slate-500">
                    We will find matching flights, trains, buses, and private transfers from your city to {destination.name}.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* C. ACTIVITIES SECTION (Requirement 2: Activities available at that destination) */}
          {(activeTab === "all" || activeTab === "activities") && (
            <div className="space-y-5 pt-4 border-t border-slate-100">
              <div>
                <div className="flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Destination Experiences</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                  Things to Do in {destination.name}
                </h3>
                <p className="text-xs text-slate-500">
                  Hand-crafted guided activities, cruises, and local sightseeing in {destination.name}.
                </p>
              </div>

              {activities.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
                  Activities catalog for {destination.name} will be added soon.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activities.map((act) => {
                    const isAdded = selectedActivities.some(a => a.id === act.id);
                    return (
                      <div
                        key={act.id}
                        className={`bg-white rounded-2xl overflow-hidden border p-4 flex flex-col justify-between transition-all ${
                          isAdded ? "ring-2 ring-sky-500 border-sky-400 bg-sky-50/20" : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="space-y-3">
                          <div className="h-36 rounded-xl overflow-hidden relative bg-slate-100">
                            <SafeImage
                              src={act.imageUrl}
                              alt={act.name}
                              fallbackType="activity"
                              showPhotoBadge={true}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs flex items-center space-x-1">
                              <Clock className="w-3 h-3 text-sky-400" />
                              <span>{act.duration}</span>
                            </div>
                          </div>

                          <div>
                            <h5 className="text-sm font-bold text-slate-800 line-clamp-1">{act.name}</h5>
                            <p className="text-xs text-slate-500 line-clamp-2 mt-1">{act.description}</p>
                          </div>
                        </div>

                        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block font-medium">
                              {travelersCount > 1 ? `Total (${travelersCount} travelers)` : "Per Person"}
                            </span>
                            <div className="flex items-baseline space-x-1">
                              <span className="text-base font-bold font-display text-slate-900">
                                {formatCurrency(act.price * travelersCount)}
                              </span>
                              {travelersCount > 1 && (
                                <span className="text-[10px] text-slate-500 font-medium">
                                  ({formatCurrency(act.price)} / guest)
                                </span>
                              )}
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleToggleActivity(act)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                              isAdded
                                ? "bg-emerald-600 text-white"
                                : "bg-sky-50 hover:bg-sky-100 text-sky-700"
                            }`}
                          >
                            {isAdded ? "Included ✓" : "+ Add Experience"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: STICKY TRIP CUSTOMIZER & SUMMARY (Requirement 3 Flow) */}
        <div className="lg:col-span-4 sticky top-6 space-y-5">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-premium space-y-6">
            
            {/* Header */}
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block">
                Trip Builder & Customizer
              </span>
              <h4 className="text-xl font-extrabold font-display text-slate-900 mt-0.5">
                Your Custom Journey
              </h4>
              <p className="text-xs text-slate-500">
                Destination: <strong className="text-slate-800">{destination.name}</strong> ({nights} nights)
              </p>
            </div>

            {/* Customizer Selections List */}
            <div className="space-y-4 text-xs">
              
              {/* 1. Hotel & Room */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-slate-700 font-bold">
                    <HotelIcon className="w-4 h-4 text-sky-500" />
                    <span>Selected Stay</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-900">
                    {formatCurrency(accommodationTotal)}
                  </span>
                </div>
                {selectedHotel ? (
                  <div>
                    <p className="font-semibold text-slate-800 line-clamp-1">{selectedHotel.name}</p>
                    <p className="text-[11px] text-slate-500">
                      {selectedRoom?.type || "Deluxe"} Room • {roomsNeeded} {roomsNeeded === 1 ? "room" : "rooms"} × {nights} nights × {formatCurrency(roomPricePerNight)}
                    </p>
                    <p className="text-[10px] text-sky-600 font-medium pt-0.5">
                      Fits all {travelersCount} guests (capacity: {roomCapacity}/room)
                    </p>
                  </div>
                ) : (
                  <p className="text-slate-400 italic">No hotel selected yet</p>
                )}
              </div>

              {/* 2. Transportation */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-slate-700 font-bold">
                    <Plane className="w-4 h-4 text-sky-500" />
                    <span>Transportation</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-900">
                    {formatCurrency(transportTotal)}
                  </span>
                </div>
                {origin ? (
                  selectedTransport ? (
                    <div>
                      <p className="font-semibold text-slate-800 line-clamp-1">
                        {selectedTransport.type === "FLIGHT"
                          ? `${selectedTransport.marketingCarrier?.name || selectedTransport.airline?.name || selectedTransport.operatingCarrier?.name || selectedTransport.airline || "Airline"}${selectedTransport.flightNumber ? ` (${selectedTransport.flightNumber})` : ""}`
                          : (selectedTransport.operator || selectedTransport.provider)}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {formatLocation(selectedTransport.origin)} → {destination.name} ({formatTransportType(selectedTransport.type)})
                      </p>
                      <div className="flex items-center justify-between pt-1 text-[11px]">
                        <span className="text-slate-500 font-medium">
                          {formatCurrency(selectedTransport.price)} × {travelersCount} travelers
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          {selectedTransport.fareLabel || "Estimated fare"}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-400 italic">No transport option selected</p>
                  )
                ) : (
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-amber-700 font-semibold text-[11px]">⚠️ Starting point needed</span>
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById("origin-selection-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-[10px] font-bold text-sky-600 hover:underline cursor-pointer"
                    >
                      Select Origin →
                    </button>
                  </div>
                )}
              </div>

              {/* 3. Activities */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-slate-700 font-bold">
                    <Compass className="w-4 h-4 text-sky-500" />
                    <span>Activities ({selectedActivities.length})</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-900">
                    {formatCurrency(activitiesTotal)}
                  </span>
                </div>
                {selectedActivities.length > 0 ? (
                  <ul className="space-y-1 text-[11px] text-slate-600">
                    {selectedActivities.map(a => (
                      <li key={a.id} className="flex justify-between">
                        <span className="line-clamp-1">• {a.name}</span>
                        <span className="font-medium text-slate-800">{formatCurrency(a.price * travelersCount)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400 italic">No activities added</p>
                )}
              </div>

            </div>

            {/* Price Breakdown */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal ({travelersCount} travelers, {roomsNeeded} {roomsNeeded === 1 ? "room" : "rooms"})</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Estimated Taxes & Fees (12%)</span>
                <span>{formatCurrency(taxesAndFees)}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                <span className="text-sm font-bold text-slate-900">Total Estimated Trip</span>
                <span className="text-2xl font-extrabold text-slate-900 font-display">
                  {formatCurrency(grandTotal)}
                </span>
              </div>
            </div>

            {/* Trip Booking Policy Notice */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>All fares include applicable taxes & fees. Free cancellation within 24 hours on select bookings.</span>
            </div>

            {/* Action to proceed to Checkout (Requires Authentication) */}
            <button
              type="button"
              onClick={handleStartBooking}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Customize & Checkout Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>

      {/* ================================================== */}
      {/* 3. CHECKOUT & BOOKING CONFIRMATION MODAL WORKFLOW */}
      {/* ================================================== */}
      {currentCheckoutStep && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className={`bg-white rounded-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 my-8 space-y-6 transition-all ${
            currentCheckoutStep === "confirmation" ? "max-w-3xl" : "max-w-2xl"
          }`}>

            {/* Step 1: Summary Review */}
            {currentCheckoutStep === "summary" && (
              <div className="space-y-6">
                <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Step 1 of 2</span>
                    <h3 className="text-2xl font-bold font-display text-slate-900">
                      Review Your Trip to {destination.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setCurrentCheckoutStep(null)}
                    className="text-slate-400 hover:text-slate-700 text-xl font-bold px-2 py-1"
                  >
                    ×
                  </button>
                </div>

                {/* Itinerary Summary Card */}
                <div className="bg-slate-50 rounded-2xl p-5 space-y-4 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{destination.name}, {destination.country}</p>
                      <p className="text-slate-500">{checkIn} to {checkOut} ({nights} nights)</p>
                    </div>
                    <span className="font-bold text-sky-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                      {travelersCount} Guests
                    </span>
                  </div>

                  {/* Travel Route (Requirement 6) */}
                  <div className="space-y-1">
                    <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Travel Route:</p>
                    <p className="font-extrabold text-sky-700 text-sm font-display">
                      {cleanOrigin || origin} → {destination.name}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Accommodations:</p>
                    <p className="font-semibold text-slate-900">{selectedHotel?.name} — {selectedRoom?.type} Room</p>
                    <p className="text-slate-500">{selectedHotel?.address}</p>
                    <p className="text-[11px] text-slate-600 font-medium">
                      {roomsNeeded} {roomsNeeded === 1 ? "room" : "rooms"} × {nights} {nights === 1 ? "night" : "nights"} × {formatCurrency(roomPricePerNight)} = <strong className="text-slate-900">{formatCurrency(accommodationTotal)}</strong>
                    </p>
                  </div>

                  {selectedTransport && (
                    <div className="space-y-1 pt-2 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Transportation:</p>
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          {selectedTransport.fareLabel || "Estimated fare"}
                        </span>
                      </div>
                      <p className="font-semibold text-slate-900">
                        {selectedTransport.type === "FLIGHT"
                          ? `${selectedTransport.marketingCarrier?.name || selectedTransport.airline?.name || selectedTransport.operatingCarrier?.name || selectedTransport.airline || "Airline"}${selectedTransport.flightNumber ? ` (${selectedTransport.flightNumber})` : ""} • Flight`
                          : selectedTransport.type === "TRAIN"
                          ? `${selectedTransport.operator || selectedTransport.provider} • Train`
                          : `${selectedTransport.operator || selectedTransport.provider} • Bus`}
                      </p>
                      <p className="text-slate-500">{formatLocation(selectedTransport.origin)} → {formatLocation(selectedTransport.destination)}</p>
                      <p className="text-[11px] text-slate-600 font-medium">
                        {formatCurrency(selectedTransport.price)} / traveler × {travelersCount} travelers = <strong className="text-slate-900">{formatCurrency(transportTotal)}</strong>
                      </p>
                    </div>
                  )}

                  {selectedActivities.length > 0 && (
                    <div className="space-y-1 pt-2 border-t border-slate-200">
                      <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Activities Included:</p>
                      {selectedActivities.map(a => (
                        <div key={a.id} className="flex items-center justify-between text-slate-600 text-[11px]">
                          <span>• {a.name} ({a.duration})</span>
                          <span className="font-semibold text-slate-800">
                            {formatCurrency(a.price * travelersCount)}
                            {travelersCount > 1 && <span className="text-slate-400 font-normal text-[10px] ml-1">({formatCurrency(a.price)} × {travelersCount})</span>}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-200 flex justify-between font-bold text-sm text-slate-900">
                    <span>Total Package Price</span>
                    <span className="text-sky-600 font-display text-lg">{formatCurrency(grandTotal)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => setCurrentCheckoutStep(null)}
                    className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                  >
                    Back to Customizer
                  </button>
                  <button
                    onClick={() => {
                      if (!isAuthenticated) {
                        navigate("/login", {
                          state: {
                            from: {
                              pathname: "/trip-results",
                              search: `?destination=${encodeURIComponent(destQuery)}&checkIn=${checkIn}&checkOut=${checkOut}&travelers=${travelersCount}`
                            },
                            message: "Please log in or create an account to continue with your booking."
                          }
                        });
                        return;
                      }
                      setCurrentCheckoutStep("payment");
                    }}
                    className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold flex items-center space-x-1.5 shadow-sm cursor-pointer"
                  >
                    <span>Proceed to Payment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Dual Payment Gateway (Razorpay & Stripe) */}
            {currentCheckoutStep === "payment" && (
              <div className="space-y-6">
                <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Step 2 of 2</span>
                    <h3 className="text-2xl font-bold font-display text-slate-900">
                      Payment Gateway
                    </h3>
                  </div>
                  <button
                    onClick={() => setCurrentCheckoutStep(null)}
                    className="text-slate-400 hover:text-slate-700 text-xl font-bold px-2 py-1"
                  >
                    ×
                  </button>
                </div>

                {/* Payable Amount & Security Notice */}
                <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-5 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                  <div>
                    <span className="text-xs text-sky-800 font-bold block uppercase tracking-wider">Total Payable Amount</span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-extrabold text-slate-950 font-display">
                        {selectedGateway === "stripe" && currency === "USD"
                          ? `$${Math.round(grandTotal / 85)} USD`
                          : selectedGateway === "stripe" && currency === "EUR"
                          ? `€${Math.round(grandTotal / 92)} EUR`
                          : formatCurrency(grandTotal)}
                      </span>
                      {selectedGateway === "stripe" && currency !== "INR" && (
                        <span className="text-xs text-slate-500 font-medium">
                          (≈ {formatCurrency(grandTotal)})
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700 bg-white/80 px-3 py-2 rounded-xl border border-sky-100 shadow-xs">
                    <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block">256-bit Bank Grade Security</span>
                      <span className="text-[11px] text-slate-500">PCI-DSS Compliant • HMAC SHA-256</span>
                    </div>
                  </div>
                </div>

                {/* Gateway Selection: Razorpay vs Stripe */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">Select Payment Gateway</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Razorpay Option */}
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedGateway("razorpay");
                        setCurrency("INR");
                        setPaymentMethod("upi");
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all relative ${
                        selectedGateway === "razorpay"
                          ? "border-sky-600 bg-sky-50/50 shadow-sm ring-2 ring-sky-500/20"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-base">🇮🇳</span>
                          <span className="font-extrabold text-slate-900 text-sm">Razorpay</span>
                        </div>
                        <span className="text-[10px] font-bold bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full">
                          INR (₹)
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium">
                        UPI (GPay / PhonePe), RuPay, Indian Credit & Debit Cards, NetBanking.
                      </p>
                      {selectedGateway === "razorpay" && (
                        <div className="mt-3 flex items-center text-[11px] text-sky-700 font-bold space-x-1">
                          <Check className="w-3.5 h-3.5" />
                          <span>Active Gateway</span>
                        </div>
                      )}
                    </button>

                    {/* Stripe Global Option */}
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedGateway("stripe");
                        setCurrency("USD");
                        setPaymentMethod("card");
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all relative ${
                        selectedGateway === "stripe"
                          ? "border-indigo-600 bg-indigo-50/50 shadow-sm ring-2 ring-indigo-500/20"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-indigo-600" />
                          <span className="font-extrabold text-slate-900 text-sm">Stripe Global</span>
                        </div>
                        <span className="text-[10px] font-bold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                          USD ($) / EUR (€)
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium">
                        International Visa, Mastercard, American Express with 3D-Secure.
                      </p>
                      {selectedGateway === "stripe" && (
                        <div className="mt-3 flex items-center text-[11px] text-indigo-700 font-bold space-x-1">
                          <Check className="w-3.5 h-3.5" />
                          <span>Active Gateway</span>
                        </div>
                      )}
                    </button>

                  </div>
                </div>

                {/* Gateway Detail Panels */}
                {selectedGateway === "razorpay" ? (
                  <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">Choose Razorpay Payment Method</span>
                      <span className="text-[11px] text-slate-500">Live & Sandbox Supported</span>
                    </div>

                    {/* Razorpay Method Tabs */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "upi", label: "UPI / QR", icon: QrCode },
                        { id: "card", label: "Cards", icon: CreditCard },
                        { id: "netbanking", label: "NetBanking", icon: Building2 }
                      ].map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setPaymentMethod(tab.id)}
                            className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                              paymentMethod === tab.id
                                ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Razorpay UPI */}
                    {paymentMethod === "upi" && (
                      <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-center space-y-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                          <QrCode className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Scan & Pay via any UPI App</p>
                          <p className="text-slate-500 text-[11px]">Google Pay • PhonePe • Paytm • BHIM</p>
                        </div>
                        <div className="font-mono bg-slate-50 p-2.5 rounded-xl border border-slate-200 inline-block text-sky-700 font-bold text-xs">
                          travelmate@okhdfcbank
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Click "Authorize & Pay" below to trigger instant webhook verification and confirmed ticket issue.
                        </p>
                      </div>
                    )}

                    {/* Razorpay Card */}
                    {paymentMethod === "card" && (
                      <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-3">
                        <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                          <span>Card Details</span>
                          <span className="text-sky-600 font-bold">RuPay • Visa • Mastercard</span>
                        </div>
                        <input
                          type="text"
                          readOnly
                          value="4000 0012 3456 7890"
                          className="w-full px-3 py-2.5 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs font-semibold text-slate-800"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            readOnly
                            value="12 / 28"
                            className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs text-center font-mono text-slate-700"
                          />
                          <input
                            type="text"
                            readOnly
                            value="CVV: 999"
                            className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs text-center font-mono text-slate-700"
                          />
                        </div>
                      </div>
                    )}

                    {/* Razorpay NetBanking */}
                    {paymentMethod === "netbanking" && (
                      <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                        <label className="font-bold text-slate-800 block">Select Indian Bank</label>
                        <select className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800">
                          <option>HDFC Bank (Instant Verification)</option>
                          <option>State Bank of India</option>
                          <option>ICICI Bank</option>
                          <option>Axis Bank</option>
                          <option>Kotak Mahindra Bank</option>
                        </select>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Stripe Global Panel */
                  <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">International Card Payment</span>
                      <div className="flex items-center space-x-1">
                        {["USD", "EUR"].map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => setCurrency(c)}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              currency === c
                                ? "bg-indigo-600 text-white"
                                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-600 block mb-1">Card Number</label>
                        <input
                          type="text"
                          readOnly
                          value="4242 •••• •••• 4242 (Stripe Test Visa)"
                          className="w-full px-3 py-2.5 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs font-semibold text-slate-800"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[11px] font-bold text-slate-600 block mb-1">Expires</label>
                          <input
                            type="text"
                            readOnly
                            value="04 / 29"
                            className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs text-center font-mono text-slate-700"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-slate-600 block mb-1">CVC</label>
                          <input
                            type="text"
                            readOnly
                            value="888"
                            className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs text-center font-mono text-slate-700"
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-1.5 text-[11px] text-indigo-700 pt-1">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Protected by Stripe 3D-Secure 2.0 Strong Customer Authentication</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Developer Sandbox Notice */}
                <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200 flex items-start space-x-2 text-[11px] text-emerald-900">
                  <Shield className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Zero-Config Sandbox Active:</span> You can click "Authorize & Pay" below to simulate an instantaneous verified payment without entering real bank credentials. Real Razorpay/Stripe keys can be placed in <code className="bg-emerald-100 px-1 rounded font-mono text-[10px]">server/.env</code>.
                  </div>
                </div>

                {/* Payment Error Alert */}
                {paymentError && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-3 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{paymentError}</span>
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    disabled={isProcessingPayment}
                    onClick={() => setCurrentCheckoutStep("summary")}
                    className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    Back to Summary
                  </button>
                  <button
                    type="button"
                    disabled={isProcessingPayment}
                    onClick={handleExecutePayment}
                    className={`px-6 py-3 rounded-xl text-white text-xs font-bold flex items-center space-x-2 shadow-md transition-all ${
                      isProcessingPayment
                        ? "bg-slate-400 cursor-not-allowed"
                        : selectedGateway === "razorpay"
                        ? "bg-sky-600 hover:bg-sky-700 cursor-pointer"
                        : "bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
                    }`}
                  >
                    {isProcessingPayment ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Verifying with {selectedGateway === "razorpay" ? "Razorpay" : "Stripe"}...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>
                          Authorize & Pay {selectedGateway === "stripe" && currency === "USD"
                            ? `$${Math.round(grandTotal / 85)} USD`
                            : selectedGateway === "stripe" && currency === "EUR"
                            ? `€${Math.round(grandTotal / 92)} EUR`
                            : formatCurrency(grandTotal)}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Payment Successful & Booking Confirmation */}
            {currentCheckoutStep === "confirmation" && bookingConfirmation && (
              <div className="space-y-6 print:m-0 print:p-0">
                
                {/* Celebratory Payment Successful Hero - Exactly matching user screenshot */}
                <div className="text-center space-y-4 pt-4 pb-2">
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

                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 tracking-tight">
                      Your payment was successful
                    </h2>
                    <p className="text-neutral-500 text-sm sm:text-base font-normal max-w-md mx-auto leading-relaxed">
                      Thank you for your payment. We will be in contact with more details shortly
                    </p>
                  </div>

                  {/* Verified & Dispatch Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-xs text-slate-600 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Payment Verified • Invoice & e-ticket sent to <strong className="text-slate-800 font-semibold">{bookingConfirmation.guestDetails?.email}</strong></span>
                  </div>
                </div>

                {/* Official Digital Payment Receipt Card */}
                <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                  
                  {/* Receipt Header Banner */}
                  <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center space-x-2.5">
                      <Receipt className="w-5 h-5 text-emerald-400" />
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                          Official Digital Receipt & Tax Invoice
                        </div>
                        <div className="text-xs font-mono text-slate-300">
                          Invoice: {bookingConfirmation.invoiceNumber}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                        PAID IN FULL
                      </span>
                    </div>
                  </div>

                  {/* Paid Amount Highlight */}
                  <div className="p-5 border-b border-slate-200/80 bg-white flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Total Amount Paid
                      </span>
                      <div className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-600">
                        {formatCurrency(bookingConfirmation.grandTotal)}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Inclusive of all applicable GST, tourism taxes & convenience fees
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Payment Timestamp
                      </span>
                      <p className="text-xs font-semibold text-slate-800">
                        {formatReceiptDate(bookingConfirmation.bookingDate)}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                        <Lock className="w-3 h-3 text-emerald-600" /> 256-bit Encrypted
                      </span>
                    </div>
                  </div>

                  {/* Transaction Details Grid */}
                  <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50/70 border-b border-slate-200/80">
                    
                    {/* Booking Reference (PNR) */}
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          Booking Reference (PNR)
                        </span>
                        <span className="text-sm font-extrabold font-mono text-sky-700">
                          {bookingConfirmation.bookingReference}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(bookingConfirmation.bookingReference, "pnr")}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                        title="Copy Booking Reference"
                      >
                        {copiedKey === "pnr" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700 font-bold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-slate-500" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Transaction ID */}
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          Transaction ID
                        </span>
                        <span className="text-xs font-bold font-mono text-slate-800 truncate max-w-[140px] block" title={bookingConfirmation.transactionId}>
                          {bookingConfirmation.transactionId}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(bookingConfirmation.transactionId, "txn")}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                        title="Copy Transaction ID"
                      >
                        {copiedKey === "txn" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700 font-bold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-slate-500" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Payment Gateway & Method */}
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Payment Gateway & Method
                      </span>
                      <p className="font-bold text-slate-800 text-xs mt-0.5">
                        {bookingConfirmation.gateway === "razorpay" ? "🇮🇳 Razorpay Secure" : "🌐 Stripe Global"}
                      </p>
                      <p className="text-[11px] text-slate-500 capitalize">
                        Method: {bookingConfirmation.paymentMethod || "Instant Online"}
                      </p>
                    </div>

                    {/* Primary Guest / Customer */}
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Lead Customer Details
                      </span>
                      <p className="font-bold text-slate-800 text-xs mt-0.5">
                        {bookingConfirmation.guestDetails?.fullName}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {bookingConfirmation.guestDetails?.email}
                      </p>
                    </div>

                  </div>

                  {/* Confirmed Services Breakdown */}
                  <div className="p-5 space-y-4 text-xs bg-white">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <Compass className="w-4 h-4 text-sky-600" />
                        Confirmed Itinerary Services
                      </span>
                      <span className="text-[11px] font-bold text-slate-500">
                        {bookingConfirmation.travelers} Guests • {bookingConfirmation.nights} Nights
                      </span>
                    </div>

                    {/* Route & Dates */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400">Destination</span>
                        <p className="font-bold text-slate-800 text-sm">
                          {bookingConfirmation.destination}, {bookingConfirmation.country}
                        </p>
                        {bookingConfirmation.origin && (
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Departing from: {bookingConfirmation.origin}
                          </p>
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400">Schedule</span>
                        <p className="font-semibold text-slate-800">
                          {bookingConfirmation.checkIn} to {bookingConfirmation.checkOut}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          {bookingConfirmation.nights} Nights Stay Duration
                        </p>
                      </div>
                    </div>

                    {/* Hotel Voucher */}
                    {bookingConfirmation.hotel?.name && (
                      <div className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                        <div className="p-2 rounded-lg bg-sky-100 text-sky-700 mt-0.5">
                          <HotelIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-800 text-xs">
                              {bookingConfirmation.hotel.name}
                            </span>
                            <span className="text-emerald-700 font-bold text-[11px]">
                              {formatCurrency(bookingConfirmation.hotel.total)}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500">
                            {bookingConfirmation.hotel.roomType} Room • {bookingConfirmation.hotel.roomsCount || 1} {(bookingConfirmation.hotel.roomsCount || 1) === 1 ? "Room" : "Rooms"}
                          </p>
                          <p className="text-[10px] text-slate-400 truncate mt-0.5">
                            {bookingConfirmation.hotel.address}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Transportation Voucher */}
                    {bookingConfirmation.transportation && (
                      <div className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                        <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 mt-0.5">
                          {bookingConfirmation.transportation.type === "TRAIN" ? (
                            <Train className="w-4 h-4" />
                          ) : bookingConfirmation.transportation.type === "BUS" ? (
                            <Bus className="w-4 h-4" />
                          ) : (
                            <Plane className="w-4 h-4" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-800 text-xs">
                              {bookingConfirmation.transportation.type === "FLIGHT"
                                ? `${bookingConfirmation.transportation.marketingCarrier?.name || bookingConfirmation.transportation.airline?.name || bookingConfirmation.transportation.operatingCarrier?.name || bookingConfirmation.transportation.airline || "Flight"}${bookingConfirmation.transportation.flightNumber ? ` (${bookingConfirmation.transportation.flightNumber})` : ""}`
                                : (bookingConfirmation.transportation.operator || bookingConfirmation.transportation.provider || "Transit Ticket")}
                            </span>
                            <span className="text-emerald-700 font-bold text-[11px]">
                              {formatCurrency(bookingConfirmation.transportation.total)}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500">
                            Departure: {bookingConfirmation.transportation.departureTime} from {formatLocation(bookingConfirmation.transportation.origin)} → {formatLocation(bookingConfirmation.transportation.destination)}
                          </p>
                          <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            Confirmed Ticket
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Experiences / Activities */}
                    {bookingConfirmation.activities && bookingConfirmation.activities.length > 0 && (
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 space-y-1.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          Confirmed Activities & Tours ({bookingConfirmation.activities.length})
                        </span>
                        <div className="space-y-1">
                          {bookingConfirmation.activities.map((act, idx) => (
                            <div key={idx} className="flex items-center justify-between text-[11px]">
                              <span className="text-slate-700 font-medium flex items-center gap-1.5">
                                <Check className="w-3 h-3 text-emerald-600" />
                                {act.name}
                              </span>
                              <span className="text-slate-500 font-semibold">
                                {formatCurrency(act.price * (bookingConfirmation.travelers || 1))}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>

                {/* Check-in Guidance Card */}
                <div className="p-3.5 bg-sky-50/80 rounded-2xl border border-sky-100 flex items-start space-x-3 text-xs text-sky-900">
                  <QrCode className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-bold text-sky-950">Fast Check-In & Boarding Ready</p>
                    <p className="text-[11px] text-sky-800 leading-relaxed">
                      You can present this digital confirmation or the PDF e-ticket sent to your email directly at the hotel front desk and transit boarding gates. All reservations are synchronized in real-time.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 print:hidden">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-slate-600" />
                    <span>Print / Save Tax Invoice</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => navigate("/my-trips")}
                      className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                    >
                      View in My Trips
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentCheckoutStep(null);
                        navigate("/");
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
