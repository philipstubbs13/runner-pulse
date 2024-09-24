"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2 } from "lucide-react";
import { IPhotoGalleryItem } from "@/components/photo-gallery/PhotoGallery.types";
import editRacePhoto from "@/app/actions/editRacePhoto";
import deleteRacePhoto from "@/app/actions/deleteRacePhoto";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { ConfirmationDialog } from "../confirmation-dialog/ConfirmationDialog";

interface IProps {
  /**
   * An object representing a photo with id, caption, and image.
   */
  photo: IPhotoGalleryItem;
}

export const EditPhotoCard = (props: IProps) => {
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<string>("");
  const [editCaption, setEditCaption] = useState<string>("");
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState<boolean>(false);

  const handleEdit = (id: string, caption: string): void => {
    setEditingId(id);
    setEditCaption(caption);
  };

  const handleSave = async (id: string): Promise<void> => {
    await editRacePhoto(id, editCaption);
    toast({
      title: "Successfully edited photo",
    });
    setEditingId("");
  };

  const handleDelete = async (id: string): Promise<void> => {
    await deleteRacePhoto(id);
    toast({
      title: "Successfully deleted photo",
    });
    setIsConfirmationDialogOpen(false);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <Image
        alt={props.photo.caption}
        className="w-full h-48 object-cover rounded-lg mb-4"
        height={0}
        sizes={"100vw"}
        src={props.photo.image}
        width={0}
      />
      {editingId === props.photo.id ? (
        <div className="space-y-2">
          <Label htmlFor={`caption-${props.photo.id}`}>Edit Caption</Label>
          <Input
            className="w-full"
            id={`caption-${props.photo.id}`}
            value={editCaption}
            onChange={(e) => setEditCaption(e.target.value)}
          />
          <Button
            onClick={() => handleSave(props.photo.id)}
            className="w-full bg-slate-800 hover:bg-slate-800 text-white hover:text-white"
          >
            Save
          </Button>
        </div>
      ) : (
        <div className="flex flex-col justify-between gap-3">
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleEdit(props.photo.id, props.photo.caption)}
            >
              <Pencil className="h-4 w-4" aria-label="Pencil" />
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setIsConfirmationDialogOpen(true)}
            >
              <Trash2 className="h-4 w-4" aria-label="Trash" />
            </Button>
            <ConfirmationDialog
              description={`This will permanently delete ${props.photo.caption}.`}
              isOpen={isConfirmationDialogOpen}
              title="Are you sure you want to delete?"
              onClose={() => setIsConfirmationDialogOpen(false)}
              onConfirm={() => handleDelete(props.photo.id)}
            />
          </div>
          <p className="text-gray-700">{props.photo.caption}</p>
        </div>
      )}
    </div>
  );
};
