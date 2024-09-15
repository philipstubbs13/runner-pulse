import { PersonalResults } from "@/components/personal-results/PersonalResults";
import { TabCard } from "@/components/tab-card/TabCard";
import { Tab } from "@/components/tabs/Tabs.constants";

export default async function ResultsPage() {
  return (
    <TabCard tab={Tab.Results}>
      <PersonalResults />
    </TabCard>
  );
}
