import { ComponentType } from "react";
import { Tab } from "@/components/tabs/Tabs.constants";
import clsx from "clsx";

interface IProps {
  /**
   * The descriptive message to display when no results are available.
   */
  description: string;
  /**
   * A React component used as an icon, passed via the `JSXElementConstructor` prop.
   */
  // eslint-disable-next-line
  Icon: ComponentType<any>;
  /**
   * Indicates which tab is active.
   */
  tab: Tab.Results | Tab.Gallery | Tab.Settings | Tab.Stats;
  /**
   * The title or heading for the no results message.
   */
  title: string;
}

export const NoResults = (props: IProps) => {
  const { Icon } = props;

  return (
    <div className="space-y-4">
      <div
        className={clsx({
          "text-center py-10 rounded-lg w-full": true,
          "bg-blue-50": props.tab === Tab.Results || props.tab === Tab.Settings,
          "bg-pink-50": props.tab === Tab.Gallery,
          "bg-purple-50": props.tab === Tab.Stats,
        })}
      >
        <Icon
          className={clsx({
            "mx-auto h-12 w-12 mb-4": true,
            "text-blue-300":
              props.tab === Tab.Results || props.tab === Tab.Settings,
            "text-pink-300": props.tab === Tab.Gallery,
            "text-purple-300": props.tab === Tab.Stats,
          })}
        />
        <h3
          className={clsx({
            "text-lg font-semibold mb-2": true,
            "text-blue-700":
              props.tab === Tab.Results || props.tab === Tab.Settings,
            "text-pink-700": props.tab === Tab.Gallery,
            "text-purple-700": props.tab === Tab.Stats,
          })}
        >
          {props.title}
        </h3>
        <p
          className={clsx({
            "text-blue-600":
              props.tab === Tab.Results || props.tab === Tab.Settings,
            "text-pink-600": props.tab === Tab.Gallery,
            "text-purple-700": props.tab === Tab.Stats,
          })}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};
