import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [ProjectCardComponent],
  imports: [
    FormsModule,
    CommonModule,

    MatMenuModule,
    MatButtonModule,
    SharedRoutingModule,
    MatIconModule,
    MatFormFieldModule ,
    MatInputModule,
    MatExpansionModule,

  ],
  exports:[
    ProjectCardComponent,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule

    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedRoutingModule
  ],

})  
export class SharedModule { }
