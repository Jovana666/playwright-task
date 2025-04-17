import { Page } from "@playwright/test";
import * as selectors from "../data/selectors.json";

export default class DeleteDevicePage {
    private page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }

    

    async clickOnDeleteBtn() {
        await this.page.getByRole("button", { name: " Delete Selected" }).click();
      }
}