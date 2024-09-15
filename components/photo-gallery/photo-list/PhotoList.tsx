"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { IPhotoGalleryItem } from "@/components/photo-gallery/PhotoGallery.types";

interface IProps {
  /**
   * An array of objects representing the photos to be displayed
   *  Each item should include the following properties: id, image, and caption.
   */
  photos: IPhotoGalleryItem[];
}

export const PhotoList = (props: IProps) => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <Gallery withCaption={true} withDownloadButton={true}>
        {props.photos.map((photo) => (
          <Item
            caption={photo.caption}
            height="600"
            key={photo.id}
            original={photo.image}
            thumbnail={photo.image}
            width="600"
          >
            {({ ref, open }) => (
              <Image
                alt={photo.caption}
                ref={ref}
                onClick={open}
                src={photo.image}
                className="object-cover w-full h-80 mx-auto rounded-xl cursor-pointer"
                width={0}
                height={0}
                sizes={"100vw"}
              />
            )}
          </Item>
        ))}
      </Gallery>
    </div>
  );
};
