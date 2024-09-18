import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./Footer";

/**
 * The `Footer` component provides a responsive and informative footer section for the application.
 * It contains company information, quick links to essential pages, and social media icons for connecting.
 */
const meta = {
  component: Footer,
  tags: ["autodocs"],
  title: "Components/Footer",
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
