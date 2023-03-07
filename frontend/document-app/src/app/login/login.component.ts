
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  
  constructor( public loginService:LoginService ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  onLogin(form: NgForm) {
    if (!form || form.invalid) {
      alert("Invalid Login!");
      return;
    }
  
  }

}
