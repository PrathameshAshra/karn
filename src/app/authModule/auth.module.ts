import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './layout/layout-page.component';
import { DashboardComponent } from './dashboard/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../service/jwt_service';


@NgModule({
  declarations: [LayoutComponent,DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,

    AuthRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ]
})
export class AuthModule { }
