'use client';

import type { ProjectData } from '@/domain/entities/portfolio';
import { Reveal } from '@/components/ui/reveal';
import { ArchitectureInteractive } from '@/features/projects/architecture-interactive';
import { renderProjectByStrategy } from '@/features/projects/project-strategy';

export function ProjectsPresenter({ projects }: { projects: ProjectData[] }) {
  const [primary, ...secondary] = projects;

  return (
    <div className="space-y-6">
      <Reveal delay={0.04}>
        <ArchitectureInteractive />
      </Reveal>

      <div className="grid items-stretch gap-4 sm:gap-5 xl:grid-cols-12 2xl:gap-6">
        {primary ? (
          <Reveal delay={0.06} className="xl:col-span-12">
            {renderProjectByStrategy(primary)}
          </Reveal>
        ) : null}

        {secondary.map((project, index) => (
          <Reveal
            key={project.id}
            delay={0.1 + index * 0.08}
            className="xl:col-span-6"
          >
            {renderProjectByStrategy(project)}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
