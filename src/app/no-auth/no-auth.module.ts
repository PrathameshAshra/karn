import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoAuthRoutingModule } from './no-auth-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [LandingPageComponent, LoginScreenComponent,],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    NoAuthRoutingModule,
    MatButtonModule
  ]
}) 
export class NoAuthModule { }
