"use client";

import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { IRaceDistance } from "@/components/race-distances/RaceDistances.types";
import deleteRaceDistance from "@/app/actions/deleteRaceDistance";
import addRaceDistance from "@/app/actions/addRaceDistance";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ConfirmationDialog } from "@/components/confirmation-dialog/ConfirmationDialog";
import { EditRaceDistanceDialog } from "@/components/race-distances/edit-race-distance-dialog/EditRaceDistanceDialog";

interface IProps {
  distances: IRaceDistance[];
}

export const RaceDistances = (props: IProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState<boolean>(false);

  const handleRemoveDistance = async (distanceId: string) => {
    await deleteRaceDistance(distanceId);
    toast({
      title: "Successfully deleted race distance",
    });
    setIsConfirmationDialogOpen(false);
  };

  const handleAddDistance = async (formData: FormData) => {
    await addRaceDistance(formData);
    toast({
      title: "Successfully added race distance",
    });

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
            <div>
              <EditRaceDistanceDialog
                distance={distance.distance}
                id={distance.id}
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsConfirmationDialogOpen(true)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <ConfirmationDialog
                description={
                  "This will permanently delete the selected race distance"
                }
                isOpen={isConfirmationDialogOpen}
                title="Are you sure you want to delete?"
                onClose={() => setIsConfirmationDialogOpen(false)}
                onConfirm={() => handleRemoveDistance(distance.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
