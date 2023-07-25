import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { NewGuestCardComponent } from './new-guest-card/new-guest-card.component';
import { LeasesRoutingModule } from './leases-routing.module';
import { LeasesComponent } from './leases.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LeasesService } from './leases.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RentalApplicationsComponent } from './rental-applications/rental-applications.component';

@NgModule({
  declarations: [
    GuestCardComponent,
    NewGuestCardComponent,
    LeasesComponent,
    RentalApplicationsComponent,
  ],
  imports: [
    CommonModule,
    LeasesRoutingModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    PaginatorModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers : [
    LeasesService
  ]
})
export class LeasesModule { }
