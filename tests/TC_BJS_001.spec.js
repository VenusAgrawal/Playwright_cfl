import { test, expect } from '@playwright/test';

test ("Basic journey Check in Luxembourg: for departure", async({page})=>{

await page.goto('https://www.cfl.lu/en-gb');
// select departure option
await page.getByRole('combobox', { name: 'Departure' }).click();
await page.getByRole('listitem').filter({ hasText: 'Luxembourg, Gare Centrale' }).click();
//select arrival option
await page.getByRole('combobox', { name: 'Arrival' }).click();
await page.getByRole('listitem').filter({ hasText: 'Belval-Universite' }).click();
// click "To research" button
await page.getByRole('button', {name: 'Search', exact: true}).click()
//Verify the tab showing "Route from Luxembourg, Gare Centrale to Belval-Universite"
const tabMessage = await page.getByText('Route from').textContent()
await expect(tabMessage.includes("Route from Luxembourg, Gare Centrale to Belval-Universite")).toBeTruthy
})