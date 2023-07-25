import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties.component';
import { ListingComponent } from './listing/listing.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { MortgageScheduleComponent } from './mortgage-schedule/mortgage-schedule.component';
import { IncreaseRentComponent } from './increase-rent/increase-rent.component';
import { ManageWorkOrderComponent } from './manage-work-order/manage-work-order.component';

const routes: Routes = [ {
  path: '',
  component: PropertiesComponent,
  children:[
    {
      path: 'list',
      component: ListingComponent
    },
    {
      path: 'addProperty',
      component: AddPropertyComponent
    },
    {
      path: 'mortgageSchedule',
      component: MortgageScheduleComponent
    },
    {
      path: 'increaseRent',
      component: IncreaseRentComponent
    },
    {
      path: 'manageWorkOrder',
      component: ManageWorkOrderComponent
    }
  ],

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }