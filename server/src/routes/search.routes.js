// ==================================================
// TravelMate AI - Search Routes
// Mounted at /api/search
// Provider-based multi-inventory search API
// ==================================================

const express = require("express");
const router = express.Router();
const searchController = require("../controllers/search.controller");

// Hotels
router.get("/hotels", searchController.searchHotels);
router.get("/hotels/:id", searchController.getHotelDetails);

// Flights
router.get("/flights", searchController.searchFlights);
router.get("/flights/offers/:offerId", searchController.getFlightOffer);
router.post("/flights/revalidate", searchController.revalidateFlight);

// Trains
router.get("/trains", searchController.searchTrains);

// Buses
router.get("/buses", searchController.searchBuses);

// Cabs
router.get("/cabs", searchController.searchCabs);

// Multi-modal Transportation
router.get("/transportation", searchController.searchAllTransportation);

// Provider Registry Status
router.get("/providers", searchController.getProviderStatus);
router.get("/provider-status", searchController.getProviderStatus);

module.exports = router;
