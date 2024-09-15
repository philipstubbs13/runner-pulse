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

interface IProps {
  /**
   * An object used to prepopulate the dialog with existing result data if editing.
   * If not provided, the dialog will be used for adding a new result.
   */
  result?: IPersonalResult;
}

export const AddResultDialog = (props: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const isEditingResult = props.result;
  const dialogTitle = props.result ? "Edit Result" : "Add New Result";
  const time = props.result?.time || "";
  const [hours, minutes, seconds] = time?.split(":");
  const resultIdToEdit = props.result?.id || "";
  const hoursValues = getHoursValues();
  const minutesValues = getMinutesOrSecondsValues();
  const secondsValues = getMinutesOrSecondsValues();

  const onSubmit = async (formData: FormData) => {
    if (!isEditingResult) {
      await addRaceResult(formData);
    } else {
      await editRaceResult(resultIdToEdit, formData);
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
              Add New Result
            </Button>
          )}
        </div>
      }
    >
      <form action={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <Input
            className="border-blue-300 focus:border-blue-500"
            defaultValue={
              props.result?.date
                ? new Intl.DateTimeFormat("en-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }).format(props.result?.date)
                : undefined
            }
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
        <Input
          className="border-blue-300 focus:border-blue-500"
          defaultValue={props.result?.distance}
          name="distance"
          placeholder="Distance"
          required={true}
          step="0.1"
          type="number"
        />
        <p className="font-bold pt-3">Finish Time</p>
        <div className="grid grid-cols-2 gap-2">
          <Select name={PersonalResultTime.Hours} defaultValue={hours}>
            <SelectTrigger>
              <SelectValue
                placeholder={
                  personalResultTimePlaceholders[PersonalResultTime.Hours]
                }
              />
            </SelectTrigger>
            <SelectContent>
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
            <SelectContent>
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
          <SelectContent>
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
