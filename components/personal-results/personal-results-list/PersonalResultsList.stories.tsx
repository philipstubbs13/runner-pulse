import type { Meta, StoryObj } from "@storybook/react";

import { PersonalResultsList } from "./PersonalResultsList";
import { IPersonalResult } from "../PersonalResults.types";

/**
 * The `PersonalResultsList` component displays a table of personal race results.
 * It provides a visual representation of each result, including date, race, distance,
 * and time, and includes options to delete or edit each result.
 */
const meta = {
  component: PersonalResultsList,
  tags: ["autodocs"],
  title: "Components/Personal Results List",
} satisfies Meta<typeof PersonalResultsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const resultsMock: IPersonalResult[] = [
  {
    date: new Date("09/01/2024"),
    distance: 9.3,
    id: "1",
    race: "Heart of the City",
    time: "01:05:38",
  },
  {
    date: new Date("09/14/2024"),
    distance: 6.2,
    id: "2",
    race: "Circle the Lake",
    time: "00:42:15",
  },
  {
    date: new Date("10/01/2022"),
    distance: 26.3,
    id: "3",
    race: "Twin Cities Marathon",
    time: "03:30:15",
  },
];

export const Basic: Story = {
  args: {
    results: resultsMock,
  },
};
