import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PropsWithChildren } from "react";
import {
  Tab,
  tabBackgroundColors,
  tabBorderColors,
  tabDescriptionColors,
  tabDescriptions,
  tabLabels,
} from "@/components/tabs/Tabs.constants";

interface IProps {
  /**
   * The tab identifier used to determine the card's styling and content.
   * It should match one of the predefined Tab constants.
   */
  tab: Tab;
}

export const TabCard = (props: PropsWithChildren<IProps>) => {
  const borderColor = tabBorderColors[props.tab];
  const backgroundColor = tabBackgroundColors[props.tab];
  const title = tabLabels[props.tab];
  const descriptionColor = tabDescriptionColors[props.tab];
  const description = tabDescriptions[props.tab];

  return (
    <Card
      className={`bg-white bg-opacity-75 ${borderColor} border-2 shadow-lg`}
      data-testid="tab-card-container"
    >
      <CardHeader
        className={`${backgroundColor} text-white rounded-t-lg`}
        data-testid="card-header"
      >
        <CardTitle>{title}</CardTitle>
        <CardDescription className={descriptionColor}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>test</CardContent>
    </Card>
  );
};
