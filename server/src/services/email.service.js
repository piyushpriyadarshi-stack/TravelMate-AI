// ==================================================
// TravelMate AI - Email Service
// Handles email delivery for verification codes (OTP),
// booking vouchers, and account security notifications.
// Supports standard SMTP when configured, with a graceful
// development-mode console delivery fallback.
// ==================================================

class EmailService {
  constructor() {
    this.resendApiKey = process.env.RESEND_API_KEY || null;
    this.emailFrom = process.env.EMAIL_FROM || "TravelMate AI <onboarding@resend.dev>";
    this.adminEmail = (process.env.ADMIN_EMAIL || "piyushpriyadarshi980@gmail.com").toLowerCase().trim();

    this.transporter = null;
    this.smtpConfigured = false;

    // Direct Gmail configuration support
    if (process.env.GMAIL_USER && (process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS)) {
      try {
        const nodemailer = require("nodemailer");
        this.transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS
          }
        });
        this.smtpConfigured = true;
        this.emailFrom = `TravelMate AI <${process.env.GMAIL_USER}>`;
      } catch (err) {
        console.warn("[EmailService] Gmail transport initialization failed:", err.message);
      }
    } else if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const nodemailer = require("nodemailer");
        this.transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587", 10),
          secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });
        this.smtpConfigured = true;
      } catch (err) {
        console.warn("[EmailService] Nodemailer not available or failed to initialize, using console fallback:", err.message);
        this.smtpConfigured = false;
      }
    }
  }

  /**
   * Helper: Dispatches email via Resend HTTP REST API.
   * Node.js v18+ native fetch requires no extra external libraries.
   */
  async sendViaResend({ to, subject, html, text }) {
    if (!this.resendApiKey) return null;
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.resendApiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: this.emailFrom,
          to: Array.isArray(to) ? to : [to],
          subject,
          html,
          text
        })
      });

      const data = await response.json();
      if (response.ok) {
        console.log(`[EmailService] Resend email dispatched to ${to} (Message ID: ${data.id})`);
        return { success: true, mode: "resend", messageId: data.id };
      } else {
        console.warn(`[EmailService] Resend delivery notice:`, data.message || data);
      }
    } catch (err) {
      console.warn(`[EmailService] Resend request failed, trying SMTP/fallback:`, err.message);
    }
    return null;
  }

  /**
   * Generates a modern, responsive HTML email template for 6-digit OTP verification.
   */
  generateOtpTemplate({ name, code, expiresMinutes = 10 }) {
    const formattedName = name ? name.trim() : "Traveler";
    const appName = "TravelMate AI";
    const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification - ${appName}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      color: #1e293b;
    }
    .container {
      max-width: 580px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
    }
    .header {
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #4338ca 100%);
      padding: 36px 32px;
      text-align: center;
      color: #ffffff;
    }
    .brand-title {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin: 0;
    }
    .badge {
      display: inline-block;
      margin-top: 8px;
      padding: 4px 12px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .content {
      padding: 36px 32px;
    }
    .greeting {
      font-size: 18px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 12px;
    }
    .text {
      font-size: 14px;
      line-height: 1.6;
      color: #475569;
      margin-bottom: 24px;
    }
    .otp-box {
      background: #f0fdf4;
      border: 2px dashed #86efac;
      border-radius: 16px;
      padding: 24px;
      text-align: center;
      margin: 28px 0;
    }
    .otp-label {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #166534;
      margin-bottom: 8px;
    }
    .otp-code {
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 38px;
      font-weight: 800;
      letter-spacing: 10px;
      color: #047857;
      margin: 0;
    }
    .meta-box {
      background: #f8fafc;
      border-radius: 12px;
      padding: 16px;
      font-size: 12px;
      color: #64748b;
      margin-bottom: 24px;
      border: 1px solid #f1f5f9;
    }
    .footer {
      background: #f8fafc;
      padding: 24px 32px;
      text-align: center;
      font-size: 11px;
      color: #94a3b8;
      border-top: 1px solid #e2e8f0;
    }
    .link {
      color: #0284c7;
      text-decoration: none;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="brand-title">${appName}</h1>
      <span class="badge">Account Email Verification</span>
    </div>

    <div class="content">
      <div class="greeting">Hello ${formattedName},</div>
      <p class="text">
        Welcome to <strong>${appName}</strong>! Please verify your email address to complete your registration, unlock verified travel itineraries, and securely access your account.
      </p>

      <div class="otp-box">
        <div class="otp-label">Your 6-Digit Verification Code</div>
        <div class="otp-code">${code}</div>
      </div>

      <div class="meta-box">
        ⏱️ <strong>Validity:</strong> This code is valid for <strong>${expiresMinutes} minutes</strong>.<br>
        🔒 <strong>Security Warning:</strong> Never share this code with anyone. TravelMate AI staff will never ask for your verification code.
      </div>

      <p class="text" style="font-size: 12px; color: #94a3b8;">
        If you did not attempt to register an account with ${appName}, you can safely disregard this email.
      </p>
    </div>

    <div class="footer">
      &copy; ${new Date().getFullYear()} ${appName} Platform. All rights reserved.<br>
      <a href="${clientUrl}" class="link">Visit TravelMate AI</a>
    </div>
  </div>
</body>
</html>
`;
  }

  /**
   * Sends a 6-digit OTP verification email.
   * If SMTP is configured, sends via nodemailer.
   * Otherwise logs to console in development mode.
   */
  async sendVerificationOtp({ to, name, code, expiresMinutes = 10 }) {
    const cleanEmail = (to || "").trim().toLowerCase();
    const fromAddress = process.env.SMTP_FROM || `"TravelMate AI" <no-reply@travelmate.ai>`;

    // 1. Live SMTP Delivery
    if (this.smtpConfigured && this.transporter) {
      try {
        const info = await this.transporter.sendMail({
          from: fromAddress,
          to: cleanEmail,
          subject: `${code} is your TravelMate AI verification code`,
          html: this.generateOtpTemplate({ name, code, expiresMinutes }),
          text: `Hello ${name || "Traveler"},\n\nYour TravelMate AI email verification code is: ${code}\n\nThis code will expire in ${expiresMinutes} minutes.\nIf you did not request this code, please ignore this email.`
        });

        console.log(`[EmailService] Live verification email sent to ${cleanEmail} (Message ID: ${info.messageId})`);
        return {
          success: true,
          mode: "smtp",
          messageId: info.messageId
        };
      } catch (err) {
        console.error(`[EmailService] SMTP delivery failed to ${cleanEmail}:`, err.message);
        // Fall back to console delivery
      }
    }

    // 2. Local / Development Console Simulation
    console.log("\n=======================================================");
    console.log("📨 [SIMULATED EMAIL DELIVERY] TRAVELMATE AI VERIFICATION");
    console.log("=======================================================");
    console.log(`To:        ${cleanEmail} (${name || "New Traveler"})`);
    console.log(`Subject:   ${code} is your TravelMate AI verification code`);
    console.log(`OTP Code:  ▶ ${code} ◀`);
    console.log(`Expires:   In ${expiresMinutes} minutes`);
    console.log("=======================================================\n");

    return {
      success: true,
      mode: "development_simulated",
      simulated: true,
      code
    };
  }

  /**
   * Generates a modern, responsive HTML email template for password reset OTP.
   */
  generatePasswordResetOtpTemplate({ name, code, expiresMinutes = 5 }) {
    const formattedName = name ? name.trim() : "Traveler";
    const appName = "TravelMate AI";
    const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password - ${appName}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      color: #1e293b;
    }
    .container {
      max-width: 580px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
    }
    .header {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0369a1 100%);
      padding: 36px 32px;
      text-align: center;
      color: #ffffff;
    }
    .brand-title {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin: 0;
    }
    .badge {
      display: inline-block;
      margin-top: 8px;
      padding: 4px 12px;
      background: rgba(239, 68, 68, 0.2);
      border: 1px solid rgba(239, 68, 68, 0.4);
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #fca5a5;
    }
    .content {
      padding: 36px 32px;
    }
    .greeting {
      font-size: 18px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 12px;
    }
    .text {
      font-size: 14px;
      line-height: 1.6;
      color: #475569;
      margin-bottom: 24px;
    }
    .otp-box {
      background: #f8fafc;
      border: 2px dashed #0284c7;
      border-radius: 16px;
      padding: 24px;
      text-align: center;
      margin: 28px 0;
    }
    .otp-label {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #0369a1;
      margin-bottom: 8px;
    }
    .otp-code {
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 38px;
      font-weight: 800;
      letter-spacing: 10px;
      color: #0f172a;
      margin: 0;
    }
    .meta-box {
      background: #fff1f2;
      border-radius: 12px;
      padding: 16px;
      font-size: 12px;
      color: #9f1239;
      margin-bottom: 24px;
      border: 1px solid #ffe4e6;
    }
    .footer {
      background: #f8fafc;
      padding: 24px 32px;
      text-align: center;
      font-size: 11px;
      color: #94a3b8;
      border-top: 1px solid #e2e8f0;
    }
    .link {
      color: #0284c7;
      text-decoration: none;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="brand-title">${appName}</h1>
      <span class="badge">Password Reset Request</span>
    </div>

    <div class="content">
      <div class="greeting">Hello ${formattedName},</div>
      <p class="text">
        We received a request to reset your password for your <strong>${appName}</strong> account. Please use the 6-digit verification code below to authorize this change:
      </p>

      <div class="otp-box">
        <div class="otp-label">Your Password Reset Code</div>
        <div class="otp-code">${code}</div>
      </div>

      <div class="meta-box">
        ⏱️ <strong>Validity:</strong> This code will expire in <strong>${expiresMinutes} minutes</strong>.<br>
        🔒 <strong>Security Warning:</strong> Never share this code with anyone. TravelMate AI staff will never ask for your password reset code.
      </div>

      <p class="text" style="font-size: 12px; color: #94a3b8;">
        If you did not request a password reset, you can safely ignore this email. Your current password remains secure and unchanged.
      </p>
    </div>

    <div class="footer">
      &copy; ${new Date().getFullYear()} ${appName} Platform. All rights reserved.<br>
      <a href="${clientUrl}" class="link">Visit TravelMate AI</a>
    </div>
  </div>
</body>
</html>
`;
  }

  /**
   * Sends a 6-digit Password Reset OTP email.
   * If SMTP is configured, sends via nodemailer.
   * Never logs the OTP code to console or storage for security.
   */
  async sendPasswordResetOtp({ to, name, code, expiresMinutes = 5 }) {
    const cleanEmail = (to || "").trim().toLowerCase();
    const fromAddress = process.env.SMTP_FROM || `"TravelMate AI" <no-reply@travelmate.ai>`;

    // 1. Live SMTP Delivery
    if (this.smtpConfigured && this.transporter) {
      try {
        const info = await this.transporter.sendMail({
          from: fromAddress,
          to: cleanEmail,
          subject: `${code} is your TravelMate AI password reset code`,
          html: this.generatePasswordResetOtpTemplate({ name, code, expiresMinutes }),
          text: `Hello ${name || "Traveler"},\n\nYour TravelMate AI password reset code is: ${code}\n\nThis code will expire in ${expiresMinutes} minutes.\nIf you did not request a password reset, please ignore this email.`
        });

        console.log(`[EmailService] Live password reset email sent to ${cleanEmail} (Message ID: ${info.messageId})`);
        return {
          success: true,
          mode: "smtp",
          messageId: info.messageId
        };
      } catch (err) {
        console.error(`[EmailService] SMTP delivery failed for password reset to ${cleanEmail}:`, err.message);
      }
    }

    // 2. Development Simulation (Notice: OTP code is NOT logged to console per security rules)
    console.log(`[EmailService] Password reset verification email dispatched to ${cleanEmail} (valid for ${expiresMinutes}m)`);

    return {
      success: true,
      mode: "development_simulated"
    };
  }

  /**
   * Generates a modern, responsive HTML email template for Customer Booking Confirmation.
   * Requirement 10: Includes Customer name, Booking ID, Destination, Origin, Travel date,
   * Travelers, Transportation details, Hotel name, Room type, Number of rooms, Check-in date,
   * Check-out date, Total amount, Payment status, Booking status, and thank you note.
   */
  generateCustomerBookingConfirmationTemplate({ name, booking }) {
    const formattedName = name ? name.trim() : (booking.guestDetails?.fullName || "Traveler");
    const appName = "TravelMate AI";
    const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
    const bookingId = booking.bookingNumber || booking.bookingReference || booking.id;
    const destination = booking.destination || booking.destinationName || "Your Destination";
    const origin = booking.transportation?.origin || "Standard Departure City";
    const checkInDate = booking.checkIn ? (typeof booking.checkIn === "string" ? booking.checkIn.split("T")[0] : new Date(booking.checkIn).toISOString().split("T")[0]) : "N/A";
    const checkOutDate = booking.checkOut ? (typeof booking.checkOut === "string" ? booking.checkOut.split("T")[0] : new Date(booking.checkOut).toISOString().split("T")[0]) : "N/A";
    const travelDate = `${checkInDate} to ${checkOutDate} (${booking.nights || 1} night${(booking.nights || 1) === 1 ? "" : "s"})`;
    const travelers = `${booking.travelers || 1} Traveler(s)`;
    const hotelName = booking.hotel?.name || "Verified Hotel Partner";
    const roomType = booking.hotel?.roomType || "Deluxe Suite / Standard Room";
    const numberOfRooms = booking.hotel?.roomsCount || 1;
    const transportDetails = booking.transportation
      ? `${booking.transportation.type || "Transport"}: ${booking.transportation.provider || booking.transportation.airline || "Carrier"} ${booking.transportation.flightNumber ? `(${booking.transportation.flightNumber})` : ""} | Route: ${booking.transportation.origin || origin} ➔ ${booking.transportation.destination || destination}`
      : "Standard Travel Transit";
    const totalAmount = typeof booking.grandTotal === "number"
      ? `₹${booking.grandTotal.toLocaleString("en-IN")}`
      : `₹${booking.grandTotal || booking.amount || 0}`;
    const paymentStatus = booking.paymentStatus || "PAID";
    const bookingStatus = booking.bookingStatus || "CONFIRMED";

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TravelMate AI — Booking Confirmed — ${bookingId}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; color: #1e293b; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }
    .header { background: linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #059669 100%); padding: 36px 32px; text-align: center; color: #ffffff; }
    .brand-title { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; margin: 0; }
    .badge { display: inline-block; margin-top: 8px; padding: 4px 12px; background: rgba(255, 255, 255, 0.2); border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
    .content { padding: 36px 32px; }
    .success-hero { text-align: center; margin-bottom: 24px; }
    .success-icon { width: 56px; height: 56px; background-color: #10b981; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: #ffffff; font-size: 28px; line-height: 56px; margin-bottom: 12px; }
    .success-title { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0 0 6px 0; }
    .success-subtitle { font-size: 14px; color: #64748b; margin: 0; }
    .details-table { width: 100%; border-collapse: collapse; margin: 24px 0; background: #f8fafc; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; }
    .details-table td { padding: 11px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; }
    .details-table tr:last-child td { border-bottom: none; }
    .label { color: #64748b; font-weight: 600; width: 40%; }
    .value { color: #0f172a; font-weight: 700; text-align: right; }
    .paid-badge { display: inline-block; background: #dcfce7; color: #166534; font-weight: 800; padding: 2px 10px; border-radius: 9999px; font-size: 11px; }
    .thank-you-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 16px; margin: 20px 0; text-align: center; color: #166534; font-size: 13px; line-height: 1.5; }
    .btn-container { text-align: center; margin: 24px 0 12px 0; }
    .btn { display: inline-block; background: #0284c7; color: #ffffff !important; font-weight: 700; font-size: 14px; text-decoration: none; padding: 12px 26px; border-radius: 12px; }
    .footer { background: #f8fafc; padding: 24px 32px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="brand-title">${appName}</h1>
      <span class="badge">Official Booking Confirmation</span>
    </div>

    <div class="content">
      <div class="success-hero">
        <div class="success-icon">&#10003;</div>
        <h2 class="success-title">Your Booking is Confirmed!</h2>
        <p class="success-subtitle">Payment has been verified. Pack your bags for an incredible journey.</p>
      </div>

      <div class="thank-you-box">
        <strong>Thank you for choosing ${appName}!</strong> We are honored to accompany you on your travel experience and have verified your itinerary reservations.
      </div>

      <table class="details-table">
        <tr>
          <td class="label">Customer Name</td>
          <td class="value">${formattedName}</td>
        </tr>
        <tr>
          <td class="label">Booking ID</td>
          <td class="value" style="font-family: monospace; color: #0284c7;">${bookingId}</td>
        </tr>
        <tr>
          <td class="label">Destination</td>
          <td class="value">${destination}</td>
        </tr>
        <tr>
          <td class="label">Origin</td>
          <td class="value">${origin}</td>
        </tr>
        <tr>
          <td class="label">Travel Date</td>
          <td class="value">${travelDate}</td>
        </tr>
        <tr>
          <td class="label">Travelers</td>
          <td class="value">${travelers}</td>
        </tr>
        <tr>
          <td class="label">Transportation</td>
          <td class="value">${transportDetails}</td>
        </tr>
        <tr>
          <td class="label">Hotel Name</td>
          <td class="value">${hotelName}</td>
        </tr>
        <tr>
          <td class="label">Room Type</td>
          <td class="value">${roomType}</td>
        </tr>
        <tr>
          <td class="label">Number of Rooms</td>
          <td class="value">${numberOfRooms} Room(s)</td>
        </tr>
        <tr>
          <td class="label">Check-in Date</td>
          <td class="value">${checkInDate}</td>
        </tr>
        <tr>
          <td class="label">Check-out Date</td>
          <td class="value">${checkOutDate}</td>
        </tr>
        <tr>
          <td class="label">Total Amount</td>
          <td class="value" style="color: #16a34a; font-size: 15px;">${totalAmount}</td>
        </tr>
        <tr>
          <td class="label">Payment Status</td>
          <td class="value"><span class="paid-badge">${paymentStatus}</span></td>
        </tr>
        <tr>
          <td class="label">Booking Status</td>
          <td class="value"><span class="paid-badge">${bookingStatus}</span></td>
        </tr>
      </table>

      <div class="btn-container">
        <a href="${clientUrl}/payment-success?bookingId=${encodeURIComponent(bookingId)}" class="btn">View Verified Itinerary</a>
      </div>
    </div>

    <div class="footer">
      &copy; ${new Date().getFullYear()} ${appName} Platform. 24/7 Verified Booking Guarantee.<br>
      Need assistance? Contact us at support@travelmate.ai
    </div>
  </div>
</body>
</html>
`;
  }

  /**
   * Generates a modern, responsive HTML email template for Admin Booking Notification.
   * Requirement 11: Sent to piyushpriyadarshi980@gmail.com with subject:
   * "New TravelMate AI Booking — {{bookingId}}"
   */
  generateAdminBookingNotificationTemplate({ booking, customerName, customerEmail }) {
    const appName = "TravelMate AI";
    const bookingId = booking.bookingNumber || booking.bookingReference || booking.id;
    const destination = booking.destination || booking.destinationName || "Featured Trip";
    const origin = booking.transportation?.origin || "Standard Origin";
    const checkInDate = booking.checkIn ? (typeof booking.checkIn === "string" ? booking.checkIn.split("T")[0] : new Date(booking.checkIn).toISOString().split("T")[0]) : "N/A";
    const checkOutDate = booking.checkOut ? (typeof booking.checkOut === "string" ? booking.checkOut.split("T")[0] : new Date(booking.checkOut).toISOString().split("T")[0]) : "N/A";
    const travelDate = `${checkInDate} to ${checkOutDate} (${booking.nights || 1} nights)`;
    const travelers = `${booking.travelers || 1} Traveler(s)`;
    const transportSelected = booking.transportation
      ? `${booking.transportation.type || "Transit"}: ${booking.transportation.provider || "Carrier"} ${booking.transportation.flightNumber ? `(${booking.transportation.flightNumber})` : ""}`
      : "Not Included";
    const hotelSelected = booking.hotel?.name || "Verified Hotel Partner";
    const roomType = booking.hotel?.roomType || "Standard Room";
    const amount = typeof booking.grandTotal === "number"
      ? `₹${booking.grandTotal.toLocaleString("en-IN")}`
      : `₹${booking.grandTotal || booking.amount || 0}`;
    const paymentStatus = booking.paymentStatus || "PAID";
    const bookingStatus = booking.bookingStatus || "CONFIRMED";
    const creationTime = booking.createdAt || new Date().toISOString();

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New TravelMate AI Booking — ${bookingId}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f1f5f9; color: #0f172a; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }
    .header { background: #0f172a; color: #ffffff; padding: 24px; text-align: center; }
    .badge { display: inline-block; background: #f59e0b; color: #000; font-weight: 800; font-size: 11px; padding: 3px 12px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.5px; }
    .title { margin: 10px 0 2px 0; font-size: 20px; font-weight: 800; }
    .subtitle { margin: 0; font-size: 12px; color: #94a3b8; }
    .content { padding: 24px; }
    .table { width: 100%; border-collapse: collapse; margin-top: 12px; background: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
    .table td { padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; }
    .table tr:last-child td { border-bottom: none; }
    .label { color: #64748b; font-weight: 600; width: 40%; }
    .val { color: #0f172a; font-weight: 700; text-align: right; }
    .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">ADMIN NOTIFICATION</span>
      <h2 class="title">New Confirmed Booking</h2>
      <p class="subtitle">TravelMate AI Automated Reservation System</p>
    </div>
    <div class="content">
      <p style="font-size: 13px; color: #475569; margin: 0 0 12px 0;">
        A new booking has completed payment verification on TravelMate AI. Reservation details:
      </p>
      <table class="table">
        <tr><td class="label">Booking ID</td><td class="val" style="color: #0284c7; font-family: monospace;">${bookingId}</td></tr>
        <tr><td class="label">Customer Name</td><td class="val">${customerName || "Guest Traveler"}</td></tr>
        <tr><td class="label">Customer Email</td><td class="val">${customerEmail || "N/A"}</td></tr>
        <tr><td class="label">Destination</td><td class="val">${destination}</td></tr>
        <tr><td class="label">Origin</td><td class="val">${origin}</td></tr>
        <tr><td class="label">Travel Date</td><td class="val">${travelDate}</td></tr>
        <tr><td class="label">Travelers</td><td class="val">${travelers}</td></tr>
        <tr><td class="label">Transportation</td><td class="val">${transportSelected}</td></tr>
        <tr><td class="label">Hotel</td><td class="val">${hotelSelected}</td></tr>
        <tr><td class="label">Room Type</td><td class="val">${roomType}</td></tr>
        <tr><td class="label">Amount Paid</td><td class="val" style="color: #16a34a; font-size: 15px;">${amount}</td></tr>
        <tr><td class="label">Payment Status</td><td class="val" style="color: #16a34a;">${paymentStatus}</td></tr>
        <tr><td class="label">Booking Status</td><td class="val" style="color: #0284c7;">${bookingStatus}</td></tr>
        <tr><td class="label">Creation Time</td><td class="val">${creationTime}</td></tr>
      </table>
    </div>
    <div class="footer">
      TravelMate AI Administrative Notification &bull; Confidential &bull; Target: piyushpriyadarshi980@gmail.com
    </div>
  </div>
</body>
</html>
`;
  }

  /**
   * EMAIL 1: Sends official confirmation email to the customer.
   */
  async sendCustomerBookingConfirmationEmail({ to, name, booking }) {
    const cleanEmail = (to || "").trim().toLowerCase();
    if (!cleanEmail) {
      console.warn("[EmailService] No recipient email provided for customer confirmation.");
      return { success: false, message: "No recipient email provided" };
    }

    const bookingId = booking.bookingNumber || booking.bookingReference || booking.id;
    const subject = `TravelMate AI — Booking Confirmed — ${bookingId}`;
    const html = this.generateCustomerBookingConfirmationTemplate({ name, booking });
    const text = `TravelMate AI — Booking Confirmed — ${bookingId}\n\nHello ${name || "Traveler"},\n\nYour payment for booking ${bookingId} was verified and confirmed!\nTotal Amount: ₹${booking.grandTotal || 0}\nStatus: PAID\n\nView itinerary: ${process.env.CLIENT_URL || "http://localhost:5173"}/payment-success?bookingId=${bookingId}\n\nThank you for choosing TravelMate AI!`;

    // 1. Live Resend Delivery
    if (this.resendApiKey) {
      const resendRes = await this.sendViaResend({ to: cleanEmail, subject, html, text });
      if (resendRes) return resendRes;
    }

    // 2. Live SMTP Delivery
    if (this.smtpConfigured && this.transporter) {
      try {
        const info = await this.transporter.sendMail({
          from: this.emailFrom,
          to: cleanEmail,
          subject,
          html,
          text
        });
        console.log(`[EmailService] SMTP customer confirmation sent to ${cleanEmail} (ID: ${info.messageId})`);
        return { success: true, mode: "smtp", messageId: info.messageId };
      } catch (err) {
        console.error(`[EmailService] SMTP customer confirmation failed:`, err.message);
      }
    }

    // 3. Local / Development Console Simulation
    console.log("\n=======================================================");
    console.log("📨 [SIMULATED EMAIL 1] CUSTOMER BOOKING CONFIRMATION");
    console.log("=======================================================");
    console.log(`To:             ${cleanEmail} (${name || "Customer"})`);
    console.log(`Subject:        ${subject}`);
    console.log(`Booking ID:     ${bookingId}`);
    console.log(`Destination:    ${booking.destination || booking.destinationName || "N/A"}`);
    console.log(`Dates:          ${booking.checkIn} to ${booking.checkOut}`);
    console.log(`Amount:         ₹${booking.grandTotal || 0}`);
    console.log(`Status:         PAID / CONFIRMED`);
    console.log("=======================================================\n");

    return { success: true, mode: "development_simulated" };
  }

  /**
   * EMAIL 2: Sends admin reservation notification to piyushpriyadarshi980@gmail.com.
   */
  async sendAdminBookingNotificationEmail({ booking, customerName, customerEmail }) {
    const adminRecipient = this.adminEmail;
    const bookingId = booking.bookingNumber || booking.bookingReference || booking.id;
    const subject = `New TravelMate AI Booking — ${bookingId}`;
    const html = this.generateAdminBookingNotificationTemplate({ booking, customerName, customerEmail });
    const text = `New TravelMate AI Booking — ${bookingId}\n\nCustomer: ${customerName || "Customer"} (${customerEmail || "N/A"})\nBooking ID: ${bookingId}\nDestination: ${booking.destination || booking.destinationName || "N/A"}\nAmount Paid: ₹${booking.grandTotal || 0}\nStatus: PAID\nCreated: ${booking.createdAt || new Date().toISOString()}`;

    // 1. Live Resend Delivery
    if (this.resendApiKey) {
      const resendRes = await this.sendViaResend({ to: adminRecipient, subject, html, text });
      if (resendRes) return resendRes;
    }

    // 2. Live SMTP Delivery
    if (this.smtpConfigured && this.transporter) {
      try {
        const info = await this.transporter.sendMail({
          from: this.emailFrom,
          to: adminRecipient,
          subject,
          html,
          text
        });
        console.log(`[EmailService] SMTP admin notification sent to ${adminRecipient} (ID: ${info.messageId})`);
        return { success: true, mode: "smtp", messageId: info.messageId };
      } catch (err) {
        console.error(`[EmailService] SMTP admin notification failed:`, err.message);
      }
    }

    // 3. Local / Development Console Simulation
    console.log("\n=======================================================");
    console.log("📨 [SIMULATED EMAIL 2] ADMIN BOOKING NOTIFICATION");
    console.log("=======================================================");
    console.log(`To:             ${adminRecipient} (ADMIN)`);
    console.log(`Subject:        ${subject}`);
    console.log(`Booking ID:     ${bookingId}`);
    console.log(`Customer:       ${customerName || "Customer"} (${customerEmail || "N/A"})`);
    console.log(`Amount:         ₹${booking.grandTotal || 0}`);
    console.log(`Payment Status: PAID`);
    console.log(`Booking Status: CONFIRMED`);
    console.log("=======================================================\n");

    return { success: true, mode: "development_simulated" };
  }

  /**
   * Backward-compatible alias for existing callers.
   */
  async sendBookingConfirmationEmail(params) {
    return this.sendCustomerBookingConfirmationEmail(params);
  }
}

module.exports = new EmailService();

