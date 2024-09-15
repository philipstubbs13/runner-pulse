import { AddResultDialog } from "./add-result-dialog/AddResultDialog";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { PersonalResultsList } from "./personal-results-list/PersonalResultsList";

export const PersonalResults = async () => {
  const sessionUser = await getSessionUser();
  const results = await db.raceResult.findMany({
    where: {
      userId: sessionUser?.userId,
    },
  });

  return (
    <div className="space-y-4">
      <PersonalResultsList results={results} />
      <AddResultDialog />
    </div>
  );
};
