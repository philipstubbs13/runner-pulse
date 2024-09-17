export enum Tab {
  Results = "results",
  Races = "races",
  Gallery = "gallery",
  Settings = "settings",
  RaceDistances = "race-distances",
}

export const tabLabels: Record<Tab, string> = {
  [Tab.Results]: "Personal Results",
  [Tab.Races]: "Upcoming Races",
  [Tab.Gallery]: "Photo Gallery",
  [Tab.Settings]: "Manage Photos",
  [Tab.RaceDistances]: "Manage Race Distances",
};

export const tabDescriptions: Record<Tab, string> = {
  [Tab.Results]: "Track and add your race results",
  [Tab.Races]: "Find races near you",
  [Tab.Gallery]: "Your running memories",
  [Tab.Settings]: "Edit and delete your photos",
  [Tab.RaceDistances]: "Add or remove race distances for your results",
};

export const tabTextColors: Record<Tab, string> = {
  [Tab.Results]: "text-blue-600",
  [Tab.Races]: "text-green-600",
  [Tab.Gallery]: "text-pink-600",
  [Tab.Settings]: "text-blue-600",
  [Tab.RaceDistances]: "text-blue-600",
};

export const tabDescriptionColors: Record<Tab, string> = {
  [Tab.Results]: "text-blue-100",
  [Tab.Races]: "text-green-100",
  [Tab.Gallery]: "text-pink-100",
  [Tab.Settings]: "text-blue-100",
  [Tab.RaceDistances]: "text-blue-100",
};

export const tabBorderColors: Record<Tab, string> = {
  [Tab.Results]: "border-blue-200",
  [Tab.Races]: "border-green-200",
  [Tab.Gallery]: "border-pink-200",
  [Tab.Settings]: "border-blue-200",
  [Tab.RaceDistances]: "border-blue-200",
};

export const tabBackgroundColors: Record<Tab, string> = {
  [Tab.Results]: "bg-blue-500",
  [Tab.Races]: "bg-green-500",
  [Tab.Gallery]: "bg-pink-500",
  [Tab.Settings]: "bg-blue-500",
  [Tab.RaceDistances]: "bg-blue-500",
};

export const tabHoverBackgroundColors: Record<Tab, string> = {
  [Tab.Results]: "hover:bg-blue-600",
  [Tab.Races]: "hover:bg-green-600",
  [Tab.Gallery]: "hover:bg-pink-600",
  [Tab.Settings]: "hover:bg-blue-600",
  [Tab.RaceDistances]: "hover:bg-blue-600",
};
