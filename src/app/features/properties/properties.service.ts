import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const BaseUrl = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http : HttpClient) { }

  getPropertySummarybyCountryId(id : any){
    debugger
    return this.http.post(BaseUrl + 'Property/getPropertySummarybyCountryId', id)
  }
  getPropertyGrid(id : any){
    debugger
    return this.http.post(BaseUrl + 'Property/GetPropertyGrid', id)
  }

}
