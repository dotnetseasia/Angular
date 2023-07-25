import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetingComponent } from './budgeting.component';
import { BudgetingRoutingModule } from './budgeting.routing.module';


@NgModule({
  declarations: [
    BudgetingComponent
  ],
  imports: [
    CommonModule,
    BudgetingRoutingModule
  ]
})
export class BudgetingModule { }
