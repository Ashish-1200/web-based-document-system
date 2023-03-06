import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-based-document-system';
  sideBarOpen = true;


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  onButtonClick() {
    console.log('Button clicked');
  }
  }

  