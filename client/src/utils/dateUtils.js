// ==================================================
// TravelMate AI - Date Utilities (Section 7 Compliance)
// Dynamic system dates, strictly preventing past date booking
// ==================================================

/**
 * Returns today's date formatted as YYYY-MM-DD using the client system time
 */
export function getTodayDateString() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

/**
 * Returns tomorrow's date formatted as YYYY-MM-DD
 */
export function getTomorrowDateString() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
}

/**
 * Adds N days to a YYYY-MM-DD date string
 */
export function addDays(dateStr, days = 1) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

/**
 * Calculate total nights between two date strings
 */
export function calculateNights(checkInStr, checkOutStr) {
  if (!checkInStr || !checkOutStr) return 0;
  const start = new Date(checkInStr);
  const end = new Date(checkOutStr);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

/**
 * Validates check-in and check-out dates
 * Rules:
 * 1. Check-in cannot be before today
 * 2. Check-out must be strictly after check-in
 */
export function validateDates(checkInStr, checkOutStr) {
  if (!checkInStr) {
    return { isValid: false, error: "Please select a check-in date." };
  }
  if (!checkOutStr) {
    return { isValid: false, error: "Please select a check-out date." };
  }

  const today = getTodayDateString();

  if (checkInStr < today) {
    return {
      isValid: false,
      error: "Check-in date cannot be in the past. Please select today or a future date."
    };
  }

  if (checkOutStr <= checkInStr) {
    return {
      isValid: false,
      error: "Check-out date must be strictly after check-in date."
    };
  }

  return { isValid: true, error: null };
}

/**
 * Formats YYYY-MM-DD string into friendly format e.g. "Thu, 25 Sep 2026"
 */
export function formatDisplayDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
