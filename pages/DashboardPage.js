const{expect} = require('@playwright/test');

class DashboardPage {
    constructor(page){
        this.page = page;
        this.dashBoardHeader = page.getByText('Dashboard').first();
        this.userProfileIcon = page.locator('span.oxd-userdropdown-tab');
        this.logoutLink = page.getByText('Logout');
    }
    async verifyDashboardPage(){
        await this.page.waitForSelector('text=Dashboard');
        await expect(this.dashBoardHeader).toBeVisible();
    }

    async logout(){
        await this.userProfileIcon.click();
        await this.page.waitForSelector('text=Logout');
        await this.logoutLink.click();

    }
}

module.exports = {DashboardPage};