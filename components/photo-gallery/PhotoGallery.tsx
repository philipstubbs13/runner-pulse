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
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {/* {photos.map((photo) => (
          <PhotoGalleryItem key={photo.id} item={photo} />
        ))} */}
        <PhotoList photos={photos} />
      </div>
      <AddPhotoDialog />
    </div>
  );
};
