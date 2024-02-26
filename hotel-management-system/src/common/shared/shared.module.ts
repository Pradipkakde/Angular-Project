import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../components/signup/signup.component';
import { SigninComponent } from '../components/signin/signin.component';
import { LandingComponent } from '../components/landing/landing.component';



@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    LandingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SignupComponent,
    SigninComponent,
    LandingComponent
  ]
})
export class SharedModule { }
