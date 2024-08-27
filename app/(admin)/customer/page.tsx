import { handleSignOut } from "@/app/actions/authActions";
// import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
import React from "react";

export default async function CustomerPage() {
  const session = await getSession();
  const user = session?.user;
  if (user?.role === "ADMIN") redirect("/admin/dashboard");
  console.log(session);
  if (!session) redirect("/login");
  return (
    <div>
      <h1>
        Customer Name {session?.user.firstName} and Role: {session?.user.role}
      </h1>
      <form action={handleSignOut}>
        <Button variant="destructive" type="submit">
          Logout
        </Button>
      </form>
    </div>
  );
}
