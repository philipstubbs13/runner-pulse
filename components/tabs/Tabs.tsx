"use client";

import { useGlobalContext } from "@/context/global-context/GlobalContext";
import { Tabs as UiTabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropsWithChildren } from "react";
import { Tab, tabLabels } from "@/components/tabs/Tabs.constants";

export const Tabs = (props: PropsWithChildren) => {
  const { activeTab, updateActiveTab, shouldHideTabs } = useGlobalContext();

  return (
    <UiTabs
      className="space-y-4 xs:hidden sm:hidden md:block"
      defaultValue={activeTab as Tab}
      onValueChange={(value: string) => updateActiveTab(value as Tab)}
    >
      {!shouldHideTabs && (
        <TabsList className=" bg-opacity-50 p-1 rounded-lg flex items-center sm:justify-center md:justify-start flex-wrap h-auto space-y-1">
          <TabsTrigger
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            value={Tab.Results}
          >
            {tabLabels[Tab.Results]}
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
            value={Tab.Races}
          >
            {tabLabels[Tab.Races]}
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
            value={Tab.Gallery}
          >
            {tabLabels[Tab.Gallery]}
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            value={Tab.Stats}
          >
            {tabLabels[Tab.Stats]}
          </TabsTrigger>
        </TabsList>
      )}
      {props.children}
    </UiTabs>
  );
};
