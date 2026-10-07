// ==================================================
// TravelMate AI - Authentication Controller (Stage 2)
// Clean handling for registration, login, logout, and profile
// ==================================================

const authService = require("../services/auth.service");
const cognitoService = require("../services/cognito.service");

// Standard cookie options
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
};

class AuthController {
  /**
   * POST /api/auth/register/send-otp
   * Step 1: Validates registration inputs and dispatches 6-digit OTP verification code.
   */
  async initiateRegistration(req, res) {
    try {
      let { name, email, password, confirmPassword, phone } = req.body;

      if (!email || !email.trim()) {
        return res.status(400).json({
          success: false,
          message: "Please enter a valid email address."
        });
      }

      if (!name || !name.trim()) {
        const prefix = email.trim().split("@")[0].replace(/[._-]/g, " ");
        name = prefix.charAt(0).toUpperCase() + prefix.slice(1);
      }

      if (!password) {
        return res.status(400).json({
          success: false,
          message: "Please enter a password."
        });
      }

      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 6 characters long."
        });
      }

      if (confirmPassword !== undefined && password !== confirmPassword) {
        return res.status(400).json({
          success: false,
          message: "Passwords do not match."
        });
      }

      const result = await authService.initiateRegistration({
        name,
        email,
        password,
        confirmPassword,
        phone
      });

      return res.status(200).json({
        success: true,
        message: result.message,
        email: result.email,
        expiresMinutes: result.expiresMinutes,
        devOtp: result.devOtp
      });
    } catch (error) {
      const isExpected = error.message.includes("already exists") ||
                         error.message.includes("valid email") ||
                         error.message.includes("Password") ||
                         error.message.includes("wait") ||
                         error.message.includes("name");

      return res.status(isExpected ? 400 : 500).json({
        success: false,
        message: error.message || "Failed to initiate registration."
      });
    }
  }

  /**
   * POST /api/auth/register/verify-otp
   * Step 2: Validates OTP code, marks email verified, creates user, and issues session.
   */
  async verifyEmailAndRegister(req, res) {
    try {
      const { email, otp } = req.body;

      if (!email || !email.trim()) {
        return res.status(400).json({
          success: false,
          message: "Email address is required."
        });
      }

      if (!otp || !otp.toString().trim()) {
        return res.status(400).json({
          success: false,
          message: "Please enter the 6-digit verification code."
        });
      }

      const { user, token, message } = await authService.verifyEmailAndRegister({
        email,
        otp
      });

      // Set secure HTTP-only cookie
      res.cookie("token", token, COOKIE_OPTIONS);

      return res.status(201).json({
        success: true,
        message: message || "Email verified and registration complete! Welcome to TravelMate AI.",
        user,
        token
      });
    } catch (error) {
      const isExpected = error.message.includes("Invalid verification code") ||
                         error.message.includes("expired") ||
                         error.message.includes("pending") ||
                         error.message.includes("Too many") ||
                         error.message.includes("required");

      return res.status(isExpected ? 400 : 500).json({
        success: false,
        message: error.message || "Failed to verify email code."
      });
    }
  }

  /**
   * POST /api/auth/register/resend-otp
   * Resends verification code with cooldown rate-limiting.
   */
  async resendVerificationOtp(req, res) {
    try {
      const { email } = req.body;

      if (!email || !email.trim()) {
        return res.status(400).json({
          success: false,
          message: "Email address is required."
        });
      }

      const result = await authService.resendVerificationOtp(email);

      return res.status(200).json({
        success: true,
        message: result.message,
        expiresMinutes: result.expiresMinutes,
        devOtp: result.devOtp
      });
    } catch (error) {
      const isExpected = error.message.includes("wait") ||
                         error.message.includes("pending") ||
                         error.message.includes("required");

      return res.status(isExpected ? 400 : 500).json({
        success: false,
        message: error.message || "Failed to resend verification code."
      });
    }
  }

  /**
   * POST /api/auth/forgot-password/send-otp
   * Initiates password reset by sending a 6-digit OTP code to verified account email.
   */
  async forgotPasswordSendOtp(req, res) {
    try {
      const { email } = req.body;
      if (!email || !email.trim()) {
        return res.status(400).json({
          success: false,
          message: "Please enter your email address."
        });
      }

      const result = await authService.initiatePasswordReset(email);

      return res.status(200).json({
        success: true,
        message: result.message
      });
    } catch (error) {
      const isExpected = error.message.includes("No account found") ||
                         error.message.includes("valid email") ||
                         error.message.includes("wait") ||
                         error.message.includes("email address");

      return res.status(isExpected ? 400 : 500).json({
        success: false,
        message: error.message || "Failed to send password reset code."
      });
    }
  }

  /**
   * POST /api/auth/forgot-password/resend-otp
   * Resends password reset code with rate-limit cooldown.
   */
  async forgotPasswordResendOtp(req, res) {
    try {
      const { email } = req.body;
      if (!email || !email.trim()) {
        return res.status(400).json({
          success: false,
          message: "Email address is required."
        });
      }

      const result = await authService.resendPasswordResetOtp(email);

      return res.status(200).json({
        success: true,
        message: result.message
      });
    } catch (error) {
      const isExpected = error.message.includes("wait") ||
                         error.message.includes("No password reset request") ||
                         error.message.includes("required");

      return res.status(isExpected ? 400 : 500).json({
        success: false,
        message: error.message || "Failed to resend password reset code."
      });
    }
  }

  /**
   * POST /api/auth/forgot-password/verify-otp
   * Verifies 6-digit password reset OTP and generates single-use resetToken.
   */
  async forgotPasswordVerifyOtp(req, res) {
    try {
      const { email, otp } = req.body;
      if (!email || !email.trim()) {
        return res.status(400).json({
          success: false,
          message: "Email address is required."
        });
      }
      if (!otp || !otp.toString().trim()) {
        return res.status(400).json({
          success: false,
          message: "Please enter the 6-digit verification code."
        });
      }

      const result = await authService.verifyPasswordResetOtp({ email, otp });

      return res.status(200).json({
        success: true,
        message: result.message,
        resetToken: result.resetToken
      });
    } catch (error) {
      const isExpected = error.message.includes("Invalid verification code") ||
                         error.message.includes("expired") ||
                         error.message.includes("No password reset request") ||
                         error.message.includes("Too many") ||
                         error.message.includes("required");

      return res.status(isExpected ? 400 : 500).json({
        success: false,
        message: error.message || "Failed to verify reset code."
      });
    }
  }

  /**
   * POST /api/auth/forgot-password/reset-password
   * Sets new password using verified resetToken.
   */
  async forgotPasswordReset(req, res) {
    try {
      const { email, resetToken, newPassword, confirmPassword } = req.body;

      if (!email || !email.trim()) {
        return res.status(400).json({
          success: false,
          message: "Email address is required."
        });
      }

      if (!resetToken) {
        return res.status(400).json({
          success: false,
          message: "Reset authorization token is missing or invalid. Please verify your code again."
        });
      }

      const result = await authService.resetPassword({
        email,
        resetToken,
        newPassword,
        confirmPassword
      });

      return res.status(200).json({
        success: true,
        message: result.message
      });
    } catch (error) {
      const isExpected = error.message.includes("match") ||
                         error.message.includes("requirements") ||
                         error.message.includes("Invalid or expired") ||
                         error.message.includes("User not found");

      return res.status(isExpected ? 400 : 500).json({
        success: false,
        message: error.message || "Failed to reset password."
      });
    }
  }

  /**
   * POST /api/auth/register
   * Registers a new user account directly (backward-compatible fallback).
   */
  async register(req, res) {
    try {
      const { name, email, password, confirmPassword, phone } = req.body;

      if (!name || !name.trim()) {
        return res.status(400).json({
          success: false,
          message: "Please enter your name."
        });
      }

      if (!email || !email.trim()) {
        return res.status(400).json({
          success: false,
          message: "Please enter a valid email address."
        });
      }

      if (!password) {
        return res.status(400).json({
          success: false,
          message: "Please enter a password."
        });
      }

      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 6 characters long."
        });
      }

      if (confirmPassword !== undefined && password !== confirmPassword) {
        return res.status(400).json({
          success: false,
          message: "Passwords do not match."
        });
      }

      const result = await authService.register({
        name,
        email,
        password,
        phone
      });

      // Set secure HTTP-only cookie
      res.cookie("token", result.token, COOKIE_OPTIONS);

      return res.status(201).json({
        success: true,
        message: result.message || "Registration successful! Welcome to TravelMate AI.",
        user: result.user,
        token: result.token
      });
    } catch (error) {
      const isExpectedError = error.message.includes("already exists") ||
                              error.message.includes("valid email") ||
                              error.message.includes("Password is incorrect") ||
                              error.message.includes("Password") ||
                              error.message.includes("password") ||
                              error.message.includes("phone") ||
                              error.message.includes("name");

      return res.status(isExpectedError ? 400 : 500).json({
        success: false,
        message: error.message || "An unexpected error occurred during registration."
      });
    }
  }

  /**
   * POST /api/auth/login
   * Authenticates user credentials and issues session token.
   * Requirement 31 & 37:
   * - Email exists, wrong password: "Password is incorrect."
   * - Email does not exist: "Email or password is incorrect."
   */
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !email.trim() || !password) {
        return res.status(400).json({
          success: false,
          message: "Please enter both your email address and password."
        });
      }

      const { user, token } = await authService.login({ email, password });

      // Set secure HTTP-only cookie
      res.cookie("token", token, COOKIE_OPTIONS);

      return res.status(200).json({
        success: true,
        message: `Welcome back, ${user.name}!`,
        user,
        token
      });
    } catch (error) {
      // 401 for authentication credential failures, 500 for unexpected errors
      const isAuthError = error.message.includes("Password is incorrect") ||
                          error.message.includes("Email or password is incorrect") ||
                          error.message.includes("Invalid email or password");

      return res.status(isAuthError ? 401 : 500).json({
        success: false,
        message: error.message || "An unexpected error occurred while logging in."
      });
    }
  }

  /**
   * POST /api/auth/logout
   * Destroys the authenticated session by clearing the cookie.
   */
  async logout(req, res) {
    try {
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
      });

      return res.status(200).json({
        success: true,
        message: "Logged out successfully."
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to log out. Please try again."
      });
    }
  }

  /**
   * GET /api/auth/me
   * Returns current authenticated user's profile.
   */
  async getMe(req, res) {
    try {
      return res.status(200).json({
        success: true,
        user: req.user
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve profile information."
      });
    }
  }

  /**
   * PUT /api/auth/profile
   * Updates user profile details (name, phone) for authenticated user.
   */
  async updateProfile(req, res) {
    try {
      const { name, phone } = req.body;

      if (!name || !name.trim()) {
        return res.status(400).json({
          success: false,
          message: "Name cannot be empty."
        });
      }

      const updatedUser = await authService.updateProfile(req.user.id, {
        name,
        phone
      });

      return res.status(200).json({
        success: true,
        message: "Profile updated successfully.",
        user: updatedUser
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message || "Failed to update profile."
      });
    }
  }

  /**
   * GET /api/auth/admin-check
   * Verifies administrator authorization.
   */
  async checkAdmin(req, res) {
    return res.status(200).json({
      success: true,
      message: "Admin authorization verified. You have access to administrative features.",
      user: req.user
    });
  }

  /**
   * POST /api/auth/google
   * Authenticates user using Google Identity Services (GIS) ID token.
   * Cryptographically verifies credential on backend and links or creates TravelMate account.
   */
  async googleLogin(req, res) {
    try {
      const { credential } = req.body;

      if (!credential || typeof credential !== "string" || !credential.trim()) {
        return res.status(400).json({
          success: false,
          message: "Google credential is required."
        });
      }

      const result = await authService.loginWithGoogle({ credential });

      // Set secure HTTP-only cookie
      res.cookie("token", result.token, COOKIE_OPTIONS);

      return res.status(200).json({
        success: true,
        message: result.message,
        user: result.user,
        token: result.token,
        isNewUser: result.isNewUser
      });
    } catch (error) {
      const isExpected = error.message.includes("Google") ||
                         error.message.includes("credential") ||
                         error.message.includes("linked") ||
                         error.message.includes("verified");

      return res.status(isExpected ? 400 : 500).json({
        success: false,
        message: error.message || "Failed to authenticate with Google."
      });
    }
  }

  /**
   * GET /api/auth/cognito/config
   * Returns public Cognito configuration (User Pool ID, Client ID, Region, Domain, OAuth URLs).
   */
  async getCognitoConfig(req, res) {
    try {
      const config = cognitoService.getPublicConfig();
      return res.status(200).json({
        success: true,
        ...config
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve Cognito configuration."
      });
    }
  }

  /**
   * POST /api/auth/cognito/session
   * Establishes a verified TravelMate authenticated session from a Cognito JWT.
   * Cryptographically verifies Cognito ID Token with JWKS on backend.
   * Upserts the user profile using Cognito `sub` as the stable user identifier.
   */
  async cognitoSession(req, res) {
    try {
      const token = req.body.idToken || req.body.token || (req.headers.authorization && req.headers.authorization.startsWith("Bearer ") ? req.headers.authorization.split(" ")[1] : null);

      if (!token) {
        return res.status(400).json({
          success: false,
          message: "Cognito ID token is required."
        });
      }

      // 1. Verify token with Cognito JWKS
      const cognitoClaims = await cognitoService.verifyCognitoToken(token);
      if (!cognitoClaims || !cognitoClaims.sub) {
        return res.status(401).json({
          success: false,
          message: "Invalid or expired Cognito authentication token."
        });
      }

      // 2. Resolve or link user record using stable Cognito `sub`
      const isGoogleAuth = req.body.isGoogle || (cognitoClaims.identities && cognitoClaims.identities.some(i => i.providerName === "Google"));
      const user = await authService.upsertCognitoUser({
        cognitoSub: cognitoClaims.sub,
        email: cognitoClaims.email,
        name: req.body.name || cognitoClaims.name,
        phone: req.body.phone || cognitoClaims.phone,
        authProvider: isGoogleAuth ? "COGNITO_GOOGLE" : "COGNITO"
      });

      // 3. Generate TravelMate session token
      const sessionToken = authService.generateToken(user);

      // 4. Set secure HTTP-only cookie
      res.cookie("token", sessionToken, COOKIE_OPTIONS);

      return res.status(200).json({
        success: true,
        message: `Welcome to TravelMate AI, ${user.name}!`,
        user: authService.formatSafeUser(user),
        token: sessionToken,
        cognitoSub: cognitoClaims.sub
      });
    } catch (error) {
      console.error("Cognito session establishment error:", error.message);
      return res.status(401).json({
        success: false,
        message: error.message || "Failed to establish session from Cognito identity."
      });
    }
  }

  /**
   * POST /api/auth/cognito/exchange-oauth
   * Exchanges an authorization code from Cognito's OAuth callback (e.g. Google federation)
   * for tokens, verifies the ID token, upserts the user with their Cognito sub, and sets cookie.
   */
  async exchangeCognitoOAuth(req, res) {
    try {
      const { code, redirectUri } = req.body;
      if (!code) {
        return res.status(400).json({
          success: false,
          message: "Authorization code is required."
        });
      }

      // 1. Exchange code with Cognito OAuth token endpoint
      const tokenResult = await cognitoService.exchangeOAuthCode({ code, redirectUri });
      const idToken = tokenResult.id_token || tokenResult.idToken;

      // 2. Verify returned ID token with Cognito JWKS
      const cognitoClaims = await cognitoService.verifyCognitoToken(idToken);
      if (!cognitoClaims || !cognitoClaims.sub) {
        return res.status(401).json({
          success: false,
          message: "Invalid or expired token received from Cognito federation."
        });
      }

      // 3. Resolve or link user record using stable Cognito `sub`
      const isGoogleAuth = Boolean(cognitoClaims.identities && cognitoClaims.identities.some(i => i.providerName === "Google")) || true;
      const user = await authService.upsertCognitoUser({
        cognitoSub: cognitoClaims.sub,
        email: cognitoClaims.email,
        name: cognitoClaims.name,
        phone: cognitoClaims.phone,
        authProvider: isGoogleAuth ? "COGNITO_GOOGLE" : "COGNITO"
      });

      // 4. Generate TravelMate session token
      const sessionToken = authService.generateToken(user);

      // 5. Set secure HTTP-only cookie
      res.cookie("token", sessionToken, COOKIE_OPTIONS);

      return res.status(200).json({
        success: true,
        message: `Welcome to TravelMate AI, ${user.name}!`,
        user: authService.formatSafeUser(user),
        token: sessionToken,
        idToken,
        cognitoSub: cognitoClaims.sub
      });
    } catch (error) {
      console.error("Cognito OAuth exchange error:", error.message);
      return res.status(400).json({
        success: false,
        message: error.message || "Failed to exchange Cognito OAuth code."
      });
    }
  }

  /**
   * POST /api/auth/clerk-sync
   * Synchronizes Clerk authenticated identity with TravelMate database.
   * Strictly resolves role on the backend (backend is final authority).
   */
  async syncClerkUser(req, res) {
    try {
      const { clerkId, email, name, phone, avatar } = req.body;

      if (!clerkId && !email) {
        return res.status(400).json({
          success: false,
          message: "Clerk user ID or email is required for synchronization."
        });
      }

      const user = await authService.upsertClerkUser({
        clerkId,
        email,
        name,
        phone,
        avatar
      });

      const token = authService.generateToken(user);
      const safeUser = authService.formatSafeUser(user);

      res.cookie("token", token, COOKIE_OPTIONS);

      return res.status(200).json({
        success: true,
        message: `Authenticated as ${safeUser.name}`,
        user: safeUser,
        token
      });
    } catch (error) {
      console.error("Clerk sync error:", error.message);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to synchronize Clerk user."
      });
    }
  }
}

module.exports = new AuthController();
