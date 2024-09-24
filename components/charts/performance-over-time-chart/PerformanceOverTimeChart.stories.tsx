import type { Meta, StoryObj } from "@storybook/react";

import { PerformanceOverTimeChart } from "./PerformanceOverTimeChart";
import { IPerformanceOverTimeChartData } from "./PerformanceOverTimeChart.types";

/**
 * The `PerformanceOverTimeChart` component visualizes race performance over time using a line chart,
 * allowing users to track their race times for different distances throughout the year.
 * Built with the `recharts` library and styled within a card layout, this component provides a clear and
 * interactive way to analyze performance trends.
 */
const meta = {
  component: PerformanceOverTimeChart,
  tags: ["autodocs"],
  title: "Components/Charts/Performance Over Time Chart",
} satisfies Meta<typeof PerformanceOverTimeChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockPerformanceData: IPerformanceOverTimeChartData[] = [
  { date: "2018-07-04", distance: "5 mile", time: 38.37 },
  { date: "2019-07-03", distance: "5 mile", time: 38.9 },
  { date: "2021-07-03", distance: "5 mile", time: 34.73 },
  { date: "2021-09-17", distance: "Half Marathon", time: 99.65 },
  { date: "2022-07-03", distance: "5 mile", time: 34.98 },
  { date: "2023-09-14", distance: "Half Marathon", time: 106.16 },
  { date: "2023-10-29", distance: "Half Marathon", time: 101.73 },
];

export const Basic: Story = {
  args: {
    performanceData: mockPerformanceData,
  },
};
