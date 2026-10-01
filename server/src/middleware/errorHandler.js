// ==================================================
// TravelMate AI - Global Error Handler Middleware
// Ensures user-friendly error responses without exposing raw stack traces (Section 35)
// ==================================================

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const isDev = process.env.NODE_ENV === "development";

  console.error(`❌ [Error ${statusCode}] ${req.method} ${req.originalUrl}:`, err.message);
  if (isDev && err.stack) {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong on the server. Please try again.",
    ...(isDev && { errorDetails: err.message, stack: err.stack })
  });
}

function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    message: `API Route '${req.originalUrl}' not found. Check /api/health for available endpoints.`
  });
}

module.exports = {
  errorHandler,
  notFoundHandler
};
