import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetingComponent } from './budgeting.component';

const routes: Routes = [{
  path:"budgeting",
  component: BudgetingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetingRoutingModule { }
