import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoteldataComponent } from './hoteldata/hoteldata.component';

const routes: Routes = [
  {
    path:'',component:HoteldataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
