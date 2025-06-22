import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { chromium } from 'playwright';

test('Sauce Demo login test', async () => {
  const browser: Browser = await chromium.launch({ headless: true });
  const page: Page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');

  const username: Locator = page.locator('#user-name');
  const password: Locator = page.locator('#password');
  const loginButton: Locator = page.locator('#login-button');

  await username.fill('standard_user');
  await password.fill('secret_sauce');
  await loginButton.click();

  // Verify that the page title or header confirms login success
  const inventoryTitle = page.locator('.title');
  await expect(inventoryTitle).toHaveText('Products');

  await page.screenshot({ path: 'saucedemo_homepage.png' });

  // await browser.close();
});
