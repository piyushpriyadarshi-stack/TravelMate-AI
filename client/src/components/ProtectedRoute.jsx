// ==================================================
// TravelMate AI - Protected Route Guard (Stage 2)
// Redirects unauthenticated visitors to /login while
// preserving the destination path for post-login return.
// ==================================================

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LoadingSpinner } from "./LoadingSpinner";

export function ProtectedRoute({ children, requireAdmin = false }) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <LoadingSpinner message="Verifying authentication session..." />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Preserve intended destination path in state and show user-friendly requirement message
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
          message: "Please log in or create an account to continue with your booking."
        }}
        replace
      />
    );
  }

  if (requireAdmin && user?.role !== "ADMIN") {
    return (
      <div className="max-w-md mx-auto my-24 p-8 bg-white border border-slate-200/80 rounded-3xl text-center shadow-lg shadow-slate-100 space-y-4">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Access Denied</h2>
        <p className="text-sm text-slate-600">
          Administrator privileges are required to view this page. You do not have permission to access the administrative dashboard.
        </p>
        <div className="pt-2">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return children;
}
