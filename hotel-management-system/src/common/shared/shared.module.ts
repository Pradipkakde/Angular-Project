import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../common-component/signin/signin.component';
import { SignupComponent } from '../common-component/signup/signup.component';
import { LandingComponent } from '../common-component/landing/landing.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
   
  ],
  exports:[
    SigninComponent,
    SignupComponent,
    LandingComponent,
    MatButtonModule

  ]
})
export class SharedModule { }
