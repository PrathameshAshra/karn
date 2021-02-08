import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ProjectService } from 'src/app/service/project.service';
import { ProjectModel } from 'src/app/models/project.model';

@Component({ 
  selector: 'app-project-create',
  templateUrl: './projectCreate.component.html',
  styleUrls:  ['./projectCreate.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  ProjectModel :ProjectModel = new ProjectModel();
  panelOpenState = false;
  constructor(
    private userService: UserService,
    private projectService:ProjectService
  ) { }


async  ngOnInit() {
  }  

}
