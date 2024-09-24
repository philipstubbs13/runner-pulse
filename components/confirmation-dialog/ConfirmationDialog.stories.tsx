import type { Meta, StoryObj } from "@storybook/react";

import { ConfirmationDialog } from "./ConfirmationDialog";
import { useState } from "react";
import { Button } from "../ui/button";

/**
 * The `ConfirmationDialog` is a dialog component designed to prompt users with a confirmation message,
 * typically for actions such as deleting or submitting important changes. The component features a
 * customizable title, description, and buttons for confirming or canceling the action.
 */
const meta = {
  component: ConfirmationDialog,
  tags: ["autodocs"],
  title: "Components/ConfirmationDialog",
} satisfies Meta<typeof ConfirmationDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Open Confirmation Dialog
        </Button>
        <ConfirmationDialog
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    description: "This will permanently delete item",
    isOpen: false,
    title: "Are you sure you want to delete?",
    onClose: () => {},
    onConfirm: () => {},
  },
};
