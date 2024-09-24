import { Tab } from "@/components/tabs/Tabs.constants";

export const shouldHideDashboardTabs = (segment: Tab | null): boolean => {
  return (
    segment !== Tab.Results &&
    segment !== Tab.Races &&
    segment !== Tab.Gallery &&
    segment !== Tab.Stats
  );
};
