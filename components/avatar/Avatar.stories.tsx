import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

/**
 * The Avatar component is used to display a user's profile image.
 * If no image is provided, it falls back to displaying the initials of the user’s name.
 */
const meta = {
  component: Avatar,
  tags: ["autodocs"],
  title: "Components/Avatar",
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    alt: "user profile",
    image: "https://github.com/shadcn.png",
    name: "John Doe",
  },
};

export const WithFallback: Story = {
  args: {
    alt: "user profile",
    name: "John Doe",
  },
};

export const WithOptionalClassName: Story = {
  args: {
    alt: "user profile",
    className: "w-16 h-16",
    image: "https://github.com/shadcn.png",
    name: "John Doe",
  },
};
