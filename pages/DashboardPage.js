const { expect } = require('@playwright/test');

class DashboardPage {
    constructor(page) {
        this.page = page;
        
        // Dashboard Header Elements
        this.dashBoardHeader = page.getByRole('heading', { name: 'Dashboard', level: 6 });
        this.upgradeButton = page.getByRole('button', { name: 'Upgrade' });
        this.userProfileIcon = page.locator('span.oxd-userdropdown-tab');
        this.userProfileImage = page.locator('img[alt="profile picture"]').first();
        this.userNameDisplay = page.getByText(/Ashitosh|Admin/).first();

        // Sidebar Navigation Elements
        this.sidebarSearchBox = page.getByPlaceholder('Search');
        this.sidebarSearchClear = page.locator('button').filter({ has: page.locator('svg') }).nth(1);
        this.adminLink = page.locator('a', { hasText: /^Admin$/ }).first();
        this.pimLink = page.locator('a', { hasText: /^PIM$/ }).first();
        this.leaveLink = page.locator('a', { hasText: /^Leave$/ }).first();
        this.timeLink = page.locator('a', { hasText: /^Time$/ }).first();
        this.recruitmentLink = page.locator('a', { hasText: /^Recruitment$/ }).first();
        this.myInfoLink = page.locator('a', { hasText: /^My Info$/ }).first();
        this.performanceLink = page.locator('a', { hasText: /^Performance$/ }).first();
        this.dashboardLink = page.locator('a', { hasText: /^Dashboard$/ }).first();
        this.directoryLink = page.locator('a', { hasText: /^Directory$/ }).first();
        this.maintenanceLink = page.locator('a', { hasText: /^Maintenance$/ }).first();
        this.claimLink = page.locator('a', { hasText: /^Claim$/ }).first();
        this.buzzLink = page.locator('a', { hasText: /^Buzz$/ }).first();
        this.sidebarLogo = page.locator('img[alt="client brand banner"]');

        // Dashboard Widgets
        this.timeAtWorkWidget = page.locator('text=Time at Work').first();
        this.myActionsWidget = page.locator('text=My Actions').first();
        this.quickLaunchWidget = page.locator('text=Quick Launch').first();
        this.buzzLatestPostsWidget = page.locator('text=Buzz Latest Posts').first();
        this.employeesOnLeaveWidget = page.locator('text=Employees on Leave Today').first();
        this.employeeDistributionBySubunitWidget = page.locator('text=Employee Distribution by Sub Unit').first();
        this.employeeDistributionByLocationWidget = page.locator('text=Employee Distribution by Location').first();

        // User Profile Dropdown
        this.logoutLink = page.getByRole('menuitem', { name: 'Logout' });
        this.aboutLink = page.getByRole('menuitem', { name: 'About' });
        this.supportLink = page.getByRole('menuitem', { name: 'Support' });
        this.changePasswordLink = page.getByRole('menuitem', { name: 'Change Password' });

        // Footer
        this.footerText = page.locator('text=OrangeHRM OS');
    }

    // Dashboard Page Verification Methods
    async verifyDashboardPage() {
        await this.page.waitForSelector('text=Dashboard');
        await expect(this.dashBoardHeader).toBeVisible();
    }

    async verifyDashboardUrl() {
        await expect(this.page).toHaveURL(/.*\/dashboard\/index/);
    }

    async verifyDashboardHeading() {
        await expect(this.dashBoardHeader).toBeVisible();
        const text = await this.dashBoardHeader.textContent();
        expect(text).toBe('Dashboard');
    }

    async verifyAllDashboardWidgetsVisible() {
        await expect(this.timeAtWorkWidget).toBeVisible();
        await expect(this.myActionsWidget).toBeVisible();
        await expect(this.quickLaunchWidget).toBeVisible();
        await expect(this.buzzLatestPostsWidget).toBeVisible();
        await expect(this.employeesOnLeaveWidget).toBeVisible();
        await expect(this.employeeDistributionBySubunitWidget).toBeVisible();
        await expect(this.employeeDistributionByLocationWidget).toBeVisible();
    }

    // Sidebar Navigation Verification Methods
    async verifySidebarMenuItemsVisible() {
        await expect(this.adminLink).toBeVisible();
        await expect(this.pimLink).toBeVisible();
        await expect(this.leaveLink).toBeVisible();
        await expect(this.timeLink).toBeVisible();
        await expect(this.recruitmentLink).toBeVisible();
        await expect(this.myInfoLink).toBeVisible();
        await expect(this.performanceLink).toBeVisible();
        await expect(this.dashboardLink).toBeVisible();
        await expect(this.directoryLink).toBeVisible();
        await expect(this.maintenanceLink).toBeVisible();
        await expect(this.claimLink).toBeVisible();
        await expect(this.buzzLink).toBeVisible();
    }

