/*class LoginPage {

  constructor(page) {
    this.page = page
    this.usernameInput = page.locator('#username')
    this.passwordInput = page.locator('#password')
    this.loginButton = page.locator('#login')
  }

  async goto() {
    await this.page.goto('/login')
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username)
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password)
  }

  async clickLogin() {
    await this.loginButton.click()
  }

  async login(username, password) {
    await this.enterUsername(username)
    await this.enterPassword(password)
    await this.clickLogin()
  }

}*/

//
/*
class Loginpage{
  constructor(page){
    this.page=page
    this.inputpassword=page.locator('')
    this.inputusername=page.locator('')
    this.sumitbutton=page.locator('')
    

    this.emailaddress=page.getByPlaceholder('Email Address')
    this.passwordinput=page.getByPlaceholder('Enter your password')
    this.siginbutton=page.getByText('Sign In')
    this.forgotpasswordbutton=page.getByText('Forgot Password?')
    this.errormessage=page.getByText('Invalid email or password')
    this.welcomebackmessageh1=page.getByText('Welcome Back')
  } 

  async loginusername(username,password){
    await this.inputpassword.fill(password)
    await this.inputusername.fill(username)
    await this.sumitbutton.click()
    
    
  
  
  
  }

}*/

export class Loginpage{
  constructor(page){
    this.page=page
    this.inputname=page.locato('')
    this.inputpassword=page.getByText('')
    this.inpuusername=page.getByLabel('')
    this.inputemail=page.getByPlaceholder('')
    this.buttonlogin=page.getByText('')
  }

  async login(username,password){
    await this.inpuusername.fill(username)
    await this.password.fil(password)
    await this.buttonlogin.click()

  }
}


































