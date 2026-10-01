// ==================================================
// TravelMate AI - Cognito OAuth / Google Federation Callback
// Handles redirect from Amazon Cognito Managed Login / Google IdP.
// Exchanges authorization code for Cognito tokens, verifies identity,
// establishes TravelMate session, and redirects to dashboard.
// ==================================================

import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { apiService } from "../services/api";
import { useAuth } from "../context/AuthContext";

export function AuthCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();

  const [status, setStatus] = useState("processing"); // "processing", "success", "error"
  const [message, setMessage] = useState("Finalizing authentication with Amazon Cognito...");
  const processedRef = useRef(false);

  useEffect(() => {
    if (processedRef.current) return;
    processedRef.current = true;

    async function handleCallback() {
      const code = searchParams.get("code");
      const error = searchParams.get("error");
      const errorDescription = searchParams.get("error_description");

      if (error) {
        setStatus("error");
        setMessage(errorDescription || error || "Authentication with Amazon Cognito was cancelled.");
        return;
      }

      if (!code) {
        setStatus("error");
        setMessage("No authorization code found in callback query.");
        return;
      }

      try {
        const redirectUri = `${window.location.origin}/auth/callback`;
        const res = await apiService.cognitoExchangeOAuth({
          code,
          redirectUri
        });

        if (res && res.success) {
          setStatus("success");
          setMessage(res.message || "Successfully authenticated! Redirecting to your dashboard...");
          if (res.token) {
            localStorage.setItem("travelmate_token", res.token);
          }
          setTimeout(() => {
            window.location.href = "/profile";
          }, 600);
        } else {
          throw new Error(res?.message || "Failed to finalize Cognito session.");
        }
      } catch (err) {
        console.error("Cognito callback processing error:", err);
        setStatus("error");
        setMessage(err.message || "Failed to exchange authorization code with Amazon Cognito.");
      }
    }

    handleCallback();
  }, [searchParams]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-slate-200 shadow-premium text-center space-y-5">
        
        {status === "processing" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
            <h2 className="text-xl font-bold font-display text-slate-900">
              Verifying Authentication
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {message}
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold font-display text-slate-900">
              Authentication Successful
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {message}
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold font-display text-slate-900">
              Authentication Failed
            </h2>
            <p className="text-xs text-rose-700 bg-rose-50 border border-rose-200 p-3 rounded-xl leading-relaxed">
              {message}
            </p>
            <div className="pt-2">
              <Link
                to="/login"
                className="inline-block py-2.5 px-6 rounded-xl text-white bg-sky-600 hover:bg-sky-500 text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                Return to Login
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
