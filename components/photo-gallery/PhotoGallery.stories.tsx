import type { Meta, StoryObj } from "@storybook/react";

import { PhotoGallery } from "./PhotoGallery";

const meta = {
  title: "Components/Photo Gallery",
  component: PhotoGallery,
  tags: ["autodocs"],
} satisfies Meta<typeof PhotoGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
