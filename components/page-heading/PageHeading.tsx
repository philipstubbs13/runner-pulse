import { getTitleColor } from "@/utils/getTitleColor";
import { Tab } from "@/components/tabs/Tabs.constants";
import { AppLogo } from "../app-logo/AppLogo";
import clsx from "clsx";

interface IProps {
  activeTab: Tab | null;
}

export const PageHeading = (props: IProps) => {
  return (
    <div
      className={clsx({
        [getTitleColor(props.activeTab)]: true,
        "flex items-center": true,
      })}
    >
      <AppLogo />
      <h1 className={"text-4xl font-bold transition-colors duration-300"}>
        Runner Pulse
      </h1>
    </div>
  );
};
