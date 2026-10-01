import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldAlert, 
  MapPin, 
  Hotel, 
  Car, 
  Users, 
  CreditCard, 
  CheckCircle, 
  FileText,
  Clock
} from "lucide-react";
import { Badge } from "../components/Badge";

export function AdminDashboardPage() {
  const stats = [
    { title: "Destinations", count: "13", icon: MapPin, color: "text-sky-500", bg: "bg-sky-50" },
    { title: "Hotels Registered", count: "5", icon: Hotel, color: "text-purple-500", bg: "bg-purple-50" },
    { title: "Transport Routes", count: "8", icon: Car, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Total Bookings", count: "0", icon: FileText, color: "text-amber-500", bg: "bg-amber-50" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <Badge variant="brand">Scheduled for Stage 13</Badge>
          <h1 className="text-3xl font-extrabold font-display text-slate-900 mt-2">
            Admin Management Portal
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage inventory, destinations, hotel categories, vehicle fleets, and verified payments.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1.5 text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl font-bold">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Admin Auth Protected (Stage 13)</span>
          </span>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {stat.title}
                </span>
                <span className="text-3xl font-extrabold font-display text-slate-900 block mt-1">
                  {stat.count}
                </span>
              </div>
              <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Admin Modules Preview */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft space-y-6">
        <h3 className="text-lg font-bold font-display text-slate-900">
          Admin Management Modules
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-800 text-sm">Destination Management</h4>
            <p className="text-xs text-slate-500">
              Create and edit domestic/international hubs, upload high-res banners, configure key attractions.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-800 text-sm">Hotel & Room Inventory</h4>
            <p className="text-xs text-slate-500">
              Manage room types (Single, Double, Suite), set base prices per night, adjust room capacities.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-800 text-sm">Transit Fleet & Schedules</h4>
            <p className="text-xs text-slate-500">
              Set vehicle passenger limits (4-car, 6-SUV), schedules, airline departure times, and routes.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
