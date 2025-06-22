import { test, expect, Browser, Page } from '@playwright/test';
import { chromium } from 'playwright';

test('Focus and fill input test on example site', async () => {
  const browser: Browser = await chromium.launch({ headless: true});
  const page: Page = await browser.newPage();

  // I'll use a demo page with an input field for this example:
  await page.goto('https://www.w3schools.com/html/html_forms.asp');

  // Scroll down to the "First name" input field to ensure it's visible
  const inputField = page.locator('input[name="firstname"]');
  await inputField.scrollIntoViewIfNeeded();

  // Focus on the input field
  await inputField.focus();

  // Fill the input field with some text
  await inputField.fill('Playwright Focus Test');

  // Wait so you can see the effect
  await page.waitForTimeout(5000);

  await browser.close();
});