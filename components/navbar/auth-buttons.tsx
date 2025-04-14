'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AuthButtonsProps {
  className?: string;
}

export function AuthButtons({ className }: AuthButtonsProps) {
  return (
    <div className={cn('flex items-center space-x-4', className)}>
      <Link 
        href="/dashboard" 
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
      >
        Get Started
      </Link>
    </div>
  );
}