import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './setup.component';

const routes: Routes = [ {
  path: '',
  component: SetupComponent,
  children:[
    {
      path: "company-setup",
      loadChildren: () => import('./company-setup/company-setup.module').then(m => m.CompanySetupModule)
    },
    {
      path: "property-setup",
      loadChildren: () => import('./property-setup/property-setup.module').then(m => m.PropertySetupModule)
    },
    {
      path: "accounting",
      loadChildren: () => import('./accounting/accounting.module').then(m => m.AccountingModule)
    },
    {
      path: "users",
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },
    {
      path: "vendor",
      loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule)
    },
    {
      path: "maintenance",
      loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule)
    },
    {
      path: "alerts",
      loadChildren: () => import('./alerts/alerts.module').then(m => m.AlertsModule)
    },
    {
      path: "events",
      loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
    },
    {
      path: "fee-management",
      loadChildren: () => import('./fee-management/fee-management.module').then(m => m.FeeModule)
    },
    {
      path: "budgeting",
      loadChildren: () => import('./budgeting/budgeting.module').then(m => m.BudgetingModule)
    },
    {
      path: "templates",
      loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule)
    },
    {
      path: "reporting",
      loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
