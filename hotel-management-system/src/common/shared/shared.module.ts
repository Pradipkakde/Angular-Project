import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../common-component/signup/signup.component';
import { LandingComponent } from '../common-component/landing/landing.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from '../common-component/signin/signin.component';
import { NotfoundComponent } from '../common-component/notfound/notfound.component';
import { HotellistComponent } from '../common-component/hotellist/hotellist.component';



@NgModule({
  declarations: [
    SigninComponent, 
    LandingComponent,
     NotfoundComponent,
     SignupComponent,
     HotellistComponent
   
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
    HotellistComponent

  ]
})
export class SharedModule { }
