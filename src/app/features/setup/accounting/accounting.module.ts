import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingComponent } from './accounting.component';
import { AccountingRoutingModule } from './accounting.routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    AccountingComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    PaginatorModule,
    TableModule,
    DropdownModule
  ]
})
export class AccountingModule { }

interface PageEvent {
 
}
