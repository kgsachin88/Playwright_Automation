const {expect,test} = require('@playwright/test');

test('Dropdown and Checkbox Test',async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = 'rahulshettyacademy';
    const passWord = 'learning';
    const optionToSelect = 'consult';
    const radioButton = page.locator('.radiotextsty');
    await page.locator('#username').fill(userName);
    await page.locator('#password').fill(passWord);
    // To select from the simple dropdown
    await page.locator('select.form-control').selectOption(optionToSelect);
    await page.locator('#terms').check();
    //To check the status of the first radio button
    console.log(await radioButton.first().isChecked());
    expect(await radioButton.first().isChecked()).toBeTruthy();
    //To click on the second radio button
    await radioButton.nth(1).click();
    expect(await radioButton.nth(1).isChecked()).toBeTruthy();
    expect(await radioButton.first().isChecked()).toBeFalsy();
    await page.locator('#okayBtn').click();
    //to puse the execution we use await page.pause()
    //await page.pause();
});