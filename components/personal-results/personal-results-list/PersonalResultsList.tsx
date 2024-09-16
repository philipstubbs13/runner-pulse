"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import deleteRaceResult from "@/app/actions/deleteRaceResult";
import { AddResultDialog } from "@/components/personal-results/add-result-dialog/AddResultDialog";
import { IPersonalResult } from "@/components/personal-results/PersonalResults.types";

interface IProps {
  /**
   * An array of objects representing the personal race results to be displayed in the table.
   */
  results: IPersonalResult[];
}

export const PersonalResultsList = (props: IProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-blue-100">
          <TableHead className="text-blue-700">Date</TableHead>
          <TableHead className="text-blue-700">Race</TableHead>
          <TableHead className="text-blue-700">Distance</TableHead>
          <TableHead className="text-blue-700">Time</TableHead>
          <TableHead className="text-blue-700"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.results.map((result) => (
          <TableRow key={result.id} className="hover:bg-blue-50">
            <TableCell>
              {new Intl.DateTimeFormat("en-US").format(result.date)}
            </TableCell>
            <TableCell>{result.race}</TableCell>
            <TableCell>{result.distance}</TableCell>
            <TableCell>{result.time}</TableCell>
            <TableCell className="flex">
              <Button
                className="hover:text-blue-600"
                onClick={() => deleteRaceResult(result.id)}
              >
                <Trash2 />
              </Button>
              <AddResultDialog result={result} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
