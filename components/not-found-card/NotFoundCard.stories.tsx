import type { Meta, StoryObj } from "@storybook/react";

import { NotFoundCard } from "./NotFoundCard";
import { Routes } from "@/utils/router/Routes.constants";

/**
 * The `NotFoundCard` component is a reusable UI element designed to display a
 * user-friendly error message or not found page. It provides a structured card
 * layout with a title, message, and a redirect button for user navigation. The
 * component supports custom content within the body of the card, allowing for
 * flexibility in displaying a message or additional details.
 */
const meta = {
  title: "Components/Not Found Card",
  component: NotFoundCard,
  tags: ["autodocs"],
} satisfies Meta<typeof NotFoundCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <p className="text-gray-600 mb-4">
        Oops! It looks like the race you're looking for doesn't exist or has
        been removed.
      </p>
    ),
    title: "Not Found",
    redirectLink: Routes.Races,
    redirectLinkLabel: "Back to Upcoming Races",
  },
};
