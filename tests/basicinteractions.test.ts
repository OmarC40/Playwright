import {expect, test} from "@playwright/test"

test("Interctions",async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("//input[@placeholder='Please enter your Message']")
    console.log(await messageInput.getAttribute("placeholder"))
    const messageFirstValue = page.locator("//input[@id='sum1']")
    console.log(await messageFirstValue.getAttribute("placeholder"))
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")
})