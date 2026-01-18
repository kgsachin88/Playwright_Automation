# OrangeHRM Dashboard Test Plan

## Application Overview

The OrangeHRM Dashboard is the main landing page for authenticated users. It provides quick access to important functionality through widgets including Time at Work tracking, pending actions, quick launch shortcuts, buzz posts from colleagues, employee leave information, and employee distribution charts by sub-unit and location. The dashboard features a comprehensive left sidebar navigation menu with search functionality, user profile management, and integration with all major modules of the OrangeHRM system.

## Test Scenarios

### 1. Dashboard Layout and Navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify dashboard page loads after successful login

**File:** `tests/dashboard/dashboard-load.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index
  2. Enter username 'Admin' and password 'admin123'
  3. Click the Login button
  4. Wait for the dashboard page to fully load

**Expected Results:**
  - Dashboard page loads successfully
  - Page URL is /web/index.php/dashboard/index
  - Dashboard heading is displayed in the top banner
  - All dashboard widgets are visible and rendered

#### 1.2. Verify sidebar navigation menu displays all modules

**File:** `tests/dashboard/sidebar-navigation.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Examine the left sidebar navigation panel
  3. Verify each menu item is visible and accessible
  4. Check that Dashboard menu item is highlighted/active

**Expected Results:**
  - Admin module link is visible
  - PIM module link is visible
  - Leave module link is visible
  - Time module link is visible
  - Recruitment module link is visible
  - My Info module link is visible
  - Performance module link is visible
  - Dashboard module link is visible and active
  - Directory module link is visible
  - Maintenance module link is visible
  - Claim module link is visible
  - Buzz module link is visible
  - OrangeHRM logo/branding is visible in sidebar

#### 1.3. Verify top navigation bar elements

**File:** `tests/dashboard/top-navigation.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. View the top navigation bar
  3. Verify all header elements are present
  4. Check the user profile section in the top-right

**Expected Results:**
  - 'Dashboard' heading is displayed in the top-left
  - 'Upgrade' button is visible in the top-center
  - User profile picture is displayed on the top-right
  - Username 'Ashitosh jagtap' is displayed
  - Top navigation menu button is visible

### 2. Sidebar Functionality

**Seed:** `tests/seed.spec.ts`

#### 2.1. Verify sidebar search filters menu items

**File:** `tests/dashboard/sidebar-search.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Locate the search box in the sidebar
  3. Type 'Admin' in the search field
  4. Verify the menu filters correctly
  5. Clear the search field
  6. Verify all menu items appear again

**Expected Results:**
  - Search box accepts text input
  - Search filters menu to show only 'Admin' item
  - Clear button appears when text is entered
  - Menu items are restored when search is cleared

#### 2.2. Verify each sidebar menu link navigates correctly

**File:** `tests/dashboard/sidebar-navigation-links.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Click on 'Admin' link in sidebar
  3. Verify navigation to Admin module page
  4. Go back to Dashboard
  5. Click on 'PIM' link in sidebar
  6. Verify navigation to PIM module page
  7. Repeat for Leave, Time, Recruitment, My Info, Performance, Directory, Maintenance, Claim, and Buzz modules

**Expected Results:**
  - Admin link navigates to /web/index.php/admin/viewAdminModule
  - PIM link navigates to /web/index.php/pim/viewPimModule
  - Leave link navigates to /web/index.php/leave/viewLeaveModule
  - Time link navigates to /web/index.php/time/viewTimeModule
  - Recruitment link navigates to /web/index.php/recruitment/viewRecruitmentModule
  - My Info link navigates to /web/index.php/pim/viewMyDetails
  - Performance link navigates to /web/index.php/performance/viewPerformanceModule
  - Dashboard link navigates to /web/index.php/dashboard/index
  - Directory link navigates to /web/index.php/directory/viewDirectory
  - Maintenance link navigates to /web/index.php/maintenance/viewMaintenanceModule
  - Claim link navigates to /web/index.php/claim/viewClaimModule
  - Buzz link navigates to /web/index.php/buzz/viewBuzz

#### 2.3. Verify sidebar OrangeHRM branding link

**File:** `tests/dashboard/sidebar-branding.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Locate the OrangeHRM branding/logo link in the sidebar
  3. Click on the branding link
  4. Verify external link behavior

**Expected Results:**
  - OrangeHRM branding is visible in the sidebar
  - Branding link points to https://www.orangehrm.com/
  - Link opens in appropriate manner for external resources

