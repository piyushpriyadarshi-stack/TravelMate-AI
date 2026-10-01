const express = require("express");
const router = express.Router();
const destinationsController = require("../controllers/destinations.controller");

// GET /api/destinations - List destinations with optional search/filters
router.get("/", destinationsController.getAllDestinations);

// GET & POST /api/destinations/validate-search - Validate search dates, travelers, destination
router.get("/validate-search", destinationsController.validateSearch);
router.post("/validate-search", destinationsController.validateSearch);

// GET /api/destinations/:id - Destination details with real photography, gallery & info
router.get("/:id", destinationsController.getDestinationById);

module.exports = router;
