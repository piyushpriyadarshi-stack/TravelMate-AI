import React, { useState, useEffect } from "react";
import { Plane, Train, Bus, Filter, Users, ShieldCheck } from "lucide-react";
import { TransportCard } from "../components/TransportCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Badge } from "../components/Badge";
import { apiService } from "../services/api";
import { MIN_TRAVELERS, MAX_TRAVELERS } from "../utils/constants";

export function TransportationPage() {
  const [transportList, setTransportList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("");
  const [passengerCount, setPassengerCount] = useState(2);
  const [originFilter, setOriginFilter] = useState("");
  const [destFilter, setDestFilter] = useState("");

  useEffect(() => {
    async function loadTransport() {
      try {
        setLoading(true);
        const params = {};
        if (selectedType) params.type = selectedType;
        if (originFilter) params.origin = originFilter;
        if (destFilter) params.destination = destFilter;
        if (passengerCount) params.travelers = passengerCount;

        const res = await apiService.getTransportation(params);
        if (res && res.data) {
          setTransportList(res.data);
        }
      } catch (err) {
        console.error("Failed to load transportation:", err);
      } finally {
        setLoading(false);
      }
    }

    loadTransport();
  }, [selectedType, originFilter, destFilter, passengerCount]);

  const transportTypes = [
    { label: "All Modes", value: "" },
    { label: "Flights", value: "FLIGHT" },
    { label: "Trains", value: "TRAIN" },
    { label: "Buses", value: "BUS" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <Badge variant="brand" className="bg-sky-400/20 text-sky-200 border-sky-400/30">
            Smart Transit Engine
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
            Transportation & Routes
          </h1>
          <p className="text-sm text-slate-300">
            Compare verified flights, Indian Railways trains, and intercity bus routes across major Indian destinations with real-time route calculations.
          </p>
        </div>

        {/* Passenger Group Box */}
        <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 space-y-2 text-xs">
          <span className="font-bold text-sky-400 block">Travelers:</span>
          <div className="flex items-center space-x-2">
            <span className="text-slate-300">Group Size:</span>
            <input
              type="number"
              min={MIN_TRAVELERS}
              max={MAX_TRAVELERS}
              value={passengerCount}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                setPassengerCount(isNaN(val) ? MIN_TRAVELERS : Math.min(Math.max(val, MIN_TRAVELERS), MAX_TRAVELERS));
              }}
              className="w-16 px-2 py-1 rounded bg-slate-700 text-white font-bold border border-slate-600 text-center"
            />
            <span className="text-slate-400">traveler{passengerCount > 1 ? "s" : ""} (Max {MAX_TRAVELERS})</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Fares calculate automatically per traveler.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        {transportTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => setSelectedType(type.value)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedType === type.value
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Transportation Grid */}
      {loading ? (
        <LoadingSpinner message="Searching transportation options..." />
      ) : transportList.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <p className="text-slate-500 text-sm">No transportation matches this criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transportList.map((trans) => (
            <TransportCard 
              key={trans.id} 
              transport={trans} 
              passengerCount={passengerCount}
            />
          ))}
        </div>
      )}

    </div>
  );
}
