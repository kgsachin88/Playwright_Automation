const {test, expect} = require('@playwright/test');


test('Calenders Practice1', async ({page}) => {
    await page.goto('https://www.path2usa.com/travel-companions');
    await page.getByText('Date of travel').click();
    await page.locator(".numInput").fill("2026");
    await page.pause();

});