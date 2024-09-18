import type { Meta, StoryObj } from "@storybook/react";

import { FooterQuickLink } from "./FooterQuickLink";
import { Routes } from "@/utils/router/Routes.constants";

/**
 * The `FooterQuickLink` component is a simple, reusable link element designed for the footer section
 * or other areas where quick navigation is needed. It displays a label that acts as a clickable link
 * to the specified URL.
 */
const meta = {
  component: FooterQuickLink,
  tags: ["autodocs"],
  title: "Components/Footer Quick Link",
} satisfies Meta<typeof FooterQuickLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    href: Routes.Results,
    label: "Personal Results",
  },
};
