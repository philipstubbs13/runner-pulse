"use server";
import { db } from "@/lib/db";
import { getSessionUser } from "../../utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { Routes } from "@/utils/router/Routes.constants";

async function deleteRaceDistance(raceDistanceId: string): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const raceDistance = await db.raceDistance.findFirst({
    where: { id: raceDistanceId },
  });

  if (!raceDistance) throw new Error("Race Distance Not Found");

  if (raceDistance.userId.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  await db.raceDistance.delete({ where: { id: raceDistanceId } });

  revalidatePath(Routes.ManageRaceDistances, "layout");
}

export default deleteRaceDistance;
