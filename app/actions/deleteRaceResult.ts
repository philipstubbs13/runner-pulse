"use server";
import { db } from "@/lib/db";
import { getSessionUser } from "../../utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteRaceResult(raceResultId: string): Promise<void> {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const raceResult = await db.raceResult.findFirst({
    where: { id: raceResultId },
  });

  if (!raceResult) throw new Error("Race Result Not Found");

  if (raceResult.userId.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  await db.raceResult.delete({ where: { id: raceResultId } });

  revalidatePath("/", "layout");
}

export default deleteRaceResult;
