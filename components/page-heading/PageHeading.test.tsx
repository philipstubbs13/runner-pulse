import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageHeading } from "./PageHeading";
import { ComponentProps } from "react";
import { Tab, tabTextColors } from "../tabs/Tabs.constants";

describe("PageHeading", () => {
  const defaultProps: ComponentProps<typeof PageHeading> = {
    activeTab: Tab.Gallery,
  };

  test("should render", () => {
    render(<PageHeading {...defaultProps} />);

    expect(screen.getByText(/runner pulse/i)).toBeInTheDocument();
  });

  test("should apply correct text color styles based on active tab", () => {
    render(<PageHeading {...defaultProps} />);

    expect(screen.getByTestId("page-heading-container")).toHaveClass(
      tabTextColors[Tab.Gallery]
    );
  });
});
