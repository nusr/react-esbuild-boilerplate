import { test, expect } from '@playwright/test';

test.describe('menubar.test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('test menubar exist', async ({ page }) => {
    await expect(page.getByTestId('menubar')).toBeVisible();
  });
});
