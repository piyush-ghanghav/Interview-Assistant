'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLinks } from "./nav-links";
import { AuthButtons } from "./auth-buttons";
import { useState } from "react";

interface MobileMenuButtonProps {
  className?: string;
}

export function MobileMenuButton({ className }: MobileMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className={className} asChild>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-8 mt-8">
          <NavLinks className="flex flex-col space-y-4" />
          <AuthButtons className="flex flex-col space-y-4" />
        </div>
      </SheetContent>
    </Sheet>
  );
}