"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { Tab } from "@/components/tabs/Tabs.constants";
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
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<Tab | null>(pathname as Tab);
  const router = useRouter();
  const shouldHideTabs = shouldHideDashboardTabs(pathname as Tab | null);

  const updateActiveTab = (activeTab: Tab): void => {
    setActiveTab(activeTab);
    router.push(activeTab);
  };

  useEffect(() => {
    if (shouldHideTabs) {
      return;
    }

    updateActiveTab(pathname as Tab);
  }, []);

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
