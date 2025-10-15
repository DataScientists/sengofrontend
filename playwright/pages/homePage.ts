import { URL_LIST } from '@data/urls';
import { expect, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(
    page: Page,
    readonly homepageHeading = page.locator('[data-testid="homepageHeading"]')
  ) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(URL_LIST.homePage);
  }

  async expectHomePageElementsToBeVisible() {
    await expect(this.homepageHeading).toBeVisible();
  }
}
