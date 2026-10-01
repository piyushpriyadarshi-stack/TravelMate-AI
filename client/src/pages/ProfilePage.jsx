// ==================================================
// TravelMate AI - User Profile Page (Stage 2)
// Displays authenticated user details from backend,
// allows updating name/phone, and manages session logout.
// ==================================================

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Shield,
  Calendar,
  Key,
  LogOut,
  Edit3,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Compass,
  ShieldAlert,
  Loader2
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Badge } from "../components/Badge";

export function ProfilePage() {
  const { user, logout, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || ""
  });
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setStatusMessage({ type: "error", text: "Name cannot be empty." });
      return;
    }

    setIsSaving(true);
    setStatusMessage({ type: "", text: "" });

    try {
      await updateProfile({
        name: formData.name.trim(),
        phone: formData.phone.trim()
      });
      setIsEditing(false);
      setStatusMessage({ type: "success", text: "Profile details updated successfully!" });
    } catch (err) {
      setStatusMessage({ type: "error", text: err.message || "Failed to update profile." });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <Badge variant={user?.role === "ADMIN" ? "amber" : "brand"}>
              {user?.role === "ADMIN" ? "Administrator Account" : "Verified Traveler"}
            </Badge>
            <span className="text-xs text-emerald-600 font-semibold flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Session Authenticated</span>
            </span>
          </div>
          <h1 className="text-3xl font-extrabold font-display text-slate-900 mt-2">
            User Profile
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage your personal traveler details, account security, and active reservations.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleLogout}
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-600 text-slate-600 text-xs font-bold transition-colors flex items-center space-x-1.5"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Status Alert */}
      {statusMessage.text && (
        <div
          className={`p-4 rounded-2xl border text-xs flex items-center space-x-2 ${
            statusMessage.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-rose-50 border-rose-200 text-rose-800"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Main Profile Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden">
        
        {/* Banner with Avatar */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 p-8 text-white flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              referrerPolicy="no-referrer"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-white/40 shadow-lg"
            />
          ) : (
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg">
              {user?.name
                ? user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()
                : "TM"}
            </div>
          )}

          <div className="space-y-1 text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl font-bold font-display">{user?.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 border border-white/30">
                {user?.role}
              </span>
              {user?.authProvider === "GOOGLE" && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-white/20 border border-white/30 inline-flex items-center space-x-1">
                  <span>Google Verified</span>
                </span>
              )}
              {user?.authProvider === "BOTH" && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-white/20 border border-white/30">
                  Google & Password
                </span>
              )}
            </div>
            <p className="text-sky-100 text-xs flex items-center justify-center sm:justify-start space-x-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>{user?.email}</span>
            </p>
          </div>

          <button
            onClick={() => {
              setIsEditing(!isEditing);
              setStatusMessage({ type: "", text: "" });
            }}
            className="px-4 py-2 rounded-xl bg-white text-slate-800 hover:bg-sky-50 text-xs font-bold transition-colors shadow-sm flex items-center space-x-1.5"
          >
            <Edit3 className="w-3.5 h-3.5 text-sky-600" />
            <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
          </button>
        </div>

        {/* Profile Information / Edit Form */}
        <div className="p-8">
          {isEditing ? (
            <form onSubmit={handleUpdate} className="space-y-5 max-w-lg">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                Edit Personal Information
              </h3>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors flex items-center space-x-1.5 shadow-sm disabled:opacity-50"
                >
                  {isSaving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>{isSaving ? "Saving Changes..." : "Save Changes"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Full Name</span>
                <p className="font-bold text-slate-800 text-sm flex items-center space-x-1.5">
                  <User className="w-4 h-4 text-sky-600" />
                  <span>{user?.name}</span>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Address</span>
                <p className="font-bold text-slate-800 text-sm flex items-center space-x-1.5">
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span>{user?.email}</span>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Phone Number</span>
                <p className="font-bold text-slate-800 text-sm flex items-center space-x-1.5">
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>{user?.phone || "Not provided"}</span>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Account Role</span>
                <p className="font-bold text-slate-800 text-sm flex items-center space-x-1.5">
                  <Shield className="w-4 h-4 text-indigo-600" />
                  <span>{user?.role}</span>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Member Since</span>
                <p className="font-bold text-slate-800 text-sm flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span>
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })
                      : "September 2026"}
                  </span>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">User Account ID</span>
                <p className="font-mono text-slate-700 text-xs truncate">
                  {user?.id}
                </p>
              </div>

            </div>
          )}
        </div>

        {/* Security & Authentication Notice */}
        <div className="bg-slate-50/70 border-t border-slate-100 px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <Key className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Password Protection: Salted bcrypt hash • Never stored in plain text</span>
          </div>
          <div className="flex items-center space-x-1">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-700">JWT Token Session Active</span>
          </div>
        </div>

      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/my-trips"
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex items-center justify-between group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">My Bookings & Trips</h4>
              <p className="text-slate-500 text-xs">View confirmed vouchers and itineraries</p>
            </div>
          </div>
          <span className="text-sky-600 font-bold text-xs">View →</span>
        </Link>

        <Link
          to="/explore"
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex items-center justify-between group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Explore Destinations</h4>
              <p className="text-slate-500 text-xs">Discover verified hotels and travel spots</p>
            </div>
          </div>
          <span className="text-indigo-600 font-bold text-xs">Explore →</span>
        </Link>
      </div>

      {/* Admin Quick Link if Administrator */}
      {user?.role === "ADMIN" && (
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShieldAlert className="w-6 h-6 text-amber-600" />
            <div>
              <h4 className="font-bold text-amber-950 text-sm">Administrator Access Detected</h4>
              <p className="text-xs text-amber-800">You have authorized privileges to view the admin portal and manage system inventory.</p>
            </div>
          </div>
          <Link
            to="/admin"
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-colors shrink-0"
          >
            Admin Dashboard
          </Link>
        </div>
      )}

    </div>
  );
}
