import { Page } from "@playwright/test";
import * as selectors from "../data/selectors.json";


export default class DeviceTypePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createDeviceType(modelName: string) {
    await this.page
      .locator(selectors.deviceTypeSelectors.manufacturerDropdown)
      .click();
    await this.page
      .locator(selectors.deviceTypeSelectors.manufacturerOption)
      .click();
    await this.page
      .locator(selectors.deviceTypeSelectors.modelInput)
      .fill(modelName);
      await this.page.locator(selectors.deviceTypeSelectors.slugField).click();
      await this.page.locator(selectors.deviceTypeSelectors.chassisInput).fill('2.0');
      console.log('Creating device type...');
      await this.page.getByRole('button', { name: 'Create', exact: true }).click();
  }

  getSuccessfulDeviceTypeModal() {
    return this.page.locator('.toast-body');
  } 

  async searchDeviceType(modelName: string) {
    const searchInput = this.page.locator(selectors.deviceTypeSelectors.searchDeviceTypesInput);
    await searchInput.fill(modelName);
    const modelInList = this.page.locator(`text=${modelName}`);
    await modelInList.waitFor({ state: 'visible' });
    return modelInList;
    }
}
