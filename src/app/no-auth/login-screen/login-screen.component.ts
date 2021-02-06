import { Component, OnInit } from '@angular/core';
import  {AuthService}  from '../../service/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  email: string ="";
  password: string  ="";
  showSignUpScreen: boolean = false;
  showForgotPasswordScreen:boolean = false;
constructor(public authService: AuthService){

}
  signup() {
    this.email.trim()
    this.password.trim()
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.email.trim()
    this.password.trim()
    this.authService.login(this.email, this.password);
    
    // this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
