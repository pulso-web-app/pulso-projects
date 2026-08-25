import { expect, test } from '@playwright/test';

test('renders the application loading state', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('status', { name: 'Carregando' })).toBeVisible();
});
