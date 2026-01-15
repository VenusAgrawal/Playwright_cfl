const {test, expect} = require ("@playwright/test")

test ("Verifications for homepage", async({page})=> {

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
/*
//click on language selector
await page.getByTitle("Select language").click()

//change the language by selecting french
await page.locator("//a[@id='culture-FR']").click()
const langFrench = await page.locator("//span[normalize-space()='Votre voyage commence ici ...']").textContent()
console.log(langFrench)
await expect(langFrench.includes('Votre voyage commence ici ...')).toBeTruthy()

await page.waitForTimeout(5000)

await page.locator("//a[@id='culture-EN']").click()
*/



})