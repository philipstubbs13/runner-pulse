import { Auth } from "@/components/auth/Auth";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Tabs } from "@/components/tabs/Tabs";
import { getSessionUser } from "@/utils/getSessionUser";
import { PropsWithChildren } from "react";

export default async function DashboardLayout(props: PropsWithChildren) {
  const user = await getSessionUser();

  if (!user) {
    return <Auth />;
  }

  return (
    <div className="mx-auto md:p-4 bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen">
      <Header />
      <Tabs>{props.children}</Tabs>
      <Footer />
    </div>
  );
}
