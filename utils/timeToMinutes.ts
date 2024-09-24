export const timeToMinutes = (timeString: string): number => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  const invalidMinutes = minutes > 59;
  const invalidSeconds = seconds > 59;

  if (
    !timeString.includes(":") ||
    invalidMinutes ||
    invalidSeconds ||
    seconds == null
  ) {
    throw new Error("Invalid Time");
  }

  const totalMinutes = hours * 60 + minutes + seconds / 60;

  return totalMinutes;
};

export const minutesToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = Math.floor(minutes % 60);
  const seconds = Math.round((minutes - Math.floor(minutes)) * 60);

  const paddedHours = String(hours).padStart(2, "0");
  const paddedMinutes = String(remainingMinutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
};
