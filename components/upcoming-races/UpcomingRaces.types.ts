export interface IUpcomingRace {
  race: {
    address: {
      city: string;
      state: string;
    };
    name: string;
    race_id: string;
    race_event_days?: [
      {
        start_date: string;
      }
    ];
  };
}

export interface IUpcomingRacesResponse {
  races: IUpcomingRace[];
}
