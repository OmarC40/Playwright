import {Page} from "@playwright/test"
export default class RegisterPage{

    constructor(public page:Page){

    }
    async enterFirstName(firstname : string){
        await this.page.locator("#input-firstname").type(firstname)
    }
    async enterLastName(lastname : string){
        await this.page.locator("#input-lastname").type(lastname)
    }
    async enterEmail(email : string){
        await this.page.locator("#input-email").type(email)
    }
    async enterTelephone(telephone : string){
        await this.page.locator("#input-telephone").type(telephone)
    }
    async enterPassword(password : string){
        await this.page.locator("#input-password").type(password)
    }
    async enterConfirmPassword(confirmpassword : string){
        await this.page.locator("#input-confirm").type(confirmpassword)
    }

    isSubcribeCheck(){
        return this.page.locator("#input-confirm")
    }

    async clickTermsCondition(){
        return await this.page.click("label[for='input-agree']")
    }

    async clickContinueRegister() { 
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click("input[value='Continue']")
        ])
    }
}