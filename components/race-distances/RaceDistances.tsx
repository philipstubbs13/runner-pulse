"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { IRaceDistance } from "@/components/race-distances/RaceDistances.types";
import deleteRaceDistance from "@/app/actions/deleteRaceDistance";

interface IProps {
  distances: IRaceDistance[];
}

export const RaceDistances = (props: IProps) => {
  const handleRemoveDistance = async (distanceId: string) => {
    await deleteRaceDistance(distanceId);
  };

  return (
    <div className="space-y-2">
      {props.distances.map((distance, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-gray-100 p-2 rounded"
        >
          <span>{distance.distance}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleRemoveDistance(distance.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};
