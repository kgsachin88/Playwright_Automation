const{test, expect} = require('@playwright/test');

test('Visual regression test for homepage', async ({ page }) => {

    await page.goto('https://www.path2usa.com/travel-companion/');
    expect(await page.screenshot()).toMatchSnapshot('homepage.png');
});