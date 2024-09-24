"use server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { Routes } from "@/utils/router/Routes.constants";
import { revalidatePath } from "next/cache";

async function addRaceLocation(formData: FormData): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  await db.raceLocation.create({
    data: {
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      userId,
    },
  });

  revalidatePath(Routes.ManageRaceLocations, "layout");
}

export default addRaceLocation;
