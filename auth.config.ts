import type { NextAuthConfig } from "next-auth";
import prisma from "./lib/prisma";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "User Email",
          type: "text",
          placeholder: "Your User Name",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) throw new Error("User name or password is not correct");

        if (!credentials?.password)
          throw new Error("Please provide your password");

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          user.password as string
        );

        if (!isPasswordCorrect)
          throw new Error("Username or  password is not correct");

        const { password, ...userWithoutPass } = user;
        return userWithoutPass;
      },
    }),
  ],
} satisfies NextAuthConfig;
