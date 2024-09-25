import type { Meta, StoryObj } from "@storybook/react";

import { SettingsButton } from "./SettingsButton";
import { SettingsButtonVariant } from "./SettingsButton.constants";

/**
 * The `SettingsButton` component is a customizable settings button used
 * to navigate to the different settings pages in the application from the
 * sheets side menu. The component takes up the full width of its container.
 */
const meta = {
  component: SettingsButton,
  tags: ["autodocs"],
  title: "Components/Buttons/Settings Button",
  decorators: [
    (Story) => (
      <main>
        <div className="max-w-[300px]">
          <Story />
        </div>
      </main>
    ),
  ],
} satisfies Meta<typeof SettingsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ManagePhotos: Story = {
  args: {
    variant: SettingsButtonVariant.ManagePhotos,
  },
};

export const ManageRaceDistances: Story = {
  args: {
    variant: SettingsButtonVariant.ManageRaceLocations,
  },
};

export const ManageRaceLocations: Story = {
  args: {
    variant: SettingsButtonVariant.ManageRaceDistances,
  },
};
