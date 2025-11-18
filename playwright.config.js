/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 30000,
  reporter: [
    ['allure-playwright']
  ],
  baseURL: 'https://www.redmine.org/',
  retries: 1,
  testDir: './tests',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
};

module.exports = config;
