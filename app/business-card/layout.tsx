import { Header } from "@/components/header/Header";
import { PropsWithChildren } from "react";

export default function BusinessCardLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto md:p-4 bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen">
      <Header />
      <div>{children}</div>
    </div>
  );
}
