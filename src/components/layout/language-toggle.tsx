'use client';

import i18nConfig from '@/i18n-config';

// COMPONENTS
import { Button } from '@/components/ui/button';
import { Icons } from './icons';

// HOOKS
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const LanguageToggle = () => {
  /* Hooks */
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const currentPathname = usePathname();
  const router = useRouter();

  /* Handlers */
  const handleChange = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  /* Render */
  return (
    <Button variant="ghost" size="icon">
      <Icons.brazil
        className={cn('h-6 w-6', currentLocale === 'pt-BR' && 'hidden')}
        onClick={() => handleChange('pt-BR')}
      />
      <span className="sr-only">pt-BR</span>

      <Icons.usa
        className={cn('h-6 w-6', currentLocale === 'en' && 'hidden')}
        onClick={() => handleChange('en')}
      />
      <span className="sr-only">en-US</span>

      {/* <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" /> */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default LanguageToggle;
