const {expect} = require('@playwright/test');


class LoginPage {
    constructor(page) {
        this.page = page;
        this.userNameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.getByText('Invalid credentials');
        this.requiredFieldMessage = page.getByText('Required', { exact: true });
        this.forgotPasswordLink = page.getByText('Forgot Your Password?');
        this.resetPasswordText = page.getByRole('heading', { name: 'Reset Password' });
        this.resetPasswordButton = page.getByRole('button', { name: /Reset Password/i });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.resetPasswordHeading = page.getByRole('heading', { name: 'Reset Password' });
        this.resetInstructionText = page.getByText('Please enter your username to identify your account to reset your password');
        this.resetUsernameInput = page.getByRole('textbox', { name: 'Username' });
    }
    
    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username, password) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyErrorMessage(){
        await this.page.waitForSelector('text=Invalid credentials');
        await expect(this.errorMessage).toBeVisible();
    } 

    async verifyRequiredFieldMessage(){
        await this.page.waitForSelector('text=Required');
        await expect(this.requiredFieldMessage.first()).toBeVisible();
        await expect(this.requiredFieldMessage).toHaveCount(2); // For both username and password fields
    }

    async verifyForgotPasswordLink(){
        await expect(this.forgotPasswordLink).toBeVisible();
        await this.forgotPasswordLink.click();
        await this.page.waitForSelector('text=Reset Password');
        await expect(this.resetPasswordText).toBeVisible();
        await expect(this.resetPasswordButton).toBeVisible();
    }

    async verifyLoginPageTitle(){
        await expect(this.page).toHaveTitle('OrangeHRM');
    }

    // Password Recovery Methods
    async clickForgotPasswordLink() {
        await this.forgotPasswordLink.waitFor({ state: 'visible', timeout: 10000 });
        await this.forgotPasswordLink.click();
    }

    async verifyPasswordResetPageLayout() {
        // Verify the 'Reset Password' heading is displayed
        await expect(this.resetPasswordHeading).toBeVisible();
        
        // Verify the instruction text is displayed
        await expect(this.resetInstructionText).toBeVisible();
        
        // Verify the username input field is visible
        await expect(this.resetUsernameInput).toBeVisible();
        
        // Verify the 'Cancel' button is visible
        await expect(this.cancelButton).toBeVisible();
        
        // Verify the 'Reset Password' button is visible
        await expect(this.resetPasswordButton).toBeVisible();
    }

    async submitResetPasswordWithEmptyUsername() {
        // Leave the username field empty and click the 'Reset Password' button
        await this.resetPasswordButton.click();
    }

    async verifyEmptyUsernameValidation() {
        // Verify validation error appears
        const errorMessage = this.page.locator('text=Required').first();
        await expect(errorMessage).toBeVisible();
        
        // Verify user remains on the password reset page
        await expect(this.page).toHaveURL(/.*requestPasswordResetCode/);
    }

    async clickCancelOnResetPage() {
        // Click the 'Cancel' button
        await this.cancelButton.click();
    }

    async verifyReturnedToLoginPage() {
        // Verify page navigation back to login page
        await expect(this.page).toHaveURL(/.*auth\/login/);
        
        // Verify Login page is displayed with form fields
        await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
        await expect(this.userNameInput).toBeVisible();
    }

    async verifyPasswordResetPageLoaded() {
        await expect(this.resetPasswordHeading).toBeVisible();
    }
}

module.exports = { LoginPage };