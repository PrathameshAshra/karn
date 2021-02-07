import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConfig } from '../_config/api.config';
import { UserModel } from '../models/user.model';

import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class UserService { 
    public apiUrl: string;

    AppConfig: AppConfig = new AppConfig();
    UserModel:UserModel = new UserModel()
    
    constructor(private httpClient: HttpClient,
        private route: Router) {
            this.apiUrl = this.AppConfig.apiUrl
        }

   
    public createUser(UserModel: UserModel):any{
        return this.httpClient.post<any>(this.apiUrl+'user/signup',UserModel)
    }
    public login(UserModel: UserModel):any{
        return this.httpClient.post<any>(this.apiUrl+'user/login',UserModel)
    }
    public me():any{
        return this.httpClient.get<any>(this.apiUrl+'user/me')
    }
    public getToken() {
        return localStorage.getItem('auth-token' );
      }
    

} 