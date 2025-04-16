import { Page } from "@playwright/test";
import * as selectors from "../selectors.json";

export default class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnLoginBtn() {
    await this.page.getByRole("link", { name: "Log In" }).click();
  }

  async clickOnCreateUserBtn() {
    await this.page.locator(selectors.loginSelectors.registerUserBtn).click();
  }

  async login(email: string, password: string) {
    await this.page.fill(selectors.loginSelectors.emailInput, email);
    await this.page.fill(selectors.loginSelectors.passwordInput, password);
  }

  getErrorMessage() {
    return this.page.getByText('Errors'); 
  }

  async clickOnSignInBtn() {
    await this.page.getByRole("button", { name: "Sign In" }).click();
  }

  async clickOnCreateAndSignInBtn() {
    await this.page.getByRole("button", {name : "Create & Sign In"}).click();
  }

  getSuccessfulLoginModal() {
    return this.page.locator('.toast-body');
  }  
}
