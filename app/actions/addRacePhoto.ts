"use server";
import { getSessionUser } from "../../utils/getSessionUser";
import { revalidatePath } from "next/cache";
import cloudinary from "../../config/cloudinary";
import { db } from "@/lib/db";
import { Routes } from "@/utils/router/Routes.constants";

async function addRacePhoto(formData: FormData): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const imageFile = formData.get("image");

  console.log(typeof imageFile, "typeofImageFile");

  if (!imageFile) {
    throw new Error("No photo provided");
  }

  const imageBuffer = await (imageFile as Blob).arrayBuffer();
  const imageArray = Array.from(new Uint8Array(imageBuffer));
  const imageData = Buffer.from(imageArray);

  const imageBase64 = imageData.toString("base64");

  const result = await cloudinary.uploader.upload(
    `data:image/png;base64,${imageBase64}`,
    {
      folder: "runnerpulse",
    }
  );

  await db.racePhoto.create({
    data: {
      caption: (formData.get("caption") || "") as string | undefined,
      image: result.secure_url,
      userId,
    },
  });

  revalidatePath(Routes.Gallery, "layout");
}

export default addRacePhoto;
