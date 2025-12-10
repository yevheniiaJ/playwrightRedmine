import { test as base } from '@playwright/test';
import { ProjectManagement } from './pages/projectManagement.js';
import { CheckoutPage } from './pages/checkoutPage.js';
import { MainPage } from './pages/mainPage.js';
import { BasePage } from './pages/basePage.js';

const test = base.extend({
    testData: async ({ }, use) => {
        await use({
            searchKeyword: 'redmine'
        });
    },

    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
      },

      checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
      },

      projectManagement: async ({ page }, use) => {
        const projectManagement = new ProjectManagement(page);
        await use(projectManagement);
      },

      basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
      }
});

export { test };
