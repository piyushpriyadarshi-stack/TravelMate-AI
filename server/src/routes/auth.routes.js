// ==================================================
// TravelMate AI - Authentication Routes (Stage 2)
// ==================================================

const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { requireAuth, requireAdmin } = require("../middleware/auth.middleware");

// Public authentication routes
// 1. Two-Step Email Verification Registration Flow
router.post("/register/send-otp", (req, res) => authController.initiateRegistration(req, res));
router.post("/register/verify-otp", (req, res) => authController.verifyEmailAndRegister(req, res));
router.post("/register/resend-otp", (req, res) => authController.resendVerificationOtp(req, res));

// Direct aliases
router.post("/send-verification-otp", (req, res) => authController.initiateRegistration(req, res));
router.post("/verify-email-register", (req, res) => authController.verifyEmailAndRegister(req, res));
router.post("/resend-verification-otp", (req, res) => authController.resendVerificationOtp(req, res));

// 2. Forgot Password & Password Reset Flow
router.post("/forgot-password/send-otp", (req, res) => authController.forgotPasswordSendOtp(req, res));
router.post("/forgot-password/resend-otp", (req, res) => authController.forgotPasswordResendOtp(req, res));
router.post("/forgot-password/verify-otp", (req, res) => authController.forgotPasswordVerifyOtp(req, res));
router.post("/forgot-password/reset-password", (req, res) => authController.forgotPasswordReset(req, res));

// Direct aliases for password reset
router.post("/forgot-password", (req, res) => authController.forgotPasswordSendOtp(req, res));
router.post("/reset-password", (req, res) => authController.forgotPasswordReset(req, res));

// 3. Amazon Cognito User Pools integration endpoints
router.get("/cognito/config", (req, res) => authController.getCognitoConfig(req, res));
router.post("/cognito/session", (req, res) => authController.cognitoSession(req, res));
router.post("/cognito/exchange-oauth", (req, res) => authController.exchangeCognitoOAuth(req, res));

// 4. Google Identity Services / OAuth Authentication
router.post("/google", (req, res) => authController.googleLogin(req, res));
router.post("/google-login", (req, res) => authController.googleLogin(req, res));

// 4b. Clerk Authentication Synchronization
router.post("/clerk-sync", (req, res) => authController.syncClerkUser(req, res));
router.post("/sync-clerk", (req, res) => authController.syncClerkUser(req, res));

// 5. Backward-compatible direct registration, login, logout
router.post("/register", (req, res) => authController.register(req, res));
router.post("/login", (req, res) => authController.login(req, res));
router.post("/logout", (req, res) => authController.logout(req, res));

// Authenticated user routes (require valid JWT / cookie)
router.get("/me", requireAuth, (req, res) => authController.getMe(req, res));
router.put("/profile", requireAuth, (req, res) => authController.updateProfile(req, res));

// Administrator role test route (requires ADMIN role)
router.get("/admin-check", requireAuth, requireAdmin, (req, res) => authController.checkAdmin(req, res));

module.exports = router;
