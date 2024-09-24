"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { IRaceDistributionByCityChartData } from "./RaceDistributionByCityChart.types";

interface IProps {
  /**
   * An array of objects where each object contains `city` (the name of the city) and `count` (the number of races in that city).
   */
  raceDistributionData: IRaceDistributionByCityChartData[];
}

const chartConfig = {
  city: {
    label: "Cities",
  },
} satisfies ChartConfig;

export const RaceDistributionByCityChart = (props: IProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Race Distribution By City</CardTitle>
        <CardDescription>See where you&apos;ve raced the most</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={props.raceDistributionData}
              dataKey="count"
              nameKey="city"
              innerRadius={80}
              strokeWidth={10}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {props.raceDistributionData.length}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Cities
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
