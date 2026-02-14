import { Reveal } from '@/components/ui/reveal';

const cards = [
  {
    label: 'Experiências em Engenharia',
    key: 'featuredExperienceCount'
  },
  {
    label: 'Cases Técnicos no Portfólio',
    key: 'projectCount'
  },
  {
    label: 'Blocos de Habilidade',
    key: 'skillCategoryCount'
  }
] as const;

export function OverviewPresenter({
  featuredExperienceCount,
  projectCount,
  skillCategoryCount
}: {
  featuredExperienceCount: number;
  projectCount: number;
  skillCategoryCount: number;
}) {
  const values = {
    featuredExperienceCount,
    projectCount,
    skillCategoryCount
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-4 px-4 pb-6 md:grid-cols-3 md:px-6">
      {cards.map((card, index) => (
        <Reveal key={card.label} delay={0.04 * index}>
          <article className="bg-panel/85 rounded-2xl border border-slate-300/80 p-5 shadow-soft backdrop-blur dark:border-slate-700/80">
            <p className="mb-2 text-3xl font-black text-accent">
              {values[card.key]}
              <span className="ml-1 text-base text-muted">+</span>
            </p>
            <p className="text-sm font-semibold text-muted">{card.label}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
