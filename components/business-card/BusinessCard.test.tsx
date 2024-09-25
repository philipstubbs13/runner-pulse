import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BusinessCard } from "./BusinessCard";

describe("BusinessCard", () => {
  test("should render", () => {
    render(<BusinessCard />);

    expect(screen.getByText(/runner pulse/i)).toBeInTheDocument();
  });
});
