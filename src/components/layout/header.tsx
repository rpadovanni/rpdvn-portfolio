'use client';

import { useTranslation } from 'react-i18next';

import Logo from '@/components/logo';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import LanguageToggle from './language-toggle';

const sections = ['experience', 'toolkit', 'contact'];

export function SiteHeader({}) {
  const { t } = useTranslation('site');

  return (
    <header className="bg-ground">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Logo />

        <div className="flex items-center gap-6">
          <nav aria-label={t('nav-label')} className="hidden items-center gap-6 md:flex">
            {sections.map(section => (
              <a
                key={section}
                href={`#${section}`}
                className="underline-offset-[6px] hover:underline hover:decoration-2"
              >
                {t(`nav-${section}`)}
              </a>
            ))}
          </nav>

          <LanguageToggle />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
