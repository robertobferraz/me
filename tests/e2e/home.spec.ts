import { test, expect } from '@playwright/test';

test('renderiza as secoes principais do portfolio', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Roberto Filho', exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Sobre', exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Experiência', exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Projetos', exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Contato', exact: true })
  ).toBeVisible();
});
