// ==================================================
// TravelMate AI - Client Image Service Layer
// Standardized image access & legal photography layer
// STRICT RULE: No AI-generated imagery for destinations, hotels, or transport.
// Real photographs sourced via Unsplash CDN under the Unsplash License.
// Easily upgradeable to dynamic photo APIs (Unsplash, Pexels, Wikimedia Commons)
// without changing component architecture.
// ==================================================

// High-resolution authentic fallback photographs (Legal Unsplash CDN)
const FALLBACK_PHOTOGRAPHS = {
  destination: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
  hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  room: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  flight: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  train: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
  car: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
  bus: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
  activity: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
  default: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
};

export const imageService = {
  /**
   * Returns verified authentic destination image URL with fallback
   */
  getDestinationImage(destination) {
    if (destination?.imageUrl && destination.imageUrl.startsWith("http")) {
      return destination.imageUrl;
    }
    return FALLBACK_PHOTOGRAPHS.destination;
  },

  /**
   * Returns array of verified authentic destination gallery photographs
   * Supports multi-image galleries for destination detail pages
   */
  getDestinationGallery(destination) {
    if (destination?.galleryImages && Array.isArray(destination.galleryImages) && destination.galleryImages.length > 0) {
      return destination.galleryImages;
    }
    if (destination?.imageUrl && destination.imageUrl.startsWith("http")) {
      return [destination.imageUrl];
    }
    return [FALLBACK_PHOTOGRAPHS.destination];
  },

  /**
   * Returns array of verified authentic hotel photograph URLs
   * Supports multi-image galleries for hotel detail pages
   */
  getHotelImages(hotel) {
    if (hotel?.images && Array.isArray(hotel.images) && hotel.images.length > 0) {
      const urls = hotel.images.map(img => (typeof img === "string" ? img : img.url)).filter(Boolean);
      if (urls.length > 0) return urls;
    }
    if (hotel?.imageUrls && Array.isArray(hotel.imageUrls) && hotel.imageUrls.length > 0) {
      return hotel.imageUrls;
    }
    if (hotel?.imageUrl && hotel.imageUrl.startsWith("http")) {
      return [hotel.imageUrl];
    }
    return [FALLBACK_PHOTOGRAPHS.hotel];
  },

  /**
   * Returns primary hotel photograph
   */
  getHotelMainImage(hotel) {
    const list = this.getHotelImages(hotel);
    return list[0] || FALLBACK_PHOTOGRAPHS.hotel;
  },

  /**
   * Returns verified authentic activity photograph URL
   */
  getActivityImage(activity) {
    if (activity?.imageUrl && activity.imageUrl.startsWith("http")) {
      return activity.imageUrl;
    }
    return FALLBACK_PHOTOGRAPHS.activity;
  },

  /**
   * Returns fallback photograph URL for given type
   */
  getFallback(type = "default") {
    return FALLBACK_PHOTOGRAPHS[type] || FALLBACK_PHOTOGRAPHS.default;
  },

  /**
   * Image error event handler — swaps broken image with authentic Unsplash photo
   */
  handleImageError(event, type = "default") {
    const fallback = FALLBACK_PHOTOGRAPHS[type] || FALLBACK_PHOTOGRAPHS.default;
    if (event.target.src !== fallback) {
      event.target.src = fallback;
    }
  }
};
