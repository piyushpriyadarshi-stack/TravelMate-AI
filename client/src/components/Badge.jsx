import React from "react";

export function Badge({ children, variant = "default", className = "" }) {
  const base = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition-colors";
  
  const variants = {
    default: "bg-slate-100 text-slate-700 border border-slate-200",
    brand: "bg-sky-50 text-sky-700 border border-sky-200",
    demo: "bg-amber-50 text-amber-800 border border-amber-300 font-medium",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    luxury: "bg-purple-50 text-purple-700 border border-purple-200",
    coral: "bg-rose-50 text-rose-700 border border-rose-200"
  };

  return (
    <span className={`${base} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
}
