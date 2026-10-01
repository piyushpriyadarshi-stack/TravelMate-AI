// ==================================================
// TravelMate AI - Razorpay Standard Web Checkout Demo & Test Page
// Allows direct testing of Order Creation, Razorpay Standard Checkout Modal,
// and HMAC-SHA256 Signature Verification.
// ==================================================

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Sparkles,
  Receipt,
  RotateCcw
} from "lucide-react";
import { RazorpayCheckoutButton } from "../components/RazorpayCheckoutButton";
import { Badge } from "../components/Badge";

export function RazorpayCheckoutDemoPage() {
  const [amountRupees, setAmountRupees] = useState("500");
  const [customerName, setCustomerName] = useState("Piyush Sharma");
  const [customerEmail, setCustomerEmail] = useState("traveler@example.com");
  const [customerPhone, setCustomerPhone] = useState("+91 98765 43210");
  const [paymentSuccessData, setPaymentSuccessData] = useState(null);

  const amountInPaise = Math.max(100, Math.round(Number(amountRupees || 1) * 100));

  return (
    <div className="min-h-screen py-10 px-4 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <Link
            to="/"
            className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-sky-600 mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Home
          </Link>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold font-display text-slate-900">
              Razorpay Standard Web Checkout
            </h1>
            <Badge variant="brand">Test Mode Active</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Test Razorpay order creation, checkout modal popup, and HMAC-SHA256 signature verification.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Key: {import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_TiX8NdaG9PQ7IT"}</span>
        </div>
      </div>

      {paymentSuccessData ? (
        /* Success Screen */
        <div className="bg-white rounded-3xl border border-emerald-200 p-8 shadow-premium text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto text-emerald-600">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-display text-slate-900">
              Payment Verified Successfully!
            </h2>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Razorpay cryptographic HMAC-SHA256 signature was verified by the backend.
            </p>
          </div>

          {/* Details Table */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left max-w-lg mx-auto space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Order ID:</span>
              <span className="font-bold text-slate-900">{paymentSuccessData.orderId}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Payment ID:</span>
              <span className="font-bold text-slate-900">{paymentSuccessData.paymentId}</span>
            </div>
            <div className="flex flex-col border-b border-slate-200 pb-2">
              <span className="text-slate-500 mb-1">Cryptographic Signature:</span>
              <span className="font-bold text-slate-800 break-all text-[11px]">
                {paymentSuccessData.signature}
              </span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-slate-500">Status:</span>
              <span className="font-bold text-emerald-600 uppercase">VERIFIED & CONFIRMED</span>
            </div>
          </div>

          <div className="flex justify-center space-x-3 pt-2">
            <button
              onClick={() => setPaymentSuccessData(null)}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Test Another Payment</span>
            </button>
            <Link
              to="/plan-trip"
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book a Real Trip</span>
            </Link>
          </div>
        </div>
      ) : (
        /* Checkout Setup Form */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Controls */}
          <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-premium space-y-5">
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <CreditCard className="w-4 h-4 text-sky-600" />
              <span>Checkout Order Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Amount in INR (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={amountRupees}
                    onChange={(e) => setAmountRupees(e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    placeholder="500"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Equals {amountInPaise} paise (Razorpay standard unit).
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <RazorpayCheckoutButton
                amount={amountInPaise}
                currency="INR"
                receipt={`rcpt_demo_${Date.now()}`}
                customer={{
                  name: customerName,
                  email: customerEmail,
                  contact: customerPhone
                }}
                buttonText={`Pay ₹${Number(amountRupees || 0).toLocaleString("en-IN")} with Razorpay`}
                onSuccess={(data) => {
                  setPaymentSuccessData(data);
                }}
              />
            </div>
          </div>

          {/* Integration Checklist Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-premium space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sky-400">
                <Receipt className="w-5 h-5" />
                <h4 className="font-bold text-sm font-display text-white">Integration Summary</h4>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>SDK: Razorpay Node.js + Web Checkout v1</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Order API: <code className="text-sky-300">POST /api/create-order</code></span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Verification: <code className="text-sky-300">POST /api/verify-payment</code></span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Algorithm: HMAC-SHA256</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Modal dismiss & failed events handled</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-3 border border-slate-700/60 text-[11px] text-slate-400 space-y-1">
              <div className="text-slate-300 font-semibold">Test Cards / UPI</div>
              <div>UPI: <code className="text-sky-300 font-mono">success@razorpay</code></div>
              <div>Cards: Use standard Razorpay test card in modal</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
