'use client';

import { Brain } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarBrandProps {
  link?: string;
}

export function NavbarBrand({ link }: NavbarBrandProps) {
  const pathname = usePathname();
  const isPublicRoute = pathname === '/about' || pathname === '/hiw';
  const brandLink = isPublicRoute ? '/' : link || '/dashboard';

  return (
    <Link href={brandLink} className="flex items-center hover:opacity-90 transition-opacity">
      <Brain className="h-8 w-8 text-primary" />
      <span className="ml-2 text-xl font-bold">InterviewPro AI</span>
    </Link>
  );
}