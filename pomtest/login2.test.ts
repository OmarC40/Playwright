import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage2';

test('Login exitoso', async ({ page, baseURL }) => {
  const login = new LoginPage(page);

  await page.goto(`${baseURL}route=account/login`);

 
  await expect(login.emailInput).toBeVisible();
  await expect(login.passwordInput).toBeVisible();
  await expect(login.loginButton).toBeEnabled();


  await login.login('test@test.com', 'password123');

 
  await expect(page).toHaveTitle('My Account');
});
