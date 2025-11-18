import config from '../playwright.config.js'

export class MainPage {

    constructor(page) {
        this.page = page;
        this.book = page.locator(`//table[@class='wiki-class-noborder']//tr[1]/td[1]`)
        this.buyNowBtn = page.locator(`//div[@class='product-page-rhs desktop']//*[@id="product-buy-now"]`)
        this.addSelectedToCart = page.locator(`//div[@class='product-total-card']/div[@class='product-total-card-footer']`)
        this.cartCount = page.locator(`//span[@class='header-cart-count']`)
        this.profile = page.locator(`//div[@class='header-user-account']`)
        this.yourOrder = page.locator(`//div[@class='header-dropdown-active-body'][1]/a[2]`)
        this.cartDeleteIcon = page.locator(`//div[@class='header-cart-dropdown-items-item-actions']//img[@alt='Remove from cart icon']`).first()
        this.cartIcon = page.locator(`//div[@class='header-cart-basket']`)
        this.projectManagement = page.locator(`//a[@href='/en-us/business-and-other/concept/project-management']`)
        this.searchField = page.locator(`//div[@id='quick-search']/form/input[@id='q']`)
        this.searchLinks = page.locator(`//a/span[@class='highlight token-0']`)
    }

    async goto() {
        await this.page.goto(`${config.baseURL}`)
    }
}