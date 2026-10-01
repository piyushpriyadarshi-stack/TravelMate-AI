// ==================================================
// TravelMate AI - Amazon Cognito Service (Frontend)
// Manages Cognito User Pool authentication, SRP password authentication,
// email verification, forgot password, and Google federation.
// ==================================================

import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";

class CognitoFrontendService {
  constructor() {
    this.region = import.meta.env.VITE_COGNITO_REGION || "us-east-1";
    this.userPoolId = import.meta.env.VITE_COGNITO_USER_POOL_ID || "";
    this.clientId = import.meta.env.VITE_COGNITO_CLIENT_ID || "";
    this.domain = import.meta.env.VITE_COGNITO_DOMAIN || "";

    this.userPool = null;
    this.initPool();
  }

  initPool() {
    this.region = import.meta.env.VITE_COGNITO_REGION || "us-east-1";
    this.userPoolId = import.meta.env.VITE_COGNITO_USER_POOL_ID || "";
    this.clientId = import.meta.env.VITE_COGNITO_CLIENT_ID || "";
    this.domain = import.meta.env.VITE_COGNITO_DOMAIN || "";

    if (this.isConfigured()) {
      try {
        this.userPool = new CognitoUserPool({
          UserPoolId: this.userPoolId,
          ClientId: this.clientId
        });
      } catch (err) {
        console.warn("CognitoUserPool initialization error:", err.message);
      }
    }
  }

  isConfigured() {
    return Boolean(
      this.userPoolId &&
      this.clientId &&
      !this.userPoolId.includes("placeholder") &&
      !this.userPoolId.includes("example")
    );
  }

  getCognitoUser(email) {
    if (!this.userPool) this.initPool();
    if (!this.userPool) return null;
    return new CognitoUser({
      Username: (email || "").trim().toLowerCase(),
      Pool: this.userPool
    });
  }

  /**
   * Helper to generate a dev simulation JWT when live AWS keys are pending.
   */
  _createDevCognitoToken({ sub, email, name, phone }) {
    const header = btoa(JSON.stringify({ alg: "RS256", kid: "dev-sim-kid" }))
      .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    const payload = btoa(JSON.stringify({
      sub: sub || `cognito-sub-${Date.now()}`,
      email: email || "traveler@example.com",
      name: name || (email ? email.split("@")[0] : "Traveler"),
      phone_number: phone || null,
      "cognito:username": email || "traveler",
      email_verified: true,
      token_use: "id",
      iss: `https://cognito-idp.${this.region}.amazonaws.com/${this.userPoolId || "us-east-1_travelmate"}`,
      aud: this.clientId || "travelmate_client",
      auth_time: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 7 * 24 * 3600
    })).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    return `${header}.${payload}.dev_sim_signature`;
  }

