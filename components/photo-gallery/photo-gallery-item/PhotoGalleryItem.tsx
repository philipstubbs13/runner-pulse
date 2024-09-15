"use client";

import deleteRacePhoto from "@/app/actions/deleteRacePhoto";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { AddPhotoDialog } from "@/components/photo-gallery/add-photo-dialog/AddPhotoDialog";
import { IPhotoGalleryItem } from "@/components/photo-gallery/PhotoGallery.types";

interface IProps {
  item: IPhotoGalleryItem;
}

export const PhotoGalleryItem = (props: IProps) => {
  return (
    <div className="relative group">
      <Image
        alt={props.item.caption}
        className="w-full h-80 object-cover rounded-lg shadow-md"
        height={0}
        src={props.item.image}
        sizes={"100vw"}
        width={0}
      />
      <div className="absolute inset-0 bg-pink-500 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-lg">
        <div className="text-white text-center font-semibold">
          {props.item.caption}
        </div>
        <div className="flex">
          <AddPhotoDialog galleryItem={props.item} />
          <Button onClick={() => deleteRacePhoto(props.item.id)}>
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};
