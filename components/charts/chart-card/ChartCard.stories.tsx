import type { Meta, StoryObj } from "@storybook/react";

import { ChartCard } from "./ChartCard";

/**
 * The `ChartCard` component is a flexible card layout designed to display chart-related information.
 * It features a title, description, and a content area where charts or other visualizations can be placed.
 * This component can be used as a container for any kind of data representation, making it a versatile
 * choice for dashboards or analytics pages.
 */
const meta = {
  component: ChartCard,
  tags: ["autodocs"],
  title: "Components/Charts/Chart Card",
} satisfies Meta<typeof ChartCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "Chart Content",
    description:
      "Compare your average times (HH:MM:SS) across different race distances",
    title: "Average Time By Distance",
  },
};
