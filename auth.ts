import NextAuth from "next-auth";
import prisma from "./lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { User } from "@prisma/client";
// import * as bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  ...authConfig,
  session: {
    strategy: "jwt",
  },

  secret: process.env.AUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      console.log(user);
      // create types.d.ts files
      if (user) token.user = user;
      return token;
    },
    async session({ token, session }) {
      session.user = token.user as User;
      return session;
    },
  },
});