### 3. Dashboard Widgets - Display

**Seed:** `tests/seed.spec.ts`

#### 3.1. Verify Time at Work widget displays correctly

**File:** `tests/dashboard/time-at-work-widget.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Locate the 'Time at Work' widget
  3. Verify all widget components are displayed
  4. Check the widget content

**Expected Results:**
  - 'Time at Work' section header is visible
  - User profile picture is displayed
  - Status shows 'Punched Out'
  - Timestamp is displayed with punch out information
  - '0h 0m Today' is shown
  - 'This Week' section displays date range 'Jan 12 - Jan 18'
  - Weekly hours display shows '0h 0m'
  - Menu button (three dots) is present in the widget

#### 3.2. Verify My Actions widget displays content

**File:** `tests/dashboard/my-actions-widget.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Locate the 'My Actions' widget
  3. Verify the widget content

**Expected Results:**
  - 'My Actions' section header is visible
  - Action item '(1) Pending Self Review' is displayed and clickable
  - Action item '(1) Candidate to Interview' is displayed and clickable
  - Each action item has an associated button/icon

#### 3.3. Verify Quick Launch widget displays all buttons

**File:** `tests/dashboard/quick-launch-widget.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Locate the 'Quick Launch' widget
  3. Verify all quick action buttons are visible

**Expected Results:**
  - 'Quick Launch' section header is visible
  - 'Assign Leave' button is visible and clickable
  - 'Leave List' button is visible and clickable
  - 'Timesheets' button is visible and clickable
  - 'Apply Leave' button is visible and clickable
  - 'My Leave' button is visible and clickable
  - 'My Timesheet' button is visible and clickable

#### 3.4. Verify Buzz Latest Posts widget displays posts

**File:** `tests/dashboard/buzz-widget.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Locate the 'Buzz Latest Posts' widget
  3. Verify the widget displays multiple posts
  4. Check individual post content

**Expected Results:**
  - 'Buzz Latest Posts' section header is visible
  - Multiple buzz posts are displayed
  - Each post shows user profile picture
  - Each post displays author name
  - Each post shows a timestamp
  - Post by 'Ashitosh ashok jagtap' with text 'good morning' is visible
  - Post about baby congratulations is visible
  - Post by 'Sania Shaheen' about snooker is visible
  - Post by 'Rebecca Harmony' with throwback content and image is visible
  - Post by 'Russel Hamilton' with motivational message is visible

#### 3.5. Verify Employees on Leave Today widget

**File:** `tests/dashboard/leave-today-widget.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Locate the 'Employees on Leave Today' widget
  3. Verify the widget content

**Expected Results:**
  - 'Employees on Leave Today' header is visible
  - 'No Employees are on Leave Today' message is displayed
  - No Content icon is visible
  - Menu button is present in the widget header

#### 3.6. Verify Employee Distribution by Sub Unit widget

**File:** `tests/dashboard/subunit-distribution-widget.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Locate the 'Employee Distribution by Sub Unit' widget
  3. Verify all sub-unit items are listed

**Expected Results:**
  - 'Employee Distribution by Sub Unit' header is visible
  - 'Human Resources' sub-unit is displayed and clickable
  - 'Engineering' sub-unit is displayed and clickable
  - 'Administration' sub-unit is displayed and clickable
  - 'Unassigned' sub-unit is displayed and clickable

#### 3.7. Verify Employee Distribution by Location widget

**File:** `tests/dashboard/location-distribution-widget.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Locate the 'Employee Distribution by Location' widget
  3. Verify all location items are listed

**Expected Results:**
  - 'Employee Distribution by Location' header is visible
  - 'Texas R&D' location is displayed and clickable
  - 'New York Sales Office' location is displayed and clickable
  - 'Unassigned' location is displayed and clickable

### 4. Dashboard Widgets - Interactions

**Seed:** `tests/seed.spec.ts`

#### 4.1. Verify Quick Launch buttons navigate to correct pages

**File:** `tests/dashboard/quick-launch-navigation.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Click on 'Assign Leave' button in Quick Launch
  3. Verify navigation to Assign Leave page
  4. Go back to Dashboard
  5. Click on 'Leave List' button
  6. Verify navigation to Leave List page
  7. Go back and repeat for 'Timesheets', 'Apply Leave', 'My Leave', and 'My Timesheet' buttons

