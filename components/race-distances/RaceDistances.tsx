"use client";

import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { IRaceDistance } from "@/components/race-distances/RaceDistances.types";
import deleteRaceDistance from "@/app/actions/deleteRaceDistance";
import addRaceDistance from "@/app/actions/addRaceDistance";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

interface IProps {
  distances: IRaceDistance[];
}

export const RaceDistances = (props: IProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleRemoveDistance = async (distanceId: string) => {
    await deleteRaceDistance(distanceId);
  };

  const handleAddDistance = async (formData: FormData) => {
    await addRaceDistance(formData);

    formRef.current?.reset();
  };

  return (
    <>
      <form action={handleAddDistance} className="flex space-x-2" ref={formRef}>
        <Input
          name="distance"
          placeholder="Enter new distance"
          className="flex-grow"
          required={true}
        />
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white"
          type="submit"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </form>
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
    </>
  );
};
