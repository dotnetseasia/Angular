import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySetupComponent } from './company-setup.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
const routes: Routes = [{
  path:"company",
  component: CompanySetupComponent,
},
{
    path:"ChangePassword",
    component:ChangePasswordComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanySetupRoutingModule { }
