"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  settingsVariantProps,
  SettingsButtonVariant,
} from "@/components/buttons/settings-button/SettingsButton.constants";

interface IProps {
  /**
   * The type of settings button to render.
   */
  variant: SettingsButtonVariant;
}

export const SettingsButton = (props: IProps) => {
  const router = useRouter();
  const { label, Icon, route } = settingsVariantProps[props.variant];

  return (
    <Button
      onClick={() => router.push(route)}
      variant="outline"
      className="w-full"
    >
      <Icon className="mr-2 h-4 w-4" data-testid="settings-button-icon" />
      {label}
    </Button>
  );
};
