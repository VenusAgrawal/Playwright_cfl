import {test, expect} from '@playwright/test'

test ("Verify Error message by not selecting depature/arrival", async({page})=>{

    // Navigate to CFL website
    await page.goto('https://cfl.lu');
    
    // Click the Search button without filling any fields
    const searchButton = await page.getByRole('button', {name: 'Search', exact: true}) // Adjust selector
    await searchButton.click();
    
    // Verify HTML5 validation message appears
    // Note: HTML5 validation messages are handled by the browser
    // We need to check the validity state of the input field
    const departureInput = await page.getByRole('combobox', { name: 'Departure' }) // Adjust selector
    
    const validationMessage = await departureInput.evaluate((el) => {
      return el.validationMessage;
    });
    
    // Assert that validation message is present
    await expect(validationMessage).toBeTruthy();
    await expect(validationMessage).toContain('Please fill in this field.');
    
    console.log('Validation message:', validationMessage);
})