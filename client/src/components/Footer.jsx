import React from "react";
import { Link } from "react-router-dom";
import { Plane, ShieldCheck, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
                <Plane className="w-5 h-5 text-white transform -rotate-45" />
              </div>
              <span className="text-2xl font-bold font-display text-white tracking-tight">
                TravelMate<span className="text-sky-400">.AI</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Your unified, intelligent travel companion. Seamlessly discover destinations, reserve hand-picked hotels, book transportation, and plan AI-assisted journeys.
            </p>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full-Stack Academic Major Project</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/explore" className="hover:text-sky-400 transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-sky-400 transition-colors">
                  Featured Hotels
                </Link>
              </li>
              <li>
                <Link to="/transportation" className="hover:text-sky-400 transition-colors">
                  Flight & Transport Options
                </Link>
              </li>
              <li>
                <Link to="/ai-assistant" className="hover:text-sky-400 transition-colors flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>AI Travel Assistant</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* User Account */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Bookings & Account
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/my-trips" className="hover:text-sky-400 transition-colors">
                  My Trips & Itineraries
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-sky-400 transition-colors">
                  Customer Sign In
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-sky-400 transition-colors">
                  Admin Portal
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors">
                  System Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-400">
              <span className="px-2 py-1 rounded bg-slate-800">React 18</span>
              <span className="px-2 py-1 rounded bg-slate-800">Vite</span>
              <span className="px-2 py-1 rounded bg-slate-800">Tailwind CSS</span>
              <span className="px-2 py-1 rounded bg-slate-800">Node Express</span>
              <span className="px-2 py-1 rounded bg-slate-800">PostgreSQL</span>
              <span className="px-2 py-1 rounded bg-slate-800">Prisma ORM</span>
              <span className="px-2 py-1 rounded bg-slate-800">Gemini AI</span>
              <span className="px-2 py-1 rounded bg-slate-800">Razorpay</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} TravelMate AI. Built for Academic Demonstration.</p>
          <div className="flex items-center space-x-2 text-slate-400">
            <span>Powered by Smart Backend Validation & Google Gemini</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
