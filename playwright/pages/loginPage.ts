import { HomePage } from '@pages/homePage';
import { expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly homePage: HomePage;

  constructor(
    page: Page,
    readonly emailInput = page.locator('[data-testid="emailInput"]'),
    readonly passwordInput = page.locator('[data-testid="passwordInput"]'),
    readonly signInButton = page.locator('[data-testid="loginFormButton"]')
  ) {
    this.page = page;
    this.homePage = new HomePage(page);
  }

  async loginViaUI(userEmail: string, userPassword: string) {
    await this.page.goto(process.env.BASE_URL!);
    await this.typeEmail(userEmail);
    await this.typePassword(userPassword);
    await this.clickSignInButton();
    await expect(this.homePage.homepageHeading).toContainText('Dashboard', {
      timeout: 15000,
    });
  }

  async typeEmail(email: string) {
    await this.emailInput.waitFor({ state: 'visible', timeout: 15000 });
    await this.emailInput.fill(email);
  }

  async typePassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }
}
