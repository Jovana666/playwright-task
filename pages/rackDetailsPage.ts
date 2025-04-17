import { Page } from "@playwright/test";
import * as selectors from "../data/selectors.json";

export default class RackDetailPage {
    private page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }

    async goToRackDetailsPage() {
      await this.page.locator(selectors.rackSelectors.rackOption).click();
    }
}