**Expected Results:**
  - 'Assign Leave' button navigates to /web/index.php/leave/assignLeave page
  - 'Leave List' button navigates to correct Leave List page
  - 'Timesheets' button navigates to correct Timesheets page
  - 'Apply Leave' button navigates to correct Apply Leave page
  - 'My Leave' button navigates to correct My Leave page
  - 'My Timesheet' button navigates to correct My Timesheet page
  - All navigation occurs without errors

#### 4.2. Verify My Actions items are clickable

**File:** `tests/dashboard/my-actions-interactions.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Click on '(1) Pending Self Review' action item
  3. Verify appropriate page loads
  4. Go back to Dashboard
  5. Click on '(1) Candidate to Interview' action item
  6. Verify appropriate page loads

**Expected Results:**
  - 'Pending Self Review' action navigates to Performance module
  - 'Candidate to Interview' action navigates to Recruitment module
  - No console errors occur during navigation

#### 4.3. Verify Buzz posts are clickable

**File:** `tests/dashboard/buzz-interactions.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Click on a buzz post user profile
  3. Verify appropriate interaction or navigation
  4. Go back to Dashboard
  5. Click on buzz post author name
  6. Verify appropriate interaction

**Expected Results:**
  - Buzz post elements are clickable
  - User profile links are responsive
  - Posts are interactive without console errors

### 5. User Profile and Account Management

**Seed:** `tests/seed.spec.ts`

#### 5.1. Verify user profile dropdown menu

**File:** `tests/dashboard/profile-dropdown.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Click on the user profile section in the top-right corner
  3. Verify the dropdown menu appears
  4. Check all menu options are visible

**Expected Results:**
  - User profile dropdown menu opens
  - 'About' menu item is visible
  - 'Support' menu item is visible
  - 'Change Password' menu item is visible
  - 'Logout' menu item is visible

#### 5.2. Verify logout functionality

**File:** `tests/dashboard/logout-functionality.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Click on the user profile in the top-right corner
  3. Click on 'Logout' option
  4. Wait for redirect
  5. Verify the current page

**Expected Results:**
  - User is redirected to login page
  - Page URL is /web/index.php/auth/login
  - Session is cleared
  - Cannot access dashboard without re-login

#### 5.3. Verify Change Password option

**File:** `tests/dashboard/change-password.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Click on the user profile dropdown
  3. Click on 'Change Password' option
  4. Verify the change password page opens

**Expected Results:**
  - 'Change Password' option is accessible
  - Change password page loads correctly

#### 5.4. Verify About option

**File:** `tests/dashboard/about-option.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Click on the user profile dropdown
  3. Click on 'About' option
  4. Verify the about dialog/page appears

**Expected Results:**
  - 'About' option is accessible
  - About information is displayed

### 6. Page Responsiveness and Performance

**Seed:** `tests/seed.spec.ts`

#### 6.1. Verify dashboard page loads within acceptable time

**File:** `tests/dashboard/page-load-performance.spec.ts`

**Steps:**
  1. Navigate to dashboard URL
  2. Login with credentials
  3. Measure page load time from navigation to full dashboard display
  4. Verify no console errors during load

**Expected Results:**
  - Dashboard page loads within 3 seconds
  - All widgets are rendered
  - No network errors in console
  - No JavaScript errors reported

#### 6.2. Verify dashboard content loads on scroll

**File:** `tests/dashboard/scroll-loading.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Scroll to the top of the page
  3. Verify Time at Work widget is visible
  4. Scroll to the middle of the page
  5. Verify Quick Launch and Buzz widgets are visible
  6. Scroll to the bottom of the page
  7. Verify Employee Distribution widgets are visible

**Expected Results:**
  - All widgets load correctly
  - Content is properly scrollable
  - No layout shift or loading issues occur

### 7. Error Handling and Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 7.1. Verify dashboard behavior with invalid session

**File:** `tests/dashboard/invalid-session.spec.ts`

**Steps:**
  1. Navigate directly to dashboard URL without login
  2. Verify the page behavior

**Expected Results:**
  - User is redirected to login page
  - Page URL becomes /web/index.php/auth/login
  - No dashboard content is displayed

#### 7.2. Verify dashboard handles missing widget data

**File:** `tests/dashboard/missing-data.spec.ts`

**Steps:**
  1. Login to the dashboard
  2. Observe the 'Employees on Leave Today' widget
  3. Verify proper handling when no data is available

**Expected Results:**
  - Widget displays 'No Employees are on Leave Today' message
  - No Content icon is shown
  - No console errors occur
  - Widget maintains proper layout
