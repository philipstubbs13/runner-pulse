import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { AppLogo } from "./AppLogo";

describe("AppLogo", () => {
  test("should render", () => {
    render(<AppLogo />);

    expect(screen.getByTestId("app-logo")).toBeDefined();
  });

  describe("when backgroundColor is passed as prop", () => {
    test("should apply style", () => {
      render(<AppLogo backgroundColor="#fff" />);

      expect(screen.getByTestId("app-logo")).toHaveStyle({
        backgroundColor: "#fff",
      });
    });
  });
});
