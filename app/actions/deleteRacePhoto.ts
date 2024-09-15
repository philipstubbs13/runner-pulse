"use server";
import { db } from "@/lib/db";
import cloudinary from "../../config/cloudinary";
import { getSessionUser } from "../../utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { Routes } from "@/utils/router/Routes.constants";

async function deleteRacePhoto(racePhotoId: string): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const racePhoto = await db.racePhoto.findFirst({
    where: { id: racePhotoId },
  });

  if (!racePhoto) throw new Error("Race Photo Not Found");

  if (racePhoto.userId.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  const parts = racePhoto.image.split("/");
  const publicId = parts.at(-1)?.split(".").at(0);

  await cloudinary.uploader.destroy("runnerpulse/" + publicId);

  await db.racePhoto.delete({ where: { id: racePhotoId } });

  revalidatePath(Routes.Gallery, "layout");
}

export default deleteRacePhoto;
