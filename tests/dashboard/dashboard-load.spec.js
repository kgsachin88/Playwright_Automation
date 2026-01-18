const { test, expect } = require('../../fixtures/testFixtures.js');

test.describe('Dashboard Layout and Navigation', () => {
    
    test.beforeEach('Setup before all tests', async ({ loginPage }) => {
        await loginPage.goto();
    });

    test('1.1: Verify dashboard page loads after successful login', async ({ loginPage, dashboardPage }) => {
        // Step 1: Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index
        // Step 2: Enter username 'Admin' and password 'admin123'
        // Step 3: Click the Login button
        await loginPage.login(process.env.orgcrmUN, process.env.orgcrmPWD);
        
        // Step 4: Wait for the dashboard page to fully load
        await dashboardPage.waitForDashboardLoad();
        
        // Expected Results:
        // - Dashboard page loads successfully
        await dashboardPage.verifyDashboardPage();
        
        // - Page URL is /web/index.php/dashboard/index
        await dashboardPage.verifyDashboardUrl();
        
        // - Dashboard heading is displayed in the top banner
        await dashboardPage.verifyDashboardHeading();
        
        // - All dashboard widgets are visible and rendered
        await dashboardPage.verifyAllDashboardWidgetsVisible();
    });

    test('1.2: Verify sidebar navigation menu displays all modules', async ({ loginPage, dashboardPage }) => {
        // Step 1: Login to the dashboard
        await loginPage.login(process.env.orgcrmUN, process.env.orgcrmPWD);
        await dashboardPage.waitForDashboardLoad();
        
        // Step 2: Examine the left sidebar navigation panel
        // Step 3: Verify each menu item is visible and accessible
        // Expected Results: Admin module link is visible...
        await dashboardPage.verifySidebarMenuItemsVisible();
    });

    test('1.3: Verify top navigation bar elements', async ({ loginPage, dashboardPage }) => {
        // Step 1: Login to the dashboard
        await loginPage.login(process.env.orgcrmUN, process.env.orgcrmPWD);
        await dashboardPage.waitForDashboardLoad();
        
        // Step 2: View the top navigation bar
        // Step 3: Verify all header elements are present
        // Expected Results:
        // - 'Dashboard' heading is displayed in the top-left
        // - 'Upgrade' button is visible in the top-center
        // - User profile picture is displayed on the top-right
        // - Username is displayed
        // - Top navigation menu button is visible
        await dashboardPage.verifyTopNavigationBar();
        await dashboardPage.verifyDashboardHeadingInTopBar();
        await dashboardPage.verifyUpgradeButton();
        
        // Step 4: Check the user profile section in the top-right
        await dashboardPage.verifyUserProfileInTopRight();
    });
});