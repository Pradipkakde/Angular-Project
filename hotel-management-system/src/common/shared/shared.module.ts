import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../common-component/signup/signup.component';
import { LandingComponent } from '../common-component/landing/landing.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from '../common-component/signin/signin.component';
import { NotfoundComponent } from '../common-component/notfound/notfound.component';


@NgModule({
  declarations: [
    SigninComponent, 
    LandingComponent,
     NotfoundComponent,
     SignupComponent,
    
     
   
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  exports:[
    SigninComponent,
    SignupComponent,
    MatButtonModule,   
    NotfoundComponent,
    
   
  ]
})
export class SharedModule { }
