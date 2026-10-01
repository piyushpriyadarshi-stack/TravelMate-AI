const express = require("express");
const router = express.Router();
const hotelsController = require("../controllers/hotels.controller");

// GET /api/hotels - List all hotels with filters
router.get("/", hotelsController.getAllHotels);

// GET /api/hotels/:id - Hotel details with room types
router.get("/:id", hotelsController.getHotelById);

module.exports = router;
