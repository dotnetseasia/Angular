import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BaseUrl = environment.endpoint;
@Injectable({
  providedIn: 'root'
})
export class CompanySetupService {

  constructor(private http: HttpClient) { }


 ChangePassword(changePass : any){
  return this.http.post(BaseUrl + 'User/ChangePassword', changePass)
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
