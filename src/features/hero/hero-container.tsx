import type { HeroData } from '@/domain/entities/portfolio';
import { HeroPresenter } from '@/features/hero/hero-presenter';

export function HeroContainer({ hero }: { hero: HeroData }) {
  return <HeroPresenter hero={hero} />;
}
