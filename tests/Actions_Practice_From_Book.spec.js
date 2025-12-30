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

test('Radio Button Test', async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/radiobutton-demo");
    // Check the first radio button
    const maleFirst = page.locator("input[value='Male']").first();
    const femaleFirst = page.locator("input[value='Female']").first();
    expect (await maleFirst.isChecked()).toBeFalsy();
    await maleFirst.click();
    expect (await maleFirst.isChecked()).toBeTruthy();
    await page.locator('#buttoncheck').click();
    expect (await page.locator("p[class*='radiobutton']")).toHaveText("Radio button 'Male' is checked");
    //await page.pause();
    expect (await femaleFirst.isChecked()).toBeFalsy();
});    

test('Check Boxes', async({page}) =>{
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

test('Multiple Check Boxes', async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#multi-select",["New York","Ohio","Texas"]);
    const selectedOptions = await page.locator("#multi-select option:checked").allTextContents();
    console.log(selectedOptions);
    expect(selectedOptions).toEqual(["New York","Ohio","Texas"]);
});

test('Drag and Drop demo', async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
    const dragitem1 = page.getByText("Draggable 1");
    const dragitem2 = page.getByText("Draggable 2");
    const dropzone = page.locator("#mydropzone");
    await dragitem1.dragTo(dropzone);
    await dragitem2.dragTo(dropzone);
    //await expect(page.locator("#droppedlist",{hasText: ["Draggable 1"]})).toBeVisible();
    await expect(page.locator("#droppedlist span")).toHaveText(['Draggable 1','Draggable 2']);
});

test('File Download Test', async({page}) =>{
    const filedownloadButton = page.locator("button.btn.btn-primary");
    await page.goto("https://www.lambdatest.com/selenium-playground/download-file-demo");
    // Start waiting for the download
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        filedownloadButton.click(), // Triggers the download
    ]);
    console.log(download.suggestedFilename());
    const filePath = 'downloads/' + download.suggestedFilename();
    // Save downloaded file somewhere
    await download.saveAs(filePath);
    // Check if the file is saved successfully
    expect(await download.path()).toBeTruthy();

});

test('handling elements in iFrames', async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/iframe-demo/");
    const textEnter = await page.frameLocator('#iFrame1').locator("//div[@class='rsw-ce']");
    await textEnter.fill("Test Successful");
    await expect(textEnter).toHaveText("Test Successful");
});

test('Sample Ecommerce Login Test', async({page}) => {

    const userName = 'sachin.kg@grr.la';
    const passWord = 'Password@2';
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill(userName);
    await page.locator('#userPassword').fill(passWord);
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    const products = page.locator('.card-body');
    const productCount = await products.count();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
    console.log("Total Products: " + productCount);

});
