"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Github, Mail, SendHorizontal } from "lucide-react";
import Link from "next/link";

export function GoogleLoginButton() {
  return (
    <Button
      onClick={() =>
        signIn("google", {
          // redirect: false,
          callbackUrl: "/dashboard",
        })
      }
      variant="outline"
    >
      {/* <Icons.gitHub className="mr-2 h-4 w-4" /> */}
      {/* <Mail className="mr-2 h-4 w-4" /> */}
      <SendHorizontal className="mr-2 h-4 w-4" />
      Google
    </Button>
  );
}

export default function GithubLoginButton() {
  // const { data: session } = useSession();
  return (
    <div className="flex items-center gap-2">
      {/* {session && session.user ? (
        <p>
          {session.user.email}
          <Link href={"/api/auth/signOut"}>Logout</Link>
        </p>
      ) : (
      )} */}
      <Button
        onClick={() =>
          signIn("github", {
            // redirect: false,
            callbackUrl: "/dashboard",
          })
        }
        variant="outline"
      >
        {/* <Icons.gitHub className="mr-2 h-4 w-4" /> */}
        <Github className="mr-2 h-4 w-4" />
        Github
      </Button>
    </div>
  );
}
