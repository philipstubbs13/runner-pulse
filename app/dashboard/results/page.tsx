import { PersonalResults } from "@/components/personal-results/PersonalResults";
import { TabCard } from "@/components/tab-card/TabCard";
import { Tabs } from "@/components/tabs/Tabs";
import { Tab } from "@/components/tabs/Tabs.constants";

export default function ResultsPage() {
  return (
    <Tabs>
      <TabCard tab={Tab.Results}>
        <PersonalResults />
      </TabCard>
    </Tabs>
  );
}
