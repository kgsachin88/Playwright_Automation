const{expect, test} = require('@playwright/test');

test('Sample Ecommerce Test', async({page}) => {

    const userName = 'sachin.kg@grr.la';
    const passWord = 'Password@2';
    const productName = 'ADIDAS ORIGINAL';
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByPlaceholder('email@example.com').fill(userName);
    await page.getByPlaceholder('enter your passsword').fill(passWord);
    await page.getByRole('button', { name: 'login' }).click();
    //await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();
    const products = page.locator('.card-body');
    const productCount = await products.count();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
    console.log("Total Products: " + productCount);
    await products.filter({ hasText: productName }).getByRole("button", {name: "Add To Cart"}).click();
    await page.locator('button[routerlink*="cart"]').click();
    await page.locator('div li').first().waitFor();
    await expect(page.getByText(productName)).toBeVisible();
    await page.getByText('Checkout').click();
    await page.getByPlaceholder("Select Country").pressSequentially('ind',{delay:100});
    await page.getByRole("button", {name: "India"}).nth(0).click();
    
    //to validate if the email id is correct in the order summary page
    const orderEmail = await page.locator("label[type='text']").textContent();
    console.log(orderEmail);
    expect(orderEmail).toContain(userName);
    await page.locator('select[class="input ddl"]').nth(0).selectOption('10');
    await page.locator('select[class="input ddl"]').nth(1).selectOption('31');
    await page.locator('input[class="input txt"]').nth(0).fill("111");
    await page.locator('input[class="input txt"]').nth(1).fill("SACHIN");
    await page.locator('input[name="coupon"]').fill("TestCoupon");
    await page.locator('button[type="submit"]').click();
    await page.locator('p').last().waitFor();
    await page.getByText("Place Order ").click();
    await expect(page.getByText(' Thankyou for the order. ')).toBeVisible();
    
    const orderID = await page.locator("label[class='ng-star-inserted']").textContent();
    console.log(orderID.split(" ")[2]);
    await page.locator('label[routerlink*="myorders"]').click();
    await page.locator('tbody').waitFor();
    const rows = page.locator('tbody tr');
    const rowCount = await rows.count();
    console.log("Total Orders: " + rowCount);
    for(let i=0;i<rowCount;i++){
        const rowOrderID = await rows.nth(i).locator('th').textContent();
        const prodName = await page.locator('tbody tr td').nth(1).textContent()
        console.log(await page.locator('tbody tr td').nth(1).textContent());
        if(orderID.includes(rowOrderID.trim()) && prodName.includes(productName)){
            console.log(prodName);
            await rows.nth(i).locator('button').first().click();
            break;
        }   
    }
    const orderIDDetails = await page.locator('.col-text').textContent();
    const productDetails = await page.locator('.title').textContent();
    console.log(productDetails);
    expect(productDetails.includes(productName)).toBeTruthy();
    expect(orderIDDetails.includes(orderID.split(" ")[2])).toBeTruthy();

});
