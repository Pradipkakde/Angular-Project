import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../components/signup/signup.component';
import { SigninComponent } from '../components/signin/signin.component';
import { LandingComponent } from '../components/landing/landing.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    SignupComponent,
    SigninComponent,
    LandingComponent,
    MatButtonModule
  ]
})
export class SharedModule { }
