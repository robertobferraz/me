import type { ProjectData } from '@/domain/entities/portfolio';
import { ProjectsPresenter } from '@/features/projects/projects-presenter';

export function ProjectsContainer({ projects }: { projects: ProjectData[] }) {
  return <ProjectsPresenter projects={projects} />;
}
