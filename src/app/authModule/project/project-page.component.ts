import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ProjectService } from 'src/app/service/project.service';
import { UserModel  } from "../../models/user.model";
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectComponent implements OnInit {
  
  constructor(
    private userService: UserService,
    private projectService:ProjectService
  ) { }


async  ngOnInit() {
  }  

}
