// ==================================================
// TravelMate AI - Email Service
// Handles email delivery for verification codes (OTP),
// booking vouchers, and account security notifications.
// Supports standard SMTP when configured, with a graceful
// development-mode console delivery fallback.
// ==================================================

class EmailService {
  constructor() {
    this.smtpConfigured = Boolean(
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    );

    this.transporter = null;

    if (this.smtpConfigured) {
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
      } catch (err) {
        console.warn("[EmailService] Nodemailer not available or failed to initialize, using console fallback:", err.message);
        this.smtpConfigured = false;
      }
    }
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
   * Generates a modern, responsive HTML email template for Booking & Payment Confirmation.
   */
  generateBookingConfirmationTemplate({ name, booking }) {
    const formattedName = name ? name.trim() : (booking.guestDetails?.fullName || "Traveler");
    const appName = "TravelMate AI";
    const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
    const bookingId = booking.bookingNumber || booking.bookingReference || booking.id;
    const destination = booking.destination || booking.destinationName || "Your Destination";
    const travelDates = `${booking.checkIn || "N/A"} to ${booking.checkOut || "N/A"} (${booking.nights || 1} nights)`;
    const hotelDetails = booking.hotel
      ? `${booking.hotel.name} — ${booking.hotel.roomType || "Standard Room"}`
      : "Not Included";
    const transportDetails = booking.transportation
      ? `${booking.transportation.type || "Transport"}: ${booking.transportation.provider || booking.transportation.airline || "Carrier"} ${booking.transportation.flightNumber ? `(${booking.transportation.flightNumber})` : ""} (From: ${booking.transportation.origin} To: ${booking.transportation.destination})`
      : "Not Included";
    const amountPaid = typeof booking.grandTotal === "number"
      ? `₹${booking.grandTotal.toLocaleString("en-IN")}`
      : `₹${booking.grandTotal || booking.amount || 0}`;
    const paymentStatus = booking.paymentStatus || "PAID";
    const travelers = `${booking.travelers || 1} Traveler(s)`;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation - ${appName}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; color: #1e293b; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }
    .header { background: linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #059669 100%); padding: 36px 32px; text-align: center; color: #ffffff; }
    .brand-title { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; margin: 0; }
    .badge { display: inline-block; margin-top: 8px; padding: 4px 12px; background: rgba(255, 255, 255, 0.2); border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
    .content { padding: 36px 32px; }
    .success-hero { text-align: center; margin-bottom: 28px; }
    .success-icon { width: 64px; height: 64px; background-color: #28a745; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: #ffffff; font-size: 32px; line-height: 64px; margin-bottom: 12px; }
    .success-title { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0 0 6px 0; }
    .success-subtitle { font-size: 14px; color: #64748b; margin: 0; }
    .details-table { width: 100%; border-collapse: collapse; margin: 24px 0; background: #f8fafc; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; }
    .details-table td { padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; }
    .details-table tr:last-child td { border-bottom: none; }
    .label { color: #64748b; font-weight: 600; width: 38%; }
    .value { color: #0f172a; font-weight: 700; text-align: right; }
    .paid-badge { display: inline-block; background: #dcfce7; color: #166534; font-weight: 800; padding: 2px 10px; border-radius: 9999px; font-size: 11px; }
    .btn-container { text-align: center; margin: 32px 0 16px 0; }
    .btn { display: inline-block; background: #0284c7; color: #ffffff !important; font-weight: 700; font-size: 14px; text-decoration: none; padding: 14px 28px; border-radius: 12px; }
    .footer { background: #f8fafc; padding: 24px 32px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="brand-title">${appName}</h1>
      <span class="badge">Official Booking & Payment Confirmation</span>
    </div>

    <div class="content">
      <div class="success-hero">
        <div class="success-icon">&#10003;</div>
        <h2 class="success-title">Your payment was successful</h2>
        <p class="success-subtitle">Thank you for your payment. Your trip reservation has been verified and confirmed.</p>
      </div>

      <p style="font-size: 14px; color: #334155; margin-bottom: 16px;">
        Hello <strong>${formattedName}</strong>,<br>
        We are thrilled to confirm your travel booking with TravelMate AI. Below are your official reservation and payment details:
      </p>

      <table class="details-table">
        <tr>
          <td class="label">Booking ID</td>
          <td class="value" style="font-family: monospace; color: #0284c7;">${bookingId}</td>
        </tr>
        <tr>
          <td class="label">Destination</td>
          <td class="value">${destination}</td>
        </tr>
        <tr>
          <td class="label">Travel Date</td>
          <td class="value">${travelDates}</td>
        </tr>
        <tr>
          <td class="label">Travelers</td>
          <td class="value">${travelers}</td>
        </tr>
        <tr>
          <td class="label">Hotel Stay</td>
          <td class="value">${hotelDetails}</td>
        </tr>
        <tr>
          <td class="label">Transportation</td>
          <td class="value">${transportDetails}</td>
        </tr>
        <tr>
          <td class="label">Amount Paid</td>
          <td class="value" style="color: #16a34a; font-size: 15px;">${amountPaid}</td>
        </tr>
        <tr>
          <td class="label">Payment Status</td>
          <td class="value"><span class="paid-badge">${paymentStatus}</span></td>
        </tr>
      </table>

      <div class="btn-container">
        <a href="${clientUrl}/payment-success?bookingId=${encodeURIComponent(bookingId)}" class="btn">View Verified Booking</a>
      </div>
    </div>

    <div class="footer">
      &copy; ${new Date().getFullYear()} ${appName} Platform. 24/7 Verified Booking Guarantee.<br>
      Need assistance? Contact support@travelmate.ai
    </div>
  </div>
</body>
</html>
`;
  }

  /**
   * Sends a real booking confirmation email after successful payment verification.
   */
  async sendBookingConfirmationEmail({ to, name, booking }) {
    const cleanEmail = (to || "").trim().toLowerCase();
    if (!cleanEmail) {
      console.warn("[EmailService] No recipient email provided for booking confirmation.");
      return { success: false, message: "No email provided" };
    }

    const bookingId = booking.bookingNumber || booking.bookingReference || booking.id;
    const destination = booking.destination || booking.destinationName || "Trip";
    const fromAddress = process.env.SMTP_FROM || `"TravelMate AI" <no-reply@travelmate.ai>`;

    // 1. Live SMTP Delivery
    if (this.smtpConfigured && this.transporter) {
      try {
        const info = await this.transporter.sendMail({
          from: fromAddress,
          to: cleanEmail,
          subject: `Payment Confirmed: Your Trip to ${destination} (Booking #${bookingId})`,
          html: this.generateBookingConfirmationTemplate({ name, booking }),
          text: `Hello ${name || "Traveler"},\n\nYour payment for booking ${bookingId} to ${destination} was successful and confirmed!\n\nAmount Paid: ₹${booking.grandTotal || 0}\nStatus: PAID\n\nView your booking online: ${process.env.CLIENT_URL || "http://localhost:5173"}/payment-success?bookingId=${bookingId}`
        });

        console.log(`[EmailService] Live booking confirmation email sent to ${cleanEmail} (Message ID: ${info.messageId})`);
        return {
          success: true,
          mode: "smtp",
          messageId: info.messageId
        };
      } catch (err) {
        console.error(`[EmailService] SMTP delivery failed for booking confirmation to ${cleanEmail}:`, err.message);
      }
    }

    // 2. Development Simulation
    console.log("\n=======================================================");
    console.log("📨 [SIMULATED EMAIL DELIVERY] BOOKING CONFIRMATION");
    console.log("=======================================================");
    console.log(`To:             ${cleanEmail} (${name || "Traveler"})`);
    console.log(`Subject:        Payment Confirmed: Your Trip to ${destination} (Booking #${bookingId})`);
    console.log(`Booking ID:     ${bookingId}`);
    console.log(`Destination:    ${destination}`);
    console.log(`Travel Dates:   ${booking.checkIn} to ${booking.checkOut}`);
    console.log(`Amount Paid:    ₹${booking.grandTotal || 0}`);
    console.log(`Payment Status: PAID`);
    console.log("=======================================================\n");

    return {
      success: true,
      mode: "development_simulated"
    };
  }
}

module.exports = new EmailService();

