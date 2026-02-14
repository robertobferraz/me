import type { ContactLink, HeroData } from '@/domain/entities/portfolio';
import Image from 'next/image';
import { LinkButton } from '@/components/ui/link-button';
import { Reveal } from '@/components/ui/reveal';

const heroHighlights = [
  'Microserviços',
  'Arquitetura Hexagonal',
  'Mensageria',
  'Observabilidade',
  'Performance',
  'Real-time'
];

function HeroContactIcon({ contact }: { contact: ContactLink }) {
  const label = contact.label.toLowerCase();
  const href = contact.href.toLowerCase();

  if (label.includes('mail')) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M3 6h18v12H3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m4 7 8 6 8-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (label.includes('telefone') || href.includes('wa.me')) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M7.5 4h3L12 8l-2 2c1 2 3 4 5 5l2-2 4 1.5v3c0 .8-.7 1.5-1.5 1.5C11 19 5 13 5 5.5 5 4.7 5.7 4 6.5 4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (href.includes('github')) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3a9 9 0 0 0-2.8 17.6c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.4-1-.9-1.3-.9-1.3-.8-.6 0-.6 0-.6 1 .1 1.5 1 1.5 1 .8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-2.3-.2-4.6-1.1-4.6-5A4 4 0 0 1 6.8 8c-.2-.3-.5-1.2 0-2.5 0 0 .8-.2 2.6 1A9 9 0 0 1 12 6c.9 0 1.8.1 2.6.5 1.8-1.2 2.6-1 2.6-1 .5 1.3.2 2.2 0 2.5a4 4 0 0 1 1 2.8c0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v2.3c0 .3.2.6.7.5A9 9 0 0 0 12 3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm4 5h4v1.6h.1c.6-1 1.8-2 3.8-2 4.1 0 4.9 2.6 4.9 6.1V20h-4v-4.9c0-1.2 0-2.8-1.8-2.8s-2 1.3-2 2.7V20h-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeroPresenter({ hero }: { hero: HeroData }) {
  return (
    <section className="hero-grid-bg relative mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:py-14 md:px-6 md:py-20 lg:py-24">
      <div className="float-orb float-orb--one" aria-hidden="true" />
      <div className="float-orb float-orb--two" aria-hidden="true" />

      <Reveal
        className="card-entry relative z-10 space-y-5 sm:space-y-6"
        delay={0.05}
      >
        <div className="flex flex-col gap-4 sm:gap-5">
          <p className="border-accent/50 bg-accent/10 inline-flex self-start rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Engenheiro de Software
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-[clamp(2rem,8vw,4.6rem)] font-black leading-tight tracking-tight">
              {hero.name}
            </h1>

            <div className="bg-panel/80 border-accent/40 h-28 w-28 shrink-0 overflow-hidden rounded-2xl border sm:h-36 sm:w-36 md:h-40 md:w-40">
              <Image
                src="/brands/roberto-filho.jpeg"
                alt="Foto de Roberto Filho"
                width={320}
                height={320}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <p className="max-w-3xl text-base text-muted sm:text-lg md:text-xl">
          {hero.headline}
        </p>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
          {hero.location}
        </p>

        <div className="flex flex-wrap gap-2">
          {heroHighlights.map((item) => (
            <span
              key={item}
              className="bg-panel/70 rounded-full border border-slate-400/45 px-3 py-1 text-xs font-semibold uppercase tracking-wide"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          <LinkButton href={hero.ctas[0].href} label={hero.ctas[0].label} />
          <LinkButton
            href={hero.ctas[1].href}
            label={hero.ctas[1].label}
            variant="outline"
          />
          <LinkButton
            href={hero.ctas[2].href}
            label={hero.ctas[2].label}
            variant="outline"
          />
        </div>

        <div className="pt-2">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-muted">
            Contato rápido
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {hero.contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                className="bg-panel/90 group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 transition hover:border-accent hover:text-accent dark:border-slate-700/70"
                aria-label={contact.label}
                title={contact.label}
              >
                <HeroContactIcon contact={contact} />
                <span className="pointer-events-none absolute -top-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold text-white group-hover:block">
                  {contact.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
