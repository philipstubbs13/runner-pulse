import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ConfirmationDialog } from "./ConfirmationDialog";
import { ComponentProps } from "react";

describe("ConfirmationDialog", () => {
  const defaultProps: ComponentProps<typeof ConfirmationDialog> = {
    isOpen: false,
    onClose: vi.fn(),
    onConfirm: vi.fn(),
    title: "titleMock",
    description: "descriptionMock",
  };

  describe("when dialog is not open", () => {
    test("should not render contents", () => {
      render(<ConfirmationDialog {...defaultProps} />);

      expect(screen.queryByText(defaultProps.title)).not.toBeInTheDocument();
    });
  });

  describe("when dialog is open", () => {
    test("should render contents", () => {
      render(<ConfirmationDialog {...defaultProps} isOpen={true} />);

      expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
      expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    });
  });

  describe("when confirm button is clicked", () => {
    test(".onConfirm() should be called", () => {
      render(<ConfirmationDialog {...defaultProps} isOpen={true} />);

      fireEvent.click(screen.getByText("Delete"));
      expect(defaultProps.onConfirm).toHaveBeenCalledTimes(1);
    });
  });

  describe("when cancel button is clicked", () => {
    test(".onClose() should be called", () => {
      render(<ConfirmationDialog {...defaultProps} isOpen={true} />);

      fireEvent.click(screen.getByText("Cancel"));
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("when confirmText prop is passed", () => {
    test("should render confirmText", () => {
      render(
        <ConfirmationDialog
          {...defaultProps}
          isOpen={true}
          confirmText="Confirm"
        />
      );

      expect(screen.getByText("Confirm")).toBeInTheDocument();
    });
  });

  describe("when cancelText prop is passed", () => {
    test("should render cancelText", () => {
      render(
        <ConfirmationDialog
          {...defaultProps}
          isOpen={true}
          cancelText="cancelText"
        />
      );

      expect(screen.getByText("cancelText")).toBeInTheDocument();
    });
  });
});
