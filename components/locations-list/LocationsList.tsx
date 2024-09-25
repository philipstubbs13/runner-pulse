"use client";

import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ConfirmationDialog } from "@/components/confirmation-dialog/ConfirmationDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { states } from "../personal-results/PersonalResults.constants";
import addRaceLocation from "@/app/actions/addRaceLocation";
import { IRaceLocation } from "./LocationsList.types";
import deleteRaceLocation from "@/app/actions/deleteRaceLocation";
import { EditRaceLocationDialog } from "./edit-race-location-dialog/EditRaceLocationDialog";
import getRaceResultsAssociatedWithLocation from "@/app/actions/getRaceResultsAssociatedWithLocation";
import { LocationInUseDialog } from "./location-in-use-dialog/LocationInUseDialog";

interface IProps {
  locations: IRaceLocation[];
}

export const LocationsList = (props: IProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const { toast } = useToast();
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState<boolean>(false);
  const [isLocationInUseDialogOpen, setIsLocationInUseDialogOpen] =
    useState<boolean>(false);

  const handleRemoveLocation = async (locationId: string) => {
    await deleteRaceLocation(locationId);
    toast({
      title: "Successfully deleted race location",
    });
    setIsConfirmationDialogOpen(false);
  };

  const handleAddLocation = async (formData: FormData) => {
    await addRaceLocation(formData);
    toast({
      title: "Successfully added race location",
    });

    formRef.current?.reset();
    if (selectRef.current) {
      selectRef.current.value = "";
    }
  };

  const confirmDeleteLocation = async (locationId: string) => {
    const { resultsAssociatedWithLocation } =
      await getRaceResultsAssociatedWithLocation(locationId);

    if (resultsAssociatedWithLocation.length) {
      setIsLocationInUseDialogOpen(true);

      return;
    }

    setIsConfirmationDialogOpen(true);
  };

  return (
    <>
      <form action={handleAddLocation} className="flex space-x-2" ref={formRef}>
        <Input
          name="city"
          placeholder="Enter city"
          className="flex-grow"
          required={true}
        />
        <Select name="state" required={true} defaultValue="">
          <SelectTrigger className="border-blue-300 focus:border-blue-500">
            <SelectValue
              placeholder="Select State"
              defaultValue=""
              ref={selectRef}
            />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {states.map((state) => (
              <SelectItem key={state.value} value={state.value}>
                {state.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white"
          type="submit"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </form>
      <div className="space-y-2">
        {props.locations.map((location) => {
          const description = `This will permanently delete the location.`;

          return (
            <div
              key={`${location.city}-${location.state}=${location.id}`}
              className="flex justify-between items-center bg-gray-100 p-2 rounded"
            >
              <span>
                {location.city}, {location.state}
              </span>
              <div>
                <EditRaceLocationDialog
                  city={location.city}
                  state={location.state}
                  locationId={location.id}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => confirmDeleteLocation(location.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <ConfirmationDialog
                  description={description}
                  isOpen={isConfirmationDialogOpen}
                  title="Are you sure you want to delete?"
                  onClose={() => setIsConfirmationDialogOpen(false)}
                  onConfirm={() => handleRemoveLocation(location.id)}
                />
                <LocationInUseDialog
                  isOpen={isLocationInUseDialogOpen}
                  onClose={() => setIsLocationInUseDialogOpen(false)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
