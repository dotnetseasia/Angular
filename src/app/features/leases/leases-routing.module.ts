import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { NewGuestCardComponent } from './new-guest-card/new-guest-card.component';
import { LeasesComponent } from './leases.component';
import { RentalApplicationsComponent } from './rental-applications/rental-applications.component';


const routes: Routes =[
    {
        path:'',
        component: LeasesComponent,
        children:  [
            {
                path: '',
                component: GuestCardComponent
            },
            {
                path: "guest_card",
                component: GuestCardComponent
            },
            {
                path: "new_guest_card",
                component: NewGuestCardComponent
            },
            {
                path: "rental_applications",
                component: RentalApplicationsComponent
            }
        ]    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeasesRoutingModule { }
