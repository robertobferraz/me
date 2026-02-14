'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const layers = [
  {
    id: 'ports',
    title: 'Ports',
    description:
      'Contratos de entrada e saída do domínio para manter regras de negócio independentes de frameworks.',
    shortGuide:
      'Definimos interfaces estáveis para o domínio, sem acoplamento com transporte ou banco.',
    color: '#d36135'
  },
  {
    id: 'usecases',
    title: 'Use Cases',
    description:
      'Orquestração das regras de negócio com foco em clareza de fluxo e testabilidade.',
    shortGuide:
      'Os casos de uso executam o fluxo principal e coordenam regras de negócio.',
    color: '#0f766e'
  },
  {
    id: 'adapters',
    title: 'Adapters',
    description:
      'Implementações concretas para HTTP, Pub/Sub, Redis, banco e integrações externas.',
    shortGuide:
      'Camada de integração com API, mensageria, cache e persistência.',
    color: '#2563eb'
  },
  {
    id: 'infra',
    title: 'Infra',
    description:
      'Camada de observabilidade, logging, Docker e componentes operacionais.',
    shortGuide: 'Operação, monitoramento e confiabilidade em produção.',
    color: '#b45309'
  }
] as const;

type LayerId = (typeof layers)[number]['id'];
type SpeedMode = 'slow' | 'normal' | 'fast';

const speedMsByMode: Record<SpeedMode, number> = {
  slow: 4200,
  normal: 2800,
  fast: 1600
};

export function ArchitectureInteractive() {
  const [activeLayer, setActiveLayer] = useState<LayerId>('usecases');
  const [autoPlay, setAutoPlay] = useState(true);
  const [speedMode, setSpeedMode] = useState<SpeedMode>('normal');
  const [guideMode, setGuideMode] = useState(false);

  const activeIndex = layers.findIndex((layer) => layer.id === activeLayer);
  const active = useMemo(
    () => layers.find((layer) => layer.id === activeLayer) ?? layers[1],
    [activeLayer]
  );

  const goToLayer = (index: number) => {
    const bounded = Math.max(0, Math.min(index, layers.length - 1));
    setActiveLayer(layers[bounded].id);
  };

  const goToNext = () => goToLayer((activeIndex + 1) % layers.length);
  const goToPrev = () =>
    goToLayer((activeIndex - 1 + layers.length) % layers.length);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveLayer((previous) => {
        const index = layers.findIndex((layer) => layer.id === previous);
        return layers[(index + 1) % layers.length].id;
      });
    }, speedMsByMode[speedMode]);
    return () => window.clearInterval(interval);
  }, [autoPlay, speedMode, activeIndex]);

  const startGuide = () => {
    setGuideMode(true);
    setAutoPlay(false);
    goToLayer(0);
  };

  const nextGuideStep = () => {
    if (activeIndex >= layers.length - 1) {
      setGuideMode(false);
      return;
    }

    goToLayer(activeIndex + 1);
  };

  return (
    <article className="bg-panel/85 rounded-2xl border border-slate-300/80 p-4 shadow-soft backdrop-blur dark:border-slate-700/80 md:p-6">
      <header className="mb-4 space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Arquitetura Backend
            </p>
            <h3 className="text-lg font-extrabold md:text-xl">
              Diagrama Interativo (Ports & Adapters)
            </h3>
          </div>

          <button
            type="button"
            onClick={startGuide}
            className="border-accent/70 bg-accent/10 hover:bg-accent/20 w-full rounded-md border px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] sm:w-auto"
          >
            Iniciar demonstração
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
          <button
            type="button"
            onClick={() => {
              setAutoPlay((current) => !current);
              setGuideMode(false);
            }}
            className="col-span-2 rounded-md border border-slate-300/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] dark:border-slate-700/70 sm:col-span-1"
          >
            {autoPlay ? 'Modo auto' : 'Modo manual'}
          </button>

          <select
            value={speedMode}
            onChange={(event) => setSpeedMode(event.target.value as SpeedMode)}
            disabled={!autoPlay}
            className="col-span-2 rounded-md border border-slate-300/80 bg-transparent px-2 py-2 text-xs font-bold uppercase tracking-[0.1em] disabled:opacity-50 dark:border-slate-700/70 sm:col-span-1"
            aria-label="Selecionar velocidade da animação"
          >
            <option value="slow">Lento</option>
            <option value="normal">Normal</option>
            <option value="fast">Rápido</option>
          </select>

          <button
            type="button"
            onClick={goToPrev}
            className="rounded-md border border-slate-300/80 px-2 py-2 text-xs font-bold dark:border-slate-700/70"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="rounded-md border border-slate-300/80 px-2 py-2 text-xs font-bold dark:border-slate-700/70"
          >
            →
          </button>
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-xl border border-slate-300/70 bg-slate-50/40 p-3 dark:border-slate-700/70 dark:bg-slate-900/30">
          <div className="relative mx-auto max-w-[420px] py-3">
            {layers.map((layer, index) => {
              const isActive = layer.id === activeLayer;
              const isCompleted = index < activeIndex;

              return (
                <div key={layer.id} className="relative pb-6 last:pb-0">
                  {index < layers.length - 1 ? (
                    <motion.div
                      className="absolute left-[13px] top-8 h-[calc(100%-8px)] w-[2px] bg-slate-300 dark:bg-slate-700"
                      initial={false}
                      animate={{
                        backgroundColor: isCompleted ? layer.color : '#94a3b8'
                      }}
                    />
                  ) : null}

                  <button
                    type="button"
                    onClick={() => {
                      setGuideMode(false);
                      goToLayer(index);
                    }}
                    className="group flex w-full items-start gap-3 text-left"
                  >
                    <motion.span
                      className="mt-1 block h-7 w-7 rounded-full border-2"
                      animate={{
                        backgroundColor: isActive ? layer.color : 'transparent',
                        borderColor:
                          isActive || isCompleted ? layer.color : '#94a3b8'
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="min-w-0 rounded-lg border border-slate-300/70 bg-white/70 p-3 dark:border-slate-700/70 dark:bg-slate-900/40">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                        Etapa {index + 1}
                      </p>
                      <p className="text-sm font-extrabold">{layer.title}</p>
                      <p className="mt-1 text-xs text-muted">
                        {layer.description}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-slate-300/70 bg-slate-100/60 p-4 dark:border-slate-700/70 dark:bg-slate-900/35"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
                Camada ativa
              </p>
              <p className="mt-1 text-base font-extrabold">{active.title}</p>
              <p className="mt-2 text-sm text-muted">{active.description}</p>
            </motion.div>
          </AnimatePresence>

          {guideMode ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-accent/40 bg-accent/10 rounded-xl border p-4"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
                Passo a passo guiado
              </p>
              <p className="mt-2 text-sm text-muted">{active.shortGuide}</p>
              <button
                type="button"
                onClick={nextGuideStep}
                className="mt-3 rounded-md bg-accent px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white"
              >
                {activeIndex === layers.length - 1
                  ? 'Concluir tour'
                  : 'Próximo passo'}
              </button>
            </motion.div>
          ) : (
            <div className="rounded-xl border border-slate-300/70 bg-slate-100/60 p-4 text-sm text-muted dark:border-slate-700/70 dark:bg-slate-900/35">
              {autoPlay
                ? `Fluxo automático ativo em velocidade ${speedMode}.`
                : 'Fluxo manual ativo. Use as setas ou clique na etapa.'}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
