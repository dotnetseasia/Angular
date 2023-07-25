import { Component } from '@angular/core';
import { PropertiesService } from '../properties.service';

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

interface PropertyList
{
  startRow: number,
  pageSize: number,
  sortColumnName: string,
  sortOrderBy: string,
  searchOperator: string,
  searchColumnName: string,
  keywordSearch: string,
  searchText: string,
  countryID: number,
  roleId: number,
  userId: number
}
interface GetPropertyGrid{
  StartRow:number,
    PageSize:number,
    SortColumnName:string,
    SortOrderBy:string,
    SearchOperator:string,
    SearchColumnName:string,
    KeywordSearch:string,
    SearchText:string,
    CountryID:number,
    PropertyStatus:string,
    ManagerIdList:string,
    StatusList:string,
    RegionalManagerIdList:string,
    StateID:number,
    CityID:number,
    PropertyAreaId:number,
    PropertyID:number
}



@Component({
  selector: 'ms-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {
  value!: string;
  first: number = 0;
  myValue:any;
  hideTbl : false;
  showTbl : true;

  rows: number = 10;

  onPageChange(event: PageEvent) {
      this.first = event.first;
      this.rows = event.rows;
  }
  cities: City[] | undefined;

  selectedCity: City | undefined;

  constructor(private propServices : PropertiesService){  }
  getPropertyList:PropertyList = {
      startRow:11,
      pageSize:10,
      sortColumnName:"StateName",
      sortOrderBy:"asc",
      searchOperator:"",
      searchColumnName:"",
      keywordSearch:"", 
     searchText:"",
      countryID:1,
      roleId:3,
      userId:817
  }
  getPropertyGrid:GetPropertyGrid = {
    StartRow:51,
    PageSize:50,
    SortColumnName:"NoofUnits",
    SortOrderBy:"asc",
    SearchOperator:"",
    SearchColumnName:"",
    KeywordSearch:"",
    SearchText:"",
    CountryID:0,
    PropertyStatus:"",
    ManagerIdList:"0",
    StatusList:"",
    RegionalManagerIdList:"",
    StateID:0,
    CityID:0,
    PropertyAreaId:0,
    PropertyID:0
  }

  ngOnInit() {
      // this.cities = [
      //     { name: 'Select', code: 'NY' },
      //     { name: 'Rome', code: 'RM' },
      //     { name: 'London', code: 'LDN' },
      //     { name: 'Istanbul', code: 'IST' },
      //     { name: 'Paris', code: 'PRS' }
      // ];

        this.propServices.getPropertySummarybyCountryId(this.getPropertyList).subscribe(Response => {
          this.myValue = Response;

        })
      }
      getPropertySummarybyCountryId(){
        this.propServices.getPropertyGrid(this.getPropertyGrid).subscribe(Response => {
          this.myValue = Response;
  });
}
}
