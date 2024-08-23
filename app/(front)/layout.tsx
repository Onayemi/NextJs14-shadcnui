import Footer from "@/components/Footer";
import SiteHeader from "@/components/nav/site-header";
import Navigation from "@/components/Navigation";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // <div className="px-8 py-4 mb-8">
    <div>
      <SiteHeader />

      {/* <Navigation /> */}
      {children}

      <Footer />
    </div>
  );
}
