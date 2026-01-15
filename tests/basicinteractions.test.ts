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
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
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
    /*tenemos dos formas de llenar un formulario con type y fill segun la documentacion de playwright se debe de utilizar fill
    solo en caso donde se requiera el simular un teclado se utilizara type ya que fill borra todo y llena de golpe el campo
    mientras que type escribe letra por letra pero si hay algo escrito no lo borrara ocasionando posible error*/

})

test("Check box",async ({page})=>{
    await page.goto("https://www.testmu.ai/selenium-playground/checkbox-demo/");
    const singleCheckbox=page.locator("(//input[@type='checkbox'])[1]");
    expect(singleCheckbox).not.toBeChecked()
    await singleCheckbox.check()
    expect(singleCheckbox).toBeChecked()

    
})

/*notas finales para funciones o validaciones como las de check como vemos no tenemos una forma de validar que no esta seleccionada pero podemos negar por decirlo
asi la afirmacion con el NOT 
otro punto a remarcar aqui es que si queremos correr solo una prueba lo que podemos hacer es poner test.only para que corra solo esa pruebba
otra solucion que hemos utilizado es el skip*/