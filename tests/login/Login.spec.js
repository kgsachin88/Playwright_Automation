const { test, expect } = require('../../fixtures/testFixtures.js');

test.describe('OrangeHRM Login TestsSuite', () => {

    // Setup: Navigate to login page before each test
    test.beforeEach('Setup before all tests', async ({ loginPage }) => {
        await loginPage.goto();
    });

    // Test 1: Verify successful login with valid credentials
    test('Login into the orangeCRM Demo Website', async ({ loginPage, dashboardPage }) => {
        // Step 1: Enter valid username and password from environment variables
        await loginPage.login(process.env.orgcrmUN, process.env.orgcrmPWD);
        
        // Step 2: Verify that the dashboard page loads successfully
        await dashboardPage.verifyDashboardPage();
    });

    // Test 2: Verify login fails with invalid credentials
    test('Login into the orangeCRM Demo Website with invalid credentials', async ({ loginPage, dataUtils }) => {
        // Step 1: Generate random username and password
        const randomUsername = dataUtils.randomString();
        const randomPassword = dataUtils.randomString();
        
        // Step 2: Attempt login with invalid credentials
        await loginPage.login(randomUsername, randomPassword);
        
        // Step 3: Verify that error message is displayed
        await loginPage.verifyErrorMessage();
    });

    // Test 3: Verify login validation when no credentials are entered
    test('Login into the orangeCRM Demo Website without entering any credentials', async ({ loginPage }) => {
        // Step 1: Attempt login with empty username and password
        await loginPage.login("", "");
        
        // Step 2: Verify that required field validation messages are displayed
        await loginPage.verifyRequiredFieldMessage();
    });

    // Test 4: Verify forgot password link functionality
    test('Verify Forgot Password Link on Login Page', async ({ loginPage }) => {
        // Step 1: Verify the forgot password link is visible
        // Step 2: Click on the forgot password link
        // Step 3: Verify that the reset password page elements are displayed
        await loginPage.verifyForgotPasswordLink();
    });

    // Test 5: Complete end-to-end login and logout flow
    test('Login functionality e2e --> Login to Logout', async ({ loginPage, dashboardPage }) => {
        // Step 1: Login with valid credentials from environment variables
        await loginPage.login(process.env.orgcrmUN, process.env.orgcrmPWD);
        
        // Step 2: Verify that the dashboard page loads successfully
        await dashboardPage.verifyDashboardPage();
        
        // Step 3: Click on user profile and select logout
        await dashboardPage.logout();
        
        // Step 4: Verify that user is redirected to login page
        await loginPage.verifyLoginPageTitle();
    });

});
