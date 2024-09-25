import { MapPinHouse, Route, Settings } from "lucide-react";
import { ISettingsButttonProps } from "./SettingsButton.types";
import { Routes } from "@/utils/router/Routes.constants";

export enum SettingsButtonVariant {
  ManagePhotos = "ManagePhotos",
  ManageRaceLocations = "ManageRaceLocations",
  ManageRaceDistances = "ManageRaceDistances",
}

export const settingsVariantProps: Record<
  SettingsButtonVariant,
  ISettingsButttonProps
> = {
  [SettingsButtonVariant.ManagePhotos]: {
    Icon: Settings,
    label: "Manage Photos",
    route: Routes.ManagePhotos,
  },
  [SettingsButtonVariant.ManageRaceLocations]: {
    Icon: MapPinHouse,
    label: "Manage Race Locations",
    route: Routes.ManageRaceLocations,
  },
  [SettingsButtonVariant.ManageRaceDistances]: {
    Icon: Route,
    label: "Manage Race Distances",
    route: Routes.ManageRaceDistances,
  },
};
