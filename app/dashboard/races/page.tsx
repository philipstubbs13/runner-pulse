import { TabCard } from "@/components/tab-card/TabCard";
import { Tab } from "@/components/tabs/Tabs.constants";
import { UpcomingRaces } from "@/components/upcoming-races/UpcomingRaces";

export default function RacesPage() {
  return (
    <TabCard tab={Tab.Races}>
      <UpcomingRaces />
    </TabCard>
  );
}
