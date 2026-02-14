import { Reveal } from '@/components/ui/reveal';
import type { EducationItem } from '@/domain/entities/portfolio';

export function EducationPresenter({
  education
}: {
  education: EducationItem[];
}) {
  return (
    <div className="space-y-4">
      {education.map((item, index) => (
        <Reveal key={`${item.title}-${item.institution}`} delay={index * 0.08}>
          <article className="card-entry bg-panel/85 rounded-2xl border border-slate-300/80 p-5 shadow-soft backdrop-blur dark:border-slate-700/80">
            <h3 className="font-extrabold">{item.title}</h3>
            <p className="text-sm text-muted">{item.institution}</p>
            <p className="text-sm font-semibold text-accent">{item.period}</p>
            {item.credentialCode ? (
              <p className="mt-1 text-xs text-muted">
                Credencial: <span className="font-semibold">{item.credentialCode}</span>
              </p>
            ) : null}
            {item.competencies?.length ? (
              <p className="mt-1 text-xs text-muted">
                Competencias: {item.competencies.join(', ')}
              </p>
            ) : null}
            {item.credentialUrl ? (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex text-xs font-semibold text-accent underline-offset-4 hover:underline"
              >
                Exibir credencial
              </a>
            ) : null}
            {item.details ? (
              <p className="mt-2 text-sm text-muted">{item.details}</p>
            ) : null}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
