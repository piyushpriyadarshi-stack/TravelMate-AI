// ==================================================
// TravelMate AI - Search Controller
// Exposes provider-agnostic search endpoints for Hotels, Flights, Trains, Buses, and Cabs
// ==================================================

const searchService = require("../services/search.service");

exports.searchHotels = async (req, res, next) => {
  try {
    const results = await searchService.searchHotels(req.query);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.getHotelDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const hotel = await searchService.getHotelDetails(id);
    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: `Hotel '${id}' not found`
      });
    }
    res.json(hotel);
  } catch (error) {
    next(error);
  }
};

exports.searchFlights = async (req, res, next) => {
  try {
    const results = await searchService.searchFlights(req.query);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.revalidateFlight = async (req, res, next) => {
  try {
    const verification = await searchService.revalidateFlight(req.body);
    res.json({
      success: verification.available !== false,
      data: verification
    });
  } catch (error) {
    next(error);
  }
};

exports.getFlightOffer = async (req, res, next) => {
  try {
    const { offerId } = req.params;
    const result = await searchService.getFlightOffer(offerId);
    if (!result || result.available === false) {
      return res.status(result?.expired ? 410 : 404).json({
        success: false,
        message: result?.message || `Flight offer '${offerId}' is no longer available. Please search again.`,
        data: result
      });
    }
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

exports.searchTrains = async (req, res, next) => {
  try {
    const results = await searchService.searchTrains(req.query);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.searchBuses = async (req, res, next) => {
  try {
    const results = await searchService.searchBuses(req.query);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.searchCabs = async (req, res, next) => {
  try {
    const results = await searchService.searchCabs(req.query);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.searchAllTransportation = async (req, res, next) => {
  try {
    const results = await searchService.searchAllTransportation(req.query);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

exports.getProviderStatus = async (req, res, next) => {
  try {
    const status = searchService.getProviderStatus();
    res.json({
      success: true,
      data: status
    });
  } catch (error) {
    next(error);
  }
};
