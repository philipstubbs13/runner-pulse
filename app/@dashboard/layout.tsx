import { Auth } from "@/components/auth/Auth";
import { Header } from "@/components/header/Header";
import { Tabs } from "@/components/tabs/Tabs";
import { getSessionUser } from "@/utils/getSessionUser";
import { PropsWithChildren } from "react";

interface IProps {}

export default async function Layout(props: PropsWithChildren<IProps>) {
  const user = await getSessionUser();

  if (!user) {
    return <Auth />;
  }

  return (
    <div className="mx-auto md:p-4 bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen">
      <Header />
      <Tabs>{props.children}</Tabs>
    </div>
  );
}
