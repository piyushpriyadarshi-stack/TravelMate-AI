const express = require("express");
const router = express.Router();
const healthController = require("../controllers/health.controller");

// GET /api/health - System and database diagnostics
router.get("/", healthController.getHealthStatus);

module.exports = router;
