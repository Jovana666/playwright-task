import { Page } from "@playwright/test";
import * as selectors from "../data/selectors.json";
import { ADD_DEVICE_URL } from "data/constants";

export default class RackDetailPage {
    private page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }

    async goToRackDetailsPage() {
      await this.page.locator(selectors.rackSelectors.rackOption).click();
    }

    async checkEmptySlot() {
      await this.page.goto(ADD_DEVICE_URL);
      const addDeviceLink =(this.page.locator('a', { hasText: 'add device' })
    ).first();
      const html = await addDeviceLink.innerHTML();
console.log(html);
      addDeviceLink.click();
      console.log('clicked on list');

    //   if (addDeviceLink !== undefined) {
    //     addDeviceLink.click();
    //   }

    // }
    }
      async createADevice() {
        await this.page.locator(selectors.rackSelectors.deviceRoleInput).waitFor({ state: 'visible' });
        await this.page.locator(selectors.rackSelectors.deviceRoleInput).click();

      }
  }