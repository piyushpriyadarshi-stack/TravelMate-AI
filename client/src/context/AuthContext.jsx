// ==================================================
// TravelMate AI - Authentication Context (Stage 2)
// Provides global authentication state, token persistence,
// login/register/logout actions, and current user profile.
// ==================================================

import React, { createContext, useContext, useState, useEffect } from "react";
import { apiService } from "../services/api";
import { cognitoService } from "../services/cognito.service";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("travelmate_token"));
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Restore authenticated session on initial application load
  useEffect(() => {
    async function initAuth() {
      const storedToken = localStorage.getItem("travelmate_token");
      try {
        // Attempt to fetch current user profile via cookie or stored bearer token
        const res = await apiService.getCurrentUser();
        if (res && res.success && res.user) {
          setUser(res.user);
        } else {
          setUser(null);
          localStorage.removeItem("travelmate_token");
          setToken(null);
        }
      } catch (err) {
        // User not logged in or session expired
        setUser(null);
        localStorage.removeItem("travelmate_token");
        setToken(null);
      } finally {
        setIsLoading(false);
      }
    }

    initAuth();
  }, []);

  /**
   * Step 1 of Email Verification: Validates info and sends 6-digit OTP
   */
  const initiateRegistration = async (formData) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      const res = await apiService.sendVerificationOtp(formData);
      return res;
    } catch (err) {
      setAuthError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Step 2 of Email Verification: Submits OTP, creates user, and logs in
   */
  const verifyEmailAndRegister = async ({ email, otp }) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      const res = await apiService.verifyEmailRegister({ email, otp });
      if (res && res.success && res.user) {
        setUser(res.user);
        if (res.token) {
          localStorage.setItem("travelmate_token", res.token);
          setToken(res.token);
        }
        return { success: true, user: res.user, message: res.message };
      } else {
        throw new Error(res?.message || "Verification failed.");
      }
    } catch (err) {
      setAuthError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Resend 6-digit verification code with cooldown
   */
  const resendVerificationOtp = async (email) => {
    try {
      const res = await cognitoService.resendConfirmationCode(email);
      return res;
    } catch (err) {
      throw err;
    }
  };

  /**
   * Forgot Password: Send 6-digit reset OTP via Cognito
   */
  const forgotPasswordSendOtp = async (email) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      const res = await cognitoService.forgotPassword(email);
      return res;
    } catch (err) {
      setAuthError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Forgot Password: Resend reset OTP with cooldown via Cognito
   */
  const forgotPasswordResendOtp = async (email) => {
    try {
      const res = await cognitoService.forgotPassword(email);
      return res;
    } catch (err) {
      throw err;
    }
  };

  /**
   * Forgot Password: Verify 6-digit reset OTP
   */
  const forgotPasswordVerifyOtp = async ({ email, otp }) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      // In Cognito, code verification happens on confirmForgotPassword
      return { success: true, resetToken: otp };
    } catch (err) {
      setAuthError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Forgot Password: Reset to new password via Cognito
   */
  const forgotPasswordReset = async ({ email, resetToken, code, newPassword, confirmPassword }) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      if (confirmPassword && newPassword !== confirmPassword) {
        throw new Error("Passwords do not match.");
      }
      const actualCode = code || resetToken;
      const res = await cognitoService.confirmForgotPassword({ email, code: actualCode, newPassword });
      return res;
    } catch (err) {
      setAuthError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Register a new user in Amazon Cognito (dispatches email verification code)
   */
  const register = async ({ name, email, password, confirmPassword, phone }) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      if (confirmPassword && password !== confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      // Create user in Amazon Cognito User Pool
      const cognitoSignUp = await cognitoService.signUp({ name, email, password, phone });

      return {
        success: true,
        userSub: cognitoSignUp.userSub,
        email: cognitoSignUp.email,
        message: cognitoSignUp.devNotice || "Verification code sent to your email address."
      };
    } catch (err) {
      setAuthError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Confirm Cognito registration code and establish TravelMate authenticated session
   */
  const confirmCognitoSignUp = async ({ email, code, password, name, phone }) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      // 1. Confirm registration in Cognito
      await cognitoService.confirmSignUp({ email, code });

      // 2. Sign in to Cognito using SRP
      const cognitoAuth = await cognitoService.signIn({ email, password });

      // 3. Establish TravelMate session linked to Cognito `sub`
      const res = await apiService.cognitoSession({
        idToken: cognitoAuth.idToken,
        accessToken: cognitoAuth.accessToken,
        name,
        phone
      });

      if (res && res.success && res.user) {
        setUser(res.user);
        if (res.token) {
          localStorage.setItem("travelmate_token", res.token);
          setToken(res.token);
        }
        return { success: true, user: res.user, message: res.message };
      } else {
        throw new Error(res?.message || "Session establishment failed.");
      }
    } catch (err) {
      setAuthError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Log in user with email & password via Amazon Cognito User Pool
   */
  const login = async ({ email, password }) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      // 1. Authenticate against Cognito
      const cognitoAuth = await cognitoService.signIn({ email, password });

      // 2. Establish TravelMate authenticated session from verified Cognito identity
      const res = await apiService.cognitoSession({
        idToken: cognitoAuth.idToken,
        accessToken: cognitoAuth.accessToken
      });

      if (res && res.success && res.user) {
        setUser(res.user);
        if (res.token) {
          localStorage.setItem("travelmate_token", res.token);
          setToken(res.token);
        }
        return { success: true, user: res.user };
      } else {
        throw new Error(res?.message || "Login failed.");
      }
    } catch (err) {
      setAuthError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Google Identity Services / Cognito Federation Authentication
   */
  const loginWithGoogle = async (credential) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      if (typeof credential === "string" && credential.startsWith("cognito:")) {
        const idToken = credential.replace("cognito:", "");
        const sessionRes = await apiService.cognitoSession({ idToken, isGoogle: true });
        if (sessionRes && sessionRes.success) {
          setUser(sessionRes.user);
          if (sessionRes.token) {
            localStorage.setItem("travelmate_token", sessionRes.token);
            setToken(sessionRes.token);
          }
          return sessionRes;
        }
      }

      const res = await apiService.googleLogin(credential);
      if (res && res.success && res.user) {
        setUser(res.user);
        if (res.token) {
          localStorage.setItem("travelmate_token", res.token);
          setToken(res.token);
        }
        return { success: true, user: res.user, message: res.message, isNewUser: res.isNewUser };
      } else {
        throw new Error(res?.message || "Google sign-in failed.");
      }
    } catch (err) {
      setAuthError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Log out user and clear state & cookies
   */
  const logout = async () => {
    setIsLoading(true);
    try {
      cognitoService.signOut();
      await apiService.logoutUser();
    } catch (err) {
      console.warn("Logout API call warning:", err.message);
    } finally {
      localStorage.removeItem("travelmate_token");
      setToken(null);
      setUser(null);
      setIsLoading(false);
    }
  };

  /**
   * Update profile information (name, phone)
   */
  const updateProfile = async (data) => {
    try {
      const res = await apiService.updateUserProfile(data);
      if (res && res.success && res.user) {
        setUser(res.user);
        return { success: true, user: res.user };
      } else {
        throw new Error(res?.message || "Failed to update profile.");
      }
    } catch (err) {
      throw err;
    }
  };

  const value = {
    user,
    token,
    isAuthenticated: !!user,
    isAdmin: user?.role === "ADMIN",
    isLoading,
    authError,
    initiateRegistration,
    verifyEmailAndRegister,
    resendVerificationOtp,
    forgotPasswordSendOtp,
    forgotPasswordResendOtp,
    forgotPasswordVerifyOtp,
    forgotPasswordReset,
    register,
    confirmCognitoSignUp,
    login,
    loginWithGoogle,
    logout,
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
