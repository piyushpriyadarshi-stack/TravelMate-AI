const express = require("express");
const router = express.Router();
const transportationController = require("../controllers/transportation.controller");

// GET /api/transportation - List transportation options with filters
router.get("/", transportationController.getAllTransportation);

module.exports = router;
