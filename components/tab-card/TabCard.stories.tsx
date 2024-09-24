import type { Meta, StoryObj } from "@storybook/react";

import { TabCard } from "./TabCard";
import { Tab } from "../tabs/Tabs.constants";

/**
 * The `TabCard` component is a styled card that dynamically adapts its appearance based on the selected tab.
 * It displays a title and description with customizable colors, and it can include any child components or content.
 */
const meta = {
  component: TabCard,
  tags: ["autodocs"],
  title: "Components/Tab Card",
} satisfies Meta<typeof TabCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResultsTab: Story = {
  args: {
    tab: Tab.Results,
  },
};

export const GalleryTab: Story = {
  args: {
    tab: Tab.Gallery,
  },
};

export const RacesTab: Story = {
  args: {
    tab: Tab.Races,
  },
};

export const StatsTab: Story = {
  args: {
    tab: Tab.Stats,
  },
};
