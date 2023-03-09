import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor( private router: Router) { 
  
  } 

  pleaseLogin(){
    alert('Please Login or Sign Up to access');
  }

  login(){
    this.router.navigate(['/login']);
  }
}
