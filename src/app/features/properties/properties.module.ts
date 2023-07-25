import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { GuestCardComponent } from '../leases/guest-card/guest-card.component';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { ListingComponent } from './listing/listing.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { MortgageScheduleComponent } from './mortgage-schedule/mortgage-schedule.component';
import { IncreaseRentComponent } from './increase-rent/increase-rent.component';
import { ManageWorkOrderComponent } from './manage-work-order/manage-work-order.component';

@NgModule({
  declarations: [
    PropertiesComponent,
    ListingComponent,
    AddPropertyComponent,
    MortgageScheduleComponent,
    IncreaseRentComponent,
    ManageWorkOrderComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    PaginatorModule
  ]
})
export class PropertiesModule { }
