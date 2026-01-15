const {test, expect} = require ("@playwright/test")

test ("Verify User navigated to respective pages", async({page})=>{

await page.goto("https://www.cfl.lu/en-gb")
// click to timetable search tab and verify user got navigated to the page
await page.getByRole('button', { name: 'Prepare my journey' }).click();
await page.waitForTimeout(2000)
await page.getByRole('link', { name: 'Timetable search' }).click();
await expect(page.getByRole('tabpanel', { name: 'Timetable search' })).toBeVisible();

// click "timetable sheets" tab and verify the page is displayed
await page.getByLabel('Main navigation').getByRole('button', { name: 'Prepare my journey' }).click();
await page.waitForTimeout(2000)
await page.getByRole('link', { name: 'Timetable sheets' }).click();
await expect(page.getByRole('tabpanel', { name: 'Regional timetables' })).toBeVisible();

// click on "Network and stations" tab and verify the page is displayed
await page.getByLabel('Main navigation').getByRole('button', { name: 'Prepare my journey' }).click();
await page.waitForTimeout(2000)
await page.getByRole('link', { name: 'Network and Stations' }).click();
await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();

// click on "Works" tab and verify page is displayed
await page.getByLabel('Main navigation').getByRole('button', { name: 'Prepare my journey' }).click();
await page.waitForTimeout(2000)
await page.getByRole('link', { name: 'Works' }).click();
await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();

// click on "Disruptions" tab and verify page is displayed
await page.getByLabel('Main navigation').getByRole('button', { name: 'Prepare my journey' }).click();
await page.waitForTimeout(2000)
await page.getByRole('link', { name: 'Disruptions' }).click();
await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();

// click on "Customer Services" and verify the page is displayed
await page.getByLabel('Main navigation').getByRole('button', { name: 'Prepare my journey' }).click();
await page.waitForTimeout(2000)
await page.getByRole('link', { name: 'Customer services' }).click();
await page.waitForTimeout(2000)
})