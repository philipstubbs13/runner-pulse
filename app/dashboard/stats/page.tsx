import { DistanceComparisonChart } from "@/components/charts/distance-comparison-chart/DistanceComparisonChart";
import { IDistanceComparisonChartData } from "@/components/charts/distance-comparison-chart/DistanceComparisonChart.types";
import { PerformanceOverTimeChart } from "@/components/charts/performance-over-time-chart/PerformanceOverTimeChart";
import { IPerformanceOverTimeChartData } from "@/components/charts/performance-over-time-chart/PerformanceOverTimeChart.types";
import { RaceDistributionByCityChart } from "@/components/charts/race-distribution-by-city-chart/RaceDistributionByCityChart";
import { IRaceDistributionByCityChartData } from "@/components/charts/race-distribution-by-city-chart/RaceDistributionByCityChart.types";
import { NoResults } from "@/components/no-results/NoResults";
import { TabCard } from "@/components/tab-card/TabCard";
import { Tab } from "@/components/tabs/Tabs.constants";
import { db } from "@/lib/db";
import { getRandomColor } from "@/utils/getRandomColor";
import { getSessionUser } from "@/utils/getSessionUser";
import { timeToMinutes } from "@/utils/timeToMinutes";
import { BarChartIcon } from "lucide-react";

export default async function StagsPage() {
  const sessionUser = await getSessionUser();
  const results = await db.raceResult.findMany({
    where: {
      userId: sessionUser?.userId,
    },
  });
  const distances = await db.raceDistance.findMany({
    where: { userId: sessionUser?.userId },
  });
  const hasResults = results.length > 0;

  const distanceComparisonData = distances.reduce(
    (distancesToPlot: IDistanceComparisonChartData[], currentDistance) => {
      const raceResultsByDistance = results.filter(
        (result) => result.raceDistance === currentDistance.distance
      );

      const totalTimeByDistance = raceResultsByDistance.reduce(
        (totalTime: number, currentResultByDistance) => {
          const currentResultTimeInMinutes = timeToMinutes(
            currentResultByDistance.time
          );

          return (totalTime += currentResultTimeInMinutes);
        },
        0
      );

      const averageTimeByDistance = raceResultsByDistance.length
        ? totalTimeByDistance / raceResultsByDistance.length
        : 0;

      if (!averageTimeByDistance) {
        return distancesToPlot;
      }

      const averageTime = Number(averageTimeByDistance.toFixed(2));

      return [
        ...distancesToPlot,
        {
          distance: currentDistance.distance,
          averageTime,
        },
      ];
    },
    []
  );

  const raceDistributionData: IRaceDistributionByCityChartData[] =
    Object.entries(
      results.reduce((acc, result) => {
        acc[result.city] = (acc[result.city] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    ).map(([city, count]) => ({ city, count, fill: getRandomColor() }));

  const performanceData: IPerformanceOverTimeChartData[] = results.map(
    (result) => ({
      date: new Date(result.date).toISOString().split("T")[0],
      distance: result.raceDistance,
      time: timeToMinutes(result.time),
    })
  );

  performanceData.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;
  });

  return (
    <TabCard tab={Tab.Stats}>
      {!hasResults && (
        <NoResults
          Icon={BarChartIcon}
          description="Add some race results to see your performance statistics."
          tab={Tab.Results}
          title="No Statistics Available"
        />
      )}
      {hasResults && (
        <>
          <DistanceComparisonChart
            distanceComparisonData={distanceComparisonData}
          />
          <div className="mt-8">
            <RaceDistributionByCityChart
              raceDistributionData={raceDistributionData}
            />
          </div>
          <div className="mt-8">
            <PerformanceOverTimeChart performanceData={performanceData} />
          </div>
        </>
      )}
    </TabCard>
  );
}
