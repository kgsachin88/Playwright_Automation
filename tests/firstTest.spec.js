const {test,expect} = require('@playwright/test')

test('First Test',async ({page}) =>
{

    await page.goto("https://playwright.dev/docs/intro");
    await expect(page).toHaveTitle(/Playwright/);

});

test.skip('second Test', async({page})=>{

    await page.goto("https://www.google.com/");
    

});