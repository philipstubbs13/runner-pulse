import { Tab, tabTextColors } from "@/components/tabs/Tabs.constants";

export const getTitleColor = (activeTab: Tab | null): string => {
  if (!activeTab) {
    return "";
  }

  return tabTextColors[activeTab];
};
