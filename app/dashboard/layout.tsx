import { Auth } from "@/components/auth/Auth";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { LayoutContainer } from "@/components/layout-container/LayoutContainer";
import { Tabs } from "@/components/tabs/Tabs";
import { getSessionUser } from "@/utils/getSessionUser";
import { PropsWithChildren } from "react";

export default async function DashboardLayout(props: PropsWithChildren) {
  const user = await getSessionUser();

  if (!user) {
    return <Auth />;
  }

  return (
    <LayoutContainer>
      <Header />
      <Tabs>{props.children}</Tabs>
      <Footer />
    </LayoutContainer>
  );
}
