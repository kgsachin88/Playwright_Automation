const{expect} = require('@playwright/test');

class DashboardPage {
    constructor(page){
        this.page = page;
        this.dashBoardHeader = page.getByText('Dashboard').first();
    }
    async verifyDashboardPage(){
        await this.page.waitForSelector('text=Dashboard');
        await expect(this.dashBoardHeader).toBeVisible();
    }
}

module.exports = {DashboardPage};