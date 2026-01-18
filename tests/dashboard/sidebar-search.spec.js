const { test, expect } = require('../../fixtures/testFixtures.js');

test.describe('Dashboard Sidebar Search Functionality', () => {
    
    test.beforeEach('Setup before all tests', async ({ loginPage, dashboardPage }) => {
        await loginPage.goto();
        await loginPage.login(process.env.orgcrmUN, process.env.orgcrmPWD);
        await dashboardPage.waitForDashboardLoad();
    });

    test('2.3: Verify sidebar search filters menu items', async ({ dashboardPage }) => {
        // Step 1: Login to the dashboard (done in beforeEach)
        // Step 2: Locate the search box in the sidebar
        // Step 3: Type 'Admin' in the search field
        await dashboardPage.searchSidebarMenu('Admin');
        
        // Step 4: Verify the menu filters correctly
        // Expected Results:
        // - Search box accepts text input
        // - Search filters menu to show only 'Admin' item
        await dashboardPage.verifySidebarSearchFiltersMenu();
        
        // Step 5: Clear the search field
        await dashboardPage.clearSidebarSearch();
        
        // Step 6: Verify all menu items appear again
        // Expected Results:
        // - Menu items are restored when search is cleared
        await dashboardPage.verifySearchClearsFilters();
    });
});