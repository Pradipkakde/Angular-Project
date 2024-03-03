import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { SharedModule } from 'src/common/shared/shared.module';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OwnerLandingComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class OwnerModule { }
