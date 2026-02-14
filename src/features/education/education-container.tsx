import type { EducationItem } from '@/domain/entities/portfolio';
import { EducationPresenter } from '@/features/education/education-presenter';

export function EducationContainer({
  education
}: {
  education: EducationItem[];
}) {
  return <EducationPresenter education={education} />;
}
