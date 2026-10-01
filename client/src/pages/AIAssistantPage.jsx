import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Send, Bot, ShieldAlert, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Badge } from "../components/Badge";
import { apiService } from "../services/api";
import { CurrentLocationPicker } from "../components/CurrentLocationPicker";
import { MIN_TRAVELERS, MAX_TRAVELERS } from "../utils/constants";

export function AIAssistantPage() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [extractedResult, setExtractedResult] = useState(null);
  const [missingInfo, setMissingInfo] = useState([]);

  // Editable fields (Requirements 11 & 16)
  const [editOrigin, setEditOrigin] = useState("");
  const [editDestination, setEditDestination] = useState("");
  const [editDuration, setEditDuration] = useState("");
  const [editTravelers, setEditTravelers] = useState("");
  const [editBudget, setEditBudget] = useState("");

  const samplePrompts = [
    "I am in Bhubaneswar and want to go to Goa for 5 days with 5 people and budget ₹50000.",
    "I want to go to Goa for 5 days with 5 people.",
    "I want to visit Goa.",
    "I am in Delhi and want to go to Manali for 4 days with 2 people and budget ₹25000."
  ];

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setError("");
      const res = await apiService.parseAITravelPlan(prompt.trim(), editOrigin.trim() || null);
      if (res && res.success) {
        setExtractedResult(res);
        setMissingInfo(res.missingInformation || []);
        setEditOrigin(res.extracted.origin || editOrigin || "");
        setEditDestination(res.extracted.destination || "");
        setEditDuration(res.extracted.durationDays || "");
        setEditTravelers(res.extracted.travelers || "");
        setEditBudget(res.extracted.budget || "");
      } else {
        setError(res?.error || "AI assistant is temporarily unavailable. You can plan your trip manually.");
      }
    } catch (err) {
      setError("AI assistant is temporarily unavailable. You can plan your trip manually.");
    } finally {
      setLoading(false);
    }
  };

  const handleProceedToSearch = () => {
    if (!editDestination.trim()) {
      setError("Please specify a valid destination to proceed.");
      return;
    }

    const today = new Date();
    const checkIn = today.toISOString().split("T")[0];
    const duration = parseInt(editDuration, 10) || 3;
    const checkoutDateObj = new Date(today);
    checkoutDateObj.setDate(checkoutDateObj.getDate() + duration);
    const checkOut = checkoutDateObj.toISOString().split("T")[0];

    const params = new URLSearchParams({
      destination: editDestination.trim(),
      checkIn,
      checkOut,
      travelers: Math.min(Math.max(parseInt(editTravelers, 10) || 2, MIN_TRAVELERS), MAX_TRAVELERS).toString()
    });

    if (editOrigin.trim()) {
      params.set("origin", editOrigin.trim());
    }

    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-900 via-indigo-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl space-y-3">
        <div className="flex items-center space-x-2">
          <Badge variant="brand" className="bg-sky-400/20 text-sky-200 border-sky-400/30">
            Powered by Google Gemini (Stage 4)
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
          AI Travel Assistant
        </h1>
        <p className="text-xs sm:text-sm text-sky-200 leading-relaxed">
          Describe your dream trip in plain natural language. Gemini extracts your origin, destination, duration, travelers, and budget.
        </p>

        {/* Safety Note */}
        <div className="pt-2 flex items-center space-x-2 text-[11px] text-amber-300">
          <ShieldAlert className="w-4 h-4 flex-shrink-0" />
          <span>Trip parameters are verified against real destination inventory without creating premature bookings or payments.</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-soft p-6 sm:p-8 space-y-6">
        {/* Assistant Welcome Bubble */}
        <div className="flex items-start space-x-3.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
            <Bot className="w-5 h-5" />
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 max-w-xl text-xs sm:text-sm text-slate-700 space-y-2">
            <p className="font-semibold text-slate-900">
              👋 Hello! Where would you like to travel?
            </p>
            <p className="leading-relaxed">
              Type your travel requirements naturally (e.g. <em>"I am in Bhubaneswar and want to go to Goa for 5 days with 5 people and budget ₹50000."</em>).
            </p>
          </div>
        </div>

        {/* Sample Prompts */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Try a sample trip request:
          </span>
          <div className="space-y-2">
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setPrompt(p);
                }}
                className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 text-xs font-medium text-slate-700 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>"{p}"</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

        {/* Starting Location / Current Location Detector */}
        <CurrentLocationPicker
          selectedOrigin={editOrigin}
          onOriginChange={setEditOrigin}
          className="bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80"
        />

        {/* Input Form */}
        <form onSubmit={handleSend} className="relative pt-1">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. I am in Bhubaneswar and want to go to Goa for 5 days with 5 people and budget ₹50000."
            className="w-full pl-4 pr-14 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="absolute right-2 top-3.5 p-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading ? <Sparkles className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </form>

        {/* Error Alert (Requirement 17) */}
        {error && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center space-x-2.5">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-500" />
            <span className="font-semibold">{error}</span>
          </div>
        )}

        {/* Extracted Structured Result (Requirement 10 & 11) */}
        {extractedResult && (
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-50 via-sky-50/40 to-indigo-50/30 border border-sky-200 space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h3 className="font-extrabold text-slate-900 text-base font-display">
                  Here's what I understood
                </h3>
              </div>
              <span className="text-[11px] font-bold text-sky-700 bg-white px-3 py-1 rounded-full border border-sky-200">
                Editable Trip Parameters
              </span>
            </div>

            {/* Editable Fields (Requirement 11 & 16) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {/* Origin (Requirement 16) */}
              <div className="bg-white p-3 rounded-2xl border border-slate-200">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  From (Origin)
                </label>
                <input
                  type="text"
                  value={editOrigin}
                  onChange={(e) => setEditOrigin(e.target.value)}
                  placeholder="e.g. Bhubaneswar"
                  className="w-full text-xs font-bold text-slate-900 focus:outline-hidden focus:text-sky-600 bg-transparent"
                />
              </div>

              {/* Destination */}
              <div className="bg-white p-3 rounded-2xl border border-slate-200">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  To (Destination)
                </label>
                <input
                  type="text"
                  value={editDestination}
                  onChange={(e) => setEditDestination(e.target.value)}
                  placeholder="e.g. Goa"
                  className="w-full text-xs font-bold text-slate-900 focus:outline-hidden focus:text-sky-600 bg-transparent"
                />
              </div>

              {/* Duration */}
              <div className="bg-white p-3 rounded-2xl border border-slate-200">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Duration
                </label>
                <div className="flex items-center space-x-1">
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={editDuration}
                    onChange={(e) => setEditDuration(e.target.value)}
                    placeholder="5"
                    className="w-full text-xs font-bold text-slate-900 focus:outline-hidden focus:text-sky-600 bg-transparent"
                  />
                  <span className="text-xs text-slate-400 font-semibold">days</span>
                </div>
              </div>

              {/* Travelers */}
              <div className="bg-white p-3 rounded-2xl border border-slate-200">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Travelers (Max {MAX_TRAVELERS})
                </label>
                <div className="flex items-center space-x-1">
                  <input
                    type="number"
                    min={MIN_TRAVELERS}
                    max={MAX_TRAVELERS}
                    value={editTravelers}
                    onChange={(e) => {
                      const v = parseInt(e.target.value, 10);
                      setEditTravelers(isNaN(v) ? "" : Math.min(Math.max(v, MIN_TRAVELERS), MAX_TRAVELERS));
                    }}
                    placeholder="2"
                    className="w-full text-xs font-bold text-slate-900 focus:outline-hidden focus:text-sky-600 bg-transparent"
                  />
                  <span className="text-xs text-slate-400 font-semibold">guests</span>
                </div>
              </div>

              {/* Budget */}
              <div className="bg-white p-3 rounded-2xl border border-slate-200">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Budget (INR)
                </label>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-slate-400 font-semibold">₹</span>
                  <input
                    type="number"
                    value={editBudget}
                    onChange={(e) => setEditBudget(e.target.value)}
                    placeholder="50000"
                    className="w-full text-xs font-bold text-slate-900 focus:outline-hidden focus:text-sky-600 bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Missing Info Warning (Requirement 9) */}
            {missingInfo.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>
                  Missing information: <strong>{missingInfo.join(", ")}</strong>. You can enter them in the fields above.
                </span>
              </div>
            )}

            {/* Display formatted summary (Requirement 10) */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-medium">
                <span>From: <strong className="text-slate-900 font-bold">{editOrigin || "Not specified"}</strong></span>
                <span className="text-slate-300">•</span>
                <span>To: <strong className="text-slate-900 font-bold">{editDestination || "Not specified"}</strong></span>
                <span className="text-slate-300">•</span>
                <span>Duration: <strong className="text-slate-900 font-bold">{editDuration ? `${editDuration} days` : "Not specified"}</strong></span>
                <span className="text-slate-300">•</span>
                <span>Travelers: <strong className="text-slate-900 font-bold">{editTravelers || "Not specified"}</strong></span>
                <span className="text-slate-300">•</span>
                <span>Budget: <strong className="text-slate-900 font-bold">{editBudget ? `₹${Number(editBudget).toLocaleString("en-IN")}` : "Not specified"}</strong></span>
              </div>

              <button
                type="button"
                onClick={handleProceedToSearch}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Search Destinations & Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
