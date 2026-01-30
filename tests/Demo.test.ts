import { test, expect } from "@playwright/test";

test("Interctions with inputs", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

  const messageInput = page.locator("input#user-message");
  console.log(await messageInput.getAttribute("placeholder"));

  await expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");

  console.log("Before entering data " + (await messageInput.inputValue()));
  await messageInput.type("Hi Omar");
  console.log("After entering data " + (await messageInput.inputValue()));

  await page.locator("#showInput").click();
  await expect(page.locator("#message")).toHaveText("Hi Omar");
});

test("Sum", async ({ page }) => {
  await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/", { waitUntil: "domcontentloaded" });

  const sumInput1 = page.locator("#sum1");
  const sumInput2 = page.locator("#sum2");
  const getValuesBtn = page.locator("(//button[@type='button'])[2]")

  let num1 = 123;
  let num2 = 456;

  await sumInput1.type(String(num1));
  await expect(sumInput1).toHaveValue(String(num1));

  await sumInput2.type(String(num2));
  await expect(sumInput2).toHaveValue(String(num2));

  await getValuesBtn.click();

  const sumResult = page.locator("#addmessage");
  let expectedResult = String(num1 + num2);

  console.log(await sumResult.textContent());
  await expect(sumResult).toContainText(expectedResult);
});

test("Alert", async ({ page }) => {
   await page.goto("https://testpages.herokuapp.com/pages/basics/alerts-javascript/");

  page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);
    await alert.accept();
  });

  await page.locator("//button[@id='alertexamples']").click();
});

test("Alert message", async ({ page }) => {
   await page.goto("https://testpages.herokuapp.com/pages/basics/alerts-javascript/");

  page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);
    await alert.dismiss();
  });

  await page.locator("//button[@id='confirmexample']").click();
  await expect(page.locator("//p[@id='confirmreturn']")).toContainText("false");
});

test("Alert Input", async ({ page }) => {
   await page.goto("https://testpages.herokuapp.com/pages/basics/alerts-javascript/");

  page.on("dialog", async (alert) => {
    const text = alert.defaultValue();
    console.log(text);
    await alert.accept("Omar");
  });

  await page.locator("//button[@id='promptexample']").click();
  await expect(page.locator("//p[@id='promptreturn']")).toContainText("Omar");
});

test("Frames", async ({ page }) => {
  await page.goto("https://letcode.in/frame");

  const allFrames = page.frames();
  console.log("No of frames " + allFrames.length);

  const frame = page.frameLocator("#firstFr");
  await frame.locator("input[name='fname']").fill("omar");
  await frame.locator("input[name='lname']").fill("cuarenta");
  await expect(frame.locator("p.has-text-info")).toContainText("You have entered");

  const innerFrame = frame.frameLocator("iframe[src*='inner']");
  const emailInput = innerFrame.locator("input[placeholder='Enter email']");
  await expect(emailInput).toBeVisible();
  await emailInput.fill("ocuarenta@gmail.com");
  await expect(emailInput).toHaveValue("ocuarenta@gmail.com");
});

test("Download and Upload", async ({ page }) => {
  await page.goto("https://www.testmu.ai/selenium-playground/generate-file-to-download-demo/");

  await page.type("#textbox", "Hola omar esto es una prueba");
  await page.locator("#create").click();

  const downloadArr = await Promise.all([
    page.waitForEvent("download"),
    page.click("id=link-to-download"),
  ]);

  const fileName = downloadArr[0].suggestedFilename();
  await downloadArr[0].saveAs(fileName);

  const filePath = await downloadArr[0].path();
  console.log(filePath);

  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

  const [uploadFiles] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.click("input[type='file']"),
  ]);

  console.log(uploadFiles.isMultiple());
  await uploadFiles.setFiles(fileName);

  await expect(page.locator("tbody.files")).toContainText(fileName);

  await page.waitForTimeout(3000);
});
//npx playwright test --ui