import NextAuth from "next-auth";
import prisma from "./lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
// import authConfig from "@/auth.config";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { User } from "@prisma/client";
import { signInSchema } from "./lib/zod";
// import * as bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  // ...authConfig,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,

      // profile(profile) {
      //   return { id: "welcome name is here" };
      // },
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
      // async authorize(credentials) {
      authorize: async (credentials) => {
        const parsedCredentials = signInSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.error("Invalid credentials:", parsedCredentials.error.errors);
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) {
          return null;
        }
        // if (!user) throw new Error("User name or password is not correct");

        if (!credentials?.password) {
          throw new Error("Please provide your password");
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          user.password as string
        );

        if (!isPasswordCorrect) {
          throw new Error("Username or  password is not correct");
        }

        const userData = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          phone: user.phone,
        };

        // const { password, ...userWithoutPass } = user;
        // return userWithoutPass;

        return userData as any;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },

  secret: process.env.AUTH_SECRET,

  callbacks: {
    // authorized({ request: { nextUrl }, auth }) {
    //   // const isLoggedIn = !!auth?.userWithoutPass;
    //   const isLoggedIn = !!auth?.user;
    //   const { pathname } = nextUrl;
    //   const role = auth?.user.role || "USER";
    //   if (pathname.startsWith("/auth/signin") && isLoggedIn) {
    //     return Response.redirect(new URL("/admin/dashboard", nextUrl));
    //   }

    //   // if (
    //   //   pathname.startsWith("/admin/dashboard") &&
    //   //   isLoggedIn &&
    //   //   role === "ADMIN"
    //   // ) {
    //   //   return Response.redirect(new URL("/admin/dashboard", nextUrl));
    //   // }
    //   return !!auth;
    // },

    async jwt({ token, user }) {
      console.log("jwt part: ", token);
      // create types.d.ts files
      // if (user) token.user = user;
      if (user) {
        token.id = user.id as string;
        token.firstName = user.firstName as string;
        token.lastName = user.lastName as string;
        token.phone = user.phone as number;
        token.role = user.role as string;
      }
      return token;
    },
    async session({ token, session }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        // session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.phone = token.phone;
        session.user.role = token.role;
      }
      console.log("Session part2 :", session);
      return session;
    },

    // async signIn({ user, account }) {
    //   if (account?.provider === "github") {
    //     try {
    //       const { email, name, image, id } = user;

    //       const alreadyUser = await prisma.user.findUnique({
    //         where: { email: email as string },
    //       });

    //       if (!alreadyUser) {
    //         await prisma.user.create({
    //           data: {
    //             email: email as string,
    //             firstName: name as string,
    //             image,
    //             authProviderId: id,
    //           },
    //         });
    //       } else {
    //         return true;
    //       }
    //     } catch (error) {
    //       throw new Error("Error while creating user");
    //     }
    //   }
    // },
  },
});
