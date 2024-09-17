"use server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { Routes } from "@/utils/router/Routes.constants";
import { revalidatePath } from "next/cache";

async function editRaceResult(
  raceResultId: string,
  formData: FormData
): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const existingRaceResult = await db.raceResult.findFirst({
    where: { id: raceResultId },
  });

  if (existingRaceResult?.userId.toString() !== userId) {
    throw new Error("Current user does not own this race result");
  }

  const hours = formData.get("hours");
  const minutes = formData.get("minutes");
  const seconds = formData.get("seconds");
  const time = `${hours}:${minutes}:${seconds}`;
  const date = formData.get("date") as string;

  await db.raceResult.update({
    where: { id: raceResultId },
    data: {
      date: new Date(date).toISOString(),
      race: formData.get("race") as string,
      raceDistance: formData.get("distance") as string,
      time,
    },
  });

  revalidatePath(Routes.Results, "layout");
}

export default editRaceResult;
