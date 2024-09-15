import { getServerSession } from "next-auth/next";
import { authOptions } from "./authOptions";
import { ISession, ISessionUser } from "@/components/auth/Auth.types";

export const getSessionUser = async (): Promise<ISessionUser | null> => {
  const session: ISession | null = await getServerSession(authOptions);

  if (!session || !session.user) {
    return null;
  }

  return {
    user: session.user,
    userId: session.user.id,
  };
};
