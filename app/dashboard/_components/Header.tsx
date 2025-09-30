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
      className={`text-white/80 hover:text-white transition-all duration-300 font-medium relative group
        ${isActive ? "text-white" : ""}`}
    >
      {children}
      {/* Active Indicator */}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} 
      />
    </Link>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <NavbarBrand link={"/dashboard"} />
          </div>

          {/* Dashboard Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigationLinks.map(({ href, label }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* User Button with Glass Effect */}
            <div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <UserButton afterSignOutUrl="/" />
            </div>
            
            {/* Mobile User Button */}
            <div className="md:hidden">
              <UserButton afterSignOutUrl="/" />
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-l border-white/20"
              >
                <nav className="flex flex-col space-y-6 mt-12">
                  {navigationLinks.map(({ href, label }) => (
                    <NavLink 
                      key={href} 
                      href={href}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg">{label}</span>
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