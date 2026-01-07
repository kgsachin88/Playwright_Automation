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
        this.resetPasswordText = page.getByRole('heading');
        this.resetPasswordButton = page.getByRole('button', { name: /Reset Password/i });
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

}

module.exports = { LoginPage };