import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';


import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { SignupService } from './signup/signup.service';



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginComponent,
    SignupComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
  HttpClientModule
  
  ],
  providers: [LoginService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
