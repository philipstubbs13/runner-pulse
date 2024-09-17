import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { getSessionUser } from "@/utils/getSessionUser";
import { db } from "@/lib/db";
import { EditPhotoCard } from "@/components/edit-photo-card/EditPhotoCard";
import { Routes } from "@/utils/router/Routes.constants";

export default async function Settings() {
  const sessionUser = await getSessionUser();
  const photos = await db.racePhoto.findMany({
    where: { userId: sessionUser?.userId },
  });

  return (
    <div className="p-4 bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen">
      <Link
        href={Routes.Gallery}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>
      <Card className="w-full bg-white shadow-lg">
        <CardHeader className="bg-blue-500 text-white">
          <CardTitle className="text-2xl">Manage Photos</CardTitle>
          <CardDescription className="text-blue-100">
            Edit and delete your photos
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <EditPhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
