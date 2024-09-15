import type { Meta, StoryObj } from "@storybook/react";

import { Auth } from "./Auth";

const meta = {
  component: Auth,
  tags: ["autodocs"],
  title: "Components/Auth",
} satisfies Meta<typeof Auth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
