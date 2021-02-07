import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import {UserService  } from "../../service/user.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

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
  UserModel: UserModel = new UserModel()
   helper = new JwtHelperService();

  constructor(
    private userService :UserService,
    private router: Router
  ){

  }
login(){
  this.UserModel.email = this.email
  this.UserModel.password = this.password
  this.UserModel.username = "this.password"
  this.userService.createUser(this.UserModel).subscribe(
    (data: any) => {
      console.log(data.token)
      localStorage.setItem('auth-token',data.token)
      this.router.navigateByUrl("dashboard")

    }
  )
}

  ngOnInit() {
  }

}
