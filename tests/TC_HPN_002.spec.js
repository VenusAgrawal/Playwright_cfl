const {test, expect} = require ("@playwright/test")

test ("Verify change of language", async({page})=> {
   
await page.goto("https://www.cfl.lu/en-gb")

// click on the language selector dropdown
await page.getByRole('button', {name: 'Active language: English. Select language'}).click()
// click on "FR" to select french language and Verify with the "Consulter" tab text
await page.getByRole('menuitem', {name: 'Français'}).click()
await expect(page.getByRole('tab', {name: 'Consulter'})).toBeVisible()

// click on the language selector dropdown
await page.getByRole('button', {name: 'Langue active : français. Sélectionner la langue'}).click() 
// click on "DE" to select deutch language and verify with "Informieren" tab text
await page.getByRole('menuitem', {name: 'Deutsch' }).click()
await expect(page.getByRole('tab', {name: 'Informieren'})).toBeVisible()

// click on the language selector dropdown
await page.getByRole('button', {name: 'Aktive Sprache: Deutsch. Sprache auswählen'}).click()
//click on the "EN" to select english language anf verify with "Check" tab text
await page.getByRole('menuitem', {name: 'English'}).click()
await expect(page.getByRole('tab', {name: 'Check'})).toBeVisible()
})