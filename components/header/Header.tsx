"use client";

import { Button } from "@/components/ui/button";
import { LogOut, Settings } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useGlobalContext } from "@/context/global-context/GlobalContext";
import { Tab } from "@/components/tabs/Tabs.constants";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PageHeading } from "@/components/page-heading/PageHeading";
import { Avatar as UiAvatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useRouter } from "next/navigation";
import { Routes } from "@/utils/router/Routes.constants";

export const Header = () => {
  const { activeTab, updateActiveTab } = useGlobalContext();
  const { data: session } = useSession();
  const router = useRouter();
  const userImage = session?.user?.image || undefined;
  const userName = session?.user?.name || "";
  const userEmail = session?.user?.email || "";

  const handleLogout = () => {
    updateActiveTab(Tab.Results);
    signOut();
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <PageHeading activeTab={activeTab} />
      <div className="flex items-center space-x-4">
        <Sheet>
          <SheetTrigger asChild>
            <UiAvatar className="cursor-pointer">
              <AvatarImage src={userImage} alt={userName} />
              <AvatarFallback>
                {userName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </UiAvatar>
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle>Profile</SheetTitle>
              <SheetDescription>View your profile information</SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <div className="flex items-center space-x-4 mb-4">
                <UiAvatar className="w-16 h-16">
                  <AvatarImage
                    src={userImage}
                    alt={session?.user?.name || "user profile"}
                  />
                  <AvatarFallback>
                    {userName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </UiAvatar>
                <div>
                  <h2 className="text-xl font-semibold">{userName}</h2>
                  <p className="text-sm text-gray-500">{userEmail}</p>
                </div>
              </div>
              <Button
                onClick={() => router.push(Routes.Settings)}
                variant="outline"
                className="w-full mb-2"
              >
                <Settings className="mr-2 h-4 w-4" />
                Manage Photos
              </Button>
              <Button
                onClick={handleLogout}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
