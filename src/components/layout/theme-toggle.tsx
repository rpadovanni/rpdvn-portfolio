'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const { t } = useTranslation('site');

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      className="-mr-2 flex h-10 w-10 items-center justify-center hover:bg-action hover:text-action-ink"
    >
      <Sun className="h-5 w-5 dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">{t('theme-toggle')}</span>
    </button>
  );
}
