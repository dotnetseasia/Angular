import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }, 
  {
    path: 'user',
    component: LayoutComponent,
    children: [
      {
        path: 'setup',
        loadChildren: () => import('./features/setup/setup.module').then(m => m.SetupModule)
      },
      {
        path: 'properties',
        loadChildren: () => import('./features/properties/properties.module').then(m => m.PropertiesModule)
      },
      {
        path: 'leases',
        loadChildren: () => import('./features/leases/leases.module').then(m => m.LeasesModule)
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
