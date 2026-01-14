import {expect, test} from "@playwright/test"

test.skip("Interctions with inputs",async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message")
    //await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"))
    //const messageFirstValue = page.locator("//input[@id='sum1']")
    //console.log(await messageFirstValue.getAttribute("placeholder"))
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")
    console.log('Before entering data '+await messageInput.inputValue())
    await messageInput.type("Hi Omar")
    console.log('After entering data '+await messageInput.inputValue())
})

test("Sum",async ({page})=>{
    await await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sumInput1 = page.locator("(//input[@id='sum1'])[1]")
    const sumInput2 = page.locator("(//input[@id='sum2'])[1]")
    const getValuesBtn = page.locator("(//button[@type='button'])[2]")
    let num1=123;
    let num2=456;
    await page.waitForTimeout(20000);
    await sumInput1.type(String(num1));
    await expect(sumInput1).toHaveValue("123")
    await page.waitForTimeout(2000);
    await sumInput2.type(String(num2));
    await page.waitForTimeout(2000);
    await expect(sumInput1).toHaveValue(String(num1))
    await expect(sumInput2).toHaveValue(String(num2))
    await getValuesBtn.click()
    const result = page.locator("#addmessage")
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    console.log(result)
    expect(result).toHaveText("" + expectedResult)

})