import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertySetupComponent } from './property-setup.component';
import { PropertySetupRoutingModule } from './property-setup.routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { PropertyTypeComponent } from './property-type/property-type.component';
import { InputTextModule } from 'primeng/inputtext';
import { AmenitiesComponent } from './amenities/amenities.component';
import { AreaComponent } from './area/area.component';
import { MarketAreaComponent } from './market-area/market-area.component';
import { RegionalSitesComponent } from './regional-sites/regional-sites.component';
import { OperatingUnitTypeComponent } from './operating-unit-type/operating-unit-type.component';
import { IncentiveComponent } from './incentive/incentive.component';
import { VacateReasonComponent } from './vacate-reason/vacate-reason.component';
import { MarketSourceComponent } from './market-source/market-source.component';
import { CheckListComponent } from './check-list/check-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecialTypeOfProspectComponent } from './special-type-of-prospect/special-type-of-prospect.component';
import { DialogModule } from 'primeng/dialog';


import { HttpClientModule } from '@angular/common/http';
import { PropertySetupService } from './property-setup.service';




@NgModule({
  declarations: [
    PropertySetupComponent,
    PropertyTypeComponent,
    AmenitiesComponent,
    AreaComponent,
    MarketAreaComponent,
    RegionalSitesComponent,
    OperatingUnitTypeComponent,
    IncentiveComponent,
    VacateReasonComponent,
    MarketSourceComponent,
    CheckListComponent,
    SpecialTypeOfProspectComponent

  ],
  imports: [
    CommonModule,
    PropertySetupRoutingModule,
    PaginatorModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    HttpClientModule
  ],
  providers: [PropertySetupService],    
})
export class PropertySetupModule { }
