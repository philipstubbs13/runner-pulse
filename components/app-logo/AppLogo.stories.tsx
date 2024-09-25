import type { Meta, StoryObj } from "@storybook/react";

import { AppLogo } from "./AppLogo";

/**
 * The `AppLogo` component renders an SVG logo for the application with optional background color and size control.
 */
const meta = {
  component: AppLogo,
  tags: ["autodocs"],
  title: "Components/App Logo",
} satisfies Meta<typeof AppLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const WithLightBackground: Story = {
  args: {
    backgroundColor: "#fff",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
