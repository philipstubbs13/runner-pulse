import { Auth } from "@/components/auth/Auth";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { LayoutContainer } from "@/components/layout-container/LayoutContainer";
import { getSessionUser } from "@/utils/getSessionUser";
import { PropsWithChildren, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default async function SettingsLayout(props: PropsWithChildren<IProps>) {
  const user = await getSessionUser();

  if (!user) {
    return <Auth />;
  }

  return (
    <LayoutContainer>
      <Header />
      {props.children}
      <Footer />
    </LayoutContainer>
  );
}
