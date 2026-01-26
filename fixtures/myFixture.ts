import { test as myTest } from "@playwright/test";

// type omar = {
//     age: number,
//     email: string
// }

const myFixtureTest = myTest.extend<{
    age: number,
    email: string
}>({
    age: 26,
    email:"omar40@gmail.com"
})

export const test = myFixtureTest;