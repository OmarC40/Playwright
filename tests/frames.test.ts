import { test, expect } from '@playwright/test';

test("Frames",async ({page})=>{
    await page.goto("https://letcode.in/frame")
    const allframes=page.frames();
    console.log("No of frames "+allframes.length)
    
    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("omar");
    await frame.locator("input[name='lname']").fill("cuarenta");

    expect(await frame.locator("p.has-text-info").textContent()).toContain("You have entered")

    /*el textcontent lo que hace es extraer todo el texto pero en esta forma ya que no sabemos que va contener el texto o con que se va llenar
    es por eso que hacemos una validacion parcial con tocontain ya que solo valida parcialmente el texto*/

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("ocuarenta@gmail.com")

    await frame.locator("input[name='fname']").fill("letcode");

    /* Esto es muy inetresante ya que previamente con cypress que es una herramienta que ultilizaba no se podia usar los iframes pero en este caso vemos que
    lo manejan de una forma mucho mas sencilla y en este caso es posible hasta en el contexto de etrar a iframes que estan adentro de otros  */

    // const myFrame = page.frame("firstFr")
    //  if (myFrame != null) {
    //      await myFrame.fill("", "")
    //  }
    // await myFrame?.fill("input[name='fname']", "omar")
    // await myFrame?.fill("input[name='lname']", "cuarenta")

    // expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")
    /*lo que aprendimos aqui con el signo de pregunta es hacer una validacion de si esta nuestro frame por eso nos dice que si bien podemos utlizar
    un if para la validadcion tambien se puede de esta forma*/

    await page.waitForTimeout(3000);

})