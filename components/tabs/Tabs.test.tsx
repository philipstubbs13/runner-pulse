import { Mock, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { Tabs } from "./Tabs";
import { useGlobalContext } from "@/context/global-context/GlobalContext";
import { Tab, tabLabels } from "./Tabs.constants";

vi.mock("@/context/global-context/GlobalContext", () => ({
  useGlobalContext: vi.fn(),
}));

describe("Tabs", () => {
  const defaultProps: ComponentProps<typeof Tabs> = {
    children: "tab content",
  };
  const mockUpdateActiveTab = vi.fn();

  const mockContextValue = {
    activeTab: Tab.Results,
    updateActiveTab: mockUpdateActiveTab,
    shouldHideTabs: false,
  };

  beforeEach(() => {
    (useGlobalContext as Mock).mockReturnValue(mockContextValue);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should render tab content", () => {
    render(<Tabs {...defaultProps} />);

    expect(screen.getByText("tab content")).toBeInTheDocument();
  });

  test("should render all the tab labels correctly", () => {
    render(<Tabs>Tab content</Tabs>);

    expect(screen.getByText(tabLabels[Tab.Results])).toBeInTheDocument();
    expect(screen.getByText(tabLabels[Tab.Races])).toBeInTheDocument();
    expect(screen.getByText(tabLabels[Tab.Gallery])).toBeInTheDocument();
  });

  test("should not render tabs when shouldHideTabs is true", () => {
    (useGlobalContext as Mock).mockReturnValue({
      ...mockContextValue,
      shouldHideTabs: true,
    });

    render(<Tabs>Tab content</Tabs>);

    expect(screen.queryByText(tabLabels[Tab.Results])).toBeNull();
    expect(screen.queryByText(tabLabels[Tab.Races])).toBeNull();
    expect(screen.queryByText(tabLabels[Tab.Gallery])).toBeNull();
  });
});
