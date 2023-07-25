import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private api_Url = 'https://localhost:44321/api';

  constructor(private http: HttpClient) { }

  InsertAmenity(user : any): Observable<any> {
    debugger;
    return this.http.post<any>(this.api_Url + '/MasterData/InsertAddAmenity', user);
  }

  GetChargeCode() : Observable<any>  {
    debugger
     return this.http.get(this.api_Url + '/ChargeCodePreference/GetChargeCode')
  }

  GetAmenity(user : any) : Observable<any>{
    debugger
    return this.http.post<any[]>(this.api_Url + '/MasterData/GetAmenities', user);
  }
}
