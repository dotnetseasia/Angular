import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SetupComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
   FormsModule,
   ReactiveFormsModule
  ]
})
export class SetupModule { }
