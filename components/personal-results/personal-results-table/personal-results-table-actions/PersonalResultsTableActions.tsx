"use client";

import { PersonalResultTableData } from "@/components/personal-results/personal-results-table/Columns";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { ConfirmationDialog } from "@/components/confirmation-dialog/ConfirmationDialog";
import deleteRaceResult from "@/app/actions/deleteRaceResult";
import { AddResultDialog } from "../../add-result-dialog/AddResultDialog";

interface IProps {
  row: {
    original: PersonalResultTableData;
  };
}

export const PersonalResultsTableActions = (props: IProps) => {
  const { toast } = useToast();
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState<boolean>(false);

  return (
    <div className="flex">
      <Button
        className="hover:text-blue-600"
        onClick={() => setIsConfirmationDialogOpen(true)}
      >
        <Trash2 />
      </Button>
      <ConfirmationDialog
        description={`This will permanently delete ${props.row.original.race}.`}
        isOpen={isConfirmationDialogOpen}
        title="Are you sure you want to delete?"
        onClose={() => setIsConfirmationDialogOpen(false)}
        onConfirm={() => {
          deleteRaceResult(props.row.original.id);
          toast({
            title: "Successfully deleted personal race result",
          });
          setIsConfirmationDialogOpen(false);
        }}
      />
      <AddResultDialog
        distances={props.row.original.distances}
        locations={props.row.original.locations}
        result={props.row.original.result}
      />
    </div>
  );
};
