import { test,expect } from '@playwright/test';

test.describe("Login auth", ()=>{

    test("Http Authentication",async ({browser})=>{
        const context = await browser.newContext({
            httpCredentials:{
                username:"admin",
                password:"admin"
            }
        
        })
        const page = await context.newPage()
        page.goto("https://the-internet.herokuapp.com/basic_auth")
        const header = await page.locator("h3");
        if (header) {
            console.log(await header.textContent());
            expect(await header.textContent()).toBe("Basic Auth");
        }
    })
})