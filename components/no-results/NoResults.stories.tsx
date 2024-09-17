import type { Meta, StoryObj } from "@storybook/react";

import { NoResults } from "./NoResults";
import { Camera, Trophy } from "lucide-react";
import { Tab } from "../tabs/Tabs.constants";

/**
 * The `NoResults` component is designed to display a message indicating the absence of data,
 * specifically tailored for different tabs such as Results or Gallery.
 * It allows for dynamic customization based on the active tab
 * and utilizes an icon, title, and description to provide context.
 */
const meta = {
  component: NoResults,
  tags: ["autodocs"],
  title: "Components/No Results",
} satisfies Meta<typeof NoResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResultsTab: Story = {
  args: {
    Icon: Trophy,
    description: "Add your first race result to start tracking your progress!",
    tab: Tab.Results,
    title: "No results yet",
  },
};

export const GalleryTab: Story = {
  args: {
    Icon: Camera,
    description: "Upload your first running photo to start your gallery!",
    tab: Tab.Gallery,
    title: "No photos yet",
  },
};

export const SettingsTab: Story = {
  args: {
    Icon: Camera,
    description:
      "Upload your first running photo to start managing your gallery!",
    tab: Tab.Settings,
    title: "No photos yet",
  },
};
