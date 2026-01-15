const {test, expect} = require("@playwright/test")

test ("HomePage Verification", async({page})=> {

// navigate to the URL
await page.goto("https://www.cfl.lu/en-gb")

//Verify that logo is present
const logo = await page.locator("//img[@class='header-entity-logo']")
await expect(logo).toBeVisible()

//Verify that tabs are present
await expect(page.getByRole('tabpanel', { name: 'Check' })).toBeVisible();

//Verify that the URL is same
await expect(page).toHaveURL("https://www.cfl.lu/en-gb")

//Verify the title of page
await expect(page).toHaveTitle("CFL  ")
})