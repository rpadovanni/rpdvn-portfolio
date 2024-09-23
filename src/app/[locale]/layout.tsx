import i18nConfig from '@/i18n-config';
import initTranslations from '../i18n';
import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { cn } from '@/lib/utils';
import '@/styles/globals.css';

import { siteConfig } from '@/config/site';
import { ThemeProvider } from '@/styles/theme-provider';
import { fontSans } from '@/lib/fonts';
import { SiteHeader } from '@/components/layout/header';
import { TailwindIndicator } from '@/components/layout/tailwind-indicator';
import TranslationProvider from '@/providers/translation-provider';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

const i18nNamespaces = ['home'];

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn('relative flex h-screen w-full font-sans antialiased', fontSans.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TranslationProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
            <div className="relative flex flex-1 flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
          </TranslationProvider>
          <TailwindIndicator />
        </ThemeProvider>
      </body>

      <GoogleAnalytics gaId="G-CGM22RJG8V" />
    </html>
  );
}
