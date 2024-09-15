import type { Meta, StoryObj } from "@storybook/react";

import { AddPhotoDialog } from "./AddPhotoDialog";

/**
 * The `AddPhotoDialog` component provides a dialog for uploading or editing a photo in a gallery.
 * It includes a form for entering a caption and, when uploading a new photo, a file input to select an image.
 */
const meta = {
  title: "Components/Add Photo Dialog",
  component: AddPhotoDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof AddPhotoDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddPhoto: Story = {
  args: {},
};

export const IsEditingPhoto: Story = {
  args: {
    galleryItem: {
      caption: "My first marathon",
      id: "1",
      image: "profile.jpeg",
    },
  },
};
