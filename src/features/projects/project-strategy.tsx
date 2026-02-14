'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type TouchEvent
} from 'react';
import type { ProjectData } from '@/domain/entities/portfolio';
import { Chip } from '@/components/ui/chip';
import { ParallaxCard } from '@/components/ui/parallax-card';

type ProjectRenderer = (project: ProjectData) => ReactElement;
const ASSET_FRAME_CLASS =
  'flex w-full h-[250px] items-center justify-center overflow-hidden rounded-xl border border-slate-300 bg-slate-100/70 p-1.5 dark:border-slate-700 dark:bg-slate-900/40 sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[500px]';

function ProjectImagePreview({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [open, setOpen] = useState(false);
  const touchStartY = useRef<number | null>(null);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartY.current === null) {
      return;
    }
    const endY = event.changedTouches[0]?.clientY ?? touchStartY.current;
    const deltaY = touchStartY.current - endY;
    touchStartY.current = null;
    if (Math.abs(deltaY) > 70) {
      setOpen(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-label={`Ampliar imagem: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="h-full w-full object-contain"
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/85 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-center">
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={(event) => event.stopPropagation()}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                className="relative w-full overflow-hidden rounded-2xl border border-slate-600/70 bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/70 text-xl font-bold text-white"
                  aria-label="Fechar imagem ampliada"
                >
                  ×
                </button>
                <div className="h-[72vh] w-full p-3 sm:h-[80vh]">
                  <Image
                    src={src}
                    alt={alt}
                    width={1600}
                    height={1000}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="pb-3 text-center text-xs font-semibold text-slate-300">
                  Toque fora, use o X ou arraste para fechar.
                </p>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function ProjectAssetCarousel({
  assets,
  cardLabel
}: {
  assets: ProjectData['assets'];
  cardLabel: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const isSmallVisual = (asset: ProjectData['assets'][number]) =>
    asset.type === 'diagram' || asset.src.endsWith('.svg');
  const showDualLayout =
    assets.length >= 2 && assets.slice(0, 2).every((asset) => isSmallVisual(asset));

  useEffect(() => {
    if (assets.length < 2 || isHovering) {
      return;
    }
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % assets.length);
    }, 3600);
    return () => window.clearInterval(interval);
  }, [assets.length, isHovering]);

  if (!assets.length) {
    return null;
  }

  const current = assets[activeIndex];

  return (
    <div
      className="space-y-3"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {showDualLayout ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {assets.slice(0, 2).map((asset) => (
            <ProjectImagePreview
              key={asset.src}
              src={asset.src}
              alt={asset.alt}
              className={ASSET_FRAME_CLASS}
            />
          ))}
        </div>
      ) : (
        <div className="mx-auto w-full max-w-5xl">
          <ProjectImagePreview
            src={current.src}
            alt={current.alt}
            className={ASSET_FRAME_CLASS}
          />
        </div>
      )}

      {assets.length > 1 && !showDualLayout ? (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {cardLabel} · imagem {activeIndex + 1}/{assets.length}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setActiveIndex((currentIndex) =>
                  currentIndex === 0 ? assets.length - 1 : currentIndex - 1
                )
              }
              className="rounded-md border border-slate-300/80 px-2 py-1 text-xs font-bold dark:border-slate-700/70"
              aria-label="Imagem anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveIndex((currentIndex) => (currentIndex + 1) % assets.length)
              }
              className="rounded-md border border-slate-300/80 px-2 py-1 text-xs font-bold dark:border-slate-700/70"
              aria-label="Próxima imagem"
            >
              →
            </button>
          </div>
        </div>
      ) : null}

      {assets.length > 1 && !showDualLayout ? (
        <div className="flex items-center justify-center gap-1.5">
          {assets.map((asset, index) => (
            <button
              key={asset.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition ${
                index === activeIndex ? 'w-6 bg-accent' : 'w-2 bg-slate-400/60'
              }`}
              aria-label={`Selecionar imagem ${index + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

const renderPrimary: ProjectRenderer = (project) => (
  <ParallaxCard>
    <article className="card-entry from-panel/90 to-panel/70 flex h-full flex-col rounded-2xl border border-slate-300/80 bg-gradient-to-br p-4 shadow-soft backdrop-blur dark:border-slate-700/80 sm:p-5 lg:p-6">
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
      <div className="mt-auto pt-2">
        <ProjectAssetCarousel assets={project.assets} cardLabel={project.title} />
      </div>
    </article>
  </ParallaxCard>
);

const renderSecondary: ProjectRenderer = (project) => (
  <ParallaxCard>
    <article className="card-entry from-panel/90 to-panel/70 flex h-full flex-col rounded-2xl border border-slate-300/80 bg-gradient-to-br p-4 shadow-soft backdrop-blur dark:border-slate-700/80 sm:p-5 lg:p-6">
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
      <div className="mt-auto pt-2">
        <ProjectAssetCarousel assets={project.assets} cardLabel={project.title} />
      </div>
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
