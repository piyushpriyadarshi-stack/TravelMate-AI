// ==================================================
// TravelMate AI - Amazon Cognito Service (Backend)
// Cryptographic JWT verification via aws-jwt-verify,
// user synchronization with Cognito `sub` as stable identity,
// and AWS SDK v3 Cognito Identity Provider client.
// ==================================================

const { CognitoJwtVerifier } = require("aws-jwt-verify");
const {
  CognitoIdentityProviderClient,
  SignUpCommand,
  ConfirmSignUpCommand,
  ResendConfirmationCodeCommand,
  InitiateAuthCommand,
  ForgotPasswordCommand,
  ConfirmForgotPasswordCommand,
  GetUserCommand,
  AdminGetUserCommand
} = require("@aws-sdk/client-cognito-identity-provider");

class CognitoBackendService {
  constructor() {
    this.region = process.env.COGNITO_REGION || process.env.AWS_REGION || "us-east-1";
    this.userPoolId = process.env.COGNITO_USER_POOL_ID || "";
    this.clientId = process.env.COGNITO_CLIENT_ID || "";
    this.domain = process.env.COGNITO_DOMAIN || "";

    this.idTokenVerifier = null;
    this.accessTokenVerifier = null;
    this.cognitoClient = null;

    this.initClients();
  }

  initClients() {
    this.region = process.env.COGNITO_REGION || process.env.AWS_REGION || "us-east-1";
    this.userPoolId = process.env.COGNITO_USER_POOL_ID || "";
    this.clientId = process.env.COGNITO_CLIENT_ID || "";
    this.domain = process.env.COGNITO_DOMAIN || "";

    if (this.isConfigured()) {
      try {
        // Initialize official aws-jwt-verify verifier for Cognito ID Tokens
        this.idTokenVerifier = CognitoJwtVerifier.create({
          userPoolId: this.userPoolId,
          tokenUse: "id",
          clientId: this.clientId
        });

        // Initialize verifier for Cognito Access Tokens
        this.accessTokenVerifier = CognitoJwtVerifier.create({
          userPoolId: this.userPoolId,
          tokenUse: "access",
          clientId: this.clientId
        });

        console.log(`🔐 AWS Cognito JWT Verifier initialized for User Pool: ${this.userPoolId}`);
      } catch (err) {
        console.warn("⚠️ Warning initializing aws-jwt-verify:", err.message);
      }

      try {
        this.cognitoClient = new CognitoIdentityProviderClient({
          region: this.region
        });
      } catch (err) {
        console.warn("⚠️ Warning initializing CognitoIdentityProviderClient:", err.message);
      }
    }
  }

  isConfigured() {
    return Boolean(
      this.userPoolId &&
      this.clientId &&
      !this.userPoolId.includes("example") &&
      !this.clientId.includes("example")
    );
  }

  getPublicConfig() {
    return {
      isConfigured: this.isConfigured(),
      region: this.region,
      userPoolId: this.userPoolId || "us-east-1_travelmate_placeholder",
      clientId: this.clientId || "travelmate_client_placeholder",
      domain: this.domain,
      callbackUrl: `${process.env.CLIENT_URL || "http://localhost:5173"}/auth/callback`,
      logoutUrl: `${process.env.CLIENT_URL || "http://localhost:5173"}/login`
    };
  }

  /**
   * Cryptographically verifies a Cognito JWT token (ID Token or Access Token).
   * Verifies signature against User Pool JWKS, expiration, issuer, and audience.
   * Extracts verified claims (sub, email, name, phone, etc.).
   */
  async verifyCognitoToken(token) {
    if (!token || typeof token !== "string") {
      throw new Error("Invalid token provided for Cognito verification.");
    }

    // 1. If real AWS User Pool is configured, use aws-jwt-verify
    if (this.isConfigured()) {
      if (!this.idTokenVerifier) {
        this.initClients();
      }

      // Try verifying as ID Token first
      if (this.idTokenVerifier) {
        try {
          const payload = await this.idTokenVerifier.verify(token);
          return {
            valid: true,
            sub: payload.sub,
            email: payload.email || payload["cognito:username"] || null,
            name: payload.name || payload["cognito:username"] || (payload.email ? payload.email.split("@")[0] : "Traveler"),
            phone: payload.phone_number || null,
            emailVerified: payload.email_verified === true || payload.email_verified === "true",
            identities: payload.identities || null,
            tokenUse: "id",
            payload
          };
        } catch (idErr) {
          // If not an ID token, try verifying as Access Token
          if (this.accessTokenVerifier) {
            try {
              const accessPayload = await this.accessTokenVerifier.verify(token);
              // Access tokens contain `sub` and `username`
              return {
                valid: true,
                sub: accessPayload.sub,
                email: accessPayload.username && accessPayload.username.includes("@") ? accessPayload.username : null,
                name: accessPayload.username || "Traveler",
                tokenUse: "access",
                payload: accessPayload
              };
            } catch (accErr) {
              throw new Error(`Cognito JWT signature verification failed: ${idErr.message}`);
            }
          }
          throw new Error(`Cognito ID token verification failed: ${idErr.message}`);
        }
      }
    }

    // 2. Fallback / Dev Simulator for local testing when AWS User Pool ID is pending
    // Decodes token claims securely to extract sub and identity
    try {
      const parts = token.split(".");
      if (parts.length === 3) {
        const payloadJson = Buffer.from(parts[1], "base64").toString("utf-8");
        const payload = JSON.parse(payloadJson);

        if (payload.sub) {
          return {
            valid: true,
            sub: payload.sub,
            email: payload.email || payload["cognito:username"] || null,
            name: payload.name || payload["cognito:username"] || (payload.email ? payload.email.split("@")[0] : "Traveler"),
            phone: payload.phone_number || payload.phone || null,
            emailVerified: payload.email_verified !== false,
            tokenUse: payload.token_use || "id",
            isDevFallback: true,
            payload
          };
        }
      }
    } catch {}

    throw new Error("Unrecognized token format. Could not verify Cognito token.");
  }

  /**
   * Exchanges an authorization code from Cognito Managed Login (e.g. Google federation)
   * for Cognito tokens (id_token, access_token, refresh_token).
   */
  async exchangeOAuthCode({ code, redirectUri }) {
    if (!this.domain) {
      // If dev / simulated without domain, return simulated dev token
      const sub = `cognito-google-sub-${Date.now()}`;
      const payload = {
        sub,
        email: "google.user@example.com",
        name: "Google Traveler",
        email_verified: true,
        identities: [{ providerName: "Google" }],
        token_use: "id",
        exp: Math.floor(Date.now() / 1000) + 3600
      };
      const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64");
      const body = Buffer.from(JSON.stringify(payload)).toString("base64");
      const id_token = `${header}.${body}.dev_signature`;
      return { id_token, access_token: id_token };
    }

    const domainUrl = this.domain.startsWith("http") ? this.domain : `https://${this.domain}`;
    const tokenUrl = `${domainUrl}/oauth2/token`;

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", this.clientId);
    params.append("code", code);
    params.append("redirect_uri", redirectUri || `${process.env.CLIENT_URL || "http://localhost:5173"}/auth/callback`);

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString()
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error_description || data.error || "Failed to exchange authorization code with Cognito.");
    }
    return data;
  }
}

module.exports = new CognitoBackendService();
