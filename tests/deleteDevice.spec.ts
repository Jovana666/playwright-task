import { test, expect, Page } from '@playwright/test';
import DeleteDevicePage from '@pages/deleteDevicePage';
import LoginPage from '@pages/LoginPage';
import { BASE_URL, DEVICE_URL } from '../data/constants';
import { existingUserEmail, testPassword, generateRandomModel } from '../data/testData';

test.describe('Delete device and device type Tests', () => {

    let page: Page;
    let loginPage: LoginPage;
    let deleteDevicePage: DeleteDevicePage;

    test.beforeEach(async ({ browser }) => {
      page = await browser.newPage();
      loginPage = new LoginPage(page);
      deleteDevicePage = new DeleteDevicePage(page);
      await page.goto(BASE_URL);
      await loginPage.clickOnLoginBtn();
      await loginPage.login(existingUserEmail, testPassword);
      await loginPage.clickOnSignInBtn();
    });

    
  test('Delete device', async () => {
    await page.goto(DEVICE_URL);
    
  });
});