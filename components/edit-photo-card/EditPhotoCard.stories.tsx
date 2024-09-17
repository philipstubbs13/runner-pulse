import type { Meta, StoryObj } from "@storybook/react";

import { EditPhotoCard } from "./EditPhotoCard";

/**
 * The `EditPhotoCard` component provides a way to display and edit individual photos within a gallery.
 * It allows users to edit the caption of a photo or delete it.
 * The component is built with responsiveness and a clean UI to ensure ease of use.
 */
const meta = {
  component: EditPhotoCard,
  tags: ["autodocs"],
  title: "Components/EditPhotoCard",
  decorators: [
    (Story) => (
      <div className="max-w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EditPhotoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    photo: {
      caption: "This is a captin",
      id: "1",
      image: "profile.jpeg",
    },
  },
};
