import { Routes } from "@/utils/router/Routes.constants";
import { NotFoundCard } from "@/components/not-found-card/NotFoundCard";

export default function RaceNotFound() {
  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-green-100 to-blue-100 min-h-screen flex items-center justify-center">
      <NotFoundCard
        redirectLink={Routes.Races}
        redirectLinkLabel={"Back to Upcoming Races"}
        title={"Race Not Found"}
      >
        <p className="text-gray-600 mb-4">
          Oops! It looks like the race you're looking for doesn't exist or has
          been removed.
        </p>
        <p className="text-gray-600">
          Don't worry, there are plenty of other races to explore!
        </p>
      </NotFoundCard>
    </div>
  );
}
