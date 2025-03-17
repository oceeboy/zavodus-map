import { FullLocationData } from "@/modules/maps";
/**
 * Converts seconds into a readable time format.
 * @param seconds - The number of seconds.
 * @returns A formatted string representing hours, minutes, and seconds.
 * @example
 * ```
 * console.log(secondsToTime(222)); // "3 minutes, 42 seconds"
 * ```
 */

function secondsToTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const timeParts: string[] = [];
  if (hours) {
    timeParts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  }
  if (minutes) {
    timeParts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  }
  if (remainingSeconds || timeParts.length === 0) {
    timeParts.push(
      `${remainingSeconds} second${remainingSeconds > 1 ? "s" : ""}`
    );
  }

  return timeParts.join(", ");
}

/**
 * Converts a distance in meters to a human-readable format (meters or kilometers).
 * @param meters - The distance in meters.
 * @param precision - The number of decimal places for kilometers (default: 2).
 * @returns A formatted string representing the distance.
 * @example
 * ```
 * console.log(metersToDistance(1500)); // "1.50 km"
 * console.log(metersToDistance(950, 1)); // "950 m"
 * ```
 */
function metersToDistance(meters: number, precision: number = 2): string {
  if (meters < 0) {
    throw new Error("Distance cannot be negative");
  }
  if (meters >= 1000) {
    const kilometers = meters / 1000;
    return `${kilometers.toFixed(precision)} km`;
  }
  return `${meters.toFixed(0)} m`;
}

/**
 * Generates a list of random nearby locations based on the given latitude and longitude.
 *
 * @param {number} latitude - The base latitude to generate locations around.
 * @param {number} longitude - The base longitude to generate locations around.
 * @param {number} [totalPoints=7] - The number of locations to generate (default is 7).
 * @returns {FullLocationData[]} An array of generated nearby locations.
 */
export const generateNearbyLocations = (
  latitude: number,
  longitude: number,
  totalPoints: number = 7
): FullLocationData[] => {
  return Array.from({ length: totalPoints }, (_, index) => ({
    id: index + 1,

    latitude: parseFloat((latitude + (Math.random() * 0.1 - 0.005)).toFixed(4)), // Round to 6 decimal places
    longitude: parseFloat(
      (longitude + (Math.random() * 0.1 - 0.005)).toFixed(4)
    ),
  }));
};
export { secondsToTime, metersToDistance };
