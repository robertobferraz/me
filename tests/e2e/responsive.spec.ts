import { expect, test } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'notebook', width: 1440, height: 900 },
  { name: 'desktop', width: 1920, height: 1080 }
];

for (const viewport of viewports) {
  test(`layout responsivo em ${viewport.name} (${viewport.width}x${viewport.height})`, async ({
    page
  }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height
    });
    await page.goto('/');
    await page.waitForTimeout(900);

    await expect(
      page.getByRole('heading', { name: 'Roberto Filho', exact: true })
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Projetos' })).toBeVisible();

    const overflowingNodes = await page.evaluate(() => {
      return Array.from(document.querySelectorAll<HTMLElement>('body *'))
        .map((node) => {
          const rect = node.getBoundingClientRect();
          return {
            tag: node.tagName.toLowerCase(),
            className: node.className,
            text: (node.textContent ?? '').trim().slice(0, 60),
            right: rect.right
          };
        })
        .filter((node) => node.right > window.innerWidth + 1)
        .sort((a, b) => b.right - a.right)
        .slice(0, 8);
    });

    expect(
      overflowingNodes,
      `Elementos com overflow: ${JSON.stringify(overflowingNodes)}`
    ).toHaveLength(0);

    if (viewport.width < 768) {
      const menuButton = page.getByRole('button', {
        name: 'Abrir menu de navegação'
      });
      await expect(menuButton).toBeVisible();
      await menuButton.click();
      await expect(
        page.getByRole('navigation', { name: 'Navegação mobile' })
      ).toBeVisible();
    }
  });
}
