'use client';

import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/layout/icons';
import { siteConfig } from '@/config/site';
import ContentBlock from '@/components/layout/content-block';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
const Logo = dynamic(() => import('@/components/logo'));

export default function Home() {
  const { t } = useTranslation();

  /* Render */
  return (
    <section className="flex h-screen flex-col">
      {/* Main Content */}
      <div
        className="order-1 h-full bg-gradient-to-br bg-contain md:h-2/3"
        style={{
          backgroundImage: 'url("/website-bg-transparent.webp")',
          position: 'relative',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4EDDB] from-15% via-[#F4EDDB]/60 via-70% to-[#F4EDDB]/50 dark:from-[#222222] dark:via-[#292929]/85 dark:to-[#292929]/50">
          <ContentBlock>
            <div className="flex flex-col items-end justify-center md:flex-row md:items-center">
              <div className="order-2 flex flex-col items-end md:order-1 md:items-start">
                {/* Logo */}
                <Logo t={t} />

                {/* Text Block */}
                <div className="order-1 my-10 flex items-end justify-end text-right md:text-left">
                  <p className="text-muted-foreground max-w-[700px] text-2xl font-semibold md:text-3xl">
                    {t('text-block-start')}{' '}
                    <span className="text-[#DAAB03] dark:text-[#F0D695]">Rafael</span>! <br />{' '}
                    {`${t('role-prefix')} `}
                    <span className="text-[#DAAB03] dark:text-[#FFCE00]">{t('role')}</span>
                    <br />
                    {t('text-block-end')}
                  </p>
                </div>

                {/* Buttons */}
                <div className="order-2 mb-10 mt-6 flex flex-col items-end gap-4 md:flex-row md:gap-4">
                  <Link
                    href={'/RafaelPadovaniCV.pdf'}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants()}
                  >
                    {t('download-cv-button')}
                  </Link>

                  <Link
                    href={siteConfig.links.projects}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    {t('projects-button')}
                  </Link>
                </div>
              </div>

              {/* Picture */}
              <div className="order-1 mb-8 mt-24 w-32 max-w-32 md:order-2 md:w-60 md:max-w-60">
                <Image
                  width={240}
                  height={240}
                  style={{ objectFit: 'contain' }}
                  alt={t('picture-alt')}
                  src="/foto-perfil.webp"
                  className="rounded-full border-6 border-[#DAAB03] object-cover shadow-border-light dark:border-[#F0D695] dark:shadow-border-dark"
                />
              </div>
            </div>
          </ContentBlock>
        </div>
      </div>

      {/* CTA */}
      <div className="order-2 h-1/3 bg-[#FFCE00] text-[#292929]">
        <ContentBlock alignment="center">
          <span className="text-sm">{t('cta-message')}</span>
          <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            {t('cta-text')}
          </h1>
          <nav className="flex items-center space-x-1 px-8 py-1">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <span
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </span>
            </Link>

            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <span
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </span>
            </Link>

            <Link href={siteConfig.links.email} target="_blank" rel="noreferrer">
              <span
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </span>
            </Link>
          </nav>
        </ContentBlock>
      </div>
    </section>
  );
}
