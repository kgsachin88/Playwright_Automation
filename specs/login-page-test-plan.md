# OrangeHRM Login Page Test Plan

## Application Overview

The OrangeHRM application login page is the primary entry point for users to access the system. This test plan covers comprehensive scenarios for the authentication functionality, including happy path login, validation, error handling, and password recovery features. The application features a clean login interface with username and password fields, a login button, a forgot password link, and displays default credentials for demo purposes.

## Test Scenarios

### 1. Login Page - Happy Path

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful Login with Valid Credentials

**File:** `tests/login/happy-path/successful-login.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the login page displays with 'Login' heading visible
  3. Verify the username field is visible and focused
  4. Verify the password field is visible
  5. Verify the Login button is visible and enabled
  6. Verify the 'Forgot your password?' link is visible
  7. Enter 'Admin' in the username field
  8. Enter 'admin123' in the password field
  9. Click the Login button
  10. Wait for the page to navigate to the dashboard

**Expected Results:**
  - Login page loads successfully
  - All form elements are properly displayed
  - Credentials are accepted
  - User is redirected to the dashboard page
  - Page URL changes to dashboard/index

#### 1.2. Verify Default Credentials Display

**File:** `tests/login/happy-path/verify-default-credentials.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the login page displays
  3. Look for the help text section
  4. Verify the default credentials are displayed with 'Username : Admin'
  5. Verify the default credentials are displayed with 'Password : admin123'

**Expected Results:**
  - Login page displays successfully
  - Default credentials help text is visible to users
  - Username help text shows 'Username : Admin'
  - Password help text shows 'Password : admin123'

### 2. Login Page - Validation

**Seed:** `tests/seed.spec.ts`

#### 2.1. Empty Username Field Validation

**File:** `tests/login/validation/empty-username.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the login page displays
  3. Leave the username field empty
  4. Enter 'admin123' in the password field
  5. Click the Login button
  6. Verify the validation error for username field appears

**Expected Results:**
  - Login page loads successfully
  - 'Required' validation message appears below the username field
  - Login button is clickable
  - User is not redirected to dashboard

#### 2.2. Empty Password Field Validation

**File:** `tests/login/validation/empty-password.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the login page displays
  3. Enter 'Admin' in the username field
  4. Leave the password field empty
  5. Click the Login button
  6. Verify the validation error for password field appears

**Expected Results:**
  - Login page loads successfully
  - 'Required' validation message appears below the password field
  - Login button is clickable
  - User is not redirected to dashboard

#### 2.3. Both Fields Empty Validation

**File:** `tests/login/validation/both-fields-empty.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the login page displays with both fields empty
  3. Click the Login button without entering any data
  4. Verify validation errors appear for both fields

**Expected Results:**
  - Login page loads successfully
  - 'Required' validation message appears below the username field
  - 'Required' validation message appears below the password field
  - Login button remains clickable

### 3. Login Page - Error Handling

**Seed:** `tests/seed.spec.ts`

#### 3.1. Invalid Username and Password

**File:** `tests/login/error-handling/invalid-credentials.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the login page displays
  3. Enter 'invaliduser' in the username field
  4. Enter 'wrongpassword' in the password field
  5. Click the Login button
  6. Wait for the response
  7. Verify an error message appears

**Expected Results:**
  - Login page loads successfully
  - Invalid credentials error message displays: 'Invalid credentials'
  - Error message is visible in an alert box
  - User remains on the login page
  - Form fields retain the entered values

#### 3.2. Invalid Username with Correct Password

**File:** `tests/login/error-handling/invalid-username.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the login page displays
  3. Enter 'wronguser' in the username field
  4. Enter 'admin123' in the password field
  5. Click the Login button
  6. Wait for the response
  7. Verify an error message appears

**Expected Results:**
  - Login page loads successfully
  - Invalid credentials error message displays: 'Invalid credentials'
  - User remains on the login page
  - Error message does not reveal which field is incorrect

#### 3.3. Valid Username with Incorrect Password

**File:** `tests/login/error-handling/invalid-password.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the login page displays
  3. Enter 'Admin' in the username field
  4. Enter 'wrongpassword' in the password field
  5. Click the Login button
  6. Wait for the response
  7. Verify an error message appears

**Expected Results:**
  - Login page loads successfully
  - Invalid credentials error message displays: 'Invalid credentials'
  - User remains on the login page
  - Error message does not reveal which field is incorrect

### 4. Login Page - Password Recovery

**Seed:** `tests/seed.spec.ts`

#### 4.1. Navigate to Password Reset Page

**File:** `tests/login/password-recovery/navigate-to-reset.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the login page displays
  3. Verify the 'Forgot your password?' link is visible
  4. Click on the 'Forgot your password?' link
  5. Wait for the password reset page to load

**Expected Results:**
  - Login page loads successfully
  - 'Forgot your password?' link is clickable
  - User is navigated to the password reset page
  - Page URL changes to auth/requestPasswordResetCode
  - 'Reset Password' heading is displayed

#### 4.2. Password Reset Page Layout Verification

**File:** `tests/login/password-recovery/reset-page-layout.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Click on the 'Forgot your password?' link
  3. Wait for the password reset page to load
  4. Verify the 'Reset Password' heading is displayed
  5. Verify the instruction text is displayed
  6. Verify the username input field is visible
  7. Verify the 'Cancel' button is visible
  8. Verify the 'Reset Password' button is visible

