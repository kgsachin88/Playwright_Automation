const {expect} = require('@playwright/test');


class LoginPage {
    constructor(page) {
        this.page = page;
        this.userNameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
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
    const errorMessage = this.page.getByText('Invalid credentials');
    await this.page.waitForSelector('text=Invalid credentials');
    await expect(errorMessage).toBeVisible();
  } 
}

module.exports = { LoginPage };