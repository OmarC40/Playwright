import { expect, Page, test } from "@playwright/test";
let facebookpage: Page;
test("Interact with one tab", async ({ page }) => {

    await page.goto("https://www.testmu.ai/selenium-playground/window-popup-modal-demo/");

    //console.log(page.url); //esta raro ya que no regresa el url dice regresa la funcion
    
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("//a[normalize-space(text())='Follow On Twitter']")
    
    ])
    console.log(newWindow.url());
    //newWindow.fill("","")

})

test("Interact with multiple tabs", async ({ page }) => {

    await page.goto("https://www.testmu.ai/selenium-playground/window-popup-modal-demo/");
    await page.waitForLoadState();
    console.log(page.url)
    
    const [multiTabs] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("//a[normalize-space(text())='Follow Twitter & Facebook']")
    
    ])
    await multiTabs.waitForLoadState();




    const tabs = multiTabs.context().pages();

    console.log("No of tabs "+tabs.length);
    tabs.forEach(tab=>{
        console.log(tab.url())
    })


    for (let index = 0; index < tabs.length; index++) {
        const url=tabs[index].url()
        if(url=="https://www.facebook.com/lambdatest/")
            facebookpage=tabs[index]
    }

    const text = await facebookpage.textContent("locator")
    console.log("texto")


    await tabs[1].fill("","");

    

})