// ==================================================
// TravelMate AI - Navigation Bar (Stage 2)
// Dynamic navigation displaying auth states (Login/Register
// vs Profile/Logout) while preserving Stage 1 links and layout.
// ==================================================

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Compass,
  Hotel,
  Car,
  Sparkles,
  Briefcase,
  User,
  Menu,
  X,
  ShieldAlert,
  Plane,
  LogOut,
  UserPlus,
  ShieldCheck,
  MapPin
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    setMobileMenuOpen(false);
    navigate("/");
  };

  // Base navigation links
  const navLinks = [
    { name: "Home", path: "/", icon: Compass },
    { name: "Destinations", path: "/destinations", icon: MapPin },
    { name: "Hotels", path: "/hotels", icon: Hotel },
    { name: "Transportation", path: "/transportation", icon: Car },
    { name: "AI Assistant", path: "/ai-assistant", icon: Sparkles, badge: "AI" },
    { name: "My Trips", path: "/my-trips", icon: Briefcase }
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-400 flex items-center justify-center shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform duration-200">
              <Plane className="w-6 h-6 text-white transform -rotate-45" />
            </div>
            <div>
              <span className="text-2xl font-extrabold font-display bg-gradient-to-r from-slate-900 via-sky-900 to-sky-700 bg-clip-text text-transparent">
                TravelMate<span className="text-sky-500">.AI</span>
              </span>
              <span className="block text-[10px] uppercase tracking-wider font-semibold text-slate-600 -mt-1">
                Smart Travel Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 flex items-center space-x-2 ${
                    active
                      ? "text-sky-600 bg-sky-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? "text-sky-600" : "text-slate-600"}`} />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-xs">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {isAdmin && (
              <Link
                to="/admin"
                className="text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-xl flex items-center space-x-1.5 border border-amber-200 transition-colors"
                title="Admin Portal"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                <span>Admin</span>
              </Link>
            )}

            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                {/* Profile Link with Avatar */}
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 transition-all text-xs font-bold text-slate-800"
                >
                  <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    {user?.name ? user.name[0].toUpperCase() : "U"}
                  </div>
                  <span className="max-w-[120px] truncate">{user?.name?.split(" ")[0]}</span>
                  {user?.role === "ADMIN" && (
                    <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-md font-bold uppercase">
                      Admin
                    </span>
                  )}
                </Link>

                {/* Logout Button */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="p-2 rounded-xl border border-slate-200 hover:bg-rose-50 hover:border-rose-200 text-slate-600 hover:text-rose-600 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-sky-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 shadow-md shadow-sky-500/20 hover:shadow-lg transition-all duration-200"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Register</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              to={isAuthenticated ? "/profile" : "/login"}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold ${
                  active
                    ? "text-sky-600 bg-sky-50"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-5 h-5 ${active ? "text-sky-600" : "text-slate-400"}`} />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-sm font-semibold text-slate-800 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <User className="w-5 h-5 text-sky-600" />
                  <span>Profile ({user?.name})</span>
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-2.5 text-sm font-semibold text-amber-800 rounded-xl bg-amber-50"
                  >
                    <ShieldAlert className="w-5 h-5 text-amber-600" />
                    <span>Admin Dashboard</span>
                  </Link>
                )}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl text-sm font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center py-3 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
