import type { Meta, StoryObj } from "@storybook/react";

import { GradientContainer } from "./GradientContainer";

/**
 * The `GradientContainer` is a wrapper component that provides a visually appealing background gradient for its children.
 */
const meta = {
  component: GradientContainer,
  tags: ["autodocs"],
  title: "Components/Gradient Container",
} satisfies Meta<typeof GradientContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <div>Runner Pulse Gradient Container</div>,
  },
};
