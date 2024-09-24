import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";
import { GlobalContext } from "@/context/global-context/GlobalContext";
import { Tab } from "../tabs/Tabs.constants";

/**
 * The `Tabs` component provides a tab navigation interface,
 * allowing users to switch between different views or sections within the application.
 * It integrates with global context to manage the active tab and supports conditional
 * rendering based on the application state.
 */
const meta = {
  component: Tabs,
  tags: ["autodocs"],
  title: "Components/Tabs",
} satisfies Meta<typeof Tabs>;

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

export const StatsActiveTab: Story = {
  args: {},
  decorators: [
    (Story) => (
      <GlobalContext.Provider
        value={{
          activeTab: Tab.Stats,
          updateActiveTab: () => {},
          shouldHideTabs: false,
        }}
      >
        <Story />
      </GlobalContext.Provider>
    ),
  ],
};

export const WithTabsHidden: Story = {
  args: {},
  decorators: [
    (Story) => (
      <GlobalContext.Provider
        value={{
          activeTab: Tab.Races,
          updateActiveTab: () => {},
          shouldHideTabs: true,
        }}
      >
        <Story />
      </GlobalContext.Provider>
    ),
  ],
};
