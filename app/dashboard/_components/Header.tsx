"use client";

import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavbarBrand } from "@/components/navbar/navbar-brand";

const navigationLinks = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/interviews", label: "My Interviews" },
  { href: "/dashboard/progress", label: "Progress" }
] as const;

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-gray-700 hover:text-blue-500 transition
        ${isActive ? "font-bold text-blue-500" : ""}`}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <NavbarBrand link = {"/dashboard"}/>

          {/* Dashboard Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationLinks.map(({ href, label }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <UserButton afterSignOutUrl="/" />
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <button className="text-gray-500 hover:text-gray-900">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationLinks.map(({ href, label }) => (
                    <NavLink key={href} href={href}>
                      {label}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
