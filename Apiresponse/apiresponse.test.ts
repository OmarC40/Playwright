import { test } from "@playwright/test";

test("Read API response", async ({ page }) => {
    await page.goto("https://letcode.in/elements");
   


    const [response] = await Promise.all([
        page.waitForResponse(res =>
            res.status() == 200
            &&
            res.url() == "https://api.github.com/users/OmarC40"
            &&
            res.body().then(b => {
                console.log(b);
                return b.includes("OmarCuarenta")
            })
        ),
        page.fill("input[name='username']", "OmarC40"),
        page.getByText('Search').click()
    ])
    console.log(await response.json());

})