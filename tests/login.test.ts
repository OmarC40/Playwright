import {chromium, test} from "@playwright/test"

test("Login test demo",async()=>{

    const browser= await chromium.launch();
    const context= await browser.newContext();
    const page = await context.newPage();

    await page.goto("www.liverpool.com.mx");
    await page.hover("//*/span[contains(text(), 'My account')]")

})