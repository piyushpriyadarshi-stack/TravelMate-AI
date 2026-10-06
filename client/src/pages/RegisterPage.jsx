// ==================================================
// TravelMate AI - User Registration Page
// Features:
// - Enter Name, Email Address, and Password
// - Two-step Email Verification
// - Direct Google Sign-In
// ==================================================

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  Loader2,
  KeyRound,
  RefreshCw,
  Edit2
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Badge } from "../components/Badge";
import { GoogleSignInButton } from "../components/GoogleSignInButton";

export function RegisterPage() {
  const { register, confirmCognitoSignUp, resendVerificationOtp } = useAuth();
  const navigate = useNavigate();

  // Mode: "form" (enter details) or "verify" (enter 6-digit code from Cognito)
  const [mode, setMode] = useState("form");

  // Form input state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // 6-digit verification code state
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const otpInputRefs = useRef([]);

  // Status & UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Resend cooldown timer
  const [cooldown, setCooldown] = useState(0);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  // Auto-focus first digit input when entering verify mode
  useEffect(() => {
    if (mode === "verify" && otpInputRefs.current[0]) {
      setTimeout(() => {
        otpInputRefs.current[0]?.focus();
      }, 100);
    }
  }, [mode]);

  // ==================================================
  // Step 1: Submit Details -> Initiate Cognito Sign-Up
  // ==================================================
  const handleSubmitDetails = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const trimmedName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!trimmedName) {
      setErrorMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setErrorMessage("Please enter a password.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await register({
        name: trimmedName,
        email: cleanEmail,
        password: password
      });

      setSuccessMessage(res?.message || "Verification code sent! Please check your email.");
      setMode("verify");
      setCooldown(45);
    } catch (err) {
      // If user already exists or other error
      setErrorMessage(err.message || "Failed to create account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==================================================
  // Step 2: Verification Code Input Handlers
  // ==================================================
  const handleOtpChange = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const newOtp = [...otpDigits];
    newOtp[index] = digit;
    setOtpDigits(newOtp);
    if (errorMessage) setErrorMessage("");

    if (digit && index < 5 && otpInputRefs.current[index + 1]) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!otpDigits[index] && index > 0 && otpInputRefs.current[index - 1]) {
        otpInputRefs.current[index - 1].focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text/plain").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;

    const newOtp = [...otpDigits];
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pasted[i] || "";
    }
    setOtpDigits(newOtp);
    if (errorMessage) setErrorMessage("");

    const nextFocus = Math.min(pasted.length, 5);
    otpInputRefs.current[nextFocus]?.focus();
  };

  const handleResendCode = async () => {
    if (cooldown > 0 || isResending) return;

    setIsResending(true);
    setErrorMessage("");
    try {
      const res = await resendVerificationOtp(email.trim().toLowerCase());
      setCooldown(45);
      setSuccessMessage(res?.message || "A fresh verification code has been sent!");
    } catch (err) {
      setErrorMessage(err.message || "Failed to resend code. Please wait a moment.");
    } finally {
      setIsResending(false);
    }
  };

  // ==================================================
  // Step 2: Confirm Verification Code & Authenticate
  // ==================================================
  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const code = otpDigits.join("").trim();
    if (code.length !== 6) {
      setErrorMessage("Please enter the complete 6-digit verification code.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await confirmCognitoSignUp({
        email: email.trim().toLowerCase(),
        code,
        password,
        name: name.trim()
      });

      setSuccessMessage(res?.message || "Account verified successfully! Welcome to TravelMate AI.");
      setTimeout(() => {
        navigate("/profile");
      }, 800);
    } catch (err) {
      setErrorMessage(err.message || "Invalid or expired verification code.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPasswordIncorrect = errorMessage && errorMessage.toLowerCase().includes("password is incorrect");

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-premium space-y-5">
        
        {/* ==================================================
            MODE 1: USER REGISTRATION FORM
            ================================================== */}
        {mode === "form" && (
          <>
            {/* Header */}
            <div className="text-center space-y-1.5">
              <Badge variant="brand">
                Simple & Fast Signup
              </Badge>
              <h2 className="text-2xl font-bold font-display text-slate-900">
                Create Account
              </h2>
              <p className="text-xs text-slate-500">
                Enter your details to get started with TravelMate AI.
              </p>
            </div>

            {/* Error Alert */}
            {errorMessage && (
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3.5 text-xs text-rose-800 space-y-2 animate-fadeIn">
                <div className="flex items-start space-x-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div className="font-semibold leading-relaxed">{errorMessage}</div>
                </div>
                
                {isPasswordIncorrect && (
                  <div className="pl-6.5 pt-1 border-t border-rose-200/60">
                    <Link
                      to={`/forgot-password?email=${encodeURIComponent(email)}`}
                      className="text-sky-700 hover:text-sky-800 font-bold inline-flex items-center space-x-1 hover:underline cursor-pointer"
                    >
                      <KeyRound className="w-3.5 h-3.5 text-sky-600" />
                      <span>Forgot password? Click here to reset it &rarr;</span>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Success Alert */}
            {successMessage && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 text-xs text-emerald-800 flex items-center space-x-2.5 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="font-semibold">{successMessage}</div>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleSubmitDetails} className="space-y-4">
              
              {/* Your Name */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                    placeholder="e.g. Piyush Sharma"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-sky-500 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-sky-500 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    disabled={isSubmitting}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                    placeholder="Minimum 6 characters"
                    className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-sky-500 transition-all disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Must be at least 6 characters</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-sm font-bold shadow-md shadow-sky-500/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
                or
              </span>
              <div className="border-t border-slate-200 w-full" />
            </div>

            {/* Google Sign-In */}
            <GoogleSignInButton
              text="Continue with Google"
              onSuccess={(res) => {
                setSuccessMessage(res?.message || "Connected with Google successfully!");
                setTimeout(() => {
                  navigate("/profile", { replace: true });
                }, 600);
              }}
              onError={(err) => {
                setErrorMessage(err);
              }}
            />

            {/* Footer Link */}
            <div className="text-center pt-2 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                Already have an account?{" "}
                <Link to="/login" className="text-sky-600 hover:text-sky-700 font-bold">
                  Sign In here
                </Link>
              </p>
            </div>
          </>
        )}

        {/* ==================================================
            MODE 2: TRAVELMATE VERIFICATION UI (ENTER 6-DIGIT CODE)
            ================================================== */}
        {mode === "verify" && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Badge variant="brand">Step 2 of 2 • Security Verification</Badge>
              <h2 className="text-2xl font-bold font-display text-slate-900">
                Verify Your Email
              </h2>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Please enter the 6-digit verification code sent to your email to activate your account.
              </p>
            </div>

            {/* Email Capsule with Edit Option */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex items-center justify-between">
              <div className="flex items-center space-x-2.5 overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Verification Code Sent To
                  </div>
                  <div className="text-xs font-bold text-slate-800 truncate">
                    {email}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMode("form");
                  setErrorMessage("");
                }}
                className="flex items-center space-x-1 text-xs font-bold text-sky-600 hover:text-sky-700 bg-white hover:bg-sky-50 border border-slate-200 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <Edit2 className="w-3 h-3" />
                <span>Edit</span>
              </button>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-xs text-rose-800 flex items-start space-x-2.5 animate-fadeIn">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="font-semibold leading-relaxed">{errorMessage}</div>
              </div>
            )}

            {/* Success Message */}
            {successMessage && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-800 flex items-center space-x-2.5 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="font-semibold">{successMessage}</div>
              </div>
            )}

            <form onSubmit={handleVerifySubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2 text-center">
                  Enter 6-Digit Code
                </label>

                <div className="flex items-center justify-center gap-2 sm:gap-3" onPaste={handleOtpPaste}>
                  {otpDigits.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => (otpInputRefs.current[idx] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      disabled={isSubmitting}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(idx, e.key)}
                      className="w-11 h-13 sm:w-12 sm:h-14 text-center text-xl sm:text-2xl font-mono font-extrabold text-slate-900 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-sky-500 focus:bg-white focus:outline-hidden focus:ring-4 focus:ring-sky-100 transition-all disabled:opacity-50"
                    />
                  ))}
                </div>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Verification code sent to your email address
                </p>
              </div>

              {/* Resend Cooldown Counter */}
              <div className="text-center pt-1">
                {cooldown > 0 ? (
                  <div className="inline-flex items-center space-x-1.5 text-xs text-slate-500 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-full font-medium">
                    <RefreshCw className="w-3 h-3 text-slate-400 animate-spin" />
                    <span>
                      Resend code in <strong className="text-slate-800 font-mono">00:{cooldown < 10 ? `0${cooldown}` : cooldown}</strong>
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={isResending}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline flex items-center justify-center mx-auto space-x-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isResending ? "animate-spin" : ""}`} />
                    <span>{isResending ? "Sending code..." : "Resend verification code"}</span>
                  </button>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || otpDigits.join("").length !== 6}
                  className="w-full py-3.5 px-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-sm font-bold shadow-md shadow-sky-500/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Verifying code...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verify & Complete Signup</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMode("form");
                    setErrorMessage("");
                  }}
                  className="w-full py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  &larr; Back to registration details
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
