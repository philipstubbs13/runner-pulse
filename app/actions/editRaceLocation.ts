"use server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { Routes } from "@/utils/router/Routes.constants";
import { revalidatePath } from "next/cache";

async function editRaceLocation(
  city: string,
  state: string,
  locationId: string
): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const existingRaceLocation = await db.raceLocation.findFirst({
    where: { id: locationId },
  });

  if (existingRaceLocation?.userId.toString() !== userId) {
    throw new Error("Current user does not own this race location");
  }

  await db.raceLocation.update({
    where: { id: locationId },
    data: {
      city,
      state,
    },
  });
  await db.raceResult.updateMany({
    where: { raceLocationId: locationId, userId },
    data: {
      city,
      state,
    },
  });

  revalidatePath(Routes.ManageRaceLocations, "layout");
}

export default editRaceLocation;
