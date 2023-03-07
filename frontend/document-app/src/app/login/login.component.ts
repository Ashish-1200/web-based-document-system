import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false;

  onLogin(form:NgForm){
    if(form.invalid){
      alert("Invalid Login!")
      return;
    }
  }
}
