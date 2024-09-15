"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/dialog/Dialog";
import addRacePhoto from "@/app/actions/addRacePhoto";
import editRacePhoto from "@/app/actions/editRacePhoto";
import { Pencil } from "lucide-react";
import { IPhotoGalleryItem } from "@/components/photo-gallery/PhotoGallery.types";
import { SubmitButton } from "@/components/buttons/submit-button/SubmitButton";
import { Tab } from "@/components/tabs/Tabs.constants";

interface IProps {
  galleryItem?: IPhotoGalleryItem;
}

export const AddPhotoDialog = (props: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isEditingPhoto = Boolean(props.galleryItem);
  const dialogTitle = isEditingPhoto
    ? "Edit Photo Caption"
    : "Upload New Photo";
  const photoIdToEdit = props.galleryItem?.id || "";

  const onSubmit = async (formData: FormData) => {
    if (!isEditingPhoto) {
      await addRacePhoto(formData);
    } else {
      await editRacePhoto(photoIdToEdit, formData);
    }

    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      title={dialogTitle}
      titleColor={"pink"}
      trigger={
        <div>
          {isEditingPhoto && (
            <Button>
              <Pencil />
            </Button>
          )}
          {!isEditingPhoto && (
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              Upload Photo
            </Button>
          )}
        </div>
      }
    >
      <form action={onSubmit} className="space-y-4">
        {!isEditingPhoto && (
          <Input
            accept="image/*"
            className="border-pink-300 focus:border-pink-500"
            name="image"
            required={true}
            type="file"
          />
        )}
        <Input
          className="border-pink-300 focus:border-pink-500"
          defaultValue={props.galleryItem?.caption}
          name="caption"
          placeholder="Caption"
          required={true}
        />
        <SubmitButton tab={Tab.Gallery} />
      </form>
    </Dialog>
  );
};
