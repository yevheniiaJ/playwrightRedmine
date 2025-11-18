export class ProjectManagement {

    constructor(page) {

        this.page = page;
        this.ProjectManagementTitle = page.locator(`//span[@class='category-content-results-header-title']`)
    }

}