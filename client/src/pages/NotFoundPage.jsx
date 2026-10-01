import React from "react";
import { Link } from "react-router-dom";
import { Compass, Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-10 h-10 animate-spin text-sky-500" style={{ animationDuration: "12s" }} />
        </div>
        <h1 className="text-4xl font-extrabold font-display text-slate-900">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          The travel route or page you are looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
