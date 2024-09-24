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
