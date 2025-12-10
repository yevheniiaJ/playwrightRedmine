import { expect } from '@playwright/test'
import { feature, severity } from 'allure-js-commons';
import { test } from '../fixtures.js'


test.beforeEach(async ({ mainPage }, testInfo) => {
   
    if (testInfo.title.includes('book page')) {
        await mainPage.goto()
        await mainPage.redmineBooksNavigate()
    } else{
        await mainPage.goto()
    }
});

test('TC #1. Verify adding the Redmine to the cart, book page', async ({ mainPage }) => {

    feature('Buying a product');
    severity('critical')

    await mainPage.click(mainPage.addSelectedToCart)
    await expect(mainPage.cartCount).toBeVisible();
});

test('TC #2. Verify the Buy Now functionality, book page', async ({ mainPage, checkoutPage }) => {

    feature('Buying a product');

    await mainPage.buyNowBtn.scrollIntoViewIfNeeded();
    await mainPage.click(mainPage.buyNowBtn)
    await expect(checkoutPage.item).toBeVisible({ timeout: 60000 });
});

test('TC #3. Verify navigation to the Your order page as unauthorized user, book page', async ({ page, mainPage }) => {

    feature('Buying a product');

    await mainPage.click(mainPage.profile)
    await mainPage.click(mainPage.yourOrder)
    expect(page.url()).toContain('login')
});

test('TC #4. Verify deleting the product from the cart, book page', async ({ page, mainPage }) => {

    feature('Buying a product');

    await page.screenshot({ path: 'debug.png', fullPage: true });

    await mainPage.click(mainPage.addSelectedToCart);
    await mainPage.cartIcon.hover({ trial: true });
    await page.waitForTimeout(1000);
    await expect(mainPage.cartDeleteIcon).toBeVisible(); 
    await mainPage.cartDeleteIcon.click({ force: true });
    await expect(mainPage.cartCount).toHaveText('2');
    
});

test('TC #5. Verify navigation to the Project Management, book page', async ({ mainPage, projectManagement }) => {

    feature('Project Management');

    await mainPage.click(mainPage.projectManagement)
    await expect(projectManagement.projectManagementTitle).toBeVisible()
});


test('TC #6. Verify searching the information', async ({ testData, mainPage }) => {

    feature('Search');

    await mainPage.searchField.fill(testData.searchKeyword);
    await mainPage.searchField.press('Enter')
    const count = await mainPage.searchLinks.count()
    expect(count).toBeGreaterThan(0)
    const text = await mainPage.searchLinks.nth(1).innerText()
    expect(text.toLowerCase()).toContain(testData.searchKeyword.toLowerCase())

});
