import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavLinksProps {
  className?: string;
}

const links = [
  { href: '/about', label: 'About' },
  { href: '/hiw', label: 'How it Works' },
];

export function NavLinks({ className }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <div className={cn('items-center space-x-6', className)}>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'text-gray-600 hover:text-primary transition-colors',
            pathname === href && 'text-primary font-medium'
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}