import { test, expect, Page } from '@playwright/test';
import DevicePage from '@pages/deviceTypePage';
import LoginPage from '@pages/LoginPage';
import { BASE_URL, CREATE_DEVICE_TYPE_URL, DEVICE_TYPES_URL } from '../data/constants';
import { existingUserEmail, testPassword, generateRandomModel } from '../data/testData';

test.describe('Device type Tests', () => {

    let page: Page;
    let loginPage: LoginPage;
    let devicePage: DevicePage;
    let modelName: string;

    test.beforeAll(async () => {
        modelName = generateRandomModel();
    });
  
    test.beforeEach(async ({ browser }) => {
      page = await browser.newPage();
      loginPage = new LoginPage(page);
      devicePage = new DevicePage(page);
      await page.goto(BASE_URL);
      await loginPage.clickOnLoginBtn();
      await loginPage.login(existingUserEmail, testPassword);
      await loginPage.clickOnSignInBtn();
    });
  

  test('Create new device type', async () => {
    await page.goto(CREATE_DEVICE_TYPE_URL);
    await devicePage.createDeviceType(modelName);
    await expect(devicePage.getSuccessfulDeviceTypeModal()).toContainText('Created device type'); 
  });

  test('Verify created device type appears in list', async () => {
    await page.goto(DEVICE_TYPES_URL);
    const modelInList = await devicePage.searchDeviceType(modelName);
    await expect(modelInList).toBeVisible();
  });
});