"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationInUseDialog = ({ isOpen, onClose }: IProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-amber-600">
            <AlertCircle className="h-5 w-5" />
            Location In Use
          </DialogTitle>
          <DialogDescription>
            The location cannot be deleted because it is associated with
            existing race results.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-gray-500">
            This location is currently used in at least one race result. To
            delete this location, you must first remove or update all associated
            race results.
          </p>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button type="button" onClick={onClose} variant="outline">
            Understood
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
