import Link from 'next/link';

import { AdminMenu } from '@/components/admin-menu';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
      <div className='container flex h-14 items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center justify-end space-x-2 sm:space-x-4'>
          <nav className='flex items-center space-x-1'>
            <AdminMenu />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
