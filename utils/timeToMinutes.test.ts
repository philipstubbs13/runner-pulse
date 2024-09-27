import { minutesToTime, timeToMinutes } from "./timeToMinutes";

describe(".timeToMinutes()", () => {
  test('should convert "01:30:00" to 90 minutes', () => {
    const result = timeToMinutes("01:30:00");

    expect(result).toEqual(90);
  });

  test('should convert "01:30:30" to 90.5 minutes', () => {
    const result = timeToMinutes("01:30:30");

    expect(result).toEqual(90.5);
  });

  test('should convert "00:00:00" to 0 minutes', () => {
    const result = timeToMinutes("00:00:00");

    expect(result).toEqual(0);
  });

  test('should convert "24:00:00" to 1440 minutes', () => {
    const result = timeToMinutes("24:00:00");
    expect(result).toEqual(1440);
  });

  test("should handle invalid time formats gracefully", () => {
    expect(() => timeToMinutes("invalid")).toThrow();
    expect(() => timeToMinutes("25:61:61")).toThrow();
    expect(() => timeToMinutes("12:30")).toThrow();
  });
});

describe(".minutesToTime()", () => {
  test('should convert 0 minutes to "00:00:00"', () => {
    const result = minutesToTime(0);

    expect(result).toEqual("00:00:00");
  });

  test('should convert 90.5 minutes to "01:30:30"', () => {
    const result = minutesToTime(90.5);

    expect(result).toEqual("01:30:30");
  });

  test('should convert 90 minutes to "01:30:00"', () => {
    const result = minutesToTime(90);

    expect(result).toEqual("01:30:00");
  });

  test('should convert 1440 minutes to "24:00:00"', () => {
    const result = minutesToTime(1440);
    expect(result).toEqual("24:00:00");
  });
});
