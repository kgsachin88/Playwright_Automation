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

test('To click on the checkBoxes',async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const checkBoxes = page.locator("input[type='checkbox']");
    //To check the number of checkboxes
    console.log(await checkBoxes.count());
    //await page.pause();
    //To click on the first checkbox
    await checkBoxes.nth(0).check();
    expect (await checkBoxes.nth(0).isChecked()).toBeTruthy();
    //To uncheck the first checkbox
    await checkBoxes.nth(0).uncheck();
    expect (await checkBoxes.nth(0).isChecked()).toBeFalsy();
});

// Sample changes
