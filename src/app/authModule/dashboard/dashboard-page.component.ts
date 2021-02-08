import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ProjectService } from 'src/app/service/project.service';
import { UserModel  } from "../../models/user.model";
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardComponent implements OnInit {
  ListOfProject = []
  UserModel: UserModel = new UserModel()
  constructor(
    private userService: UserService,
    private projectService:ProjectService
  ) { }


  async getLoggedInUser(){
  this.userService.me().subscribe(
   async (loggedInUser: any)=>{
      this.UserModel = await loggedInUser
      this.getProjectsByUserId()
    }
  )
}

async getProjectsByUserId(){
  this.projectService.projectByUserId(this.UserModel._id).subscribe(
    async  (listOfProject: any) =>{
      this.ListOfProject =await listOfProject
console.log(listOfProject)
    }
  )
}
async  ngOnInit() {
  this.getLoggedInUser()
  }  

}
