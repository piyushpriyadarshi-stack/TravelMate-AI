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
      <div className="max-w-xl mx-auto my-16 p-8 bg-rose-50 border border-rose-200 rounded-3xl text-center space-y-4">
        <h2 className="text-xl font-bold text-rose-900">Access Denied</h2>
        <p className="text-xs text-rose-700">
          Administrator privileges are required to view this area. Your current role is <strong>{user?.role}</strong>.
        </p>
      </div>
    );
  }

  return children;
}
