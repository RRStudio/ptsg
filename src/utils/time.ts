/**
 * Formats a duration string (in seconds or HH:MM:SS format) to a human-readable format
 * @param duration - Duration string from RSS feed (e.g., "3600", "01:00:00", "60:30")
 * @returns Formatted duration string (e.g., "1:00:00", "1:00", "1:30")
 */
export function formatDuration(duration: string): string {
  if (!duration) return "";

  // Handle different duration formats
  let totalSeconds: number;

  if (duration.includes(":")) {
    // Format: HH:MM:SS or MM:SS
    const parts = duration.split(":").map(Number);

    if (parts.length === 3) {
      // HH:MM:SS format
      const [hours, minutes, seconds] = parts;
      totalSeconds = hours * 3600 + minutes * 60 + seconds;
    } else if (parts.length === 2) {
      // MM:SS format
      const [minutes, seconds] = parts;
      totalSeconds = minutes * 60 + seconds;
    } else {
      // Invalid format, return as is
      return duration;
    }
  } else {
    // Assume it's seconds as a string
    totalSeconds = Number.parseInt(duration, 10);

    if (Number.isNaN(totalSeconds)) {
      return duration;
    }
  }

  // Convert to hours, minutes, seconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Format based on duration length
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  } else {
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }
}

/**
 * Formats a duration in seconds to a human-readable format
 * @param seconds - Duration in seconds
 * @returns Formatted duration string
 */
export function formatDurationFromSeconds(seconds: number): string {
  return formatDuration(seconds.toString());
}

/**
 * Converts a duration string to total seconds
 * @param duration - Duration string (e.g., "01:30:00", "90:30", "3600")
 * @returns Total seconds
 */
export function durationToSeconds(duration: string): number {
  if (!duration) return 0;

  if (duration.includes(":")) {
    const parts = duration.split(":").map(Number);

    if (parts.length === 3) {
      const [hours, minutes, seconds] = parts;
      return hours * 3600 + minutes * 60 + seconds;
    } else if (parts.length === 2) {
      const [minutes, seconds] = parts;
      return minutes * 60 + seconds;
    }
  }

  const seconds = Number.parseInt(duration, 10);
  return Number.isNaN(seconds) ? 0 : seconds;
}
