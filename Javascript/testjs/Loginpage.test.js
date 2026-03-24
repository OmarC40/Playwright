import {test,expect} from '@playwright/test'
import {Loginpage} from '../objects/loging'


test('Login principal de la pagina',async({page})=>{
    const loginpage=new Loginpage(page)
    await page.goto('www.google.com')
    await loginpage.login('omar','12345132')
    await expect(loginpage.inpuusername).toBeVisible()
    await expect(loginpage.inputpassword).toBeVisible()
    
})