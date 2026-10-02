'use client';

import { useTranslation } from 'react-i18next';

import { experience } from '@/config/resume';

const Experience = () => {
  const { t } = useTranslation('site');

  /* Render */
  return (
    <section id="experience" className="container scroll-mt-8 pt-20 md:pt-28">
      <h2 className="text-3xl font-extrabold tracking-[-0.01em] md:text-4xl">
        {t('experience-title')}
      </h2>

      <ol className="mt-10">
        {experience.map(({ id, company, period }) => (
          <li
            key={id}
            className="grid gap-x-10 gap-y-3 border-t border-rule py-8 md:grid-cols-[11rem_1fr]"
          >
            <p className="text-lg tabular-nums text-ink-soft">{period}</p>

            <div className="max-w-[40rem]">
              <h3 className="text-xl font-bold">{company ?? t(`experience-${id}-company`)}</h3>
              <p className="text-ink-soft">{t(`experience-${id}-role`)}</p>
              <p className="mt-4 text-lg leading-[1.55]">{t(`experience-${id}-text`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
