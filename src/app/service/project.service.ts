import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConfig } from '../_config/api.config';
import { UserModel } from '../models/user.model';

import { Observable } from 'rxjs';
import { ComponentModel, ProjectModel, TypeOfProjectModel } from '../models/project.model';
@Injectable({
    providedIn: 'root'
  })
  export class ProjectService { 
    public apiUrl: string;

    AppConfig: AppConfig = new AppConfig();
    ProjectModel:ProjectModel = new ProjectModel()
    ComponentModel:ComponentModel = new ComponentModel()
    TypeOfProjectModel:TypeOfProjectModel = new TypeOfProjectModel()
    constructor(private httpClient: HttpClient,
        private route: Router) {
            this.apiUrl = this.AppConfig.apiUrl
        }

   
    public createProject(projectModel: ProjectModel):any{
        return this.httpClient.post<any>(this.apiUrl+'project/',projectModel)
    }
    public createComponent(componentModel: ComponentModel):any{
        return this.httpClient.post<any>(this.apiUrl+'project/component',componentModel)
    }
    public projectByUserId(userId:string):any{
        return this.httpClient.get<any>(this.apiUrl+'project/me/'+userId)
    }
    public listOfTypes():any{
        return this.httpClient.get<any>(this.apiUrl+'project/type/')
    }
    public createTypeOfProject(typeOfProjectModel:TypeOfProjectModel):any{
        return this.httpClient.post<any>(this.apiUrl+'project/type/',typeOfProjectModel)
    }

    

} 