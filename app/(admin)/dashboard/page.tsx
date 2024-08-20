import { Dashboard } from "@/components/Dashboard";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardPage() {
  // const session = await auth();
  // console.log(session);
  // if (!session) redirect("/api/auth/signin");

  return (
    <div>
      {/* Welcome {session?.user?.email} */}
      <Dashboard />
    </div>
  );
}
