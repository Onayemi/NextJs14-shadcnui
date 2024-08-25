import { Dashboard } from "@/components/Dashboard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardPage() {
  const session = await auth();
  console.log(session);
  if (!session) redirect("/login");

  return (
    <div>
      <Dashboard />
    </div>
  );
}
