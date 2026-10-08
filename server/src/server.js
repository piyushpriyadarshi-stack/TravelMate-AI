// ==================================================
// TravelMate AI - Express Server Entry Point
// ==================================================

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const dns = require("dns");
try {
  dns.setDefaultResultOrder("ipv4first");
} catch {
  // Ignore if unsupported
}
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const cookieParser = require("cookie-parser");
const apiRoutes = require("./routes");
const { errorHandler, notFoundHandler } = require("./middleware/errorHandler");
const { checkDatabaseConnection, getDatabaseStatus } = require("./services/prisma.service");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration (Supports local dev, production Vercel frontend, and Render)
const configuredClientUrl = process.env.CLIENT_URL ? process.env.CLIENT_URL.trim().replace(/\/+$/, "") : null;
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:4173",
  "https://travel-mate-ai-seven.vercel.app",
  configuredClientUrl
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith(".vercel.app") ||
      origin.endsWith(".onrender.com") ||
      origin.includes("localhost") ||
      origin.includes("127.0.0.1")
    ) {
      return callback(null, true);
    }
    // Allow by default to prevent payments breaking across new deploy domains
    return callback(null, true);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}));

app.options("*", cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Root Welcome Endpoint
app.get("/", (req, res) => {
  res.json({
    name: "TravelMate AI Backend API",
    status: "active",
    docs: "/api/health",
    endpoints: "/api"
  });
});

// Mount API routes
app.use("/api", apiRoutes);

// 404 handler
app.use(notFoundHandler);

// Global Error Handler
app.use(errorHandler);

// Start Server (only when run directly, not when required by tests)
if (require.main === module) {
  app.listen(PORT, async () => {
    console.log(`\n==================================================`);
    console.log(`🚀 TravelMate AI Server is running on port ${PORT}`);
    console.log(`📡 Base API URL: http://localhost:${PORT}/api`);
    console.log(`🩺 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`==================================================`);

    // Verify PostgreSQL connection
    const isConnected = await checkDatabaseConnection();
    if (isConnected) {
      console.log(`✅ PostgreSQL Database: Connected successfully via Prisma!`);
    } else {
      console.log(`ℹ️ PostgreSQL Database: Not connected (Running in demo data mode).`);
      console.log(`💡 To connect PostgreSQL, set DATABASE_URL in server/.env and run: npm run prisma:migrate`);
    }
    console.log(`==================================================\n`);
  });
}

module.exports = app;
