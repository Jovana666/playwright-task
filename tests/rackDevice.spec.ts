import { test, expect, Page } from "@playwright/test";
import LoginPage from "@pages/LoginPage";
import RackDetailPage from "@pages/rackDetailsPage";
import { BASE_URL, RACKS_URL } from "../data/constants";
import { existingUserEmail, testPassword } from "../data/testData";

test.describe("Rack Device Tests", () => {
  let page: Page;
  let loginPage: LoginPage;
  let rackDetailPage: RackDetailPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    rackDetailPage = new RackDetailPage(page);
    await page.goto(BASE_URL);
    await loginPage.clickOnLoginBtn();
    await loginPage.login(existingUserEmail, testPassword);
    await loginPage.clickOnSignInBtn();
  });

  test('Add device to rack from front view with available unit space', async () => {
    await page.goto(RACKS_URL);
    await rackDetailPage.goToRackDetailsPage();
    await rackDetailPage.checkEmptySlot();
    await rackDetailPage.createADevice();
  });

  test('Add device to rack from rear view with available unit space', async () => {
    // To DO
  });

  test('Fail to add device to rack if unit space is insufficient from front view', async () => {
    // To DO
  });

  test('Fail to add device to rack if unit space is insufficient from rear view', async () => {
    // To DO
  });
});
