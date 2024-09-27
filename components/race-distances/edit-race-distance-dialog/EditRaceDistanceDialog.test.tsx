import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditRaceDistanceDialog } from "./EditRaceDistanceDialog";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

vi.mock("react-dom", () => ({
  useFormStatus: vi.fn(),
}));
vi.mock("@/app/actions/editRaceDistance");

describe("EditRaceDisanceDialog", () => {
  const defaultProps: ComponentProps<typeof EditRaceDistanceDialog> = {
    distance: "5k",
    id: "1",
  };
  const dialogTitle = "Edit Race Distance Name";

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
      render(<EditRaceDistanceDialog {...defaultProps} />);

      expect(screen.queryByText(dialogTitle)).not.toBeInTheDocument();
    });
  });

  describe("when dialog is open", () => {
    test("should render contents", () => {
      render(<EditRaceDistanceDialog {...defaultProps} />);

      fireEvent.click(screen.getByTestId("edit-race-distance-icon"));

      expect(screen.getByText(dialogTitle)).toBeInTheDocument();
    });
  });

  describe("when distance is passed as prop", () => {
    test("distance input should have default value", () => {
      render(<EditRaceDistanceDialog {...defaultProps} />);

      fireEvent.click(screen.getByTestId("edit-race-distance-icon"));

      expect(screen.getByRole("textbox")).toHaveValue(defaultProps.distance);
    });
  });
});
