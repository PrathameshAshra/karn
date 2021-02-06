import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';


const routes: Routes = [
  {
    path:'',component:LandingPageComponent
  },
  {
    path:'sign-in',component:LoginScreenComponent
  }, 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoAuthRoutingModule { }
