import SiteHeader from "@/components/nav/site-header";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="px-8 py-4 mb-8">
      <SiteHeader />
      {children}
    </div>
  );
}
