"use client";

import {
  Tab,
  tabBackgroundColors,
  tabHoverBackgroundColors,
} from "@/components/tabs/Tabs.constants";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useFormStatus } from "react-dom";

interface IProps {
  /**
   * This prop determines the current active tab, used to dynamically set the button's background and hover colors.
   * The tab must be one of the predefined Tab constants.
   */
  tab: Tab;
}

export const SubmitButton = (props: IProps) => {
  const { pending } = useFormStatus();
  const backgroundColor = tabBackgroundColors[props.tab];
  const hoverBackgroundColor = tabHoverBackgroundColors[props.tab];

  return (
    <Button
      type="submit"
      disabled={pending}
      className={clsx({
        [backgroundColor]: true,
        [hoverBackgroundColor]: true,
        "text-white": true,
      })}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};
