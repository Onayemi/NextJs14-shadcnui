import RegisterForm from "@/components/RegisterForm";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getSession();
  const user = session?.user;

  if (user) redirect("/admin/dashboard");
  return (
    <div>
      <RegisterForm />
    </div>
  );
}
