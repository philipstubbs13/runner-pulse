import { db } from "@/lib/db";
import { AddPhotoDialog } from "./add-photo-dialog/AddPhotoDialog";
import { getSessionUser } from "@/utils/getSessionUser";
import { PhotoList } from "./photo-list/PhotoList";
import { NoResults } from "@/components/no-results/NoResults";
import { Camera, Settings } from "lucide-react";
import { Tab } from "@/components/tabs/Tabs.constants";
import { Button } from "../ui/button";
import Link from "next/link";
import { Routes } from "@/utils/router/Routes.constants";

export const PhotoGallery = async () => {
  const sessionUser = await getSessionUser();
  const photos = await db.racePhoto.findMany({
    where: { userId: sessionUser?.userId },
  });
  const hasPhotos = photos.length > 0;

  return (
    <div className="space-y-4">
      {hasPhotos && <PhotoList photos={photos} />}
      {!hasPhotos && (
        <NoResults
          Icon={Camera}
          description=" Upload your first running photo to start your gallery!"
          tab={Tab.Gallery}
          title="No photos yet"
        />
      )}
      <div className="flex items-center gap-4">
        <AddPhotoDialog />
        <Link href={Routes.Settings}>
          <Button
            variant="outline"
            className="border-pink-500 text-pink-600 hover:bg-pink-100"
          >
            <Settings className="mr-2 h-4 w-4" />
            Manage Photos
          </Button>
        </Link>
      </div>
    </div>
  );
};
