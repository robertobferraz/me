import type { SkillCategory } from '@/domain/entities/portfolio';
import { SkillsPresenter } from '@/features/skills/skills-presenter';

export function SkillsContainer({ skills }: { skills: SkillCategory[] }) {
  return <SkillsPresenter skills={skills} />;
}
