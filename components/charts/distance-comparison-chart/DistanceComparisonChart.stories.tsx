import type { Meta, StoryObj } from "@storybook/react";

import { DistanceComparisonChart } from "./DistanceComparisonChart";
import { IDistanceComparisonChartData } from "./DistanceComparisonChart.types";

/**
 * The `DistanceComparisonChart` component is a bar chart that visualizes the average time taken
 * (in minutes) across different race distances. It's built using the `recharts` library and styled
 * within a card layout, making it suitable for dashboards or performance tracking interfaces.
 */
const meta = {
  component: DistanceComparisonChart,
  tags: ["autodocs"],
  title: "Components/Charts/Distance Comparison Chart",
} satisfies Meta<typeof DistanceComparisonChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockDistanceComparisionData: IDistanceComparisonChartData[] = [
  { distance: "5 mile", averageTime: 37.02 },
  { distance: "15k", averageTime: 66.23 },
  { distance: "5k", averageTime: 20.48 },
  { distance: "10k", averageTime: 43.86 },
  { distance: "2 mile", averageTime: 12.3 },
  { distance: "4 mile", averageTime: 25.01 },
  { distance: "Half Marathon", averageTime: 102.93 },
  { distance: "1 mile", averageTime: 5.85 },
];

export const Basic: Story = {
  args: {
    distanceComparisonData: mockDistanceComparisionData,
  },
};
