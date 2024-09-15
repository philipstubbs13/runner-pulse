"use client";

import { useSession } from "next-auth/react";
import { Auth } from "@/components/auth/Auth";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return <Auth />;
  }

  return <div>Home</div>;
}
