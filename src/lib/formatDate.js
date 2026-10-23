/**
 * formatDateTime - Turn a model date string (e.g. "2012-08-30 10:44:23")
 * into a user-friendly string (e.g. "Aug 30, 2012, 10:44 AM").
 *
 * @param {string} dateString  Date string from the model data.
 * @returns {string}           Formatted date, or the original string if invalid.
 */
function formatDateTime(dateString) {
  // Replace the space with "T" so every browser parses the string the same way.
  const date = new Date(String(dateString).replace(" ", "T"));
  if (Number.isNaN(date.getTime())) {
    return String(dateString);
  }
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default formatDateTime;
