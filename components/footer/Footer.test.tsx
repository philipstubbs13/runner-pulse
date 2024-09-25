import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  test("should render", () => {
    render(<Footer />);

    expect(screen.getAllByText(/runner pulse/i)).toHaveLength(2);
    expect(screen.getAllByRole("link")).toHaveLength(12);
  });

  test("should display the current year in the footer", () => {
    const currentYear = new Date().getFullYear();

    render(<Footer />);

    const footerText = screen.getByText(
      `© ${currentYear} Runner Pulse. All rights reserved.`
    );
    expect(footerText).toBeInTheDocument();
  });
});
