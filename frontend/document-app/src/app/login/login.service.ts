import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { loginData } from "./login.model";

import { MatSnackBar } from "@angular/material/snack-bar";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })


export class LoginService {
  
  private authStatusListener = new Subject<boolean>();
  userIsAuthenticated=false;
  
  tokenresp: any;
  private _updatemenu= new Subject<void>();


  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) { }

 
  get updatemenu(){
    return this._updatemenu;
  }
  private token : any;

  loginUser(Username: string, Password: string, UserType : string) {
    const LoginData: loginData = { Username: Username, Password: Password, UserType: UserType }
    this.http.post<{ token: string }>("http://localhost:3000/users/login", LoginData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        localStorage.setItem('token', response.token);

        this.router.navigate(['/homepage']);
        window.location.assign("/homepage");

        this._snackBar.open('Logged In!', '', {
          verticalPosition: 'top',
          panelClass: 'edit'
        })
      });
  }

  
  getauthStatusListener(){
    return this.authStatusListener.asObservable();

  }

  

  getID() {
    return localStorage.getItem('_id');
  }

  getToken(){

    return localStorage.getItem('token')  || '';
    }

  GetRolebyToken(token: any) {
    let _token = token.split('.')[1];
    this.tokenresp = JSON.parse(atob(_token))
    console.log(this.tokenresp);
    let user = this.tokenresp._id
    let name = this.tokenresp.Firstname
    let last = this.tokenresp.Lastname
    let role = this.tokenresp.UserType
    localStorage.setItem('_id', user); //Stores current user token in the local storage
    localStorage.setItem('Firstname', name);
    localStorage.setItem('Lastname', last);
    localStorage.setItem('UserType',role);
    return this.tokenresp.UserType;
  }
}
