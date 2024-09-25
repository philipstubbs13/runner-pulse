"use server";
import { IPersonalResult } from "@/components/personal-results/PersonalResults.types";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { Routes } from "@/utils/router/Routes.constants";
import { revalidatePath } from "next/cache";

async function getRaceResultsAssociatedWithLocation(
  locationId: string
): Promise<{
  resultsAssociatedWithLocation: IPersonalResult[];
}> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const resultsAssociatedWithLocation: IPersonalResult[] =
    await db.raceResult.findMany({
      where: { raceLocationId: locationId, userId },
    });

  revalidatePath(Routes.ManageRaceLocations, "layout");

  return {
    resultsAssociatedWithLocation,
  };
}

export default getRaceResultsAssociatedWithLocation;
