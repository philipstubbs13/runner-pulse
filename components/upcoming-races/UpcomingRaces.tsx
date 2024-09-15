import { IUpcomingRacesResponse } from "./UpcomingRaces.types";
import { UpcomingRacesList } from "./upcoming-races-list/UpcomingRacesList";

export const UpcomingRaces = async () => {
  const data = await fetch(
    "https://runsignup.com/rest/races?format=json&include_event_days=T"
  );
  const response: IUpcomingRacesResponse = await data.json();

  return <UpcomingRacesList races={response.races} />;
};
