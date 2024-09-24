import type { Meta, StoryObj } from "@storybook/react";

import { LayoutContainer } from "./LayoutContainer";

/**
 * The `LayoutContainer` is a wrapper component that provides a visually appealing background for a Next.js layout.
 */
const meta = {
  component: LayoutContainer,
  tags: ["autodocs"],
  title: "Components/Layout Container",
} satisfies Meta<typeof LayoutContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <div>Runner Pulse Layout Container</div>,
  },
};
