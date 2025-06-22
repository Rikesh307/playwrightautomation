import { test, expect, Browser, Page } from '@playwright/test'
import { chromium } from 'playwright'

test('checkbox and radio button Test', async () => {
    const browser: Browser = await chromium.launch({ headless: true});
    const page: Page = await browser.newPage();

    await page.goto("https://api.cogmento.com/register/?lang=en-GB");

    // Wait for the checkbox to be visible before interacting
    const checkbox = page.locator('#ageree');
    await checkbox.waitFor({ state: 'visible', timeout: 10000 });
    await checkbox.check();
    await expect(checkbox).toBeChecked();

    await page.waitForTimeout(5000);

    await browser.close();
});