import {chromium, test} from "@playwright/test"
import { parentPort } from "node:worker_threads";

test("Login test demo",async()=>{

    const browser= await chromium.launch({
        headless:false
    });
    const context= await browser.newContext();//esta parte nos ayuda con lo que podriamos luego llamar porblemas con el cache ya que lo que hace es emepzar desde de cero y empezar un nuevo contexto
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    //await page.click("text=Login");
    await page.click("'Login'"); //con la commilla simple es equivalente a text = 
    await page.fill("//input[@id='input-email']","koushik350@gmail.com")
    await page.fill("//input[@id='input-password']","Pass123$")
    await page.click("//input[@value='Login']")

    await page.waitForTimeout(5000);

    const newContext = await browser.newContext()
    const page1 = await newContext.newPage();
    
    await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")

    await page1.waitForTimeout(5000)
})