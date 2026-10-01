// ==================================================
// TravelMate AI - Hotels Controller
// ==================================================

const dataService = require("../services/data.service");

exports.getAllHotels = async (req, res, next) => {
  try {
    const {
      destinationId,
      destinationName,
      destination,
      checkIn,
      checkOut,
      travelers,
      rooms,
      category,
      minPrice,
      maxPrice,
      minRating,
      limit,
      userLat,
      userLng,
      latitude,
      longitude,
      sortBy
    } = req.query;

    const result = await dataService.getHotels({
      destinationId,
      destinationName,
      destination,
      checkIn,
      checkOut,
      travelers,
      rooms,
      category,
      minPrice,
      maxPrice,
      minRating,
      limit,
      userLat,
      userLng,
      latitude,
      longitude,
      sortBy
    });

    res.json({
      success: true,
      message: "Hotels retrieved successfully",
      ...result
    });
  } catch (error) {
    if (
      error.message.includes("Travelers must be") ||
      error.message.includes("Rooms must be") ||
      error.message.includes("Invalid check-in") ||
      error.message.includes("Check-in date cannot") ||
      error.message.includes("Check-out date must")
    ) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    next(error);
  }
};

exports.getHotelById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await dataService.getHotelById(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: `Hotel with ID '${id}' not found`
      });
    }

    res.json({
      success: true,
      ...result
    });
  } catch (error) {
    next(error);
  }
};
