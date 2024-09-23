import Link from "next/link";
import { ArrowLeft, Camera } from "lucide-react";
import { getSessionUser } from "@/utils/getSessionUser";
import { db } from "@/lib/db";
import { EditPhotoCard } from "@/components/edit-photo-card/EditPhotoCard";
import { Routes } from "@/utils/router/Routes.constants";
import { TabCard } from "@/components/tab-card/TabCard";
import { Tab } from "@/components/tabs/Tabs.constants";
import { NoResults } from "@/components/no-results/NoResults";

export default async function Settings() {
  const sessionUser = await getSessionUser();
  const photos = await db.racePhoto.findMany({
    where: { userId: sessionUser?.userId },
  });
  const hasPhotos = photos.length > 0;

  return (
    <div className="md:p-4 bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen">
      <Link
        href={Routes.Gallery}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>
      <TabCard tab={Tab.Settings}>
        {hasPhotos && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <EditPhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        )}
        {!hasPhotos && (
          <NoResults
            description="Upload your first running photo to start managing your gallery!"
            Icon={Camera}
            tab={Tab.Settings}
            title="No photos yet"
          />
        )}
      </TabCard>
    </div>
  );
}
