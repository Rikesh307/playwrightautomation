import { test, expect, Browser, Page } from '@playwright/test';
import path from 'path';
import { chromium } from 'playwright';

test('Single File Upload ', async () => {
  const browser: Browser = await chromium.launch({ headless: true });
  const page: Page = await browser.newPage();

  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

  // Update these paths to match your local files relative to your test script
  const filesToUpload = [
    path.join(__dirname, 'upload_files', '133858519540403404.jpg'),
    path.join(__dirname, 'upload_files', 'test_data.csv'),
    path.join(__dirname, 'upload_files', 'cookies.txt'),
  ];

  await page.locator("input[name='filesToUpload']").setInputFiles(filesToUpload);

  await page.waitForTimeout(4000);

  // Deselect files example
  await page.locator("input[name='filesToUpload']").setInputFiles([]);

  await page.waitForTimeout(5000);

  await browser.close();
});