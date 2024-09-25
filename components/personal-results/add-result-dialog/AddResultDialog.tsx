"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/dialog/Dialog";
import addRaceResult from "@/app/actions/addRaceResult";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil } from "lucide-react";
import editRaceResult from "@/app/actions/editRaceResult";
import { IPersonalResult } from "@/components/personal-results/PersonalResults.types";
import {
  PersonalResultTime,
  personalResultTimePlaceholders,
} from "@/components/personal-results/PersonalResults.constants";
import { SubmitButton } from "@/components/buttons/submit-button/SubmitButton";
import { Tab } from "@/components/tabs/Tabs.constants";
import {
  getHoursValues,
  getMinutesOrSecondsValues,
} from "@/utils/getTimeValues";
import { IRaceDistance } from "@/components/race-distances/RaceDistances.types";
import Link from "next/link";
import { Routes } from "@/utils/router/Routes.constants";
import { useToast } from "@/hooks/use-toast";
import { IRaceLocation } from "@/components/locations-list/LocationsList.types";
import { formatISODate } from "@/utils/formatISODate";

interface IProps {
  /**
   * An object used to prepopulate the dialog with existing result data if editing.
   * If not provided, the dialog will be used for adding a new result.
   */
  result?: IPersonalResult;
  /**
   * List of distances to populate distance dropdown in add result dialog form.
   */
  distances?: IRaceDistance[];
  /**
   * List of locations to populate location dropdown in add result dialog form.
   */
  locations?: IRaceLocation[];
}

export const AddResultDialog = (props: IProps) => {
  const { distances = [], locations = [] } = props;
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();
  const isEditingResult = props.result;
  const dialogTitle = props.result ? "Edit Result" : "Add Result";
  const time = props.result?.time || "";
  const [hours, minutes, seconds] = time?.split(":");
  const resultIdToEdit = props.result?.id || "";
  const hoursValues = getHoursValues();
  const minutesValues = getMinutesOrSecondsValues();
  const secondsValues = getMinutesOrSecondsValues();
  let date: string | undefined = undefined;

  if (props.result?.date) {
    const isoDateString = formatISODate(props.result?.date.toISOString() || "");
    // yyyy-mm-dd
    date = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(isoDateString));
  }

  const onSubmit = async (formData: FormData) => {
    if (!isEditingResult) {
      await addRaceResult(formData);
      toast({
        title: "Successfully added personal race result",
      });
    } else {
      await editRaceResult(resultIdToEdit, formData);
      toast({
        title: "Successfully updated personal race result",
      });
    }

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      title={dialogTitle}
      titleColor={"blue"}
      trigger={
        <div>
          {isEditingResult && (
            <Button className="hover:text-blue-600">
              <Pencil />
            </Button>
          )}
          {!isEditingResult && (
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              {dialogTitle}
            </Button>
          )}
        </div>
      }
    >
      <form action={onSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-2">
          <Input
            className="border-blue-300 focus:border-blue-500"
            defaultValue={date}
            name="date"
            placeholder="Date"
            required={true}
            type="date"
          />
          <Input
            className="border-blue-300 focus:border-blue-500"
            defaultValue={props.result?.race}
            name="race"
            placeholder="Race Name"
            required={true}
          />
        </div>
        <Select
          defaultValue={props.result?.raceDistance}
          name="distance"
          required={true}
        >
          <SelectTrigger className="border-blue-300 focus:border-blue-500">
            <SelectValue placeholder="Select Distance" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {distances.map((distance) => (
              <SelectItem key={distance.id} value={distance.distance}>
                {distance.distance}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Link href={Routes.ManageRaceDistances}>
          <Button variant="link" className="hover:text-blue-500">
            Add Race Distance
          </Button>
        </Link>
        <div>
          <Select
            defaultValue={props.result?.raceLocationId || ""}
            name="location"
            required={true}
          >
            <SelectTrigger className="border-blue-300 focus:border-blue-500">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {locations.map((location) => (
                <SelectItem key={location.id} value={location.id}>
                  {location.city}, {location.state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Link href={Routes.ManageRaceLocations}>
            <Button variant="link" className="hover:text-blue-500">
              Add Race Location
            </Button>
          </Link>
        </div>
        <p className="font-bold pt-3">Finish Time</p>
        <div className="grid md:grid-cols-2 gap-2">
          <Select name={PersonalResultTime.Hours} defaultValue={hours}>
            <SelectTrigger>
              <SelectValue
                placeholder={
                  personalResultTimePlaceholders[PersonalResultTime.Hours]
                }
              />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                {hoursValues.map((hourValue) => (
                  <SelectItem value={hourValue} key={hourValue}>
                    {hourValue}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select name={PersonalResultTime.Minutes} defaultValue={minutes}>
            <SelectTrigger>
              <SelectValue
                placeholder={
                  personalResultTimePlaceholders[PersonalResultTime.Minutes]
                }
              />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                {minutesValues.map((minuteValue) => (
                  <SelectItem value={minuteValue} key={minuteValue}>
                    {minuteValue}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Select name={PersonalResultTime.Seconds} defaultValue={seconds}>
          <SelectTrigger>
            <SelectValue
              placeholder={
                personalResultTimePlaceholders[PersonalResultTime.Seconds]
              }
            />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {secondsValues.map((secondsValue) => (
                <SelectItem value={secondsValue} key={secondsValue}>
                  {secondsValue}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <SubmitButton tab={Tab.Results} />
      </form>
    </Dialog>
  );
};
