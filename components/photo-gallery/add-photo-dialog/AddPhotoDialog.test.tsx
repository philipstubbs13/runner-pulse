import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddPhotoDialog } from "./AddPhotoDialog";
import { useFormStatus } from "react-dom";

vi.mock("react-dom", () => ({
  useFormStatus: vi.fn(),
}));

describe("AddPhotoDialog", () => {
  const dialogTitle = "Upload New Photo";

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
      render(<AddPhotoDialog />);

      expect(screen.queryByText(dialogTitle)).not.toBeInTheDocument();
    });
  });

  describe("when dialog is open", () => {
    test("should render contents", () => {
      render(<AddPhotoDialog />);

      fireEvent.click(screen.getByTestId("upload-photo-icon"));

      expect(screen.getByText(dialogTitle)).toBeInTheDocument();
      expect(screen.getByRole("textbox")).toHaveValue("");
    });
  });

  describe("when caption input is changed", () => {
    test("caption input value should update", () => {
      render(<AddPhotoDialog />);

      fireEvent.click(screen.getByTestId("upload-photo-icon"));
      fireEvent.change(screen.getByPlaceholderText(/caption/i), {
        target: { value: "captionText" },
      });

      expect(screen.getByRole("textbox")).toHaveValue("captionText");
    });
  });
});
