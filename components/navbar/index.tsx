'use client';

import { NavbarBrand } from './navbar-brand';
import { NavLinks } from './nav-links';
import { AuthButtons } from './auth-buttons';
import { MobileMenuButton } from './mobile-menu-button';
import { useScroll } from '@/hooks/use-scroll';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const isScrolled = useScroll(50);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm border-b' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavbarBrand link = {"/"}/>
          <NavLinks className="hidden md:flex" />
          <AuthButtons className="hidden md:flex" />
          <MobileMenuButton className="md:hidden" />
        </div>
      </nav>
    </header>
  );
}