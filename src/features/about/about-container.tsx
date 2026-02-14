import type { AboutData } from '@/domain/entities/portfolio';
import { AboutPresenter } from '@/features/about/about-presenter';

export function AboutContainer({ about }: { about: AboutData }) {
  return <AboutPresenter summary={about.summary} />;
}
