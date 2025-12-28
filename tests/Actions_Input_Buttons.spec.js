const {expect,test} = require('@playwright/test');

test.skip('Simple Form Test',async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    await page.getByPlaceholder("Please enter first value").fill("5");
    await page.getByPlaceholder("Please enter second value").fill("6");
    expect(await page.getByRole("button",{name : "Get Sum"})).toBeVisible();
    await page.getByRole("button",{name : "Get Sum"}).click();
    expect(await page.locator("#addmessage")).toHaveText("11");

});

test('Simple checkbox test',async ({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    // Check if the check box is not checked
    expect(await page.getByText("Click on check box").isChecked()).toBeFalsy();
    await page.getByText("Click on check box").click();
    // verify that the checkbox is checked 
    expect(await page.getByText("Click on check box").isChecked()).toBeTruthy(); 
    await page.getByText("Click on check box").click();
    expect(await page.getByText("Click on check box").isChecked()).toBeFalsy();
});

test('Multiple Check Boxes', async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    expect(await page.locator("input[name='option1']").isChecked()).toBeFalsy();
    await page.locator("input[name='option1']").click();
    expect(await page.locator("input[name='option1']").isChecked()).toBeTruthy();

    expect(await page.locator("input[name='option2']").isChecked()).toBeFalsy();
    await page.locator("input[name='option2']").click();
    expect(await page.locator("input[name='option2']").isChecked()).toBeTruthy();

    expect(await page.locator("input[name='option3']").isChecked()).toBeFalsy();
    await page.locator("input[name='option3']").click();
    expect(await page.locator("input[name='option3']").isChecked()).toBeTruthy();
    
    
});                                                                                                                             