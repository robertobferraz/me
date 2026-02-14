import { Reveal } from '@/components/ui/reveal';

export function AboutPresenter({ summary }: { summary: string }) {
  return (
    <Reveal className="grid gap-4 xl:grid-cols-12">
      <article className="bg-panel/85 rounded-2xl border border-slate-300/80 p-6 text-base leading-8 text-muted shadow-soft backdrop-blur dark:border-slate-700/80 xl:col-span-8">
        <div className="grid gap-4 md:grid-cols-[84px_1fr]">
          <div className="relative hidden md:block" aria-hidden="true">
            <span className="absolute left-5 top-4 h-[calc(100%-28px)] w-[2px] bg-gradient-to-b from-accent/80 via-sky-400/70 to-teal-400/70" />
            <div className="flex flex-col items-start gap-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 bg-accent/10 text-accent">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M4 12 12 4l8 8-8 8-8-8Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path d="M12 4v16" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-500/60 bg-sky-500/10 text-sky-500">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M6 14a6 6 0 1 0 0-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="m6 14 2.5-2.5M6 14H3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-500/60 bg-teal-500/10 text-teal-500">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM8 13c-2.8 0-5 1.5-5 3.5V19h10v-2.5C13 14.5 10.8 13 8 13Zm8 0c-.9 0-1.8.2-2.6.5 1.2.8 2 1.8 2 3V19H21v-2.5c0-2-2.2-3.5-5-3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <p>{summary}</p>
            <p className="mt-4">
              Minha entrega combina visão de produto, rigor técnico e foco em
              confiabilidade operacional, priorizando clareza arquitetural e
              evolução sustentável do código.
            </p>
          </div>
        </div>
      </article>

      <aside className="grid gap-3 xl:col-span-4">
        <article className="bg-panel/80 rounded-xl border border-slate-300/75 p-4 dark:border-slate-700/75">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Foco Atual
          </p>
          <p className="mt-1 text-sm font-semibold text-muted">
            Backend em Go, sistemas real-time e arquitetura em camadas.
          </p>
        </article>
        <article className="bg-panel/80 rounded-xl border border-slate-300/75 p-4 dark:border-slate-700/75">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Diferencial
          </p>
          <p className="mt-1 text-sm font-semibold text-muted">
            Engenharia orientada a domínio, observabilidade e performance.
          </p>
        </article>
        <article className="bg-panel/80 rounded-xl border border-slate-300/75 p-4 dark:border-slate-700/75">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Objetivo
          </p>
          <p className="mt-1 text-sm font-semibold text-muted">
            Construir soluções robustas, seguras e fáceis de manter em produção.
          </p>
        </article>
      </aside>
    </Reveal>
  );
}
