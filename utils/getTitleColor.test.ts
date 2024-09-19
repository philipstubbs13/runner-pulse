import { Tab, tabTextColors } from "@/components/tabs/Tabs.constants";
import { getTitleColor } from "./getTitleColor";

describe(".getTitleColor()", () => {
  describe("when active tab is results", () => {
    test("should return correct title color", () => {
      const result = getTitleColor(Tab.Results);

      expect(result).toEqual(tabTextColors[Tab.Results]);
    });
  });

  describe("when active tab is gallery", () => {
    test("should return correct title color", () => {
      const result = getTitleColor(Tab.Gallery);

      expect(result).toEqual(tabTextColors[Tab.Gallery]);
    });
  });

  describe("when active tab is races", () => {
    test("should return correct title color", () => {
      const result = getTitleColor(Tab.Races);

      expect(result).toEqual(tabTextColors[Tab.Races]);
    });
  });

  describe("when active tab is null", () => {
    test("should return empty string", () => {
      const result = getTitleColor(null);

      expect(result).toEqual("");
    });
  });
});
