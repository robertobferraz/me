import { Reveal } from '@/components/ui/reveal';
import type { SkillCategory } from '@/domain/entities/portfolio';

export function SkillsPresenter({ skills }: { skills: SkillCategory[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {skills.map((category, index) => (
        <Reveal key={category.title} delay={index * 0.06}>
          <article className="card-entry bg-panel/85 rounded-2xl border border-slate-300/80 p-5 shadow-soft backdrop-blur dark:border-slate-700/80">
            <h3 className="mb-3 text-base font-extrabold">{category.title}</h3>
            <ul className="space-y-1 text-sm text-muted">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
