import type { ExperienceItem } from '@/domain/entities/portfolio';
import { ExperiencePresenter } from '@/features/experience/experience-presenter';

export function ExperienceContainer({
  experiences
}: {
  experiences: ExperienceItem[];
}) {
  return <ExperiencePresenter experiences={experiences} />;
}
