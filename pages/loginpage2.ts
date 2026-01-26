import { Page, Locator } from '@playwright/test';

export class LoginPage {
  
   emailInput: Locator;
   passwordInput: Locator;
   loginButton: Locator;
   errorMessage: Locator;

  constructor(public page: Page) {
    this.emailInput = page.locator('#input-email');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.alert-danger');
  }

//Métodos 
  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  //Acción compuesta
  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
