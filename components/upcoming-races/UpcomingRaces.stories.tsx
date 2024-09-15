import type { Meta, StoryObj } from "@storybook/react";

import { UpcomingRaces } from "./UpcomingRaces";

const meta = {
  component: UpcomingRaces,
  tags: ["autodocs"],
  title: "Components/Upcoming Races",
} satisfies Meta<typeof UpcomingRaces>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
