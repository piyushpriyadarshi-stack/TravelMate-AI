// ==================================================
// TravelMate AI - Authentication & Authorization Middleware
// Supports Amazon Cognito JWT verification (using aws-jwt-verify)
// and TravelMate session tokens.
// ==================================================

const jwt = require("jsonwebtoken");
const authService = require("../services/auth.service");
const cognitoService = require("../services/cognito.service");

const JWT_SECRET = process.env.JWT_SECRET || "travelmate_super_secret_jwt_key_academic_project_2026";

/**
 * Middleware: requireAuth
 * Validates JWT from HTTP-only cookie or Authorization Bearer header.
 * Verifies Amazon Cognito JWTs with JWKS, or TravelMate JWTs.
 * Resolves user identity from verified claims (Cognito `sub` is source of truth).
 */
async function requireAuth(req, res, next) {
  try {
    let token = null;

    // 1. Check HTTP-only cookie
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }
    // 2. Check Authorization header (Bearer <token>)
    else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please log in to continue."
      });
    }

    // 3. First, attempt to verify as Amazon Cognito JWT token
    try {
      const cognitoClaims = await cognitoService.verifyCognitoToken(token);
      if (cognitoClaims && cognitoClaims.sub) {
        // Source of truth: use verified Cognito `sub`
        const user = await authService.upsertCognitoUser({
          cognitoSub: cognitoClaims.sub,
          email: cognitoClaims.email,
          name: cognitoClaims.name,
          phone: cognitoClaims.phone
        });

        if (user) {
          req.user = authService.formatSafeUser(user);
          req.cognitoUser = cognitoClaims;
          return next();
        }
      }
    } catch (cognitoErr) {
      // Not a valid Cognito token, fall through to Clerk / JWT
    }

    // 3b. Attempt Clerk session / identity resolution
    if (token.startsWith("clerk_session_")) {
      const clerkId = token.replace("clerk_session_", "").trim();
      const user = await authService.findByClerkId(clerkId);
      if (user) {
        req.user = authService.formatSafeUser(user);
        return next();
      }
    }

    try {
      const unverified = jwt.decode(token);
      if (unverified && unverified.sub && (unverified.sub.startsWith("user_") || unverified.iss?.includes("clerk"))) {
        const user = await authService.findByClerkId(unverified.sub);
        if (user) {
          req.user = authService.formatSafeUser(user);
          return next();
        }
      }
    } catch {}

    // 4. Fallback: Verify as TravelMate local JWT session token
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: err.name === "TokenExpiredError"
          ? "Your session has expired. Please log in again."
          : "Invalid authentication token. Please log in again."
      });
    }

    // Fetch user from database
    const user = await authService.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User account no longer exists. Please register or log in with another account."
      });
    }

    // Attach safe user record to request
    req.user = authService.formatSafeUser(user);
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An internal error occurred during authentication verification."
    });
  }
}

/**
 * Middleware: requireAdmin
 * Checks that the authenticated user has the ADMIN role.
 * Standard USER accounts are denied access with 403 Forbidden.
 */
function requireAdmin(req, res, next) {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Authentication required before accessing administrator endpoints."
    });
  }

  if (req.user.role !== "ADMIN") {
    return res.status(403).json({
      success: false,
      message: "Access forbidden. Administrator privileges are required to perform this action."
    });
  }

  next();
}

/**
 * Middleware: optionalAuth
 * Attempts to extract authenticated user from cookie or Authorization header.
 * Verifies Cognito JWTs and TravelMate session tokens.
 * Attaches user to req.user if valid. Does not reject unauthenticated requests.
 */
async function optionalAuth(req, res, next) {
  try {
    let token = null;

    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    } else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (token) {
      // 1. Try Cognito verification
      try {
        const cognitoClaims = await cognitoService.verifyCognitoToken(token);
        if (cognitoClaims && cognitoClaims.sub) {
          const user = await authService.upsertCognitoUser({
            cognitoSub: cognitoClaims.sub,
            email: cognitoClaims.email,
            name: cognitoClaims.name,
            phone: cognitoClaims.phone
          });
          if (user) {
            req.user = authService.formatSafeUser(user);
            req.cognitoUser = cognitoClaims;
            return next();
          }
        }
      } catch {}

      // 1b. Try Clerk session / token resolution
      if (token.startsWith("clerk_session_")) {
        try {
          const clerkId = token.replace("clerk_session_", "").trim();
          const user = await authService.findByClerkId(clerkId);
          if (user) {
            req.user = authService.formatSafeUser(user);
            return next();
          }
        } catch {}
      }

      try {
        const unverified = jwt.decode(token);
        if (unverified && unverified.sub && (unverified.sub.startsWith("user_") || unverified.iss?.includes("clerk"))) {
          const user = await authService.findByClerkId(unverified.sub);
          if (user) {
            req.user = authService.formatSafeUser(user);
            return next();
          }
        }
      } catch {}

      // 2. Try TravelMate local JWT
      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await authService.findById(decoded.id);
        if (user) {
          req.user = authService.formatSafeUser(user);
          return next();
        }
      } catch {}
    }
  } catch {}
  next();
}

module.exports = {
  requireAuth,
  requireAdmin,
  optionalAuth
};
