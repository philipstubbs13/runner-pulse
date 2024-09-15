import type { Meta, StoryObj } from "@storybook/react";

import { Auth } from "./Auth";

/**
 * The Auth component provides a user interface for authentication. It displays available sign-in options
 * from different authentication providers, allowing users to log in or create an account.
 */
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
