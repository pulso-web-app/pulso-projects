import { expect, test } from '@playwright/test';

test('renders the Projects placeholder', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Projetos' })).toBeVisible();
  await expect(
    page.getByText('Seu espaço de projetos está tomando forma.'),
  ).toBeVisible();
  await expect(page.getByText('Em breve', { exact: true })).toBeVisible();
  await expect(page.getByRole('status', { name: 'Carregando' })).toBeHidden();

  const surfaceBackground = await page
    .locator('.projects-placeholder')
    .evaluate((element) => getComputedStyle(element).backgroundColor);

  expect(surfaceBackground).toBe('rgba(0, 0, 0, 0)');
});
