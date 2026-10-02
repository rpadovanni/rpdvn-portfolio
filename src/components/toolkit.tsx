'use client';

import { useTranslation } from 'react-i18next';

import { toolkit } from '@/config/resume';

const Toolkit = () => {
  const { t } = useTranslation('site');

  /* Render */
  return (
    <section id="toolkit" className="container scroll-mt-8 py-20 md:py-28">
      <h2 className="text-3xl font-extrabold tracking-[-0.01em] md:text-4xl">
        {t('toolkit-title')}
      </h2>

      <dl className="mt-10">
        {toolkit.map(id => (
          <div
            key={id}
            className="grid gap-x-10 gap-y-1 border-t border-rule py-5 md:grid-cols-[11rem_1fr]"
          >
            <dt className="text-lg text-ink-soft">{t(`toolkit-${id}-label`)}</dt>
            <dd className="max-w-[40rem] text-lg leading-[1.55]">{t(`toolkit-${id}`)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Toolkit;
