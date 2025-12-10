import { BasePage } from '../pages/basePage.js'

export class ProjectManagement extends BasePage {

    constructor(page) {

        super(page)
        this.projectManagementTitle = page.locator(`//span[@class='category-content-results-header-title']`)
    }

}