"use server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { Routes } from "@/utils/router/Routes.constants";
import { revalidatePath } from "next/cache";

async function editRacePhoto(
  racePhotoId: string,
  formData: FormData
): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const existingRacePhoto = await db.racePhoto.findFirst({
    where: { id: racePhotoId },
  });

  if (existingRacePhoto?.userId.toString() !== userId) {
    throw new Error("Current user does not own this race photo");
  }

  await db.racePhoto.update({
    where: { id: racePhotoId },
    data: {
      caption: formData.get("caption") as string,
    },
  });

  revalidatePath(Routes.Gallery, "layout");
}

export default editRacePhoto;
