import { Component } from '@angular/core';
import { LeasesService } from '../leases.service';
import { map } from 'rxjs';
interface City {
  name: string;
  code: string;
}
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'ms-new-guest-card',
  templateUrl: './new-guest-card.component.html',
  styleUrls: ['./new-guest-card.component.scss']
})
export class NewGuestCardComponent {
  constructor(private leasesService: LeasesService){}
  LeasingAgents: any = [];
  Marketsources: any = [];
  stateNames : any =[];
  operatingUnitType : any[];
  BedRoomBathroomsData : any[];
  city : any[];
  state : any[];
  country : any[];
  Areas : any[];
  BedRoomBathroomsbytext :any[];
  value!: string;
  first: number = 0;

  rows: number = 10;

  onPageChange(event: PageEvent) {
      this.first = event.first;
      this.rows = event.rows;
  }
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'Select', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
      this.getAllDropDowns();
  }
  
  getAllDropDowns(){
    this.leasesService.getleasesAgents().subscribe((results: any) => this.LeasingAgents = results);
    this.leasesService.getMarketsources().subscribe((results: any) => this.Marketsources = results);
    this.leasesService.getAreas().subscribe((results: any) => this.Areas = results);
    this.leasesService.getOperatingUnitTypeByText().subscribe((results: any) => this.operatingUnitType = results);
    this.leasesService.getBedRoomBathroomsByText().subscribe((results: any) => this.BedRoomBathroomsbytext = results);
    this.leasesService.getBedRoomBathroomsData().subscribe((results: any) => this.BedRoomBathroomsData = results);
    this.leasesService.GetAllCountries().subscribe(data => {
      this.country.map((item : any) => ({
      name : item.countryName,
      value : item.countryID
    
    }));
  });
}
  
onCountryChange(event :any){
  debugger
this.leasesService.GetStatebyId(event.value).subscribe((data)=>{
this.state=data.map((item:any) =>({
  statename:item.stateName,     
  value : item.stateId

  
}));
});
}
onStateChange(event: any){
  debugger
  this.leasesService.GetCitybyStateID(event.value).subscribe((data)=>{
    this.city=data.map((item:any) =>({
      name:item.cityName
    }));
  });
   


}
  getStates(countryId)
  {
    this.leasesService.getetStatesByCountryId(countryId).subscribe((results: any) => this.stateNames = results);

  }
}
