import { test, expect } from '@playwright/test';

test("Alert",async ({page})=>{
    await page.goto("https://testpages.herokuapp.com/pages/basics/alerts-javascript/");
    
    
    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text) ;  
        await alert.accept();
})
await page.locator("//button[@id='alertexamples']").click();
})

test("Alert message",async ({page})=>{
    await page.goto("https://testpages.herokuapp.com/pages/basics/alerts-javascript/");
    
    
    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text) ;  
        await alert.dismiss();
})
    await page.locator("//button[@id='confirmexample']").click();
    expect(page.locator("//p[@id='confirmreturn']")).toContainText("false")
})

test("Alert Input",async ({page})=>{
    await page.goto("https://testpages.herokuapp.com/pages/basics/alerts-javascript/");
    
    
    page.on("dialog", async (alert) => {
        const text = alert.defaultValue();
        console.log(text) ;  
        await alert.accept("Omar");
})
    await page.locator("//button[@id='confirmexample']").click();
    expect(page.locator("//p[@id='promptreturn']")).toContainText("Omar")
})


test("Modal alert", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click("//button[@data-target='#myModal']")
    await page.click("(//button[text()='Save Changes'])[1]")
})