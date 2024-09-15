"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { IUpcomingRace } from "@/components/upcoming-races/UpcomingRaces.types";
import { Routes } from "@/utils/router/Routes.constants";

interface IProps {
  /**
   * An array of objects representing the upcoming races to be displayed in the table.
   */
  races: IUpcomingRace[];
}

export const UpcomingRacesList = (props: IProps) => {
  const router = useRouter();

  return (
    <div className="space-y-4">
      {/* <Input
        placeholder="Search races..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-green-300 focus:border-green-500"
      /> */}
      <Table>
        <TableHeader>
          <TableRow className="bg-green-100">
            <TableHead className="text-green-700">Date</TableHead>
            <TableHead className="text-green-700">Race</TableHead>
            <TableHead className="text-green-700">Location</TableHead>
            <TableHead className="text-green-700"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.races.map((race) => (
            <TableRow
              key={race.race.race_id}
              className="hover:bg-green-50 hover:cursor-pointer"
              onClick={() =>
                router.push(
                  Routes.RaceDetails.replace("[id]", race.race.race_id)
                )
              }
            >
              <TableCell>{race.race.race_event_days?.[0].start_date}</TableCell>
              <TableCell>{race.race.name}</TableCell>
              <TableCell>
                {race.race.address.city}, {race.race.address.state}
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-100 rounded"
                  onClick={() =>
                    router.push(
                      Routes.RaceDetails.replace("[id]", race.race.race_id)
                    )
                  }
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
