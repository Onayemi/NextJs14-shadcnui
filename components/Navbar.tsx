import Link from "next/link";
import React from "react";
// import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-2 px-8 mb-8 w-full mx-auto border-b border-gray-200 dark:border-gray-700">
      <Link href="#">Logo</Link>
      <div className="space-x-4">
        <Link href="/concepts">Concepts</Link>
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Admin Dashboard</Link>
        <Link href="/mail">Mail Dashboard</Link>
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
}
