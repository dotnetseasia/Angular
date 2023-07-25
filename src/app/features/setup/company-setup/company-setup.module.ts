import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanySetupRoutingModule } from './company-setup-routing.module';
import { CompanySetupComponent } from './company-setup.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';







@NgModule({
  declarations: [
    CompanySetupComponent,
   ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    CompanySetupRoutingModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompanySetupModule { }
