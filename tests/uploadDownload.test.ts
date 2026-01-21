import {test } from "@playwright/test";


test("Download", async ({ page }) => {
    await page.goto("https://www.testmu.ai/selenium-playground/generate-file-to-download-demo/")
    await page.type("#textbox", "Hola omar esto es una prueba");
    await page.locator('#create').click()
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])
    const fileName = download[0].suggestedFilename()
    await download[0].saveAs(fileName);
    
    const path = await download[0].path();
    console.log(path);

})