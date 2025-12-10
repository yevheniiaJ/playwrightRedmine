import config from '../playwright.config.js'
export class BasePage {

    constructor(page) {
        this.page = page;
        this.book = page.locator(`//table[@class='wiki-class-noborder']//tr[1]/td[1]`)
    }

    async goto() {
        await this.page.goto(`${config.baseURL}`)
    }

    async click(locator) {
       
        await locator.click({ force: true });
    }

    async redmineBooksNavigate() {
        await this.book.click()
    }
}
