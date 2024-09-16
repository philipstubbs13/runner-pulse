import { AddResultDialog } from "./add-result-dialog/AddResultDialog";
import { db } from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { PersonalResultsList } from "./personal-results-list/PersonalResultsList";
import { NoResults } from "@/components/no-results/NoResults";
import { Trophy } from "lucide-react";
import { Tab } from "@/components/tabs/Tabs.constants";

export const PersonalResults = async () => {
  const sessionUser = await getSessionUser();
  const results = await db.raceResult.findMany({
    where: {
      userId: sessionUser?.userId,
    },
  });
  const hasResults = results.length > 0;

  return (
    <div className="space-y-4">
      {hasResults && <PersonalResultsList results={results} />}
      {!hasResults && (
        <NoResults
          Icon={Trophy}
          description="Add your first race result to start tracking your progress!"
          tab={Tab.Results}
          title="No results yet"
        />
      )}
      <AddResultDialog />
    </div>
  );
};
