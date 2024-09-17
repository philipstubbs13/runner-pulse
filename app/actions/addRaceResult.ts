"use server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { Routes } from "@/utils/router/Routes.constants";
import { revalidatePath } from "next/cache";

async function addRaceResult(formData: FormData): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const hours = formData.get("hours");
  const minutes = formData.get("minutes");
  const seconds = formData.get("seconds");
  const time = `${hours}:${minutes}:${seconds}`;

  const raceResultData = {
    date: formData.get("date") as string,
    race: formData.get("race") as string,
    time,
  };

  await db.raceResult.create({
    data: {
      date: new Date(raceResultData.date).toISOString(),
      race: raceResultData.race,
      raceDistance: formData.get("distance") as string,
      time: raceResultData.time,
      userId,
    },
  });

  revalidatePath(Routes.Results, "layout");
}

export default addRaceResult;
