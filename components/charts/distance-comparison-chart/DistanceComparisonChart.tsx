"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { IDistanceComparisonChartData } from "./DistanceComparisonChart.types";

const chartConfig = {
  averageTime: {
    label: "Average Time",
    color: "#10B981",
  },
} satisfies ChartConfig;

interface IProps {
  /**
   * An array of data objects where each object contains `distance` (race distance) and `averageTime` (time in minutes).
   */
  distanceComparisonData: IDistanceComparisonChartData[];
}

export const DistanceComparisonChart = (props: IProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Time (In Minutes) By Distance</CardTitle>
        <CardDescription>
          Compare your average times (in minutes) across different race
          distances
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={props.distanceComparisonData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="distance" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="averageTime" fill="#10B981" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