  /**
   * Step 1: Sign up a new user with Cognito User Pool.
   * Cognito dispatches the 6-digit email verification code.
   */
  async signUp({ name, email, password, phone }) {
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanName = (name || "").trim();
    const cleanPhone = (phone || "").trim();

    // 1. Live AWS Cognito User Pool
    if (this.isConfigured() && this.userPool) {
      return new Promise((resolve, reject) => {
        const attributeList = [
          new CognitoUserAttribute({ Name: "email", Value: cleanEmail })
        ];

        if (cleanName) {
          attributeList.push(new CognitoUserAttribute({ Name: "name", Value: cleanName }));
        }

        if (cleanPhone) {
          // Format phone to E.164 if possible
          const formattedPhone = cleanPhone.startsWith("+") ? cleanPhone : `+91${cleanPhone.replace(/\D/g, "")}`;
          attributeList.push(new CognitoUserAttribute({ Name: "phone_number", Value: formattedPhone }));
        }

        this.userPool.signUp(cleanEmail, password, attributeList, null, (err, result) => {
          if (err) {
            return reject(new Error(err.message || "Cognito user registration failed."));
          }
          resolve({
            success: true,
            userConfirmed: result.userConfirmed,
            userSub: result.userSub,
            email: cleanEmail
          });
        });
      });
    }

    // 2. Dev Simulator fallback (when User Pool ID not yet deployed to .env)
    const simulatedSub = `cognito-sub-${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    sessionStorage.setItem(`cognito_sim_code_${cleanEmail}`, "123456");
    sessionStorage.setItem(`cognito_sim_sub_${cleanEmail}`, simulatedSub);
    sessionStorage.setItem(`cognito_sim_name_${cleanEmail}`, cleanName);
    sessionStorage.setItem(`cognito_sim_phone_${cleanEmail}`, cleanPhone);
    sessionStorage.setItem(`cognito_sim_pwd_${cleanEmail}`, password);

    return {
      success: true,
      userConfirmed: false,
      userSub: simulatedSub,
      email: cleanEmail,
      devNotice: "Running in Cognito Development Mode. Verification code is 123456."
    };
  }

  /**
   * Step 2: Confirm sign up using Cognito's 6-digit verification code.
   */
  async confirmSignUp({ email, code }) {
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanCode = (code || "").trim();

    if (this.isConfigured() && this.userPool) {
      const cognitoUser = this.getCognitoUser(cleanEmail);
      if (!cognitoUser) throw new Error("Cognito user pool not initialized.");

      return new Promise((resolve, reject) => {
        cognitoUser.confirmRegistration(cleanCode, true, (err, result) => {
          if (err) {
            return reject(new Error(err.message || "Invalid or expired verification code."));
          }
          resolve({ success: true, result });
        });
      });
    }

    // Dev Simulator fallback
    const expected = sessionStorage.getItem(`cognito_sim_code_${cleanEmail}`) || "123456";
    if (cleanCode !== expected && cleanCode !== "123456") {
      throw new Error("Invalid verification code. Please check your email or use 123456.");
    }
    return { success: true };
  }

  /**
   * Resend confirmation code to user's email.
   */
  async resendConfirmationCode(email) {
    const cleanEmail = (email || "").trim().toLowerCase();

    if (this.isConfigured() && this.userPool) {
      const cognitoUser = this.getCognitoUser(cleanEmail);
      if (!cognitoUser) throw new Error("Cognito user pool not initialized.");

      return new Promise((resolve, reject) => {
        cognitoUser.resendConfirmationCode((err, result) => {
          if (err) {
            return reject(new Error(err.message || "Failed to resend verification code."));
          }
          resolve({ success: true, result, message: "A new verification code was sent to your email." });
        });
      });
    }

    // Dev Simulator fallback
    sessionStorage.setItem(`cognito_sim_code_${cleanEmail}`, "123456");
    return { success: true, message: "A fresh verification code (123456) was sent to your email." };
  }

  /**
   * Authenticate user with Cognito using SRP (Secure Remote Password).
   * Returns JWT tokens (idToken, accessToken, refreshToken).
   */
  async signIn({ email, password }) {
    const cleanEmail = (email || "").trim().toLowerCase();

    if (this.isConfigured() && this.userPool) {
      const cognitoUser = this.getCognitoUser(cleanEmail);
      if (!cognitoUser) throw new Error("Cognito user pool not initialized.");

      const authDetails = new AuthenticationDetails({
        Username: cleanEmail,
        Password: password
      });

      return new Promise((resolve, reject) => {
        cognitoUser.authenticateUser(authDetails, {
          onSuccess: (session) => {
            const idToken = session.getIdToken().getJwtToken();
            const accessToken = session.getAccessToken().getJwtToken();
            const refreshToken = session.getRefreshToken().getToken();
            const payload = session.getIdToken().decodePayload();

            resolve({
              success: true,
              idToken,
              accessToken,
              refreshToken,
              sub: payload.sub,
              email: payload.email || cleanEmail,
              name: payload.name || cleanEmail.split("@")[0]
            });
          },
          onFailure: (err) => {
            if (err.code === "UserNotConfirmedException") {
              const notConfirmedErr = new Error("Please verify your email address before logging in.");
              notConfirmedErr.code = "UserNotConfirmedException";
              return reject(notConfirmedErr);
            }
            if (err.code === "NotAuthorizedException") {
              return reject(new Error("Password is incorrect."));
            }
            if (err.code === "UserNotFoundException") {
              return reject(new Error("Email or password is incorrect."));
            }
            reject(new Error(err.message || "Failed to authenticate with Amazon Cognito."));
          }
        });
      });
    }

    // Dev Simulator fallback
    const savedPwd = sessionStorage.getItem(`cognito_sim_pwd_${cleanEmail}`);
    if (savedPwd && savedPwd !== password) {
      throw new Error("Password is incorrect.");
    }
    const sub = sessionStorage.getItem(`cognito_sim_sub_${cleanEmail}`) || `cognito-sub-${Date.now()}`;
    const name = sessionStorage.getItem(`cognito_sim_name_${cleanEmail}`) || cleanEmail.split("@")[0];
    const phone = sessionStorage.getItem(`cognito_sim_phone_${cleanEmail}`) || null;

    const idToken = this._createDevCognitoToken({ sub, email: cleanEmail, name, phone });

    return {
      success: true,
      idToken,
      accessToken: idToken,
      refreshToken: "dev_refresh_token",
      sub,
      email: cleanEmail,
      name
    };
  }

  /**
   * Forgot Password Step 1: Send reset code.
   */
  async forgotPassword(email) {
    const cleanEmail = (email || "").trim().toLowerCase();

    if (this.isConfigured() && this.userPool) {
      const cognitoUser = this.getCognitoUser(cleanEmail);
      if (!cognitoUser) throw new Error("Cognito user pool not initialized.");

      return new Promise((resolve, reject) => {
        cognitoUser.forgotPassword({
          onSuccess: (data) => {
            resolve({ success: true, data });
          },
          onFailure: (err) => {
            reject(new Error(err.message || "Failed to send password reset code."));
          }
        });
      });
    }

    // Dev Simulator fallback
    sessionStorage.setItem(`cognito_reset_code_${cleanEmail}`, "123456");
    return { success: true, message: "A password reset code (123456) was sent to your email." };
  }

  /**
   * Forgot Password Step 2: Confirm new password with reset code.
   */
  async confirmForgotPassword({ email, code, newPassword }) {
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanCode = (code || "").trim();

    if (this.isConfigured() && this.userPool) {
      const cognitoUser = this.getCognitoUser(cleanEmail);
      if (!cognitoUser) throw new Error("Cognito user pool not initialized.");

      return new Promise((resolve, reject) => {
        cognitoUser.confirmPassword(cleanCode, newPassword, {
          onSuccess: () => {
            resolve({ success: true, message: "Password updated successfully in Amazon Cognito." });
          },
          onFailure: (err) => {
            reject(new Error(err.message || "Invalid or expired reset code."));
          }
        });
      });
    }

    // Dev Simulator fallback
    const expected = sessionStorage.getItem(`cognito_reset_code_${cleanEmail}`) || "123456";
    if (cleanCode !== expected && cleanCode !== "123456") {
      throw new Error("Invalid password reset code.");
    }
    sessionStorage.setItem(`cognito_sim_pwd_${cleanEmail}`, newPassword);
    return { success: true, message: "Password updated successfully." };
  }

  /**
   * Build Cognito Managed Login URL for Google federation.
   */
  getGoogleLoginUrl() {
    const callbackUrl = `${window.location.origin}/auth/callback`;
    if (this.domain) {
      return `https://${this.domain}/oauth2/authorize?identity_provider=Google&response_type=code&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(callbackUrl)}&scope=email+openid+profile`;
    }
    return null;
  }

  /**
   * Sign out current Cognito user.
   */
  signOut() {
    if (this.userPool) {
      const cognitoUser = this.userPool.getCurrentUser();
      if (cognitoUser) {
        cognitoUser.signOut();
      }
    }
    localStorage.removeItem("cognito_id_token");
    localStorage.removeItem("cognito_access_token");
  }
}

export const cognitoService = new CognitoFrontendService();
