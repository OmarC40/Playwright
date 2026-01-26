import { test as myTest } from "@playwright/test";

// type omar = {
//     age: number,
//     email: string
// }

const myFixtureTest = myTest.extend<{
    age: number,
    email: string
}>({
    age: 27,
    email:"koushik350@gmail.com"
})

export const test = myFixtureTest;