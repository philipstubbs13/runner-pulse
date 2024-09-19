import { render, screen } from "@testing-library/react";
import { NoResults } from "./NoResults";
import { Tab } from "@/components/tabs/Tabs.constants";
import { ComponentProps, ComponentType } from "react";

const MockIcon: ComponentType<unknown> = () => <svg data-testid="mock-icon" />;

describe("NoResults", () => {
  const defaultProps: ComponentProps<typeof NoResults> = {
    description: "No results found.",
    Icon: MockIcon,
    tab: Tab.Results,
    title: "No Results",
  };

  test("should renders the title, description, and icon correctly", () => {
    render(<NoResults {...defaultProps} />);

    const title = screen.getByText("No Results");
    const description = screen.getByText("No results found.");
    const icon = screen.getByTestId("mock-icon");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  test("should apply correct styles when Tab is Results", () => {
    render(<NoResults {...defaultProps} tab={Tab.Results} />);

    const container = screen.getByText("No Results").closest("div");

    expect(container).toHaveClass("bg-blue-50");
  });

  test("should apply correct styles when Tab is Gallery", () => {
    render(<NoResults {...defaultProps} tab={Tab.Gallery} />);

    const container = screen.getByText("No Results").closest("div");

    expect(container).toHaveClass("bg-pink-50");
  });

  test("should apply correct styles when Tab is Settings", () => {
    render(<NoResults {...defaultProps} tab={Tab.Settings} />);

    const container = screen.getByText("No Results").closest("div");

    expect(container).toHaveClass("bg-blue-50");
  });
});
