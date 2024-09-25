import { Routes } from "@/utils/router/Routes.constants";
import { ComponentType } from "react";

export interface ISettingsButttonProps {
  // eslint-disable-next-line
  Icon: ComponentType<any>;
  label: string;
  route: Routes;
}
