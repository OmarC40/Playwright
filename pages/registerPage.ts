import {Page} from "@playwright/test"
export default class RegisterPage{

    constructor(public page:Page){

    }
    async enterFirstName(firstname : string){
        await this.page.locator("#input-firstname").type(firstname)
    }
    async enterLasttName(lastname : string){
        await this.page.locator("#input-lastname").type(lastname)
    }
    async entertEmail(email : string){
        await this.page.locator("#input-email").type(email)
    }
    async entertTelephone(telephone : string){
        await this.page.locator("#input-telephone").type(telephone)
    }
    async entertPassword(password : string){
        await this.page.locator("#input-password").type(password)
    }
    async entertConfirmPassword(confirmpassword : string){
        await this.page.locator("#input-confirm").type(confirmpassword)
    }

    async isSubcribeCheck(){
        return await this.page.locator("#input-confirm").isChecked()
    }

    async clickTermsCondition(){
        return await this.page.click("label[for='input-agree']")
    }

    async clickContinueRegister(){
        return await this.page.click("input[value='Continue']']")
    }
}