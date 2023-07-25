import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
const BaseUrl =environment.endpoint;
@Injectable({
  providedIn: 'root'
})
export class LeasesService {

  constructor(private http: HttpClient) {}
  getleasesAgents() {
    return this.http.get('https://localhost:44321/api/GuestAndRent/GetLeasingAgent')
      .pipe(map((data: any) => { return data; }));
  }
  getGuestCardGrid(data : any) {
    return this.http.post('https://localhost:44321/api/GuestAndRent/GetGuestCardGrid',data)
      .pipe(map((data: any) => { return data; }));
  }
  getMarketsources() {
    return this.http.get('https://localhost:44321/api/User/GetAllMarket')
      .pipe(map((data: any) => { return data; }));
  }
  getetStatesByCountryId(countryId : any) {
    debugger;
    return this.http.post('https://localhost:44321/api/GuestAndRent/GetStatesByCountryId?countryId=' + countryId, countryId)
      .pipe(map((data: any) => { return data; }));
  }
  getAreas() {
    return this.http.get('https://localhost:44321/api/GuestAndRent/GetPropertyArea')
      .pipe(map((data: any) => { return data; }));
  }
  getOperatingUnitTypeByText() {
    return this.http.get('https://localhost:44321/api/GuestAndRent/GetOperatingUnitTypeByText')
      .pipe(map((data: any) => { return data; }));
  }
  getBedRoomBathroomsByText() {
    return this.http.get('https://localhost:44321/api/GuestAndRent/GetBedRoomBathroomsByText')
      .pipe(map((data: any) => { return data; }));
  }
  getBedRoomBathroomsData() {
    return this.http.get('https://localhost:44321/api/GuestAndRent/GetBedRoomBathroomsData')
      .pipe(map((data: any) => { return data; }));
  }
  GetAllCountries() {
    return this.http.get<any[]>(BaseUrl + 'Property/GetAllCountries')
  }
  GetStatebyId(id:any){
    
    return this.http.get<any[]>(BaseUrl +`Property/GetStatesByCountryId?countryId=${id}` )
  }
  GetCitybyStateID(id:any){
    return this.http.get<any[]>(BaseUrl + `Home/GetCitiesByStateId?StateId=${id}`)
    
  }
}
