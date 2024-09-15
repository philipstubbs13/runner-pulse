import type { Meta, StoryObj } from "@storybook/react";

import { PhotoGalleryItem } from "./PhotoGalleryItem";

/**
 * A reusable component that displays an image with an overlay caption.
 * The image is displayed using the Next.js Image component, ensuring optimal performance with
 * automatic image optimization. When hovered, a semi-transparent overlay appears, showing the
 * image's caption. This component is used with the PhotoGallery component.
 */
const meta = {
  component: PhotoGalleryItem,
  tags: ["autodocs"],
  title: "Components/Photo Gallery Item",
  decorators: [
    (Story) => (
      <div className="max-w-[250px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PhotoGalleryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    item: {
      caption: "First marathon finish",
      id: "1",
      image: "/profile.jpeg",
    },
  },
};
