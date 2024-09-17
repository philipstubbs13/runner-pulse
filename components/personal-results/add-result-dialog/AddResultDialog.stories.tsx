import type { Meta, StoryObj } from "@storybook/react";

import { AddResultDialog } from "./AddResultDialog";

/**
 * The `AddResultDialog` component provides a dialog for adding or editing personal race results.
 * It includes a form with fields for entering race details and finish time, and it supports both
 * adding new results and updating existing ones.
 */
const meta = {
  title: "Components/Add Result Dialog",
  component: AddResultDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof AddResultDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddNewResult: Story = {
  args: {},
};

export const IsEditingResult: Story = {
  args: {
    result: {
      date: new Date("10/01/2022"),
      id: "3",
      race: "Twin Cities Marathon",
      raceDistance: "Marathon",
      time: "03:30:15",
    },
  },
};
