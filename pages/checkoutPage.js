import { BasePage } from "../pages/basePage.js"

export class CheckoutPage extends BasePage {

    constructor(page) {
        super(page)
        this.item = page.locator(`//div[@class='total-pay']`)


    }

}