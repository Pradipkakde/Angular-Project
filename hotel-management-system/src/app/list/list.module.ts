import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { HoteldataComponent } from './hoteldata/hoteldata.component';


@NgModule({
  declarations: [
    HoteldataComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
