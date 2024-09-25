import { TabCard } from "@/components/tab-card/TabCard";
import { Tabs } from "@/components/tabs/Tabs";
import { Tab } from "@/components/tabs/Tabs.constants";
import { UpcomingRaces } from "@/components/upcoming-races/UpcomingRaces";

export default function RacesPage() {
  return (
    <Tabs>
      <TabCard tab={Tab.Races}>
        <UpcomingRaces />
      </TabCard>
    </Tabs>
  );
}
