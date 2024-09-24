"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/dialog/Dialog";
import addRacePhoto from "@/app/actions/addRacePhoto";
import { SubmitButton } from "@/components/buttons/submit-button/SubmitButton";
import { Tab } from "@/components/tabs/Tabs.constants";
import { useToast } from "@/hooks/use-toast";

export const AddPhotoDialog = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dialogTitle = "Upload New Photo";

  const onSubmit = async (formData: FormData): Promise<void> => {
    await addRacePhoto(formData);
    toast({
      title: "Successfully uploaded photo",
    });
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      title={dialogTitle}
      titleColor={"pink"}
      trigger={
        <Button className="bg-pink-500 hover:bg-pink-600 text-white">
          Upload Photo
        </Button>
      }
    >
      <form action={onSubmit} className="space-y-4">
        <Input
          accept="image/*"
          className="border-pink-300 focus:border-pink-500"
          name="image"
          required={true}
          type="file"
        />
        <Input
          className="border-pink-300 focus:border-pink-500"
          name="caption"
          placeholder="Caption"
          required={true}
        />
        <SubmitButton tab={Tab.Gallery} />
      </form>
    </Dialog>
  );
};
