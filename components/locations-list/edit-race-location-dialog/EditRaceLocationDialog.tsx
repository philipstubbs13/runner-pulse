"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/dialog/Dialog";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { SubmitButton } from "@/components/buttons/submit-button/SubmitButton";
import { Tab } from "@/components/tabs/Tabs.constants";
import { useToast } from "@/hooks/use-toast";
import editRaceLocation from "@/app/actions/editRaceLocation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { states } from "@/components/personal-results/PersonalResults.constants";

interface IProps {
  city: string;
  state: string;
  locationId: string;
}

export const EditRaceLocationDialog = (props: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const onSubmit = async (formData: FormData) => {
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;

    await editRaceLocation(city, state, props.locationId);
    toast({
      title: "Successfully updated race location",
    });
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      title={"Edit Race Location"}
      titleColor={"orange"}
      trigger={
        <Button size="sm">
          <Pencil className="h-4 w-4" />
        </Button>
      }
    >
      <form action={onSubmit} className="space-y-4">
        <Input
          className="border-blue-300 focus:border-blue-500"
          defaultValue={props.city}
          name="city"
          placeholder="City"
          required={true}
        />
        <Select name="state" required={true} defaultValue={props.state}>
          <SelectTrigger className="border-blue-300 focus:border-blue-500">
            <SelectValue
              placeholder="Select State"
              defaultValue={props.state}
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
        <SubmitButton tab={Tab.ManageLocations} />
      </form>
    </Dialog>
  );
};
