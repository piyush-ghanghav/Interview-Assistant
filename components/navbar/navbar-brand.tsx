import { Brain } from 'lucide-react';
import Link from 'next/link';

export function NavbarBrand() {
  return (
    <Link href="/" className="flex items-center">
      <Brain className="h-8 w-8 text-primary" />
      <span className="ml-2 text-xl font-bold">AI Interview Mocker</span>
    </Link>
  );
}