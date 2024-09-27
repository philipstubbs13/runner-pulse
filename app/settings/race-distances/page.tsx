import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Routes } from "@/utils/router/Routes.constants";
import { TabCard } from "@/components/tab-card/TabCard";
import { Tab } from "@/components/tabs/Tabs.constants";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { RaceDistances as RaceDistancesList } from "@/components/race-distances/RaceDistances";
import { LayoutContainer } from "@/components/layout-container/LayoutContainer";

export default async function RaceDistances() {
  const session = await getSessionUser();
  const distances = await db.raceDistance.findMany({
    where: { userId: session?.userId },
    orderBy: [
      {
        distance: "asc",
      },
    ],
  });

  return (
    <LayoutContainer>
      <Link
        href={Routes.Results}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>
      <TabCard tab={Tab.RaceDistances}>
        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <RaceDistancesList distances={distances} />
          </div>
        </div>
      </TabCard>
    </LayoutContainer>
  );
}
