import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.cfl.lu/en-gb');
  await expect(page.getByRole('tabpanel', { name: 'Check' })).toBeVisible();

  await page.getByRole('combobox', { name: 'Departure' }).click();
  await expect(page.getByRole('heading', { name: 'Suggestions' })).toBeVisible();

  await page.getByRole('listitem').filter({ hasText: 'Train station Luxembourg,' }).click();
  await page.getByRole('combobox', { name: 'Arrival' }).click();
  await expect(page.getByRole('heading', { name: 'Suggestions' })).toBeVisible();

  await page.getByRole('listitem').filter({ hasText: 'Train station Belval-' }).click();
  await page.getByRole('textbox', { name: 'DD/MM/YYYY' }).click();
  await expect(page.getByRole('row', { name: 'Su Mo Tu We Th Fr Sa' })).toBeVisible();

  await page.getByRole('cell', { name: '15' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.waitForTimeout(3000)

  await expect(await page.locator('#js-resultsDate')).toBeVisible()
});