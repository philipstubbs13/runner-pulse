import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import {
  Tab,
  tabBackgroundColors,
  tabHoverBackgroundColors,
} from "@/components/tabs/Tabs.constants";
import { SubmitButton } from "./SubmitButton";
import { useFormStatus } from "react-dom";

vi.mock("react-dom", () => ({
  useFormStatus: vi.fn(),
}));

describe("SubmitButton", () => {
  beforeEach(() => {
    // @ts-ignore
    (useFormStatus as vi.Mock).mockReturnValue({
      pending: false,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should render the correct styles for each tab", () => {
    const tab = Tab.Results;
    const backgroundColor = tabBackgroundColors[tab];
    const hoverBackgroundColor = tabHoverBackgroundColors[tab];

    render(<SubmitButton tab={tab} />);

    expect(screen.getByRole("button")).toHaveClass(backgroundColor);
    expect(screen.getByRole("button")).toHaveClass(hoverBackgroundColor);
  });

  test("should be disabled when form status is pending", () => {
    // @ts-ignore
    (useFormStatus as vi.Mock).mockReturnValue({
      pending: true,
    });

    const tab = Tab.Results;

    render(<SubmitButton tab={tab} />);

    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByRole("button")).toHaveTextContent("Submitting...");
  });

  test("should not be disabled when form status is not pending", () => {
    const tab = Tab.Results;

    render(<SubmitButton tab={tab} />);

    expect(screen.getByRole("button")).toBeEnabled();
    expect(screen.getByRole("button")).toHaveTextContent("Submit");
  });
});
