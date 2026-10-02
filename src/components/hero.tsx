'use client';

import { useTranslation } from 'react-i18next';

import CubeWall from '@/components/cube-wall';
import { siteConfig } from '@/config/site';

const Hero = () => {
  const { t } = useTranslation('site');

  /* Render */
  return (
    <section className="overflow-hidden bg-ground">
      <div className="container grid items-center gap-x-8 gap-y-6 pb-16 pt-2 lg:grid-cols-2 lg:pb-24 lg:pt-8">
        <div className="order-2 lg:order-1">
          <h1 className="text-[13.5vw] font-black leading-[0.92] tracking-[-0.02em] text-action [font-stretch:115%] sm:text-[5.25rem] lg:text-[5.9vw] 2xl:text-[5.75rem]">
            Rafael
            <br />
            Padovani
          </h1>

          <p className="mt-8 max-w-[33rem] text-xl leading-[1.5] md:text-[1.375rem]">
            {t('hero-statement')}
          </p>
          <p className="mt-3 text-ink-soft">{t('hero-location')}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={siteConfig.links.cv}
              download
              className="inline-flex h-12 items-center bg-action px-6 font-semibold text-action-ink hover:bg-black dark:hover:bg-[#DAAB03]"
            >
              {t('download-cv')}
            </a>
            <a
              href="#contact"
              className="font-semibold underline decoration-2 underline-offset-[6px] hover:decoration-4"
            >
              {t('write-to-me')}
            </a>
          </div>
        </div>

        <CubeWall
          alt={t('picture-alt')}
          className="order-1 w-[calc(100%+2rem)] max-w-none sm:-mr-8 sm:ml-auto sm:w-[34rem] lg:order-2 lg:mx-0 lg:w-[calc(50vw+1.5rem)] lg:max-w-[54rem]"
        />
      </div>
    </section>
  );
};

export default Hero;
