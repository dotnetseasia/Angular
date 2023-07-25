import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertySetupComponent } from './property-setup.component';
import { PropertyTypeComponent } from './property-type/property-type.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { AreaComponent } from './area/area.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CreditCheckUserSetupComponent } from './credit-check-user-setup/credit-check-user-setup.component';
import { EarlyMoveInBonusComponent } from './early-move-in-bonus/early-move-in-bonus.component';
import { EmployeePositionComponent } from './employee-position/employee-position.component';
import { EquipmentTypeComponent } from './equipment-type/equipment-type.component';
import { IncentiveComponent } from './incentive/incentive.component';
import { MarketAreaComponent } from './market-area/market-area.component';
import { MarketSourceComponent } from './market-source/market-source.component';
import { OperatingUnitTypeComponent } from './operating-unit-type/operating-unit-type.component';
import { RegionalSitesComponent } from './regional-sites/regional-sites.component';
import { SpecialTypeOfProspectComponent } from './special-type-of-prospect/special-type-of-prospect.component';
import { UnitStatusComponent } from './unit-status/unit-status.component';
import { VacateReasonComponent } from './vacate-reason/vacate-reason.component';


const routes: Routes = [{
  path: "",
  component: PropertySetupComponent,
  children: [
    {
      path: "property-type",
      component: PropertyTypeComponent
    },
    {
      path: "amenities",
      component: AmenitiesComponent
    },
    {
      path: "area",
      component: AreaComponent
    },
    {
      path: "checklist",
      component: CheckListComponent
    },
    {
      path: "credit-checkuser-setup",
      component: CreditCheckUserSetupComponent
    },
    {
      path: "early-movein-bonus",
      component: EarlyMoveInBonusComponent
    },
    {
      path: "employee-position",
      component: EmployeePositionComponent
    },
    {
      path: "equipment-type",
      component: EquipmentTypeComponent
    },
    {
      path: "incentive",
      component: IncentiveComponent
    },
    {
      path: "market-area",
      component: MarketAreaComponent
    },
    {
      path: "market-source",
      component: MarketSourceComponent
    },
    {
      path: "operating-unit-type",
      component: OperatingUnitTypeComponent
    },
    {
      path: "regional-sites",
      component: RegionalSitesComponent
    },
    {
      path: "special-type-of-prospect",
      component: SpecialTypeOfProspectComponent
    },
    {
      path: "unit-status",
      component: UnitStatusComponent
    },
    {
      path: "vacate-reason",
      component: VacateReasonComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertySetupRoutingModule { }
