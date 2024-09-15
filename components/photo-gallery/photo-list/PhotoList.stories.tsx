import type { Meta, StoryObj } from "@storybook/react";

import { PhotoList } from "./PhotoList";
import { IPhotoGalleryItem } from "../PhotoGallery.types";

/**
 * The `PhotoList` component displays a grid of photos that can be viewed in a lightbox gallery.
 * Each photo can be clicked to open a detailed view with captions and download options.
 */
const meta = {
  title: "Components/Photo List",
  component: PhotoList,
  tags: ["autodocs"],
} satisfies Meta<typeof PhotoList>;

export default meta;
type Story = StoryObj<typeof meta>;

const photosMock: IPhotoGalleryItem[] = [
  {
    caption: "My first marathon",
    id: "1",
    image: "profile.jpeg",
  },
  {
    caption: "PR in 5k event",
    id: "2",
    image: "phil-with-dog-friday.jpeg",
  },
  {
    caption: "Won 1st place",
    id: "3",
    image: "contact-image.jpg",
  },
];

export const Basic: Story = {
  args: {
    photos: photosMock,
  },
};

export const EmptyList: Story = {
  args: {
    photos: [],
  },
};
