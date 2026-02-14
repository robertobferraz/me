import { describe, expect, it } from 'vitest';
import { GetPortfolioUseCase } from '@/domain/usecases/get-portfolio';
import type { PortfolioRepository } from '@/domain/interfaces/portfolio-repository';
import { portfolioData } from '@/data/portfolio';

class FakeRepository implements PortfolioRepository {
  async getPortfolio() {
    return portfolioData;
  }
}

describe('GetPortfolioUseCase', () => {
  it('retorna o portfolio completo via inversao de dependencia', async () => {
    const useCase = new GetPortfolioUseCase(new FakeRepository());
    const data = await useCase.execute();

    expect(data.hero.name).toBe('Roberto Filho');
    expect(data.projects).toHaveLength(4);
    expect(data.projects[0]?.id).toBe('civitas');
  });
});
