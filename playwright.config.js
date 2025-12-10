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
    viewport: { width: 1280, height: 1280 },
    ignoreHTTPSErrors: true,
  },
};

export default config;
