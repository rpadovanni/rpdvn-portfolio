'use client';

import i18nConfig from '@/i18n-config';

// COMPONENTS
import { Icons } from './icons';

// HOOKS
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  /* Hooks */
  const { t, i18n } = useTranslation('site');
  const currentLocale = i18n.language;
  const currentPathname = usePathname();
  const router = useRouter();

  /* Constants */
  const otherLocale = currentLocale === 'en' ? 'pt-BR' : 'en';
  const Flag = otherLocale === 'pt-BR' ? Icons.brazil : Icons.usa;

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
    <button
      type="button"
      lang={otherLocale}
      onClick={() => handleChange(otherLocale)}
      className="flex items-center gap-2 underline-offset-[6px] hover:underline hover:decoration-2"
    >
      <Flag aria-hidden className="h-6 w-6" />
      {t('language-switch')}
    </button>
  );
};

export default LanguageToggle;
