import { formatISODate } from "@/utils/formatISODate";

describe(".formatISODate()", () => {
  test("should format a valid ISO date string into MM/DD/YYYY format", () => {
    const isoDate = "2023-09-15T00:00:00Z";
    const formattedDate = formatISODate(isoDate);

    expect(formattedDate).toBe("09/15/2023");
  });

  test("should handle single digit months and days correctly", () => {
    const isoDate = "2023-01-09T00:00:00Z";
    const formattedDate = formatISODate(isoDate);

    expect(formattedDate).toBe("01/09/2023");
  });

  test("should format leap year dates correctly", () => {
    const isoDate = "2020-02-29T00:00:00Z";
    const formattedDate = formatISODate(isoDate);

    expect(formattedDate).toBe("02/29/2020");
  });

  test("should handle invalid ISO date strings gracefully", () => {
    const invalidIsoDate = "invalid-date";

    expect(() => formatISODate(invalidIsoDate)).toThrowError();
  });

  test("should handle an empty string input gracefully", () => {
    const emptyString = "";

    expect(() => formatISODate(emptyString)).toThrowError();
  });
});
