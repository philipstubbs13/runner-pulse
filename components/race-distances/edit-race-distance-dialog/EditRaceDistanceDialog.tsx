"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/dialog/Dialog";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { SubmitButton } from "@/components/buttons/submit-button/SubmitButton";
import { Tab } from "@/components/tabs/Tabs.constants";
import { useToast } from "@/hooks/use-toast";
import editRaceDistance from "@/app/actions/editRaceDistance";

interface IProps {
  distance: string;
  id: string;
}

export const EditRaceDistanceDialog = (props: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const onSubmit = async (formData: FormData) => {
    const distance = formData.get("distance") as string;

    await editRaceDistance(distance, props.id);
    toast({
      title: "Successfully updated race distance",
    });
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      title={"Edit Race Distance Name"}
      titleColor={"blue"}
      trigger={
        <Button size="sm">
          <Pencil className="h-4 w-4" data-testid="edit-race-distance-icon" />
        </Button>
      }
    >
      <form
        action={onSubmit}
        className="space-y-4"
        data-testid="edit-race-distance-form"
      >
        <Input
          className="border-blue-300 focus:border-blue-500"
          defaultValue={props.distance}
          name="distance"
          placeholder="Distance"
          required={true}
        />
        <SubmitButton tab={Tab.RaceDistances} />
      </form>
    </Dialog>
  );
};
