import type { Meta, StoryObj } from "@storybook/react";

import { RaceDistributionByCityChart } from "./RaceDistributionByCityChart";
import { getRandomColor } from "@/utils/getRandomColor";
import { IRaceDistributionByCityChartData } from "./RaceDistributionByCityChart.types";

/**
 * The `RaceDistributionByCityChart` component is a pie chart that visualizes the distribution of races across different cities.
 * Utilizing the `recharts` library, this component provides a clear representation of where users have participated in races
 * helping them identify their most frequented locations.
 */
const meta = {
  component: RaceDistributionByCityChart,
  tags: ["autodocs"],
  title: "Components/Charts/Race Distribution By City Chart",
} satisfies Meta<typeof RaceDistributionByCityChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockRaceDistributionData: IRaceDistributionByCityChartData[] = [
  { city: "Faribault", count: 3, fill: getRandomColor() },
  { city: "Northfield", count: 2, fill: getRandomColor() },
  { city: "Lakeville", count: 6, fill: getRandomColor() },
  { city: "Rosemount", count: 4, fill: getRandomColor() },
];

export const Basic: Story = {
  args: {
    raceDistributionData: mockRaceDistributionData,
  },
};
