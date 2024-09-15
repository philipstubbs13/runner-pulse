import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";

/**
 * The `Loader` component displays a spinner using the [react-spinners](https://www.davidhu.io/react-spinners/) package.
 * It's used to indicate loading states in the application.
 */
const meta = {
  component: Loader,
  tags: ["autodocs"],
  title: "Components/Loader",
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
