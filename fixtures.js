import { test as base } from '@playwright/test';

const test = base.extend({
    testData: async ({ }, use) => {
        await use({
            searchKeyword: 'redmine'
        });
    }
});

export { test };
