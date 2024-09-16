import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Routes } from "@/utils/router/Routes.constants";
import { PropsWithChildren, ReactNode } from "react";

interface IProps {
  /**
   * Custom content within the body of the card.
   */
  children: ReactNode;
  /**
   * The route to which the user should be redirected (passed as a `Routes` constant).
   */
  redirectLink: Routes;
  /**
   * Text for the button label.
   */
  redirectLinkLabel: string;
  /**
   * The title or heading for the card.
   */
  title: string;
}

export const NotFoundCard = (props: PropsWithChildren<IProps>) => {
  return (
    <Card className="w-full max-w-md bg-white shadow-lg">
      <CardHeader className="bg-yellow-500 text-white text-center py-6">
        <AlertTriangle className="mx-auto h-16 w-16 mb-4" />
        <CardTitle className="text-3xl font-bold">{props.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center pt-6">{props.children}</CardContent>
      <CardFooter className="flex justify-center pt-2 pb-6">
        <Link href={props.redirectLink} passHref>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {props.redirectLinkLabel}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
