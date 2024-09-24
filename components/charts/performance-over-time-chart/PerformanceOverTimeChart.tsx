"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

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
import { IPerformanceOverTimeChartData } from "./PerformanceOverTimeChart.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const chartConfig = {
  time: {
    label: "Time (in minutes)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface IProps {
  /**
   * An array of objects where each object contains performance metrics over time,
   * including `date`, `distance`, and `time` (in minutes).
   */
  performanceData: IPerformanceOverTimeChartData[];
}

export const PerformanceOverTimeChart = (props: IProps) => {
  const distances = Array.from(
    new Set(props.performanceData.map((dataPoint) => dataPoint.distance))
  );
  const firstDistance = distances[0];
  const [selectedDistance, setSelectedDistance] =
    useState<string>(firstDistance);
  const [chartData, setChartData] = useState<IPerformanceOverTimeChartData[]>(
    []
  );

  useEffect(() => {
    const filteredData = props.performanceData.filter(
      (dataPoint) => dataPoint.distance === selectedDistance
    );
    setChartData(filteredData);
  }, [selectedDistance, props.performanceData]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{selectedDistance} Performance Over Time</CardTitle>
        <CardDescription>
          Track your {selectedDistance} race times throughout the year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select
            value={selectedDistance}
            onValueChange={(value) => setSelectedDistance(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select distance" />
            </SelectTrigger>
            <SelectContent style={{ backgroundColor: "#fff" }}>
              {distances.map((distance) => (
                <SelectItem key={distance} value={distance}>
                  {distance}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });
              }}
            />
            <YAxis dataKey="time" />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey={"time"}
              type="monotone"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
