import type { Meta, StoryObj } from "@storybook/react";

import { AppLogo } from "./AppLogo";

/**
 * The `AppLogo` component renders an SVG logo for the application with optional background color control.
 */
const meta = {
  component: AppLogo,
  tags: ["autodocs"],
  title: "Components/App Logo",
} satisfies Meta<typeof AppLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

export const DarkBackground: Story = {
  args: {
    backgroundColor: "#fff",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
