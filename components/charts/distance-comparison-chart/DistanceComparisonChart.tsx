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
import { minutesToTime } from "@/utils/timeToMinutes";

const chartConfig = {
  averageTime: {
    label: "Average Time (HH:MM:SS)",
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
        <CardTitle>Average Time By Distance</CardTitle>
        <CardDescription>
          Compare your average times (HH:MM:SS) across different race distances
        </CardDescription>
      </CardHeader>
      <CardContent>
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
            <Bar dataKey="averageTime" fill="#10B981" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: string) => minutesToTime(Number(value))}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
