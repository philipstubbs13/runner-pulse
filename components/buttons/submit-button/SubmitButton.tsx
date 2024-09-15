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
