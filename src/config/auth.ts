import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env/server";

const prisma = new PrismaClient();

const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ token, session }: { token: any; session: any }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }

      return session;
    },
    async jwt({ token }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email!,
        },
      });

      token.isAdmin = Boolean(dbUser?.isAdmin);

      return token;
    },
  },
};

export default options;
