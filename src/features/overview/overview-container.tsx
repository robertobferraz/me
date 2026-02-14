import { OverviewPresenter } from '@/features/overview/overview-presenter';

export function OverviewContainer({
  featuredExperienceCount,
  projectCount,
  skillCategoryCount
}: {
  featuredExperienceCount: number;
  projectCount: number;
  skillCategoryCount: number;
}) {
  return (
    <OverviewPresenter
      featuredExperienceCount={featuredExperienceCount}
      projectCount={projectCount}
      skillCategoryCount={skillCategoryCount}
    />
  );
}
