export const formatISODate = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${month}/${day}/${year}`;
};
