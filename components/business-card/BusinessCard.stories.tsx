import type { Meta, StoryObj } from "@storybook/react";

import { BusinessCard } from "./BusinessCard";

const meta = {
  component: BusinessCard,
  tags: ["autodocs"],
  title: "Components/Business Card",
} satisfies Meta<typeof BusinessCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
