import { URL_LIST } from '@data/urls';
import { HomePage } from '@pages/homePage';
import { test } from 'utils/testWithPermission';

test.use({ permissionName: 'admin' });

test('TC: Correct information on dashboard home page #e2e', async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto(URL_LIST.homePage);

  await homePage.expectHomePageElementsToBeVisible();
});
