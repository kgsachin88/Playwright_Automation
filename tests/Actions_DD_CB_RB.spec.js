const {expect,test} = require('@playwright/test');

test('Dropdown and Checkbox Test',async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = 'rahulshettyacademy';
    const passWord = 'learning';
    await page.locator('#username').fill(userName);
    await page.locator('#password').fill(passWord);
    await page.locator('select.form-control').selectOption('consult');
    await page.locator('#terms').check();
    await page.locator('#signInBtn').click();
    console.log(await page.locator('.checkmark').first().isChecked());
    expect(await page.locator('.checkmark').first().isChecked()).toBeTruthy();
 
});