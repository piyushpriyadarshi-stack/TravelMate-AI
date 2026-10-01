// ==================================================
// TravelMate AI - Transportation Controller
// ==================================================

const dataService = require("../services/data.service");

exports.getAllTransportation = async (req, res, next) => {
  try {
    const {
      origin,
      destination,
      type,
      minCapacity,
      limit,
      date,
      departureDate,
      travelers,
      cabinClass,
      stops,
      sortBy
    } = req.query;

    const result = await dataService.getTransportation({
      origin,
      destination,
      type,
      minCapacity,
      limit,
      date: date || departureDate,
      travelers,
      cabinClass,
      stops,
      sortBy
    });

    res.json({
      success: true,
      message: result.message || "Transportation options retrieved successfully",
      ...result
    });
  } catch (error) {
    next(error);
  }
};
