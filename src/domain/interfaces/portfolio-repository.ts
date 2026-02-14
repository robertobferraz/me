import type { Portfolio } from '@/domain/entities/portfolio';

export interface PortfolioRepository {
  getPortfolio(): Promise<Portfolio>;
}
