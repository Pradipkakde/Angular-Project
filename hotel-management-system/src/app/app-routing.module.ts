import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/common/common-component/home/home.component';
import { LandingComponent } from 'src/common/common-component/landing/landing.component';
import { NotfoundComponent } from 'src/common/common-component/notfound/notfound.component';
import { SigninComponent } from 'src/common/common-component/signin/signin.component';
import { SignupComponent } from 'src/common/common-component/signup/signup.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'landing',component:LandingComponent
  },
  {
    path:'signin',component:SigninComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'owner',loadChildren:()=>import('./owner/owner.module').then(m=>m.OwnerModule)
  },
  {
    path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
