import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "./Dialog";
import { Button } from "../ui/button";

/**
 * The Dialog component is a custom modal dialog wrapper
 * that renders a dialog with a customizable trigger button, title, and content.
 * The title can be displayed in either pink or blue based on the `titleColor` prop,
 * and the dialog content is rendered in a white background.
 */
const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pink: Story = {
  args: {
    children: <p>Dialog content goes here</p>,
    title: "Dialog Title",
    titleColor: "pink",
    trigger: (
      <Button className="bg-pink-500 hover:bg-pink-600 text-white">
        Open Dialog
      </Button>
    ),
  },
};

export const Blue: Story = {
  args: {
    ...Pink.args,
    titleColor: "blue",
    trigger: (
      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
        Open Dialog
      </Button>
    ),
  },
};
