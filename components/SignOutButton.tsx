"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export default function SignOutButton() {
  // const { data: session} = useSession()
  return (
    <Button onClick={() => signOut()} className="text-[12px]">
      Sign Out
    </Button>

    // <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
  );
}
