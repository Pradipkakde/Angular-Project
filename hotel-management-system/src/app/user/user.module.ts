import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/common/shared/shared.module';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserLandingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UserModule { }
