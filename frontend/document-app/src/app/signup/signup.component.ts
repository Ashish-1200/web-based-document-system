import { Component, OnInit } from '@angular/core';

import { SignupService } from './signup.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  hide = true;
  form = new FormGroup({
    Username: new FormControl('', Validators.required, this.signupService.validateUsernameNotTaken.bind(this.signupService)),
    Firstname: new FormControl('', Validators.required),
    Lastname: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required, this.signupService.validateEmailNotTaken.bind(this.signupService)),
    Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    Requestedrole: new FormControl('', Validators.required)
  });

  constructor(public signupService: SignupService, private http: HttpClient) {}

  SaveData() {
    if (this.form.invalid) return;

    this.signupService.addUserForm(this.form.value)
      .subscribe((result) => {
        this.form.reset({});
        console.log(result);
      });
  }

  ngOnInit() {}

}

