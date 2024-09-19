import { render, screen, fireEvent, act } from "@testing-library/react";
import { EditPhotoCard } from "./EditPhotoCard";
import { IPhotoGalleryItem } from "@/components/photo-gallery/PhotoGallery.types";
import editRacePhoto from "@/app/actions/editRacePhoto";
import deleteRacePhoto from "@/app/actions/deleteRacePhoto";
import { vi } from "vitest";

vi.mock("@/app/actions/editRacePhoto");
vi.mock("@/app/actions/deleteRacePhoto");

describe("EditPhotoCard", () => {
  const mockPhoto: IPhotoGalleryItem = {
    id: "1",
    caption: "Beautiful sunset",
    image: "/test-image.jpg",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders the photo card with image and caption", () => {
    render(<EditPhotoCard photo={mockPhoto} />);

    const image = screen.getByAltText(mockPhoto.caption);
    const caption = screen.getByText(mockPhoto.caption);

    expect(image).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
  });

  test("allows editing the caption", async () => {
    render(<EditPhotoCard photo={mockPhoto} />);

    const editButton = screen.getByRole("button", { name: /pencil/i });

    act(() => {
      fireEvent.click(editButton);
    });

    const input = screen.getByLabelText(/edit caption/i);

    act(() => {
      fireEvent.change(input, { target: { value: "New Caption" } });
    });

    expect(input).toHaveValue("New Caption");

    const saveButton = screen.getByRole("button", { name: /save/i });

    act(() => {
      fireEvent.click(saveButton);
    });

    expect(editRacePhoto).toHaveBeenCalledWith(mockPhoto.id, "New Caption");
  });

  test("calls deleteRacePhoto when delete button is clicked", () => {
    render(<EditPhotoCard photo={mockPhoto} />);

    const deleteButton = screen.getByRole("button", { name: /trash/i });

    act(() => {
      fireEvent.click(deleteButton);
    });

    expect(deleteRacePhoto).toHaveBeenCalledWith(mockPhoto.id);
  });
});
