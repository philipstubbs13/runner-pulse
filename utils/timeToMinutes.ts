export const timeToMinutes = (timeString: string): number => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);

  const totalMinutes = hours * 60 + minutes + seconds / 60;

  return totalMinutes;
};
