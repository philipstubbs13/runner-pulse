import { Auth } from "@/components/auth/Auth";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
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
    <div className="mx-auto md:p-4 bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
