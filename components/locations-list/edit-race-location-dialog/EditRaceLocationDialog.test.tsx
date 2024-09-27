import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditRaceLocationDialog } from "./EditRaceLocationDialog";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

vi.mock("react-dom", () => ({
  useFormStatus: vi.fn(),
}));

describe("EditRaceDisanceDialog", () => {
  const defaultProps: ComponentProps<typeof EditRaceLocationDialog> = {
    city: "Minneapolis",
    locationId: "2",
    state: "MN",
  };
  const dialogTitle = "Edit Race Location";

  beforeEach(() => {
    // @ts-ignore
    (useFormStatus as vi.Mock).mockReturnValue({
      pending: false,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("when dialog is not open", () => {
    test("should not render contents", () => {
      render(<EditRaceLocationDialog {...defaultProps} />);

      expect(screen.queryByText(dialogTitle)).not.toBeInTheDocument();
    });
  });

  describe("when dialog is open", () => {
    test("should render contents", () => {
      render(<EditRaceLocationDialog {...defaultProps} />);

      fireEvent.click(screen.getByTestId("edit-icon"));

      expect(screen.getByText(dialogTitle)).toBeInTheDocument();
    });
  });

  describe("when city is passed as prop", () => {
    test("city input should have default value", () => {
      render(<EditRaceLocationDialog {...defaultProps} />);

      fireEvent.click(screen.getByTestId("edit-icon"));

      expect(screen.getByRole("textbox")).toHaveValue(defaultProps.city);
    });
  });

  describe("when state is passed as prop", () => {
    test("state select should have default value", () => {
      render(<EditRaceLocationDialog {...defaultProps} />);

      fireEvent.click(screen.getByTestId("edit-icon"));

      expect(screen.getByRole("combobox")).toHaveTextContent("Minnesota");
    });
  });

  describe("when city input is changed", () => {
    test("city input value should update", () => {
      render(<EditRaceLocationDialog {...defaultProps} />);

      fireEvent.click(screen.getByTestId("edit-icon"));
      fireEvent.change(screen.getByRole("textbox"), {
        target: { value: "St Paul" },
      });

      expect(screen.getByRole("textbox")).toHaveValue("St Paul");
    });
  });
});
