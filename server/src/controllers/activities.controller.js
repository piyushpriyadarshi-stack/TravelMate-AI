// ==================================================
// TravelMate AI - Activities Controller
// ==================================================

const dataService = require("../services/data.service");

exports.getActivities = async (req, res, next) => {
  try {
    const { destinationId, destinationName } = req.query;
    const result = await dataService.getActivities({ destinationId, destinationName });

    res.json({
      success: true,
      message: "Activities retrieved successfully",
      ...result
    });
  } catch (error) {
    next(error);
  }
};
