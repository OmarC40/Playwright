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

test.only("Upload", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    //await page.setInputFiles("input[type='file']",["images/test.jpg","images/Multimedia (6).jpg"])

     const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(["images/test.jpg","images/Multimedia (6).jpg"])


    await page.waitForTimeout(5000);
    

})