    async verifyDashboardMenuItemActive() {
        // Dashboard item should have active state
        const dashboardItem = this.page.locator('a:has-text("Dashboard")').first().locator('..');
        const classes = await dashboardItem.getAttribute('class');
        expect(classes).toMatch(/active|selected|current/i);
    }

    async verifySidebarBrandingVisible() {
        await expect(this.sidebarLogo).toBeVisible();
    }

    // Top Navigation Verification Methods
    async verifyTopNavigationBar() {
        await expect(this.dashBoardHeader).toBeVisible();
        await expect(this.upgradeButton).toBeVisible();
        await expect(this.userProfileImage).toBeVisible();
        await expect(this.userNameDisplay).toBeVisible();
    }

    async verifyUpgradeButton() {
        await expect(this.upgradeButton).toBeVisible();
    }

    async verifyUserProfileInTopRight() {
        await expect(this.userProfileIcon).toBeVisible();
        await expect(this.userNameDisplay).toBeVisible();
    }

    async verifyDashboardHeadingInTopBar() {
        const text = await this.dashBoardHeader.textContent();
        expect(text.toLowerCase()).toContain('dashboard');
    }

    // Sidebar Search Methods
    async searchSidebarMenu(searchTerm) {
        await this.sidebarSearchBox.fill(searchTerm);
        await this.page.waitForTimeout(500);
    }

    async verifySidebarSearchFiltersMenu() {
        // After searching for 'Admin', only Admin link should be visible
        await expect(this.adminLink).toBeVisible();
        // Other items should be hidden or not visible
        await expect(this.pimLink).not.toBeVisible();
    }

    async clearSidebarSearch() {
        // Click the clear button or clear the search box
        const searchBox = this.sidebarSearchBox;
        await searchBox.clear();
        await this.page.waitForTimeout(500);
    }

    async verifySearchClearsFilters() {
        // After clearing search, all menu items should be visible again
        await expect(this.adminLink).toBeVisible();
        await expect(this.pimLink).toBeVisible();
        await expect(this.leaveLink).toBeVisible();
    }

    // Navigation Methods
    async clickAdminModule() {
        await this.adminLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickPimModule() {
        await this.pimLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickLeaveModule() {
        await this.leaveLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickTimeModule() {
        await this.timeLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickRecruitmentModule() {
        await this.recruitmentLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickMyInfoModule() {
        await this.myInfoLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickPerformanceModule() {
        await this.performanceLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickDirectoryModule() {
        await this.directoryLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickMaintenanceModule() {
        await this.maintenanceLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickClaimModule() {
        await this.claimLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickBuzzModule() {
        await this.buzzLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickDashboardModule() {
        await this.dashboardLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickSidebarBranding() {
        await this.sidebarLogo.click();
    }

    // User Profile Dropdown Methods
    async openUserProfileDropdown() {
        await this.userProfileIcon.click();
        await this.page.waitForSelector('[role="menu"]');
    }

    async verifyProfileDropdownMenuVisible() {
        await expect(this.aboutLink).toBeVisible();
        await expect(this.supportLink).toBeVisible();
        await expect(this.changePasswordLink).toBeVisible();
        await expect(this.logoutLink).toBeVisible();
    }

    async verifyAboutOption() {
        await expect(this.aboutLink).toBeVisible();
    }

    async verifySupportOption() {
        await expect(this.supportLink).toBeVisible();
    }

    async verifyChangePasswordOption() {
        await expect(this.changePasswordLink).toBeVisible();
    }

    async verifyLogoutOption() {
        await expect(this.logoutLink).toBeVisible();
    }

    async logout() {
        await this.userProfileIcon.click();
        await this.page.waitForSelector('text=Logout');
        await this.logoutLink.click();
    }

    async clickChangePassword() {
        await this.changePasswordLink.click();
    }

    async clickAbout() {
        await this.aboutLink.click();
    }

    async clickSupport() {
        await this.supportLink.click();
    }

    // Footer Verification Methods
    async verifyFooterVisible() {
        await expect(this.footerText).toBeVisible();
    }

    // Utility Methods
    async waitForDashboardLoad() {
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = { DashboardPage };