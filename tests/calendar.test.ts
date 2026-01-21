import { expect, Page, test } from "@playwright/test";
import moment from "moment";

test("Calendar", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date= "1999-03-13"

    await page.fill("id=birthday", date)
    //document.getElementById("birthday").value 
    // esto lo podemos utilizar en la consola para poder obetener informacion 
    //en este caso para llenar el campo es un formato nos puede ayudar para saber que es lo que espera
    await page.waitForTimeout(3000);
})

test("Calendar Pick", async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/datepicker/");
    let date= "1999-03-13"

    const cal = page.frameLocator('[src*="default.html"]').locator('#datepicker')
    const prev = page.frameLocator('[src*="default.html"]').getByText('Prev')
    const next = page.frameLocator('[src*="default.html"]').getByText('Next')
    const day = page.frameLocator('[src*="default.html"]').getByText('17')
    const datepicker= page.locator("//div[@class='ui-datepicker-title']")

     let dateselected: string="March 2026"

    await cal.click()
    console.log(await datepicker.textContent())

    /*await cal.click()
    await prev.click()
    await day.click()*/

    

    await page.waitForTimeout(3000);


    
})

test.only("Calendar demo using moment", async ({ page }) => {
    //https://bbbootstrap.com/snippets/blue-themed-date-picker-date-range-and-week-number-61366925
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    await selectDate(12, "December 2017");

    await page.reload();

    await selectDate(5, "December 2023");

    await page.reload();

    await selectDate(2, "July 2022");


    await page.waitForTimeout(3000)



    async function selectDate(date: number, dateToSelect: string) {
        await page.click("//input[@placeholder='Start date']")

        const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

        // let dateToSelect: string = "May 2019";
        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore(); // regresa un valor booleano
        console.log("this month? " + thisMonth);
        while (await mmYY.textContent() != dateToSelect) {
            if (thisMonth) {
                await prev.click();
            } else {
                await next.click();
            }
        }
        await page.click(`//td[@class='day'][text()='${date}']`);
    }
})