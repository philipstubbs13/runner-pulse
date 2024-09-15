"use client";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

interface IProps {}

export const AuthProvider = (props: PropsWithChildren<IProps>) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};
