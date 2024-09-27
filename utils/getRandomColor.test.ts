import { getRandomColor } from "./getRandomColor";

describe(".getRandomColor()", () => {
  test("should return a string that starts with #", () => {
    const color = getRandomColor();

    expect(color[0]).toBe("#");
  });

  test("should return a string of length 7", () => {
    const color = getRandomColor();

    expect(color.length).toBe(7);
  });

  test("should return a valid hex color code", () => {
    const color = getRandomColor();
    const hexRegex = /^#[0-9A-F]{6}$/i;

    expect(hexRegex.test(color)).toBe(true);
  });
});
