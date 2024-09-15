import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/db";

export const authOptions = {
  providers: [
    GoogleProvider({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ profile }: any) {
      const userExists = await db.user.findFirst({
        where: { email: profile?.email },
      });
      if (!userExists) {
        const username = profile?.name.slice(0, 20);

        await db.user.create({
          data: {
            email: profile.email,
            username,
            image: profile.picture,
          },
        });
      }
      return true;
    },
    // Session callback function that modifies the session object
    async session({ session }: any) {
      const user = await db.user.findFirst({
        where: { email: session.user.email },
      });
      session.user.id = (user?.id || "").toString();

      return session;
    },
  },
};
