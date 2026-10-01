// ==================================================
// TravelMate AI - Google Identity Services Sign-In Button
// Modern official Google Identity Services (GIS) Web integration.
// Reliable button rendering that never disappears.
// ==================================================

import React, { useEffect, useRef, useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { cognitoService } from "../services/cognito.service";

export function GoogleSignInButton({
  text = "Continue with Google",
  onSuccess,
  onError,
  className = ""
}) {
  const { loginWithGoogle } = useAuth();
  const googleBtnContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [configNotice, setConfigNotice] = useState("");
  const [gisInitialized, setGisInitialized] = useState(false);

  // Read public client ID from Vite environment variable
  const clientId = (import.meta.env.VITE_GOOGLE_CLIENT_ID || "").trim();

  // Handle verified credential returned by Google Identity Services
  const handleCredentialResponse = async (response) => {
    if (!response || !response.credential) {
      if (onError) onError("Google authentication was cancelled or no credential was returned.");
      return;
    }

    setIsLoading(true);
    setConfigNotice("");

    try {
      const result = await loginWithGoogle(response.credential);
      if (onSuccess) {
        onSuccess(result);
      }
    } catch (err) {
      if (onError) {
        onError(err.message || "Failed to authenticate with Google.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize Google Identity Services SDK
  useEffect(() => {
    let intervalId;

    const initGis = () => {
      if (window.google?.accounts?.id && clientId) {
        try {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: handleCredentialResponse,
            auto_select: false,
            cancel_on_tap_outside: true
          });

          setGisInitialized(true);

          // Render Google's native clickable button inside the overlay container
          if (googleBtnContainerRef.current) {
            googleBtnContainerRef.current.innerHTML = "";
            window.google.accounts.id.renderButton(googleBtnContainerRef.current, {
              type: "standard",
              theme: "outline",
              size: "large",
              text: text.toLowerCase().includes("sign up") ? "signup_with" : "continue_with",
              shape: "pill",
              logo_alignment: "left",
              width: 360
            });
          }
        } catch (e) {
          console.warn("Google Identity Services initialization:", e.message);
        }
        return true;
      }
      return false;
    };

    if (!initGis()) {
      intervalId = setInterval(() => {
        if (initGis()) {
          clearInterval(intervalId);
        }
      }, 300);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [clientId, text]);

  // Click handler for fallback or direct button trigger
  const handleManualClick = () => {
    // 1. If Cognito Domain is configured, redirect to Cognito Managed Login Google federation
    const cognitoGoogleUrl = cognitoService.getGoogleLoginUrl();
    if (cognitoGoogleUrl) {
      setIsLoading(true);
      window.location.href = cognitoGoogleUrl;
      return;
    }

    // 2. If Google Client ID is configured, trigger Google prompt
    if (window.google?.accounts?.id && clientId) {
      setIsLoading(true);
      window.google.accounts.id.prompt((notification) => {
        setIsLoading(false);
        if (notification.isNotDisplayed()) {
          const reason = notification.getNotDisplayedReason();
          console.warn("Google prompt not displayed:", reason);
          if (onError && reason === "opt_out_or_no_session") {
            onError("Please sign into your Google account in this browser, or enable third-party cookies.");
          }
        } else if (notification.isSkippedMoment()) {
          console.log("Google prompt skipped.");
        } else if (notification.isDismissedMoment()) {
          if (onError) onError("Google authentication prompt was closed.");
        }
      });
      return;
    }

    // 3. Fallback dev mode authentication
    setIsLoading(true);
    loginWithGoogle("cognito:dev-google-simulated-token")
      .then((res) => {
        if (onSuccess) onSuccess(res);
      })
      .catch((err) => {
        if (onError) onError(err.message || "Failed to authenticate with Google.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={`relative w-full space-y-2 ${className}`}>
      {/* Button Wrapper with Guaranteed Visual Consistency */}
      <div className="relative w-full overflow-hidden rounded-xl">
        {/* Google's official GIS rendered button rendered in overlay */}
        {clientId && (
          <div
            ref={googleBtnContainerRef}
            className="absolute inset-0 w-full h-full opacity-0 z-10 flex items-center justify-center cursor-pointer pointer-events-auto overflow-hidden"
            style={{ transform: "scale(1.2)" }}
          />
        )}

        {/* Always visible TravelMate Branded Google Button */}
        <button
          type="button"
          onClick={handleManualClick}
          disabled={isLoading}
          className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-700 text-sm font-semibold shadow-xs hover:shadow-sm transition-all duration-200 flex items-center justify-center space-x-3 cursor-pointer disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-sky-600" />
              <span>Connecting to Google...</span>
            </>
          ) : (
            <>
              {/* Official Google 'G' Logo SVG */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
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
      </div>

      {/* Helpful configuration prompt ONLY IF clientId is genuinely missing */}
      {configNotice && !clientId && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-[11px] text-amber-800 flex items-start space-x-2 animate-fadeIn">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-tight font-medium">{configNotice}</div>
        </div>
      )}
    </div>
  );
}
