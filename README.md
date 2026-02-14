# Portfólio - Roberto Filho

Portfólio em produção com foco em backend e arquitetura, construído com Next.js (App Router), TypeScript e TailwindCSS.

## Stack

- Next.js (App Router) + TypeScript
- TailwindCSS
- ESLint + Prettier
- Vitest (unit)
- Playwright (e2e)
- GitHub Actions (lint + test + build)

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

```bash
npm run dev         # ambiente local
npm run lint        # lint
npm run test:unit   # testes unitarios
npm run test:e2e    # testes end-to-end
npm run build       # build de producao
```

## Decisões de arquitetura

- Estrutura por camadas/concerns:
  - `src/app`: rotas, metadata, robots, sitemap e API mock
  - `src/components`: componentes reutilizáveis de layout e UI
  - `src/features`: módulos por feature usando container/presenter
  - `src/domain`: entidades, interfaces e usecases
  - `src/lib`: factory, validators e utilidades de tema
  - `src/services`: adapters e serviços externos/mock
  - `src/data`: fonte local tipada do conteúdo
- Padrões aplicados:
  - `Component Composition`: `Section`, `LinkButton`, `Chip`
  - `Container/Presenter`: features divididas entre orquestração e renderização
  - `Strategy`: renderização de cards em `src/features/projects/project-strategy.tsx`
  - `Adapter`: `LocalPortfolioAdapter` traduz fonte local para interface de repositório
  - `Dependency Inversion`: usecase depende de `PortfolioRepository`

## Como atualizar dados

Edite o arquivo `src/data/portfolio.ts`.

- Todas as seções são geradas a partir desse arquivo tipado
- Para migrar para CMS, implemente outro adapter de `PortfolioRepository` em `src/services/adapters`

## Acessibilidade, SEO e performance

- `aria-label`, foco visível e contraste em tema claro/escuro
- Metadata + OpenGraph + `sitemap.ts` + `robots.ts`
- `next/image` para assets de projetos
- Componentes server-first; client apenas onde necessário (tema e formulário)

## Estrutura do projeto

```text
.
├── .github/workflows/ci.yml
├── public/
│   ├── Profile.pdf
│   └── projects/
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── domain/
│   ├── features/
│   ├── lib/
│   └── services/
├── tests/
│   ├── e2e/
│   └── unit/
├── playwright.config.ts
├── tailwind.config.ts
├── vitest.config.ts
└── package.json
```
