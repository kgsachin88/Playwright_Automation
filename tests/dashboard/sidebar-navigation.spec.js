const { test, expect } = require('../../fixtures/testFixtures.js');

test.describe('Dashboard Sidebar Navigation Links', () => {
    
    test.beforeEach('Setup before all tests', async ({ loginPage, dashboardPage }) => {
        await loginPage.goto();
        await loginPage.login(process.env.orgcrmUN, process.env.orgcrmPWD);
        await dashboardPage.waitForDashboardLoad();
    });

    test('2.1: Verify Admin module navigation', async ({ dashboardPage, page }) => {
        await dashboardPage.clickAdminModule();
        await expect(page).toHaveURL(/.*\/admin\//);
    });

    test('2.2: Verify PIM module navigation', async ({ dashboardPage, page }) => {
        await dashboardPage.clickPimModule();
        await expect(page).toHaveURL(/.*\/pim\//);
    });

    test('2.3: Verify Leave module navigation', async ({ dashboardPage, page }) => {
        await dashboardPage.clickLeaveModule();
        await expect(page).toHaveURL(/.*\/leave\//);
    });

    test('2.4: Verify Time module navigation', async ({ dashboardPage, page }) => {
        await dashboardPage.clickTimeModule();
        await expect(page).toHaveURL(/.*\/time\//);
    });

    test('2.5: Verify Recruitment module navigation', async ({ dashboardPage, page }) => {
        await dashboardPage.clickRecruitmentModule();
        await expect(page).toHaveURL(/.*\/recruitment\//);
    });

    test('2.6: Verify My Info module navigation', async ({ dashboardPage, page }) => {
        await dashboardPage.clickMyInfoModule();
        await expect(page).toHaveURL(/.*\/pim\//);
    });

    test('2.7: Verify Performance module navigation', async ({ dashboardPage, page }) => {
        await dashboardPage.clickPerformanceModule();
        await expect(page).toHaveURL(/.*\/performance\//);
    });

    test('2.8: Verify Directory module navigation', async ({ dashboardPage, page }) => {
        await dashboardPage.clickDirectoryModule();
        await expect(page).toHaveURL(/.*\/directory\//);
    });

    test('2.9: Verify Maintenance module navigation', async ({ dashboardPage, page }) => {
        await dashboardPage.clickMaintenanceModule();
        await expect(page).toHaveURL(/.*\/maintenance\//);
    });

    test('2.10: Verify Claim module navigation', async ({ dashboardPage, page }) => {
        await dashboardPage.clickClaimModule();
        await expect(page).toHaveURL(/.*\/claim\//);
    });

    test('2.11: Verify Buzz module navigation', async ({ dashboardPage, page }) => {
        await dashboardPage.clickBuzzModule();
        await expect(page).toHaveURL(/.*\/buzz\//);
    });

    test('2.12: Verify sidebar branding is visible', async ({ dashboardPage }) => {
        // Expected Results: OrangeHRM branding is visible in the sidebar
        await dashboardPage.verifySidebarBrandingVisible();
    });
});