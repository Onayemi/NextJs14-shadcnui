// import { auth } from "@/auth";
import LoginForm from "@/components/LoginForm";
import { LoginForm2 } from "@/components/LoginForm2";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
import React from "react";

export default async function LoginPage() {
  const session = await getSession();
  const user = session?.user;

  if (user) redirect("/admin/dashboard");
  return (
    <div className="mt-8">
      {/* <LoginForm2 /> */}
      <LoginForm />
    </div>
  );
}
