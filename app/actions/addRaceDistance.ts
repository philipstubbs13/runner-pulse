"use server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { Routes } from "@/utils/router/Routes.constants";
import { revalidatePath } from "next/cache";

async function addRaceDistance(formData: FormData): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  await db.raceDistance.create({
    data: {
      distance: formData.get("distance") as string,
      userId,
    },
  });

  revalidatePath(Routes.ManageRaceDistances, "layout");
}

export default addRaceDistance;
