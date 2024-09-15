import type { Meta, StoryObj } from "@storybook/react";

import { PersonalResults } from "./PersonalResults";

const meta = {
  component: PersonalResults,
  tags: ["autodocs"],
  title: "Components/Personal Results",
} satisfies Meta<typeof PersonalResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
