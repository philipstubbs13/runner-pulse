"use client";

import { useGlobalContext } from "@/context/global-context/GlobalContext";
import { Tabs as UiTabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropsWithChildren, useState } from "react";
import { Tab, tabLabels } from "@/components/tabs/Tabs.constants";
import { usePathname, useRouter } from "next/navigation";

export const Tabs = (props: PropsWithChildren) => {
  const { shouldHideTabs } = useGlobalContext();
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>(pathname as Tab);

  return (
    <UiTabs
      className="space-y-4 xs:hidden sm:hidden md:block"
      defaultValue={activeTab}
      onValueChange={(value: string) => {
        setActiveTab(value as Tab);
        router.push(value);
      }}
    >
      {!shouldHideTabs && (
        <TabsList className=" bg-opacity-50 p-1 rounded-lg flex items-center sm:justify-center md:justify-start flex-wrap h-auto space-y-1">
          <TabsTrigger
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            data-testid="results-tabs-trigger"
            value={Tab.Results}
          >
            {tabLabels[Tab.Results]}
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
            data-testid="races-tabs-trigger"
            value={Tab.Races}
          >
            {tabLabels[Tab.Races]}
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
            data-testid="gallery-tabs-trigger"
            value={Tab.Gallery}
          >
            {tabLabels[Tab.Gallery]}
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            data-testid="stats-tabs-trigger"
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
