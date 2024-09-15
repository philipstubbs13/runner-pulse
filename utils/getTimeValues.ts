export const getMinutesOrSecondsValues = (): string[] => {
  return Array.from({ length: 60 }, (v, i) =>
    i < 10 ? "0" + i : i.toString()
  );
};

export const getHoursValues = (): string[] => {
  return Array.from({ length: 12 }, (v, i) =>
    i < 10 ? "0" + i : i.toString()
  );
};
