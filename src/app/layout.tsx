import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import '@/styles/globals.css';

import { siteConfig } from '@/config/site';
import { ThemeProvider } from '@/styles/theme-provider';
import { fontSans } from '@/lib/fonts';
import { SiteHeader } from '@/components/layout/header';
import { TailwindIndicator } from '@/components/layout/tailwind-indicator';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn('relative flex h-screen w-full font-sans antialiased', fontSans.variable)}
      >
        {/* <body className={cn('flex h-full w-full  justify-center items-center', inter.className)}> */}

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex flex-1 flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>

          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
