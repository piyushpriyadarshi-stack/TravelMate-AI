import React from "react";
import { ShieldCheck, Cpu, Database, CreditCard, Lock, Sparkles, Server, CheckCircle2 } from "lucide-react";
import { Badge } from "../components/Badge";

export function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Title */}
      <div className="text-center space-y-3">
        <Badge variant="brand">System Architecture & Vision</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
          About TravelMate AI
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          An end-to-end travel planning and booking platform architected for reliability, strict server validation, and AI-driven recommendations.
        </p>
      </div>

      {/* Core Principle Callout (Section 2) */}
      <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 rounded-3xl p-8 text-white shadow-xl space-y-4">
        <div className="flex items-center space-x-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-5 h-5" />
          <span>Core Design Principle (Section 2)</span>
        </div>
        <h2 className="text-2xl font-bold font-display">
          AI Suggests & Interprets — Server Decides & Enforces
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Google Gemini AI powers conversational travel planning, semantic recommendations, and custom itineraries. However, <strong>all critical business logic</strong>—including calendar dates, room availability, transportation passenger limits, base prices, taxes, Razorpay payment verification, and booking confirmation—is strictly governed by verified server-side database transactions.
        </p>
      </div>

      {/* 17 Stages Roadmap Overview */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft space-y-6">
        <h3 className="text-xl font-bold font-display text-slate-900 flex items-center space-x-2">
          <Server className="w-5 h-5 text-sky-600" />
          <span>Implementation Blueprint (17 Incremental Stages)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          {[
            { stage: "Stage 1", title: "Project Setup & Foundation", active: true },
            { stage: "Stage 2", title: "Authentication (JWT & Hashing)", active: false },
            { stage: "Stage 3", title: "Destination Search & API", active: false },
            { stage: "Stage 4", title: "Hotel System & Room Types", active: false },
            { stage: "Stage 5", title: "Transportation & Capacity Engine", active: false },
            { stage: "Stage 6", title: "Trip Configuration", active: false },
            { stage: "Stage 7", title: "Dynamic Pricing Engine", active: false },
            { stage: "Stage 8", title: "Booking & Availability Validation", active: false },
            { stage: "Stage 9", title: "Checkout Flow & Terms", active: false },
            { stage: "Stage 10", title: "Razorpay Test Payment", active: false },
            { stage: "Stage 11", title: "Booking Confirmation & IDs", active: false },
            { stage: "Stage 12", title: "My Trips Management", active: false },
            { stage: "Stage 13", title: "Admin Management Portal", active: false },
            { stage: "Stage 14", title: "AI Travel Assistant (Gemini)", active: false },
            { stage: "Stage 15", title: "Invoice Generation & PDF", active: false },
            { stage: "Stage 16", title: "Security & Double-Booking Guards", active: false },
            { stage: "Stage 17", title: "Deployment & Production Polish", active: false },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border flex items-center justify-between ${
                item.active 
                  ? "bg-sky-50 border-sky-300 text-sky-900 font-bold" 
                  : "bg-slate-50 border-slate-200 text-slate-600"
              }`}
            >
              <div>
                <span className="text-[10px] uppercase tracking-wider block opacity-70">
                  {item.stage}
                </span>
                <span>{item.title}</span>
              </div>
              {item.active && (
                <span className="px-2 py-0.5 rounded-full bg-sky-600 text-white text-[10px]">
                  Active
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Technology Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
            <Cpu className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-800 text-base">Frontend Layer</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Built with React 18, Vite, Tailwind CSS, Lucide icons, and React Router. Enforces client-side validation so invalid dates, zero travelers, and negative numbers can never even submit.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Database className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-800 text-base">Backend & Database Layer</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Node.js & Express.js REST APIs with Prisma ORM querying PostgreSQL. Double-checks date chronological order, room inventory, vehicle capacity, and recalculates totals before payment.
          </p>
        </div>
      </div>

    </div>
  );
}
