import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/common/components/landing/landing.component';
import { OwnerModule } from './owner/owner.module';

const routes: Routes = [
  {
    path:"",component:LandingComponent
  },
  {
    path:"",loadChildren:()=>import('./owner/owner.module').then(m=>m.OwnerModule)
  },
  {
    path:"",loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:"",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
