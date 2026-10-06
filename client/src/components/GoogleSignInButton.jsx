// ==================================================
// TravelMate AI - Google Sign-In via AWS Cognito Federation
// Redirects user to AWS Cognito Managed Login (/oauth2/authorize?identity_provider=Google).
// Ensures button is always visible, responsive, and displays clear developer configuration errors.
// ==================================================

import React, { useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { cognitoService } from "../services/cognito.service";

export function GoogleSignInButton({
  text = "Continue with Google",
  onSuccess,
  onError,
  className = ""
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [configError, setConfigError] = useState("");

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setConfigError("");

    try {
      // 1. Generate standard AWS Cognito OAuth 2.0 Google federation URL
      const cognitoGoogleUrl = cognitoService.getGoogleLoginUrl();

      if (!cognitoGoogleUrl) {
        setIsLoading(false);
        const err = "AWS Cognito Domain or App Client ID is missing. Please check your environment variables.";
        setConfigError(err);
        if (onError) onError(err);
        return;
      }

      // 2. Redirect to AWS Cognito Hosted UI with identity_provider=Google
      window.location.href = cognitoGoogleUrl;
    } catch (err) {
      setIsLoading(false);
      const msg = err.message || "Failed to initiate Google Sign-In with Amazon Cognito.";
      setConfigError(msg);
      if (onError) onError(msg);
    }
  };

  return (
    <div className={`relative w-full space-y-2 ${className}`}>
      {/* TravelMate Branded Google Button - Always Visible and Clickable */}
      <button
        id="google-signin-btn"
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-700 text-sm font-semibold shadow-xs hover:shadow-sm transition-all duration-200 flex items-center justify-center space-x-3 cursor-pointer disabled:opacity-60"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-sky-600" />
            <span>Redirecting to Google via AWS Cognito...</span>
          </>
        ) : (
          <>
            {/* Official Google 'G' Logo SVG */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.26-2.09 3.67-5.17 3.67-9.15z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.26v3.15C3.27 21.36 7.34 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.26C.46 8.21 0 10.05 0 12s.46 3.79 1.26 5.39l4.01-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.64 1.26 6.61l4.01 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
              />
            </svg>
            <span>{text}</span>
          </>
        )}
      </button>

      {/* Developer Configuration Error Banner (only shown if configuration is genuinely missing/broken) */}
      {configError && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-[11px] text-amber-800 flex items-start space-x-2 animate-fadeIn">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-tight font-medium">{configError}</div>
        </div>
      )}
    </div>
  );
}
