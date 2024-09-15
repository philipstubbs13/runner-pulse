export enum Tab {
  Results = "results",
  Races = "races",
  Gallery = "gallery",
}

export const tabLabels: Record<Tab, string> = {
  [Tab.Results]: "Personal Results",
  [Tab.Races]: "Upcoming Races",
  [Tab.Gallery]: "Photo Gallery",
};

export const tabDescriptions: Record<Tab, string> = {
  [Tab.Results]: "Track and add your race results",
  [Tab.Races]: "Find races near you",
  [Tab.Gallery]: "Your running memories",
};

export const tabTextColors: Record<Tab, string> = {
  [Tab.Results]: "text-blue-600",
  [Tab.Races]: "text-green-600",
  [Tab.Gallery]: "text-pink-600",
};

export const tabDescriptionColors: Record<Tab, string> = {
  [Tab.Results]: "text-blue-100",
  [Tab.Races]: "text-green-100",
  [Tab.Gallery]: "text-pink-100",
};

export const tabBorderColors: Record<Tab, string> = {
  [Tab.Results]: "border-blue-200",
  [Tab.Races]: "border-green-200",
  [Tab.Gallery]: "border-pink-200",
};

export const tabBackgroundColors: Record<Tab, string> = {
  [Tab.Results]: "bg-blue-500",
  [Tab.Races]: "bg-green-500",
  [Tab.Gallery]: "bg-pink-500",
};

export const tabHoverBackgroundColors: Record<Tab, string> = {
  [Tab.Results]: "hover:bg-blue-600",
  [Tab.Races]: "hover:bg-green-600",
  [Tab.Gallery]: "hover:bg-pink-600",
};
