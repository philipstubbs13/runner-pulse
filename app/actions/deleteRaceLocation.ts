"use server";
import { db } from "@/lib/db";
import { getSessionUser } from "../../utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { Routes } from "@/utils/router/Routes.constants";

async function deleteRaceLocation(raceLocationId: string): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const raceLocation = await db.raceLocation.findFirst({
    where: { id: raceLocationId },
  });

  if (!raceLocation) throw new Error("Race Location Not Found");

  if (raceLocation.userId.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  await db.raceLocation.delete({ where: { id: raceLocationId } });

  revalidatePath(Routes.ManageRaceLocations, "layout");
}

export default deleteRaceLocation;
