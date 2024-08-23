import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const navList = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  return (
    <nav className="fixed w-screen px-4 top-2 z-50">
      <div className="py-3 container flex items-center justify-between bg-background rounded-md z-50">
        <p className="form-bold italic">Estate</p>

        <ul className="flex items-center gap-4">
          {navList.map((nav) => {
            return (
              <li key={nav.title}>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href={nav.href}
                >
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Avatar here */}
        <div>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
