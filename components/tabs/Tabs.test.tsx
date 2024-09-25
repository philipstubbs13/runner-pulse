import { Mock, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { Tabs } from "./Tabs";
import { useGlobalContext } from "@/context/global-context/GlobalContext";
import { Tab, tabLabels } from "./Tabs.constants";
import { usePathname, useRouter } from "next/navigation";

vi.mock("@/context/global-context/GlobalContext", () => ({
  useGlobalContext: vi.fn(),
  usePathname: vi.fn(),
  useRouter: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
}));

describe("Tabs", () => {
  const defaultProps: ComponentProps<typeof Tabs> = {
    children: "tab content",
  };

  const mockContextValue = {
    shouldHideTabs: false,
  };

  beforeEach(() => {
    (useGlobalContext as Mock).mockReturnValue(mockContextValue);
    (usePathname as Mock).mockReturnValue(Tab.Stats);
    (useRouter as Mock).mockReturnValue({
      push: vi.fn(),
    });
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
    expect(screen.getByText(tabLabels[Tab.Stats])).toBeInTheDocument();
  });

  test("active tab should have correct active stlyes", () => {
    render(<Tabs>Tab content</Tabs>);

    expect(screen.getByText(tabLabels[Tab.Stats])).toHaveClass(
      "data-[state=active]:bg-purple-500 data-[state=active]:text-white"
    );
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
    expect(screen.queryByText(tabLabels[Tab.Stats])).toBeNull();
  });
});
