import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PropsWithChildren, ReactNode } from "react";

interface IProps {
  /**
   * The content of the card, often used to display charts, tables, or other visual elements.
   */
  children: ReactNode;
  /**
   * A brief explanation or context for the chart or data.
   */
  description: string;
  /**
   * The main heading of the card, typically used to describe the chart or data displayed.
   */
  title: string;
}

export const ChartCard = (props: PropsWithChildren<IProps>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};
