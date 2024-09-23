import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth-provider/AuthProvider";
import { GlobalProvider } from "@/context/global-context/GlobalContext";
import clsx from "clsx";
import "photoswipe/dist/photoswipe.css";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Runner Pulse",
  description: "Track your runner journey.",
};

export default function RootLayout(props: Readonly<IProps>) {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang="en" className={"h-full"}>
          <body className={clsx(inter.className, "h-full")}>
            {props.children}
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
}
