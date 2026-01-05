
const { test, expect } = require('../fixtures/testFixtures.js');

test.describe('OrangeHRM Login TestsSuite', () => {


test.beforeEach('Setup before all tests', async ({loginPage}) => {
   await loginPage.goto();
});


test('Login into the orangeCRM Demo Website ',async({loginPage, dashboardPage}) => {
    
    await loginPage.login(process.env.orgcrmUN, process.env.orgcrmPWD);
    await dashboardPage.verifyDashboardPage();
});

test('Login into the orangeCRM Demo Website with invalid credentials',async({loginPage, dataUtils}) => {
    await loginPage.login(dataUtils.randomString(), dataUtils.randomString());
    await loginPage.verifyErrorMessage();
});


});
