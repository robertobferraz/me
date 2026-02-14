'use client';

import Image from 'next/image';
import type { ReactElement } from 'react';
import type { ProjectData } from '@/domain/entities/portfolio';
import { Chip } from '@/components/ui/chip';
import { ParallaxCard } from '@/components/ui/parallax-card';

type ProjectRenderer = (project: ProjectData) => ReactElement;

const renderPrimary: ProjectRenderer = (project) => (
  <ParallaxCard>
    <article className="card-entry bg-panel/85 rounded-2xl border border-slate-300/80 p-4 shadow-soft backdrop-blur dark:border-slate-700/80 sm:p-5 lg:p-6">
      <header className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Case Study Principal
          </p>
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
        <span className="text-sm font-semibold text-accent">
          {project.period}
        </span>
      </header>
      <p className="mb-4 text-sm leading-6 text-muted">{project.context}</p>
      <div className="mb-4 space-y-2">
        <h4 className="font-semibold">Atividades Principais</h4>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
          {project.challenges.map((challenge) => (
            <li key={challenge}>{challenge}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4 space-y-2">
        <h4 className="font-semibold">Arquitetura</h4>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
          {project.architectureNotes?.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Chip key={item} label={item} />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {project.assets.map((asset) => (
          <div
            key={asset.src}
            className="flex h-[240px] items-center justify-center overflow-hidden rounded-xl border border-slate-300 bg-slate-100/70 p-1.5 dark:border-slate-700 dark:bg-slate-900/40 sm:h-[300px] md:h-[340px] lg:h-[430px] xl:h-[520px]"
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              width={640}
              height={420}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </article>
  </ParallaxCard>
);

const renderSecondary: ProjectRenderer = (project) => (
  <ParallaxCard>
    <article className="card-entry bg-panel/85 rounded-2xl border border-slate-300/80 p-4 shadow-soft backdrop-blur dark:border-slate-700/80 sm:p-5 lg:p-6">
      <header className="mb-3">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
          Case Study Técnico
        </p>
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm font-semibold text-accent">{project.period}</p>
      </header>
      <p className="mb-3 text-sm text-muted">{project.context}</p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-muted">
        {project.challenges.map((challenge) => (
          <li key={challenge}>{challenge}</li>
        ))}
      </ul>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Chip key={item} label={item} />
        ))}
      </div>
      {project.assets[0] ? (
        <div className="flex h-[240px] items-center justify-center overflow-hidden rounded-xl border border-slate-300 bg-slate-100/70 p-1.5 dark:border-slate-700 dark:bg-slate-900/40 sm:h-[300px] md:h-[360px] lg:h-[440px] xl:h-[500px]">
          <Image
            src={project.assets[0].src}
            alt={project.assets[0].alt}
            width={800}
            height={480}
            className="h-full w-full object-contain"
          />
        </div>
      ) : null}
    </article>
  </ParallaxCard>
);

const rendererByEmphasis: Record<ProjectData['emphasis'], ProjectRenderer> = {
  primary: renderPrimary,
  secondary: renderSecondary
};

export const renderProjectByStrategy = (project: ProjectData): ReactElement => {
  return rendererByEmphasis[project.emphasis](project);
};
