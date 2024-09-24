export enum Routes {
  BusinessCard = "/business-card",
  Gallery = "/dashboard/gallery",
  Home = "/",
  RaceDetails = "/dashboard/races/[id]",
  Races = "/dashboard/races",
  Results = "/dashboard/results",
  Stats = "/dashboard/stats",
  ManagePhotos = "/settings/manage-photos",
  ManageRaceDistances = "/settings/race-distances",
  ManageRaceLocations = "/settings/manage-locations",
}

export enum RoutesDynamicKey {
  RaceId = "[id]",
}

export enum RouteLayoutSegments {
  Dashboard = "dashboard",
}
