import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeManagementRoutingModule } from './fee-management.routing.module';
import { FeeManagementComponent } from './fee-management.component';


@NgModule({
  declarations: [
    FeeManagementComponent
  ],
  imports: [
    CommonModule,
    FeeManagementRoutingModule
  ]
})
export class FeeModule { }
