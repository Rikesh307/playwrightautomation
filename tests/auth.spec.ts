import { test, expect } from '@playwright/test';

function createAuthHeader(username: string, password: string) {
  return 'Basic ' + btoa(username + ':' + password);
}

test('auth test', async ({ page }) => {
  const username = 'admin';
  const password = 'admin';

  // Set the Authorization header
  await page.setExtraHTTPHeaders({ Authorization: createAuthHeader(username, password) });

  // Navigate to the target page
  await page.goto('https://the-internet.herokuapp.com/basic_auth');

  // Validate the authentication success
  const content = await page.textContent('body');
  expect(content).toContain('Congratulations! You must have the proper credentials.');
});