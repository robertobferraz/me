import { GetPortfolioUseCase } from '@/domain/usecases/get-portfolio';
import { LocalPortfolioAdapter } from '@/services/adapters/local-portfolio-adapter';

export const createGetPortfolioUseCase = (): GetPortfolioUseCase => {
  return new GetPortfolioUseCase(new LocalPortfolioAdapter());
};
