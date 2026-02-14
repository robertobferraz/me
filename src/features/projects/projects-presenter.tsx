'use client';

import type { ProjectData } from '@/domain/entities/portfolio';
import { Reveal } from '@/components/ui/reveal';
import { ArchitectureInteractive } from '@/features/projects/architecture-interactive';
import { renderProjectByStrategy } from '@/features/projects/project-strategy';

export function ProjectsPresenter({ projects }: { projects: ProjectData[] }) {
  const [primary, ...secondary] = projects;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:gap-5 xl:grid-cols-12 2xl:gap-6">
        <Reveal delay={0.04} className="xl:col-span-5 2xl:col-span-4">
          <ArchitectureInteractive />
        </Reveal>

        {primary ? (
          <Reveal delay={0.06} className="xl:col-span-7 2xl:col-span-8">
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
