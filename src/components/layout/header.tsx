'use client';

import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/layout/icons';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import LanguageToggle from './language-toggle';

export function SiteHeader({}) {
  return (
    <header className="bg-background fixed top-0 z-40 w-full">
      <div className="container flex h-16 items-center space-x-4 md:my-8">
        <div className="flex flex-1 flex-col items-end justify-center md:items-center">
          <nav className="mt-3 flex items-center space-x-1 rounded-full bg-[#F0D695] px-8 py-1">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <ThemeToggle />

            <LanguageToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
