import { test, expect } from '@playwright/test';

test("Frames",async ({page})=>{
    await page.goto("https://letcode.in/frame")
    const allframes=page.frames();
    console.log("No of frames "+allframes.length)
 
})