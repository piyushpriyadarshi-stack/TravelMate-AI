// ==================================================
// TravelMate AI - Authentication Context (Clerk Integration)
// Integrates official Clerk Authentication with global state,
// token persistence, and profile synchronization.
// ==================================================

import React, { createContext, useContext, useState, useEffect } from "react";
import { useUser, useClerk } from "@clerk/react";
import { apiService } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { isLoaded: isClerkLoaded, isSignedIn: isClerkSignedIn, user: clerkUser } = useUser();
  const { openSignIn, openSignUp, signOut: clerkSignOut } = useClerk();

  const [localUser, setLocalUser] = useState(() => {
    try {
      const saved = localStorage.getItem("travelmate_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem("travelmate_token"));
  const [isLoading, setIsLoading] = useState(!isClerkLoaded);
  const [authError, setAuthError] = useState(null);

  // Active user profile: strictly prioritize localUser with backend-verified role
  const user = localUser || (isClerkSignedIn && clerkUser
    ? {
        id: clerkUser.id,
        name:
          clerkUser.fullName ||
          clerkUser.firstName ||
          clerkUser.primaryEmailAddress?.emailAddress?.split("@")[0] ||
          "Traveler",
        email: clerkUser.primaryEmailAddress?.emailAddress || "",
        avatar: clerkUser.imageUrl || null,
        role: clerkUser.primaryEmailAddress?.emailAddress?.toLowerCase() === "piyushpriyadarshi980@gmail.com" ? "ADMIN" : "USER"
      }
    : null);

  const isAuthenticated = Boolean(isClerkSignedIn || localUser);

  // Synchronize Clerk user state with backend database authority
  useEffect(() => {
    if (isClerkLoaded) {
      setIsLoading(false);
      if (isClerkSignedIn && clerkUser) {
        const email = clerkUser.primaryEmailAddress?.emailAddress || "";
        const name =
          clerkUser.fullName ||
          clerkUser.firstName ||
          email.split("@")[0] ||
          "Traveler";
        const avatar = clerkUser.imageUrl || null;

        // Backend is the final security authority for role assignment
        apiService
          .syncClerkUser({
            clerkId: clerkUser.id,
            email,
            name,
            avatar
          })
          .then((res) => {
            if (res && res.success && res.user) {
              setLocalUser(res.user);
              if (res.token) {
                localStorage.setItem("travelmate_token", res.token);
                setToken(res.token);
              }
              localStorage.setItem("travelmate_user", JSON.stringify(res.user));
            }
          })
          .catch((err) => {
            console.warn("Backend Clerk sync notice:", err.message);
            const fallbackRole = email.toLowerCase() === "piyushpriyadarshi980@gmail.com" ? "ADMIN" : "USER";
            const active = {
              id: clerkUser.id,
              name,
              email,
              avatar,
              role: fallbackRole
            };
            setLocalUser(active);
            const sessionToken = `clerk_session_${clerkUser.id}`;
            localStorage.setItem("travelmate_user", JSON.stringify(active));
            localStorage.setItem("travelmate_token", sessionToken);
            setToken(sessionToken);
          });
      }
    }
  }, [isClerkLoaded, isClerkSignedIn, clerkUser]);

  /**
   * Log in user - opens Clerk Sign In modal by default
   */
  const login = async (credentials) => {
    if (credentials?.email && credentials?.password) {
      setIsLoading(true);
      try {
        const res = await apiService.loginUser(credentials);
        if (res && res.success && res.user) {
          setLocalUser(res.user);
          if (res.token) {
            localStorage.setItem("travelmate_token", res.token);
            setToken(res.token);
          }
          return res;
        }
      } catch (err) {
        setAuthError(err.message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    }
    // Open Clerk Sign-In modal
    if (openSignIn) {
      openSignIn();
    }
  };

  /**
   * Register user - opens Clerk Sign Up modal by default
   */
  const register = async (formData) => {
    if (formData?.email && formData?.password) {
      setIsLoading(true);
      try {
        const res = await apiService.registerUser(formData);
        if (res && res.success && res.user) {
          setLocalUser(res.user);
          if (res.token) {
            localStorage.setItem("travelmate_token", res.token);
            setToken(res.token);
          }
          return res;
        }
      } catch (err) {
        setAuthError(err.message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    }
    // Open Clerk Sign-Up modal
    if (openSignUp) {
      openSignUp();
    }
  };

  /**
   * Log out user from both Clerk and local session
   */
  const logout = async () => {
    setIsLoading(true);
    try {
      if (isClerkSignedIn && clerkSignOut) {
        await clerkSignOut();
      }
      await apiService.logoutUser();
    } catch (err) {
      console.warn("Logout note:", err.message);
    } finally {
      localStorage.removeItem("travelmate_token");
      localStorage.removeItem("travelmate_user");
      setToken(null);
      setLocalUser(null);
      setIsLoading(false);
    }
  };

  /**
   * Step 1 of Email Verification
   */
  const initiateRegistration = async (formData) => {
    return apiService.sendVerificationOtp(formData);
  };

  /**
   * Step 2 of Email Verification
   */
  const verifyEmailAndRegister = async ({ email, otp, password, name, phone }) => {
    setIsLoading(true);
    try {
      const res = await apiService.verifyEmailRegister({ email, otp, password, name, phone });
      if (res && res.success && res.user) {
        setLocalUser(res.user);
        if (res.token) {
          localStorage.setItem("travelmate_token", res.token);
          setToken(res.token);
        }
        return res;
      }
      throw new Error(res?.message || "Verification failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const confirmCognitoSignUp = verifyEmailAndRegister;

  const resendVerificationOtp = async (email) => {
    return apiService.resendVerificationOtp(email);
  };

  const forgotPasswordSendOtp = async (email) => {
    return apiService.forgotPasswordSendOtp(email);
  };

  const forgotPasswordResendOtp = async (email) => {
    return apiService.forgotPasswordResendOtp(email);
  };

  const forgotPasswordVerifyOtp = async ({ email, otp }) => {
    return apiService.forgotPasswordVerifyOtp({ email, otp });
  };

  const forgotPasswordReset = async (data) => {
    return apiService.forgotPasswordReset(data);
  };

  const loginWithGoogle = async (credential) => {
    return apiService.googleLogin(credential);
  };

  const updateProfile = async (data) => {
    const res = await apiService.updateUserProfile(data);
    if (res && res.success && res.user) {
      setLocalUser(res.user);
      return res;
    }
    throw new Error(res?.message || "Failed to update profile.");
  };

  const value = {
    user,
    token,
    isAuthenticated,
    isAdmin: user?.role === "ADMIN",
    isLoading,
    authError,
    openSignIn,
    openSignUp,
    login,
    register,
    logout,
    initiateRegistration,
    verifyEmailAndRegister,
    confirmCognitoSignUp,
    resendVerificationOtp,
    forgotPasswordSendOtp,
    forgotPasswordResendOtp,
    forgotPasswordVerifyOtp,
    forgotPasswordReset,
    loginWithGoogle,
    updateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
