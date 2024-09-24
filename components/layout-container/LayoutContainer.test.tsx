import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { LayoutContainer } from "./LayoutContainer";

describe("LayoutContainer", () => {
  test("should render children", () => {
    render(<LayoutContainer>child</LayoutContainer>);

    expect(screen.getByText(/child/i)).toBeInTheDocument();
  });
});
