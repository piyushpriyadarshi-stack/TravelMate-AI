// ==================================================
// TravelMate AI - Activities Routes
// ==================================================

const express = require("express");
const router = express.Router();
const activitiesController = require("../controllers/activities.controller");

router.get("/", activitiesController.getActivities);

module.exports = router;
