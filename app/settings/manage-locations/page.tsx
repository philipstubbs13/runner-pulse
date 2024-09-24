import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Routes } from "@/utils/router/Routes.constants";
import { TabCard } from "@/components/tab-card/TabCard";
import { Tab } from "@/components/tabs/Tabs.constants";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { LayoutContainer } from "@/components/layout-container/LayoutContainer";
import { LocationsList } from "@/components/locations-list/LocationsList";

export default async function ManageLocationsPage() {
  const session = await getSessionUser();
  const locations = await db.raceLocation.findMany({
    where: { userId: session?.userId },
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
      <TabCard tab={Tab.ManageLocations}>
        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <LocationsList locations={locations} />
          </div>
        </div>
      </TabCard>
    </LayoutContainer>
  );
}
