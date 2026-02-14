import { portfolioData } from '@/data/portfolio';
import type { Portfolio } from '@/domain/entities/portfolio';
import type { PortfolioRepository } from '@/domain/interfaces/portfolio-repository';

export class LocalPortfolioAdapter implements PortfolioRepository {
  async getPortfolio(): Promise<Portfolio> {
    return portfolioData;
  }
}
