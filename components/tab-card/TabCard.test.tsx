import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { TabCard } from "./TabCard";
import { ComponentProps } from "react";
import {
  Tab,
  tabBackgroundColors,
  tabBorderColors,
  tabLabels,
} from "../tabs/Tabs.constants";

describe("TabCard", () => {
  const defaultProps: ComponentProps<typeof TabCard> = {
    children: "children",
    tab: Tab.Gallery,
  };

  test("should render", () => {
    render(<TabCard {...defaultProps} />);

    expect(screen.getByText(tabLabels[defaultProps.tab])).toBeInTheDocument();
    expect(screen.getByText(tabLabels[defaultProps.tab])).toBeInTheDocument();
    expect(screen.getByTestId("tab-card-container")).toHaveClass(
      tabBorderColors[defaultProps.tab]
    );
    expect(screen.getByTestId("card-header")).toHaveClass(
      tabBackgroundColors[defaultProps.tab]
    );
    expect(screen.getByText("children")).toBeInTheDocument();
  });
});
