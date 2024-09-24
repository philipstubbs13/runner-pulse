"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { IPersonalResult } from "@/components/personal-results/PersonalResults.types";
import { IRaceDistance } from "@/components/race-distances/RaceDistances.types";
import { PersonalResultsTableActions } from "./personal-results-table-actions/PersonalResultsTableActions";
import { IRaceLocation } from "@/components/locations-list/LocationsList.types";

export type PersonalResultTableData = {
  id: string;
  date: string;
  distance: string;
  race: string;
  location: string;
  time: string;
  result: IPersonalResult;
  distances: IRaceDistance[];
  locations: IRaceLocation[];
};

export const columns: ColumnDef<PersonalResultTableData>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <div className="text-blue-700">Date</div>
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    sortingFn: (a, b) => {
      const dateA = new Date(a.getValue("date")).getTime();
      const dateB = new Date(b.getValue("date")).getTime();
      return dateA - dateB;
    },
  },
  {
    accessorKey: "race",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-blue-700">Race</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-blue-700">Location</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "distance",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-blue-700">Distance</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "time",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-blue-700">Time</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-blue-700"></div>,
    cell: ({ row }) => {
      return <PersonalResultsTableActions row={row} />;
    },
  },
];
