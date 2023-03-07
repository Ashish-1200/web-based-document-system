import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AbstractControl } from "@angular/forms";
import { Injectable } from '@angular/core';

@Injectable({ providedIn:"root"})


export class SignupService {
    matchPasswords(arg0: string, arg1: string): any {
      throw new Error('Method not implemented.');
    }

    constructor(private http: HttpClient, private router: Router) { }
  
    addUserForm(data: any) {
      console.log(data);
      this.router.navigate(['/login']);
      return this.http.post('http://localhost:4200/signup', data);
    }
  
    validateUsernameNotTaken(control: AbstractControl) {
      return this.checkUsernameNotTaken(control.value).pipe(
        map(res => res ? null : { usernameTaken: true })
      );
    }
  
    checkUsernameNotTaken(username: string) {
      return this.http.get<Array<any>>('http://localhost:4200/api/users/list')
        .pipe(
          map(users => users.filter(user => user.username === username)),
          map(users => !users.length)
        );
    }
  
    validateEmailNotTaken(control: AbstractControl) {
      return this.checkEmailNotTaken(control.value).pipe(
        map(res => res ? null : { emailTaken: true })
      );
    }
  
    checkEmailNotTaken(email: string) {
      return this.http.get<Array<any>>('http://localhost:4200/api/users/list')
        .pipe(
          map(users => users.filter(user => user.email === email)),
          map(users => !users.length)
        );
    }
  
  }