import type { Meta, StoryObj } from "@storybook/react";

import { SubmitButton } from "./SubmitButton";
import { Tab } from "@/components/tabs/Tabs.constants";

/**
 * The `SubmitButton` component is a customizable submit button that adapts
 * its styles based on the active tab and handles form submission states.
 */
const meta = {
  component: SubmitButton,
  tags: ["autodocs"],
  title: "Components/Buttons/Submit Button",
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubmitButtonOnResultsTab: Story = {
  args: {
    tab: Tab.Results,
  },
};

export const SubmitButtonOnRacesTab: Story = {
  args: {
    tab: Tab.Races,
  },
};

export const SubmitButtonOnGalleryTab: Story = {
  args: {
    tab: Tab.Gallery,
  },
};

export const SubmitButtonOnStatsTab: Story = {
  args: {
    tab: Tab.Stats,
  },
};

export const SubmitButtonOnManageLocationsTab: Story = {
  args: {
    tab: Tab.ManageLocations,
  },
};
