import {
  Dialog as UiDialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import clsx from "clsx";
import { ComponentProps, PropsWithChildren, ReactNode } from "react";

interface IProps extends ComponentProps<typeof UiDialog> {
  /**
   * The content that appears within the dialog body, after the header. This could be text, forms, or any other components.
   */
  children: ReactNode;
  /**
   * The text displayed in the dialog's header. This is the main title of the dialog box.
   */
  title: string;
  /**
   * Determines the color of the dialog title. Accepts either "pink" or "blue".
   */
  titleColor: "pink" | "blue";
  /**
   * A React element that serves as the trigger to open the dialog.
   */
  trigger: ReactNode;
}

export const Dialog = (props: PropsWithChildren<IProps>) => {
  return (
    <UiDialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle
            className={clsx({
              "text-pink-600": props.titleColor === "pink",
              "text-blue-600": props.titleColor === "blue",
            })}
          >
            {props.title}
          </DialogTitle>
        </DialogHeader>
        {props.children}
      </DialogContent>
    </UiDialog>
  );
};
