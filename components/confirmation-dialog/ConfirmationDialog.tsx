"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";

interface IProps {
  /**
   * Controls the visibility of the dialog. When `true`, the dialog is displayed; otherwise, it remains hidden.
   */
  isOpen: boolean;
  /**
   * Callback function triggered when the dialog is closed, either by clicking the cancel button or outside the dialog.
   */
  onClose: () => void;
  /**
   * Callback function executed when the confirm button is clicked.
   */
  onConfirm: () => void;
  /**
   * The main heading of the dialog, typically used to describe the action being confirmed.
   */
  title: string;
  /**
   * A brief explanation or context for the confirmation prompt.
   */
  description: string;
  /**
   * Text displayed on the confirm button (default: "Delete").
   */
  confirmText?: string;
  /**
   * Text displayed on the cancel button (default: "Cancel").
   */
  cancelText?: string;
}

export const ConfirmationDialog = (props: IProps) => {
  const {
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    confirmText = "Delete",
    cancelText = "Cancel",
  } = props;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button
            className="bg-red-600 text-white"
            type="button"
            variant="destructive"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </Button>
          <Button type="button" variant="secondary" onClick={onClose}>
            {cancelText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
