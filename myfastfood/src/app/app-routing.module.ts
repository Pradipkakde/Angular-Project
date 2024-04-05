import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { RestaurantItemsComponent } from './Pages/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from './Pages/create-order/create-order.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'foodcategory',component:CategoriesComponent
  },
  {
    path:'restaurant-itmes',component:RestaurantItemsComponent
  },
  {
    path:'create-order',component:CreateOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
