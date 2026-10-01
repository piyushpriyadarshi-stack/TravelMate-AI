// ==================================================
// TravelMate AI - Destinations Controller (Stage 3)
// ==================================================

const dataService = require("../services/data.service");

/**
 * GET /api/destinations
 * Supports:
 * - ?search=goa or ?query=goa
 * - ?country=India
 * - ?popular=true
 * - ?isDomestic=true
 * - ?limit=10
 */
exports.getAllDestinations = async (req, res, next) => {
  try {
    const { search, query, country, popular, isDomestic, limit } = req.query;
    const result = await dataService.getDestinations({
      search,
      query,
      country,
      popular: popular !== undefined ? (popular === "true" || popular === "1") : undefined,
      isDomestic: isDomestic !== undefined ? isDomestic === "true" : undefined,
      limit
    });

    return res.status(200).json({
      success: true,
      message: result.message || "Destinations retrieved successfully",
      ...result
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/destinations/:id
 * Retrieve destination details by ID or city name.
 * If not found, returns HTTP 404 with standard notFound response.
 */
exports.getDestinationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await dataService.getDestinationById(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        notFound: true,
        message: "We couldn't find this destination. Try another city or country."
      });
    }

    return res.status(200).json({
      success: true,
      ...result
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET/POST /api/destinations/validate-search
 * Validates travel search parameters (destination, checkIn, checkOut, travelers).
 * Returns HTTP 400 on validation failure, 200 on success.
 */
exports.validateSearch = async (req, res, next) => {
  try {
    const params = req.method === "POST" ? req.body : req.query;
    const validation = dataService.validateSearch(params);

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: validation.firstError,
        errors: validation.errors
      });
    }

    return res.status(200).json({
      success: true,
      message: "Search parameters are valid.",
      data: params
    });
  } catch (error) {
    next(error);
  }
};
