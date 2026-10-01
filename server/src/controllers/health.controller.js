// ==================================================
// TravelMate AI - Health & System Status Controller
// Provides system diagnostics, database status, and server time
// ==================================================

const { getDatabaseStatus } = require("../services/prisma.service");

exports.getHealthStatus = (req, res) => {
  const dbStatus = getDatabaseStatus();

  res.json({
    status: "online",
    project: "TravelMate AI – Smart Travel Planning & Booking Platform",
    stage: "STAGE 1 - Foundation & Project Setup",
    timestamp: new Date().toISOString(),
    serverDate: new Date().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" }),
    database: dbStatus,
    apiEndpoints: {
      destinations: "/api/destinations",
      hotels: "/api/hotels",
      transportation: "/api/transportation",
      health: "/api/health"
    },
    version: "1.0.0"
  });
};
