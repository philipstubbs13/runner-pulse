import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { ChartCard } from "./ChartCard";
import { ComponentProps } from "react";

describe("ChartCard", () => {
  const defaultProps: ComponentProps<typeof ChartCard> = {
    children: "chart children",
    description: "chart description",
    title: "chart title",
  };

  test("should render with default props", () => {
    render(<ChartCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText("chart children")).toBeInTheDocument();
  });
});
