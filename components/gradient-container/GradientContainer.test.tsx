import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { GradientContainer } from "./GradientContainer";

describe("GradientContainer", () => {
  test("should render children", () => {
    render(<GradientContainer>child</GradientContainer>);

    expect(screen.getByText(/child/i)).toBeInTheDocument();
  });
});
