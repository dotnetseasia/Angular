import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanySetupService } from '../company-setup.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { loginService } from 'src/app/auth/login/login.services';
import { LoginComponent } from 'src/app/auth/login/login.component';


@Component({
  selector: 'ms-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  ngOnInit(): void {
    this.changePass = this.fb.group(
      // {
      // serId:"1",
      // password:"",
      // newPassword:""  }
      
      {
        UserId:156,
        Password: "",
        newPassword: ""





      }
    )
  }

  changePass: FormGroup


  constructor(private fb: FormBuilder, private css: CompanySetupService, private http: HttpClient ,private router: Router) {
  }
   ChangePassword(changePass: any) {
    let Data = this.changePass.value;
    this.css.ChangePassword(Data).subscribe(() => {});
    this.changePass.reset();
    debugger
password:""

  }

}

