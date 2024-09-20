'use client';

import { ReactNode } from 'react';

import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';

interface Props {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: Record<string, Record<string, string>>;
}

const TranslationProvider = ({ children, locale, namespaces, resources }: Props) => {
  const i18n = createInstance();
  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationProvider;
