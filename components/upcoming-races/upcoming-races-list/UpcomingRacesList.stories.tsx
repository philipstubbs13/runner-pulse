import type { Meta, StoryObj } from "@storybook/react";

import { UpcomingRacesList } from "./UpcomingRacesList";
import { IUpcomingRace } from "../UpcomingRaces.types";

/**
 * The `UpcomingRacesList` component displays a table of upcoming races.
 * It provides an organized view of race details and allows users to navigate to race-specific details.
 */
const meta = {
  component: UpcomingRacesList,
  tags: ["autodocs"],
  title: "Components/Upcoming Races List",
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof UpcomingRacesList>;

export default meta;
type Story = StoryObj<typeof meta>;

const racesMock: IUpcomingRace[] = [
  {
    race: {
      address: {
        city: "Minneapolis",
        state: "Minnesota",
      },
      name: "Twin Cities Marathon",
      race_id: "1",
      race_event_days: [
        {
          start_date: "10/06/2024",
        },
      ],
    },
  },
  {
    race: {
      address: {
        city: "Mankato",
        state: "Minnesota",
      },
      name: "Mankato Marathon",
      race_id: "2",
      race_event_days: [
        {
          start_date: "10/20/2024",
        },
      ],
    },
  },
  {
    race: {
      address: {
        city: "Rochester",
        state: "Minnesota",
      },
      name: "Med City Marathon",
      race_id: "3",
      race_event_days: [
        {
          start_date: "05/20/2025",
        },
      ],
    },
  },
];

export const Basic: Story = {
  args: {
    races: racesMock,
  },
};

export const EmptyList: Story = {
  args: {
    races: [],
  },
};
