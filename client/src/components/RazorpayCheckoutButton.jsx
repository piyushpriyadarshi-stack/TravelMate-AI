// ==================================================
// TravelMate AI - Razorpay Standard Web Checkout Button
// Encapsulates order creation, opening the Razorpay modal,
// handling dismissal and payment failures, and verifying signature.
// ==================================================

import React, { useState } from "react";
import { Loader2, ShieldCheck, AlertCircle } from "lucide-react";
import { apiService } from "../services/api";

export function RazorpayCheckoutButton({
  amount = 50000, // amount in paise (e.g. 50000 paise = ₹500.00)
  currency = "INR",
  receipt,
  notes = {},
  customer = {
    name: "Traveler",
    email: "guest@example.com",
    contact: "+919876543210"
  },
  buttonText = "Pay with Razorpay",
  onSuccess,
  onError,
  onCancel,
  className = "",
  disabled = false
}) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      // 1. Ensure Razorpay script is loaded
      const isLoaded = await loadScript();
      if (!isLoaded || !window.Razorpay) {
        throw new Error("Razorpay Checkout SDK failed to load. Please check your internet connection.");
      }

      // 2. Request backend to create Razorpay Order (POST /api/create-order)
      const orderData = await apiService.createRazorpayOrder({
        amount: Math.round(Number(amount)),
        currency,
        receipt: receipt || `rcpt_${Date.now()}`,
        notes
      });

      if (!orderData || (!orderData.order_id && !orderData.orderId)) {
        throw new Error(orderData?.message || "Failed to create Razorpay order.");
      }

      const orderId = orderData.order_id || orderData.orderId;
      const keyId = orderData.key_id || orderData.keyId || import.meta.env.VITE_RAZORPAY_KEY_ID;

      // 3. Configure Razorpay Standard Checkout Modal Options
      const options = {
        key: keyId,
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "TravelMate AI",
        description: "Official Booking & Travel Services",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=120&q=80",
        order_id: orderId,
        prefill: {
          name: customer.name || "",
          email: customer.email || "",
          contact: customer.contact || ""
        },
        notes: {
          ...(orderData.notes || {}),
          ...notes
        },
        theme: {
          color: "#0284c7" // Brand Sky-600
        },
        // Handler on payment success
        handler: async (response) => {
          try {
            setLoading(true);
            // 4. Send razorpay_order_id, razorpay_payment_id, and razorpay_signature to backend verification
            const verifyRes = await apiService.verifyRazorpayPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });

            if (verifyRes && verifyRes.success) {
              if (onSuccess) {
                onSuccess({
                  orderId: response.razorpay_order_id,
                  paymentId: response.razorpay_payment_id,
                  signature: response.razorpay_signature,
                  verification: verifyRes
                });
              }
            } else {
              throw new Error(verifyRes?.message || "Cryptographic signature verification failed.");
            }
          } catch (vErr) {
            const msg = vErr.message || "Payment verification failed.";
            setErrorMessage(msg);
            if (onError) onError(vErr);
          } finally {
            setLoading(false);
          }
        },
        // Modal dismiss listener (user cancelled)
        modal: {
          ondismiss: () => {
            setLoading(false);
            setErrorMessage("Payment was cancelled. You have not been charged.");
            if (onCancel) onCancel();
          }
        }
      };

      const rzp = new window.Razorpay(options);

      // Handle payment.failed event
      rzp.on("payment.failed", (response) => {
        const failureReason = response.error?.description || response.error?.reason || "Payment was rejected or failed.";
        setErrorMessage(`Payment Failed: ${failureReason}`);
        setLoading(false);
        if (onError) onError(response.error);
      });

      // Open Razorpay Standard Checkout modal
      rzp.open();
    } catch (err) {
      setErrorMessage(err.message || "Failed to initiate payment.");
      setLoading(false);
      if (onError) onError(err);
    }
  };

  return (
    <div className="w-full space-y-2">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={disabled || loading}
        className={
          className ||
          "w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold text-sm shadow-md shadow-sky-500/20 hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
        }
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Processing with Razorpay...</span>
          </>
        ) : (
          <>
            <ShieldCheck className="w-4 h-4" />
            <span>{buttonText}</span>
          </>
        )}
      </button>

      {errorMessage && (
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-800 flex items-start space-x-2 animate-fadeIn">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div className="font-semibold leading-relaxed">{errorMessage}</div>
        </div>
      )}
    </div>
  );
}
