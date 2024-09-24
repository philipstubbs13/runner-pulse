"use server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { Routes } from "@/utils/router/Routes.constants";
import { revalidatePath } from "next/cache";

async function editRaceDistance(
  nextDistance: string,
  id: string
): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const existingRaceDistance = await db.raceDistance.findFirst({
    where: { id },
  });

  if (existingRaceDistance?.userId.toString() !== userId) {
    throw new Error("Current user does not own this race distance");
  }

  await db.raceDistance.update({
    where: { id },
    data: {
      distance: nextDistance,
    },
  });
  await db.raceResult.updateMany({
    where: { raceDistance: existingRaceDistance.distance },
    data: {
      raceDistance: nextDistance,
    },
  });

  revalidatePath(Routes.ManageRaceDistances, "layout");
}

export default editRaceDistance;
