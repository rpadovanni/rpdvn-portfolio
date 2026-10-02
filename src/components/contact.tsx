'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { siteConfig } from '@/config/site';
import { copyValueOnClick } from '@/lib/utils';

const linkClasses = 'underline decoration-2 underline-offset-[6px] hover:decoration-4';

const Contact = () => {
  const { t } = useTranslation('site');
  const [isCopied, setIsCopied] = useState(false);

  /* Effects */
  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timeout = setTimeout(() => setIsCopied(false), 2500);
    return () => clearTimeout(timeout);
  }, [isCopied]);

  /* Handlers */
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.links.email);
    } catch {
      copyValueOnClick(siteConfig.links.email);
    }

    setIsCopied(true);
  };

  /* Render */
  return (
    <section id="contact" className="bg-band text-band-ink">
      <div className="container pb-10 pt-20 md:pt-28">
        <h2 className="text-[9.5vw] font-black leading-[1.02] tracking-[-0.01em] [font-stretch:115%] sm:text-5xl lg:text-6xl">
          <span className="block lg:whitespace-nowrap">{t('contact-question')}</span>{' '}
          <span className="block">{t('contact-invite')}</span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <a
            href={`mailto:${siteConfig.links.email}`}
            className={`break-all text-2xl font-semibold md:text-3xl ${linkClasses}`}
          >
            {siteConfig.links.email}
          </a>

          <button
            type="button"
            onClick={handleCopyClick}
            aria-live="polite"
            className="h-11 border-2 border-current px-5 font-semibold hover:bg-band-ink hover:text-band"
          >
            {isCopied ? t('email-copied') : t('copy-email')}
          </button>
        </div>

        <ul role="list" className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-lg font-semibold">
          <li>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={linkClasses}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={linkClasses}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href={siteConfig.links.cv} download className={linkClasses}>
              {t('download-cv')}
            </a>
          </li>
        </ul>

        <p className="mt-24 text-sm">{t('footer', { year: new Date().getFullYear() })}</p>
      </div>
    </section>
  );
};

export default Contact;
