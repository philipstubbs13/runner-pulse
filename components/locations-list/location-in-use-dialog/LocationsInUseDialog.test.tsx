import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { LocationInUseDialog } from "./LocationInUseDialog";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

vi.mock("react-dom", () => ({
  useFormStatus: vi.fn(),
}));

describe("LocationInUseDialog", () => {
  const defaultProps: ComponentProps<typeof LocationInUseDialog> = {
    isOpen: false,
    onClose: vi.fn(),
  };
  const dialogTitle = "Location In Use";

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
      render(<LocationInUseDialog {...defaultProps} />);

      expect(screen.queryByText(dialogTitle)).not.toBeInTheDocument();
    });
  });

  describe("when dialog is open", () => {
    test("should render contents", () => {
      render(<LocationInUseDialog {...defaultProps} isOpen={true} />);

      expect(screen.getByText(dialogTitle)).toBeInTheDocument();
    });
  });

  describe("when understood button is clicked", () => {
    test(".onClose() should be called", () => {
      render(<LocationInUseDialog {...defaultProps} isOpen={true} />);

      fireEvent.click(screen.getByRole("button", { name: /understood/i }));

      expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });
  });
});
