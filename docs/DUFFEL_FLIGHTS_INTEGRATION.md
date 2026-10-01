# TravelMate AI — Duffel Flights API Integration Guide

## 1. Overview & Architecture
The Duffel Flight Provider (`DuffelFlightProvider`) integrates Duffel Flights API (v2) into TravelMate AI's unified search orchestration engine (`SearchService`).

### Zero Fake Flight Policy
- **No synthetic flights**: Live inventory is fetched directly from Duffel API (`https://api.duffel.com/air/offer_requests`).
- **No AI hallucinations**: Gemini AI is never used to generate flight schedules, airlines, or fares.
- **Accurate status reporting**:
  - Zero offers return: `"No verified flight offers were found for this search."`
  - Filter mismatches return: `"No verified flights match your selected filters."`
  - Network timeouts / API failures return: `"Live flight search is temporarily unavailable."`
  - Special case for Manali (`KUU`): If no flights returned: `"No verified flight offers found for this destination."`

---

## 2. Security & Credentials
- **Token**: `DUFFEL_ACCESS_TOKEN` is loaded solely in the backend via `process.env.DUFFEL_ACCESS_TOKEN`.
- **Isolation**:
  - Excluded from all frontend code, build artifacts, localStorage, and API payloads.
  - Never printed in console logs, error messages, or terminal output.
  - `server/.env` and `.env` are strictly excluded from Git tracking via `.gitignore`.
- **Duffel Test Environment**:
  - Token is a test token (`duffel_test_...`).
  - Search results are identified as `isLive: false` with the explicit user disclaimer: `TEST/DEVELOPMENT DATA — NOT A REAL FLIGHT`.
  - Architecture is ready for zero-code migration to production by providing a live token (`duffel_live_...`).

---

## 3. All 15 Supported Destinations & Airport Mapping

All 15 official TravelMate destinations are mapped to real IATA commercial airport codes in `server/src/providers/flights/duffel/airportRegistry.js`:

| # | Destination | Country | Airport IATA Codes | Multi-Airport Handling |
|---|---|---|---|---|
| 1 | **Goa** | India | `GOI` (Dabolim), `GOX` (Mopa) | Parallel search across both airports; merged and deduplicated |
| 2 | **Delhi** | India | `DEL` (Indira Gandhi Intl) | Primary hub |
| 3 | **Mumbai** | India | `BOM` (Chhatrapati Shivaji Maharaj) | Primary hub |
| 4 | **Jaipur** | India | `JAI` (Jaipur Intl) | Commercial airport |
| 5 | **Manali** | India | `KUU` (Bhuntar / Kullu-Manali) | Commercial regional airport; clean message if no flights |
| 6 | **Bengaluru** | India | `BLR` (Kempegowda Intl) | Primary hub |
| 7 | **Kolkata** | India | `CCU` (Netaji Subhash Chandra Bose) | Primary hub |
| 8 | **Bhubaneswar** | India | `BBI` (Biju Patnaik Intl) | Commercial airport |
| 9 | **Kerala** | India | `COK` (Cochin), `TRV` (Trivandrum), `CCJ` (Calicut) | Location-based or multi-airport parallel search; deduplicated |
| 10 | **Hyderabad** | India | `HYD` (Rajiv Gandhi Intl) | Primary hub |
| 11 | **Dubai** | UAE | `DXB` (Dubai Intl) | International hub |
| 12 | **Singapore** | Singapore | `SIN` (Singapore Changi) | International hub |
| 13 | **Paris** | France | `CDG` (Charles de Gaulle), `ORY` (Orly) | Multi-airport parallel search; deduplicated |
| 14 | **London** | UK | `LHR` (Heathrow), `LGW` (Gatwick) | Multi-airport parallel search; deduplicated |
| 15 | **Tokyo** | Japan | `HND` (Haneda), `NRT` (Narita) | Multi-airport parallel search; deduplicated |

---

## 4. Endpoints

### Flight Search
- **Endpoint**: `GET /api/search/flights`
- **Parameters**:
  - `origin`: Starting city or 3-letter IATA code (e.g. `Bhubaneswar`, `DEL`, `BOM`)
  - `destination`: Destination city or 3-letter IATA code (e.g. `Goa`, `Dubai`, `Paris`)
  - `departureDate`: `YYYY-MM-DD`
  - `returnDate`: `YYYY-MM-DD` (optional, for round-trip)
  - `travelers`: Total traveler count (default: 1)
  - `adults`, `children`, `infants`: Granular passenger age-group counts
  - `tripType`: `"ONE_WAY"` or `"ROUND_TRIP"`
  - `cabinClass`: `"economy"` | `"premium_economy"` | `"business"` | `"first"`
  - `stops`: `"all"` | `"nonstop"` | `"1stop"` | `"2plus"`
  - `sortBy`: `"PRICE_LOW_TO_HIGH"` | `"PRICE_HIGH_TO_LOW"` | `"DURATION"` | `"EARLIEST"`
  - `maxPrice`: Numerical filter for maximum total fare

### Single Offer Retrieval
- **Endpoint**: `GET /api/search/flights/offers/:offerId`
- **Description**: Fetches fresh offer details directly from Duffel by offer ID before booking.

### Offer Revalidation & Freshness Check
- **Endpoint**: `POST /api/search/flights/revalidate`
- **Body**: `{ "offerId": "off_...", "expectedPrice": 65.91 }`
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "available": true,
      "expired": false,
      "priceChanged": false,
      "verifiedPrice": 65.91,
      "expiresAt": "2026-09-30T07:15:00.000Z",
      "message": "Flight offer verified and currently available."
    }
  }
  ```

### Provider Registry Status
- **Endpoint**: `GET /api/search/providers` (alias: `/api/search/provider-status`)

---

## 5. Connecting Flights & Multi-Leg Representation
- Every segment returned by Duffel is preserved with:
  - `legNumber`: Sequential index
  - `airline`: Operating carrier name and IATA code
  - `flightNumber`: Operating flight code (e.g., `BA-1516`, `IX-9417`)
  - `origin`: Airport code, name, city, and terminal
  - `destination`: Airport code, name, city, and terminal
  - `departure` and `arrival`: ISO timestamps, dates, and formatted times
  - `duration`: Leg duration
- Layovers between consecutive segments are automatically calculated and displayed (e.g., `6h 30m layover in Mumbai`).

---

## 6. Pre-Booking Revalidation & Price Change Confirmation
- When the user selects a flight and proceeds to checkout, `TripResultsPage.jsx` calls `apiService.revalidateFlight`.
- If expired: The system displays `"This flight offer is no longer available. Please search again."` and blocks order creation.
- If price changed: The user is prompted with an explicit re-confirmation dialog displaying the updated price before proceeding.
