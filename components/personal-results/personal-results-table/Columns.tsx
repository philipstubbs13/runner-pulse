"use client";

import deleteRaceResult from "@/app/actions/deleteRaceResult";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2, ArrowUpDown } from "lucide-react";
import { AddResultDialog } from "@/components/personal-results/add-result-dialog/AddResultDialog";
import { IPersonalResult } from "@/components/personal-results/PersonalResults.types";
import { IRaceDistance } from "@/components/race-distances/RaceDistances.types";

export type PersonalResultTableData = {
  id: string;
  date: string;
  distance: string;
  race: string;
  location: string;
  time: string;
  result: IPersonalResult;
  distances: IRaceDistance[];
};

export const columns: ColumnDef<PersonalResultTableData>[] = [
  {
    accessorKey: "date",
    header: () => <div className="text-blue-700">Date</div>,
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
      return (
        <div className="flex">
          <Button
            className="hover:text-blue-600"
            onClick={() => deleteRaceResult(row.original.id)}
          >
            <Trash2 />
          </Button>
          <AddResultDialog
            distances={row.original.distances}
            result={row.original.result}
          />
        </div>
      );
    },
  },
];
