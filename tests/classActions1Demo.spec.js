const {expect,test} = require('@playwright/test');

test('LoginPage  validation Test',async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = 'rahulshettyacademy';
    const passWord = 'learning';
    await page.locator('#username').fill(userName);
    await page.locator('#password').fill(passWord);
    await page.locator('#signInBtn').click();
    console.log(await page.locator('.card-body a').nth(0).textContent());
    console.log(await page.locator('.card-body a').first().textContent());
    console.log(await page.locator('.card-body a').last().textContent());

});

test('To Print all the Titles',async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = 'rahulshettyacademy';
    const passWord = 'learning';
    await page.locator('#username').fill(userName);
    await page.locator('#password').fill(passWord);
    await page.locator('#signInBtn').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body a').first().waitFor();
    console.log(await page.locator('.card-body a').allTextContents());

});

test('LoginPage Error validation Test',async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("TestUser");
    await page.locator('#password').fill("Pwd");
    //await page.locator('#password').clear()
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password');

});