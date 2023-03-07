import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 {path:'signup',component:SignupComponent},
 {path:'login',component:LoginComponent},
 {path:"map",component:MainpageComponent},
 {path:"reactiveforms",component:ReactiveFormsModule},
 
 


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
