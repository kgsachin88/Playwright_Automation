const { test, expect } = require('../../fixtures/testFixtures.js');

test.describe('Login Page - Password Recovery', () => {
    
    test.beforeEach('Setup before all tests', async ({ loginPage }) => {
        await loginPage.goto();
    });

    test('Password Reset Page Layout Verification', async ({ loginPage }) => {
        // Click on the 'Forgot your password?' link
        await loginPage.clickForgotPasswordLink();
        
        // Verify the password reset page layout
        await loginPage.verifyPasswordResetPageLayout();
    });

    test('Empty Username Validation on Reset Page', async ({ loginPage }) => {
        // Click on the 'Forgot your password?' link
        await loginPage.clickForgotPasswordLink();
        
        // Wait for the reset page to load
        await loginPage.verifyPasswordResetPageLoaded();
        
        // Leave the username field empty and click the 'Reset Password' button
        await loginPage.submitResetPasswordWithEmptyUsername();
        
        // Verify validation error appears and user remains on reset page
        await loginPage.verifyEmptyUsernameValidation();
    });

    test('Navigate to Password Reset Page', async ({ loginPage }) => {
        // Click on the 'Forgot your password?' link
        await loginPage.clickForgotPasswordLink();
        
        // Verify the password reset page layout is displayed
        await loginPage.verifyPasswordResetPageLayout();
    });

    test('Cancel Password Reset and Return to Login', async ({ loginPage }) => {
        // Click on the 'Forgot your password?' link
        await loginPage.clickForgotPasswordLink();
        
        // Wait for the reset page to load
        await loginPage.verifyPasswordResetPageLoaded();
        
        // Click the 'Cancel' button
        await loginPage.clickCancelOnResetPage();
        
        // Verify page navigation back to login page
        await expect(loginPage.page).toHaveURL(/.*auth\/login/);
        
        // Verify Login page is displayed with form fields
        await expect(loginPage.page.getByRole('heading', { name: 'Login' })).toBeVisible();
        await expect(loginPage.userNameInput).toBeVisible();
    });
});
