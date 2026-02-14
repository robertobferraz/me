'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { ExperienceItem } from '@/domain/entities/portfolio';

export function ExperiencePresenter({
  experiences
}: {
  experiences: ExperienceItem[];
}) {
  return (
    <div className="relative pl-4 sm:pl-6 md:pl-10">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute left-1.5 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-accent via-sky-500 to-teal-500 sm:left-2.5 md:left-4"
        aria-hidden="true"
      />

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.45,
              ease: 'easeOut',
              delay: index * 0.08
            }}
            className="bg-panel/85 relative rounded-2xl border border-slate-300/80 p-5 shadow-soft backdrop-blur dark:border-slate-700/80 sm:p-6"
          >
            <span
              className="absolute -left-[1.05rem] top-8 h-3 w-3 rounded-full border-2 border-white bg-accent shadow sm:-left-[1.35rem] md:-left-[2.15rem]"
              aria-hidden="true"
            />

            <header className="mb-4 space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  {experience.logoSrc && experience.companySite ? (
                    <a
                      href={experience.companySite}
                      target="_blank"
                      rel="noreferrer"
                      className={`mb-3 inline-flex rounded-xl border px-2 py-1 transition hover:scale-[1.02] ${
                        experience.logoSurface === 'dark'
                          ? 'border-slate-700/70 bg-slate-950'
                          : 'border-slate-300/70 bg-white'
                      }`}
                      aria-label={`Abrir site da empresa ${experience.company}`}
                    >
                      <Image
                        src={experience.logoSrc}
                        alt={`Logo ${experience.company}`}
                        width={experience.company === 'Coding4u' ? 220 : 140}
                        height={42}
                        className="h-9 w-auto object-contain"
                        unoptimized
                      />
                    </a>
                  ) : null}

                  <h3 className="text-lg font-extrabold">
                    {experience.role} | {experience.company}
                  </h3>
                  <p className="text-sm text-muted">{experience.location}</p>
                </div>

                <p className="border-accent/30 bg-accent/10 w-fit rounded-full border px-3 py-1 text-sm font-semibold text-accent">
                  {experience.period}
                </p>
              </div>

              {experience.companySite ? (
                <a
                  href={experience.companySite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex break-all text-xs font-semibold uppercase tracking-[0.12em] text-accent hover:underline"
                  aria-label={`Site da empresa ${experience.company}`}
                >
                  {experience.companySite}
                </a>
              ) : null}
            </header>

            <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
              {experience.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
