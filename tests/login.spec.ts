import { test, expect, Page } from '@playwright/test';
import LoginPage from '@pages/LoginPage';
import { BASE_URL } from '../data/constants';
import { existingUserEmail, randomEmail, testPassword } from '../data/testData';

test.describe('Login Tests', () => {

  let loginPage: LoginPage;
  
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(BASE_URL);
  });

  test('Error message is displayed when user does not exist', async () => {
    await loginPage.clickOnLoginBtn();
    await loginPage.login(randomEmail, testPassword);
    await loginPage.clickOnSignInBtn();
    await expect(loginPage.getErrorMessage()).toBeVisible(); 
  });

  test('Successful login', async () => {
    await loginPage.clickOnLoginBtn();
    await loginPage.login(existingUserEmail, testPassword);
    await loginPage.clickOnSignInBtn();
    await expect(loginPage.getSuccessfulLoginModal()).toContainText('Logged in'); 
  });

  test('Create new user', async () => {
    await loginPage.clickOnLoginBtn();
    await loginPage.clickOnCreateUserBtn();
    await loginPage.login(randomEmail, testPassword);
    await loginPage.clickOnCreateAndSignInBtn();
    await expect(loginPage.getSuccessfulLoginModal()).toContainText('Logged in');
  });
});
