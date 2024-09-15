import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";

interface IProps {
  params: {
    id: string;
  };
}

export default async function RaceDetailsPage(props: IProps) {
  const data = await fetch(
    `https://runsignup.com/rest/race/${props.params.id}?format=json`
  );
  const response = await data.json();

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-green-100 to-blue-100 min-h-screen">
      <Link
        href="/races"
        className="inline-flex items-center text-green-600 hover:text-green-800 mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Upcoming Races
      </Link>
      <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg">
        <CardHeader className="bg-green-500 text-white">
          <CardTitle className="text-2xl">{response.race.name}</CardTitle>
          <CardDescription className="text-green-100">
            {response.race.next_date}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="flex items-center text-gray-600">
            <MapPin className="mr-2 h-5 w-5" />
            <span>
              {response.race.address.street}
              <br />
              {response.race.address.street2 && (
                <>
                  {response.race.address.street2}
                  <br />
                </>
              )}
              {response.race.address.city}, {response.race.address.state}{" "}
              {response.race.zipcode}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <span>Participants: TODO</span>
          </div>
          <p
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: response.race.description }}
          />
        </CardContent>
        <CardFooter className="bg-gray-50">
          <a
            className="w-full bg-green-500 hover:bg-green-600 text-white p-4 text-center font-bold"
            href={response.race.url}
            target="_blank"
          >
            Register for Race
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
