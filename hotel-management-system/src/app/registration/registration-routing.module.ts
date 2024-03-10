import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HotelformComponent } from './register/hotelform/hotelform.component';

const routes: Routes = [
  {
    path:'',component:RegisterComponent
  },
  {
    path:'',component:HotelformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
