export enum Tab {
  Results = "/dashboard/results",
  Races = "/dashboard/races",
  Gallery = "/dashboard/gallery",
  Settings = "settings",
  Stats = "/dashboard/stats",
  RaceDistances = "race-distances",
  ManageLocations = "/settings/manage-locations",
}

export const tabLabels: Record<Tab, string> = {
  [Tab.Results]: "Personal Results",
  [Tab.Races]: "Upcoming Races",
  [Tab.Gallery]: "Photo Gallery",
  [Tab.Settings]: "Manage Photos",
  [Tab.Stats]: "Stats",
  [Tab.RaceDistances]: "Manage Race Distances",
  [Tab.ManageLocations]: "Manage Locations",
};

export const tabDescriptions: Record<Tab, string> = {
  [Tab.Results]: "Track and add your race results",
  [Tab.Races]: "Find races near you",
  [Tab.Gallery]: "Your running memories",
  [Tab.Settings]: "Edit and delete your photos",
  [Tab.Stats]: "Analyze your running performance",
  [Tab.RaceDistances]: "Add or remove race distances for your results",
  [Tab.ManageLocations]: "Add or remove race locations for your results",
};

export const tabTextColors: Record<Tab, string> = {
  [Tab.Results]: "text-blue-600",
  [Tab.Races]: "text-green-600",
  [Tab.Gallery]: "text-pink-600",
  [Tab.Settings]: "text-blue-600",
  [Tab.Stats]: "text-purple-600",
  [Tab.RaceDistances]: "text-blue-600",
  [Tab.ManageLocations]: "text-orange-600",
};

export const tabDescriptionColors: Record<Tab, string> = {
  [Tab.Results]: "text-blue-100",
  [Tab.Races]: "text-green-100",
  [Tab.Gallery]: "text-pink-100",
  [Tab.Settings]: "text-blue-100",
  [Tab.Stats]: "text-purple-100",
  [Tab.RaceDistances]: "text-blue-100",
  [Tab.ManageLocations]: "text-orange-100",
};

export const tabBorderColors: Record<Tab, string> = {
  [Tab.Results]: "border-blue-200",
  [Tab.Races]: "border-green-200",
  [Tab.Gallery]: "border-pink-200",
  [Tab.Settings]: "border-blue-200",
  [Tab.Stats]: "border-purple-200",
  [Tab.RaceDistances]: "border-blue-200",
  [Tab.ManageLocations]: "border-orange-200",
};

export const tabBackgroundColors: Record<Tab, string> = {
  [Tab.Results]: "bg-blue-500",
  [Tab.Races]: "bg-green-500",
  [Tab.Gallery]: "bg-pink-500",
  [Tab.Settings]: "bg-blue-500",
  [Tab.Stats]: "bg-purple-500",
  [Tab.RaceDistances]: "bg-blue-500",
  [Tab.ManageLocations]: "bg-orange-500",
};

export const tabHoverBackgroundColors: Record<Tab, string> = {
  [Tab.Results]: "hover:bg-blue-600",
  [Tab.Races]: "hover:bg-green-600",
  [Tab.Gallery]: "hover:bg-pink-600",
  [Tab.Settings]: "hover:bg-blue-600",
  [Tab.Stats]: "hover:bg-purple-600",
  [Tab.RaceDistances]: "hover:bg-blue-600",
  [Tab.ManageLocations]: "hover:bg-orange-600",
};
