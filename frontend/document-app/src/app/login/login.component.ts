
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from "./login.service";

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( public loginService:LoginService , private _snackBar:MatSnackBar) { }
  

  isLoading = false;
 
  
  
  

  onLogin(form: NgForm) {
    if (!form || form.invalid) {
      alert("Invalid Login!");
      return;
    }
    this.loginService.loginUser(form.value.Username,form.value.Password,form.value.UserType);
    this.loginService.updatemenu.next();
  //Prompted Error Message
  this._snackBar.open('Invalid!','',{
    verticalPosition:'top',
   // horizontalPosition:'center',
    panelClass:'edit'
  })

  }
  ngOnInit(): void {
    
  }
}
