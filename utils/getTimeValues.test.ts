import {
  getHoursValues,
  getMinutesOrSecondsValues,
} from "@/utils/getTimeValues";

describe("getTimeValues", () => {
  describe(".getMinutesOrSecondsValues()", () => {
    test("should return an array of 60 string values from '00' to '59'", () => {
      const result = getMinutesOrSecondsValues();

      expect(result).toHaveLength(60);
      expect(result.slice(0, 10)).toEqual([
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
      ]);
      expect(result.slice(10)).toEqual([
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
      ]);
    });
  });

  describe(".getHoursValues()", () => {
    test("should return an array of 12 string values from '00' to '11'", () => {
      const result = getHoursValues();

      expect(result).toHaveLength(12);
      expect(result.slice(0, 10)).toEqual([
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
      ]);
      expect(result.slice(10)).toEqual(["10", "11"]);
    });
  });
});