**Expected Results:**
  - Password reset page loads successfully
  - 'Reset Password' heading (level h6) is displayed
  - Instruction text reads: 'Please enter your username to identify your account to reset your password'
  - Username input field is visible and accessible
  - 'Cancel' button is visible and clickable
  - 'Reset Password' button is visible and clickable

#### 4.3. Empty Username Validation on Reset Page

**File:** `tests/login/password-recovery/reset-empty-username.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Click on the 'Forgot your password?' link
  3. Wait for the password reset page to load
  4. Leave the username field empty
  5. Click the 'Reset Password' button
  6. Verify validation error appears

**Expected Results:**
  - Password reset page loads successfully
  - 'Required' validation message appears below the username field
  - User remains on the password reset page
  - Reset Password button remains clickable

#### 4.4. Cancel Password Reset and Return to Login

**File:** `tests/login/password-recovery/cancel-reset.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Click on the 'Forgot your password?' link
  3. Wait for the password reset page to load
  4. Click the 'Cancel' button
  5. Wait for page navigation

**Expected Results:**
  - Password reset page loads successfully
  - Clicking Cancel button returns user to login page
  - Page URL changes back to auth/login
  - Login page is displayed with form fields empty

### 5. Login Page - UI and Navigation

**Seed:** `tests/seed.spec.ts`

#### 5.1. Verify Page Elements Display

**File:** `tests/login/ui/page-elements.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the company branding image is displayed
  3. Verify the 'Login' heading is visible
  4. Verify the username field label is displayed
  5. Verify the password field label is displayed
  6. Verify the Login button displays correct text
  7. Verify footer with version information is visible
  8. Verify OrangeHRM OS version is displayed

**Expected Results:**
  - Login page loads successfully
  - Company branding image is visible
  - 'Login' heading is displayed correctly
  - Username field has proper label
  - Password field has proper label
  - Login button displays 'Login' text
  - Footer displays 'OrangeHRM OS 5.8'
  - Copyright information is displayed

#### 5.2. Verify Social Media Links

**File:** `tests/login/ui/social-media-links.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the LinkedIn link is visible
  3. Verify the Facebook link is visible
  4. Verify the Twitter link is visible
  5. Verify the YouTube link is visible
  6. Verify each link has the correct URL

**Expected Results:**
  - Login page loads successfully
  - LinkedIn social link is visible and clickable
  - Facebook social link is visible and clickable
  - Twitter social link is visible and clickable
  - YouTube social link is visible and clickable
  - All links have valid URLs pointing to their respective social media pages

#### 5.3. Verify OrangeHRM Copyright Link

**File:** `tests/login/ui/copyright-link.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the copyright information is displayed
  3. Verify the 'OrangeHRM, Inc' link is present in the copyright text
  4. Verify the link points to the correct URL

**Expected Results:**
  - Login page loads successfully
  - Copyright text displays '© 2005 - 2026'
  - 'OrangeHRM, Inc' link is clickable
  - Link URL points to http://www.orangehrm.com

### 6. Login Page - Field Interactions

**Seed:** `tests/seed.spec.ts`

#### 6.1. Tab Navigation Between Fields

**File:** `tests/login/interactions/tab-navigation.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the username field is focused on page load
  3. Enter 'Admin' in the username field
  4. Press Tab to move to the password field
  5. Verify the password field now has focus
  6. Enter 'admin123' in the password field
  7. Press Tab to move to the Login button

**Expected Results:**
  - Login page loads with username field focused
  - Tab key navigation works correctly between fields
  - Password field receives focus after Tab from username
  - Login button can be focused using Tab key
  - Form supports keyboard navigation

#### 6.2. Enter Key Submit on Password Field

**File:** `tests/login/interactions/enter-submit.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Enter 'Admin' in the username field
  3. Enter 'admin123' in the password field
  4. Press Enter while focused on the password field
  5. Wait for the form submission

**Expected Results:**
  - Form submits successfully when Enter is pressed on password field
  - User is redirected to the dashboard
  - Page URL changes to dashboard/index
  - Form submission works via keyboard

#### 6.3. Case Sensitivity Testing

**File:** `tests/login/interactions/case-sensitivity.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Enter 'admin' (lowercase) in the username field
  3. Enter 'admin123' in the password field
  4. Click the Login button
  5. Wait for the response
  6. Navigate back to login page
  7. Enter 'ADMIN' (uppercase) in the username field
  8. Enter 'admin123' in the password field
  9. Click the Login button

**Expected Results:**
  - Username field is case-sensitive
  - Lowercase 'admin' returns invalid credentials error
  - Uppercase 'ADMIN' returns invalid credentials error
  - Only 'Admin' with capital A is the correct username
  - Form rejects case-insensitive username variations

### 7. Login Page - Security

**Seed:** `tests/seed.spec.ts`

#### 7.1. Password Field Masking

**File:** `tests/login/security/password-masking.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the password field is visible
  3. Enter 'admin123' in the password field
  4. Verify the password characters are masked and not displayed as plain text

**Expected Results:**
  - Login page loads successfully
  - Password field type is 'password' (masked)
  - Characters entered in password field are hidden with bullets or asterisks
  - Password is not visible in plain text

#### 7.2. Error Message Generic Message on Invalid Credentials

**File:** `tests/login/security/generic-error-message.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Enter 'Admin' in the username field
  3. Enter 'wrongpassword' in the password field
  4. Click the Login button
  5. Observe the error message
  6. Verify the error message does not specify if username or password is incorrect

**Expected Results:**
  - Invalid credentials error message is displayed
  - Error message shows: 'Invalid credentials'
  - Error message does not disclose whether username or password is incorrect
  - Generic error message prevents account enumeration attacks
