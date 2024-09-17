import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Plus } from "lucide-react";
import { Routes } from "@/utils/router/Routes.constants";
import { TabCard } from "@/components/tab-card/TabCard";
import { Tab } from "@/components/tabs/Tabs.constants";
import addRaceDistance from "@/app/actions/addRaceDistance";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { RaceDistances as RaceDistancesList } from "@/components/race-distances/RaceDistances";

export default async function RaceDistances() {
  const session = await getSessionUser();
  const distances = await db.raceDistance.findMany({
    where: { userId: session?.userId },
  });

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen">
      <Link
        href={Routes.Results}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>
      <TabCard tab={Tab.RaceDistances}>
        <div className="space-y-4 mt-4">
          <form action={addRaceDistance} className="flex space-x-2">
            <Input
              name="distance"
              placeholder="Enter new distance"
              className="flex-grow"
              required={true}
            />
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white"
              type="submit"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </form>
          <div className="space-y-2">
            <RaceDistancesList distances={distances} />
          </div>
        </div>
      </TabCard>
    </div>
  );
}
