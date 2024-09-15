import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";
import { GlobalContext } from "@/context/global-context/GlobalContext";
import { Tab } from "../tabs/Tabs.constants";

/**
 * The `Header` component displays the main app title and logo, along with a logout button.
 * It dynamically updates based on the active tab in the application context and handles user sign-out.
 */
const meta = {
  component: Header,
  tags: ["autodocs"],
  title: "Components/Header",
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResultsActiveTab: Story = {
  args: {},
};

export const GalleryActiveTab: Story = {
  args: {},
  decorators: [
    (Story) => (
      <GlobalContext.Provider
        value={{
          activeTab: Tab.Gallery,
          updateActiveTab: () => {},
          shouldHideTabs: false,
        }}
      >
        <Story />
      </GlobalContext.Provider>
    ),
  ],
};

export const RacesActiveTab: Story = {
  args: {},
  decorators: [
    (Story) => (
      <GlobalContext.Provider
        value={{
          activeTab: Tab.Races,
          updateActiveTab: () => {},
          shouldHideTabs: false,
        }}
      >
        <Story />
      </GlobalContext.Provider>
    ),
  ],
};
