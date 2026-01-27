import { test } from '@playwright/test';

test("Login auth",async ({browser})=>{

    const context = await browser.newContext({
        storageState:"./auth.json"
    })
    const page = await context.newPage();
    //const ctxt = page.context()
    //ctxt.storageState()
    await page.goto("https://demoqa.com/login")
    await page.waitForTimeout(5000);
})