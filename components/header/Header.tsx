"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { getTitleColor } from "@/utils/getTitleColor";
import { useGlobalContext } from "@/context/global-context/GlobalContext";
import { Tab } from "@/components/tabs/Tabs.constants";
import { AppLogo } from "../app-logo/AppLogo";
import clsx from "clsx";

export const Header = () => {
  const { activeTab, updateActiveTab } = useGlobalContext();

  const handleLogout = () => {
    updateActiveTab(Tab.Results);
    signOut();
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <div
        className={clsx({
          [getTitleColor(activeTab)]: true,
          "flex items-center": true,
        })}
      >
        <AppLogo />
        <h1 className={"text-4xl font-bold transition-colors duration-300"}>
          Runner Pulse
        </h1>
      </div>
      <Button
        onClick={() => handleLogout()}
        variant="outline"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        <LogOut className="mr-2 h-4 w-4" /> Logout
      </Button>
    </div>
  );
};
