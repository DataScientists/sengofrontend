import { LoginPage } from '@pages/loginPage';
import { test } from '@playwright/test';

let login: LoginPage;

test.beforeEach(({ page }) => {
  login = new LoginPage(page);
});
test('TC: Login as admin #e2e', async () => {
  await login.loginViaUI(process.env.E2E_USER_EMAIL!, process.env.E2E_USER_PASSWORD!);
});
