import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProjectCardComponent } from './project-card/project-card.component';


@NgModule({
  declarations: [ProjectCardComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    ProjectCardComponent
  ]
})
export class SharedModule { }
