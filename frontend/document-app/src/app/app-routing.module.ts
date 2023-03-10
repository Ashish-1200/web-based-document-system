import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
 {path:'signup',component:SignupComponent},
 {path:'login',component:LoginComponent},
 {path:"map",component:MainpageComponent},
 {path:"reactiveforms",component:ReactiveFormsModule},
 {path:'mainpage',component:MainpageComponent},
 {path:'homepage',component:HomepageComponent},
 {path:"create",component:CreateuserComponent},
 {path:"users",component:UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }


  
}
