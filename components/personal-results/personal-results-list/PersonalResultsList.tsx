"use client";

import { IPersonalResult } from "@/components/personal-results/PersonalResults.types";
import { IRaceDistance } from "@/components/race-distances/RaceDistances.types";
import { formatISODate } from "@/utils/formatISODate";
import {
  PersonalResultTableData,
  columns,
} from "@/components/personal-results/personal-results-table/Columns";
import { DataTable } from "@/components/data-table/DataTable";
import { IRaceLocation } from "@/components/locations-list/LocationsList.types";

interface IProps {
  /**
   * An array of objects representing the personal race results to be displayed in the table.
   */
  results: IPersonalResult[];
  /**
   * List of distances to populate distance dropdown in add result dialog form.
   */
  distances: IRaceDistance[];
  /**
   * List of locations to populate location dropdown in add result dialog form.
   */
  locations: IRaceLocation[];
}

export const PersonalResultsList = (props: IProps) => {
  const data: PersonalResultTableData[] = props.results.map((result) => ({
    id: result.id,
    date: result.date ? formatISODate(result.date.toISOString()) : "",
    distance: result.raceDistance,
    race: result.race,
    location: result.city ? `${result.city}, ${result.state}` : "",
    time: result.time,
    result,
    distances: props.distances,
    locations: props.locations,
  }));

  return <DataTable columns={columns} data={data} />;
};
