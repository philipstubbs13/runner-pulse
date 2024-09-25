"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { IDistanceComparisonChartData } from "@/components/charts/distance-comparison-chart/DistanceComparisonChart.types";
import { minutesToTime } from "@/utils/timeToMinutes";
import { ChartCard } from "@/components/charts/chart-card/ChartCard";

const chartConfig = {
  averageTime: {
    label: "Average Time (HH:MM:SS)",
    color: "#10B981",
  },
} satisfies ChartConfig;

interface IProps {
  /**
   * An array of data objects where each object contains `distance` (race distance) and `averageTime`.
   */
  distanceComparisonData: IDistanceComparisonChartData[];
}

export const DistanceComparisonChart = (props: IProps) => {
  return (
    <ChartCard
      description="Compare your average times (HH:MM:SS) across different race distances"
      title="Average Time By Distance"
    >
      <ChartContainer config={chartConfig} className="max-h-[450px] w-full">
        <BarChart
          accessibilityLayer
          data={props.distanceComparisonData}
          margin={{
            top: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="distance" />
          <YAxis tickFormatter={(value) => minutesToTime(value)} />
          <ChartTooltip
            content={<ChartTooltipContent />}
            formatter={(value) => minutesToTime(Number(value))}
          />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="averageTime" fill="#10B981" radius={8} />
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
};
