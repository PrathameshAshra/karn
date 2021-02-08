import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard-page.component';
import { LayoutComponent } from './layout/layout-page.component';

import { ProjectComponent } from './project/project-page.component';
import { ProjectCreateComponent } from './projectCreateView/projectCreate.component';

import { ProjectAddComponent } from './project-add/project-add.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'project',
        component: ProjectComponent,
      },
      {
        path: 'project-create',
        component: ProjectCreateComponent,
      },{
        path: 'project-add',
        component: ProjectAddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
