import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeeManagementComponent } from './fee-management.component';

const routes: Routes = [{
  path:"fee",
  component: FeeManagementComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeManagementRoutingModule { }
