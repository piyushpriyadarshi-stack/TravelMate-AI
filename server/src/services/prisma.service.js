// ==================================================
// TravelMate AI - Prisma Client Service
// Manages Prisma connection and status diagnostics
// ==================================================

const { PrismaClient } = require("@prisma/client");

let prismaInstance = null;
let isDatabaseConnected = false;
let connectionError = null;

try {
  prismaInstance = new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"]
  });
} catch (error) {
  console.warn("⚠️ Prisma client initialization warning:", error.message);
}

// Diagnostic helper to verify PostgreSQL connection
async function checkDatabaseConnection() {
  if (!prismaInstance) {
    isDatabaseConnected = false;
    return false;
  }
  try {
    await prismaInstance.$queryRaw`SELECT 1`;
    isDatabaseConnected = true;
    connectionError = null;
    return true;
  } catch (error) {
    isDatabaseConnected = false;
    connectionError = error.message;
    return false;
  }
}

function getDatabaseStatus() {
  return {
    connected: isDatabaseConnected,
    provider: "postgresql",
    error: connectionError ? "PostgreSQL not reachable or credentials pending" : null,
    mode: isDatabaseConnected ? "DATABASE_ACTIVE" : "STANDALONE_DEMO_DATA_MODE"
  };
}

module.exports = {
  prisma: prismaInstance,
  checkDatabaseConnection,
  getDatabaseStatus
};
