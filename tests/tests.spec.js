import { expect } from '@playwright/test'
import { MainPage } from '../pages/mainPage.js'
import { CheckoutPage } from '../pages/checkoutPage.js';
import { ProjectManagement } from '../pages/projectManagement.js';
import { epic, feature, severity } from 'allure-js-commons';
import { test } from '../fixtures.js'

let mainPage;
let checkoutPage;
let projectManagement;

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    checkoutPage = new CheckoutPage(page);
    projectManagement = new ProjectManagement(page);


    await mainPage.goto();
});

test('TC #1. Verify adding the Redmine to the cart', async ({ }) => {

    feature('Buying a product');
    severity('critical')

    await mainPage.book.click();
    await mainPage.addSelectedToCart.click();
    await expect(mainPage.cartCount).toBeVisible();
});

test('TC #2. Verify the Buy Now functionality', async ({ }) => {

    feature('Buying a product');
    await mainPage.book.click();
    await mainPage.buyNowBtn.click();
    await expect(checkoutPage.item).toBeVisible();
});

test('TC #3. Verify navigation to the Your order page as unauthorized user', async ({ page }) => {

    feature('Buying a product');
    await mainPage.book.click();
    await mainPage.profile.click();
    await mainPage.yourOrder.click();
    expect(page.url()).toContain('login')
});

test('TC #4. Verify deleting the product from the cart', async ({ }) => {

    feature('Buying a product');
    await mainPage.book.click();
    await mainPage.addSelectedToCart.click();
    await mainPage.cartIcon.hover();
    await mainPage.cartDeleteIcon.click()
    await expect(mainPage.cartCount).toHaveText('2');
});

test('TC #5. Verify navigation to the Project Management', async ({ }) => {

    feature('Project Management');
    await mainPage.book.click();
    await mainPage.projectManagement.click()
    await expect(projectManagement.ProjectManagementTitle).toBeVisible()
});

test('TC #6. Verify searching the information', async ({ testData }) => {

    feature('Search');
    await mainPage.searchField.fill(testData.searchKeyword);
    await mainPage.searchField.press('Enter')
    const count = await mainPage.searchLinks.count()
    expect(count).toBeGreaterThan(0)
    const text = await mainPage.searchLinks.nth(1).innerText()
    expect(text.toLowerCase()).toContain(testData.searchKeyword.toLowerCase())

});
