import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule,  } from '@angular/common/http';


import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { SignupService } from './signup/signup.service';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { HomepageComponent } from './homepage/homepage.component';

import { EquipmentinventoryComponent } from './equipmentinventory/equipmentinventory.component';
import { EventComponent } from './event/event.component';
import { FinincialreportsComponent } from './finincialreports/finincialreports.component';
import { InsurancereportsComponent } from './insurancereports/insurancereports.component';
import { IntendedprojectsComponent } from './intendedprojects/intendedprojects.component';
import { PoliciesComponent } from './policies/policies.component';
import { IncidentreportsComponent } from './incidentreports/incidentreports.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { CreateuserComponent } from './createuser/createuser.component';



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    HomepageComponent,
    IncidentreportsComponent,
    EquipmentinventoryComponent,
    EventComponent,
    FinincialreportsComponent,
    InsurancereportsComponent,
    IntendedprojectsComponent,
    PoliciesComponent,
    UserupdateComponent,
    CreateuserComponent
    
    
    
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
  HttpClientModule,
  MatPaginatorModule
  

  
  ],
  providers: [LoginService, SignupService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
