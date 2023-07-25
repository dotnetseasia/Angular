import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanySetupService } from './company-setup.service';
import { HttpClient } from '@angular/common/http';
import { Observable ,map} from 'rxjs';
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
  selector: 'ms-company-setup',
  templateUrl: './company-setup.component.html',
  styleUrls: ['./company-setup.component.scss']
})

export class CompanySetupComponent  implements OnInit {
  UpdateForm:FormGroup;
  value!: string;
  value1:string;
  first: number = 0;
  rows: number = 10;
  country : any[];
  state:any[];
  city:any[];
  selectedCity: City | undefined;
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
}

  // constructor(private fb : FormBuilder, private router : Router) {
  //   this.changePass = this.fb.group({
  //     oldPass : "",
  //     newPass:"",
  //     confirmPass:""
  //   })
   //}

   
showHtml = false;

  toggleHtml() {
    this.showHtml = true;
  }
  showtoggleHtml(){
    this.showHtml = false;
  }
  ChangePassword(){
    this.router.navigateByUrl('/user/setup/company-setup/ChangePassword');

  }

constructor(private cs:FormBuilder, private css: CompanySetupService, private http: HttpClient ,private router :Router){
}
   
  ngOnInit() {
    this.UpdateForm = this.cs.group({
      Country: [''], 
      State: [''] ,
      City:[''],
      Zip:[''],
      Phone:[''],
      Companyname:[''],
      Address:[''],
      Website:[''],

    });
    this.css.GetAllCountries().subscribe(data => {
      this.country = data.map((item : any) => ({
        name : item.countryName,
        value : item.countryID
      
      }));
    });
    
  }

  onCountryChange(event :any){
  this.css.GetStatebyId(event.value).subscribe((data)=>{
  this.state=data.map((item:any) =>({
    statename:item.stateName,     
    value : item.stateId

    
  }));
});
}
onStateChange(event: any){


  this.css.GetCitybyStateID(event.value).subscribe((data)=>{
    this.city=data.map((item:any) =>({
      name:item.cityName
    }));
  });
}
onallcountries(){
  
 
}
}






