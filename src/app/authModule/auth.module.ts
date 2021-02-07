import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './layout/layout-page.component';
import { DashboardComponent } from './dashboard/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectAddComponent } from './project-add/project-add.component';


@NgModule({
  declarations: [LayoutComponent,DashboardComponent, ProjectAddComponent],
  imports: [
    CommonModule,
    SharedModule,

    AuthRoutingModule
  ]
})
export class AuthModule { }
