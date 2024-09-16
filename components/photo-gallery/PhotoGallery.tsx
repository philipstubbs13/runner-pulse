import { db } from "@/lib/db";
import { AddPhotoDialog } from "./add-photo-dialog/AddPhotoDialog";
import { getSessionUser } from "@/utils/getSessionUser";
import { PhotoList } from "./photo-list/PhotoList";
import { NoResults } from "@/components/no-results/NoResults";
import { Camera } from "lucide-react";
import { Tab } from "@/components/tabs/Tabs.constants";

export const PhotoGallery = async () => {
  const sessionUser = await getSessionUser();
  const photos = await db.racePhoto.findMany({
    where: { userId: sessionUser?.userId },
  });
  const hasPhotos = photos.length > 0;

  return (
    <div className="space-y-4">
      {/* {photos.map((photo) => (
        <PhotoGalleryItem key={photo.id} item={photo} />
      ))} */}
      {hasPhotos && <PhotoList photos={photos} />}
      {!hasPhotos && (
        <NoResults
          Icon={Camera}
          description=" Upload your first running photo to start your gallery!"
          tab={Tab.Gallery}
          title="No photos yet"
        />
      )}
      <AddPhotoDialog />
    </div>
  );
};
