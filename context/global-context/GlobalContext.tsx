"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  PropsWithChildren,
} from "react";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { Tab } from "@/components/tabs/Tabs.constants";
import { RouteLayoutSegments } from "@/utils/router/Routes.constants";
import { shouldHideDashboardTabs } from "@/components/tabs/Tabs.utils";

export interface IGlobalContext {
  activeTab: Tab | null;
  shouldHideTabs: boolean;
  updateActiveTab: (activeTab: Tab) => void;
}

export interface IGlobalProviderProps {}

export const defaultContextValues = {
  activeTab: Tab.Results,
  shouldHideTabs: false,
  updateActiveTab: () => {},
};

export const GlobalContext =
  createContext<IGlobalContext>(defaultContextValues);

export const GlobalProvider = (
  props: PropsWithChildren<IGlobalProviderProps>
) => {
  const segment = useSelectedLayoutSegment(
    RouteLayoutSegments.Dashboard
  ) as Tab | null;
  const [activeTab, setActiveTab] = useState<Tab | null>(segment);
  const router = useRouter();
  const shouldHideTabs = shouldHideDashboardTabs(segment);

  const updateActiveTab = (activeTab: Tab): void => {
    setActiveTab(activeTab);
    router.push(`/${activeTab}`);
  };

  useEffect(() => {
    if (!segment) {
      return;
    }

    if (shouldHideTabs) {
      return;
    }

    updateActiveTab(segment);
  }, [segment]);

  return (
    <GlobalContext.Provider
      value={{
        activeTab,
        updateActiveTab,
        shouldHideTabs,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
