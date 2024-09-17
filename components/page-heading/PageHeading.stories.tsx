import type { Meta, StoryObj } from "@storybook/react";

import { PageHeading } from "./PageHeading";
import { Tab } from "../tabs/Tabs.constants";

/**
 * The `PageHeading` component displays the main app title and logo.
 * It dynamically updates based on the active tab prop.
 */
const meta = {
  component: PageHeading,
  tags: ["autodocs"],
  title: "Components/PageHeading",
} satisfies Meta<typeof PageHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResultsActiveTab: Story = {
  args: {
    activeTab: Tab.Results,
  },
};

export const RacesActiveTab: Story = {
  args: {
    activeTab: Tab.Races,
  },
};

export const GalleryActiveTab: Story = {
  args: {
    activeTab: Tab.Gallery,
  },
};
