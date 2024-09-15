import { db } from "@/lib/db";
import { AddPhotoDialog } from "./add-photo-dialog/AddPhotoDialog";
import { getSessionUser } from "@/utils/getSessionUser";
import { PhotoList } from "./photo-list/PhotoList";

export const PhotoGallery = async () => {
  const sessionUser = await getSessionUser();
  const photos = await db.racePhoto.findMany({
    where: { userId: sessionUser?.userId },
  });

  return (
    <div className="space-y-4">
      {/* {photos.map((photo) => (
          <PhotoGalleryItem key={photo.id} item={photo} />
        ))} */}
      <PhotoList photos={photos} />
      <AddPhotoDialog />
    </div>
  );
};
