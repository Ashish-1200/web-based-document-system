

import { Component, OnInit } from '@angular/core';

import {LoginService} from "./login.service";
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    Username: '',
    UserType: '',
    Password: ''
  };
  constructor( public loginService:LoginService , private http: HttpClient,private router: Router) { }
  


  isLoading = false;
  
  
 
  

  onLogin() {
    this.http.post<{ token: string }>('http://localhost:3000/users/login', this.loginData)
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/homepage']);
      }, error => {
        console.log(error);
      });
  
}
  ngOnInit(): void {
    
  }
}