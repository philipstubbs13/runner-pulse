import { Header } from "@/components/header/Header";
import { LayoutContainer } from "@/components/layout-container/LayoutContainer";
import { PropsWithChildren } from "react";

export default function BusinessCardLayout({ children }: PropsWithChildren) {
  return (
    <LayoutContainer>
      <Header />
      <div>{children}</div>
    </LayoutContainer>
  );
}
