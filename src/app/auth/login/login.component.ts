import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginService } from 'src/app/auth/login/login.services';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
rememberMe: boolean;


  constructor(private fb : FormBuilder, private router : Router, private _login : loginService, private messageService : MessageService) {
    this.loginForm = this.fb.group({
      loginId : "",
      password : ""
    });
    this.rememberMe = false;

   }

  ngOnInit(): void {
    const storedCredentials = localStorage.getItem('credentials');
    if (storedCredentials) {
      this.loginForm.setValue(JSON.parse(storedCredentials));
      this.rememberMe = true;
  }
}

  submitForm(){
    console.log("checkLogin", this.loginForm.value);
    this._login.Login(this.loginForm.value).subscribe(data => {
      console.log("Login Credentials", data);
      
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("email", data.email);
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
        localStorage.setItem("token", data.token);

        if(data.token == "Invalid")
        {
          console.log("User Invalid", data.token);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Credentials' });
        }
        else{
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successful' });
          setTimeout(() => {
            this.router.navigateByUrl('/user/setup');
          }, 500);
        }

    });
  }
  onCancel(){
    this.loginForm.reset();
  }
}
