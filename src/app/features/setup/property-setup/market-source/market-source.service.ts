import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
const BaseUrl = environment.endpoint;
@Injectable({
  providedIn: 'root'
})
export class MarketSourceService {
  
  constructor(private httpclient:HttpClient) { }
  SaveMarketSource(data:any){
    debugger
    return this.httpclient.post<any>(BaseUrl+"MasterData/SaveMarketSource",data);
  }

  GetMarketSourceGrid(data:any){
    debugger 
    return this.httpclient.post<any>(BaseUrl+"MasterData/GetMarketSourceGrid",data);
  }

  deleteMarketSourceDataById(data:any){
    debugger
    return this.httpclient.delete(BaseUrl+"MasterData/deleteMarketSourceDataById"+"/"+data)
  }
  getMarketSourceDataById(id:any){
    debugger
    const url = BaseUrl+"MasterData/getMarketSourceDataByID"+"/"+id
    return this.httpclient.get(url)
  }
}
