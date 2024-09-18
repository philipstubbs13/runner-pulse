import type { Meta, StoryObj } from "@storybook/react";

import { FooterSocialLink } from "./FooterSocialLink";
import { Mail } from "lucide-react";

/**
 * The `FooterSocialLink` component is a customizable anchor element designed for linking to
 * external social media platforms or any other external resources. It supports icons as
 * children and includes an accessible label for assistive devices.
 */
const meta = {
  component: FooterSocialLink,
  tags: ["autodocs"],
  title: "Components/Footer Social Link",
} satisfies Meta<typeof FooterSocialLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <Mail size={20} />,
    href: "mailto:contact@example.com",
    label: "Mail",
  },
};
