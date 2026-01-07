const{expect, test} = require('@playwright/test');
const Creds = require('../../TestData/creds.json');

test('Sample Ecommerce Test', async({page}) => {

    const productName = 'ADIDAS ORIGINAL';
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill(Creds.admin.username);
    await page.locator('#userPassword').fill(Creds.admin.password);
    await page.locator('#login').click();
    await page.locator('.card-body b').first().waitFor();
    const products = page.locator('.card-body');
    const productCount = await products.count();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
    console.log("Total Products: " + productCount);

    for(let i=0;i<productCount;i++){
       if(await products.nth(i).locator('b').textContent() === productName) {
            await products.nth(i).locator('text= Add To Cart').click();
            break;
       }
    }
    await page.locator('button[routerlink*="cart"]').click();
    await page.locator('div li').first().waitFor();
    const bool = await page.locator('h3:has-text("ADIDAS ORIGINAL")').isVisible();
    expect(bool).toBeTruthy();
    await page.locator('text=Checkout').click();
    await page.locator('input[placeholder="Select Country"]').pressSequentially('ind',{delay:100});
    const options = page.locator('.ta-results');
    await options.waitFor();
    const optionsCount = await options.locator('button').count();
    for(let i=0;i<optionsCount;i++){

        const text = await options.locator('button').nth(i).textContent();
        if(text.trim() === "India"){
            await options.locator('button').nth(i).click();
            break;
        }
    }
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
    //await page.waitForLoadState('networkidle');
    await page.locator('p').last().waitFor();
    //await page.pause();
    
    await page.locator('.action__submit').click();
    await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
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
