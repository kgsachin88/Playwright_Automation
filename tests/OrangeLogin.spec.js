const{expect, test} = require('@playwright/test');
const Creds = require('../TestData/creds.json');

test('OrangeHRM Login Test', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill(process.env.orgcrmUN);
    await page.getByPlaceholder('Password').fill(process.env.orgcrmPWD);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.pause();
    await expect(page.getByText('Dashboard').first()).toBeVisible();
});

test('OrangeHRM Negative invalid Login Test', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill(process.env.orgcrmUN);
    await page.getByPlaceholder('Password').fill(process.env.orgcrmInValidPWD);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForSelector('text=Invalid credentials');
    await expect(page.getByText('Invalid credentials')).toBeVisible();
});