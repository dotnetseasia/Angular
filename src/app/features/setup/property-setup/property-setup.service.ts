import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertySetupService {

constructor(private http: HttpClient) { }

 //summary 
 // To get property area on area name dropdown based on status
  getPropertyAreaName(statusvalue:any):Observable<any>
  {
    return this.http.get<any>(`https://localhost:44321/api/MasterData/GetPropertyAreaName?status=${statusvalue}`)
  }

  //summary
  // To get manager name on regional manager dropdown on save/edit button
  getRegionalManagerdata():Observable<any>
  {
    return this.http.get<any>(`https://localhost:44321/api/MasterData/GetAllRegionalManager`)
  }

  // summary
  // 
  assignAreaData(id:any){
    return this.http.get<any>(`https://localhost:44321/api/MasterData/GetAssignedProperty?PropertyAreaid=${id}`)
  }

// summary
// To get active properties on Available Active Properties box
  assignActiveAreaData()
  {
    return this.http.get<any>(`https://localhost:44321/api/MasterData/GetAssignedProperty`)
  }

// summary
// To get area details based on area Id on edit button
  GetPropertyAreaById(id:any)
  {
    return this.http.get<any>(`https://localhost:44321/api/MasterData/GetPropertyAreaById?PropertyAreaid=${id}`)
  }  

  // summary
  // to add new property area on save button
  savePropertyAreadata(areaData: any)
   {
    const url = 'https://localhost:44321/api/MasterData/SavePropertyArea';
    return this.http.post(url, areaData)
  }
}

