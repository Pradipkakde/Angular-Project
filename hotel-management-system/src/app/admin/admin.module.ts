import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/common/shared/shared.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminLandingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
